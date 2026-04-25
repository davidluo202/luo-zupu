<template>
  <svg :width="width" :height="height" viewBox="0 0 800 200" fill="none" xmlns="http://www.w3.org/2000/svg" class="ink-mountains" :style="{ opacity }">
    <!-- Far mountains -->
    <path d="M0 200 L0 140 Q50 80 120 110 Q180 60 250 100 Q300 50 380 90 Q420 40 480 80 Q540 30 600 70 Q660 50 720 90 Q760 60 800 100 L800 200 Z"
      fill="var(--paper-dark)" opacity="0.15"/>
    <!-- Mid mountains -->
    <path d="M0 200 L0 160 Q80 100 160 130 Q220 90 300 120 Q360 70 440 110 Q500 80 560 100 Q620 60 700 100 Q750 80 800 120 L800 200 Z"
      fill="var(--ink-faint)" opacity="0.12"/>
    <!-- Near mountains -->
    <path d="M0 200 L0 170 Q60 130 140 155 Q200 120 280 145 Q340 100 420 135 Q480 110 540 140 Q600 120 680 145 Q740 125 800 150 L800 200 Z"
      fill="var(--ink-light)" opacity="0.1"/>
    <!-- Water -->
    <path d="M0 185 Q100 178 200 183 Q300 176 400 182 Q500 175 600 181 Q700 177 800 183 L800 200 L0 200 Z"
      fill="var(--ink-faint)" opacity="0.08"/>
    <!-- Boat -->
    <g transform="translate(350, 172)" opacity="0.15">
      <path d="M-15 5 Q0 -2 15 5" stroke="var(--ink-medium)" stroke-width="1.5" fill="none"/>
      <line x1="0" y1="-12" x2="0" y2="3" stroke="var(--ink-medium)" stroke-width="1"/>
      <path d="M0 -12 L8 -6 L0 -2" fill="var(--ink-light)" opacity="0.5"/>
    </g>
    <!-- Pine tree left -->
    <g transform="translate(80, 140)" opacity="0.12">
      <line x1="0" y1="0" x2="0" y2="30" stroke="var(--ink-medium)" stroke-width="1.5"/>
      <path d="M-8 5 L0 -8 L8 5 Z" fill="var(--ink-medium)"/>
      <path d="M-6 12 L0 2 L6 12 Z" fill="var(--ink-medium)"/>
    </g>
    <!-- Pine tree right -->
    <g transform="translate(700, 130)" opacity="0.1">
      <line x1="0" y1="0" x2="0" y2="35" stroke="var(--ink-medium)" stroke-width="1.5"/>
      <path d="M-10 5 L0 -10 L10 5 Z" fill="var(--ink-medium)"/>
      <path d="M-8 15 L0 3 L8 15 Z" fill="var(--ink-medium)"/>
    </g>
    <!-- Clouds -->
    <g opacity="0.06">
      <circle cx="150" cy="60" r="20" fill="var(--ink-light)"/>
      <circle cx="170" cy="55" r="15" fill="var(--ink-light)"/>
      <circle cx="135" cy="55" r="12" fill="var(--ink-light)"/>
      <circle cx="580" cy="40" r="18" fill="var(--ink-light)"/>
      <circle cx="600" cy="35" r="14" fill="var(--ink-light)"/>
    </g>
  </svg>
</template>

<script setup>
defineProps({
  width: { type: String, default: '100%' },
  height: { type: String, default: '200' },
  opacity: { type: Number, default: 1 }
})
</script>

<style scoped>
.ink-mountains { display: block; }
</style>
