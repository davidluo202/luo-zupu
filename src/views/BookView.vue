<template>
  <div class="book-page min-h-screen flex flex-col items-center py-6 px-2">
    <h1 class="ink-title text-2xl font-bold tracking-widest mb-4">{{ isEn ? 'Ancient Scroll' : '族譜古卷' }}</h1>

    <!-- Page indicator -->
    <div class="text-xs mb-3" style="color: var(--ink-light); font-family: var(--font-kai)">
      {{ isEn ? `Page ${currentPage + 1} / ${totalPages}` : `第 ${currentPage + 1} / ${totalPages} 頁` }}
      <span class="ml-2 opacity-60">{{ isEn ? '← Swipe to flip →' : '← 左右滑動翻頁 →' }}</span>
    </div>

    <!-- Flipbook container -->
    <div ref="bookRef" class="book-container"></div>

    <!-- Navigation buttons -->
    <div class="flex items-center gap-6 mt-4">
      <button @click="prevPage" class="flip-btn" :disabled="currentPage <= 0">{{ isEn ? '◀ Prev' : '◀ 上一頁' }}</button>
      <button @click="nextPage" class="flip-btn" :disabled="currentPage >= totalPages - 1">{{ isEn ? 'Next ▶' : '下一頁 ▶' }}</button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue'
import { PageFlip } from 'page-flip'
import { members, migrations, dynastyMap, generationChars } from '@/data/genealogy.js'
import { landmarks } from '@/data/landmarks.js'
import { useLang } from '@/i18n.js'

const { isEn, t } = useLang()

const bookRef = ref(null)
const currentPage = ref(0)
const totalPages = ref(0)
let pageFlip = null

