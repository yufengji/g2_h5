import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index/index'
import Game from '@/components/game/game'
import News from '@/components/news/news'
import NewsDetail from '@/components/news-detail/news-detail'
import Gift from '@/components/gift/gift'
import Login from '@/components/login/login'
import Register from '@/components/register/register'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Index
    },
    {
      path: '/index',
      component: Index
    },
    {
      path:'/game',
      component:Game
    },
    {
      path:'/news',
      component:News
    },
    {
      path:'/news/:id',
      component:NewsDetail
    },
    {
      path:'/gift',
      component:Gift
    },
    {
      path:'/login',
      component:Login
    },
    {
      path:'/register',
      component:Register
    }
  ]
})
