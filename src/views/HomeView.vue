<template>
  <div class="min-h-[calc(100vh-56px)] flex flex-col">
    <!-- Hero section with ink-wash mountain background -->
    <section class="flex-1 flex flex-col items-center justify-center px-4 py-16 text-center relative overflow-hidden">
      <!-- Scholar decorations at top -->
      <div class="absolute top-0 left-0 right-0 pointer-events-none">
        <ScholarDecor :opacity="0.8" />
      </div>
      <!-- Decorative ink blobs -->
      <div class="absolute inset-0 pointer-events-none">
        <div class="absolute top-10 left-10 w-64 h-64 rounded-full bg-[var(--ink-black)] blur-3xl opacity-[0.03]"></div>
        <div class="absolute bottom-20 right-20 w-48 h-48 rounded-full bg-[var(--ink-medium)] blur-3xl opacity-[0.03]"></div>
        <div class="absolute top-1/3 right-10 w-32 h-32 rounded-full bg-[var(--gold-bright)] blur-3xl opacity-[0.04] gentle-float"></div>
      </div>

      <div class="fade-in-up relative z-10 mt-32">
        <div class="mb-8 ink-splash">
          <span class="seal-stamp text-4xl px-6 py-4 inline-block" style="border-width:3px">羅氏</span>
        </div>

        <h1 class="ink-title text-5xl md:text-7xl font-bold mb-2 tracking-[0.3em]" style="letter-spacing: 0.3em">{{ t(H.title) }}</h1>
        <p class="ink-title text-xl md:text-2xl mb-4" style="color: var(--ink-medium)">{{ t(H.subtitle) }}</p>
        <p class="ink-body text-base mb-2" style="color: var(--ink-light)">{{ t(H.ancestor) }}</p>
        <p class="ink-body text-sm mb-8" style="color: var(--ink-faint)">{{ t(H.history) }}</p>

        <div class="flex gap-8 justify-center mb-12 flex-wrap">
          <div v-for="stat in stats" :key="stat.zh" class="text-center">
            <div class="ink-title text-3xl font-bold" style="color: var(--gold-bright)">{{ stat.value }}</div>
            <div class="ink-body text-sm mt-1" style="color: var(--ink-light)">{{ t(stat) }}</div>
          </div>
        </div>

        <div class="flex gap-4 justify-center flex-wrap">
          <router-link to="/tree"
            class="px-8 py-3 rounded-xl text-white font-bold tracking-wider transition-all hover:scale-105"
            style="background: var(--ink-black); font-family: var(--font-kai)">
            {{ t(H.browseTree) }}
          </router-link>
          <router-link to="/lineage"
            class="px-8 py-3 rounded-xl font-bold tracking-wider transition-all hover:scale-105 border-2"
            style="border-color: var(--gold-bright); color: var(--gold-dark); font-family: var(--font-kai)">
            {{ t(H.traceLineage) }}
          </router-link>
        </div>
      </div>
    </section>

    <!-- Birthday ticker -->
    <div v-if="upcomingBirthdays.length" class="birthday-ticker border-t border-b" style="border-color: var(--gold-bright); background: linear-gradient(90deg, var(--paper-aged), var(--paper-cream), var(--paper-aged))">
      <div class="ticker-inner">
        <span class="ticker-label">{{ t(H.birthdayLabel) }}</span>
        <span v-for="(b, i) in [...upcomingBirthdays, ...upcomingBirthdays]" :key="i" class="ticker-item">
          <span class="ticker-name">羅{{ b.name }}</span>
          <span class="ticker-date">{{ b.monthDay }}</span>
          <span v-if="b.daysUntil === 0" class="ticker-today">{{ t(H.birthdayToday) }}</span>
          <span v-else class="ticker-days">{{ b.daysUntil }}{{ t(H.birthdayDaysAfter) }}</span>
          <span class="ticker-sep">·</span>
        </span>
      </div>
    </div>

    <!-- Cloud divider SVG -->
    <div class="flex justify-center py-2 opacity-20">
      <svg width="300" height="40" viewBox="0 0 300 40" fill="none">
        <path d="M0 20 Q30 5 60 20 Q90 35 120 20 Q150 5 180 20 Q210 35 240 20 Q270 5 300 20" stroke="var(--ink-light)" stroke-width="1" fill="none"/>
        <path d="M20 25 Q50 10 80 25 Q110 40 140 25 Q170 10 200 25 Q230 40 260 25 Q280 15 300 25" stroke="var(--ink-faint)" stroke-width="0.5" fill="none"/>
      </svg>
    </div>

    <!-- Ancestors (before the main lineage) -->
    <section class="py-12 px-4 border-t scroll-reveal" style="border-color: var(--paper-dark)">
      <div class="max-w-3xl mx-auto page-margin text-center">
        <h2 class="ink-title text-2xl font-bold mb-6 tracking-widest">{{ t(H.sectionOrigin) }}</h2>
        <div class="p-6 rounded-2xl mb-4" style="background: var(--paper-aged)">
          <div class="text-xs mb-2 font-bold" style="color: var(--red-seal)">{{ t(H.originAncestor) }}</div>
          <div class="ink-title text-3xl font-bold mb-2">劻正公</div>
          <div class="ink-body text-sm" style="color: var(--ink-medium)">{{ t(H.originAncestorDesc) }}</div>
        </div>
        <div class="text-center my-4 ink-title text-sm" style="color: var(--ink-faint)">{{ t(H.spanYears) }}</div>
        <div class="p-6 rounded-2xl mb-4" style="background: var(--paper-aged)">
          <div class="text-xs mb-2 font-bold" style="color: var(--gold-dark)">{{ t(H.gen89) }}</div>
          <div class="ink-title text-3xl font-bold mb-2">谷賢公</div>
          <div class="ink-body text-sm" style="color: var(--ink-medium)">{{ t(H.gen89Desc) }}</div>
        </div>
        <div class="text-center my-4 ink-title text-sm" style="color: var(--ink-faint)">{{ t(H.toGen1) }}</div>
        <div class="p-6 rounded-2xl" style="background: var(--paper-aged); border: 2px solid var(--gold-bright)">
          <div class="text-xs mb-2 font-bold" style="color: var(--gold-dark)">{{ t(H.gen1Label) }}</div>
          <div class="ink-title text-3xl font-bold mb-2">{{ t(H.gen1Name) }}</div>
          <div class="text-xs mb-2" style="color: var(--ink-light)">{{ t(H.gen1Sub) }}</div>
          <div class="ink-body text-sm" style="color: var(--ink-medium)">{{ t(H.gen1Desc) }}</div>
        </div>
      </div>
    </section>

    <!-- Cloud divider -->
    <div class="flex justify-center py-2 opacity-20">
      <svg width="300" height="40" viewBox="0 0 300 40" fill="none">
        <path d="M0 20 Q30 5 60 20 Q90 35 120 20 Q150 5 180 20 Q210 35 240 20 Q270 5 300 20" stroke="var(--ink-light)" stroke-width="1" fill="none"/>
      </svg>
    </div>

    <!-- Preface -->
    <section class="py-12 px-4 border-t scroll-reveal" style="border-color: var(--paper-dark)">
      <div class="max-w-3xl mx-auto page-margin">
        <h2 class="ink-title text-2xl font-bold text-center mb-6 tracking-widest">{{ t(H.sectionPreface) }}</h2>
        <div class="p-6 rounded-2xl ink-body leading-loose text-base" style="background: var(--paper-aged)">
          <p class="mb-4 indent-8">{{ t(H.prefaceP1) }}</p>
          <p class="mb-4 indent-8">{{ t(H.prefaceP2) }}</p>
          <p class="mb-4 indent-8">{{ t(H.prefaceP3) }}</p>
          <p class="indent-8">{{ t(H.prefaceP4) }}</p>
        </div>
      </div>
    </section>

    <!-- Generation chars -->
    <section class="py-12 px-4 border-t" style="border-color: var(--paper-dark)">
      <div class="max-w-5xl mx-auto page-margin">
        <h2 class="ink-title text-2xl font-bold text-center mb-8 tracking-widest">{{ t(H.sectionGeneration) }}</h2>
        <div class="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-2">
          <div v-for="(char, gen) in generationChars" :key="gen"
            class="person-card p-2 rounded-lg text-center cursor-pointer"
            style="background: var(--paper-aged)"
            @click="$router.push('/generation/' + gen)">
            <div class="text-[10px] mb-0.5 font-bold" style="color: var(--ink-light)">{{ isEn ? 'Gen ' + gen : '第' + gen + '世' }}</div>
            <div class="ink-title text-base font-bold" :style="char === '—' ? 'color: var(--ink-faint)' : 'color: var(--gold-dark)'">{{ char === '—' ? '·' : char }}</div>
            <div class="text-[9px] mt-0.5" style="color: var(--ink-faint)">{{ dynastyMap[gen] || '' }}</div>
            <div class="text-[9px] mt-0.5 font-bold" style="color: var(--ink-medium)">{{ getGenCount(gen) }}{{ isEn ? ' ppl' : '人' }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Bottom illustration -->
    <div class="relative overflow-hidden" style="max-height: 250px">
      <img src="/cover-bg.jpg" alt="" class="w-full object-cover" style="opacity: 0.12">
    </div>
    <InkMountains height="180" />

    <footer class="py-6 px-4 text-center border-t" style="border-color: var(--paper-dark)">
      <p class="text-sm" style="color: var(--ink-faint); font-family: var(--font-kai)">{{ t(H.footer) }}</p>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { members, generationChars, dynastyMap } from '@/data/genealogy.js'
import { useLang, home as H } from '@/i18n.js'
import InkMountains from '@/components/InkMountains.vue'
import ScholarDecor from '@/components/ScholarDecor.vue'

const { isEn } = useLang()
const t = (obj) => isEn.value ? obj.en : obj.zh

// Birthday reminder: 24世及之後，未來30天內生日的成員
function getUpcomingBirthdays() {
  const today = new Date()
  const results = []
  for (const m of members) {
    if (m.generation < 24 || !m.birth) continue
    if (m.death || m.is_deceased) continue
    const birthStr = String(m.birth)
    const match = birthStr.match(/^(\d{4})-(\d{1,2})-(\d{1,2})$/)
    if (!match) continue
    const bMonth = parseInt(match[2])
    const bDay = parseInt(match[3])
    for (let d = 0; d <= 30; d++) {
      const check = new Date(today)
      check.setDate(check.getDate() + d)
      if (check.getMonth() + 1 === bMonth && check.getDate() === bDay) {
        results.push({ name: m.name, monthDay: `${bMonth}月${bDay}日`, daysUntil: d })
        break
      }
    }
  }
  results.sort((a, b) => a.daysUntil - b.daysUntil)
  return results
}

const upcomingBirthdays = ref(getUpcomingBirthdays())

// Scroll reveal observer
onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') })
  }, { threshold: 0.1 })
  document.querySelectorAll('.scroll-reveal').forEach(el => observer.observe(el))
})

