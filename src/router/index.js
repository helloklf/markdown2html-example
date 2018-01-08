import Vue from 'vue'
import Router from 'vue-router'
import Markdown from '@/components/Markdown'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/*',
      name: 'Markdown',
      component: Markdown
    }
  ]
})
