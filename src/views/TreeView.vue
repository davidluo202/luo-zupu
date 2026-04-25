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

    <!-- Tree canvas with scholar background -->
    <div ref="treeContainer" class="flex-1 overflow-hidden relative" style="background: var(--paper-cream)">
      <!-- Mountain landscape background (left side only, single layer) -->
      <div class="absolute left-0 top-0 h-full pointer-events-none" style="z-index: 1; opacity: 0.3">
        <img src="/tree-bg.jpg" alt="" style="height: 100%; width: auto; object-fit: contain; object-position: left top;">
      </div>
      <!-- Scholar SVG removed, using image instead -->
      <div class="hidden" style="display:none">
        <svg width="280" height="400" viewBox="0 0 280 400" fill="none">
          <!-- Scholar sitting -->
          <g transform="translate(80, 100)">
            <!-- Body/robe -->
            <path d="M0 80 Q-20 60 -15 30 Q-10 10 0 0 Q10 10 15 30 Q20 60 0 80" fill="var(--ink-medium)"/>
            <path d="M0 80 Q-30 100 -40 150 Q-35 180 -20 200 L20 200 Q35 180 40 150 Q30 100 0 80" fill="var(--ink-medium)"/>
            <!-- Head -->
            <circle cx="0" cy="-10" r="18" fill="var(--ink-medium)"/>
            <!-- Hair bun -->
            <ellipse cx="0" cy="-28" rx="8" ry="10" fill="var(--ink-dark)"/>
            <!-- Arms holding book -->
            <path d="M-15 100 Q-40 90 -50 100 Q-45 110 -30 115" fill="var(--ink-medium)"/>
            <path d="M15 100 Q40 90 50 100 Q45 110 30 115" fill="var(--ink-medium)"/>
            <!-- Book -->
            <rect x="-25" y="105" width="50" height="35" rx="2" fill="var(--paper-dark)" opacity="0.8"/>
            <line x1="-15" y1="115" x2="15" y2="115" stroke="var(--ink-faint)" stroke-width="0.8"/>
            <line x1="-15" y1="122" x2="12" y2="122" stroke="var(--ink-faint)" stroke-width="0.8"/>
            <line x1="-15" y1="129" x2="10" y2="129" stroke="var(--ink-faint)" stroke-width="0.8"/>
          </g>
          <!-- Books stack -->
          <g transform="translate(160, 280)" opacity="0.8">
            <rect x="0" y="0" width="45" height="8" rx="1" fill="var(--ink-light)"/>
            <rect x="-3" y="10" width="50" height="8" rx="1" fill="var(--ink-medium)"/>
            <rect x="2" y="20" width="42" height="8" rx="1" fill="var(--ink-light)"/>
          </g>
          <!-- Bamboo -->
          <g transform="translate(220, 50)">
            <line x1="0" y1="0" x2="0" y2="340" stroke="var(--jade-green)" stroke-width="3"/>
            <path d="M0 60 L15 45 Q22 38 28 34" stroke="var(--jade-green)" stroke-width="1" fill="none"/>
            <path d="M0 60 L12 52 Q18 50 24 48" stroke="var(--jade-green)" stroke-width="1" fill="none"/>
            <path d="M0 140 L-15 125 Q-22 118 -28 114" stroke="var(--jade-green)" stroke-width="1" fill="none"/>
            <path d="M0 220 L18 205 Q24 198 30 194" stroke="var(--jade-green)" stroke-width="1" fill="none"/>
          </g>
          <!-- Mountains -->
          <path d="M0 400 L0 350 Q40 310 100 340 Q140 300 200 330 Q240 310 280 340 L280 400 Z" fill="var(--ink-faint)" opacity="0.3"/>
        </svg>
      </div>
    </div>

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

  // Build parent map for sorting children near parents
  const childToParentId = new Map()
  for (const m of treeMembers) {
    if (m.spouses) for (const sp of m.spouses) {
      if (sp.children) for (const cid of sp.children) {
        childToParentId.set(cid, m.id)
      }
    }
  }

  // Identify "early death no descendants" members and group by parent
  const hasChildren = new Set()
  for (const m of treeMembers) {
    if (m.spouses) for (const sp of m.spouses) {
      if (sp.children?.length) hasChildren.add(m.id)
    }
  }
  const earlyDeathByParent = new Map() // parentId -> [member, ...]
  const earlyDeathIds = new Set()
  for (const m of treeMembers) {
    const isEarlyDeath = (m.note === '早故' || (m.note && m.note.includes('早故'))) && !hasChildren.has(m.id)
    if (isEarlyDeath) {
      const pid = childToParentId.get(m.id)
      if (pid) {
        if (!earlyDeathByParent.has(pid)) earlyDeathByParent.set(pid, [])
        earlyDeathByParent.get(pid).push(m)
        earlyDeathIds.add(m.id)
      }
    }
  }

  // Create merged nodes for early-death groups
  const mergedNodes = []
  for (const [pid, eds] of earlyDeathByParent) {
    if (eds.length >= 1) {
      const firstEd = eds[0]
      mergedNodes.push({
        id: '_ed_' + pid,
        name: eds.map(e => e.name).join('、'),
        generation: firstEd.generation,
        branch: firstEd.branch,
        note: '早故',
        _isMergedEarlyDeath: true,
        _parentId: pid,
        _count: eds.length,
      })
    }
  }

  // Build display members: replace individual early-death with merged
  const displayMembers = [
    ...treeMembers.filter(m => !earlyDeathIds.has(m.id)),
    ...mergedNodes,
  ]

  // Group by generation
  const genGroups = new Map()
  for (const m of displayMembers) {
    if (!genGroups.has(m.generation)) genGroups.set(m.generation, [])
    genGroups.get(m.generation).push(m)
  }
  const gens = Array.from(genGroups.keys()).sort((a,b) => a - b)

  // Layout nodes - sort children by parent position
  allNodeData = []
  const idToX = new Map()
  gens.forEach((gen, gi) => {
    let mems = genGroups.get(gen)
    // Sort by parent's X position (so siblings stay near their parent)
    if (gi > 0) {
      mems = mems.sort((a, b) => {
        const paX = idToX.get(childToParentId.get(a.id)) ?? 0
        const pbX = idToX.get(childToParentId.get(b.id)) ?? 0
        if (paX !== pbX) return paX - pbX
        return 0 // preserve data order for same parent
      })
    }
    const totalW = mems.length * (NODE_W + GAP) - GAP
    const startX = -totalW / 2
    mems.forEach((m, mi) => {
      const x = startX + mi * (NODE_W + GAP) + NODE_W/2
      allNodeData.push({ ...m, x, y: gi * ROW_H })
      idToX.set(m.id, x)
    })
  })

  // Build links (handle merged early-death nodes)
  const linkData = []
  const childToParent = buildParentMap()
  for (const [childId, parentIds] of childToParent) {
    if (earlyDeathIds.has(childId)) continue // skip individual early-death, merged node handles it
    for (const pid of parentIds) {
      const pn = allNodeData.find(n => n.id === pid)
      const cn = allNodeData.find(n => n.id === childId)
      if (pn && cn) {
        linkData.push({ parentId: pid, childId, px: pn.x, py: pn.y, cx: cn.x, cy: cn.y })
      }
    }
  }
  // Links for merged early-death nodes
  for (const mn of mergedNodes) {
    const pn = allNodeData.find(n => n.id === mn._parentId)
    const cn = allNodeData.find(n => n.id === mn.id)
    if (pn && cn) {
      linkData.push({ parentId: mn._parentId, childId: mn.id, px: pn.x, py: pn.y, cx: cn.x, cy: cn.y })
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
    .attr('stroke', d => (mainLineage.includes(d.parentId) && mainLineage.includes(d.childId)) ? 'var(--gold-bright)' : 'var(--ink-faint)')
    .attr('stroke-width', d => (mainLineage.includes(d.parentId) && mainLineage.includes(d.childId)) ? 2.5 : 1.2)
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
    .attr('fill', d => {
      if (d._isMergedEarlyDeath) return 'var(--paper-dark)'
      if (d.note === '女') return '#fdf2f8' // light pink for females
      if (mainLineage.includes(d.id)) return 'var(--paper-aged)'
      return 'var(--paper-cream)'
    })
    .attr('stroke', d => d._isMergedEarlyDeath ? 'var(--ink-faint)' : (mainLineage.includes(d.id) ? 'var(--gold-bright)' : 'var(--paper-dark)'))
    .attr('stroke-width', d => mainLineage.includes(d.id) ? 2 : 1)
    .attr('stroke-dasharray', d => d._isMergedEarlyDeath ? '4,2' : null)
    .attr('filter', 'drop-shadow(0 1px 3px rgba(0,0,0,0.06))')
    .attr('opacity', d => d._isMergedEarlyDeath ? 0.6 : 1)

  // Main lineage dot
  nodeGroups.filter(d => mainLineage.includes(d.id))
    .append('circle')
    .attr('cx', NODE_W - 7).attr('cy', 7).attr('r', 3.5)
    .attr('fill', 'var(--gold-bright)')

  // Early death indicator
  nodeGroups.filter(d => d._isMergedEarlyDeath)
    .append('text')
    .attr('x', NODE_W - 10).attr('y', 14)
    .attr('text-anchor', 'middle')
    .attr('font-size', '10px')
    .text('🕯️')

  // "早故" label for merged nodes
  nodeGroups.filter(d => d._isMergedEarlyDeath)
    .append('text')
    .attr('x', NODE_W/2).attr('y', NODE_H - 6)
    .attr('text-anchor', 'middle')
    .attr('font-size', '9px').attr('fill', 'var(--ink-faint)')
    .text('早故')

  // Name text
  nodeGroups.append('text')
    .attr('x', NODE_W/2).attr('y', d => d._isMergedEarlyDeath ? 28 : 24)
    .attr('text-anchor', 'middle')
    .attr('font-family', 'var(--font-kai)')
    .attr('font-size', d => d._isMergedEarlyDeath ? '11px' : '14px')
    .attr('font-weight', '700')
    .attr('fill', d => d._isMergedEarlyDeath ? 'var(--ink-light)' : 'var(--ink-black)')
    .text(d => d._isMergedEarlyDeath ? d.name : '羅' + d.name)

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