function getGenCount(gen) {
  return members.filter(m => m.generation === parseInt(gen)).length
}

const stats = [
  { value: '3074年', zh: '傳承歷史', en: 'Heritage' },
  { value: '26世', zh: '世代延續', en: 'Generations' },
  { value: members.length + '人', zh: '錄入人物', en: 'Recorded' },
  { value: '14次', zh: '重大遷徙', en: 'Migrations' },
]
</script>

<style scoped>
.birthday-ticker {
  overflow: hidden;
  white-space: nowrap;
  padding: 0.6rem 0;
}
.ticker-inner {
  display: inline-block;
  animation: ticker-scroll 30s linear infinite;
}
.ticker-label {
  font-family: var(--font-kai);
  font-weight: 700;
  font-size: 0.85rem;
  color: var(--gold-dark);
  margin-right: 1.5rem;
}
.ticker-item {
  font-family: var(--font-kai);
  font-size: 0.82rem;
  color: var(--ink-medium);
}
.ticker-name { font-weight: 700; color: var(--ink-primary); }
.ticker-date { margin-left: 0.3rem; color: var(--ink-light); }
.ticker-today { margin-left: 0.3rem; color: var(--red-seal); font-weight: 700; }
.ticker-days { margin-left: 0.3rem; color: var(--gold-dark); font-size: 0.75rem; }
.ticker-sep { margin: 0 1rem; color: var(--ink-faint); }
@keyframes ticker-scroll {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
</style>
