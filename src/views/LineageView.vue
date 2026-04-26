<template>
  <div class="max-w-4xl mx-auto page-margin px-4 py-8">
    <h1 class="ink-title text-3xl font-bold text-center mb-2 tracking-widest">{{ isEn ? 'Trace Lineage' : '主脈溯源' }}</h1>

    <!-- Person selector -->
    <div class="max-w-md mx-auto mb-6">
      <div class="relative">
        <input v-model="searchQuery" @input="onSearch" :placeholder="selectedPerson ? '' : (isEn ? 'Search by name...' : '輸入人名選擇溯源對象...')"
          class="w-full px-4 py-3 rounded-xl border-2 text-sm ink-body text-center"
          style="background: var(--paper-aged); border-color: var(--paper-dark)">
        <div v-if="searchResults.length" class="absolute z-50 w-full mt-1 rounded-xl shadow-lg overflow-hidden border"
          style="background: var(--paper-cream); border-color: var(--paper-dark)">
          <button v-for="m in searchResults" :key="m.id" @click="selectPerson(m)"
            class="w-full text-left px-4 py-2.5 text-sm ink-body border-b"
            style="border-color: var(--paper-dark)"
            onmouseover="this.style.background='var(--paper-aged)'" onmouseout="this.style.background='var(--paper-cream)'">
            <span class="font-bold">羅{{ m.name }}</span>
            <span v-if="m.courtesy" class="ml-1" style="color: var(--ink-light)">{{ isEn ? 'Courtesy: ' : '字' }}{{ m.courtesy }}</span>
            <span class="ml-2 text-xs" style="color: var(--gold-dark)">{{ isEn ? 'Gen ' + m.generation : '第' + m.generation + '世' }}</span>
          </button>
        </div>
      </div>
    </div>

    <p class="text-center mb-8 text-sm" style="color: var(--ink-light)">
      {{ isEn
        ? (selectedPerson ? 'Luo ' + selectedPerson.name + ' Direct Line' : 'Luo Xintao Direct Line') + ' · From Ancestor Xiaojiu · ' + lineageMembers.length + ' Generations'
        : (selectedPerson ? '羅' + selectedPerson.name + '直系' : '羅新濤直系') + ' · 始祖小九公至今 · ' + lineageMembers.length + '代傳承'
      }}
    </p>

    <!-- Vertical scroll lineage -->
    <div class="relative">
      <div class="absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2" style="background: var(--gold-bright); opacity: 0.4"></div>

      <div v-for="(m, i) in lineageMembers" :key="m.id"
        class="relative mb-6 fade-in-up" :style="{ animationDelay: i * 0.05 + 's' }">
        <div class="absolute left-1/2 top-6 w-4 h-4 rounded-full -translate-x-1/2 z-10 border-2"
          :style="m.id === (selectedPerson?.id || 'xintao') ? 'background: var(--red-seal); border-color: var(--paper-cream); width: 20px; height: 20px' : 'background: var(--gold-bright); border-color: var(--paper-cream)'"></div>

        <div :class="i % 2 === 0 ? 'mr-[52%] pr-6 text-right' : 'ml-[52%] pl-6 text-left'">
          <div class="person-card inline-block p-4 rounded-2xl max-w-sm"
            :style="m.id === (selectedPerson?.id || 'xintao') ? 'background: var(--paper-aged); border: 3px solid var(--red-seal)' : 'background: var(--paper-aged); border: 2px solid var(--gold-bright)'"
            @click="$router.push('/person/' + m.id)">

            <div class="inline-block px-2 py-0.5 rounded text-xs mb-2 font-bold"
              :style="m.generation < 0 ? 'background: var(--red-seal); color: white' : 'background: var(--gold-bright); color: white'">
              {{ m.generation < 0 ? (isEn ? 'Ancient' : '遠祖') : (isEn ? 'Gen ' + m.generation : '第' + m.generation + '世') }}
            </div>

            <div class="ink-title text-2xl font-bold mb-1">
              羅{{ m.name }}
              <span v-if="m.courtesy" class="text-sm font-normal" style="color: var(--ink-light)">{{ isEn ? 'Courtesy: ' : '字' }}{{ m.courtesy }}</span>
            </div>

            <div v-if="m.alias || m.posthumous" class="text-xs mb-2" style="color: var(--ink-light)">
              <span v-if="m.alias">{{ isEn ? 'Art Name: ' : '號' }}{{ m.alias }}</span>
              <span v-if="m.alias && m.posthumous"> · </span>
              <span v-if="m.posthumous">{{ isEn ? 'Posthumous: ' : '謚' }}{{ m.posthumous }}</span>
            </div>

            <div v-if="m.birth || m.death" class="text-xs mb-2" style="color: var(--ink-medium)">
              {{ formatDate(m) }}
            </div>

            <div v-if="m.title" class="text-xs mb-2 font-bold" style="color: var(--jade-green)">
              🏛️ {{ m.title }}
            </div>

            <div v-if="m.spouses?.length" class="text-xs mb-2" style="color: var(--red-marriage)">
              <span v-for="(s, si) in m.spouses" :key="si">
                {{ si > 0 ? '、' : (isEn ? 'Spouse: ' : '配 ') }}{{ s.name }}
              </span>
            </div>

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
import { ref, computed } from 'vue'
import { members, mainLineage } from '@/data/genealogy.js'
import { toTraditional } from '@/data/simplifiedMap.js'
import { useLang } from '@/i18n.js'

