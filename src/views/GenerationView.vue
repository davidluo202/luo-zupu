<template>
  <div class="page-margin max-w-4xl mx-auto px-4 py-8">
    <button @click="$router.push('/')" class="mb-4 text-sm ink-body hover:underline" style="color: var(--ink-light)">← 返回首頁</button>

    <h1 class="ink-title text-3xl font-bold text-center mb-2 tracking-widest">第{{ gen }}世</h1>
    <p class="text-center mb-2 text-sm" style="color: var(--gold-dark)">{{ dynastyMap[gen] || '' }}</p>
    <p class="text-center mb-8 text-sm" style="color: var(--ink-light)">
      共 {{ genMembers.length }} 人
      <span v-if="generationChars[gen] && generationChars[gen] !== '—'"> · 輩分字「{{ generationChars[gen] }}」</span>
    </p>

    <!-- Members list -->
    <div class="space-y-4">
      <div v-for="m in genMembers" :key="m.id"
        class="person-card p-5 rounded-2xl"
        style="background: var(--paper-aged)"
        @click="showModal(m)">
        <div class="flex items-start gap-4">
          <div class="seal-stamp text-lg px-1.5 py-0.5 shrink-0" style="border-width:1.5px">{{ m.name.charAt(0) }}</div>
          <div class="flex-1 min-w-0">
            <div class="flex items-baseline gap-2 flex-wrap">
              <span class="ink-title text-xl font-bold">羅{{ m.name }}</span>
              <span v-if="m.courtesy" class="text-sm" style="color: var(--ink-light)">字{{ m.courtesy }}</span>
              <span v-if="m.alias" class="text-sm" style="color: var(--ink-light)">號{{ m.alias }}</span>
              <span v-if="m.posthumous" class="text-sm" style="color: var(--red-seal)">謚{{ m.posthumous }}</span>
              <span v-if="m.note === '女'" class="text-xs px-1.5 py-0.5 rounded" style="background: rgba(212,87,74,0.1); color: var(--red-marriage)">女</span>
            </div>
            <div v-if="m.birth || m.death" class="text-xs mt-1" style="color: var(--ink-medium)">
              <span v-if="m.birth">生 {{ m.birth }}</span>
              <span v-if="m.birthNote" class="ml-1" style="color: var(--ink-faint)">（{{ m.birthNote }}）</span>
              <span v-if="m.death"> · 卒 {{ m.death }}</span>
            </div>
            <div v-if="m.title" class="text-xs mt-1 font-bold" style="color: var(--jade-green)">🏛️ {{ m.title }}</div>
            <div v-if="m.spouses?.length" class="text-xs mt-1" style="color: var(--red-marriage)">
              配偶：{{ m.spouses.map(s => s.name).join('、') }}
            </div>
            <div v-if="m.deeds" class="text-xs mt-2 ink-body leading-relaxed" style="color: var(--ink-medium)">
              {{ m.deeds }}
            </div>
            <div v-if="m.note && m.note !== '女'" class="text-xs mt-1" style="color: var(--ink-faint)">📝 {{ m.note }}</div>
          </div>
        </div>
      </div>

      <div v-if="!genMembers.length" class="text-center py-12 ink-body" style="color: var(--ink-faint)">
        該世代暫無人員記錄
      </div>
    </div>

    <PersonModal :person="modalPerson" @close="modalPerson = null" />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { members, generationChars, dynastyMap } from '@/data/genealogy.js'
import PersonModal from '@/components/PersonModal.vue'

const route = useRoute()
const gen = computed(() => parseInt(route.params.gen))
const modalPerson = ref(null)

const genMembers = computed(() =>
  members.filter(m => m.generation === gen.value).sort((a, b) => {
    // Sort: males first, then by birth
    const aF = a.note === '女' ? 1 : 0
    const bF = b.note === '女' ? 1 : 0
    if (aF !== bF) return aF - bF
    return 0
  })
)

function showModal(m) {
  modalPerson.value = m
}
</script>
