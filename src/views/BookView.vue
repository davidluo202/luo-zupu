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
import { members, migrations, mainLineage, dynastyMap, generationChars } from '@/data/genealogy.js'

const bookRef = ref(null)
const currentPage = ref(0)
const totalPages = ref(0)
let pageFlip = null

// Get main lineage members in order
const mainMembers = mainLineage
  .map(id => members.find(m => m.id === id))
  .filter(Boolean)

// Group main lineage by era for story pages
const eraStories = [
  {
    title: '源遠流長',
    subtitle: '羅氏得姓之始',
    body: '周武王三年（前1048年），劻正公鎮守宣城有功，受封於羅。子孫以國為氏，是為羅姓之始。歷經三千餘年，薪火相傳，綿延不絕。',
    decoration: '🏛️',
    era: '西周',
  },
  {
    title: '客道興寧',
    subtitle: '小九公開基立業',
    body: '宋理宗景定二年（1261年），始祖小九公（洪德公）自福建寧化石壁村客道廣東，任循州學正。見興寧山水悠揚、土地沃野豐裕，遂擇東廓而立家。娶曾氏、胡氏、黃氏三位夫人，開三大房。',
    decoration: '🏔️',
    era: '宋末元初',
  },
  {
    title: '三房分立',
    subtitle: '昇澣·新澣·振澣',
    body: '二世祖昇澣公（右八房祖）壽至105歲，為貢士、教諭郎大學士。新澣公（左八房祖）任大元學谕。振澣公居中。三房各立，枝繁葉茂，其中左八房為本族主脈。',
    decoration: '🌿',
    era: '元朝',
  },
  {
    title: '八房開枝',
    subtitle: '維公生八子',
    body: '七世祖維公娶曾氏大孺人，生八子：昱、晟、旻、昊、勗、昺、昂、冕。八子各立一房，是為「左八房」。其中三房旻公為明朝進士，學問最盛。',
    decoration: '🌳',
    era: '明朝',
  },
  {
    title: '少年奇志',
    subtitle: '萬榮公的傳奇',
    body: '十五世萬榮公，幼年喪父成孤兒，卻獨自遠赴揚州，與叔父合股貿易。數年間積累財款，衣錦還鄉，回興寧置產立業。其志氣與膽識，堪為後世楷模。',
    decoration: '⚡',
    era: '���末清初',
  },
  {
    title: '散葉四方',
    subtitle: '族人遷徙之路',
    body: '清代中期，族人漸向外發展：部分移居惠州、惠陽；珠玉公後裔遷四川；新賢移居江西；欽賢下南洋。至民國，錫鎦公後裔再遷贛州。血脈所至，處處生根。',
    decoration: '🗺️',
    era: '清朝',
  },
  {
    title: '跨洋新篇',
    subtitle: '從興寧到世界',
    body: '二十世紀後半葉，族人腳步跨越重洋。新松家移居紐西蘭，新濤家移居美國。三千年來從受封之地到全球散葉，羅氏血脈在新的土地上繼續書寫傳奇。',
    decoration: '✈️',
    era: '現代',
  },
]

// Migration timeline pages
const migrationPages = migrations.map(m => ({
  year: m.year,
  from: m.from,
  to: m.to,
  person: m.person,
  event: m.event,
}))

// Generation pages (group by pairs)
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

function createPageHtml(content, pageClass = '') {
  return `<div class="book-page-inner ${pageClass}">${content}</div>`
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

  // Story pages
  for (const story of eraStories) {
    pages.push(createPageHtml(`
      <div class="story-page">
        <div class="story-era">${story.era}</div>
        <div class="story-deco">${story.decoration}</div>
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

  // Migration pages (2 per page)
  for (let i = 0; i < migrationPages.length; i += 2) {
    const items = migrationPages.slice(i, i + 2)
    const html = items.map(m => `
      <div class="migration-card">
        <div class="migration-year">${m.year}</div>
        <div class="migration-route">${m.from} → ${m.to}</div>
        <div class="migration-event">${m.event}</div>
        <div class="migration-person">—— ${m.person}</div>
      </div>
    `).join('<div class="migration-sep"></div>')
    pages.push(createPageHtml(`<div class="migration-page">${html}</div>`))
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

  // Create page elements
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
  padding: 2rem 1.5rem;
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
.cover-sub {
  font-size: 0.8rem;
  color: #8b7355;
  margin-bottom: 0.3rem;
}
.cover-date {
  font-size: 0.75rem;
  color: #a89578;
}
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
.back-cover {
  justify-content: flex-end;
  padding-bottom: 3rem;
}

/* Story pages */
.story-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  text-align: center;
  padding: 1rem;
}
.story-era {
  font-size: 0.7rem;
  color: #c4a055;
  font-weight: 700;
  letter-spacing: 0.3rem;
  margin-bottom: 0.8rem;
  text-transform: uppercase;
}
.story-deco {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}
.story-title {
  font-size: 1.5rem;
  font-weight: 900;
  color: #2c1810;
  margin-bottom: 0.3rem;
  font-family: var(--font-song), serif;
}
.story-subtitle {
  font-size: 0.85rem;
  color: #8b7355;
  margin-bottom: 1rem;
}
.story-divider {
  width: 3rem;
  height: 2px;
  background: #c4a055;
  margin: 0 auto 1rem;
  border-radius: 1px;
}
.story-body {
  font-size: 0.85rem;
  line-height: 1.9;
  color: #3d2e1f;
  text-align: justify;
  max-width: 90%;
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
.section-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}
.section-title {
  font-size: 1.5rem;
  font-weight: 900;
  color: #2c1810;
  letter-spacing: 0.3rem;
  font-family: var(--font-song), serif;
}
.section-sub {
  font-size: 0.8rem;
  color: #8b7355;
  margin-top: 0.5rem;
}
.section-divider {
  width: 3rem;
  height: 2px;
  background: #c4a055;
  margin: 1rem auto;
}
.section-count {
  font-size: 0.75rem;
  color: #a89578;
}

/* Migration pages */
.migration-page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  gap: 1rem;
  padding: 1rem 0;
}
.migration-card {
  padding: 1rem;
  border-left: 3px solid #c4a055;
  background: rgba(196, 160, 85, 0.06);
  border-radius: 0 0.5rem 0.5rem 0;
}
.migration-year {
  font-size: 0.7rem;
  color: #c4a055;
  font-weight: 700;
  margin-bottom: 0.3rem;
}
.migration-route {
  font-size: 1.1rem;
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
  margin-top: 0.3rem;
  text-align: right;
}
.migration-sep {
  height: 1px;
  background: linear-gradient(90deg, transparent, #d4c4a0, transparent);
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
.gen-dynasty {
  font-size: 0.7rem;
  color: #8b7355;
  flex: 1;
}
.gen-count {
  font-size: 0.65rem;
  color: #a89578;
}

/* Page edge effect */
.stf__item {
  box-shadow: inset -3px 0 8px rgba(0,0,0,0.05);
}
</style>
