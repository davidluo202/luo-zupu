import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', name: 'Home', component: () => import('@/views/HomeView.vue') },
  { path: '/tree', name: 'Tree', component: () => import('@/views/TreeView.vue') },
  { path: '/person/:id', name: 'Person', component: () => import('@/views/PersonView.vue') },
  { path: '/migration', name: 'Migration', component: () => import('@/views/MigrationView.vue') },
  { path: '/lineage', name: 'Lineage', component: () => import('@/views/LineageView.vue') },
]

export default createRouter({
  history: createWebHistory(),
  routes,
})