// Story pages with landmark keys - bilingual
const eraStoriesData = [
  {
    title: { zh: '源遠流長', en: 'Deep Roots' },
    subtitle: { zh: '羅氏得姓之始', en: 'Origin of the Luo Surname' },
    body: { zh: '周武王三年（前1048年），劻正公鎮守宣城有功，受封於羅。子孫以國為氏，是為羅姓之始。歷經三千餘年，薪火相傳，綿延不絕。', en: 'In the 3rd year of King Wu of Zhou (1048 BC), Kuangzheng defended Xuancheng with distinction and was enfeoffed at Luo. His descendants adopted the state name as their surname. Over 3000 years, the flame has been passed down without end.' },
    era: { zh: '西周', en: 'Western Zhou' },
    landmark: 'xuancheng',
  },
  {
    title: { zh: '石壁南遷', en: 'Southward from Shibi' },
    subtitle: { zh: '客家先民的足跡', en: 'Footsteps of Hakka Ancestors' },
    body: { zh: '福建寧化石壁村，客家人的精神原鄉。宋末戰亂，先民紛紛南遷。我族谷賢公娶九妻，生十八子，子孫散布閩粵贛各地。', en: 'Shibi Village in Ninghua, Fujian is the spiritual homeland of the Hakka. During the wars at the end of the Song Dynasty, ancestors migrated south. Guxian married nine wives and fathered eighteen sons, with descendants scattered across Fujian, Guangdong, and Jiangxi.' },
    era: { zh: '宋末', en: 'Late Song' },
    landmark: 'shibi',
  },
  {
    title: { zh: '客道興寧', en: 'Settling in Xingning' },
    subtitle: { zh: '小九公開基立業', en: 'Xiaojiu Founds the Lineage' },
    body: { zh: '宋理宗景定二年（1261年），始祖小九公（洪德公）自福建寧化石壁村客道廣東，任循州（今龍川、和平、興寧、五華、連平等縣市地）學正。見興寧山水悠揚、土地沃野豐裕，遂擇東廓而立家。娶曾氏、胡氏、黃氏三位夫人，開三大房。', en: 'In 1261, founding ancestor Xiaojiu (Hongde) traveled from Shibi Village, Fujian to Guangdong as Education Commissioner of Xunzhou (present-day Longchuan, Heping, Xingning, Wuhua, Lianping). Seeing the beautiful mountains and fertile lands of Xingning, he settled here. He married three wives (Zeng, Hu, Huang), founding three major branches.' },
    era: { zh: '宋末元初', en: 'Late Song / Early Yuan' },
    landmark: 'xingning',
  },
  {
    title: { zh: '八房開枝', en: 'Eight Branches Flourish' },
    subtitle: { zh: '維公生八子', en: 'Wei Fathers Eight Sons' },
    body: { zh: '七世祖維公娶曾氏大孺人，生八子：昱、晟、旻、昊、勗、昺、昂、冕。八子各立一房，是為「左八房」。其中三房旻公為明朝進士，學問最盛。自此興寧羅氏枝繁葉茂，人丁興旺。', en: '7th-generation ancestor Wei married Lady Zeng and fathered eight sons, each founding a branch — the "Left Eight Houses." Among them, the 3rd son Min became a Ming Dynasty Jinshi (top scholar). From then on, the Xingning Luo clan flourished.' },
    era: { zh: '明朝', en: 'Ming Dynasty' },
    landmark: 'xingning',
  },
  {
    title: { zh: '少年奇志', en: 'A Youth\'s Ambition' },
    subtitle: { zh: '萬榮公的傳奇', en: 'The Legend of Wanrong' },
    body: { zh: '十五世萬榮公，幼年喪父成孤兒，卻獨自遠赴揚州，與叔父合股貿易。數年間積累財款，衣錦還鄉，回興寧置產立業。其志氣與膽識，堪為後世楷模。', en: '15th-generation Wanrong, orphaned young, traveled alone to Yangzhou and partnered with his uncle in trade. Within years he amassed wealth, returned home in glory, and established his estate in Xingning — a model of ambition for generations.' },
    era: { zh: '明末清初', en: 'Late Ming / Early Qing' },
    landmark: 'yangzhou',
  },
  {
    title: { zh: '散葉四方', en: 'Spreading Far and Wide' },
    subtitle: { zh: '清代族人遷徙', en: 'Qing Dynasty Migrations' },
    body: { zh: '清代中期，族人漸向外發展：部分移居惠州西湖之畔；珠玉公後裔隨「湖廣填四川」浪潮西遷巴蜀；新賢落戶贛南；欽賢漂洋過海下南洋。血脈所至，處處生根。', en: 'In the mid-Qing, clan members spread outward: some to Huizhou by the West Lake; descendants of Zhuyu joined the great westward migration to Sichuan; Xinxian settled in southern Jiangxi; Qinxian sailed to Southeast Asia. Wherever the blood flows, roots take hold.' },
    era: { zh: '清朝', en: 'Qing Dynasty' },
    landmark: 'sichuan',
  },
  {
    title: { zh: '穗城求學', en: 'Studying in Guangzhou' },
    subtitle: { zh: '捷登公赴穗謀生', en: 'Jiedeng Moves to the City' },
    body: { zh: '解放前，二十四世捷登公離開興寧赴廣州求學謀生。在羊城扎根，娶妻生子，開啟了本支從客家山區走向大城市的新篇章。其兄弟捷金（漢才）則早期移居雲南曲靖，開拓滇東新天地。', en: 'Before Liberation, 24th-generation Jiedeng left Xingning for Guangzhou to study and make a living. He put down roots in the city, married, and opened a new chapter — from Hakka mountains to metropolis. His brother Jiejin (Hancai) moved to Qujing, Yunnan.' },
    era: { zh: '民國', en: 'Republic Era' },
    landmark: 'guangzhou',
  },
  {
    title: { zh: '滇東拓新', en: 'Pioneering in Eastern Yunnan' },
    subtitle: { zh: '捷金公遠赴曲靖', en: 'Jiejin Journeys to Qujing' },
    body: { zh: '捷金（漢才）公早期離開興寧，遠赴雲南曲靖。曲靖地處雲貴高原，山川壯麗，油菜花海金浪翻涌。捷金公在此落地生根，為羅氏在西南邊陲開闢了新的一脈。', en: 'Jiejin (Hancai) left Xingning for Qujing, Yunnan. Situated on the Yunnan-Guizhou Plateau with majestic mountains and golden rapeseed fields, Qujing became home to a new Luo branch on the southwestern frontier.' },
    era: { zh: '民國', en: 'Republic Era' },
    landmark: 'qujing',
  },
  {
    title: { zh: '南遷特區', en: 'Moving to the Special Zone' },
    subtitle: { zh: '改革開放新浪潮', en: 'Reform and Opening Up' },
    body: { zh: '1980年代，改革開放春風吹遍南粵。捷登公舉家從廣州南遷深圳特區，投身經濟建設大潮。鵬城日新月異，高樓拔地而起，羅氏子孫在此見證了中國最激動人心的時代巨變。', en: 'In the 1980s, the winds of reform swept southern China. Jiedeng moved his family from Guangzhou to the Shenzhen Special Economic Zone. The city transformed daily, skyscrapers rising — the Luo descendants witnessed China\'s most thrilling era of change.' },
    era: { zh: '1980年代', en: '1980s' },
    landmark: 'shenzhen',
  },
  {
    title: { zh: '跨洋南半球', en: 'Across the Pacific South' },
    subtitle: { zh: '新松家移民紐西蘭', en: 'Xinsong\'s Family Emigrates to New Zealand' },
    body: { zh: '2000年後，二十五世新松家跨越太平洋，移民紐西蘭。南半球的純淨山水、奧克蘭的天際線，成為這一支羅氏新的家園。從客家圍龍屋到南太平洋島國，三千年血脈在地球另一端延續。', en: 'After 2000, 25th-generation Xinsong\'s family crossed the Pacific to New Zealand. The pristine landscapes and Auckland skyline became their new home. From Hakka roundhouses to the South Pacific — 3000 years of heritage continuing on the other side of the globe.' },
    era: { zh: '2000年代', en: '2000s' },
    landmark: 'newzealand',
  },
  {
    title: { zh: '赴美新篇', en: 'A New Chapter in America' },
    subtitle: { zh: '新濤家移居美國', en: 'Xintao\'s Family Moves to the USA' },
    body: { zh: '2010年後，二十五世新濤家從深圳移居美國。自由女神像下，羅氏血脈在新大陸繼續書寫傳奇。從周武王受封之地到星條旗下，三千零六十年的薪火，跨越了半個地球。', en: 'After 2010, 25th-generation Xintao\'s family moved from Shenzhen to America. Under the Statue of Liberty, the Luo bloodline continues writing its legend. From King Wu\'s enfeoffment to the Stars and Stripes — 3060 years of flame, spanning half the globe.' },
    era: { zh: '2010年代', en: '2010s' },
    landmark: 'usa',
  },
]

