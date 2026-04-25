<template>
  <div class="min-h-screen paper-texture flex items-center justify-center px-4">
    <div class="max-w-sm w-full text-center">
      <!-- Seal -->
      <div class="seal-stamp text-4xl w-20 h-20 mx-auto mb-6 flex items-center justify-center">羅</div>

      <h1 class="ink-title text-2xl font-bold tracking-widest mb-2">羅氏族譜</h1>
      <p class="ink-body text-sm mb-8" style="color: var(--ink-light)">請輸入密碼以進入</p>

      <form @submit.prevent="checkPassword" class="space-y-4">
        <input
          v-model="password"
          type="password"
          placeholder="請輸入密碼"
          class="w-full px-4 py-3 rounded-lg border text-center ink-body text-lg tracking-wider"
          :class="error ? 'border-red-400 shake' : ''"
          style="background: var(--paper-cream); border-color: var(--paper-dark); outline: none;"
          autofocus
        />
        <p v-if="error" class="text-red-500 text-sm">密碼不正確，請重試</p>
        <button
          type="submit"
          class="w-full py-4 rounded-lg ink-body text-base font-bold tracking-widest transition-all hover:opacity-80"
          style="background: #4a3728; color: #f5f0e8; border: 2px solid #8b7355; cursor: pointer;"
        >
          確認進入
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const emit = defineEmits(['authenticated'])

const password = ref('')
const error = ref(false)

// Simple hash to avoid storing plaintext in source
const PASS_HASH = '5776390c'

function simpleHash(str) {
  let hash = 0
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i)
    hash = ((hash << 5) - hash) + char
    hash = hash & hash
  }
  return (hash >>> 0).toString(16)
}

function checkPassword() {
  if (simpleHash(password.value) === PASS_HASH) {
    localStorage.setItem('zupu_auth', PASS_HASH)
    emit('authenticated')
  } else {
    error.value = true
    setTimeout(() => { error.value = false }, 2000)
  }
}
</script>

<style scoped>
.shake {
  animation: shake 0.4s ease-in-out;
}
@keyframes shake {
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-8px); }
  75% { transform: translateX(8px); }
}
</style>
