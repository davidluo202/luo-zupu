/**
 * 水墨風地標SVG插圖（寫實版）
 * 每個地點配一個精細水墨畫風格的SVG，突出地標特色
 */

export const landmarks = {
  xuancheng: {
    name: '宣城',
    svg: `<svg viewBox="0 0 240 140" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- Distant layered mountains -->
      <path d="M0 80 Q20 40 50 60 Q70 30 100 55 Q120 25 150 50 Q175 20 210 45 L240 55 L240 80 Z" fill="#5c4a35" opacity="0.08"/>
      <path d="M0 80 Q20 40 50 60" stroke="#5c4a35" stroke-width="1.2" fill="none" opacity="0.4"/>
      <path d="M50 60 Q70 30 100 55" stroke="#5c4a35" stroke-width="1.5" fill="none" opacity="0.5"/>
      <path d="M100 55 Q120 25 150 50" stroke="#5c4a35" stroke-width="1.8" fill="none" opacity="0.55"/>
      <path d="M150 50 Q175 20 210 45 L240 55" stroke="#5c4a35" stroke-width="1.2" fill="none" opacity="0.4"/>
      <!-- Clouds wisping around peaks -->
      <path d="M55 52 Q70 46 85 52 Q95 47 105 52" stroke="#8b7355" stroke-width="0.6" fill="none" opacity="0.2"/>
      <path d="M130 42 Q145 36 160 42" stroke="#8b7355" stroke-width="0.5" fill="none" opacity="0.18"/>
      <!-- Ancient city gate tower (谢朓楼 style) -->
      <rect x="90" y="62" width="60" height="28" rx="1" stroke="#5c4a35" stroke-width="1.2" fill="#5c4a35" fill-opacity="0.04"/>
      <!-- Tiered roof -->
      <path d="M82 62 L120 44 L158 62" stroke="#5c4a35" stroke-width="1.5" fill="none" opacity="0.6"/>
      <path d="M85 62 L120 47 L155 62" stroke="#5c4a35" stroke-width="0.8" fill="none" opacity="0.3"/>
      <!-- Roof ridge ornaments -->
      <path d="M82 62 Q80 60 78 62" stroke="#5c4a35" stroke-width="0.8" fill="none" opacity="0.4"/>
      <path d="M158 62 Q160 60 162 62" stroke="#5c4a35" stroke-width="0.8" fill="none" opacity="0.4"/>
      <!-- Windows -->
      <rect x="100" y="70" width="8" height="10" rx="4" stroke="#5c4a35" stroke-width="0.8" fill="none" opacity="0.4"/>
      <rect x="118" y="70" width="8" height="10" rx="4" stroke="#5c4a35" stroke-width="0.8" fill="none" opacity="0.4"/>
      <rect x="132" y="70" width="8" height="10" rx="4" stroke="#5c4a35" stroke-width="0.8" fill="none" opacity="0.4"/>
      <!-- Gate arch -->
      <path d="M110 90 L110 80 Q120 73 130 80 L130 90" stroke="#5c4a35" stroke-width="1.2" fill="none" opacity="0.5"/>
      <!-- City wall extending -->
      <path d="M90 90 L50 90 L50 80 L55 78 L60 80 L65 78 L70 80 L75 78 L80 80 L85 78 L90 80" stroke="#5c4a35" stroke-width="0.8" fill="none" opacity="0.35"/>
      <path d="M150 90 L190 90 L190 80 L185 78 L180 80 L175 78 L170 80 L165 78 L160 80 L155 78 L150 80" stroke="#5c4a35" stroke-width="0.8" fill="none" opacity="0.35"/>
      <!-- Pine trees beside -->
      <path d="M30 90 L30 72" stroke="#4a6741" stroke-width="1.2" opacity="0.4"/>
      <path d="M30 75 Q22 68 18 72 Q24 66 30 70" fill="#4a6741" opacity="0.15"/>
      <path d="M30 80 Q24 74 20 77 Q25 72 30 75" fill="#4a6741" opacity="0.12"/>
      <path d="M200 90 L200 74" stroke="#4a6741" stroke-width="1" opacity="0.35"/>
      <path d="M200 77 Q194 71 191 74 Q195 69 200 73" fill="#4a6741" opacity="0.12"/>
      <!-- Ground line -->
      <path d="M0 90 Q60 87 120 90 Q180 93 240 90" stroke="#c4a055" stroke-width="0.5" fill="none" opacity="0.3"/>
      <!-- River -->
      <path d="M0 100 Q40 96 80 100 Q120 104 160 100 Q200 96 240 100" stroke="#5c7a8a" stroke-width="0.6" fill="none" opacity="0.25"/>
      <path d="M10 104 Q50 100 90 104 Q130 108 170 104 Q210 100 240 104" stroke="#5c7a8a" stroke-width="0.4" fill="none" opacity="0.15"/>
      <text x="120" y="132" text-anchor="middle" font-size="11" fill="#8b7355" font-weight="700" font-family="serif">宣城古郡</text>
    </svg>`,
  },
  shibi: {
    name: '石壁村',
    svg: `<svg viewBox="0 0 240 140" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- Rolling Fujian hills -->
      <path d="M0 70 Q30 45 60 62 Q80 40 110 58 Q130 35 160 55 Q185 42 210 52 L240 58 L240 70 Z" fill="#4a6741" opacity="0.08"/>
      <path d="M0 70 Q30 45 60 62 Q80 40 110 58 Q130 35 160 55" stroke="#4a6741" stroke-width="1" fill="none" opacity="0.35"/>
      <!-- Stone wall (石壁) -->
      <rect x="30" y="68" width="25" height="22" stroke="#5c4a35" stroke-width="1.5" fill="none" opacity="0.5"/>
      <line x1="30" y1="74" x2="55" y2="74" stroke="#5c4a35" stroke-width="0.5" opacity="0.3"/>
      <line x1="30" y1="80" x2="55" y2="80" stroke="#5c4a35" stroke-width="0.5" opacity="0.3"/>
      <line x1="30" y1="86" x2="55" y2="86" stroke="#5c4a35" stroke-width="0.5" opacity="0.3"/>
      <line x1="42" y1="68" x2="42" y2="90" stroke="#5c4a35" stroke-width="0.4" opacity="0.2"/>
      <!-- Hakka ancestral hall -->
      <rect x="80" y="58" width="80" height="32" rx="1" stroke="#5c4a35" stroke-width="1.2" fill="#5c4a35" fill-opacity="0.03"/>
      <!-- Main tiered roof -->
      <path d="M72 58 L120 38 L168 58" stroke="#5c4a35" stroke-width="1.5" fill="none" opacity="0.6"/>
      <path d="M76 58 L120 42 L164 58" stroke="#5c4a35" stroke-width="0.8" fill="none" opacity="0.3"/>
      <!-- Ridge ornaments -->
      <path d="M72 58 Q69 55 67 58" stroke="#5c4a35" stroke-width="0.8" opacity="0.4"/>
      <path d="M168 58 Q171 55 173 58" stroke="#5c4a35" stroke-width="0.8" opacity="0.4"/>
      <!-- Columns -->
      <line x1="95" y1="58" x2="95" y2="90" stroke="#5c4a35" stroke-width="0.6" opacity="0.3"/>
      <line x1="120" y1="58" x2="120" y2="90" stroke="#5c4a35" stroke-width="0.6" opacity="0.3"/>
      <line x1="145" y1="58" x2="145" y2="90" stroke="#5c4a35" stroke-width="0.6" opacity="0.3"/>
      <!-- Door -->
      <path d="M112 90 L112 75 Q120 69 128 75 L128 90" stroke="#5c4a35" stroke-width="1" fill="none" opacity="0.5"/>
      <!-- Side buildings -->
      <rect x="170" y="72" width="35" height="18" stroke="#5c4a35" stroke-width="0.8" fill="none" opacity="0.3"/>
      <path d="M167 72 L187 60 L208 72" stroke="#5c4a35" stroke-width="0.8" fill="none" opacity="0.35"/>
      <!-- Banyan tree -->
      <path d="M210 90 L210 60" stroke="#4a6741" stroke-width="1.5" opacity="0.4"/>
      <ellipse cx="210" cy="52" rx="18" ry="12" fill="#4a6741" opacity="0.12"/>
      <path d="M210 68 Q202 75 198 85 Q196 88 198 90" stroke="#4a6741" stroke-width="0.6" fill="none" opacity="0.25"/>
      <path d="M210 65 Q218 72 222 82 Q224 88 222 90" stroke="#4a6741" stroke-width="0.5" fill="none" opacity="0.2"/>
      <!-- Path -->
      <path d="M120 90 Q120 95 118 100 Q115 108 120 112" stroke="#8b7355" stroke-width="0.8" fill="none" opacity="0.2"/>
      <!-- Ground -->
      <path d="M0 90 Q60 87 120 90 Q180 93 240 90" stroke="#c4a055" stroke-width="0.5" fill="none" opacity="0.3"/>
      <text x="120" y="132" text-anchor="middle" font-size="11" fill="#8b7355" font-weight="700" font-family="serif">寧化石壁</text>
    </svg>`,
  },
  xingning: {
    name: '興寧',
    svg: `<svg viewBox="0 0 240 140" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- Hills background -->
      <path d="M0 75 Q25 55 50 68 Q75 48 100 62 Q140 45 170 58 Q200 50 240 60 L240 75 Z" fill="#4a6741" opacity="0.07"/>
      <!-- Hakka Weilong house (围龙屋) - detailed -->
      <!-- Outer semicircle wall -->
      <path d="M50 90 Q50 45 120 40 Q190 45 190 90" stroke="#5c4a35" stroke-width="1.8" fill="none" opacity="0.5"/>
      <!-- Second ring -->
      <path d="M65 90 Q65 55 120 50 Q175 55 175 90" stroke="#5c4a35" stroke-width="1.2" fill="none" opacity="0.35"/>
      <!-- Inner ring -->
      <path d="M80 90 Q80 62 120 58 Q160 62 160 90" stroke="#5c4a35" stroke-width="0.8" fill="none" opacity="0.25"/>
      <!-- Central hall (正堂) -->
      <rect x="100" y="65" width="40" height="25" rx="1" stroke="#5c4a35" stroke-width="1.2" fill="#5c4a35" fill-opacity="0.04"/>
      <path d="M95 65 L120 52 L145 65" stroke="#5c4a35" stroke-width="1.2" fill="none" opacity="0.5"/>
      <!-- Central door -->
      <path d="M114 90 L114 78 Q120 74 126 78 L126 90" stroke="#5c4a35" stroke-width="0.8" fill="none" opacity="0.4"/>
      <!-- Side rooms along the curve -->
      <rect x="55" y="70" width="12" height="10" stroke="#5c4a35" stroke-width="0.5" fill="none" opacity="0.25"/>
      <rect x="70" y="65" width="12" height="10" stroke="#5c4a35" stroke-width="0.5" fill="none" opacity="0.25"/>
      <rect x="158" y="65" width="12" height="10" stroke="#5c4a35" stroke-width="0.5" fill="none" opacity="0.25"/>
      <rect x="173" y="70" width="12" height="10" stroke="#5c4a35" stroke-width="0.5" fill="none" opacity="0.25"/>
      <!-- Pond (半月塘) -->
      <ellipse cx="120" cy="98" rx="35" ry="8" stroke="#5c7a8a" stroke-width="0.8" fill="#5c7a8a" fill-opacity="0.06"/>
      <path d="M88 98 Q100 93 120 96 Q140 93 152 98" stroke="#5c7a8a" stroke-width="0.4" fill="none" opacity="0.2"/>
      <!-- Paddy fields -->
      <path d="M0 105 Q30 100 60 105 Q90 100 120 105 Q150 100 180 105 Q210 100 240 105" stroke="#6b8e5a" stroke-width="0.4" fill="none" opacity="0.2"/>
      <path d="M10 110 Q50 106 90 110 Q130 106 170 110 Q210 106 240 110" stroke="#6b8e5a" stroke-width="0.3" fill="none" opacity="0.15"/>
      <!-- Trees -->
      <path d="M20 90 L20 75" stroke="#4a6741" stroke-width="1" opacity="0.35"/>
      <ellipse cx="20" cy="70" rx="8" ry="6" fill="#4a6741" opacity="0.1"/>
      <path d="M220 90 L220 72" stroke="#4a6741" stroke-width="1" opacity="0.35"/>
      <ellipse cx="220" cy="67" rx="9" ry="7" fill="#4a6741" opacity="0.1"/>
      <text x="120" y="132" text-anchor="middle" font-size="11" fill="#8b7355" font-weight="700" font-family="serif">興寧圍龍屋</text>
    </svg>`,
  },
  yangzhou: {
    name: '揚州',
    svg: `<svg viewBox="0 0 240 140" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- Five Pavilion Bridge (五亭桥) detailed -->
      <!-- Bridge base arch -->
      <path d="M40 90 Q60 82 80 90" stroke="#5c4a35" stroke-width="1" fill="none" opacity="0.4"/>
      <path d="M80 90 Q100 82 120 90" stroke="#5c4a35" stroke-width="1" fill="none" opacity="0.4"/>
      <path d="M120 90 Q140 82 160 90" stroke="#5c4a35" stroke-width="1" fill="none" opacity="0.4"/>
      <path d="M160 90 Q180 82 200 90" stroke="#5c4a35" stroke-width="1" fill="none" opacity="0.4"/>
      <!-- Bridge deck -->
      <line x1="35" y1="80" x2="205" y2="80" stroke="#5c4a35" stroke-width="1.2" opacity="0.5"/>
      <line x1="35" y1="82" x2="205" y2="82" stroke="#5c4a35" stroke-width="0.5" opacity="0.25"/>
      <!-- Five pavilions with tiered roofs -->
      <path d="M48 80 L48 68 L52 68 L60 58 L68 68 L72 68 L72 80" stroke="#5c4a35" stroke-width="0.8" fill="none" opacity="0.45"/>
      <path d="M54 68 L60 62 L66 68" stroke="#5c4a35" stroke-width="0.6" fill="none" opacity="0.3"/>
      <path d="M88 80 L88 65 L92 65 L100 52 L108 65 L112 65 L112 80" stroke="#5c4a35" stroke-width="1" fill="none" opacity="0.5"/>
      <path d="M94 65 L100 58 L106 65" stroke="#5c4a35" stroke-width="0.7" fill="none" opacity="0.35"/>
      <!-- Center pavilion (tallest) -->
      <path d="M128 80 L128 60 L133 60 L140 45 L147 60 L152 60 L152 80" stroke="#5c4a35" stroke-width="1.2" fill="none" opacity="0.6"/>
      <path d="M134 60 L140 50 L146 60" stroke="#5c4a35" stroke-width="0.8" fill="none" opacity="0.4"/>
      <path d="M136 54 L140 48 L144 54" stroke="#5c4a35" stroke-width="0.5" fill="none" opacity="0.3"/>
      <path d="M168 80 L168 65 L172 65 L180 52 L188 65 L192 65 L192 80" stroke="#5c4a35" stroke-width="1" fill="none" opacity="0.5"/>
      <path d="M174 65 L180 58 L186 65" stroke="#5c4a35" stroke-width="0.7" fill="none" opacity="0.35"/>
      <!-- Weeping willows -->
      <path d="M15 85 L15 42" stroke="#4a6741" stroke-width="1.5" opacity="0.4"/>
      <path d="M15 45 Q8 55 5 70 Q3 80 5 88" stroke="#4a6741" stroke-width="0.6" fill="none" opacity="0.3"/>
      <path d="M15 48 Q10 58 8 72 Q7 82 9 90" stroke="#4a6741" stroke-width="0.5" fill="none" opacity="0.25"/>
      <path d="M15 46 Q22 56 24 70 Q25 82 23 90" stroke="#4a6741" stroke-width="0.5" fill="none" opacity="0.25"/>
      <path d="M15 50 Q20 60 22 75" stroke="#4a6741" stroke-width="0.4" fill="none" opacity="0.2"/>
      <path d="M225 85 L225 48" stroke="#4a6741" stroke-width="1.2" opacity="0.35"/>
      <path d="M225 50 Q218 60 216 75 Q215 85 217 92" stroke="#4a6741" stroke-width="0.5" fill="none" opacity="0.25"/>
      <path d="M225 52 Q232 62 234 78 Q235 88 233 92" stroke="#4a6741" stroke-width="0.5" fill="none" opacity="0.2"/>
      <!-- Lake water -->
      <path d="M0 95 Q40 91 80 95 Q120 99 160 95 Q200 91 240 95" stroke="#5c7a8a" stroke-width="0.6" fill="none" opacity="0.25"/>
      <path d="M10 100 Q50 96 90 100 Q130 104 170 100 Q210 96 240 100" stroke="#5c7a8a" stroke-width="0.4" fill="none" opacity="0.15"/>
      <!-- Reflection hint -->
      <path d="M128 95 L128 105" stroke="#5c4a35" stroke-width="0.3" opacity="0.1" stroke-dasharray="1,2"/>
      <text x="120" y="132" text-anchor="middle" font-size="11" fill="#8b7355" font-weight="700" font-family="serif">煙花揚州 · 瘦西湖</text>
    </svg>`,
  },
  huizhou: {
    name: '惠州',
    svg: `<svg viewBox="0 0 240 140" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- Hills behind -->
      <path d="M0 70 Q40 40 80 60 Q110 35 140 55 Q170 40 200 52 L240 60 L240 70 Z" fill="#4a6741" opacity="0.07"/>
      <path d="M0 70 Q40 40 80 60 Q110 35 140 55 Q170 40 200 52" stroke="#4a6741" stroke-width="1" fill="none" opacity="0.3"/>
      <!-- Pagoda (泗洲塔) - 7 tiers -->
      <line x1="160" y1="20" x2="160" y2="90" stroke="#5c4a35" stroke-width="1.5" opacity="0.5"/>
      <path d="M150 32 L160 22 L170 32" stroke="#5c4a35" stroke-width="1" fill="none" opacity="0.5"/>
      <line x1="148" y1="40" x2="172" y2="40" stroke="#5c4a35" stroke-width="0.8" opacity="0.4"/>
      <line x1="147" y1="50" x2="173" y2="50" stroke="#5c4a35" stroke-width="0.8" opacity="0.4"/>
      <line x1="146" y1="60" x2="174" y2="60" stroke="#5c4a35" stroke-width="0.8" opacity="0.4"/>
      <line x1="145" y1="70" x2="175" y2="70" stroke="#5c4a35" stroke-width="0.8" opacity="0.4"/>
      <line x1="144" y1="80" x2="176" y2="80" stroke="#5c4a35" stroke-width="0.8" opacity="0.4"/>
      <!-- Eaves curves -->
      <path d="M148 40 Q146 38 144 40" stroke="#5c4a35" stroke-width="0.5" opacity="0.3"/>
      <path d="M172 40 Q174 38 176 40" stroke="#5c4a35" stroke-width="0.5" opacity="0.3"/>
      <path d="M147 50 Q145 48 143 50" stroke="#5c4a35" stroke-width="0.5" opacity="0.3"/>
      <path d="M173 50 Q175 48 177 50" stroke="#5c4a35" stroke-width="0.5" opacity="0.3"/>
      <!-- Su Dongpo pavilion (苏堤) -->
      <path d="M60 85 L60 72 L65 72 L72 62 L79 72 L84 72 L84 85" stroke="#5c4a35" stroke-width="1" fill="none" opacity="0.45"/>
      <path d="M66 72 L72 66 L78 72" stroke="#5c4a35" stroke-width="0.6" fill="none" opacity="0.3"/>
      <!-- Causeway bridge -->
      <path d="M40 88 Q50 84 60 88 Q72 84 84 88 Q95 84 105 88" stroke="#5c4a35" stroke-width="0.8" fill="none" opacity="0.35"/>
      <!-- West Lake water -->
      <ellipse cx="110" cy="98" rx="85" ry="10" fill="#5c7a8a" opacity="0.05"/>
      <path d="M25 95 Q60 91 95 95 Q130 99 165 95 Q200 91 230 95" stroke="#5c7a8a" stroke-width="0.6" fill="none" opacity="0.25"/>
      <path d="M30 100 Q70 96 110 100 Q150 104 190 100 Q220 97 240 100" stroke="#5c7a8a" stroke-width="0.4" fill="none" opacity="0.15"/>
      <!-- Lotus -->
      <circle cx="90" cy="93" r="2.5" stroke="#c47a7a" stroke-width="0.5" fill="none" opacity="0.3"/>
      <circle cx="130" cy="95" r="2" stroke="#c47a7a" stroke-width="0.5" fill="none" opacity="0.25"/>
      <ellipse cx="85" cy="96" rx="4" ry="1.5" fill="#4a6741" opacity="0.12"/>
      <ellipse cx="135" cy="97" rx="3.5" ry="1.2" fill="#4a6741" opacity="0.1"/>
      <text x="120" y="132" text-anchor="middle" font-size="11" fill="#8b7355" font-weight="700" font-family="serif">惠州西湖</text>
    </svg>`,
  },
  sichuan: {
    name: '四川',
    svg: `<svg viewBox="0 0 240 140" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- Emei Mountain layers -->
      <path d="M0 90 L50 25 L90 65 L130 15 L170 55 L210 30 L240 50 L240 90 Z" fill="#5c4a35" opacity="0.06"/>
      <path d="M0 90 L50 25" stroke="#5c4a35" stroke-width="1.8" fill="none" opacity="0.45"/>
      <path d="M50 25 L90 65" stroke="#5c4a35" stroke-width="1.5" fill="none" opacity="0.4"/>
      <path d="M90 65 L130 15" stroke="#5c4a35" stroke-width="2" fill="none" opacity="0.55"/>
      <path d="M130 15 L170 55" stroke="#5c4a35" stroke-width="1.5" fill="none" opacity="0.4"/>
      <path d="M170 55 L210 30 L240 50" stroke="#5c4a35" stroke-width="1.2" fill="none" opacity="0.35"/>
      <!-- Snow on peaks -->
      <path d="M125 18 Q130 12 135 18" fill="white" opacity="0.4"/>
      <path d="M46 28 Q50 22 54 28" fill="white" opacity="0.3"/>
      <!-- Clouds -->
      <path d="M60 50 Q75 42 90 50 Q100 44 110 50" stroke="#8b7355" stroke-width="0.6" fill="none" opacity="0.2"/>
      <path d="M150 42 Q165 35 180 42" stroke="#8b7355" stroke-width="0.5" fill="none" opacity="0.18"/>
      <!-- Bamboo grove -->
      <line x1="18" y1="60" x2="18" y2="90" stroke="#4a6741" stroke-width="1.5" opacity="0.45"/>
      <line x1="28" y1="55" x2="28" y2="90" stroke="#4a6741" stroke-width="1.2" opacity="0.4"/>
      <line x1="36" y1="62" x2="36" y2="90" stroke="#4a6741" stroke-width="1" opacity="0.35"/>
      <!-- Bamboo leaves -->
      <path d="M18 63 Q12 58 8 60" stroke="#4a6741" stroke-width="0.6" fill="none" opacity="0.3"/>
      <path d="M18 68 Q24 63 28 65" stroke="#4a6741" stroke-width="0.5" fill="none" opacity="0.25"/>
      <path d="M28 58 Q22 53 18 55" stroke="#4a6741" stroke-width="0.5" fill="none" opacity="0.25"/>
      <path d="M28 62 Q34 57 38 59" stroke="#4a6741" stroke-width="0.5" fill="none" opacity="0.25"/>
      <path d="M36 65 Q42 60 46 62" stroke="#4a6741" stroke-width="0.5" fill="none" opacity="0.2"/>
      <!-- River (岷江) -->
      <path d="M180 70 Q195 75 210 70 Q225 65 240 70" stroke="#5c7a8a" stroke-width="0.8" fill="none" opacity="0.25"/>
      <path d="M185 76 Q200 80 215 76 Q230 72 240 76" stroke="#5c7a8a" stroke-width="0.5" fill="none" opacity="0.15"/>
      <!-- Temple on mountainside -->
      <rect x="195" y="48" width="18" height="10" stroke="#5c4a35" stroke-width="0.6" fill="none" opacity="0.3"/>
      <path d="M192 48 L204 40 L216 48" stroke="#5c4a35" stroke-width="0.7" fill="none" opacity="0.35"/>
      <text x="120" y="132" text-anchor="middle" font-size="11" fill="#8b7355" font-weight="700" font-family="serif">巴蜀四川</text>
    </svg>`,
  },
  ganzhou: {
    name: '贛州',
    svg: `<svg viewBox="0 0 240 140" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- Ancient Ganzhou city wall (八境台) -->
      <!-- Main wall -->
      <path d="M20 90 L20 55 L30 52 L40 55 L40 52 L50 49 L60 52 L60 49 L70 46 L80 49 L80 52 L90 49 L100 52 L100 49 L110 46 L120 49 L120 52 L130 49 L140 52 L140 49 L150 46 L160 49 L160 55 L170 52 L180 55 L180 52 L190 49 L200 52 L200 55 L210 52 L220 55 L220 90" stroke="#5c4a35" stroke-width="1.2" fill="none" opacity="0.45"/>
      <!-- Wall texture -->
      <path d="M20 65 L220 65" stroke="#5c4a35" stroke-width="0.3" opacity="0.15"/>
      <path d="M20 75 L220 75" stroke="#5c4a35" stroke-width="0.3" opacity="0.15"/>
      <path d="M20 85 L220 85" stroke="#5c4a35" stroke-width="0.3" opacity="0.12"/>
      <!-- Bajing Tower (八境台) -->
      <rect x="95" y="30" width="50" height="22" rx="1" stroke="#5c4a35" stroke-width="1.2" fill="#5c4a35" fill-opacity="0.03"/>
      <path d="M88 30 L120 14 L152 30" stroke="#5c4a35" stroke-width="1.5" fill="none" opacity="0.55"/>
      <path d="M91 30 L120 18 L149 30" stroke="#5c4a35" stroke-width="0.7" fill="none" opacity="0.3"/>
      <!-- Tower windows -->
      <rect x="105" y="36" width="6" height="8" rx="3" stroke="#5c4a35" stroke-width="0.6" fill="none" opacity="0.3"/>
      <rect x="117" y="36" width="6" height="8" rx="3" stroke="#5c4a35" stroke-width="0.6" fill="none" opacity="0.3"/>
      <rect x="129" y="36" width="6" height="8" rx="3" stroke="#5c4a35" stroke-width="0.6" fill="none" opacity="0.3"/>
      <!-- Gate arch -->
      <path d="M105 90 L105 72 Q120 62 135 72 L135 90" stroke="#5c4a35" stroke-width="1.2" fill="none" opacity="0.5"/>
      <!-- Two rivers (章江+贡水=赣江) -->
      <path d="M0 100 Q40 95 80 100 Q120 105 160 100 Q200 95 240 100" stroke="#5c7a8a" stroke-width="0.8" fill="none" opacity="0.3"/>
      <path d="M0 106 Q50 101 100 106 Q150 111 200 106 L240 106" stroke="#5c7a8a" stroke-width="0.5" fill="none" opacity="0.18"/>
      <!-- Small boat -->
      <path d="M50 98 Q55 95 60 98 Z" stroke="#5c4a35" stroke-width="0.6" fill="none" opacity="0.25"/>
      <line x1="55" y1="98" x2="55" y2="92" stroke="#5c4a35" stroke-width="0.5" opacity="0.2"/>
      <text x="120" y="132" text-anchor="middle" font-size="11" fill="#8b7355" font-weight="700" font-family="serif">贛州古城 · 八境台</text>
    </svg>`,
  },
  nanyang: {
    name: '南洋',
    svg: `<svg viewBox="0 0 240 140" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- Sailing junk (帆船) -->
      <path d="M70 80 L90 60 L150 60 L170 80 Z" stroke="#5c4a35" stroke-width="1.2" fill="#5c4a35" fill-opacity="0.04"/>
      <!-- Hull planks -->
      <path d="M80 70 L160 70" stroke="#5c4a35" stroke-width="0.4" opacity="0.2"/>
      <!-- Tall mast -->
      <line x1="110" y1="60" x2="110" y2="18" stroke="#5c4a35" stroke-width="1.2" opacity="0.5"/>
      <!-- Main sail (battened junk sail) -->
      <path d="M110 20 L145 30 L140 40 L135 50 L110 58" stroke="#5c4a35" stroke-width="0.8" fill="#5c4a35" fill-opacity="0.05"/>
      <line x1="110" y1="30" x2="142" y2="33" stroke="#5c4a35" stroke-width="0.4" opacity="0.25"/>
      <line x1="110" y1="40" x2="138" y2="42" stroke="#5c4a35" stroke-width="0.4" opacity="0.25"/>
      <line x1="110" y1="50" x2="134" y2="51" stroke="#5c4a35" stroke-width="0.4" opacity="0.25"/>
      <!-- Fore sail -->
      <line x1="85" y1="60" x2="85" y2="35" stroke="#5c4a35" stroke-width="0.8" opacity="0.4"/>
      <path d="M85 37 L100 42 L97 50 L85 55" stroke="#5c4a35" stroke-width="0.6" fill="none" opacity="0.3"/>
      <!-- Flag -->
      <path d="M110 20 L120 18 L118 22 L110 20" fill="#c23b22" opacity="0.3"/>
      <!-- Ocean waves -->
      <path d="M0 88 Q15 82 30 88 Q45 94 60 88 Q75 82 90 88 Q105 94 120 88 Q135 82 150 88 Q165 94 180 88 Q195 82 210 88 Q225 94 240 88" stroke="#5c7a8a" stroke-width="0.8" fill="none" opacity="0.3"/>
      <path d="M0 94 Q20 89 40 94 Q60 99 80 94 Q100 89 120 94 Q140 99 160 94 Q180 89 200 94 Q220 99 240 94" stroke="#5c7a8a" stroke-width="0.5" fill="none" opacity="0.18"/>
      <path d="M10 100 Q30 96 50 100 Q70 104 90 100 Q110 96 130 100 Q150 104 170 100 Q190 96 210 100 Q230 104 240 100" stroke="#5c7a8a" stroke-width="0.3" fill="none" opacity="0.12"/>
      <!-- Tropical island with palm -->
      <ellipse cx="205" cy="80" rx="18" ry="4" fill="#4a6741" opacity="0.1"/>
      <path d="M210 80 Q212 65 210 50" stroke="#4a6741" stroke-width="1.2" fill="none" opacity="0.4"/>
      <path d="M210 52 Q220 45 228 48" stroke="#4a6741" stroke-width="0.8" fill="none" opacity="0.3"/>
      <path d="M210 52 Q200 44 192 47" stroke="#4a6741" stroke-width="0.8" fill="none" opacity="0.3"/>
      <path d="M210 55 Q218 50 224 53" stroke="#4a6741" stroke-width="0.6" fill="none" opacity="0.22"/>
      <path d="M210 55 Q202 49 196 52" stroke="#4a6741" stroke-width="0.6" fill="none" opacity="0.22"/>
      <!-- Sun -->
      <circle cx="30" cy="25" r="12" fill="#c4a055" opacity="0.1"/>
      <circle cx="30" cy="25" r="8" stroke="#c4a055" stroke-width="0.5" fill="none" opacity="0.2"/>
      <text x="120" y="132" text-anchor="middle" font-size="11" fill="#8b7355" font-weight="700" font-family="serif">漂洋南洋</text>
    </svg>`,
  },
  guangzhou: {
    name: '廣州',
    svg: `<svg viewBox="0 0 240 140" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- Canton Tower (广州塔 / 小蛮腰) -->
      <path d="M178 90 Q181 65 184 45 Q186 35 188 28 Q190 22 190 15" stroke="#5c4a35" stroke-width="1.2" fill="none" opacity="0.5"/>
      <path d="M202 90 Q199 65 196 45 Q194 35 192 28 Q190 22 190 15" stroke="#5c4a35" stroke-width="1.2" fill="none" opacity="0.5"/>
      <!-- Waist lattice -->
      <path d="M181 55 Q190 52 199 55" stroke="#5c4a35" stroke-width="0.4" opacity="0.25"/>
      <path d="M182 60 Q190 57 198 60" stroke="#5c4a35" stroke-width="0.4" opacity="0.25"/>
      <path d="M180 65 Q190 62 200 65" stroke="#5c4a35" stroke-width="0.4" opacity="0.25"/>
      <path d="M183 50 Q190 47 197 50" stroke="#5c4a35" stroke-width="0.4" opacity="0.25"/>
      <!-- Antenna -->
      <line x1="190" y1="15" x2="190" y2="5" stroke="#5c4a35" stroke-width="0.8" opacity="0.4"/>
      <!-- Observation deck -->
      <ellipse cx="190" cy="38" rx="7" ry="2" stroke="#5c4a35" stroke-width="0.6" fill="none" opacity="0.3"/>
      <!-- Five Rams Statue (五羊雕塑) -->
      <!-- Main ram body -->
      <path d="M75 90 Q73 72 78 62 Q82 55 88 58 Q92 52 95 48 Q98 55 95 62" stroke="#5c4a35" stroke-width="1.5" fill="none" opacity="0.55"/>
      <!-- Ram head -->
      <circle cx="95" cy="45" r="5" stroke="#5c4a35" stroke-width="1" fill="none" opacity="0.45"/>
      <!-- Horns -->
      <path d="M91 42 Q88 35 85 32" stroke="#5c4a35" stroke-width="0.8" fill="none" opacity="0.4"/>
      <path d="M99 42 Q102 35 105 33" stroke="#5c4a35" stroke-width="0.8" fill="none" opacity="0.4"/>
      <!-- Ram legs -->
      <path d="M78 62 L75 75 Q74 82 76 90" stroke="#5c4a35" stroke-width="0.8" fill="none" opacity="0.35"/>
      <path d="M88 60 L90 75 Q91 82 90 90" stroke="#5c4a35" stroke-width="0.8" fill="none" opacity="0.35"/>
      <!-- Smaller rams behind -->
      <path d="M65 90 Q64 78 68 72 Q72 68 75 70" stroke="#5c4a35" stroke-width="0.7" fill="none" opacity="0.25"/>
      <path d="M100 90 Q102 78 100 72 Q97 68 94 70" stroke="#5c4a35" stroke-width="0.7" fill="none" opacity="0.25"/>
      <!-- Pedestal -->
      <rect x="60" y="88" width="50" height="5" rx="1" stroke="#5c4a35" stroke-width="0.6" fill="none" opacity="0.3"/>
      <!-- Banyan tree (榕树) -->
      <path d="M30 90 L30 55" stroke="#4a6741" stroke-width="2" opacity="0.4"/>
      <ellipse cx="30" cy="48" rx="20" ry="14" fill="#4a6741" opacity="0.1"/>
      <ellipse cx="25" cy="50" rx="12" ry="9" fill="#4a6741" opacity="0.08"/>
      <!-- Aerial roots -->
      <path d="M30 60 Q24 70 22 82 Q21 88 23 90" stroke="#4a6741" stroke-width="0.5" fill="none" opacity="0.2"/>
      <path d="M30 58 Q36 68 38 80 Q39 88 37 90" stroke="#4a6741" stroke-width="0.5" fill="none" opacity="0.18"/>
      <!-- Buildings in between -->
      <rect x="130" y="65" width="15" height="25" stroke="#5c4a35" stroke-width="0.5" fill="none" opacity="0.2"/>
      <rect x="148" y="55" width="12" height="35" stroke="#5c4a35" stroke-width="0.5" fill="none" opacity="0.2"/>
      <rect x="163" y="70" width="10" height="20" stroke="#5c4a35" stroke-width="0.5" fill="none" opacity="0.15"/>
      <!-- Pearl River -->
      <path d="M0 100 Q40 96 80 100 Q120 104 160 100 Q200 96 240 100" stroke="#5c7a8a" stroke-width="0.6" fill="none" opacity="0.25"/>
      <text x="120" y="132" text-anchor="middle" font-size="11" fill="#8b7355" font-weight="700" font-family="serif">羊城廣州 · 五羊小蠻腰</text>
    </svg>`,
  },
  qujing: {
    name: '曲靖',
    svg: `<svg viewBox="0 0 240 140" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- Yunnan plateau mountains -->
      <path d="M0 75 L35 30 L65 58 Q80 25 110 48 Q130 18 155 42 Q175 28 200 38 L240 50 L240 75 Z" fill="#5c4a35" opacity="0.06"/>
      <path d="M0 75 L35 30 L65 58" stroke="#5c4a35" stroke-width="1.5" fill="none" opacity="0.45"/>
      <path d="M65 58 Q80 25 110 48" stroke="#5c4a35" stroke-width="1.8" fill="none" opacity="0.5"/>
      <path d="M110 48 Q130 18 155 42" stroke="#5c4a35" stroke-width="1.5" fill="none" opacity="0.45"/>
      <path d="M155 42 Q175 28 200 38 L240 50" stroke="#5c4a35" stroke-width="1.2" fill="none" opacity="0.35"/>
      <!-- Terraced fields -->
      <path d="M0 80 Q30 76 60 80 Q90 84 120 80 Q150 76 180 80 Q210 84 240 80" stroke="#6b8e5a" stroke-width="0.5" fill="none" opacity="0.2"/>
      <path d="M0 85 Q35 81 70 85 Q105 89 140 85 Q175 81 210 85 L240 85" stroke="#6b8e5a" stroke-width="0.4" fill="none" opacity="0.15"/>
      <!-- Rapeseed flower sea (油菜花海) -->
      <circle cx="25" cy="88" r="2.5" fill="#c4a055" opacity="0.45"/>
      <circle cx="35" cy="86" r="2" fill="#c4a055" opacity="0.4"/>
      <circle cx="45" cy="89" r="2.5" fill="#c4a055" opacity="0.45"/>
      <circle cx="55" cy="85" r="2" fill="#c4a055" opacity="0.35"/>
      <circle cx="65" cy="88" r="2.5" fill="#c4a055" opacity="0.4"/>
      <circle cx="75" cy="86" r="2" fill="#c4a055" opacity="0.45"/>
      <circle cx="85" cy="89" r="2.5" fill="#c4a055" opacity="0.4"/>
      <circle cx="95" cy="85" r="2" fill="#c4a055" opacity="0.35"/>
      <circle cx="105" cy="88" r="2.5" fill="#c4a055" opacity="0.45"/>
      <circle cx="115" cy="86" r="2" fill="#c4a055" opacity="0.4"/>
      <circle cx="125" cy="89" r="2.5" fill="#c4a055" opacity="0.4"/>
      <circle cx="135" cy="85" r="2" fill="#c4a055" opacity="0.35"/>
      <circle cx="145" cy="88" r="2.5" fill="#c4a055" opacity="0.45"/>
      <circle cx="155" cy="87" r="2" fill="#c4a055" opacity="0.4"/>
      <circle cx="165" cy="89" r="2.5" fill="#c4a055" opacity="0.4"/>
      <circle cx="175" cy="86" r="2" fill="#c4a055" opacity="0.35"/>
      <circle cx="185" cy="88" r="2.5" fill="#c4a055" opacity="0.45"/>
      <circle cx="195" cy="85" r="2" fill="#c4a055" opacity="0.4"/>
      <circle cx="205" cy="88" r="2.5" fill="#c4a055" opacity="0.4"/>
      <circle cx="215" cy="87" r="2" fill="#c4a055" opacity="0.35"/>
      <!-- Flower stems -->
      <line x1="25" y1="88" x2="25" y2="95" stroke="#6b8e5a" stroke-width="0.4" opacity="0.2"/>
      <line x1="45" y1="89" x2="45" y2="96" stroke="#6b8e5a" stroke-width="0.4" opacity="0.2"/>
      <line x1="85" y1="89" x2="85" y2="96" stroke="#6b8e5a" stroke-width="0.4" opacity="0.2"/>
      <line x1="145" y1="88" x2="145" y2="95" stroke="#6b8e5a" stroke-width="0.4" opacity="0.2"/>
      <line x1="205" y1="88" x2="205" y2="95" stroke="#6b8e5a" stroke-width="0.4" opacity="0.2"/>
      <!-- Clouds on mountains -->
      <path d="M70 42 Q85 35 100 42" stroke="#8b7355" stroke-width="0.5" fill="none" opacity="0.2"/>
      <path d="M140 32 Q155 25 170 32" stroke="#8b7355" stroke-width="0.5" fill="none" opacity="0.18"/>
      <!-- Small Yunnan house -->
      <rect x="195" y="68" width="22" height="14" stroke="#5c4a35" stroke-width="0.7" fill="none" opacity="0.25"/>
      <path d="M192 68 L206 58 L220 68" stroke="#5c4a35" stroke-width="0.8" fill="none" opacity="0.3"/>
      <!-- Path winding through flowers -->
      <path d="M120 98 Q115 100 110 104 Q105 108 108 112" stroke="#8b7355" stroke-width="0.6" fill="none" opacity="0.15" stroke-dasharray="2,2"/>
      <text x="120" y="132" text-anchor="middle" font-size="11" fill="#8b7355" font-weight="700" font-family="serif">雲南曲靖 · 油菜花海</text>
    </svg>`,
  },
  shenzhen: {
    name: '深圳',
    svg: `<svg viewBox="0 0 240 140" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- Shenzhen skyline - detailed -->
      <!-- KK100 -->
      <rect x="25" y="38" width="14" height="52" rx="1" stroke="#5c4a35" stroke-width="1" fill="#5c4a35" fill-opacity="0.03"/>
      <path d="M28 38 L32 32 L36 38" stroke="#5c4a35" stroke-width="0.6" fill="none" opacity="0.3"/>
      <!-- Building windows hint -->
      <line x1="28" y1="48" x2="36" y2="48" stroke="#5c4a35" stroke-width="0.3" opacity="0.15"/>
      <line x1="28" y1="58" x2="36" y2="58" stroke="#5c4a35" stroke-width="0.3" opacity="0.15"/>
      <line x1="28" y1="68" x2="36" y2="68" stroke="#5c4a35" stroke-width="0.3" opacity="0.15"/>
      <!-- SEG Plaza -->
      <rect x="48" y="32" width="12" height="58" rx="1" stroke="#5c4a35" stroke-width="0.8" fill="none" opacity="0.4"/>
      <line x1="48" y1="45" x2="60" y2="45" stroke="#5c4a35" stroke-width="0.3" opacity="0.12"/>
      <line x1="48" y1="58" x2="60" y2="58" stroke="#5c4a35" stroke-width="0.3" opacity="0.12"/>
      <!-- Mid-rise -->
      <rect x="68" y="42" width="16" height="48" rx="1" stroke="#5c4a35" stroke-width="0.8" fill="none" opacity="0.35"/>
      <!-- Ping An Finance Center (平安金融中心 - tallest) -->
      <rect x="95" y="10" width="20" height="80" rx="1" stroke="#5c4a35" stroke-width="1.5" fill="#5c4a35" fill-opacity="0.04"/>
      <!-- Tapered top -->
      <path d="M95 10 L105 2 L115 10" stroke="#5c4a35" stroke-width="1.2" fill="none" opacity="0.55"/>
      <!-- Antenna -->
      <line x1="105" y1="2" x2="105" y2="-5" stroke="#5c4a35" stroke-width="0.6" opacity="0.3"/>
      <!-- Floor lines -->
      <line x1="97" y1="25" x2="113" y2="25" stroke="#5c4a35" stroke-width="0.3" opacity="0.12"/>
      <line x1="97" y1="40" x2="113" y2="40" stroke="#5c4a35" stroke-width="0.3" opacity="0.12"/>
      <line x1="97" y1="55" x2="113" y2="55" stroke="#5c4a35" stroke-width="0.3" opacity="0.12"/>
      <line x1="97" y1="70" x2="113" y2="70" stroke="#5c4a35" stroke-width="0.3" opacity="0.12"/>
      <!-- China Resources HQ (春笋) -->
      <path d="M130 90 Q132 50 135 30 Q137 40 138 35 Q140 50 142 90" stroke="#5c4a35" stroke-width="1" fill="none" opacity="0.45"/>
      <path d="M133 40 Q135 35 137 40" stroke="#5c4a35" stroke-width="0.5" fill="none" opacity="0.25"/>
      <!-- More towers -->
      <rect x="155" y="35" width="15" height="55" rx="1" stroke="#5c4a35" stroke-width="0.8" fill="none" opacity="0.35"/>
      <rect x="178" y="28" width="12" height="62" rx="1" stroke="#5c4a35" stroke-width="0.9" fill="none" opacity="0.38"/>
      <path d="M178 28 L184 22 L190 28" stroke="#5c4a35" stroke-width="0.6" fill="none" opacity="0.3"/>
      <rect x="198" y="45" width="16" height="45" rx="1" stroke="#5c4a35" stroke-width="0.7" fill="none" opacity="0.3"/>
      <rect x="220" y="50" width="12" height="40" rx="1" stroke="#5c4a35" stroke-width="0.6" fill="none" opacity="0.25"/>
      <!-- Shenzhen Bay Bridge hint -->
      <path d="M0 95 Q30 92 60 95 Q90 98 120 95 Q150 92 180 95 Q210 98 240 95" stroke="#5c7a8a" stroke-width="0.6" fill="none" opacity="0.25"/>
      <path d="M0 100 Q40 97 80 100 Q120 103 160 100 Q200 97 240 100" stroke="#5c7a8a" stroke-width="0.4" fill="none" opacity="0.15"/>
      <!-- Mangrove hint -->
      <ellipse cx="10" cy="90" rx="8" ry="4" fill="#4a6741" opacity="0.1"/>
      <text x="120" y="132" text-anchor="middle" font-size="11" fill="#8b7355" font-weight="700" font-family="serif">鵬城深圳 · 平安金融中心</text>
    </svg>`,
  },
  newzealand: {
    name: '紐西蘭',
    svg: `<svg viewBox="0 0 240 140" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- Southern Alps background -->
      <path d="M0 75 Q15 50 30 62 Q45 35 65 55 Q80 30 100 50 Q115 28 135 48 Q155 25 175 45 Q195 30 215 42 L240 50 L240 75 Z" fill="#5c4a35" opacity="0.06"/>
      <path d="M0 75 Q15 50 30 62 Q45 35 65 55 Q80 30 100 50" stroke="#5c4a35" stroke-width="1" fill="none" opacity="0.3"/>
      <path d="M100 50 Q115 28 135 48 Q155 25 175 45" stroke="#5c4a35" stroke-width="1.2" fill="none" opacity="0.35"/>
      <!-- Snow caps -->
      <path d="M43 37 Q45 33 47 37" fill="white" opacity="0.4"/>
      <path d="M78 32 Q80 28 82 32" fill="white" opacity="0.35"/>
      <path d="M113 30 Q115 26 117 30" fill="white" opacity="0.4"/>
      <path d="M153 27 Q155 23 157 27" fill="white" opacity="0.35"/>
      <!-- Sky Tower Auckland - detailed -->
      <line x1="120" y1="15" x2="120" y2="88" stroke="#5c4a35" stroke-width="1.8" opacity="0.5"/>
      <!-- Observation deck -->
      <ellipse cx="120" cy="42" rx="10" ry="3.5" stroke="#5c4a35" stroke-width="1" fill="#5c4a35" fill-opacity="0.04"/>
      <!-- SkyCity base -->
      <ellipse cx="120" cy="52" rx="7" ry="2.5" stroke="#5c4a35" stroke-width="0.7" fill="none" opacity="0.3"/>
      <!-- Top sphere -->
      <circle cx="120" cy="18" r="4" stroke="#5c4a35" stroke-width="0.8" fill="none" opacity="0.4"/>
      <!-- Antenna -->
      <line x1="120" y1="14" x2="120" y2="5" stroke="#5c4a35" stroke-width="0.6" opacity="0.35"/>
      <!-- Support structure -->
      <path d="M115 52 L113 88" stroke="#5c4a35" stroke-width="0.4" opacity="0.15"/>
      <path d="M125 52 L127 88" stroke="#5c4a35" stroke-width="0.4" opacity="0.15"/>
      <!-- Silver fern (银蕨 - NZ symbol) -->
      <path d="M25 92 Q27 80 30 72" stroke="#4a6741" stroke-width="1" fill="none" opacity="0.4"/>
      <!-- Fern fronds -->
      <path d="M28 78 L22 74 M28 78 L34 74" stroke="#4a6741" stroke-width="0.5" fill="none" opacity="0.3"/>
      <path d="M29 82 L23 79 M29 82 L35 79" stroke="#4a6741" stroke-width="0.5" fill="none" opacity="0.25"/>
      <path d="M27 75 L21 71 M27 75 L33 71" stroke="#4a6741" stroke-width="0.5" fill="none" opacity="0.25"/>
      <path d="M29 86 L24 83 M29 86 L34 83" stroke="#4a6741" stroke-width="0.4" fill="none" opacity="0.2"/>
      <!-- Sheep -->
      <ellipse cx="200" cy="86" rx="5" ry="3" stroke="#5c4a35" stroke-width="0.6" fill="none" opacity="0.25"/>
      <circle cx="206" cy="84" r="2" stroke="#5c4a35" stroke-width="0.5" fill="none" opacity="0.2"/>
      <ellipse cx="185" cy="88" rx="4" ry="2.5" stroke="#5c4a35" stroke-width="0.5" fill="none" opacity="0.2"/>
      <!-- Green rolling hills -->
      <path d="M0 90 Q20 85 40 90 Q60 85 80 90 Q100 85 120 90 Q140 85 160 90 Q180 85 200 90 Q220 85 240 90" stroke="#4a6741" stroke-width="0.6" fill="none" opacity="0.2"/>
      <!-- Harbor water -->
      <path d="M0 98 Q40 94 80 98 Q120 102 160 98 Q200 94 240 98" stroke="#5c7a8a" stroke-width="0.5" fill="none" opacity="0.2"/>
      <text x="120" y="132" text-anchor="middle" font-size="11" fill="#8b7355" font-weight="700" font-family="serif">紐西蘭 · 奧克蘭天空塔</text>
    </svg>`,
  },
  usa: {
    name: '美國',
    svg: `<svg viewBox="0 0 240 140" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- Manhattan skyline behind -->
      <rect x="10" y="52" width="10" height="38" stroke="#5c4a35" stroke-width="0.5" fill="none" opacity="0.15"/>
      <rect x="25" y="42" width="8" height="48" stroke="#5c4a35" stroke-width="0.5" fill="none" opacity="0.15"/>
      <rect x="38" y="48" width="12" height="42" stroke="#5c4a35" stroke-width="0.5" fill="none" opacity="0.18"/>
      <rect x="55" y="38" width="9" height="52" stroke="#5c4a35" stroke-width="0.5" fill="none" opacity="0.18"/>
      <!-- Empire State hint -->
      <rect x="68" y="30" width="10" height="60" stroke="#5c4a35" stroke-width="0.6" fill="none" opacity="0.2"/>
      <line x1="73" y1="30" x2="73" y2="22" stroke="#5c4a35" stroke-width="0.5" opacity="0.15"/>
      <rect x="82" y="45" width="8" height="45" stroke="#5c4a35" stroke-width="0.5" fill="none" opacity="0.15"/>
      <!-- Statue of Liberty - detailed -->
      <!-- Pedestal -->
      <path d="M130 90 L125 78 L130 78 L130 72 L126 72 L128 65 L140 65 L142 72 L138 72 L138 78 L143 78 L138 90" stroke="#5c4a35" stroke-width="1" fill="#5c4a35" fill-opacity="0.04"/>
      <!-- Body/robe -->
      <path d="M130 65 Q131 50 133 42 Q134 38 136 35 Q138 38 139 42 Q141 50 142 65" stroke="#5c4a35" stroke-width="1.2" fill="none" opacity="0.5"/>
      <!-- Robe draping lines -->
      <path d="M132 48 L130 58 L131 65" stroke="#5c4a35" stroke-width="0.4" fill="none" opacity="0.2"/>
      <path d="M140 48 L142 58 L141 65" stroke="#5c4a35" stroke-width="0.4" fill="none" opacity="0.2"/>
      <path d="M136 45 L136 65" stroke="#5c4a35" stroke-width="0.3" fill="none" opacity="0.15"/>
      <!-- Head -->
      <circle cx="136" cy="30" r="5" stroke="#5c4a35" stroke-width="1" fill="none" opacity="0.45"/>
      <!-- Crown spikes -->
      <path d="M131 27 L129 20" stroke="#5c4a35" stroke-width="0.8" opacity="0.4"/>
      <path d="M133 25 L132 18" stroke="#5c4a35" stroke-width="0.8" opacity="0.4"/>
      <path d="M136 24 L136 16" stroke="#5c4a35" stroke-width="0.8" opacity="0.4"/>
      <path d="M139 25 L140 18" stroke="#5c4a35" stroke-width="0.8" opacity="0.4"/>
      <path d="M141 27 L143 20" stroke="#5c4a35" stroke-width="0.8" opacity="0.4"/>
      <!-- Torch arm raised -->
      <path d="M140 40 Q145 35 150 28 Q152 24 153 20" stroke="#5c4a35" stroke-width="1" fill="none" opacity="0.5"/>
      <!-- Torch flame -->
      <path d="M150 18 Q153 12 155 15 Q157 10 154 8 Q151 10 150 14 Q148 10 150 18" fill="#c4a055" opacity="0.3"/>
      <circle cx="153" cy="13" r="3" stroke="#c4a055" stroke-width="0.6" fill="none" opacity="0.25"/>
      <!-- Tablet in left hand -->
      <path d="M130 42 L125 45 L126 55 L131 52" stroke="#5c4a35" stroke-width="0.6" fill="none" opacity="0.3"/>
      <!-- More skyline right side -->
      <rect x="170" y="50" width="12" height="40" stroke="#5c4a35" stroke-width="0.5" fill="none" opacity="0.15"/>
      <rect x="188" y="42" width="10" height="48" stroke="#5c4a35" stroke-width="0.5" fill="none" opacity="0.18"/>
      <rect x="203" y="48" width="14" height="42" stroke="#5c4a35" stroke-width="0.5" fill="none" opacity="0.15"/>
      <rect x="222" y="55" width="10" height="35" stroke="#5c4a35" stroke-width="0.5" fill="none" opacity="0.12"/>
      <!-- Water / harbor -->
      <path d="M0 95 Q40 91 80 95 Q120 99 160 95 Q200 91 240 95" stroke="#5c7a8a" stroke-width="0.6" fill="none" opacity="0.25"/>
      <path d="M0 100 Q50 96 100 100 Q150 104 200 100 L240 100" stroke="#5c7a8a" stroke-width="0.4" fill="none" opacity="0.15"/>
      <!-- Reflection -->
      <line x1="136" y1="92" x2="136" y2="100" stroke="#5c4a35" stroke-width="0.3" opacity="0.08" stroke-dasharray="1,2"/>
      <text x="120" y="132" text-anchor="middle" font-size="11" fill="#8b7355" font-weight="700" font-family="serif">美利堅 · 自由女神</text>
    </svg>`,
  },
}
