<template>
  <div class="find">
    <home/>
    <div class="title">推荐歌单 ＞</div>
    <div class="body-group">
      <div class="body-item" v-for="(item,index) in personalized" :key="index">
        <router-link :to="{name: 'songlist', params:{id:item.id}}">
          <img class="item-img" :src="attachImageUrl(item.picUrl)"/>
          <span class="item-span">{{item.name}}</span>
        </router-link>
      </div>
    </div>

    <div class="title">最新音乐 ＞</div>
    <div class="body-group">
      <div class="body-item" v-for="(item,index) in newsong" :key="index">
        <!--<router-link :to="{name: 'songlist'}">-->
        <img class="item-img" :src="item.song.album.picUrl"/>
        <!--</router-link>-->
        <p class="item-title">{{ item.name }}</p>
        <span class="item-span">{{item.song.artists[0].name}}</span>
      </div>
    </div>

    <div class="title">主播电台 ＞</div>
    <div class="body-group">
      <div class="body-item" v-for="(item,index) in dj" :key="index">
        <!--<router-link :to="{name: 'songlist'}">-->
        <img class="item-img" :src="item.picUrl"/>
        <!--</router-link>-->
        <span class="item-span">{{item.rcmdtext}}</span>
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
  name: 'find',
  data () {
    return {
      personalized: [],
      newsong: [],
      dj: []
    }
  },
  components: {
    Home,
    FooterItem
  },
  mounted: function () {
    this.getRec()
    this.getNewSon()
    this.getSta()
  },
  methods: {
    // 获取推荐歌单
    getRec: function () {
      let _this = this
      axios.get(_this.$store.state.HOST + '/personalized')
        .then(function (response) {
          // console.log(response.data.result)
          _this.personalized = response.data.result
        })
        .catch(function (error) {
          console.log(error)
        })
    },
    // 获取最新音乐
    getNewSon: function () {
      let _this = this
      axios.get(_this.$store.state.HOST + '/personalized/newsong')
        .then(function (response) {
          // console.log(response.data.result)
          _this.newsong = response.data.result
        })
        .catch(function (error) {
          console.log(error)
        })
    },
    // 获取主播电台
    getSta: function () {
      let _this = this
      axios.get(_this.$store.state.HOST + '/dj/recommend')
        .then(function (response) {
          // console.log(response.data)
          _this.dj = response.data.djRadios
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
  /*justify-content: center;*/
}
.body-item{
  display: inline-block;
  margin: 5px;
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
