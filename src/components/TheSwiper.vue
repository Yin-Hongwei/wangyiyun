<template>
  <div class="banner">
    <mt-swipe :atuo="4000" class="swiper">
      <mt-swipe-item v-for="(item,index) in banners" :key="index">
        <img :src="item.pic"/>
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'the-swiper',
  data () {
    return {
      banners: []
    }
  },
  mounted: function () {
    this.getBanner()
  },
  methods: {
    getBanner: function () {
      let _this = this
      axios.get(_this.$store.state.HOST + '/banner?type=2')
        .then(function (response) {
          console.log('===== 轮播图 =====')
          console.log(response.data.banners)
          _this.banners = response.data.banners
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  }
}
</script>

<style scoped>
.banner{
  position: relative;
  height: 40vw;
  top: 70px;
  display: flex;
  justify-content: center;
}

.swiper{
  position: absolute;
  height: 40vw;
  width: 92vw;
  border-radius: 8px;
  overflow: hidden;
}

.swiper img{
  width:100%;
  height: 100%;
}
</style>
