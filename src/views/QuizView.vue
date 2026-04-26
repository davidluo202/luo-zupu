<template>
  <div class="page-margin max-w-3xl mx-auto px-4 py-8">
    <h1 class="ink-title text-3xl font-bold text-center mb-2 tracking-widest">{{ isEn ? 'Ancestry Quiz' : '祖先知多少' }}</h1>
    <p class="text-center mb-8 text-sm" style="color: var(--ink-light)">{{ isEn ? 'Test your knowledge of family history' : '考考你對家族歷史的了解' }}</p>

    <!-- Quiz in progress -->
    <div v-if="!finished">
      <!-- Progress -->
      <div class="mb-6 flex items-center gap-3">
        <div class="flex-1 h-2 rounded-full" style="background: var(--paper-dark)">
          <div class="h-full rounded-full transition-all duration-500" :style="{ width: (currentQ / questions.length * 100) + '%', background: 'var(--gold-bright)' }"></div>
        </div>
        <span class="text-sm font-bold" style="color: var(--gold-dark)">{{ currentQ }}/{{ questions.length }}</span>
      </div>

      <!-- Question -->
      <div class="p-6 rounded-2xl mb-6 fade-in-up" style="background: var(--paper-aged)">
        <div class="text-xs font-bold mb-3" style="color: var(--gold-dark)">{{ isEn ? `Question ${currentQ + 1}` : `第 ${currentQ + 1} 題` }}</div>
        <h2 class="ink-title text-xl font-bold mb-6">{{ questions[currentQ].question }}</h2>

        <div class="space-y-3">
          <button v-for="(opt, i) in questions[currentQ].options" :key="i"
            @click="answer(i)"
            :disabled="answered !== null"
            class="w-full text-left p-4 rounded-xl transition-all ink-body text-sm border-2"
            :style="getOptionStyle(i)">
            <span class="font-bold mr-2">{{ ['A','B','C','D'][i] }}.</span>
            {{ opt }}
          </button>
        </div>

        <!-- Explanation -->
        <div v-if="answered !== null" class="mt-4 p-4 rounded-xl text-sm ink-body fade-in-up"
          :style="answered === questions[currentQ].correct ? 'background: rgba(90,138,106,0.1); border: 1px solid var(--jade-green)' : 'background: rgba(194,59,34,0.1); border: 1px solid var(--red-seal)'">
          <div class="font-bold mb-1" :style="answered === questions[currentQ].correct ? 'color: var(--jade-green)' : 'color: var(--red-seal)'">
            {{ answered === questions[currentQ].correct ? (isEn ? '✅ Correct!' : '✅ 答對了！') : (isEn ? '❌ Wrong' : '❌ 答錯了') }}
          </div>
          <div style="color: var(--ink-medium)">{{ questions[currentQ].explanation }}</div>
        </div>
      </div>

      <!-- Next button -->
      <div v-if="answered !== null" class="text-center">
        <button @click="nextQuestion" class="px-8 py-3 rounded-xl font-bold transition-all hover:scale-105"
          style="background: var(--gold-bright); color: white">
          {{ currentQ < questions.length - 1 ? (isEn ? 'Next →' : '下一題 →') : (isEn ? 'View Results' : '查看結果') }}
        </button>
      </div>
    </div>

    <!-- Results -->
    <div v-else class="text-center fade-in-up">
      <div class="p-8 rounded-2xl mb-6" style="background: var(--paper-aged)">
        <div class="text-6xl mb-4">{{ scoreEmoji }}</div>
        <div class="ink-title text-4xl font-bold mb-2" style="color: var(--gold-bright)">{{ score }}/{{ questions.length }}</div>
        <div class="ink-body text-lg mb-4">{{ scoreMessage }}</div>
        <div class="flex justify-center gap-2 flex-wrap">
          <span v-for="(a, i) in answers" :key="i" class="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold"
            :style="a === questions[i].correct ? 'background: var(--jade-green); color: white' : 'background: var(--red-seal); color: white'">
            {{ i + 1 }}
          </span>
        </div>
      </div>
      <button @click="restart" class="px-8 py-3 rounded-xl font-bold transition-all hover:scale-105"
        style="background: var(--ink-black); color: white">
        {{ isEn ? '🔄 Try Again' : '🔄 再試一次' }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useLang } from '@/i18n.js'

const { isEn, t } = useLang()

