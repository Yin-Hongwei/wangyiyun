import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Playing from '@/views/Playing'
import SongList from '@/views/SongList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/playing/:id',
      name: 'playing',
      component: Playing
    },
    {
      path: '/songlist/',
      name: 'songlist',
      component: SongList
    }
  ]
})
