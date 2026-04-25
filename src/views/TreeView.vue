<template>
  <div class="flex flex-col h-[calc(100vh-56px)]">
    <!-- Top bar -->
    <div class="flex items-center gap-3 px-4 py-3 border-b" style="border-color: var(--paper-dark); background: var(--paper-aged)">
      <!-- Search -->
      <div class="flex-1 max-w-sm relative">
        <input v-model="searchQuery" @input="onSearch" placeholder="輸入人名搜索定位..."
          class="w-full pl-9 pr-4 py-2 text-sm rounded-xl border ink-body"
          style="background: var(--paper-cream); border-color: var(--paper-dark); font-family: var(--font-kai)">
        <span class="absolute left-3 top-2.5 text-sm" style="color: var(--ink-faint)">🔍</span>
        <!-- Results dropdown -->
        <div v-if="searchResults.length" class="absolute z-50 w-full mt-1 rounded-xl shadow-lg overflow-hidden border"
          style="background: var(--paper-cream); border-color: var(--paper-dark)">
          <button v-for="m in searchResults" :key="m.id" @click="focusPerson(m)"
            class="w-full text-left px-4 py-2.5 text-sm ink-body border-b hover:opacity-80 transition-opacity"
            style="border-color: var(--paper-dark)">
            <span class="font-bold">羅{{ m.name }}</span>
            <span v-if="m.courtesy" class="ml-1" style="color: var(--ink-light)">字{{ m.courtesy }}</span>
            <span class="ml-2 text-xs" style="color: var(--gold-dark)">第{{ m.generation }}世</span>
          </button>
        </div>
      </div>

      <button @click="traceAncestry" v-if="selectedPerson"
        class="px-3 py-2 text-xs rounded-xl font-bold transition-all hover:scale-105"
        style="background: var(--gold-bright); color: white; font-family: var(--font-kai)">
        📜 溯源至始祖
      </button>
      <button @click="resetView"
        class="px-3 py-2 text-xs rounded-xl font-bold transition-all"
        style="background: var(--paper-cream); border: 1px solid var(--paper-dark); font-family: var(--font-kai)">
        🎯 重置視圖
      </button>
    </div>

    <!-- Selected person detail panel -->
    <div v-if="selectedPerson" class="px-4 py-3 border-b flex items-start gap-4 fade-in-up"
      style="border-color: var(--paper-dark); background: linear-gradient(135deg, var(--paper-aged), var(--paper-cream))">
      <div class="seal-stamp text-xl px-2 py-1 shrink-0" style="border-width:2px">{{ selectedPerson.name.charAt(0) }}</div>
      <div class="flex-1 min-w-0">
        <div class="flex items-baseline gap-2 flex-wrap">
          <span class="ink-title text-xl font-bold">羅{{ selectedPerson.name }}</span>
          <span v-if="selectedPerson.courtesy" class="text-sm" style="color: var(--ink-light)">字{{ selectedPerson.courtesy }}</span>
          <span v-if="selectedPerson.alias" class="text-sm" style="color: var(--ink-light)">號{{ selectedPerson.alias }}</span>
          <span v-if="selectedPerson.posthumous" class="text-sm" style="color: var(--red-seal)">謚{{ selectedPerson.posthumous }}</span>
          <span class="text-xs px-2 py-0.5 rounded font-bold" style="background: var(--gold-bright); color: white">第{{ selectedPerson.generation }}世</span>
        </div>
        <div class="text-xs mt-1 flex flex-wrap gap-3" style="color: var(--ink-medium)">
          <span v-if="selectedPerson.birth">生 {{ selectedPerson.birth }}</span>
          <span v-if="selectedPerson.death">卒 {{ selectedPerson.death }}</span>
          <span v-if="selectedPerson.title" style="color: var(--jade-green)">🏛️ {{ selectedPerson.title }}</span>
        </div>
        <div v-if="selectedPerson.deeds" class="text-xs mt-1 ink-body" style="color: var(--ink-medium)">
          {{ selectedPerson.deeds.length > 100 ? selectedPerson.deeds.substring(0,100)+'...' : selectedPerson.deeds }}
        </div>
        <div v-if="selectedPerson.spouses?.length" class="text-xs mt-1" style="color: var(--red-marriage)">
          配偶：{{ selectedPerson.spouses.map(s => s.name).join('、') }}
        </div>
      </div>
      <button @click="selectedPerson = null" class="text-sm shrink-0" style="color: var(--ink-faint)">✕</button>
    </div>

    <!-- Tree canvas -->
    <div ref="treeContainer" class="flex-1 overflow-hidden relative" style="background: var(--paper-cream)">
      <div v-if="!treeReady" class="absolute inset-0 flex items-center justify-center">
        <span class="ink-title text-lg animate-pulse" style="color: var(--ink-faint)">繪製族譜中...</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'
