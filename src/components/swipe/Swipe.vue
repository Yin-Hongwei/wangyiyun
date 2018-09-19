<template>
  <div class="swipe-pic">
    <div class="banner">
      <mt-swipe :atuo="4000" class="swipe">
        <mt-swipe-item v-for="(item,index) in banners" :key="index">
          <img :src="item.picUrl"/>
        </mt-swipe-item>
      </mt-swipe>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'swipe-pic',
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
      axios.get(_this.$store.state.HOST + '/banner')
        .then(function (response) {
          console.log('轮播图--->')
          console.log(response.data.banners)
          // API 轮播图没有啦
          _this.banners = response.data.banners
        })
        .catch(function (error) {
          console.log(error)
        })
    },
    attachImageUrl: function (srcUrl) {
      if (srcUrl !== undefined) {
        return srcUrl.replace(/http\w{0,1}:\/\/p/g, 'https://images.weserv.nl/?url=p')
      }
    }
  }
}
</script>

<style scoped>
.banner{
  position: relative;
  top: -100px;
  padding: 0 2%;
}
.swipe{
  position: absolute;
  height: 42vw;
  width:96%;
  margin: 0 auto;
  border-radius: 8px;
  overflow: hidden;
}
.swipe img{
  width:100%;
}
</style>
