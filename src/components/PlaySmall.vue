<template>
  <div class="play-small" v-show="showIcon">
    <!--播放界面-->
    <div class="head-icon" @click="getPath('play')">
      <img :src="url" alt=""/>
    </div>
  </div>
</template>

<script>
import { mixin } from '../mixins'
import { mapGetters } from 'vuex'

export default {
  name: 'play-small',
  mixins: [mixin],
  ...mapGetters([
    'picUrl' // 歌曲图片
  ]),
  props: {
    showIcon: false
  },
  data () {
    return {
      url: require('@/assets/img/lin.jpeg'),
      show: false
    }
  }
  // mounted () {
  //   if (!this.picUrl) {
  //     this.$store.commit('setPicUrl', require('@/assets/img/lin.jpeg'))
  //     window.sessionStorage.setItem('picUrl', JSON.stringify(require('@/assets/img/lin.jpeg')))
  //   }
  // }
}
</script>

<style>
.play-small .head-icon{
  position: fixed;
  z-index: 200;
  right: 10px;
  top: 15px;
  width: 25px;
  height: 25px;
  border-radius: 100px;
  overflow: hidden;
  text-align: center;
}

.play-small .head-icon img {
  width: 100%;
}
</style>
