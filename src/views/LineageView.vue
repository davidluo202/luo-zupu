<template>
  <div class="max-w-4xl mx-auto px-4 py-8">
    <h1 class="ink-title text-3xl font-bold text-center mb-2 tracking-widest">主脉溯源</h1>
    <p class="text-center mb-8 text-sm" style="color: var(--ink-light); font-family: var(--font-kai)">
      罗新涛直系 · 始祖劻正公至今 · {{ lineageMembers.length }}代传承
    </p>

    <!-- Vertical scroll lineage -->
    <div class="relative">
      <!-- Center line -->
      <div class="absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2" style="background: var(--gold-bright); opacity: 0.4"></div>

      <div v-for="(m, i) in lineageMembers" :key="m.id"
        class="relative mb-6 fade-in-up" :style="{ animationDelay: i * 0.05 + 's' }">
        <!-- Gold dot on center line -->
        <div class="absolute left-1/2 top-6 w-4 h-4 rounded-full -translate-x-1/2 z-10 border-2"
          style="background: var(--gold-bright); border-color: var(--paper-cream)"></div>

        <!-- Card alternating left/right -->
        <div :class="i % 2 === 0 ? 'mr-[52%] pr-6 text-right' : 'ml-[52%] pl-6 text-left'">
          <div class="person-card inline-block p-4 rounded-2xl max-w-sm"
            :style="isMainBranch(m) ? 'background: var(--paper-aged); border: 2px solid var(--gold-bright)' : 'background: var(--paper-aged); border: 1px solid var(--paper-dark)'"
            @click="$router.push('/person/' + m.id)">

            <!-- Generation badge -->
            <div class="inline-block px-2 py-0.5 rounded text-xs mb-2 font-bold"
              :style="m.generation === 0 ? 'background: var(--red-seal); color: white' : 'background: var(--gold-bright); color: white'">
              {{ m.generation === 0 ? '始祖' : (m.generation === 89 ? '八十九世' : '第' + m.generation + '世') }}
            </div>

            <!-- Name -->
            <div class="ink-title text-2xl font-bold mb-1">
              罗{{ m.name }}
              <span v-if="m.courtesy" class="text-sm font-normal" style="color: var(--ink-light)">字{{ m.courtesy }}</span>
            </div>

            <!-- Alias & Posthumous -->
            <div v-if="m.alias || m.posthumous" class="text-xs mb-2" style="color: var(--ink-light)">
              <span v-if="m.alias">号{{ m.alias }}</span>
              <span v-if="m.alias && m.posthumous"> · </span>
              <span v-if="m.posthumous">谥{{ m.posthumous }}</span>
            </div>

            <!-- Dates -->
            <div v-if="m.birth || m.death" class="text-xs mb-2" style="color: var(--ink-medium)">
              {{ formatDate(m) }}
            </div>

            <!-- Title/Position -->
            <div v-if="m.title" class="text-xs mb-2 font-bold" style="color: var(--jade-green)">
              🏛️ {{ m.title }}
            </div>

            <!-- Spouses -->
            <div v-if="m.spouses?.length" class="text-xs mb-2" style="color: var(--red-marriage)">
              <span v-for="(s, si) in m.spouses" :key="si">
                {{ si > 0 ? '、' : '配 ' }}{{ s.name }}
              </span>
            </div>

            <!-- Deeds -->
            <div v-if="m.deeds" class="text-xs leading-relaxed mt-2 ink-body" style="color: var(--ink-medium)">
              {{ m.deeds.length > 60 ? m.deeds.substring(0, 60) + '...' : m.deeds }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { members, mainLineage } from '@/data/genealogy.js'

const lineageMembers = computed(() =>
  mainLineage.map(id => members.find(m => m.id === id)).filter(Boolean)
)

function isMainBranch(m) {
  return mainLineage.includes(m.id)
}

function formatDate(m) {
  let s = ''
  if (m.birth) s += '生 ' + m.birth
  if (m.birthNote) s += '（' + m.birthNote + '）'
  if (m.death) s += (s ? ' · ' : '') + '卒 ' + m.death
  return s
}
</script>
