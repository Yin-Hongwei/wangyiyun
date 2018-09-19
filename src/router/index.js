import Vue from 'vue'
import Router from 'vue-router'
import Player from '@/views/Player'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'find',
      component: function (resolve) {
        require(['../views/Find'], resolve)
      }
    },
    {
      path: '/broad',
      name: 'broad',
      component: function (resolve) {
        require(['../views/Broad'], resolve)
      }
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
      component: function (resolve) {
        require(['../views/SongList'], resolve)
      }
    },
    {
      path: '/search',
      name: 'search',
      component: function (resolve) {
        require(['../views/Search'], resolve)
      }
    },
    {
      path: '/videos',
      name: 'videos',
      component: function (resolve) {
        require(['../views/Videos'], resolve)
      }
    },
    {
      path: '/my',
      name: 'my',
      component: function (resolve) {
        require(['../views/My'], resolve)
      }
    },
    {
      path: '/friends',
      name: 'friends',
      component: function (resolve) {
        require(['../views/Friends'], resolve)
      }
    },
    {
      path: '/account',
      name: 'account',
      component: function (resolve) {
        require(['../views/Account'], resolve)
      }
    }
  ]
})
