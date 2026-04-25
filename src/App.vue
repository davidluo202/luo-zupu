<template>
  <div class="min-h-screen paper-texture" :style="{ fontSize: fontSize + 'px' }">
    <!-- Corner decorations -->
    <div class="fixed top-0 left-0 w-16 h-16 pointer-events-none z-40 opacity-20">
      <svg viewBox="0 0 60 60" fill="none"><path d="M0 0 L0 50 Q0 0 50 0" stroke="var(--gold-dark)" stroke-width="2" fill="none"/><path d="M0 0 L0 30 Q0 0 30 0" stroke="var(--gold-bright)" stroke-width="1.5" fill="none"/></svg>
    </div>
    <div class="fixed top-0 right-0 w-16 h-16 pointer-events-none z-40 opacity-20">
      <svg viewBox="0 0 60 60" fill="none"><path d="M60 0 L60 50 Q60 0 10 0" stroke="var(--gold-dark)" stroke-width="2" fill="none"/><path d="M60 0 L60 30 Q60 0 30 0" stroke="var(--gold-bright)" stroke-width="1.5" fill="none"/></svg>
    </div>

    <!-- Top navigation bar -->
    <nav class="sticky top-0 z-50 backdrop-blur-md bg-[var(--paper-cream)]/90 border-b border-[var(--paper-dark)]">
      <div class="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <router-link to="/" class="flex items-center gap-3 no-underline">
          <span class="seal-stamp text-lg px-2 py-1 hover:rotate-[-8deg] transition-transform cursor-pointer">羅</span>
          <span class="ink-title text-xl font-bold tracking-widest hidden sm:inline">羅氏族譜</span>
        </router-link>

        <!-- Desktop nav -->
        <div class="hidden md:flex items-center gap-1">
          <router-link v-for="link in navLinks" :key="link.path" :to="link.path"
            class="px-3 py-1.5 text-sm ink-body no-underline rounded-lg transition-all hover:bg-[var(--paper-aged)]"
            :class="$route.path === link.path ? 'bg-[var(--paper-aged)] font-bold' : ''">
            {{ link.icon }} {{ link.label }}
          </router-link>
          <div class="flex items-center gap-0.5 ml-2 pl-2 border-l" style="border-color: var(--paper-dark)">
            <button @click="changeFontSize(-1)" class="w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold transition-all hover:bg-[var(--paper-aged)]">A-</button>
            <button @click="changeFontSize(1)" class="w-7 h-7 rounded-lg flex items-center justify-center text-sm font-bold transition-all hover:bg-[var(--paper-aged)]">A+</button>
          </div>
        </div>

        <!-- Mobile hamburger -->
        <button @click="mobileMenuOpen = !mobileMenuOpen" class="md:hidden w-10 h-10 flex items-center justify-center rounded-lg hover:bg-[var(--paper-aged)]">
          <span class="text-xl">{{ mobileMenuOpen ? '✕' : '☰' }}</span>
        </button>
      </div>

      <!-- Mobile dropdown menu -->
      <div v-if="mobileMenuOpen" class="md:hidden border-t px-4 py-3 space-y-1" style="border-color: var(--paper-dark); background: var(--paper-cream)">
        <router-link v-for="link in navLinks" :key="link.path" :to="link.path"
          @click="mobileMenuOpen = false"
          class="block px-4 py-2.5 text-sm ink-body no-underline rounded-lg transition-all"
          :class="$route.path === link.path ? 'bg-[var(--paper-aged)] font-bold' : 'hover:bg-[var(--paper-aged)]'">
          {{ link.icon }} {{ link.label }}
        </router-link>
        <div class="flex items-center gap-2 px-4 py-2 border-t mt-2 pt-2" style="border-color: var(--paper-dark)">
          <span class="text-xs" style="color: var(--ink-light)">字體大小</span>
          <button @click="changeFontSize(-1)" class="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold bg-[var(--paper-aged)]">A-</button>
          <button @click="changeFontSize(1)" class="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold bg-[var(--paper-aged)]">A+</button>
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
const mobileMenuOpen = ref(false)

function changeFontSize(delta) {
  fontSize.value = Math.max(12, Math.min(24, fontSize.value + delta))
}

const navLinks = [
  { path: '/', label: '首頁', icon: '🏠' },
  { path: '/tree', label: '族譜', icon: '🌳' },
  { path: '/lineage', label: '溯源', icon: '📜' },
  { path: '/timeline', label: '時光', icon: '⏳' },
  { path: '/card', label: '名片', icon: '🪪' },
  { path: '/quiz', label: '問答', icon: '🧠' },
]
</script>

<style scoped>
.page-enter-active, .page-leave-active { transition: opacity 0.3s, transform 0.3s; }
.page-enter-from { opacity: 0; transform: translateY(10px); }
.page-leave-to { opacity: 0; transform: translateY(-10px); }
a { text-decoration: none; color: inherit; }
</style>
