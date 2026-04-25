import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', name: 'Home', component: () => import('@/views/HomeView.vue') },
  { path: '/tree', name: 'Tree', component: () => import('@/views/TreeView.vue') },
  { path: '/person/:id', name: 'Person', component: () => import('@/views/PersonView.vue') },
  { path: '/migration', name: 'Migration', component: () => import('@/views/MigrationView.vue') },
  { path: '/lineage', name: 'Lineage', component: () => import('@/views/LineageView.vue') },
  { path: '/generation/:gen', name: 'Generation', component: () => import('@/views/GenerationView.vue') },
  { path: '/card', name: 'Card', component: () => import('@/views/CardView.vue') },
  { path: '/timeline', name: 'Timeline', component: () => import('@/views/TimelineView.vue') },
  { path: '/quiz', name: 'Quiz', component: () => import('@/views/QuizView.vue') },
  { path: '/book', name: 'Book', component: () => import('@/views/BookView.vue') },
]

export default createRouter({
  history: createWebHistory(),
  routes,
})
