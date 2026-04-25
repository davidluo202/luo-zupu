<template>
  <div class="flex flex-col h-[calc(100vh-56px)]">
    <!-- Top bar -->
    <div class="flex items-center gap-3 px-4 py-3 border-b" style="border-color: var(--paper-dark); background: var(--paper-aged)">
      <div class="flex-1 max-w-sm relative">
        <input v-model="searchQuery" @input="onSearch" placeholder="輸入人名搜索定位..."
          class="w-full pl-9 pr-4 py-2 text-sm rounded-xl border ink-body"
          style="background: var(--paper-cream); border-color: var(--paper-dark); font-family: var(--font-kai)">
        <span class="absolute left-3 top-2.5 text-sm" style="color: var(--ink-faint)">🔍</span>
        <div v-if="searchResults.length" class="absolute z-50 w-full mt-1 rounded-xl shadow-lg overflow-hidden border"
          style="background: var(--paper-cream); border-color: var(--paper-dark)">
          <button v-for="m in searchResults" :key="m.id" @click="focusPerson(m)"
            class="w-full text-left px-4 py-2.5 text-sm ink-body border-b transition-colors"
            style="border-color: var(--paper-dark)"
            onmouseover="this.style.background='var(--paper-aged)'" onmouseout="this.style.background='var(--paper-cream)'">
            <span class="font-bold" style="font-family: var(--font-kai)">羅{{ m.name }}</span>
            <span v-if="m.courtesy" class="ml-1" style="color: var(--ink-light)">字{{ m.courtesy }}</span>
            <span class="ml-2 text-xs" style="color: var(--gold-dark)">第{{ m.generation }}世</span>
          </button>
        </div>
      </div>
      <button @click="resetView" class="px-3 py-2 text-xs rounded-xl font-bold"
        style="background: var(--paper-cream); border: 1px solid var(--paper-dark); font-family: var(--font-kai)">
        🎯 全覽
      </button>
    </div>

    <!-- Selected person panel -->
    <div v-if="selectedPerson" class="px-4 py-3 border-b fade-in-up"
      style="border-color: var(--paper-dark); background: linear-gradient(135deg, var(--paper-aged), var(--paper-cream))">
      <div class="flex items-start gap-4">
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
          <div v-if="selectedPerson.deeds" class="text-xs mt-1 ink-body" style="color: var(--ink-medium)">{{ selectedPerson.deeds }}</div>
          <div v-if="selectedPerson.spouses?.length" class="text-xs mt-1" style="color: var(--red-marriage)">
            配偶：{{ selectedPerson.spouses.map(s => s.name).join('、') }}
          </div>
        </div>
        <button @click="selectedPerson = null" class="text-sm shrink-0" style="color: var(--ink-faint)">✕</button>
      </div>
    </div>

    <!-- Tree canvas -->
    <div ref="treeContainer" class="flex-1 overflow-hidden relative" style="background: var(--paper-cream)"></div>

    <!-- Person detail modal -->
    <PersonModal :person="modalPerson" @close="modalPerson = null" />
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'
import * as d3 from 'd3'
import { members, mainLineage, dynastyMap, pinyinMap } from '@/data/genealogy.js'
import { toTraditional } from '@/data/simplifiedMap.js'
import PersonModal from '@/components/PersonModal.vue'

const treeContainer = ref(null)
const searchQuery = ref('')
const searchResults = ref([])
const selectedPerson = ref(null)
const modalPerson = ref(null)
let svg, g, zoom, allNodeEls = [], allNodeData = []

const treeMembers = members.filter(m => m.generation >= 1)

// Build parent→children map from spouse data
function buildParentMap() {
  const childToParent = new Map()
  for (const m of treeMembers) {
    if (m.spouses) {
      for (const sp of m.spouses) {
        if (sp.children) {
          for (const cid of sp.children) {
            if (!childToParent.has(cid)) childToParent.set(cid, [])
            childToParent.get(cid).push(m.id)
          }
        }
      }
    }
  }
  return childToParent
}

// Find ancestry path from a person up to root
function findAncestryPath(personId) {
  const childToParent = buildParentMap()
  const path = [personId]
  let current = personId
  const visited = new Set()
  while (childToParent.has(current) && !visited.has(current)) {
    visited.add(current)
    const parents = childToParent.get(current)
    if (parents.length > 0) {
      path.unshift(parents[0])
      current = parents[0]
    } else break
  }
  return path
}

// Find descendants
function findDescendants(personId) {
  const desc = [personId]
  const m = treeMembers.find(x => x.id === personId)
  if (m?.spouses) {
    for (const sp of m.spouses) {
      if (sp.children) {
        for (const cid of sp.children) {
          desc.push(...findDescendants(cid))
        }
      }
    }
  }
  return desc
}