const questions = [
  {
    question: '羅氏得姓始祖劻正公在哪位帝王在位時受封？',
    options: ['周文王', '周武王', '秦始皇', '漢武帝'],
    correct: 1,
    explanation: '劻正公於周武王三年（約公元前1048年）鎮守宣城有功，後受封於羅。'
  },
  {
    question: '本譜始祖小九公（洪德公）的原籍是哪裡？',
    options: ['廣東興寧', '福建寧化石壁村', '江西贛州', '湖南長沙'],
    correct: 1,
    explanation: '小九公原籍福建寧化縣石壁村，宋末客道廣東興寧，任循州學正。'
  },
  {
    question: '右八房祖昇澣公享壽多少歲？',
    options: ['85歲', '91歲', '105歲', '68歲'],
    correct: 2,
    explanation: '昇澣公生於1295年，卒於1400年，享壽105歲！是族譜中最長壽的祖先。'
  },
  {
    question: '哪位祖先6歲喪父、12歲喪母，獨自赴揚州經商致富？',
    options: ['啟明公', '萬榮公', '學謙公', '以旂公'],
    correct: 1,
    explanation: '萬榮公（字習章）明末清初單獨至揚州訪叔伯，與叔合股貿易後積累財款。'
  },
  {
    question: '第八世旻公考取了什麼功名？',
    options: ['秀才', '舉人', '進士', '狀元'],
    correct: 2,
    explanation: '旻公是明朝進士，是族譜中官位最高的祖先之一。'
  },
  {
    question: '啟明公在咸豐五年（1855年）考取了什麼功名？',
    options: ['進士', '舉人', '秀才', '貢生'],
    correct: 2,
    explanation: '啟明公27歲游泮，咸豐五年科試及第獲秀才，常為村民辦事，德高望重。'
  },
  {
    question: '谷賢公（第89世）娶了幾位妻子？',
    options: ['3位', '6位', '9位', '12位'],
    correct: 2,
    explanation: '谷賢公娶九妻（饒、程、錢、古、鄭、白、董、蔣、韓），共生十八子。'
  },
  {
    question: '以旂公的謚號是什麼？',
    options: ['孝友', '純端', '史良', '楚田'],
    correct: 1,
    explanation: '以旂公（字必捷，號仕霖）謚號「純端」，本支即「純端公支系」。'
  },
  {
    question: '新濤屬於第幾世？',
    options: ['第23世', '第24世', '第25世', '第26世'],
    correct: 2,
    explanation: '新濤為第25世，父捷登（24世），祖父崇瑎/應芳（23世）。'
  },
  {
    question: '左八房和右八房分別源自小九公的哪兩位兒子？',
    options: ['昇澣和振澣', '新澣和昇澣', '新澣和振澣', '振澣和昇澣'],
    correct: 1,
    explanation: '胡氏生新澣（左八房祖），曾氏生昇澣（右八房祖），黃氏生振澣（傳承不明）。'
  },
]

const currentQ = ref(0)
const answered = ref(null)
const answers = ref([])
const finished = ref(false)

const score = computed(() => answers.value.filter((a, i) => a === questions[i].correct).length)
const scoreEmoji = computed(() => {
  const pct = score.value / questions.length
  if (pct >= 0.9) return '🏆'
  if (pct >= 0.7) return '🎉'
  if (pct >= 0.5) return '👍'
  return '📚'
})
const scoreMessage = computed(() => {
  const pct = score.value / questions.length
  if (isEn.value) {
    if (pct >= 0.9) return 'Genealogy Expert! You know the family history inside out'
    if (pct >= 0.7) return 'Great job! Deep knowledge of family history'
    if (pct >= 0.5) return 'Passed! Consider reading the genealogy more'
    return 'Keep studying! Go check the genealogy'
  }
  if (pct >= 0.9) return '族譜專家！對家族歷史瞭如指掌'
  if (pct >= 0.7) return '很不錯！對家族歷史有深入了解'
  if (pct >= 0.5) return '及格了！建議多翻閱族譜'
  return '需要加油！快去看看族譜吧'
})

function answer(i) {
  if (answered.value !== null) return
  answered.value = i
  answers.value.push(i)
}

function nextQuestion() {
  if (currentQ.value < questions.length - 1) {
    currentQ.value++
    answered.value = null
  } else {
    finished.value = true
  }
}

function restart() {
  currentQ.value = 0
  answered.value = null
  answers.value = []
  finished.value = false
}

function getOptionStyle(i) {
  if (answered.value === null) return 'background: var(--paper-cream); border-color: var(--paper-dark); cursor: pointer'
  if (i === questions[currentQ.value].correct) return 'background: rgba(90,138,106,0.15); border-color: var(--jade-green)'
  if (i === answered.value) return 'background: rgba(194,59,34,0.15); border-color: var(--red-seal)'
  return 'background: var(--paper-cream); border-color: var(--paper-dark); opacity: 0.5'
}
</script>
