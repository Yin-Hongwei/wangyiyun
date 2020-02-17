<template>
  <div class="home-nav">
    <the-header/>
    <the-swiper/>
    <div class="tags">
      <img src="../assets/img/IMG_4224_01.jpg"/>
      <img src="../assets/img/IMG_4224_02.jpg"/>
      <img src="../assets/img/IMG_4224_03.jpg"/>
      <img src="../assets/img/IMG_4224_04.jpg"/>
    </div>
  </div>
</template>

<script>
import TheHeader from './TheHeader'
import TheSwiper from './TheSwiper'

export default {
  name: 'home-nav',
  components: {
    TheHeader,
    TheSwiper
  },
  data () {
    return {}
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.tags{
  position: relative;
  margin-top:20vw;
  width: 100%;
  overflow: hidden;
}

.tags > img{
  width: 25%;
  float: left;
}
</style>
