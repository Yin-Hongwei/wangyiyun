<template>
  <div class="the-header">
    <!--听歌识曲，搜索，播放-->
    <div class="head-icon">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-tinggeshiqu40x40"></use>
      </svg>
    </div>
    <!--搜索框-->
    <div class="search" >
      <input type="text" :placeholder="placeholder" @click="getPath('search')"/>
      <div class="head-search">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-fangdajing"></use>
        </svg>
      </div>
    </div>
    <!--播放界面-->
    <div class="head-icon" @click="getPath('play')">
      <!-- <img :src="picUrl ? picUrl : '@/assets/img/coverall.png'" alt=""/> -->
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { mixin } from '../mixins'

export default {
  name: 'the-header',
  ...mapGetters([
    'picUrl' // 歌曲图片
  ]),
  mixins: [mixin],
  data () {
    return {
      placeholder: ''
    }
  },
  mounted () {
    this.getShowKeyword()
  },
  methods: {
    getPath (path) {
      switch (path) {
        case 'search':
          this.$router.push({path: '/search'})
          break
        case 'play':
          this.$router.push({path: '/player'})
          break
      }
    }
  }
}
</script>

<style scoped>
.the-header{
  background-color: #ffffff;
  width: 100%;
  height: 55px;
  position: fixed;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.head-icon{
  margin-top: 10px;
  width: 40px;
  text-align: center;
}
.head-icon img {
  width: 100%;
}
/*搜索框*/
.search{
  flex-grow: 1;
  margin-top: 10px;
  position: relative;
}
.search > input{
  height: 30px;
  width: 100%;
  border-radius: 25px;
  border: 0;
  background-color:rgba(225, 225, 225,0.4);
  text-indent:40px;
}
::-webkit-input-placeholder { /* WebKit, Blink, Edge */
  color: rgba(150, 150, 150, 1);
}
.head-search{
  position: absolute;
  top: 6px;
  left:17px;
}
.head-search .icon {
  color: rgb(33, 33, 33);
  font-size: 1.2em;
  opacity: 0.6;
}
</style>
