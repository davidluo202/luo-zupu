<template>
  <div class="book-page min-h-screen flex flex-col items-center py-6 px-2">
    <h1 class="ink-title text-2xl font-bold tracking-widest mb-4">族譜古卷</h1>

    <!-- Page indicator -->
    <div class="text-xs mb-3" style="color: var(--ink-light); font-family: var(--font-kai)">
      第 {{ currentPage + 1 }} / {{ totalPages }} 頁
      <span class="ml-2 opacity-60">← 左右滑動翻頁 →</span>
    </div>

    <!-- Flipbook container -->
    <div ref="bookRef" class="book-container"></div>

    <!-- Navigation buttons -->
    <div class="flex items-center gap-6 mt-4">
      <button @click="prevPage" class="flip-btn" :disabled="currentPage <= 0">◀ 上一頁</button>
      <button @click="nextPage" class="flip-btn" :disabled="currentPage >= totalPages - 1">下一頁 ▶</button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue'
import { PageFlip } from 'page-flip'
import { members, migrations, dynastyMap, generationChars } from '@/data/genealogy.js'
import { landmarks } from '@/data/landmarks.js'

const bookRef = ref(null)
const currentPage = ref(0)
const totalPages = ref(0)
let pageFlip = null

// Story pages with landmark keys
const eraStories = [
  {
    title: '源遠流長',
    subtitle: '羅氏得姓之始',
    body: '周武王三年（前1048年），劻正公鎮守宣城有功，受封於羅。子孫以國為氏，是為羅姓之始。歷經三千餘年，薪火相傳，綿延不絕。',
    era: '西周',
    landmark: 'xuancheng',
  },
  {
    title: '石壁南遷',
    subtitle: '客家先民的足跡',
    body: '福建寧化石壁村，客家人的精神原鄉。宋末戰亂，先民紛紛南遷。我族谷賢公娶九妻，生十八子，子孫散布閩粵贛各地。',
    era: '宋末',
    landmark: 'shibi',
  },
  {
    title: '客道興寧',
    subtitle: '小九公開基立業',
    body: '宋理宗景定二年（1261年），始祖小九公（洪德公）自福建寧化石壁村客道廣東，任循州學正。見興寧山水悠揚、土地沃野豐裕，遂擇東廓而立家。娶曾氏、胡氏、黃氏三位夫人，開三大房。',
    era: '宋末元初',
    landmark: 'xingning',
  },
  {
    title: '八房開枝',
    subtitle: '維公生八子',
    body: '七世祖維公娶曾氏大孺人，生八子：昱、晟、旻、昊、勗、昺、昂、冕。八子各立一房，是為「左八房」。其中三房旻公為明朝進士，學問最盛。自此興寧羅氏枝繁葉茂，人丁興旺。',
    era: '明朝',
    landmark: 'xingning',
  },
  {
    title: '少年奇志',
    subtitle: '萬榮公的傳奇',
    body: '十五世萬榮公，幼年喪父成孤兒，卻獨自遠赴揚州，與叔父合股貿易。數年間積累財款，衣錦還鄉，回興寧置產立業。其志氣與膽識，堪為後世楷模。',
    era: '明末清初',
    landmark: 'yangzhou',
  },
  {
    title: '散葉四方',
    subtitle: '清代族人遷徙',
    body: '清代中期，族人漸向外發展：部分移居惠州西湖之畔；珠玉公後裔隨「湖廣填四川」浪潮西遷巴蜀；新賢落戶贛南；欽賢漂洋過海下南洋。血脈所至，處處生根。',
    era: '清朝',
    landmark: 'sichuan',
  },
  {
    title: '穗城求學',
    subtitle: '捷登公赴穗謀生',
    body: '解放前，二十四世捷登公離開興寧赴廣州求學謀生。在羊城扎根，娶妻生子，開啟了本支從客家山區走向大城市的新篇章。其兄弟捷金（漢才）則早期移居雲南曲靖，開拓滇東新天地。',
    era: '民國',
    landmark: 'guangzhou',
  },
  {
    title: '滇東拓新',
    subtitle: '捷金公遠赴曲靖',
    body: '捷金（漢才）公早期離開興寧，遠赴雲南曲靖。曲靖地處雲貴高原，山川壯麗，油菜花海金浪翻涌。捷金公在此落地生根，為羅氏在西南邊陲開闢了新的一脈。',
    era: '民國',
    landmark: 'qujing',
  },
  {
    title: '南遷特區',
    subtitle: '改革開放新浪潮',
    body: '1980年代，改革開放春風吹遍南粵。捷登公舉家從廣州南遷深圳特區，投身經濟建設大潮。鵬城日新月異，高樓拔地而起，羅氏子孫在此見證了中國最激動人心的時代巨變。',
    era: '1980年代',
    landmark: 'shenzhen',
  },
  {
    title: '跨洋南半球',
    subtitle: '新松家移民紐西蘭',
    body: '2000年後，二十五世新松家跨越太平洋，移民紐西蘭。南半球的純淨山水、奧克蘭的天際線，成為這一支羅氏新的家園。從客家圍龍屋到南太平洋島國，三千年血脈在地球另一端延續。',
    era: '2000年代',
    landmark: 'newzealand',
  },
  {
    title: '赴美新篇',
    subtitle: '新濤家移居美國',
    body: '2010年後，二十五世新濤家從深圳移居美國。自由女神像下，羅氏血脈在新大陸繼續書寫傳奇。從周武王受封之地到星條旗下，三千零六十年的薪火，跨越了半個地球。',
    era: '2010年代',
    landmark: 'usa',
  },
]

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