function onSearch() {
  const q = searchQuery.value.trim()
  if (!q) { searchResults.value = []; return }
  const qt = toTraditional(q)
  searchResults.value = treeMembers.filter(m =>
    m.name.includes(q) || m.name.includes(qt) ||
    (m.courtesy && (m.courtesy.includes(q) || m.courtesy.includes(qt))) ||
    (m.alias && (m.alias.includes(q) || m.alias.includes(qt)))
  ).slice(0, 8)
}

function focusPerson(m) {
  searchQuery.value = ''
  searchResults.value = []
  selectedPerson.value = m
  modalPerson.value = m

  // Find ancestry path and descendants
  const ancestryPath = findAncestryPath(m.id)
  const descendants = findDescendants(m.id)
  const highlightIds = new Set([...ancestryPath, ...descendants])

  // Dim all, highlight path
  g.selectAll('.node-group').attr('opacity', 0.15)
  g.selectAll('.link-path').attr('opacity', 0.05)

  // Highlight ancestry + descendants
  g.selectAll('.node-group').filter(d => highlightIds.has(d.id))
    .attr('opacity', 1)
    .select('rect').attr('stroke', '#c4a055').attr('stroke-width', 3)

  // Highlight the selected person specially
  g.selectAll('.node-group').filter(d => d.id === m.id)
    .select('rect').attr('stroke', '#c23b22').attr('stroke-width', 4)

  // Highlight links in ancestry path
  for (let i = 0; i < ancestryPath.length - 1; i++) {
    const from = ancestryPath[i], to = ancestryPath[i+1]
    g.selectAll('.link-path').filter(d => d.parentId === from && d.childId === to)
      .attr('opacity', 1).attr('stroke', '#c4a055').attr('stroke-width', 3)
  }
  // Highlight links to descendants
  g.selectAll('.link-path').filter(d => highlightIds.has(d.parentId) && highlightIds.has(d.childId))
    .attr('opacity', 1)

  // Zoom to person
  const nd = allNodeData.find(n => n.id === m.id)
  if (nd) {
    const W = treeContainer.value.clientWidth, H = treeContainer.value.clientHeight
    const scale = 1.5
    svg.transition().duration(750).call(zoom.transform,
      d3.zoomIdentity.translate(W/2 - scale*nd.x, H/2 - scale*nd.y).scale(scale))
  }
}

function resetView() {
  if (!svg || !g) return
  // Restore all
  g.selectAll('.node-group').attr('opacity', 1)
  g.selectAll('.node-group rect')
    .each(function(d) {
      const isMain = mainLineage.includes(d.id)
      d3.select(this).attr('stroke', isMain ? 'var(--gold-bright)' : 'var(--paper-dark)').attr('stroke-width', isMain ? 2 : 1)
    })
  g.selectAll('.link-path').attr('opacity', 1)
    .each(function(d) {
      const isMain = mainLineage.includes(d.parentId) && mainLineage.includes(d.childId)
      d3.select(this).attr('stroke', isMain ? 'var(--gold-bright)' : 'var(--paper-dark)').attr('stroke-width', isMain ? 2.5 : 1.5)
    })
  selectedPerson.value = null
  // Fit view
  try {
    const b = g.node().getBBox()
    if (!b.width) return
    const W = treeContainer.value.clientWidth, H = treeContainer.value.clientHeight, pad = 40
    const s = Math.min((W-pad)/b.width, (H-pad)/b.height, 1)
    svg.transition().duration(500).call(zoom.transform,
      d3.zoomIdentity.translate(W/2 - s*(b.x+b.width/2), H/2 - s*(b.y+b.height/2)).scale(s))
  } catch(e) {}
}

