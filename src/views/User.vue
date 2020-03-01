<template>
  <div class="user">
    <the-header icon="#icon-yun" iconColor="#ffffff" backgroundColor="#323232"></the-header>
    <play-icon :showIcon="true"/>
    <div class="user-nav">
      <div class="user-img">
        <img src="../assets/img/user.jpeg" alt="">
      </div>
      <div>登录立享多端同步</div>
      <div class="user-login">立即登录</div>
    </div>
    <the-icon :iconList="userList"></the-icon>
    <div class="user-content">
      <h4>我的音乐</h4>
    </div>
    <the-footer/>
  </div>
</template>

<script>
import TheHeader from '../components/TheHeader'
import PlayIcon from '../components/PlayIcon'
import TheIcon from '../components/TheIcon'
import TheFooter from '../components/TheFooter'

export default {
  name: 'user',
  components: {
    TheHeader,
    PlayIcon,
    TheIcon,
    TheFooter
  },
  data () {
    return {
      userList: [{
        text: '本地音乐',
        icon: '#icon-iconfontzhizuobiaozhun023146',
        textColor: '#ffffff',
        iconColor: '#ffffff',
        path: ''
      }, {
        text: '我的电台',
        icon: '#icon-yinfu',
        textColor: '#ffffff',
        iconColor: '#ffffff',
        path: ''
      }, {
        text: '我的收藏',
        icon: '#icon-shoucang',
        textColor: '#ffffff',
        iconColor: '#ffffff',
        path: ''
      }, {
        text: '关注新歌',
        icon: '#icon-guanzhu',
        textColor: '#ffffff',
        iconColor: '#ffffff',
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

.user-nav {
  display: flex;
  flex-wrap: nowrap;
  color: #ffffff;
  align-items: center;
  justify-content: space-around;
  padding-top: 80px;
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
</style>