// Resolve stories based on current language
function getEraStories() {
  const en = isEn.value
  return eraStoriesData.map(s => ({
    title: en ? s.title.en : s.title.zh,
    subtitle: en ? s.subtitle.en : s.subtitle.zh,
    body: en ? s.body.en : s.body.zh,
    era: en ? s.era.en : s.era.zh,
    landmark: s.landmark,
  }))
}

// Generation pages (group by 3)
const genPages = []
const genKeys = Object.keys(generationChars).map(Number).sort((a, b) => a - b)
for (let i = 0; i < genKeys.length; i += 3) {
  const chunk = genKeys.slice(i, i + 3)
  genPages.push(chunk.map(g => ({
    gen: g,
    char: generationChars[g],
    dynasty: dynastyMap[g] || '',
    count: members.filter(m => m.generation === g).length,
  })))
}

function createPageHtml(content) {
  return `<div class="book-page-inner">${content}</div>`
}

// Map of landmark keys to real image files (when available)
const landmarkImages = {
  guangzhou: '/landmarks/guangzhou.jpg',
  shenzhen: '/landmarks/shenzhen.jpg',
  qujing: '/landmarks/qujing.jpg',
  usa: '/landmarks/usa.jpg',
  newzealand: '/landmarks/newzealand.jpg',
  shibi: '/landmarks/shibi.jpg',
  xingning: '/landmarks/xingning.jpg',
  xuancheng: '/landmarks/xuancheng.jpg',
  huizhou: '/landmarks/huizhou.jpg',
  ganzhou: '/landmarks/ganzhou.jpg',
  sichuan: '/landmarks/sichuan.jpg',
  yangzhou: '/landmarks/yangzhou.jpg',
  nanyang: '/landmarks/nanyang.jpg',
}

