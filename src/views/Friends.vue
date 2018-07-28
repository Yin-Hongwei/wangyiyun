<template>
  <div class="friends">
    <div class="friend-head">
      <div id="head-but">
        <span @click="dongtai">动态</span>
        <span @click="fujin">附近</span>
      </div>
      <div id="head-item"></div></div>
    <foot/>
  </div>
</template>

<script>
import Foot from '../components/foot/Footer'
export default {
  name: 'friends',
  components: {
    Foot
  },
  methods: {
    dongtai: function () {
      var h = document.getElementById('head-but')
      var div = document.getElementById('head-item')
      div.style.left = 28 + '%'
      h.firstChild.style.color = '#d7463f'
      h.lastChild.style.color = 'white'
    },
    fujin: function () {
      var h = document.getElementById('head-but')
      var div = document.getElementById('head-item')
      div.style.left = 51 + '%'
      h.firstChild.style.color = 'white'
      h.lastChild.style.color = '#d7463f'
    }
  }
}
</script>

<style scoped>
.friend-head {
  width: 100%;
  height: 40px;
  text-align: center;
  background-color: #d7463f;
  color: white;
  line-height: 60px;
  padding-top: 20px;
}
#head-but {
  margin: 0 auto;
  border: 1px solid white;
  border-radius: 25px;
  width: 140px;
  height: 30px;
  line-height: 30px;
  position: absolute;
  left: 28%;
  z-index: 1;
}
#head-but span {
  display: inline-block;
  margin: 0 16px;
}
#head-but span:nth-child(1) {
  color: #d7463f;
}
#head-item {
  border-radius: 25px;
  width: 70px;
  height: 30px;
  line-height: 30px;
  background-color: white;
  position: absolute;
  z-index: 0;
  top: 21px;
  left: 28%;
}
</style>
