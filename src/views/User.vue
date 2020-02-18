<template>
  <div class="user">
    <div class="user-head">
      <div>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-yun"></use>
        </svg>
      </div>
    </div>
    <play-small :showIcon="true"/>
    <div class="user-nav">
      <div class="user-img">
        <img src="../assets/img/user.jpeg" alt="">
      </div>
      <div>登录立即多端同步</div>
      <div class="user-login">立即登录</div>
    </div>
    <ul class="user-list">
      <li v-for="(item, index) in userList" :key="index">
        <span>
          <svg class="icon" aria-hidden="true">
            <use :xlink:href="item.icon"></use>
          </svg>
        </span>
        <span>{{item.name}}</span>
      </li>
    </ul>
    <div class="user-content">
      <h4>我的音乐</h4>
    </div>
    <the-footer/>
  </div>
</template>

<script>
import PlaySmall from '../components/PlaySmall'
import TheFooter from '../components/TheFooter'

export default {
  name: 'user',
  components: {
    PlaySmall,
    TheFooter
  },
  data () {
    return {
      userList: [{
        name: '本地音乐',
        icon: '#icon-iconfontzhizuobiaozhun023146',
        path: ''
      }, {
        name: '我的电台',
        icon: '#icon-yinfu',
        path: ''
      }, {
        name: '我的收藏',
        icon: '#icon-shoucang',
        path: ''
      }, {
        name: '关注新歌',
        icon: '#icon-guanzhu',
        path: ''
      }],
      bendi: '0',
      zuijin: '0',
      diantai: '0',
      shoucang: '0'
    }
  }
}
</script>

<style scoped>
.user {
  background-color: rgb(50, 50, 50);
}

.user-head {
  width: 100%;
  height: 80px;
  color: white;
  line-height: 60px;
  display: flex;
}

.user-head div {
  width: 50px;
  margin-top: 5px;
  text-align: center;
}

.user-head span {
  flex-grow: 1;
  padding-left: 30%;
  font-size: 1.2em;
}

.user-nav {
  display: flex;
  flex-wrap: nowrap;
  color: #ffffff;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 40px;
}

.user-img {
  width: 16vw;
  height: 16vw;
  border-radius: 100%;
  overflow: hidden;
  margin: 0 5px;
}

.user-img img {
  width: 100%;
}

.user-nav > div:nth-child(2) {
  position: relative;
  left: -30px;
}

.user-login {
  border: 1px solid #ffffff;
  border-radius: 50px;
  padding: 5px 10px;
  font-size: 14px;
}

.user-list {
  display: flex;
  flex-wrap: nowrap;
  margin-bottom: 20px;
}

.user-list li {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  width: 25%;
}

.user-list span {
  display: inline-block;
  padding: 3px 0;
}
/*-----------------content------------------------*/
.user-content {
  position: static;
  top: 55px;
  bottom: 0;
  width: 100%;
  min-height: 400px;
  background-color: rgb(240, 240, 240);
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  overflow: hidden;
}

h4 {
  padding: 20px 15px;
}

.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