function getLandmarkSvg(key) {
  if (landmarkImages[key]) {
    return `<div class="landmark-img"><img src="${landmarkImages[key]}" alt="${key}"></div>`
  }
  const lm = landmarks[key]
  return lm ? `<div class="landmark-svg">${lm.svg}</div>` : ''
}

function buildPages() {
  const pages = []
  const en = isEn.value
  const eraStories = getEraStories()

  // Cover
  pages.push(createPageHtml(`
    <div class="cover-page">
      <div class="cover-seal">羅</div>
      <h1 class="cover-title">${en ? 'Luo Clan Genealogy' : '羅氏族譜'}</h1>
      <p class="cover-sub">${en ? 'From Ancestor Xiaojiu to the 26th Generation' : '興寧始祖小九公 至 二十六世'}</p>
      <p class="cover-date">${en ? 'Since 1261 (Late Song Dynasty)' : '始於宋末景定二年（1261）'}</p>
      <div class="cover-line"></div>
      <p class="cover-motto">${en ? 'Deep Roots · Eternal Legacy' : '源遠流長 · 薪火相傳'}</p>
    </div>
  `))

  // Story pages with landmarks
  for (const story of eraStories) {
    pages.push(createPageHtml(`
      <div class="story-page">
        <div class="story-era">${story.era}</div>
        ${getLandmarkSvg(story.landmark)}
        <h2 class="story-title">${story.title}</h2>
        <p class="story-subtitle">${story.subtitle}</p>
        <div class="story-divider"></div>
        <p class="story-body">${story.body}</p>
      </div>
    `))
  }

  // Migration section title
  pages.push(createPageHtml(`
    <div class="section-page">
      <div class="section-icon">🗺️</div>
      <h2 class="section-title">${en ? 'Migration Trail' : '遷徙足跡'}</h2>
      <p class="section-sub">${en ? '3000 Years of Journey · From Enfeoffment to Global Diaspora' : '三千年行路 · 從受封之地到全球散葉'}</p>
      <div class="section-divider"></div>
      <p class="section-count">${en ? migrations.length + ' Major Migrations' : migrations.length + ' 次重要遷徙'}</p>
    </div>
  `))

  // Migration pages — 1 per page with landmark
  for (const m of migrations) {
    let lmSvg = ''
    if (m.landmark && landmarkImages[m.landmark]) {
      lmSvg = `<div class="migration-landmark"><img src="${landmarkImages[m.landmark]}" alt="${m.landmark}"></div>`
    } else if (m.landmark && landmarks[m.landmark]) {
      lmSvg = `<div class="migration-landmark">${landmarks[m.landmark].svg}</div>`
    }
    pages.push(createPageHtml(`
      <div class="migration-detail-page">
        ${lmSvg}
        <div class="migration-detail-card">
          <div class="migration-year">${en ? (m.yearEn || m.year) : m.year}</div>
          <div class="migration-route">${en ? (m.fromEn || m.from) : m.from} → ${en ? (m.toEn || m.to) : m.to}</div>
          <div class="migration-event">${en ? (m.eventEn || m.event) : m.event}</div>
          <div class="migration-person">—— ${m.person}</div>
        </div>
      </div>
    `))
  }

  // Generations section
  pages.push(createPageHtml(`
    <div class="section-page">
      <div class="section-icon">📜</div>
      <h2 class="section-title">${en ? 'Generations' : '世代輩分'}</h2>
      <p class="section-sub">${en ? '26 Generations of Heritage' : '二十六世傳承字輩'}</p>
      <div class="section-divider"></div>
      <p class="section-count">${en ? members.length + '+ Clan Members Recorded' : members.length + '+ 族人記載'}</p>
    </div>
  `))

  // Generation detail pages
  for (const chunk of genPages) {
    const html = chunk.map(g => `
      <div class="gen-card">
        <div class="gen-num">${en ? 'Gen ' + g.gen : '第' + g.gen + '世'}</div>
        <div class="gen-char">${g.char === '—' ? (en ? '(No fixed char)' : '（無固定）') : g.char}</div>
        <div class="gen-dynasty">${g.dynasty}</div>
        <div class="gen-count">${en ? g.count + ' recorded' : g.count + ' 人記載'}</div>
      </div>
    `).join('')
    pages.push(createPageHtml(`<div class="gen-page">${html}</div>`))
  }

  // Back cover
  pages.push(createPageHtml(`
    <div class="cover-page back-cover">
      <div class="cover-line"></div>
      <p class="cover-motto">${en ? 'Remember Our Roots · Honor Our Ancestors' : '飲水思源 · 慎終追遠'}</p>
      <p class="cover-date" style="margin-top: 2rem">${en ? 'Luo Clan Genealogy Digital Edition' : '羅氏族譜數字版'}</p>
      <p class="cover-sub">genealogy.luozupu.com</p>
    </div>
  `))

  return pages
}

