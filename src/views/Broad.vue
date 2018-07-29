<template>
  <div class="broad">
    <home/>
    <div class="title">精彩节目推荐 ＞</div>
    <div class="body-group">
      <div class="body-item" v-for="(item,index) in recommend" :key="index">
        <!--<router-link :to="{name: 'songlist', params:{id:item.id}}">-->
          <img class="item-img" :src="item.coverUrl"/>
          <span class="item-span">{{item.reason}}</span>
        <!--</router-link>-->
      </div>
    </div>
    <footer-item/>
  </div>
</template>

<script>
import axios from 'axios'
import Home from '../components/home/Home'
import FooterItem from '../components/foot/Footer'
export default {
  name: 'broad',
  data () {
    return {
      recommend: []
    }
  },
  components: {
    Home,
    FooterItem
  },
  mounted: function () {
    this.getBro()
  },
  methods: {
    getBro: function () {
      let _this = this
      axios.get(_this.$store.state.HOST + '/program/recommend')
        .then(function (response) {
          console.log(response.data)
          _this.recommend = response.data.programs
        })
        .catch(function (error) {
          console.log(error)
        })
    },
    // 修改图片链接
    attachImageUrl: function (srcUrl) {
      if (srcUrl !== undefined) {
        return srcUrl.replace(/http\w{0,1}:\/\/p/g, 'https://images.weserv.nl/?url=p')
      }
    }
  }
}
</script>

<style scoped>
.title{
  height:30px;
  margin-left: 3%;
  padding-top: 10px
}
.body-group{
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}
.body-item{
  display: inline-block;
  margin: 5px;
  margin-bottom: 15px;
  height: auto;
  width: 30%;
  vertical-align: top;
}
.item-img,.item-span{
  width: 100%;
}
a {
  text-decoration:none;
  color: black;
}
</style>