function getLandmarkSvg(key) {
  const lm = landmarks[key]
  return lm ? `<div class="landmark-svg">${lm.svg}</div>` : ''
}

function buildPages() {
  const pages = []

  // Cover
  pages.push(createPageHtml(`
    <div class="cover-page">
      <div class="cover-seal">羅</div>
      <h1 class="cover-title">羅氏族譜</h1>
      <p class="cover-sub">興寧始祖小九公 至 二十六世</p>
      <p class="cover-date">始於宋末景定二年（1261）</p>
      <div class="cover-line"></div>
      <p class="cover-motto">源遠流長 · 薪火相傳</p>
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
      <h2 class="section-title">遷徙足跡</h2>
      <p class="section-sub">三千年行路 · 從受封之地到全球散葉</p>
      <div class="section-divider"></div>
      <p class="section-count">${migrations.length} 次重要遷徙</p>
    </div>
  `))

  // Migration pages — 1 per page with landmark
  for (const m of migrations) {
    const lmSvg = m.landmark && landmarks[m.landmark] ? `<div class="migration-landmark">${landmarks[m.landmark].svg}</div>` : ''
    pages.push(createPageHtml(`
      <div class="migration-detail-page">
        ${lmSvg}
        <div class="migration-detail-card">
          <div class="migration-year">${m.year}</div>
          <div class="migration-route">${m.from} → ${m.to}</div>
          <div class="migration-event">${m.event}</div>
          <div class="migration-person">—— ${m.person}</div>
        </div>
      </div>
    `))
  }

  // Generations section
  pages.push(createPageHtml(`
    <div class="section-page">
      <div class="section-icon">📜</div>
      <h2 class="section-title">世代輩分</h2>
      <p class="section-sub">二十六世傳承字輩</p>
      <div class="section-divider"></div>
      <p class="section-count">${members.length}+ 族人記載</p>
    </div>
  `))

  // Generation detail pages
  for (const chunk of genPages) {
    const html = chunk.map(g => `
      <div class="gen-card">
        <div class="gen-num">第${g.gen}世</div>
        <div class="gen-char">${g.char === '—' ? '（無固定）' : g.char}</div>
        <div class="gen-dynasty">${g.dynasty}</div>
        <div class="gen-count">${g.count} 人記載</div>
      </div>
    `).join('')
    pages.push(createPageHtml(`<div class="gen-page">${html}</div>`))
  }

  // Back cover
  pages.push(createPageHtml(`
    <div class="cover-page back-cover">
      <div class="cover-line"></div>
      <p class="cover-motto">飲水思源 · 慎終追遠</p>
      <p class="cover-date" style="margin-top: 2rem">羅氏族譜數字版</p>
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
  width: 80%;
  max-width: 260px;
  margin-bottom: 1rem;
}
.migration-landmark svg {
  width: 100%;
  height: auto;
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