onMounted(async () => {
  await nextTick()

  const container = bookRef.value
  const isMobile = window.innerWidth < 640
  const w = isMobile ? Math.min(window.innerWidth - 32, 360) : 400
  const h = isMobile ? Math.round(w * 1.45) : 560

  const pages = buildPages()
  totalPages.value = pages.length

  for (const html of pages) {
    const div = document.createElement('div')
    div.className = 'page-content'
    div.innerHTML = html
    container.appendChild(div)
  }

  pageFlip = new PageFlip(container, {
    width: w,
    height: h,
    size: 'fixed',
    maxShadowOpacity: 0.3,
    showCover: true,
    mobileScrollSupport: false,
    swipeDistance: 30,
    useMouseEvents: true,
    flippingTime: 800,
    drawShadow: true,
  })

  pageFlip.loadFromHTML(container.querySelectorAll('.page-content'))

  pageFlip.on('flip', (e) => {
    currentPage.value = e.data
  })
})

onUnmounted(() => {
  if (pageFlip) pageFlip.destroy()
})

function prevPage() {
  if (pageFlip) pageFlip.flipPrev()
}
function nextPage() {
  if (pageFlip) pageFlip.flipNext()
}
</script>

<style scoped>
.book-page {
  background: var(--paper-cream);
}
.book-container {
  position: relative;
}
.flip-btn {
  padding: 0.5rem 1.2rem;
  border-radius: 0.75rem;
  font-family: var(--font-kai);
  font-size: 0.85rem;
  font-weight: 700;
  color: var(--ink-primary);
  background: var(--paper-aged);
  border: 1px solid var(--paper-dark);
  cursor: pointer;
  transition: all 0.2s;
}
.flip-btn:hover:not(:disabled) {
  background: var(--gold-bright);
  color: white;
}
.flip-btn:disabled {
  opacity: 0.3;
  cursor: not-allowed;
}
</style>

