<template>
  <div class="broad">
    <home/>
    <h3 class="title">精彩节目推荐 ＞</h3>
    <div class="body-group">
      <div>
        <div class="body-item" v-for="(item,index) in recommend" :key="index">
          <img class="item-img" :src="item.coverUrl"/>
          <span class="item-span">{{item.reason}}</span>
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
          // console.log(response.data)
          _this.recommend = response.data.programs
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
}
.item-img,.item-span{
  width: 100%;
}

</style>
