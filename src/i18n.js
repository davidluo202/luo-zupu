import { ref, computed } from 'vue'

const lang = ref(localStorage.getItem('zupu_lang') || 'zh')

export function useLang() {
  function setLang(l) {
    lang.value = l
    localStorage.setItem('zupu_lang', l)
  }
  function toggleLang() {
    setLang(lang.value === 'zh' ? 'en' : 'zh')
  }
  const isEn = computed(() => lang.value === 'en')
  const t = (zh, en) => lang.value === 'en' ? en : zh
  return { lang, setLang, toggleLang, isEn, t }
}

// Navigation
export const nav = {
  home: { zh: '首頁', en: 'Home' },
  tree: { zh: '族譜', en: 'Tree' },
  lineage: { zh: '溯源', en: 'Lineage' },
  migration: { zh: '遷徙', en: 'Migration' },
  timeline: { zh: '時光', en: 'Timeline' },
  card: { zh: '名片', en: 'Card' },
  book: { zh: '古卷', en: 'Book' },
  quiz: { zh: '問答', en: 'Quiz' },
}

// Home page
export const home = {
  title: { zh: '羅氏族譜', en: 'Luo Clan Genealogy' },
  subtitle: { zh: '興寧派 · 純端公支系', en: 'Xingning Branch · Chunduan Lineage' },
  ancestor: { zh: '始祖劻正公 · 周武王三年受封 · 公元前1048年', en: 'Ancestor Kuangzheng · Enfeoffed by King Wu of Zhou · 1048 BC' },
  history: { zh: '福建寧化 → 廣東興寧 · 傳承三千餘年 · 二十六世 · 重修印刷本', en: 'Fujian Ninghua → Guangdong Xingning · 3000+ Years · 26 Generations' },
  browseTree: { zh: '🌳 瀏覽族譜', en: '🌳 Browse Tree' },
  traceLineage: { zh: '📜 主脈溯源', en: '📜 Trace Lineage' },
  statHistory: { zh: '傳承歷史', en: 'Heritage' },
  statGen: { zh: '世代延續', en: 'Generations' },
  statPeople: { zh: '錄入人物', en: 'Recorded' },
  statMigration: { zh: '重大遷徙', en: 'Migrations' },
  birthdayLabel: { zh: '🎂 近期生日', en: '🎂 Upcoming Birthdays' },
  birthdayToday: { zh: '今天！', en: 'Today!' },
  birthdayDaysAfter: { zh: '天後', en: ' days' },
  sectionOrigin: { zh: '源 流', en: 'Origins' },
  originAncestor: { zh: '得姓始祖', en: 'Founding Ancestor' },
  originAncestorDesc: { zh: '周武王三年（約公元前1048年）鎮守宣城有功，後受封於羅，子孫以國為氏，羅姓由此而來。', en: 'In the 3rd year of King Wu of Zhou (c. 1048 BC), he defended Xuancheng with distinction and was enfeoffed at Luo. His descendants took the state name as their surname — this is the origin of the Luo (羅) clan.' },
  gen89: { zh: '大成譜第八十九世', en: '89th Generation of the Grand Genealogy' },
  gen89Desc: { zh: '享壽91歲，娶九妻（饒、程、錢、古、鄭、白、董、蔣、韓），共生十八子。其中饒氏（饒修）生三子：小九、伯七、大五。', en: 'Lived to 91. Married nine wives (Rao, Cheng, Qian, Gu, Zheng, Bai, Dong, Jiang, Han), fathering eighteen sons. Among them, Rao Xiu bore three sons: Xiaojiu, Boqi, and Dawu.' },
  gen1Label: { zh: '本譜第一世 · 興寧始祖', en: '1st Generation · Xingning Founding Ancestor' },
  gen1Name: { zh: '小九公（洪德公）', en: 'Xiaojiu (Hongde)' },
  gen1Sub: { zh: '諱君治 · 字盛齡 · 號洪德 · 大成譜第九十世', en: 'Given name Junzhi · Courtesy name Shengling · Art name Hongde · 90th of Grand Genealogy' },
  gen1Desc: { zh: '生於宋理宗景定二年（1261年），原籍福建寧化縣石壁村，宋末赴任廣東循州（今龍川、和平、興寧、五華、連平等縣市地）學正，見興寧山水悠揚、土地沃野豐裕，擇東廓而立家。', en: 'Born in 1261 (Song Dynasty). Originally from Shibi Village, Ninghua, Fujian. Appointed as Education Commissioner of Xunzhou (present-day Longchuan, Heping, Xingning, Wuhua, Lianping and surrounding areas in Guangdong) in late Song Dynasty. Seeing the beautiful mountains and fertile lands of Xingning, he chose to settle here.' },
  spanYears: { zh: '⋮ 歷經約2300年，傳八十九世 ⋮', en: '⋮ Spanning ~2300 years, 89 generations ⋮' },
  toGen1: { zh: '⋮ 下傳本譜始祖 ⋮', en: '⋮ Down to our founding ancestor ⋮' },
  sectionPreface: { zh: '前 言', en: 'Preface' },
  prefaceP1: { zh: '劻正公於周武王三年鎮守宣城有功，（約公元前1048年）後受封於羅，子孫以國為氏，羅姓由此而來。', en: 'Kuangzheng defended Xuancheng with distinction in the 3rd year of King Wu of Zhou (c. 1048 BC) and was enfeoffed at Luo. His descendants adopted the state name as their surname — the origin of the Luo clan.' },
  prefaceP2: { zh: '本族譜根據祖輩第二十二世手抄本搜集整理重新編寫，主要收錄「小九公」之後，「純端公」派列代始祖之字號及簡歷，以便後人了解祖輩之祖章。', en: 'This genealogy is compiled from a hand-copied manuscript of the 22nd generation, recording the courtesy names and biographies of ancestors in the Chunduan lineage after Xiaojiu, for the benefit of future generations.' },
  prefaceP3: { zh: '族譜派語源於北宋初期清徽學士顥公修《大成譜》時所定，四十字，每代派八字，俗稱「老八旬」。清康熙辛丑年（公曆1721年）重修《大成譜》，形成「新派語」，俗稱「新八旬」，湖南、江西、廣東多沿用此新派語。', en: 'The generation naming convention originated from the Grand Genealogy compiled by Scholar Hao in early Northern Song — 40 characters, 8 per generation, called "Old Eight Decades." In 1721 (Kangxi era), it was revised into the "New Eight Decades," widely adopted in Hunan, Jiangxi, and Guangdong.' },
  prefaceP4: { zh: '故原族譜稱《大成譜》或「老八旬」，現族譜稱「新八旬」或「新派語」。自「新」字輩之後，族中未再統一使用派語，各支後裔多依個人意願命名，不再拘於字輩。', en: 'After the "Xin" (新) generation, the clan no longer strictly follows the naming convention. Descendants now choose names freely, no longer bound by generational characters.' },
  sectionGeneration: { zh: '世代輩分 · 朝代對照', en: 'Generations & Dynasties' },
  footer: { zh: '羅氏族譜 · 源遠流長 · 薪火相傳', en: 'Luo Clan Genealogy · Deep Roots · Eternal Legacy' },
}

// Password gate
export const gate = {
  title: { zh: '羅氏族譜', en: 'Luo Clan Genealogy' },
  prompt: { zh: '請輸入密碼以進入', en: 'Enter password to continue' },
  placeholder: { zh: '請輸入密碼', en: 'Enter password' },
  submit: { zh: '確認進入', en: 'Enter' },
  error: { zh: '密碼不正確，請重試', en: 'Incorrect password, please try again' },
}
