import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Player from '@/views/Player'
import SongList from '@/views/SongList'
import Search from '@/views/Search'
import Videos from '@/views/Videos'
import My from '@/views/My'
import Friends from '@/views/Friends'
import Account from '@/views/Account'

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
    },
    {
      path: '/videos',
      name: 'videos',
      component: Videos
    },
    {
      path: '/my',
      name: 'my',
      component: My
    },
    {
      path: '/friends',
      name: 'friends',
      component: Friends
    },
    {
      path: '/account',
      name: 'account',
      component: Account
    }
  ]
})
