<template>
  <PasswordGate v-if="!authenticated" @authenticated="authenticated = true" />
  <div v-else class="min-h-screen paper-texture" :style="{ fontSize: fontSize + 'px' }">
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
          <span class="ink-title text-xl font-bold tracking-widest hidden sm:inline">{{ isEn ? 'Luo Genealogy' : '羅氏族譜' }}</span>
        </router-link>

        <!-- Desktop nav -->
        <div class="hidden md:flex items-center gap-1">
          <router-link v-for="link in navLinks" :key="link.path" :to="link.path"
            class="px-3 py-1.5 text-sm ink-body no-underline rounded-lg transition-all hover:bg-[var(--paper-aged)]"
            :class="$route.path === link.path ? 'bg-[var(--paper-aged)] font-bold' : ''">
            {{ link.icon }} {{ isEn ? link.labelEn : link.label }}
          </router-link>
          <div class="flex items-center gap-0.5 ml-2 pl-2 border-l" style="border-color: var(--paper-dark)">
            <button @click="toggleLang" class="px-2 py-1 rounded-lg text-xs font-bold transition-all hover:bg-[var(--paper-aged)]" style="color: var(--gold-dark)">
              {{ isEn ? '中文' : 'EN' }}
            </button>
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
          {{ link.icon }} {{ isEn ? link.labelEn : link.label }}
        </router-link>
        <div class="flex items-center gap-2 px-4 py-2 border-t mt-2 pt-2" style="border-color: var(--paper-dark)">
          <button @click="toggleLang" class="px-3 py-1.5 rounded-lg text-xs font-bold bg-[var(--paper-aged)]" style="color: var(--gold-dark)">
            {{ isEn ? '切換中文' : 'English' }}
          </button>
          <span class="text-xs" style="color: var(--ink-light)">{{ isEn ? 'Font' : '字體' }}</span>
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
import PasswordGate from './components/PasswordGate.vue'
import { useLang } from './i18n.js'

const { isEn, toggleLang } = useLang()

function checkAuth() {
  const h = localStorage.getItem('zupu_auth')
  return h === '5776390c'
}

const authenticated = ref(checkAuth())
const fontSize = ref(16)
const mobileMenuOpen = ref(false)

function changeFontSize(delta) {
  fontSize.value = Math.max(12, Math.min(24, fontSize.value + delta))
}

const navLinks = [
  { path: '/', label: '首頁', labelEn: 'Home', icon: '🏠' },
  { path: '/tree', label: '族譜', labelEn: 'Tree', icon: '🌳' },
  { path: '/lineage', label: '溯源', labelEn: 'Lineage', icon: '📜' },
  { path: '/migration', label: '遷徙', labelEn: 'Migration', icon: '🗺️' },
  { path: '/timeline', label: '時光', labelEn: 'Timeline', icon: '⏳' },
  { path: '/card', label: '名片', labelEn: 'Card', icon: '🪪' },
  { path: '/book', label: '古卷', labelEn: 'Book', icon: '📖' },
  { path: '/quiz', label: '問答', labelEn: 'Quiz', icon: '🧠' },
]
</script>

<style scoped>
.page-enter-active, .page-leave-active { transition: opacity 0.3s, transform 0.3s; }
.page-enter-from { opacity: 0; transform: translateY(10px); }
.page-leave-to { opacity: 0; transform: translateY(-10px); }
a { text-decoration: none; color: inherit; }
</style>
