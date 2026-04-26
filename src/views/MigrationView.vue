<template>
  <div class="max-w-4xl mx-auto page-margin px-4 py-8">
    <h1 class="ink-title text-3xl font-bold text-center mb-2 tracking-widest">{{ isEn ? 'Migration Map' : '遷徙地圖' }}</h1>
    <p class="text-center mb-8 text-sm" style="color: var(--ink-light); font-family: var(--font-kai)">
      {{ isEn ? '3000 Years of Heritage · From Enfeoffment to Global Diaspora' : '三千年薪火相傳 · 從受封之地到全球散葉' }}
    </p>

    <!-- Timeline -->
    <div class="relative">
      <div class="absolute left-8 top-0 bottom-0 w-0.5" style="background: var(--gold-bright); opacity: 0.3"></div>

      <div v-for="(m, i) in migrations" :key="i"
        class="relative pl-20 mb-8 fade-in-up" :style="{ animationDelay: i * 0.1 + 's' }">
        <!-- Dot -->
        <div class="absolute left-6 top-3 w-5 h-5 rounded-full border-2"
          style="background: var(--gold-bright); border-color: var(--paper-cream)"></div>

        <!-- Year -->
        <div class="absolute left-0 top-3 text-xs font-bold" style="color: var(--gold-dark)">
          {{ m.year }}
        </div>

        <!-- Card -->
        <div class="p-4 rounded-xl" style="background: var(--paper-aged)">
          <div class="ink-title text-lg font-bold mb-1">{{ m.from }} → {{ m.to }}</div>
          <div class="text-sm mb-2" style="color: var(--ink-medium)">{{ m.event }}</div>
          <div class="text-xs" style="color: var(--ink-light)">{{ isEn ? 'Key Figure: ' : '相關人物：' }}{{ m.person }}</div>
        </div>
      </div>
    </div>

    <!-- Bottom decoration -->
    <InkMountains height="150" :opacity="0.5" class="mt-8" />
  </div>
</template>

<script setup>
import InkMountains from '@/components/InkMountains.vue'
import { migrations } from '@/data/genealogy.js'
import { useLang } from '@/i18n.js'

const { isEn, t } = useLang()
</script>
