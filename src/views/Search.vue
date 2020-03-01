<template>
  <div class="search">
    <div class="search-head">
      <input type="text" :placeholder="placeholder" v-model="keywords" @keyup.enter="search"/>
      <div class="search-cancel" @click="goback(-1)">取消</div>
      <div class="head-search">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-fangdajing"></use>
        </svg>
      </div>
    </div>
    <div class="hot-content" v-if="!isSearch">
      <h4 class="hot">热搜榜</h4>
      <ul class="hot-list">
        <li v-for="(item, index) in searchList" :key="index" @click="toplay(item.url, index)" >
          <div class="song-index"> {{index + 1}} </div>
          <div class="song-info">
            <div class="song-title">
              <span class="song-name">{{item.searchWord}}</span>
              <span class="song-icon"><img :src="item.iconUrl" alt=""></span>
            </div>
            <div class="song-introduce">{{item.content}}</div>
          </div>
        </li>
      </ul>
    </div>
    <div class="search-content" v-if="isSearch">
      <ul>
        <li v-for="(item, index) in songs" :key="index" @click="toplay(item.id, index)" >
          <span>{{item.name}}</span>
          <span>{{item.artists[0].name}} - {{item.album.name}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { mixin } from '../mixins'

export default {
  name: 'search',
  mixins: [mixin],
  data () {
    return {
      keywords: '',
      placeholder: '',
      searchList: [],
      isSearch: false,
      songs: []
    }
  },
  mounted () {
    this.getShowKeyword()
    this.getSearchList()
  },
  methods: {
    search () {
      this.getSearch()
    },
    getSearchList () {
      let _this = this
      axios.get(_this.$store.state.HOST + '/search/hot/detail')
        .then(function (res) {
          _this.searchList = res.data.data
          console.log('=====搜索====')
          console.log(_this.searchList)
        })
        .catch(function (error) {
          console.log(error)
        })
    },
    getSearch () {
      let _this = this
      axios.get(_this.$store.state.HOST + '/search?keywords=' + _this.keywords)
        .then(function (res) {
          _this.songs = res.data.result.songs
          _this.isSearch = true
        })
        .catch(function (error) {
          console.log(error)
        })
    },
    toplay (id, index) {
      this.$store.commit('setSongsList', this.songs)
      this.$store.commit('setListIndex', index)
      this.$router.push({path: '/player/' + id})
    },
    goback (index) {
      this.$router.go(index)
    }
  }
}
</script>

<style scoped>
* {
  box-sizing: border-box;
}
.search-head {
  position: fixed;
  z-index: 100;
  height: 55px;
  width: 100%;
  display: flex;
  align-items: center;
  background-color: #ffffff;
}

.search-head input {
  height: 30px;
  flex-grow: 1;
  border-radius: 25px;
  border: 0;
  margin-left: 15px;
  background-color:rgba(225, 225, 225,0.4);
  text-indent:30px;
}

::-webkit-input-placeholder { /* WebKit, Blink, Edge */
  color: rgba(150, 150, 150, 1);
}

.search-cancel {
  width: 50px;
  text-align: center;
  line-height: 28px;
}

.head-search{
  position: absolute;
  top: 20px;
  left: 20px;
}

.head-search .icon {
  font-size: 1.2em;
  color: rgba(130, 130, 130, 1);
}

h4 {
  padding: 5px 10px;
  font-weight: 400;
}

.hot-content {
  position: relative;
  padding-top: 55px;
}

.hot-list {
  display: flex;
  flex-wrap: wrap;
}

.hot-list li {
  width: 50%;
  display: flex;
  flex-wrap: nowrap;
  margin: 10px 0;
}

.hot-list :nth-child(-n+4) .song-index{
  color: #d73e39;
}

.hot-list :nth-child(n+5) .song-index,
.hot-list :nth-child(n+5) .song-name{
  color: rgba(80, 80, 80, 1);
}

.hot-list li .song-index{
  width: 10vw;
  height: 47px;
  line-height: 47px;
  text-align: center;
}

.hot-list li .song-info {
  width: 40vw;
  flex: 1;
}

.hot-list li .song-title{
  display: flex;
  height: 30px;
}

.song-title .song-name {
  max-width: 100px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.song-title .song-icon {
  height: 16px;
  margin-left: 8px;
}

.song-title .song-icon img {
  height: 100%;
}

.hot-list li .song-introduce{
  font-size: 6px;
  color: rgba(170, 170, 170, 1);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.search-content {
  position: relative;
  padding-top: 55px;
}

.search-content ul li{
  background-color: white;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px 0;
  border-bottom: 1px solid rgba(230, 230, 230, 1);
}

.search-content ul li span {
  padding-left: 20px;
  /* color: #527EAD; */
  overflow: hidden;
  text-overflow:ellipsis;
  white-space: nowrap;
}

.search-content ul li span:nth-child(2) {
  font-size: 6px;
  color: rgba(150, 150, 150, 1);
}
</style>