import { useRouter } from 'vue-router'
import * as d3 from 'd3'
import { members, mainLineage } from '@/data/genealogy.js'

const router = useRouter()
const treeContainer = ref(null)
const searchQuery = ref('')
const searchResults = ref([])
const selectedPerson = ref(null)
const treeReady = ref(false)
let svg, g, zoom, allNodes = []

// Filter out ancestors for the tree (only gen >= 1)
const treeMembers = members.filter(m => m.generation >= 1)

function onSearch() {
  const q = searchQuery.value.trim()
  if (!q) { searchResults.value = []; return }
  searchResults.value = treeMembers.filter(m =>
    m.name.includes(q) || (m.courtesy && m.courtesy.includes(q)) ||
    (m.alias && m.alias.includes(q))
  ).slice(0, 8)
}

function focusPerson(m) {
  searchQuery.value = ''
  searchResults.value = []
  selectedPerson.value = m

  // Find and zoom to node
  const node = allNodes.find(n => n.data?.id === m.id)
  if (node && svg && zoom) {
    const W = treeContainer.value.clientWidth
    const H = treeContainer.value.clientHeight
    const scale = 1.5
    const tx = W/2 - scale * node.x
    const ty = H/2 - scale * node.y
    svg.transition().duration(750).call(zoom.transform,
      d3.zoomIdentity.translate(tx, ty).scale(scale))

    // Highlight
    g.selectAll('.node-card').attr('opacity', 0.3)
    g.selectAll('.node-card').filter(d => d.data?.id === m.id)
      .attr('opacity', 1)
      .select('rect').attr('stroke', '#c4a055').attr('stroke-width', 3)

    setTimeout(() => {
      g.selectAll('.node-card').attr('opacity', 1)
    }, 2000)
  }
}

function traceAncestry() {
  if (!selectedPerson.value) return
  // Highlight main lineage path to this person
  const path = []
  let current = selectedPerson.value.id
  // Walk up through mainLineage
  const idx = mainLineage.indexOf(current)
  if (idx >= 0) {
    // It's on main lineage, highlight from root to here
    g.selectAll('.link-line').attr('stroke', 'var(--paper-dark)').attr('stroke-width', 1.5)
    g.selectAll('.node-card rect').attr('stroke', 'var(--paper-dark)').attr('stroke-width', 1)

    for (let i = 0; i <= idx; i++) {
      const id = mainLineage[i]
      g.selectAll('.node-card').filter(d => d.data?.id === id)
        .select('rect').attr('stroke', '#c4a055').attr('stroke-width', 3)
    }
  }
  // Zoom to fit
  resetView()
}

function resetView() {
  if (!svg || !g) return
  try {
    const b = g.node().getBBox()
    if (!b.width) return
    const W = treeContainer.value.clientWidth
    const H = treeContainer.value.clientHeight
    const pad = 60
    const s = Math.min((W - pad) / b.width, (H - pad) / b.height, 1)
    svg.transition().duration(500).call(zoom.transform,
      d3.zoomIdentity.translate(W/2 - s*(b.x+b.width/2), H/2 - s*(b.y+b.height/2)).scale(s))
    g.selectAll('.node-card').attr('opacity', 1)
    g.selectAll('.node-card rect').attr('stroke', 'var(--paper-dark)').attr('stroke-width', 1)
  } catch(e) {}
}

