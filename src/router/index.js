import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Player from '@/views/Player'
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
      path: '/player',
      component: Player
    },
    {
      path: '/player/:id',
      name: 'player',
      component: Player
    },
    {
      path: '/songlist',
      name: 'songlist',
      component: SongList
    }
  ]
})
