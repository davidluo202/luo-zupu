<template>
  <div class="min-h-[calc(100vh-56px)] flex flex-col">
    <!-- Hero section -->
    <section class="flex-1 flex flex-col items-center justify-center px-4 py-16 text-center relative overflow-hidden">
      <div class="absolute inset-0 pointer-events-none opacity-5">
        <div class="absolute top-10 left-10 w-64 h-64 rounded-full bg-[var(--ink-black)] blur-3xl"></div>
        <div class="absolute bottom-20 right-20 w-48 h-48 rounded-full bg-[var(--ink-medium)] blur-3xl"></div>
      </div>

      <div class="fade-in-up relative z-10">
        <div class="mb-8 ink-drip">
          <span class="seal-stamp text-4xl px-6 py-4 inline-block" style="border-width:3px">羅氏</span>
        </div>

        <h1 class="ink-title text-5xl md:text-7xl font-bold mb-2 tracking-[0.2em]">羅氏族譜</h1>
        <p class="ink-title text-xl md:text-2xl mb-4" style="color: var(--ink-medium)">興寧派 · 純端公支系</p>
        <p class="ink-body text-base mb-2" style="color: var(--ink-light)">
          始祖匡正公 · 周武王三年受封 · 公元前1048年
        </p>
        <p class="ink-body text-sm mb-8" style="color: var(--ink-faint)">
          福建寧化 → 廣東興寧 · 傳承三千餘年 · 二十六世 · 重修印刷本
        </p>

        <div class="flex gap-8 justify-center mb-12 flex-wrap">
          <div v-for="stat in stats" :key="stat.label" class="text-center">
            <div class="ink-title text-3xl font-bold" style="color: var(--gold-bright)">{{ stat.value }}</div>
            <div class="ink-body text-sm mt-1" style="color: var(--ink-light)">{{ stat.label }}</div>
          </div>
        </div>

        <div class="flex gap-4 justify-center flex-wrap">
          <router-link to="/tree"
            class="px-8 py-3 rounded-xl text-white font-bold tracking-wider transition-all hover:scale-105"
            style="background: var(--ink-black); font-family: var(--font-kai)">
            🌳 瀏覽族譜
          </router-link>
          <router-link to="/lineage"
            class="px-8 py-3 rounded-xl font-bold tracking-wider transition-all hover:scale-105 border-2"
            style="border-color: var(--gold-bright); color: var(--gold-dark); font-family: var(--font-kai)">
            📜 主脈溯源
          </router-link>
        </div>
      </div>
    </section>

    <!-- Preface -->
    <section class="py-12 px-4 border-t" style="border-color: var(--paper-dark)">
      <div class="max-w-3xl mx-auto">
        <h2 class="ink-title text-2xl font-bold text-center mb-6 tracking-widest">前 言</h2>
        <div class="p-6 rounded-2xl ink-body leading-loose text-base" style="background: var(--paper-aged)">
          <p class="mb-4 indent-8">匡正公於周武王三年鎮守宣城有功，（約公元前1048年）後受封於羅，子孫以國為氏，羅姓由此而來。</p>
          <p class="mb-4 indent-8">本族譜根據祖輩第二十二世手抄本搜集整理重新編寫，主要收錄「小九公」之後，「純端公」派列代始祖之字號及簡歷，以便後人了解祖輩之祖章。</p>
          <p class="mb-4 indent-8">族譜派語源於北宋初期清徽學士顥公修《大成譜》時所定，四十字，每代派八字，俗稱「老八句」。清康熙辛丑年（公曆1721年）重修《大成譜》，形成「新派語」，俗稱「新八句」，湖南、江西、廣東多沿用此新派語。</p>
          <p class="indent-8">故原族譜稱《大成譜》或「老八句」，現族譜稱「新八句」或「新派語」。自「新」字輩之後，族中未再統一使用派語，各支後裔多依個人意願命名，不再拘於字輩。</p>
        </div>
      </div>
    </section>

    <!-- Generation chars -->
    <section class="py-12 px-4 border-t" style="border-color: var(--paper-dark)">
      <div class="max-w-5xl mx-auto">
        <h2 class="ink-title text-2xl font-bold text-center mb-8 tracking-widest">世代輩分</h2>
        <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
          <div v-for="(char, gen) in generationChars" :key="gen"
            class="person-card p-3 rounded-xl text-center"
            style="background: var(--paper-aged)">
            <div class="text-xs mb-1" style="color: var(--ink-light)">第{{ gen }}世</div>
            <div class="ink-title text-lg font-bold" style="color: var(--gold-dark)">{{ char }}</div>
            <div class="text-xs mt-1" style="color: var(--ink-faint)">輩分字</div>
          </div>
        </div>
      </div>
    </section>

    <footer class="py-6 px-4 text-center border-t" style="border-color: var(--paper-dark)">
      <p class="text-sm" style="color: var(--ink-faint); font-family: var(--font-kai)">
        羅氏族譜 · 源遠流長 · 薪火相傳
      </p>
    </footer>
  </div>
</template>

<script setup>
import { members, generationChars } from '@/data/genealogy.js'

const stats = [
  { value: '3074年', label: '傳承歷史' },
  { value: '26世', label: '世代延續' },
  { value: members.length + '人', label: '錄入人物' },
  { value: '11次', label: '重大遷徙' },
]
</script>
