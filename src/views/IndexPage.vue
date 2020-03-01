<template>
  <div class="index-page">
    <the-header icon="#icon-tinggeshiqu40x40" :show="true" backgroundColor="#ffffff"></the-header>
    <the-swiper></the-swiper>
    <!-- <the-icon :iconList="iconList" class="icon-list"></the-icon> -->
    <ul class="tags">
      <li v-for="(item, index) in imgList" :key="index">
        <img :src="item.src"/>
      </li>
    </ul>
    <div class="body-content">
      <h3 class="title">推荐歌单</h3>
      <ul class="body-group">
        <li class="body-item" v-for="(item,index) in personalized" :key="index">
          <router-link :to="{name: 'songlist', params:{id:item.id}}">
            <img class="item-img" :src="item.picUrl"/>
            <span class="item-span">{{item.name}}</span>
          </router-link>
        </li>
      </ul>
      <h3 class="title">最新音乐</h3>
      <ul class="body-group line2">
        <li class="body-item" v-for="(item,index) in newsong" :key="index">
          <img class="item-img" :src="item.song.album.picUrl"/>
          <p class="item-title">{{ item.name }}</p>
          <span class="item-span">{{item.song.artists[0].name}}</span>
        </li>
      </ul>
    </div>
    <the-footer/>
  </div>
</template>

<script>
import axios from 'axios'
import TheHeader from '../components/TheHeader'
import TheSwiper from '../components/TheSwiper'
import TheIcon from '../components/TheIcon'
import TheFooter from '../components/TheFooter'

export default {
  name: 'index-page',
  components: {
    TheHeader,
    TheSwiper,
    TheIcon,
    TheFooter
  },
  data () {
    return {
      personalized: [],
      newsong: [],
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
      }],
      iconList: [{
        icon: '#icon-rili-cuxiantiao-fill',
        text: '每日推荐'
      }, {
        icon: '#icon-gedan',
        text: '歌单'
      }, {
        icon: '#icon-paihangbang',
        text: '排行榜'
      }, {
        icon: '#icon-diantai',
        text: '电台'
      }, {
        icon: '#icon-shipinzhibo',
        text: '直播'
      }]
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
.icon-list {
  position: relative;
  margin-top:20vw;
}

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

.title {
  height: 40px;
  line-height: 40px;
  margin-left: 3vw;
}

.body-content {
  width: 100%;
  margin: auto;
}

.body-group {
  width: 100%;
  padding: 0 10px;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.body-item{
  width: 30%;
  display: inline-block;
  margin-bottom: 15px;
  height: auto;
  flex: 0 0 30%;
  font-size: 14px;
}

.item-span {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

.line2 .item-span {
  font-size: 12px;
  color: rgba(0, 0 ,0 ,0.5);
}

.line2 .body-item {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}

.item-img,
.item-span{
  width: 100%;
  border-radius: 5px;
  color: rgb(80, 80, 80)
}

a {
  text-decoration: none;
  color: black;
}
</style>
