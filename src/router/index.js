import Vue from 'vue'
import Router from 'vue-router'
import Player from '@/views/Player'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index-page',
      component: function (resolve) {
        require(['../views/Indexpage'], resolve)
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
      path: '/the-video',
      name: 'the-video',
      component: function (resolve) {
        require(['../views/TheVideo'], resolve)
      }
    },
    {
      path: '/user',
      name: 'user',
      component: function (resolve) {
        require(['../views/user'], resolve)
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
      path: '/the-setting',
      name: 'the-setting',
      component: function (resolve) {
        require(['../views/TheSetting'], resolve)
      }
    }
  ]
})
