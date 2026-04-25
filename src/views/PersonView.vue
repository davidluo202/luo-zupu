<template>
  <div class="max-w-3xl mx-auto px-4 py-8">
    <button @click="$router.back()" class="mb-6 text-sm ink-body hover:underline" style="color: var(--ink-light)">← 返回</button>

    <div v-if="person" class="fade-in-up">
      <!-- Header card -->
      <div class="rounded-2xl p-8 mb-6" style="background: var(--paper-aged); border: 2px solid var(--gold-bright)">
        <div class="flex items-start gap-6">
          <!-- Seal -->
          <div class="seal-stamp text-3xl px-4 py-3 shrink-0" style="border-width: 3px">{{ person.name.charAt(0) }}</div>
          <div class="flex-1">
            <div class="text-xs font-bold mb-1" style="color: var(--gold-dark)">
              {{ person.generation === 0 ? '始祖' : '第' + person.generation + '世' }}
            </div>
            <h1 class="ink-title text-4xl font-bold mb-2">罗{{ person.name }}</h1>
            <div class="flex flex-wrap gap-3 text-sm" style="color: var(--ink-medium)">
              <span v-if="person.courtesy">字 <b>{{ person.courtesy }}</b></span>
              <span v-if="person.alias">号 <b>{{ person.alias }}</b></span>
              <span v-if="person.posthumous">谥 <b>{{ person.posthumous }}</b></span>
            </div>
          </div>
        </div>
      </div>

      <!-- Info grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div v-if="person.birth" class="p-4 rounded-xl" style="background: var(--paper-aged)">
          <div class="text-xs mb-1" style="color: var(--ink-light)">📅 出生</div>
          <div class="ink-body font-bold">{{ person.birth }}</div>
          <div v-if="person.birthNote" class="text-xs mt-1" style="color: var(--ink-faint)">{{ person.birthNote }}</div>
        </div>
        <div v-if="person.death" class="p-4 rounded-xl" style="background: var(--paper-aged)">
          <div class="text-xs mb-1" style="color: var(--ink-light)">🕯️ 卒年</div>
          <div class="ink-body font-bold">{{ person.death }}</div>
          <div v-if="person.deathNote" class="text-xs mt-1" style="color: var(--ink-faint)">{{ person.deathNote }}</div>
        </div>
        <div v-if="person.title" class="p-4 rounded-xl" style="background: var(--paper-aged)">
          <div class="text-xs mb-1" style="color: var(--ink-light)">🏛️ 官职</div>
          <div class="ink-body font-bold" style="color: var(--jade-green)">{{ person.title }}</div>
        </div>
      </div>

      <!-- Deeds -->
      <div v-if="person.deeds" class="p-6 rounded-xl mb-6" style="background: var(--paper-aged)">
        <h3 class="ink-title text-lg font-bold mb-3">事迹</h3>
        <p class="ink-body leading-relaxed">{{ person.deeds }}</p>
      </div>

      <!-- Spouses -->
      <div v-if="person.spouses?.length" class="p-6 rounded-xl mb-6" style="background: var(--paper-aged)">
        <h3 class="ink-title text-lg font-bold mb-3" style="color: var(--red-marriage)">配偶</h3>
        <div v-for="(s, i) in person.spouses" :key="i" class="mb-3 last:mb-0 p-3 rounded-lg" style="background: var(--paper-cream)">
          <div class="font-bold ink-body">{{ s.name }}</div>
          <div v-if="s.birth || s.death" class="text-xs" style="color: var(--ink-light)">
            {{ s.birth ? '生 ' + s.birth : '' }}{{ s.death ? ' · 卒 ' + s.death : '' }}
          </div>
          <div v-if="s.note" class="text-xs" style="color: var(--ink-faint)">{{ s.note }}</div>
          <div v-if="s.children?.length" class="text-xs mt-1" style="color: var(--ink-medium)">
            子女：{{ s.children.map(cid => { const c = getMember(cid); return c ? '罗' + c.name : cid }).join('、') }}
          </div>
        </div>
      </div>

      <!-- Note -->
      <div v-if="person.note" class="p-4 rounded-xl text-sm ink-body" style="background: var(--paper-aged); color: var(--ink-light)">
        📝 {{ person.note }}
      </div>
    </div>

    <div v-else class="text-center py-20 ink-body" style="color: var(--ink-light)">
      未找到该人物
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { members } from '@/data/genealogy.js'

const route = useRoute()
const person = computed(() => members.find(m => m.id === route.params.id))
function getMember(id) { return members.find(m => m.id === id) }
</script>
