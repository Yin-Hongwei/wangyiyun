<template>
  <div class="song-list">
    <div class="bac-bur" :style="{backgroundImage: 'url(' + coverImgUrl + ')' }"></div>
    <div class="song-head">
      <!--返回-->
      <router-link :to="{name: 'find'}">
        <div class="back">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-fanhui01"></use>
          </svg>
        </div>
      </router-link>
      <div class="song-title">歌单</div>
      <div class="san-dian">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-unie6c7"></use>
          </svg>
      </div>
      <router-link :to="{path: '/player/' + id}">
        <div class="song-item4">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-p7zhengzaibofangzhong"></use>
          </svg>
        </div>
        </router-link>
    </div>
    <div class="bu-kong" :style="{backgroundImage: 'url(' + coverImgUrl + ')' }"></div>
    <!--搜索框-->
    <div class="song-search">
      <input type="text" placeholder="搜索歌单内歌曲"/>
    </div>
    <!--歌单信息-->
    <div class="song-box">
      <div class="song-dic">
        <!--左侧图片-->
        <div class="dic-l">
          <img :src="coverImgUrl" alt="">
        </div>
        <!--右侧信息-->
        <div class="dic-r">
          <div class="song-name">
            {{name}}
          </div>
          <div class="song-author">
            <img class='author-pic' :src="avatarUrl" alt="">
            <span class="author-name">{{ nickname }}</span>
          </div>
        </div>
      </div>
      <div class="song-opt">
        <!--评论-->
        <div>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-pinglunguanli"></use>
          </svg>
        </div>
        <!--分享-->
        <div>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-zhuanfa"></use>
          </svg>
        </div>
        <!--下载-->
        <div>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-xiazai"></use>
          </svg>
        </div>
        <!--多选-->
        <div>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-duoxuankuang"></use>
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
    <!--歌单列表的头-->
    <div id="item-top">
      <div class="item-l">
        <!--播放-->
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
        <!--序号-->
        <div class="line-l">{{index + 1}}</div>
        <!--歌曲-->
        <div class="line-m">
          <span>{{item.name}}</span>
          <p>{{item.ar[0].name}} - {{item.al.name}}</p>
        </div>
        <!--三个点-->
        <div class="line-r">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-unie6c7"></use>
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
import { Indicator } from 'mint-ui'
import Find from '../components/foot/Footer'
export default {
  name: 'song-list',
  components: {
    Find
  },
  data () {
    return {
      coverImgUrl: null, // 左侧图片 / 背景图片
      name: '', // 歌单名称
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
  beforeRouteEnter (to, form, next) {
    next(function (vm) {
      window.onscroll = function () {
        let rHead = document.getElementById('item-top')
        if (vm.scrollTop() >= 250) {
          rHead.style.position = 'fixed'
          rHead.style.top = 60 + 'px'
        } else {
          rHead.style.position = 'static'
        }
      }
    })
  },
  beforeRouteLeave (to, from, next) {
    window.onscroll = null
    next()
  },
  mounted: function () {
    this.getRec()
  },
  methods: {
    // 获得滚动高度
    scrollTop () {
      return Math.max(document.body.scrollTop, document.documentElement.scrollTop)
      // chrome                                 // firefox/IE
    },
    // 获取推荐歌单
    getRec: function () {
      let _this = this
      Indicator.open({
        text: '加载中...',
        spinnerType: 'fading-circle'
      })
      axios.get(_this.$store.state.HOST + '/playlist/detail', {
        params: {
          id: _this.$route.params.id
        }
      })
        .then(function (res) {
          console.log('<--- 一个歌的信息 --->')
          console.log(res.data.playlist.tracks)
          _this.coverImgUrl = res.data.playlist.coverImgUrl
          _this.name = res.data.playlist.name
          _this.avatarUrl = res.data.playlist.creator.avatarUrl
          _this.nickname = res.data.playlist.creator.nickname
          _this.commentCount = res.data.playlist.commentCount
          _this.shareCount = res.data.playlist.shareCount
          _this.playnum = res.data.playlist.trackCount
          _this.collect = res.data.playlist.subscribedCount
          _this.songslist = res.data.playlist.tracks
          Indicator.close()
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
.bu-kong {
  position: fixed;
  height:60px;
  width: 100%;
  overflow: hidden;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-position: center top;
  background-size: 100%;
  background-attachment: fixed;
  filter: blur(10px);
  z-index: 1;
}
.song-head {
  position: fixed;
  height:50px;
  width: 100%;
  display: flex;
  align-items: center;
  text-align: center;
  z-index: 2;
}
.song-head .song-title {
  flex-grow: 1;
  color: white;
  font-size: 1.3em;
  padding-left: 10%;
}
.song-head div{
  width: 50px;
}
.song-head .icon {
  font-size: 2em;
}
.song-head .song-item4 .icon {
  font-size: 1.4em;
  color: white
}
  /*-----------------搜索框-----------------------*/
.song-search {
  padding-top: 60px;
  text-align: center;
}
.song-search>input {
  width: 90%;
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
.song-box .song-opt,
.song-box .opt-detail {
  display: flex;
  width: 100%;
  flex-grow: 1;
  justify-content: center;
}
.song-box .song-opt {
  margin-top: 10px;
}
.song-box .opt-detail {
  margin-bottom: 10px;
}
.song-box .song-opt>div,
.song-box .opt-detail>div {
  width: 25%;
  text-align: center;
  color: white;
}
.song-box .song-opt .icon {
  color: white;
  fill: currentColor;
  overflow: hidden;
}
.song-box .opt-detail>div {
  font-size: 0.8em;
}
/*------------------白红框框----------------------*/
#item-top {
  display: flex;
  width: 100%;
  z-index: 10;
}
#item-top .item-l,
#item-top .item-r {
  line-height: 60px;
  vertical-align: middle;
  height: 60px;
}
#item-top .item-l {
  width: 60%;
  background-color: #fcfdfe;
  border-radius: 20px 0 0 0;
}
#item-top .item-l>div {
  display: inline-block;
  width: 30px;
  height: 49px;
  margin-left: 15px;
  vertical-align:middle;
}
#item-top .item-l .icon {
  color: black;
}
#item-top .item-r {
  width: 40%;
  background-color: #d7463f;
  color: white;
  border-radius: 0 20px 0 0;
  text-align:center;
}
.item-top-wire {
  height: 1px;
  right: 0;
  left: 0;
  margin-left: 45px;
  background-color: #e3e4e5;
  position: absolute;
}
/*--------------------歌曲列表--------------------------*/
.song-list-dic {
  width: 100%;
  position: relative;
}
.song-list-dic .song-item {
  height: 60px;
  width: 100%;
  background-color: white;
  display: flex;
  flex-wrap: nowrap;
  flex-grow: 1;
  justify-content: space-between;
}
.song-list-dic .song-item .line-l,
.song-list-dic .song-item .line-r {
  width: 60px;
  text-align: center;
  color: #a1a2a2;
  line-height: 60px;
}
.song-list-dic .song-item .line-m {
  width: 80%;
  overflow: hidden;
  font-size: 1.1em;
  padding-top: 10px;
  white-space: nowrap;
}
.song-list-dic .song-item .line-m p {
  font-size: 0.8em;
  color: #959696;
}
.song-list-dic .song-item .icon {
  color: #a1a2a2;
}
</style>
