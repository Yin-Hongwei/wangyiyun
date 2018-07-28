<template>
  <div class="search">
    <div class="search-head">
      <input type="text" placeholder="猜你喜欢，猜不到..." v-model="keywords" @keyup.enter="search"/>
      <div class="search-cancel" @click="goback(-1)">取消</div>
    </div>
    <div class="search-content">
      <ul v-for="(item, index) in songs" :key="index">
        <li @click="toplay(item.id, index)" >
          <div>
            <p>{{item.name}}</p>
            <p>{{item.artists[0].name}} - {{item.album.name}}</p>
          </div>
          <div class="san-dian">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-unie644"></use>
            </svg>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'search',
  data () {
    return {
      keywords: '',
      songs: []
    }
  },
  methods: {
    search: function () {
      this.getSearch()
    },
    getSearch: function () {
      let _this = this
      axios.get(_this.$store.state.HOST + '/search?keywords=' + _this.keywords)
        .then(function (res) {
          console.log(res.data.result.songs)
          _this.songs = res.data.result.songs
          _this.$store.commit('setTitle', res.data.result.songs)
        })
        .catch(function (error) {
          console.log(error)
        })
    },
    toplay: function (id, index) {
      this.$store.commit('setSongsList', this.songs)
      this.$store.commit('setListIndex', index)
      this.$router.push({path: '/player/' + id})
    },
    goback: function (index) {
      this.$router.go(index)
    }
  }
}
</script>

<style scoped>
.search-head {
  height: 40px;
  background-color: #d7463f;
  display: flex;
  flex-grow: 1;
  padding-top: 18px;
  color: white;
}
.search-head input {
  height:28px;
  width: 85%;
  border-radius: 25px;
  border: 0;
  margin-left: 10px;
  background-color:rgba(225, 225, 225,0.4);
  text-indent:30px;
}
::-webkit-input-placeholder { /* WebKit, Blink, Edge */
  color: rgba(255,255,255,0.6);
}
.search-cancel {
  width: 50px;
  text-align: center;
}
/**/
.search-content ul li{
  background-color: white;
  width: 100%;
  display: flex;
  flex-grow: 1;
}
.search-content ul li .san-dian {
  width: 40px;
}
.search-content ul li .san-dian .icon{
  color: #929294;
}
.search-content ul li:after {
  content:"";
  width: 100%;
  height:1px;
  background-color:#eceae8;
  position:absolute;
  z-index:1;
}
.search-content ul li div:nth-child(1) {
  width: 90%;
}
.search-content ul li p {
  padding-left: 20px;
  overflow: hidden;
}
.search-content ul li p:nth-child(1) {
  font-size: 1.1em;
  color: #6189b4;
  padding-top: 5px;
}
.search-content ul li p:nth-child(2) {
  font-size: 0.8em;
  color: #929294;
  padding-bottom: 5px;
}
/**/
</style>
