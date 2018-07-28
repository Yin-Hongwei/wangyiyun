<template>
  <div class="song-list">
    <div class="bac-bur" :style="{backgroundImage: 'url(' + coverImgUrl + ')' }"></div>
    <div class="song-head">
      <router-link :to="{name: 'home'}">
        <div class="back">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-fanhui"></use>
          </svg>
        </div>
      </router-link>
        <div class="song-title">歌单</div>
        <div class="san-dian">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-unie644"></use>
          </svg>
      </div>
      <router-link :to="{path: '/player/'}">
        <div class="forwarding">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-p7zhengzaibofangzhong"></use>
          </svg>
        </div>
      </router-link>
      </div>
    <!--<div class="bu-kong" :style="{backgroundImage: 'url(' + coverImgUrl + ')' }"></div>-->
    <div class="song-search">
      <input type="text" placeholder="搜索歌单内歌曲"/>
    </div>
    <div class="song-box">
      <div class="song-dic">
        <div class="dic-l">
          <img :src="coverImgUrl" alt="">
        </div>
        <div class="dic-r">
          <div class="song-name">
            {{name}}
          </div>
          <div class="song-author">
            <img class='author-pic' :src="avatarUrl" alt="">
            <span class="author-name">{{ nickname }} ></span>
          </div>
        </div>
      </div>
      <div class="song-opt">
        <div>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-pinglun"></use>
          </svg>
        </div>
        <div>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-zhuanfa"></use>
          </svg>
        </div>
        <div>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-xiazai"></use>
          </svg>
        </div>
        <div>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-shoucang"></use>
          </svg>
        </div>
      </div>
      <div class="opt-detail">
        <div>{{commentCount}}</div>
        <div>{{shareCount}}</div>
        <div>下载</div>
        <div>多选</div>
      </div>
    </div>
    <div id="item-top">
      <div class="item-l">
        <div>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-bofang"></use>
          </svg>
        </div>
        播放全部(共{{playnum - 1}}首)
      </div>
      <div class="item-r">+收藏({{collect}})</div>
    </div>
    <div class="item-top-wire"></div>
    <div class="song-list-dic">
      <div class="song-item" v-for="(item,index) in songslist" :key="index" @click="toplay(item.id, index)" >
        <div class="line-l">{{index + 1}}</div>
        <div class="line-m">
          <span>{{item.name}}</span>
          <p>{{item.ar[0].name}} - {{item.al.name}}</p>
        </div>
        <div class="line-r">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-unie644"></use>
          </svg>
        </div>
        <div class="item-top-wire"></div>
      </div>
    </div>
    <find/>
  </div>
</template>
<script>
import axios from 'axios'
import { mapGetters } from 'vuex'
import Find from '../components/foot/Footer'
export default {
  name: 'song-list',
  components: {
    Find
  },
  data () {
    return {
      coverImgUrl: null, // 图片
      name: '', // 标题
      avatarUrl: null, // 作者头像
      nickname: '', // 作者昵称
      commentCount: 0, // 评论数
      shareCount: 0, // 转发数
      playnum: '0', // 歌曲数量
      collect: '0', // 收藏数
      songslist: [] // 歌曲
    }
  },
  computed: {
    ...mapGetters([
      'songsList',
      'id'
    ])
  },
  mounted: function () {
    this.getRec()
    window.onscroll = function () {
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      var p
      var t
      if (scrollTop > 270) {
        p = 'fixed'
        t = '60px'
      } else {
        p = 'relative'
        t = '0px'
      }
      document.getElementById('item-top').style.position = p
      document.getElementById('item-top').style.top = t
    }
  },
  methods: {
    // 获取推荐歌单
    getRec: function () {
      let _this = this
      axios.get(_this.$store.state.HOST + '/playlist/detail', {
        params: {
          id: _this.$route.params.id
        }
      })
        .then(function (res) {
          console.log(res.data)
          _this.coverImgUrl = res.data.playlist.coverImgUrl
          _this.name = res.data.playlist.name
          _this.avatarUrl = res.data.playlist.creator.avatarUrl
          _this.nickname = res.data.playlist.creator.nickname
          _this.commentCount = res.data.playlist.commentCount
          _this.shareCount = res.data.playlist.shareCount
          _this.playnum = res.data.playlist.trackCount
          _this.collect = res.data.playlist.subscribedCount
          _this.songslist = res.data.playlist.tracks
          // console.log(res.data.songslist.tracks)
        })
        .catch(function (error) {
          console.log(error)
        })
    },
    toplay: function (id, index) {
      this.$store.commit('setSongsList', this.songslist)
      this.$store.commit('setListIndex', index)
      this.$router.push({path: '/player/' + id})
    }
  }
}
</script>

