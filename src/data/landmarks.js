/**
 * 水墨風地標SVG插圖
 * 每個地點配一個簡筆水墨畫風格的SVG
 */

export const landmarks = {
  xuancheng: {
    name: '宣城',
    svg: `<svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- Ancient city wall -->
      <path d="M20 90 L20 50 L40 40 L60 50 L60 35 L80 25 L100 35 L100 50 L120 40 L140 50 L140 35 L160 25 L180 35 L180 90" stroke="#5c4a35" stroke-width="1.5" fill="none" opacity="0.7"/>
      <rect x="85" y="55" width="30" height="35" rx="2" stroke="#5c4a35" stroke-width="1" fill="none" opacity="0.5"/>
      <path d="M80 55 L100 42 L120 55" stroke="#5c4a35" stroke-width="1" fill="none" opacity="0.6"/>
      <!-- Mountains behind -->
      <path d="M0 60 Q30 20 60 50 Q90 10 120 45 Q150 15 180 40 Q195 30 200 35 L200 60" fill="#8b7355" opacity="0.15"/>
      <!-- Ground -->
      <path d="M0 90 Q50 85 100 90 Q150 95 200 90" stroke="#c4a055" stroke-width="0.5" fill="none" opacity="0.4"/>
      <text x="100" y="112" text-anchor="middle" font-size="11" fill="#8b7355" font-weight="700" font-family="serif">宣城古郡</text>
    </svg>`,
  },
  shibi: {
    name: '石壁村',
    svg: `<svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- Hakka stone wall village -->
      <rect x="60" y="45" width="80" height="45" rx="2" stroke="#5c4a35" stroke-width="1.5" fill="none" opacity="0.6"/>
      <path d="M55 45 L100 22 L145 45" stroke="#5c4a35" stroke-width="1.5" fill="none" opacity="0.7"/>
      <line x1="90" y1="60" x2="110" y2="60" stroke="#5c4a35" stroke-width="0.8" opacity="0.4"/>
      <line x1="90" y1="68" x2="110" y2="68" stroke="#5c4a35" stroke-width="0.8" opacity="0.4"/>
      <rect x="88" y="72" width="24" height="18" rx="1" stroke="#5c4a35" stroke-width="1" fill="none" opacity="0.5"/>
      <!-- Stone wall texture -->
      <path d="M30 90 Q40 70 50 85 L60 90" stroke="#8b7355" stroke-width="1" fill="none" opacity="0.3"/>
      <path d="M140 90 Q150 75 160 82 L170 90" stroke="#8b7355" stroke-width="1" fill="none" opacity="0.3"/>
      <text x="100" y="112" text-anchor="middle" font-size="11" fill="#8b7355" font-weight="700" font-family="serif">寧化石壁</text>
    </svg>`,
  },
  xingning: {
    name: '興寧',
    svg: `<svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- Hakka roundhouse 围龙屋 -->
      <ellipse cx="100" cy="65" rx="55" ry="30" stroke="#5c4a35" stroke-width="1.5" fill="none" opacity="0.6"/>
      <ellipse cx="100" cy="65" rx="35" ry="18" stroke="#5c4a35" stroke-width="1" fill="none" opacity="0.4"/>
      <rect x="85" y="55" width="30" height="20" rx="1" stroke="#5c4a35" stroke-width="1" fill="none" opacity="0.5"/>
      <!-- Hills -->
      <path d="M0 75 Q20 55 40 70 Q60 50 80 65" stroke="#8b7355" stroke-width="1" fill="none" opacity="0.25"/>
      <path d="M120 65 Q140 50 160 68 Q180 55 200 75" stroke="#8b7355" stroke-width="1" fill="none" opacity="0.25"/>
      <!-- Paddy fields -->
      <path d="M10 95 Q50 88 100 92 Q150 88 190 95" stroke="#6b8e5a" stroke-width="0.5" fill="none" opacity="0.3"/>
      <path d="M20 100 Q60 94 100 97 Q140 94 180 100" stroke="#6b8e5a" stroke-width="0.5" fill="none" opacity="0.2"/>
      <text x="100" y="112" text-anchor="middle" font-size="11" fill="#8b7355" font-weight="700" font-family="serif">興寧圍龍屋</text>
    </svg>`,
  },
  yangzhou: {
    name: '揚州',
    svg: `<svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- Five Pavilion Bridge 五亭桥 -->
      <path d="M30 80 Q60 70 80 80 Q100 70 120 80 Q140 70 170 80" stroke="#5c4a35" stroke-width="1.5" fill="none" opacity="0.6"/>
      <!-- Pavilions -->
      <path d="M50 70 L60 55 L70 70" stroke="#5c4a35" stroke-width="1" fill="none" opacity="0.5"/>
      <path d="M90 70 L100 50 L110 70" stroke="#5c4a35" stroke-width="1.2" fill="none" opacity="0.6"/>
      <path d="M130 70 L140 55 L150 70" stroke="#5c4a35" stroke-width="1" fill="none" opacity="0.5"/>
      <!-- Water ripples -->
      <path d="M20 88 Q40 85 60 88 Q80 91 100 88 Q120 85 140 88 Q160 91 180 88" stroke="#5c7a8a" stroke-width="0.5" fill="none" opacity="0.3"/>
      <path d="M30 93 Q50 90 70 93 Q90 96 110 93 Q130 90 150 93 Q170 96 185 93" stroke="#5c7a8a" stroke-width="0.5" fill="none" opacity="0.2"/>
      <!-- Willow -->
      <path d="M170 40 Q172 50 175 65 Q178 75 180 85" stroke="#6b8e5a" stroke-width="0.8" fill="none" opacity="0.4"/>
      <path d="M170 45 Q165 55 160 70" stroke="#6b8e5a" stroke-width="0.5" fill="none" opacity="0.3"/>
      <text x="100" y="112" text-anchor="middle" font-size="11" fill="#8b7355" font-weight="700" font-family="serif">煙花揚州</text>
    </svg>`,
  },
  huizhou: {
    name: '惠州',
    svg: `<svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- West Lake pagoda -->
      <rect x="88" y="30" width="24" height="55" rx="1" stroke="#5c4a35" stroke-width="1" fill="none" opacity="0.5"/>
      <path d="M82 30 L100 18 L118 30" stroke="#5c4a35" stroke-width="1.2" fill="none" opacity="0.6"/>
      <path d="M84 50 L100 42 L116 50" stroke="#5c4a35" stroke-width="0.8" fill="none" opacity="0.4"/>
      <path d="M84 68 L100 60 L116 68" stroke="#5c4a35" stroke-width="0.8" fill="none" opacity="0.4"/>
      <!-- Lake -->
      <ellipse cx="100" cy="92" rx="75" ry="10" stroke="#5c7a8a" stroke-width="0.8" fill="#5c7a8a" opacity="0.08"/>
      <path d="M25 90 Q50 86 75 90 Q100 94 125 90 Q150 86 175 90" stroke="#5c7a8a" stroke-width="0.5" fill="none" opacity="0.3"/>
      <text x="100" y="112" text-anchor="middle" font-size="11" fill="#8b7355" font-weight="700" font-family="serif">惠州西湖</text>
    </svg>`,
  },
  sichuan: {
    name: '四川',
    svg: `<svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- Mountains 峨眉 -->
      <path d="M0 90 L40 30 L80 70 L120 20 L160 65 L200 40 L200 90 Z" fill="#5c4a35" opacity="0.1"/>
      <path d="M0 90 L40 30 L80 70" stroke="#5c4a35" stroke-width="1.5" fill="none" opacity="0.5"/>
      <path d="M80 70 L120 20 L160 65" stroke="#5c4a35" stroke-width="1.5" fill="none" opacity="0.6"/>
      <path d="M160 65 L200 40" stroke="#5c4a35" stroke-width="1.5" fill="none" opacity="0.5"/>
      <!-- Clouds -->
      <path d="M30 55 Q45 48 60 55 Q75 48 90 55" stroke="#8b7355" stroke-width="0.5" fill="none" opacity="0.3"/>
      <path d="M110 45 Q125 38 140 45" stroke="#8b7355" stroke-width="0.5" fill="none" opacity="0.25"/>
      <!-- Bamboo -->
      <line x1="25" y1="60" x2="25" y2="90" stroke="#6b8e5a" stroke-width="1" opacity="0.4"/>
      <path d="M25 65 L32 60" stroke="#6b8e5a" stroke-width="0.5" fill="none" opacity="0.3"/>
      <path d="M25 75 L18 70" stroke="#6b8e5a" stroke-width="0.5" fill="none" opacity="0.3"/>
      <text x="100" y="112" text-anchor="middle" font-size="11" fill="#8b7355" font-weight="700" font-family="serif">巴蜀四川</text>
    </svg>`,
  },
  ganzhou: {
    name: '贛州',
    svg: `<svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- Ancient Ganzhou wall 赣州古城墙 -->
      <path d="M20 85 L20 50 L35 45 L50 50 L50 45 L65 40 L80 45 L80 50 L95 45 L110 50 L110 45 L125 40 L140 45 L140 50 L155 45 L170 50 L170 85" stroke="#5c4a35" stroke-width="1.2" fill="none" opacity="0.5"/>
      <!-- Gate -->
      <path d="M80 85 L80 60 Q95 52 110 60 L110 85" stroke="#5c4a35" stroke-width="1.2" fill="none" opacity="0.6"/>
      <!-- River -->
      <path d="M0 95 Q50 90 100 95 Q150 100 200 95" stroke="#5c7a8a" stroke-width="0.8" fill="none" opacity="0.3"/>
      <text x="100" y="112" text-anchor="middle" font-size="11" fill="#8b7355" font-weight="700" font-family="serif">贛州古城</text>
    </svg>`,
  },
  nanyang: {
    name: '南洋',
    svg: `<svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- Ship -->
      <path d="M60 65 L80 50 L140 50 L160 65 Z" stroke="#5c4a35" stroke-width="1.2" fill="none" opacity="0.5"/>
      <path d="M90 50 L90 25" stroke="#5c4a35" stroke-width="1" opacity="0.5"/>
      <path d="M90 28 L120 35 L90 42" stroke="#5c4a35" stroke-width="0.8" fill="none" opacity="0.4"/>
      <!-- Waves -->
      <path d="M10 75 Q30 68 50 75 Q70 82 90 75 Q110 68 130 75 Q150 82 170 75 Q185 70 200 75" stroke="#5c7a8a" stroke-width="0.8" fill="none" opacity="0.3"/>
      <path d="M0 82 Q25 76 50 82 Q75 88 100 82 Q125 76 150 82 Q175 88 200 82" stroke="#5c7a8a" stroke-width="0.5" fill="none" opacity="0.2"/>
      <!-- Palm tree on island -->
      <path d="M170 55 Q175 40 172 25" stroke="#6b8e5a" stroke-width="1" fill="none" opacity="0.4"/>
      <path d="M172 28 Q180 22 188 25" stroke="#6b8e5a" stroke-width="0.8" fill="none" opacity="0.3"/>
      <path d="M172 28 Q165 20 158 22" stroke="#6b8e5a" stroke-width="0.8" fill="none" opacity="0.3"/>
      <text x="100" y="112" text-anchor="middle" font-size="11" fill="#8b7355" font-weight="700" font-family="serif">漂洋南洋</text>
    </svg>`,
  },
  guangzhou: {
    name: '廣州',
    svg: `<svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- Five Rams 五羊雕塑 simplified -->
      <path d="M85 85 Q90 55 95 45 Q100 35 105 40 Q108 45 110 55" stroke="#5c4a35" stroke-width="1.5" fill="none" opacity="0.6"/>
      <circle cx="100" cy="35" r="6" stroke="#5c4a35" stroke-width="1" fill="none" opacity="0.5"/>
      <path d="M94 32 L90 26" stroke="#5c4a35" stroke-width="0.8" opacity="0.4"/>
      <path d="M106 32 L110 26" stroke="#5c4a35" stroke-width="0.8" opacity="0.4"/>
      <!-- Canton Tower silhouette -->
      <path d="M155 85 Q158 50 160 20 Q162 50 165 85" stroke="#5c4a35" stroke-width="1" fill="none" opacity="0.35"/>
      <ellipse cx="160" cy="55" rx="4" ry="8" stroke="#5c4a35" stroke-width="0.5" fill="none" opacity="0.3"/>
      <!-- Banyan tree -->
      <path d="M35 85 L35 55" stroke="#6b8e5a" stroke-width="1.5" opacity="0.4"/>
      <circle cx="35" cy="48" r="15" fill="#6b8e5a" opacity="0.12"/>
      <path d="M35 60 Q25 65 20 75 Q18 80 20 85" stroke="#6b8e5a" stroke-width="0.5" fill="none" opacity="0.3"/>
      <text x="100" y="112" text-anchor="middle" font-size="11" fill="#8b7355" font-weight="700" font-family="serif">羊城廣州</text>
    </svg>`,
  },
  qujing: {
    name: '曲靖',
    svg: `<svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- Yunnan plateau mountains -->
      <path d="M0 85 L30 35 L60 65 L90 25 L120 60 L150 30 L180 55 L200 45 L200 85 Z" fill="#5c4a35" opacity="0.08"/>
      <path d="M0 85 L30 35 L60 65 L90 25 L120 60" stroke="#5c4a35" stroke-width="1.2" fill="none" opacity="0.5"/>
      <path d="M120 60 L150 30 L180 55 L200 45" stroke="#5c4a35" stroke-width="1.2" fill="none" opacity="0.45"/>
      <!-- Rapeseed flowers (Qujing is famous for) -->
      <circle cx="40" cy="80" r="2" fill="#c4a055" opacity="0.4"/>
      <circle cx="55" cy="78" r="2" fill="#c4a055" opacity="0.35"/>
      <circle cx="70" cy="82" r="2" fill="#c4a055" opacity="0.4"/>
      <circle cx="85" cy="79" r="2" fill="#c4a055" opacity="0.3"/>
      <circle cx="100" cy="83" r="2" fill="#c4a055" opacity="0.35"/>
      <circle cx="115" cy="80" r="2" fill="#c4a055" opacity="0.4"/>
      <circle cx="130" cy="77" r="2" fill="#c4a055" opacity="0.3"/>
      <circle cx="145" cy="81" r="2" fill="#c4a055" opacity="0.35"/>
      <circle cx="160" cy="79" r="2" fill="#c4a055" opacity="0.4"/>
      <!-- Clouds -->
      <path d="M50 50 Q65 42 80 50" stroke="#8b7355" stroke-width="0.5" fill="none" opacity="0.25"/>
      <text x="100" y="112" text-anchor="middle" font-size="11" fill="#8b7355" font-weight="700" font-family="serif">雲南曲靖</text>
    </svg>`,
  },
  shenzhen: {
    name: '深圳',
    svg: `<svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- Shenzhen skyline -->
      <rect x="30" y="40" width="18" height="50" rx="1" stroke="#5c4a35" stroke-width="1" fill="none" opacity="0.4"/>
      <rect x="55" y="30" width="15" height="60" rx="1" stroke="#5c4a35" stroke-width="1" fill="none" opacity="0.45"/>
      <!-- Ping An tower (tallest) -->
      <rect x="80" y="15" width="16" height="75" rx="1" stroke="#5c4a35" stroke-width="1.2" fill="none" opacity="0.55"/>
      <path d="M80 15 L88 8 L96 15" stroke="#5c4a35" stroke-width="1" fill="none" opacity="0.5"/>
      <rect x="105" y="35" width="18" height="55" rx="1" stroke="#5c4a35" stroke-width="1" fill="none" opacity="0.4"/>
      <rect x="130" y="25" width="14" height="65" rx="1" stroke="#5c4a35" stroke-width="1" fill="none" opacity="0.45"/>
      <rect x="150" y="42" width="20" height="48" rx="1" stroke="#5c4a35" stroke-width="1" fill="none" opacity="0.4"/>
      <!-- Sea -->
      <path d="M0 95 Q50 90 100 95 Q150 100 200 95" stroke="#5c7a8a" stroke-width="0.5" fill="none" opacity="0.3"/>
      <text x="100" y="112" text-anchor="middle" font-size="11" fill="#8b7355" font-weight="700" font-family="serif">鵬城深圳</text>
    </svg>`,
  },
  newzealand: {
    name: '紐西蘭',
    svg: `<svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- Sky Tower Auckland -->
      <line x1="100" y1="10" x2="100" y2="85" stroke="#5c4a35" stroke-width="1.5" opacity="0.5"/>
      <ellipse cx="100" cy="40" rx="8" ry="3" stroke="#5c4a35" stroke-width="1" fill="none" opacity="0.4"/>
      <circle cx="100" cy="10" r="3" stroke="#5c4a35" stroke-width="0.8" fill="none" opacity="0.4"/>
      <!-- Mountains (Southern Alps) -->
      <path d="M0 85 Q15 60 30 75 Q45 50 60 70 Q70 55 80 65" stroke="#5c4a35" stroke-width="1" fill="none" opacity="0.3"/>
      <path d="M120 65 Q135 50 150 68 Q165 45 180 60 Q190 55 200 60" stroke="#5c4a35" stroke-width="1" fill="none" opacity="0.3"/>
      <!-- Snow caps -->
      <path d="M42 52 L45 50 L48 52" stroke="#8b7355" stroke-width="0.5" fill="none" opacity="0.3"/>
      <path d="M163 47 L165 45 L167 47" stroke="#8b7355" stroke-width="0.5" fill="none" opacity="0.3"/>
      <!-- Fern -->
      <path d="M20 90 Q22 80 25 75" stroke="#6b8e5a" stroke-width="0.8" fill="none" opacity="0.4"/>
      <path d="M23 80 L28 77" stroke="#6b8e5a" stroke-width="0.5" opacity="0.3"/>
      <path d="M24 84 L29 81" stroke="#6b8e5a" stroke-width="0.5" opacity="0.3"/>
      <text x="100" y="112" text-anchor="middle" font-size="11" fill="#8b7355" font-weight="700" font-family="serif">紐西蘭奧克蘭</text>
    </svg>`,
  },
  usa: {
    name: '美國',
    svg: `<svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- Statue of Liberty simplified -->
      <path d="M95 85 L95 40 Q97 35 100 30 Q103 35 105 40 L105 85" stroke="#5c4a35" stroke-width="1.2" fill="none" opacity="0.55"/>
      <!-- Crown -->
      <path d="M92 30 L95 22 L98 28 L100 18 L102 28 L105 22 L108 30" stroke="#5c4a35" stroke-width="1" fill="none" opacity="0.5"/>
      <!-- Torch arm -->
      <path d="M105 45 L118 30 L120 25" stroke="#5c4a35" stroke-width="1" fill="none" opacity="0.45"/>
      <circle cx="120" cy="22" r="3" stroke="#c4a055" stroke-width="0.8" fill="none" opacity="0.4"/>
      <!-- Base -->
      <path d="M85 85 L80 95 L120 95 L115 85" stroke="#5c4a35" stroke-width="1" fill="none" opacity="0.4"/>
      <!-- NYC skyline behind -->
      <rect x="30" y="55" width="10" height="35" stroke="#5c4a35" stroke-width="0.5" fill="none" opacity="0.2"/>
      <rect x="45" y="45" width="8" height="45" stroke="#5c4a35" stroke-width="0.5" fill="none" opacity="0.2"/>
      <rect x="145" y="50" width="12" height="40" stroke="#5c4a35" stroke-width="0.5" fill="none" opacity="0.2"/>
      <rect x="162" y="55" width="10" height="35" stroke="#5c4a35" stroke-width="0.5" fill="none" opacity="0.2"/>
      <text x="100" y="112" text-anchor="middle" font-size="11" fill="#8b7355" font-weight="700" font-family="serif">美利堅</text>
    </svg>`,
  },
}
