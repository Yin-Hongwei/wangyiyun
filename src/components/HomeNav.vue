<template>
  <div class="home-nav">
    <the-header icon="#icon-tinggeshiqu40x40"/>
    <play-small :showIcon="true"/>
    <the-swiper/>
    <ul class="tags">
      <li v-for="(item, index) in imgList" :key="index">
        <img :src="item.src"/>
      </li>
    </ul>
  </div>
</template>

<script>
import TheHeader from './TheHeader'
import PlaySmall from './PlaySmall'
import TheSwiper from './TheSwiper'

export default {
  name: 'home-nav',
  components: {
    TheHeader,
    PlaySmall,
    TheSwiper
  },
  data () {
    return {
      imgList: [{
        src: require('@/assets/img/IMG_7018_01.jpg'),
        path: ''
      }, {
        src: require('@/assets/img/IMG_7018_02.jpg'),
        path: ''
      }, {
        src: require('@/assets/img/IMG_7018_03.jpg'),
        path: ''
      }, {
        src: require('@/assets/img/IMG_7018_04.jpg'),
        path: ''
      }, {
        src: require('@/assets/img/IMG_7018_05.jpg'),
        path: ''
      }]
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.tags{
  position: relative;
  display: flex;
  flex-wrap: nowrap;
  margin-top:20vw;
  width: 100%;
}

.tags img{
  width: 100%;
}
</style>