const { isEn, t } = useLang()

const treeMembers = members.filter(m => m.generation >= 1)
const searchQuery = ref('')
const searchResults = ref([])
const selectedPerson = ref(null)

function stripLuo(s) { return s.replace(/^[罗羅]/, '') }

function onSearch() {
  const raw = searchQuery.value.trim()
  if (!raw) { searchResults.value = []; return }
  const q = stripLuo(raw)
  const qt = stripLuo(toTraditional(raw))
  if (!q) { searchResults.value = []; return }
  searchResults.value = treeMembers.filter(m =>
    m.name.includes(q) || m.name.includes(qt) ||
    (m.courtesy && (m.courtesy.includes(q) || m.courtesy.includes(qt)))
  ).slice(0, 8)
}

function selectPerson(m) {
  selectedPerson.value = m
  searchQuery.value = ''
  searchResults.value = []
}

function buildParentMap() {
  const map = new Map()
  for (const m of treeMembers) {
    if (m.spouses) for (const sp of m.spouses) {
      if (sp.children) for (const cid of sp.children) {
        if (!map.has(cid)) map.set(cid, [])
        map.get(cid).push(m.id)
      }
    }
  }
  return map
}

function findAncestryPath(personId) {
  const parentMap = buildParentMap()
  const path = [personId]
  let current = personId
  const visited = new Set()
  while (parentMap.has(current) && !visited.has(current)) {
    visited.add(current)
    const parents = parentMap.get(current)
    if (parents.length > 0) { path.unshift(parents[0]); current = parents[0] }
    else break
  }
  return path
}

const lineageMembers = computed(() => {
  if (selectedPerson.value) {
    const path = findAncestryPath(selectedPerson.value.id)
    return path.map(id => members.find(m => m.id === id)).filter(Boolean)
  }
  // Default: 新濤 lineage
  return mainLineage.map(id => members.find(m => m.id === id)).filter(Boolean)
})

function formatDate(m) {
  let s = ''
  if (m.birth) s += (isEn.value ? 'Born ' : '生 ') + m.birth
  if (m.birthNote) s += '（' + m.birthNote + '）'
  if (m.death) s += (s ? ' · ' : '') + (isEn.value ? 'Died ' : '卒 ') + m.death
  return s
}
</script>
