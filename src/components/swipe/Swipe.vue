<template>
  <div class="swipe-pic">
    <div class="banner">
      <mt-swipe :atuo="4000" class="swipe" :show-indicators="false">
        <mt-swipe-item v-for="(item,index) in banners" :key="index">
          <img :src="item.pic"/>
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
          // console.log(response.data.banners)
          _this.banners = response.data.banners
          // console.log(_this.banners[0])
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
}
.swipe{
  position: absolute;
  height: 150px;
  width:98%;
  margin: 0 1%;
}
.swipe img{
  border-radius: 8px;
  width:100%;
}
</style>
