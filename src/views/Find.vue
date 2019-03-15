<template>
  <div class="find">
    <home/>
    <h3 class="title">推荐歌单 ＞</h3>
    <div class="body-group">
      <div>
        <div class="body-item" v-for="(item,index) in personalized" :key="index">
          <router-link :to="{name: 'songlist', params:{id:item.id}}">
            <img class="item-img" :src="item.picUrl"/>
            <span class="item-span">{{item.name}}</span>
          </router-link>
        </div>
      </div>
    </div>

    <h3 class="title">最新音乐 ＞</h3>
    <div class="body-group line2">
      <div>
        <div class="body-item" v-for="(item,index) in newsong" :key="index">
          <img class="item-img" :src="item.song.album.picUrl"/>
          <p class="item-title">{{ item.name }}</p>
          <span class="item-span">{{item.song.artists[0].name}}</span>
        </div>
      </div>
    </div>

    <h3 class="title">主播电台 ＞</h3>
    <div class="body-group">
      <div>
        <div class="body-item" v-for="(item,index) in dj" :key="index">
          <img class="item-img" :src="item.picUrl"/>
          <span class="item-span">{{item.rcmdtext}}</span>
        </div>
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
          console.log(response.data.result)
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
    }
  }
}
</script>

<style scoped>
.title{
  height:40px;
  line-height: 40px;
  margin-left: 3%;
}
.body-group{
  width: 100%;
  display: flex;
  justify-content: center;
}
.body-group>div {
  width: 96%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.body-item{
  display: inline-block;
  margin: 0 5px 5px 5px;
  margin-bottom: 15px;
  height: auto;
  flex: 0 0 30%;
  font-size: 14px;
}
.item-span {
  overflow:hidden;
  text-overflow:ellipsis;
  display:-webkit-box;
  -webkit-box-orient:vertical;
  -webkit-line-clamp:2;
}
.line2 .item-span {
  font-size: 12px;
  color: rgba(0, 0 ,0 ,0.5);
}
.line2 .body-item {
  white-space: nowrap;
  text-overflow:ellipsis;
  overflow: hidden;
}
.item-img,.item-span{
  width: 100%;
}
a {
  text-decoration:none;
  color: black;
}
</style>
