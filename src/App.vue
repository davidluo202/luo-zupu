<template>
  <div class="min-h-screen paper-texture">
    <!-- Top navigation bar -->
    <nav class="sticky top-0 z-50 backdrop-blur-md bg-[var(--paper-cream)]/90 border-b border-[var(--paper-dark)]">
      <div class="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <router-link to="/" class="flex items-center gap-3 no-underline">
          <span class="seal-stamp text-lg px-2 py-1">羅</span>
          <span class="ink-title text-xl font-bold tracking-widest">羅氏族譜</span>
        </router-link>
        <div class="flex gap-1">
          <router-link v-for="link in navLinks" :key="link.path" :to="link.path"
            class="px-3 py-1.5 text-sm ink-body no-underline rounded-lg transition-all hover:bg-[var(--paper-aged)]"
            :class="$route.path === link.path ? 'bg-[var(--paper-aged)] font-bold' : ''">
            {{ link.icon }} {{ link.label }}
          </router-link>
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
