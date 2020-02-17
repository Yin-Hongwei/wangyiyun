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
    <div class="search-content" v-if="!isSearch">
      <h4 class="hot">热搜榜</h4>
      <ul class="hot-list">
        <li v-for="(item, index) in searchList" :key="index" @click="toplay(item.url, index)" >
          <span>{{item.searchWord}}</span>
          <span>{{item.content}}</span>
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
.search-head {
  position: fixed;
  z-index: 100;
  height: 55px;
  width: 100%;
  display: flex;
  flex-grow: 1;
  align-items: center;
  background-color: #ffffff;
}

.search-head input {
  height: 30px;
  width: 80%;
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
  padding: 5px 0;
  border-bottom: 1px solid rgba(230, 230, 230, 1);
}

.search-content ul li span {
  padding-left: 20px;
  overflow: hidden;
  text-overflow:ellipsis;
  white-space: nowrap;
}

.search-content ul li span:nth-child(2) {
  font-size: 6px;
  color: rgba(150, 150, 150, 1);
}
</style>