function buildTree() {
  if (!treeContainer.value) return
  const W = treeContainer.value.clientWidth, H = treeContainer.value.clientHeight

  const ROW_H = 110
  const NODE_W = 120
  const NODE_H = 64
  const GAP = 16

  // Group by generation
  const genGroups = new Map()
  for (const m of treeMembers) {
    if (!genGroups.has(m.generation)) genGroups.set(m.generation, [])
    genGroups.get(m.generation).push(m)
  }
  const gens = Array.from(genGroups.keys()).sort((a,b) => a - b)

  // Layout nodes
  allNodeData = []
  gens.forEach((gen, gi) => {
    const mems = genGroups.get(gen)
    const totalW = mems.length * (NODE_W + GAP) - GAP
    const startX = -totalW / 2
    mems.forEach((m, mi) => {
      allNodeData.push({
        ...m,
        x: startX + mi * (NODE_W + GAP) + NODE_W/2,
        y: gi * ROW_H
      })
    })
  })

  // Build links
  const linkData = []
  const childToParent = buildParentMap()
  for (const [childId, parentIds] of childToParent) {
    for (const pid of parentIds) {
      const pn = allNodeData.find(n => n.id === pid)
      const cn = allNodeData.find(n => n.id === childId)
      if (pn && cn) {
        linkData.push({ parentId: pid, childId, px: pn.x, py: pn.y, cx: cn.x, cy: cn.y })
      }
    }
  }

  // Create SVG
  d3.select(treeContainer.value).selectAll('svg').remove()
  svg = d3.select(treeContainer.value).append('svg')
    .attr('width', '100%').attr('height', '100%')
    .attr('viewBox', `0 0 ${W} ${H}`)
  zoom = d3.zoom().scaleExtent([0.03, 4]).on('zoom', e => g.attr('transform', e.transform))
  svg.call(zoom)
  g = svg.append('g')

  // Gen labels
  gens.forEach((gen, gi) => {
    g.append('text')
      .attr('x', allNodeData.filter(n => n.generation === gen).reduce((min, n) => Math.min(min, n.x), 0) - NODE_W - 10)
      .attr('y', gi * ROW_H + NODE_H/2 - 8)
      .attr('text-anchor', 'end')
      .attr('font-family', 'var(--font-kai)').attr('font-size', '11px')
      .attr('fill', 'var(--gold-dark)').attr('font-weight', '700')
      .text(`第${gen}世 ${dynastyMap[gen] || ''}`)
  })

  // Draw links
  g.selectAll('.link-path')
    .data(linkData).join('path')
    .attr('class', 'link-path')
    .attr('d', d => {
      const midY = (d.py + NODE_H/2 + d.cy - NODE_H/2) / 2
      return `M${d.px},${d.py + NODE_H/2} C${d.px},${midY} ${d.cx},${midY} ${d.cx},${d.cy - NODE_H/2}`
    })
    .attr('fill', 'none')
    .attr('stroke', d => (mainLineage.includes(d.parentId) && mainLineage.includes(d.childId)) ? 'var(--gold-bright)' : 'var(--paper-dark)')
    .attr('stroke-width', d => (mainLineage.includes(d.parentId) && mainLineage.includes(d.childId)) ? 2.5 : 1.5)
    .attr('stroke-linecap', 'round')

  // Draw nodes
  const nodeGroups = g.selectAll('.node-group')
    .data(allNodeData).join('g')
    .attr('class', 'node-group')
    .attr('transform', d => `translate(${d.x - NODE_W/2}, ${d.y - NODE_H/2})`)
    .attr('cursor', 'pointer')
    .on('click', (e, d) => {
      selectedPerson.value = d
      focusPerson(d)
    })

  // Card bg
  nodeGroups.append('rect')
    .attr('width', NODE_W).attr('height', NODE_H)
    .attr('rx', 8).attr('ry', 8)
    .attr('fill', d => mainLineage.includes(d.id) ? 'var(--paper-aged)' : 'var(--paper-cream)')
    .attr('stroke', d => mainLineage.includes(d.id) ? 'var(--gold-bright)' : 'var(--paper-dark)')
    .attr('stroke-width', d => mainLineage.includes(d.id) ? 2 : 1)
    .attr('filter', 'drop-shadow(0 1px 3px rgba(0,0,0,0.06))')

  // Main lineage dot
  nodeGroups.filter(d => mainLineage.includes(d.id))
    .append('circle')
    .attr('cx', NODE_W - 7).attr('cy', 7).attr('r', 3.5)
    .attr('fill', 'var(--gold-bright)')

  // Name text
  nodeGroups.append('text')
    .attr('x', NODE_W/2).attr('y', 24)
    .attr('text-anchor', 'middle')
    .attr('font-family', 'var(--font-kai)').attr('font-size', '14px').attr('font-weight', '700')
    .attr('fill', 'var(--ink-black)')
    .text(d => '羅' + d.name)

  // Courtesy
  nodeGroups.filter(d => d.courtesy)
    .append('text')
    .attr('x', NODE_W/2).attr('y', 40)
    .attr('text-anchor', 'middle')
    .attr('font-size', '9px').attr('fill', 'var(--ink-light)')
    .text(d => '字' + d.courtesy)

  // Title or year
  nodeGroups.append('text')
    .attr('x', NODE_W/2).attr('y', d => d.courtesy ? 53 : 42)
    .attr('text-anchor', 'middle')
    .attr('font-size', '8px')
    .attr('fill', d => d.title ? 'var(--jade-green)' : 'var(--ink-faint)')
    .text(d => {
      const t = d.title || (d.birth ? String(d.birth).split('-')[0] : '')
      return t.length > 16 ? t.substring(0,15)+'…' : t
    })

  // Fade in
  nodeGroups.attr('opacity', 0).transition().duration(300)
    .delay((d, i) => Math.min(i * 10, 800)).attr('opacity', 1)

  nextTick(() => setTimeout(resetView, 400))
}

onMounted(() => nextTick(() => setTimeout(buildTree, 200)))
</script>
