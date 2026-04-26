<template>
  <div class="page-margin max-w-4xl mx-auto px-4 py-8">
    <h1 class="ink-title text-3xl font-bold text-center mb-2 tracking-widest">{{ isEn ? 'Timeline Explorer' : '族譜時光機' }}</h1>
    <p class="text-center mb-6 text-sm" style="color: var(--ink-light)">{{ isEn ? 'Drag the slider to travel through time and witness family history' : '拖動滑塊穿越時空，見證家族歷史' }}</p>

    <!-- Year slider -->
    <div class="sticky top-14 z-30 py-4 px-4 rounded-2xl mb-8" style="background: var(--paper-aged); backdrop-filter: blur(10px)">
      <div class="flex items-center gap-3">
        <button @click="currentYear = Math.max(1261, currentYear - 10)" class="w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm" style="background: var(--paper-cream); border: 1px solid var(--paper-dark)">◀</button>
        <button @click="currentYear = Math.max(1261, currentYear - 1)" class="w-8 h-8 rounded-lg flex items-center justify-center font-bold text-xs" style="background: var(--paper-cream); border: 1px solid var(--paper-dark)">-1</button>
        <span class="text-xs font-bold shrink-0" style="color: var(--ink-light)">1261</span>
        <input type="range" v-model.number="currentYear" min="1261" max="2026" step="1"
          class="flex-1 h-3 rounded-full appearance-none cursor-pointer timeline-slider"
          style="accent-color: var(--gold-bright); background: var(--paper-dark)">
        <span class="text-xs font-bold shrink-0" style="color: var(--ink-light)">2026</span>
        <button @click="currentYear = Math.min(2026, currentYear + 1)" class="w-8 h-8 rounded-lg flex items-center justify-center font-bold text-xs" style="background: var(--paper-cream); border: 1px solid var(--paper-dark)">+1</button>
        <button @click="currentYear = Math.min(2026, currentYear + 10)" class="w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm" style="background: var(--paper-cream); border: 1px solid var(--paper-dark)">▶</button>
      </div>
      <div class="text-center mt-2">
        <span class="ink-title text-3xl font-bold" style="color: var(--gold-bright)">{{ currentYear }}</span>
        <span class="ml-2 text-sm font-bold" style="color: var(--ink-medium)">{{ currentDynasty }}</span>
      </div>
      <div class="text-center mt-1 text-xs" style="color: var(--ink-light)">
        {{ isEn ? `Living ${aliveCount} · Deceased ${deadCount} · Unborn ${unbornCount}` : `現存 ${aliveCount} 人 · 已故 ${deadCount} 人 · 未出生 ${unbornCount} 人` }}
      </div>
    </div>

    <!-- Timeline events -->
    <div class="space-y-4">
      <div v-for="m in visibleMembers" :key="m.id"
        class="p-4 rounded-xl fade-in-up flex items-start gap-4"
        :style="getCardStyle(m)">
        <!-- Status icon -->
        <div class="text-2xl shrink-0 mt-1">{{ getStatusIcon(m) }}</div>
        <div class="flex-1 min-w-0">
          <div class="flex items-baseline gap-2 flex-wrap">
            <span class="ink-title text-lg font-bold">羅{{ m.name }}</span>
            <span v-if="m.courtesy" class="text-xs" style="color: var(--ink-light)">{{ isEn ? 'Courtesy: ' : '字' }}{{ m.courtesy }}</span>
            <span class="text-xs px-2 py-0.5 rounded font-bold" style="background: var(--gold-bright); color: white">
              {{ isEn ? 'Gen ' + m.generation : '第' + m.generation + '世' }}
            </span>
          </div>
          <div class="text-xs mt-1" style="color: var(--ink-medium)">
            <span v-if="getBirthYear(m)">{{ isEn ? 'Born ' : '生於 ' }}{{ m.birth }}</span>
            <span v-if="getDeathYear(m)"> · {{ isEn ? 'Died ' : '卒於 ' }}{{ m.death }}</span>
            <span v-if="isAlive(m)" style="color: var(--jade-green)"> · {{ isEn ? `Alive (age ${currentYear - getBirthYear(m)})` : `在世（${currentYear - getBirthYear(m)}歲）` }}</span>
          </div>
          <div v-if="m.title" class="text-xs mt-1" style="color: var(--jade-green)">🏛️ {{ m.title }}</div>
          <div v-if="m.deeds" class="text-xs mt-1" style="color: var(--ink-faint)">
            {{ m.deeds.length > 50 ? m.deeds.substring(0,50)+'...' : m.deeds }}
          </div>
        </div>
      </div>

      <div v-if="!visibleMembers.length" class="text-center py-12 ink-body" style="color: var(--ink-faint)">
        {{ isEn ? 'No clan members recorded in this era' : '這個年代尚無族人記載' }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { members } from '@/data/genealogy.js'
import { useLang } from '@/i18n.js'

const { isEn, t } = useLang()

const currentYear = ref(2026)
const treeMembers = members.filter(m => m.generation >= 1)

function getBirthYear(m) {
  if (!m.birth) return null
  const s = String(m.birth)
  const match = s.match(/^(\d{4})/)
  return match ? parseInt(match[1]) : null
}

function getDeathYear(m) {
  if (!m.death) return null
  const s = String(m.death)
  const match = s.match(/^(\d{4})/)
  return match ? parseInt(match[1]) : null
}

function isAlive(m) {
  const b = getBirthYear(m)
  const d = getDeathYear(m)
  if (!b) return false
  if (b > currentYear.value) return false
  if (d && d <= currentYear.value) return false
  return true
}

function isBorn(m) {
  const b = getBirthYear(m)
  return b ? b <= currentYear.value : false
}

function isDead(m) {
  const d = getDeathYear(m)
  return d ? d <= currentYear.value : false
}

const visibleMembers = computed(() => {
  return treeMembers.filter(m => {
    const b = getBirthYear(m)
    if (!b) {
      // Estimate birth from generation: gen 1 = 1261, each gen ~26 years
      const est = 1261 + (m.generation - 1) * 26
      return est <= currentYear.value && est + 80 >= currentYear.value
    }
    return b <= currentYear.value + 10
  }).filter(m => {
    const b = getBirthYear(m)
    if (!b) return true
    return b <= currentYear.value
  }).sort((a, b) => {
    const alive_a = isAlive(a) ? 0 : 1
    const alive_b = isAlive(b) ? 0 : 1
    if (alive_a !== alive_b) return alive_a - alive_b
    return a.generation - b.generation
  })
})

const aliveCount = computed(() => visibleMembers.value.filter(m => isAlive(m)).length)
const deadCount = computed(() => visibleMembers.value.filter(m => isDead(m) && getBirthYear(m)).length)
const unbornCount = computed(() => treeMembers.filter(m => { const b = getBirthYear(m); return b && b > currentYear.value }).length)

const currentDynasty = computed(() => {
  const y = currentYear.value
  if (isEn.value) {
    if (y < 1279) return 'Southern Song'
    if (y < 1368) return 'Yuan Dynasty'
    if (y < 1644) return 'Ming Dynasty'
    if (y < 1912) return 'Qing Dynasty'
    if (y < 1949) return 'Republic of China'
    return 'Modern Era'
  }
  if (y < 1279) return '南宋'
  if (y < 1368) return '元朝'
  if (y < 1644) return '明朝'
  if (y < 1912) return '清朝'
  if (y < 1949) return '民國'
  return '現代'
})

function getStatusIcon(m) {
  if (isAlive(m)) return '🟢'
  if (isDead(m)) return '🕯️'
  return '📜'
}

function getCardStyle(m) {
  if (isAlive(m)) return 'background: var(--paper-aged); border: 1px solid var(--jade-green); opacity: 1'
  return 'background: var(--paper-aged); border: 1px solid var(--paper-dark); opacity: 0.7'
}
</script>