<style>
/* Page flip styles (unscoped for library DOM) */
.page-content {
  background: linear-gradient(135deg, #faf6ee 0%, #f5efe3 50%, #ede6d6 100%);
  font-family: var(--font-kai), serif;
  overflow: hidden;
}
.book-page-inner {
  height: 100%;
  padding: 1.5rem 1.2rem;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
}

/* Cover */
.cover-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  text-align: center;
}
.cover-seal {
  width: 4rem;
  height: 4rem;
  border: 3px solid #c23b22;
  color: #c23b22;
  font-size: 2rem;
  font-weight: 900;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.5rem;
  transform: rotate(-5deg);
  margin-bottom: 1.5rem;
  font-family: var(--font-song), serif;
}
.cover-title {
  font-size: 1.8rem;
  font-weight: 900;
  letter-spacing: 0.5rem;
  color: #2c1810;
  margin-bottom: 0.5rem;
  font-family: var(--font-song), serif;
}
.cover-sub { font-size: 0.8rem; color: #8b7355; margin-bottom: 0.3rem; }
.cover-date { font-size: 0.75rem; color: #a89578; }
.cover-line {
  width: 60%;
  height: 1px;
  background: linear-gradient(90deg, transparent, #c4a055, transparent);
  margin: 1.2rem 0;
}
.cover-motto {
  font-size: 0.9rem;
  color: #6b5a3e;
  letter-spacing: 0.3rem;
  font-weight: 700;
}
.back-cover { justify-content: flex-end; padding-bottom: 3rem; }

/* Landmark SVG */
.landmark-svg {
  width: 85%;
  max-width: 280px;
  margin: 0 auto 0.6rem;
}
.landmark-svg svg {
  width: 100%;
  height: auto;
}
/* Landmark real images */
.landmark-img {
  width: 92%;
  max-width: 320px;
  margin: 0 auto 0.6rem;
  border-radius: 0.5rem;
  overflow: hidden;
}
.landmark-img img {
  width: 100%;
  height: auto;
  display: block;
  opacity: 0.85;
}

/* Story pages */
.story-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  text-align: center;
  padding: 0.5rem;
}
.story-era {
  font-size: 0.65rem;
  color: #c4a055;
  font-weight: 700;
  letter-spacing: 0.3rem;
  margin-bottom: 0.5rem;
}
.story-title {
  font-size: 1.3rem;
  font-weight: 900;
  color: #2c1810;
  margin-bottom: 0.2rem;
  font-family: var(--font-song), serif;
}
.story-subtitle {
  font-size: 0.8rem;
  color: #8b7355;
  margin-bottom: 0.6rem;
}
.story-divider {
  width: 3rem;
  height: 2px;
  background: #c4a055;
  margin: 0 auto 0.6rem;
  border-radius: 1px;
}
.story-body {
  font-size: 0.78rem;
  line-height: 1.85;
  color: #3d2e1f;
  text-align: justify;
  max-width: 95%;
}

/* Section pages */
.section-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  text-align: center;
}
.section-icon { font-size: 3rem; margin-bottom: 1rem; }
.section-title {
  font-size: 1.5rem;
  font-weight: 900;
  color: #2c1810;
  letter-spacing: 0.3rem;
  font-family: var(--font-song), serif;
}
.section-sub { font-size: 0.8rem; color: #8b7355; margin-top: 0.5rem; }
.section-divider {
  width: 3rem;
  height: 2px;
  background: #c4a055;
  margin: 1rem auto;
}
.section-count { font-size: 0.75rem; color: #a89578; }

/* Migration detail pages (1 per page with landmark) */
.migration-detail-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  text-align: center;
  padding: 0.5rem;
}
.migration-landmark {
  width: 85%;
  max-width: 280px;
  margin-bottom: 1rem;
  border-radius: 0.5rem;
  overflow: hidden;
}
.migration-landmark svg, .migration-landmark img {
  width: 100%;
  height: auto;
  display: block;
}
.migration-detail-card {
  width: 90%;
  padding: 1rem;
  border-left: 3px solid #c4a055;
  background: rgba(196, 160, 85, 0.06);
  border-radius: 0 0.5rem 0.5rem 0;
  text-align: left;
}
.migration-year {
  font-size: 0.7rem;
  color: #c4a055;
  font-weight: 700;
  margin-bottom: 0.3rem;
}
.migration-route {
  font-size: 1.05rem;
  font-weight: 900;
  color: #2c1810;
  margin-bottom: 0.3rem;
  font-family: var(--font-song), serif;
}
.migration-event {
  font-size: 0.8rem;
  color: #5c4a35;
  line-height: 1.6;
}
.migration-person {
  font-size: 0.75rem;
  color: #a89578;
  margin-top: 0.5rem;
  text-align: right;
}

/* Generation pages */
.gen-page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  gap: 1.2rem;
  padding: 1rem 0;
}
.gen-card {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding: 0.8rem 1rem;
  border-radius: 0.5rem;
  background: rgba(196, 160, 85, 0.06);
}
.gen-num {
  font-size: 0.75rem;
  font-weight: 900;
  color: #c4a055;
  min-width: 3.5rem;
  font-family: var(--font-song), serif;
}
.gen-char {
  font-size: 1.1rem;
  font-weight: 900;
  color: #2c1810;
  min-width: 4rem;
  font-family: var(--font-song), serif;
}
.gen-dynasty { font-size: 0.7rem; color: #8b7355; flex: 1; }
.gen-count { font-size: 0.65rem; color: #a89578; }

/* Page edge effect */
.stf__item {
  box-shadow: inset -3px 0 8px rgba(0,0,0,0.05);
}
</style>
