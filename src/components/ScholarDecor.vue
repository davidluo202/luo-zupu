<template>
  <svg :width="width" height="220" viewBox="0 0 800 220" fill="none" xmlns="http://www.w3.org/2000/svg" :style="{ opacity }">
    <!-- Bamboo grove left -->
    <g opacity="0.15" transform="translate(30,0)">
      <line x1="0" y1="20" x2="0" y2="220" stroke="var(--jade-green)" stroke-width="3"/>
      <line x1="0" y1="50" x2="-15" y2="35" stroke="var(--jade-green)" stroke-width="1.5"/>
      <line x1="0" y1="90" x2="18" y2="70" stroke="var(--jade-green)" stroke-width="1.5"/>
      <line x1="0" y1="130" x2="-12" y2="115" stroke="var(--jade-green)" stroke-width="1.5"/>
      <!-- Bamboo leaves -->
      <path d="M-15 35 Q-25 28 -30 22" stroke="var(--jade-green)" stroke-width="1" fill="none"/>
      <path d="M-15 35 Q-22 38 -28 35" stroke="var(--jade-green)" stroke-width="1" fill="none"/>
      <path d="M18 70 Q28 63 35 58" stroke="var(--jade-green)" stroke-width="1" fill="none"/>
      <path d="M18 70 Q25 74 32 72" stroke="var(--jade-green)" stroke-width="1" fill="none"/>
      <!-- Nodes -->
      <ellipse cx="0" cy="50" rx="4" ry="2" fill="var(--jade-green)" opacity="0.5"/>
      <ellipse cx="0" cy="90" rx="4" ry="2" fill="var(--jade-green)" opacity="0.5"/>
      <ellipse cx="0" cy="130" rx="4" ry="2" fill="var(--jade-green)" opacity="0.5"/>
    </g>
    <g opacity="0.1" transform="translate(55,30)">
      <line x1="0" y1="10" x2="0" y2="190" stroke="var(--jade-green)" stroke-width="2.5"/>
      <line x1="0" y1="60" x2="14" y2="45" stroke="var(--jade-green)" stroke-width="1"/>
      <line x1="0" y1="110" x2="-16" y2="95" stroke="var(--jade-green)" stroke-width="1"/>
      <path d="M14 45 Q22 38 28 34" stroke="var(--jade-green)" stroke-width="0.8" fill="none"/>
      <path d="M-16 95 Q-24 90 -30 88" stroke="var(--jade-green)" stroke-width="0.8" fill="none"/>
    </g>

    <!-- Scroll/書卷 center -->
    <g opacity="0.12" transform="translate(370, 140)">
      <!-- Scroll body -->
      <rect x="-40" y="-8" width="80" height="50" rx="3" fill="var(--paper-dark)"/>
      <rect x="-35" y="-5" width="70" height="44" rx="2" fill="var(--paper-aged)"/>
      <!-- Text lines -->
      <line x1="-25" y1="5" x2="25" y2="5" stroke="var(--ink-faint)" stroke-width="0.8"/>
      <line x1="-25" y1="12" x2="20" y2="12" stroke="var(--ink-faint)" stroke-width="0.8"/>
      <line x1="-25" y1="19" x2="22" y2="19" stroke="var(--ink-faint)" stroke-width="0.8"/>
      <line x1="-25" y1="26" x2="18" y2="26" stroke="var(--ink-faint)" stroke-width="0.8"/>
      <!-- Scroll rollers -->
      <rect x="-45" y="-10" width="90" height="5" rx="2.5" fill="var(--gold-dark)" opacity="0.6"/>
      <rect x="-45" y="44" width="90" height="5" rx="2.5" fill="var(--gold-dark)" opacity="0.6"/>
    </g>

    <!-- Ink brush and stone right -->
    <g opacity="0.12" transform="translate(700, 120)">
      <!-- Ink stone (硯台) -->
      <ellipse cx="0" cy="60" rx="30" ry="12" fill="var(--ink-medium)"/>
      <ellipse cx="0" cy="58" rx="25" ry="9" fill="var(--ink-dark)"/>
      <ellipse cx="-5" cy="56" rx="10" ry="5" fill="var(--ink-black)" opacity="0.5"/>
      <!-- Brush (毛筆) -->
      <line x1="25" y1="10" x2="25" y2="55" stroke="var(--gold-dark)" stroke-width="2.5"/>
      <path d="M25 55 Q25 65 22 70 Q25 68 28 70 Q25 65 25 55" fill="var(--ink-medium)"/>
      <!-- Brush tip -->
      <path d="M22 70 Q25 80 25 85 Q25 80 28 70" fill="var(--ink-dark)" opacity="0.7"/>
    </g>

    <!-- Bamboo grove right -->
    <g opacity="0.1" transform="translate(750,10)">
      <line x1="0" y1="10" x2="0" y2="210" stroke="var(--jade-green)" stroke-width="2"/>
      <line x1="0" y1="70" x2="-12" y2="55" stroke="var(--jade-green)" stroke-width="1"/>
      <path d="M-12 55 Q-20 48 -26 44" stroke="var(--jade-green)" stroke-width="0.8" fill="none"/>
      <path d="M-12 55 Q-18 58 -24 56" stroke="var(--jade-green)" stroke-width="0.8" fill="none"/>
    </g>

    <!-- Plum blossom (梅花) scattered -->
    <g opacity="0.08">
      <circle cx="120" cy="30" r="4" fill="var(--red-seal)"/>
      <circle cx="128" cy="25" r="3" fill="var(--red-seal)"/>
      <circle cx="115" cy="22" r="3.5" fill="var(--red-seal)"/>
      <circle cx="135" cy="35" r="2.5" fill="var(--red-seal)"/>
      <path d="M110 40 Q120 30 130 20" stroke="var(--ink-medium)" stroke-width="1" fill="none"/>

      <circle cx="650" cy="50" r="3.5" fill="var(--red-seal)"/>
      <circle cx="658" cy="45" r="2.5" fill="var(--red-seal)"/>
      <circle cx="645" cy="42" r="3" fill="var(--red-seal)"/>
      <path d="M640 55 Q650 45 660 38" stroke="var(--ink-medium)" stroke-width="0.8" fill="none"/>
    </g>

    <!-- Light mountains in background -->
    <path d="M0 220 L0 180 Q80 140 180 170 Q280 130 380 160 Q480 120 580 155 Q650 135 720 150 Q770 140 800 160 L800 220 Z"
      fill="var(--ink-faint)" opacity="0.06"/>
  </svg>
</template>

<script setup>
defineProps({
  width: { type: String, default: '100%' },
  opacity: { type: Number, default: 1 }
})
</script>
