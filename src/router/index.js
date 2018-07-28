import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Player from '@/views/Player'
import SongList from '@/views/SongList'
import Search from '@/views/Search'

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
      path: '/songlist/:id',
      name: 'songlist',
      component: SongList
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    }
  ]
})