<style scoped>
/*--------------背景-----------------*/
.song-list {
  width: 100%;
  height: 100%;
  z-index: -100;
}
.bac-bur {
  position: fixed;
  overflow: hidden;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  height: 300px;
  background-position: center top;
  background-size: 100%;
  background-attachment: fixed;
  filter: blur(30px);
}
/*--------------header------------------*/
/*.bu-kong {*/
  /*position: fixed;*/
  /*height:60px;*/
  /*width: 100%;*/
/*}*/
.song-head {
  position: fixed;
  height:60px;
  width: 100%;
  display: flex;
  align-items: center;
  text-align: center;
  z-index: 10;
  background-color: #d7463f;
}
.song-head>.song-title {
  flex-grow: 1;
  color: white;
  font-size: 1.3em;
}
.song-head .back,
.song-head .forwarding {
  width: 50px;
}
.song-head .icon {
  font-size: 2em;
}
/*-----------------搜索框-----------------------*/
.song-search {
  padding-top: 70px;
  display: flex;
  justify-content: center;
  height: 40px;
}
.song-search>input {
  width: 95%;
  height: 24px;
  border: 0;
  border-radius: 25px;
  text-align: center;
  background-color: rgba(225, 225, 225,0.4);
}
::-webkit-input-placeholder { /* WebKit, Blink, Edge */
  color: rgba(255,255,255,0.7);
}
/*-----------------歌单信息显示区-----------------------*/
.song-box {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
}
.song-dic {
  display: flex;
  flex-wrap: nowrap;
  flex-grow: 1;
  min-height: 150px;
  width: 100%;
  align-items: center;
  color: white;
  padding: 0 5%;
}
.song-dic>.dic-l {
  display: flex;
  justify-content: center;
  width: 40%;
}
.song-dic>.dic-l>img {
  height: 110px;
}
.song-dic>.dic-r {
  height: 110px;
}
.song-dic>.dic-r .song-name {
  margin-top: 5px;
  padding: 0 10%;
}
.song-dic>.dic-r .song-author {
  padding-left: 20px;
  display: flex;
  align-items: center;
  margin-top: 20px;
}
.song-dic>.dic-r .song-author img {
  width: 25px;
  border-radius: 25px;
}
.song-dic>.dic-r .song-author span {
  color: #dbd6d2;
  font-size: 0.9em;
}
/*---------------------评论，分享，下载，多选------------------------------*/
.song-box>.song-opt,
.song-box>.opt-detail {
  display: flex;
  width: 100%;
  flex-grow: 1;
  justify-content: center;
}
.song-box>.song-opt {
  margin-top: 10px;
}
.song-box>.opt-detail {
  margin-bottom: 10px;
}
.song-box>.song-opt>div,
.song-box>.opt-detail>div {
  width: 25%;
  text-align: center;
  color: white;
}
.song-box>.opt-detail>div {
  font-size: 0.8em;
}
/*------------------白红框框----------------------*/
#item-top {
  display: flex;
  position: relative;
  width: 100%;
  z-index: 100;
}
#item-top>.item-l,
#item-top>.item-r {
  line-height: 60px;
  vertical-align: middle;
  height: 60px;
}
#item-top>.item-l {
  width: 60%;
  background-color: #fcfdfe;
  border-radius: 20px 0px 0px 0px;
}
#item-top>.item-l>div {
  display: inline-block;
  width: 30px;
  height: 49px;
  margin-left: 15px;
  vertical-align:middle;
}
#item-top>.item-l .icon {
  color: black;
}
#item-top>.item-r {
  width: 40%;
  background-color: #d7463f;
  color: white;
  border-radius: 0px 20px 0px 0px;
  text-align:center;
}
.item-top-wire {
  height: 1px;
  width: 88%;
  margin-left: 45px;
  margin-right: 0px;
  background-color: #e3e4e5;
  position: absolute;
}
/*--------------------歌曲列表--------------------------*/
.song-list-dic {
  height: 800px;
  width: 100%;
}
.song-list-dic .song-item {
  height: 60px;
  width: 100%;
  background-color: white;
  display: flex;
  flex-wrap: nowrap;
  flex-grow: 1;
}
.song-list-dic .song-item .line-l,
.song-list-dic .song-item .line-r {
  width: 60px;
  text-align: center;
  color: #a1a2a2;
  line-height: 60px;
}
.song-list-dic .song-item .line-m {
  width: 90%;
  overflow: hidden;
  font-size: 1.1em;
  padding-top: 10px;
}
.song-list-dic .song-item .line-m p {
  font-size: 0.8em;
  color: #959696;
}
.song-list-dic .song-item .icon {
  color: #a1a2a2;
}
/*-----------共性----------*/
.icon {
  width: 1em;
  height: 1em;
  fill: currentColor;
  color: white;
  font-size: 1.6em;
}

</style>
