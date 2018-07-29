<template>
  <div class="friends">
    <div class="friend-head">
      <div class="head-top">
        <div class="item-icon">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-tianjiahaoyou"></use>
          </svg>
        </div>
        <div id="head-but">
          <span @click="dongtai">动态</span>
          <span @click="fujin">附近</span>
        </div>
        <div class="item-icon">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-p7zhengzaibofangzhong"></use>
          </svg>
        </div>
        <div id="head-item"></div>
      </div>
      <div class="head-bottom">
        <div class="writer-icon">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-xie"></use>
          </svg>
          &nbsp;&nbsp;发动态
        </div>
        <div class="writer-icon">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-shipin"></use>
          </svg>
          &nbsp;&nbsp;发布视频
        </div>
      </div>
    </div>
    <div class="friend-content">
      你还没有朋友...
    </div>
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
      div.style.left = 33 + '%'
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
  height: 100px;
  background-color: #d7463f;
  text-align: center;
  color: white;
}
/*------------------head第一行-----------------------*/
.friend-head .head-top{
  width: 100%;
  height: 40px;
  line-height: 60px;
  padding-top: 15px;
  display: flex;
  justify-content: space-between;
}
.friend-head .head-top .item-icon {
  width: 40px;
  margin-top: -10px;
}
#head-but {
  margin: 0 auto;
  border: 1px solid white;
  border-radius: 25px;
  width: 140px;
  height: 30px;
  line-height: 30px;
  position: absolute;
  left: 33%;
  z-index: 1;
}
#head-but span {
  display: inline-block;
  margin: 0 16px;
}
#head-but span:nth-child(1) {
  color: #d7463f;
}
/*-------------------head第二行---------------------*/
.head-bottom {
  display: flex;
}
.writer-icon {
  width: 50%;
  align-items: center;
  display: flex;
  padding-left: 12%;
  padding-top: 10px;
}
/*--------------------内容区---------------------*/
#head-item {
  border-radius: 25px;
  width: 70px;
  height: 30px;
  line-height: 30px;
  background-color: white;
  position: absolute;
  z-index: 0;
  top: 16px;
  left: 33%;
}
.friend-content {
  text-align: center;
  margin-top: 100px;
  color: black;
}
</style>
