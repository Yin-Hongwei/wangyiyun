<template>
  <div class="play-icon" v-show="showIcon">
    <div class="head-icon" @click="getPath('play')" :class="isPlay ? 'circle ' : ''">
      <img :src="picUrl || require('@/assets/img/coverall.png')" alt=""/>
    </div>
  </div>
</template>

<script>
import { mixin } from '../mixins'
import { mapGetters } from 'vuex'

export default {
  name: 'play-icon',
  mixins: [mixin],
  computed: {
    ...mapGetters([
      'picUrl', // 歌曲图片
      'isPlay'
    ])
  },
  props: {
    showIcon: false
  }
}
</script>

<style>
.play-icon .head-icon{
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

.play-icon .head-icon img {
  width: 100%;
}

.circle {
  animation:rotate 16s linear infinite 0.1s;
}
@-webkit-keyframes rotate{
  0%{
    transform: rotate(0)
  }
  50%{
    transform: rotate(180deg)
  }
  100%{
    transform: rotate(360deg)
  }
}
</style>
