<template>
  <Teleport to="body">
    <div v-if="person" class="fixed inset-0 z-[100] flex items-center justify-center p-4" @click.self="$emit('close')">
      <div class="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>
      <div class="relative w-full max-w-lg max-h-[85vh] overflow-y-auto shadow-2xl scroll-unfurl"
        style="background: var(--paper-cream); border: 3px solid var(--gold-bright); border-radius: 4px">
        <!-- Scroll top roller -->
        <div class="h-2 rounded-t" style="background: linear-gradient(90deg, var(--gold-dark), var(--gold-bright), var(--gold-dark))"></div>
        <div class="p-6">
        <!-- Close button -->
        <button @click="$emit('close')" class="absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center text-lg hover:bg-[var(--paper-aged)]" style="color: var(--ink-light)">✕</button>

        <!-- Header -->
        <div class="flex items-start gap-4 mb-4">
          <div class="seal-stamp text-2xl px-3 py-2 shrink-0" style="border-width:2px">{{ person.name.charAt(0) }}</div>
          <div>
            <div class="text-xs font-bold mb-1" style="color: var(--gold-dark)">
              {{ person.generation > 0 ? (isEn ? 'Gen ' + person.generation : '第' + person.generation + '世') : (isEn ? 'Ancient Ancestor' : '遠祖') }}
            </div>
            <h2 class="ink-title text-3xl font-bold" v-html="'羅' + withPinyin(person.name)"></h2>
            <div class="flex flex-wrap gap-2 mt-1 text-sm" style="color: var(--ink-medium)">
              <span v-if="person.courtesy">{{ isEn ? 'Courtesy: ' : '字 ' }}<b>{{ person.courtesy }}</b></span>
              <span v-if="person.alias">{{ isEn ? 'Art Name: ' : '號 ' }}<b>{{ person.alias }}</b></span>
              <span v-if="person.posthumous" style="color: var(--red-seal)">{{ isEn ? 'Posthumous: ' : '謚 ' }}<b>{{ person.posthumous }}</b></span>
            </div>
          </div>
        </div>

        <!-- Dates -->
        <div v-if="person.birth || person.death" class="grid grid-cols-2 gap-3 mb-4">
          <div v-if="person.birth" class="p-3 rounded-xl" style="background: var(--paper-aged)">
            <div class="text-xs mb-1" style="color: var(--ink-light)">{{ isEn ? '📅 Birth' : '📅 出生' }}</div>
            <div class="ink-body text-sm font-bold">{{ person.birth }}</div>
            <div v-if="person.birthNote" class="text-xs mt-0.5" style="color: var(--ink-faint)">{{ person.birthNote }}</div>
          </div>
          <div v-if="person.death" class="p-3 rounded-xl" style="background: var(--paper-aged)">
            <div class="text-xs mb-1" style="color: var(--ink-light)">{{ isEn ? '🕯️ Death' : '🕯️ 卒年' }}</div>
            <div class="ink-body text-sm font-bold">{{ person.death }}</div>
            <div v-if="person.deathNote" class="text-xs mt-0.5" style="color: var(--ink-faint)">{{ person.deathNote }}</div>
          </div>
        </div>

        <!-- Title -->
        <div v-if="person.title" class="p-3 rounded-xl mb-4" style="background: var(--paper-aged)">
          <div class="text-xs mb-1" style="color: var(--ink-light)">{{ isEn ? '🏛️ Official Title' : '🏛️ 官職' }}</div>
          <div class="ink-body text-sm font-bold" style="color: var(--jade-green)">{{ person.title }}</div>
        </div>

        <!-- Deeds -->
        <div v-if="person.deeds" class="p-4 rounded-xl mb-4" style="background: var(--paper-aged)">
          <div class="text-xs mb-2 font-bold" style="color: var(--ink-light)">{{ isEn ? '📖 Deeds' : '📖 事蹟' }}</div>
          <div class="ink-body text-sm leading-relaxed">{{ person.deeds }}</div>
        </div>

        <!-- Spouses -->
        <div v-if="person.spouses?.length" class="mb-4">
          <div class="text-xs mb-2 font-bold" style="color: var(--red-marriage)">{{ isEn ? '💍 Spouses' : '💍 配偶' }}</div>
          <div v-for="(s, i) in person.spouses" :key="i" class="p-3 rounded-xl mb-2" style="background: var(--paper-aged)">
            <div class="font-bold ink-body text-sm">{{ s.name }}</div>
            <div v-if="s.birth || s.death" class="text-xs mt-1" style="color: var(--ink-medium)">
              <span v-if="s.birth">{{ isEn ? 'Born ' : '生 ' }}{{ s.birth }}</span>
              <span v-if="s.birthNote" class="ml-1" style="color: var(--ink-faint)">（{{ s.birthNote }}）</span>
              <span v-if="s.death"> · {{ isEn ? 'Died ' : '卒 ' }}{{ s.death }}</span>
              <span v-if="s.deathNote" class="ml-1" style="color: var(--ink-faint)">（{{ s.deathNote }}）</span>
            </div>
            <div v-if="s.note" class="text-xs mt-1" style="color: var(--ink-faint)">{{ s.note }}</div>
            <div v-if="s.children?.length" class="text-xs mt-1" style="color: var(--ink-medium)">
              {{ isEn ? 'Children: ' : '子女：' }}{{ s.children.map(cid => { const c = getM(cid); return c ? '羅' + c.name : cid }).join('、') }}
            </div>
          </div>
        </div>

        <!-- Note -->
        <div v-if="person.note" class="p-3 rounded-xl text-xs ink-body" style="background: var(--paper-aged); color: var(--ink-light)">
          📝 {{ person.note }}
        </div>
        </div><!-- end padding div -->
        <!-- Scroll bottom roller -->
        <div class="h-2 rounded-b" style="background: linear-gradient(90deg, var(--gold-dark), var(--gold-bright), var(--gold-dark))"></div>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
import { members, pinyinMap } from '@/data/genealogy.js'
import { useLang } from '@/i18n.js'

const { isEn, t } = useLang()

defineProps({ person: Object })
defineEmits(['close'])

function getM(id) { return members.find(m => m.id === id) }

function withPinyin(name) {
  return name.split('').map(ch => {
    if (pinyinMap[ch]) return `<ruby>${ch}<rt>${pinyinMap[ch]}</rt></ruby>`
    return ch
  }).join('')
}
</script>
