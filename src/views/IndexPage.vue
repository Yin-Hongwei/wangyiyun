<template>
  <div class="index-page">
    <home-nav/>
    <h3 class="title">推荐歌单</h3>
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

    <h3 class="title">最新音乐</h3>
    <div class="body-group line2">
      <div>
        <div class="body-item" v-for="(item,index) in newsong" :key="index">
          <img class="item-img" :src="item.song.album.picUrl"/>
          <p class="item-title">{{ item.name }}</p>
          <span class="item-span">{{item.song.artists[0].name}}</span>
        </div>
      </div>
    </div>
    <the-footer/>
  </div>
</template>

<script>
import axios from 'axios'
import HomeNav from '../components/HomeNav'
import TheFooter from '../components/TheFooter'

export default {
  name: 'index-page',
  components: {
    HomeNav,
    TheFooter
  },
  data () {
    return {
      personalized: [],
      newsong: [],
      dj: []
    }
  },
  mounted: function () {
    this.getRec()
    this.getNewSon()
  },
  methods: {
    // 获取推荐歌单
    getRec: function () {
      let _this = this
      axios.get(_this.$store.state.HOST + '/personalized')
        .then(function (response) {
          console.log('===== 推荐歌单 =====')
          console.log(response.data.result)
          console.log('===================')
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

.body-group > div {
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

.item-img,
.item-span{
  width: 100%;
  border-radius: 5px;
  color: rgb(80, 80, 80)
}

a {
  text-decoration:none;
  color: black;
}
</style>
