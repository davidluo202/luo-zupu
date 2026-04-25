<template>
  <div class="page-margin max-w-3xl mx-auto px-4 py-8">
    <h1 class="ink-title text-3xl font-bold text-center mb-2 tracking-widest">族譜名片</h1>
    <p class="text-center mb-8 text-sm" style="color: var(--ink-light)">選擇您的名字，生成專屬族譜身份卡</p>

    <!-- Select person -->
    <div class="max-w-sm mx-auto mb-8">
      <select v-model="selectedId" class="w-full px-4 py-3 rounded-xl border-2 text-base ink-body"
        style="background: var(--paper-aged); border-color: var(--paper-dark)">
        <option value="">— 請選擇您的名字 —</option>
        <option v-for="m in selectableMembers" :key="m.id" :value="m.id">
          羅{{ m.name }}（第{{ m.generation }}世）
        </option>
      </select>
    </div>

    <!-- Generated card -->
    <div v-if="person" ref="cardEl" class="mx-auto max-w-md rounded-2xl overflow-hidden shadow-2xl fade-in-up"
      style="background: var(--paper-cream); border: 3px solid var(--gold-bright)">
      <!-- Card header -->
      <div class="p-6 text-center relative" style="background: linear-gradient(180deg, var(--paper-aged), var(--paper-cream))">
        <div class="absolute top-3 left-3 seal-stamp text-sm px-1.5 py-0.5" style="border-width:1.5px">羅氏</div>
        <div class="text-xs mb-2 font-bold" style="color: var(--gold-dark)">興寧羅氏 · 純端公支系</div>
        <div class="ink-title text-4xl font-bold mb-1">羅{{ person.name }}</div>
        <div class="flex justify-center gap-3 text-sm" style="color: var(--ink-medium)">
          <span v-if="person.courtesy">字 {{ person.courtesy }}</span>
          <span v-if="person.alias">號 {{ person.alias }}</span>
        </div>
        <div class="mt-2 inline-block px-3 py-1 rounded-full text-xs font-bold"
          style="background: var(--gold-bright); color: white">
          第{{ person.generation }}世 · {{ dynastyMap[person.generation] || '' }}
        </div>
      </div>

      <!-- Ancestry chain -->
      <div class="px-6 py-4 border-t" style="border-color: var(--paper-dark)">
        <div class="text-xs font-bold mb-3" style="color: var(--gold-dark)">📜 直系血脈</div>
        <div class="flex flex-wrap items-center gap-1 text-xs ink-body">
          <template v-for="(a, i) in ancestryChain" :key="a.id">
            <span v-if="i > 0" style="color: var(--ink-faint)">→</span>
            <span :class="a.id === person.id ? 'font-bold' : ''" :style="a.id === person.id ? 'color: var(--red-seal)' : 'color: var(--ink-medium)'">
              {{ a.name }}
            </span>
          </template>
        </div>
      </div>

      <!-- Stats -->
      <div class="px-6 py-4 border-t grid grid-cols-3 gap-3 text-center" style="border-color: var(--paper-dark)">
        <div>
          <div class="ink-title text-lg font-bold" style="color: var(--gold-bright)">{{ person.generation }}</div>
          <div class="text-xs" style="color: var(--ink-light)">世代</div>
        </div>
        <div>
          <div class="ink-title text-lg font-bold" style="color: var(--gold-bright)">{{ ancestryChain.length }}</div>
          <div class="text-xs" style="color: var(--ink-light)">傳承代數</div>
        </div>
        <div>
          <div class="ink-title text-lg font-bold" style="color: var(--gold-bright)">{{ yearsSpan }}</div>
          <div class="text-xs" style="color: var(--ink-light)">傳承年數</div>
        </div>
      </div>

      <!-- Birth info -->
      <div v-if="person.birth" class="px-6 py-3 border-t text-xs" style="border-color: var(--paper-dark); color: var(--ink-medium)">
        <span v-if="person.birth">📅 {{ person.birth }}</span>
        <span v-if="person.birthNote" class="ml-2" style="color: var(--ink-faint)">{{ person.birthNote }}</span>
      </div>

      <!-- Footer -->
      <div class="px-6 py-3 text-center text-xs border-t" style="border-color: var(--paper-dark); color: var(--ink-faint)">
        羅氏族譜 · luo-zupu.vercel.app
      </div>
    </div>

    <p v-if="person" class="text-center mt-6 text-xs" style="color: var(--ink-light)">
      截圖分享給家族成員 📱
    </p>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { members, mainLineage, dynastyMap } from '@/data/genealogy.js'

const selectedId = ref('')
const treeMembers = members.filter(m => m.generation >= 1)
const selectableMembers = treeMembers.filter(m => m.generation >= 20).sort((a,b) => a.generation - b.generation)

const person = computed(() => selectedId.value ? members.find(m => m.id === selectedId.value) : null)

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

const ancestryChain = computed(() => {
  if (!person.value) return []
  const parentMap = buildParentMap()
  const chain = [person.value]
  let current = person.value.id
  const visited = new Set()
  while (parentMap.has(current) && !visited.has(current)) {
    visited.add(current)
    const parents = parentMap.get(current)
    if (parents.length > 0) {
      const parent = members.find(m => m.id === parents[0])
      if (parent) { chain.unshift(parent); current = parents[0] }
      else break
    } else break
  }
  return chain
})

const yearsSpan = computed(() => {
  if (!person.value) return 0
  const startYear = 1261
  const birthStr = person.value.birth ? String(person.value.birth) : ''
  const birthYear = birthStr.match(/^\d{4}/) ? parseInt(birthStr) : 2026
  return birthYear - startYear
})
</script>