function buildTree() {
  if (!treeContainer.value) return
  const W = treeContainer.value.clientWidth
  const H = treeContainer.value.clientHeight

  // Group by generation
  const genGroups = new Map()
  for (const m of treeMembers) {
    if (!genGroups.has(m.generation)) genGroups.set(m.generation, [])
    genGroups.get(m.generation).push(m)
  }
  const gens = Array.from(genGroups.keys()).sort((a,b) => a - b)

  // Layout: each generation is a row
  const ROW_H = 120
  const NODE_W = 130
  const NODE_H = 70
  const GAP = 20

  const nodes = []
  const links = []

  gens.forEach((gen, gi) => {
    const mems = genGroups.get(gen)
    const totalW = mems.length * (NODE_W + GAP) - GAP
    const startX = -totalW / 2

    mems.forEach((m, mi) => {
      const x = startX + mi * (NODE_W + GAP) + NODE_W/2
      const y = gi * ROW_H
      nodes.push({ x, y, data: m })

      // Find parent links
      for (const pm of treeMembers) {
        if (pm.spouses) {
          for (const sp of pm.spouses) {
            if (sp.children && sp.children.includes(m.id)) {
              const parentNode = nodes.find(n => n.data.id === pm.id)
              if (parentNode) {
                links.push({ source: parentNode, target: { x, y }, childId: m.id, parentId: pm.id })
              }
            }
          }
        }
      }
    })
  })

  allNodes = nodes

  // Create SVG
  d3.select(treeContainer.value).selectAll('svg').remove()
  svg = d3.select(treeContainer.value).append('svg')
    .attr('width', '100%').attr('height', '100%')
    .attr('viewBox', `0 0 ${W} ${H}`)

  zoom = d3.zoom().scaleExtent([0.05, 3]).on('zoom', e => g.attr('transform', e.transform))
  svg.call(zoom)
  g = svg.append('g')

  // Generation labels
  gens.forEach((gen, gi) => {
    const y = gi * ROW_H
    g.append('text')
      .attr('x', nodes.filter(n => n.data.generation === gen).reduce((min, n) => Math.min(min, n.x), 0) - NODE_W)
      .attr('y', y + NODE_H/2 - 5)
      .attr('font-size', '11px')
      .attr('font-family', 'var(--font-kai)')
      .attr('fill', 'var(--gold-dark)')
      .attr('font-weight', '700')
      .attr('text-anchor', 'end')
      .text(`第${gen}世`)
  })

  // Draw links
  const linkLayer = g.append('g')
  for (const lk of links) {
    const isMain = mainLineage.includes(lk.childId) && mainLineage.includes(lk.parentId)
    linkLayer.append('path')
      .attr('class', 'link-line')
      .attr('d', `M${lk.source.x},${lk.source.y + NODE_H/2} C${lk.source.x},${(lk.source.y + lk.target.y)/2 + NODE_H/4} ${lk.target.x},${(lk.source.y + lk.target.y)/2 + NODE_H/4} ${lk.target.x},${lk.target.y - NODE_H/2}`)
      .attr('fill', 'none')
      .attr('stroke', isMain ? 'var(--gold-bright)' : 'var(--paper-dark)')
      .attr('stroke-width', isMain ? 2.5 : 1.5)
      .attr('stroke-linecap', 'round')
  }

  // Draw nodes
  const nodeLayer = g.append('g')
  for (const n of nodes) {
    const m = n.data
    const isMain = mainLineage.includes(m.id)
    const el = nodeLayer.append('g')
      .attr('class', 'node-card')
      .attr('transform', `translate(${n.x - NODE_W/2}, ${n.y - NODE_H/2})`)
      .attr('cursor', 'pointer')
      .datum(n)
      .on('click', (e) => {
        selectedPerson.value = m
        // Highlight
        g.selectAll('.node-card rect').attr('stroke', 'var(--paper-dark)').attr('stroke-width', 1)
        d3.select(e.currentTarget).select('rect').attr('stroke', '#c4a055').attr('stroke-width', 3)
      })

    // Card background
    el.append('rect')
      .attr('width', NODE_W).attr('height', NODE_H)
      .attr('rx', 10).attr('ry', 10)
      .attr('fill', isMain ? 'var(--paper-aged)' : 'var(--paper-cream)')
      .attr('stroke', isMain ? 'var(--gold-bright)' : 'var(--paper-dark)')
      .attr('stroke-width', isMain ? 2 : 1)
      .attr('filter', 'drop-shadow(0 2px 4px rgba(0,0,0,0.08))')

    // Name
    el.append('text')
      .attr('x', NODE_W/2).attr('y', 28)
      .attr('text-anchor', 'middle')
      .attr('font-family', 'var(--font-kai)')
      .attr('font-size', '15px')
      .attr('font-weight', '700')
      .attr('fill', 'var(--ink-black)')
      .text('羅' + m.name)

    // Courtesy name
    if (m.courtesy) {
      el.append('text')
        .attr('x', NODE_W/2).attr('y', 44)
        .attr('text-anchor', 'middle')
        .attr('font-family', 'var(--font-song)')
        .attr('font-size', '10px')
        .attr('fill', 'var(--ink-light)')
        .text('字' + m.courtesy)
    }

    // Title or birth year
    const subtitle = m.title || (m.birth ? m.birth.toString().split('-')[0] : '')
    if (subtitle) {
      el.append('text')
        .attr('x', NODE_W/2).attr('y', 58)
        .attr('text-anchor', 'middle')
        .attr('font-size', '9px')
        .attr('fill', m.title ? 'var(--jade-green)' : 'var(--ink-faint)')
        .text(subtitle.length > 14 ? subtitle.substring(0,13) + '…' : subtitle)
    }

    // Main lineage indicator
    if (isMain) {
      el.append('circle')
        .attr('cx', NODE_W - 8).attr('cy', 8)
        .attr('r', 4)
        .attr('fill', 'var(--gold-bright)')
    }

    // Entry animation
    el.attr('opacity', 0)
      .transition().duration(400).delay(Math.min(nodes.indexOf(n) * 15, 1500))
      .attr('opacity', 1)
  }

  treeReady.value = true

  // Center view
  nextTick(() => setTimeout(resetView, 500))
}

onMounted(() => {
  nextTick(() => setTimeout(buildTree, 200))
  window.addEventListener('resize', () => { buildTree() })
})
</script>
