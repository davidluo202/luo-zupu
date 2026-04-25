<template>
  <div class="min-h-screen paper-texture" :style="{ fontSize: fontSize + 'px' }">
    <!-- Top navigation bar -->
    <nav class="sticky top-0 z-50 backdrop-blur-md bg-[var(--paper-cream)]/90 border-b border-[var(--paper-dark)]">
      <div class="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <router-link to="/" class="flex items-center gap-3 no-underline">
          <span class="seal-stamp text-lg px-2 py-1">羅</span>
          <span class="ink-title text-xl font-bold tracking-widest">羅氏族譜</span>
        </router-link>
        <div class="flex items-center gap-1">
          <router-link v-for="link in navLinks" :key="link.path" :to="link.path"
            class="px-3 py-1.5 text-sm ink-body no-underline rounded-lg transition-all hover:bg-[var(--paper-aged)]"
            :class="$route.path === link.path ? 'bg-[var(--paper-aged)] font-bold' : ''">
            {{ link.icon }} {{ link.label }}
          </router-link>
          <!-- Font size controls -->
          <div class="flex items-center gap-0.5 ml-2 pl-2 border-l" style="border-color: var(--paper-dark)">
            <button @click="changeFontSize(-1)" class="w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold transition-all hover:bg-[var(--paper-aged)]" title="縮小字體">A-</button>
            <button @click="changeFontSize(1)" class="w-7 h-7 rounded-lg flex items-center justify-center text-sm font-bold transition-all hover:bg-[var(--paper-aged)]" title="放大字體">A+</button>
          </div>
        </div>
      </div>
    </nav>

    <!-- Main content -->
    <router-view v-slot="{ Component }">
      <transition name="page" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const fontSize = ref(16)
function changeFontSize(delta) {
  fontSize.value = Math.max(12, Math.min(24, fontSize.value + delta))
}

const navLinks = [
  { path: '/', label: '首頁', icon: '🏠' },
  { path: '/tree', label: '族譜', icon: '🌳' },
  { path: '/lineage', label: '溯源', icon: '📜' },
  { path: '/migration', label: '遷徙', icon: '🗺️' },
]
</script>

<style scoped>
.page-enter-active, .page-leave-active { transition: opacity 0.3s, transform 0.3s; }
.page-enter-from { opacity: 0; transform: translateY(10px); }
.page-leave-to { opacity: 0; transform: translateY(-10px); }
a { text-decoration: none; color: inherit; }
</style>
