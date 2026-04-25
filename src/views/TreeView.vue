<template>
  <div class="px-4 py-8">
    <h1 class="ink-title text-3xl font-bold text-center mb-2 tracking-widest">族谱全图</h1>
    <p class="text-center mb-6 text-sm" style="color: var(--ink-light); font-family: var(--font-kai)">
      点击人物查看详情 · 金色边框为主脉
    </p>

    <!-- Search -->
    <div class="max-w-md mx-auto mb-8 relative">
      <input v-model="search" placeholder="搜索人物姓名..."
        class="w-full px-4 py-2 rounded-xl border-2 text-sm ink-body"
        style="background: var(--paper-aged); border-color: var(--paper-dark)">
    </div>

    <!-- Generation groups -->
    <div class="max-w-6xl mx-auto">
      <div v-for="gen in generations" :key="gen.num" class="mb-8">
        <!-- Generation header -->
        <div class="flex items-center gap-3 mb-3">
          <div class="h-px flex-1" style="background: var(--paper-dark)"></div>
          <span class="ink-title text-sm font-bold px-3 py-1 rounded-lg"
            style="background: var(--paper-aged); color: var(--gold-dark)">
            {{ gen.label }}
          </span>
          <div class="h-px flex-1" style="background: var(--paper-dark)"></div>
        </div>

        <!-- Members grid -->
        <div class="flex flex-wrap gap-3 justify-center">
          <div v-for="m in gen.members" :key="m.id"
            class="person-card p-3 rounded-xl text-center min-w-[120px] max-w-[160px]"
            :style="isMain(m.id) ? 'background: var(--paper-aged); border: 2px solid var(--gold-bright)' : 'background: var(--paper-aged); border: 1px solid var(--paper-dark)'"
            @click="$router.push('/person/' + m.id)">
            <div class="ink-title text-lg font-bold">罗{{ m.name }}</div>
            <div v-if="m.courtesy" class="text-xs" style="color: var(--ink-light)">字{{ m.courtesy }}</div>
            <div v-if="m.title" class="text-xs mt-1 font-bold" style="color: var(--jade-green)">{{ m.title }}</div>
            <div v-if="m.spouses?.length" class="text-xs mt-1" style="color: var(--red-marriage)">
              配{{ m.spouses.map(s => s.surname).join('/') }}氏
            </div>
            <div v-if="m.birth" class="text-xs mt-1" style="color: var(--ink-faint)">{{ typeof m.birth === 'string' ? m.birth.split('-')[0] : m.birth }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { members, mainLineage } from '@/data/genealogy.js'

const search = ref('')

function isMain(id) { return mainLineage.includes(id) }

const filteredMembers = computed(() => {
  if (!search.value) return members
  const q = search.value.toLowerCase()
  return members.filter(m =>
    m.name.includes(q) || (m.courtesy && m.courtesy.includes(q)) ||
    (m.alias && m.alias.includes(q))
  )
})

const generations = computed(() => {
  const genMap = new Map()
  for (const m of filteredMembers.value) {
    const g = m.generation
    if (!genMap.has(g)) genMap.set(g, [])
    genMap.get(g).push(m)
  }
  return Array.from(genMap.entries())
    .sort((a, b) => a[0] - b[0])
    .map(([num, mems]) => ({
      num,
      label: num === 0 ? '始祖（前1048年）' : num === 89 ? '八十九世' : '第' + num + '世',
      members: mems,
    }))
})
</script>
