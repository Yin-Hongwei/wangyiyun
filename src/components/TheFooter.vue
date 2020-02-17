<template>
  <div class="the-footer">
    <div class="kong"></div>
    <ul class="item-page">
      <li v-for="(item, index) in nameList" :key="index" :class="{'avtive-page': item.name === activePage}" @click="goPage(item)">
        <span>
          <svg class="icon" aria-hidden="true">
            <use :xlink:href="item.pic"></use>
          </svg>
        </span>
        <span>{{item.name}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'the-footer',
  computed: {
    ...mapGetters([
      'activePage'
    ])
  },
  data () {
    return {
      nameList: [{
        name: '发现',
        pic: '#icon-wangyiyunyinle',
        path: '/'
      }, {
        name: '视频',
        pic: '#icon-shiping',
        path: 'the-video'
      }, {
        name: '我的',
        pic: '#icon-yinyue',
        path: 'user'
      }, {
        name: '云村',
        pic: '#icon-pengyou',
        path: 'friends'
      }, {
        name: '账号',
        pic: '#icon-zhanghaoguanli',
        path: 'the-setting'
      }]
    }
  },
  methods: {
    goPage (val) {
      this.$store.commit('SetActivePage', val.name)
      this.$router.push({path: val.path})
    }
  }
}
</script>

<style scoped>
.kong {
  width: 100%;
  height: 60px;
}
.item-page{
  position: fixed;
  width: 100%;
  height: 60px;
  bottom: 0;
  z-index: 100px;
  display: flex;
  justify-content: center;
  background-color: #eceae8;
  align-items: center;
}

.item-page li{
  width: 20%;
  height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 8px;
}

.avtive-page {
  color: #d73e39 !important;
}

.icon {
  width: 1em;
  height: 1em;
  fill: currentColor;
  font-size: 16pt;
}
</style>
