<template>
  <div class="the-setting">
    <the-header icon="#icon-im_erweimasaomiao" iconColor="#ffffff"></the-header>
    <div class="vip"></div>
    <div class="setting-content">
      <div class="login">
        <p>手机电脑多端同步，尽享海量高品质音乐</p>
        <div>立即登录</div>
      </div>
      <the-icon :iconList="msgList" class="msg-list"></the-icon>
      <h5>小工具</h5>
      <ul class="setting-item">
        <li v-for="(item, index) in setList" :key="index">
          <div></div>
          <span>{{item.name}}</span>
          <div>{{item.pic}}</div>
        </li>
      </ul>
    </div>
    <the-footer/>
  </div>
</template>

<script>
import TheHeader from '../components/TheHeader'
import TheIcon from '../components/TheIcon'
import TheFooter from '../components/TheFooter'

export default {
  name: 'the-setting',
  components: {
    TheHeader,
    TheIcon,
    TheFooter
  },
  data () {
    return {
      msgList: [{
        icon: '#icon-xiaoxi',
        textColor: '#000000',
        iconColor: '#d7463f',
        text: '我的消息'
      }, {
        icon: '#icon-iconfont31haoyou1',
        textColor: '#000000',
        iconColor: '#d7463f',
        text: '我的好友'
      }, {
        icon: '#icon-zhuye',
        textColor: '#000000',
        iconColor: '#d7463f',
        text: '个人主页'
      }, {
        icon: '#icon-pifugexinghuazhuti-xianxing',
        textColor: '#000000',
        iconColor: '#d7463f',
        text: '个性装扮'
      }],
      setList: [{
        icon: '',
        name: '设置',
        pic: '>',
        path: ''
      }, {
        icon: '',
        name: '夜间模式',
        pic: '>',
        path: ''
      }, {
        icon: '',
        name: '定时关闭',
        pic: '>',
        path: ''
      }, {
        icon: '',
        name: '音乐黑名单',
        pic: '>',
        path: ''
      }, {
        icon: '',
        name: '鲸云音效',
        pic: '>',
        path: ''
      }, {
        icon: '',
        name: '添加 Siri 捷径',
        pic: '>',
        path: ''
      }, {
        icon: '',
        name: '音乐闹钟',
        pic: '>',
        path: ''
      }, {
        icon: '',
        name: '青少年模式',
        pic: '>',
        path: ''
      }, {
        icon: '',
        name: '分享网易云音乐',
        pic: '>',
        path: ''
      }, {
        icon: '',
        name: '关于',
        pic: '>',
        path: ''
      }]
    }
  },
  beforeRouteEnter (to, form, next) {
    next(function (vm) {
      window.onscroll = function () {
        let domComponent = document.getElementsByClassName('setting-content')[0]
        if (vm.scrollTop() >= 100) {
          domComponent.style.overflow = 'scroll'
        } else {
          domComponent.style.overflow = 'hidden'
        }
      }
    })
  },
  beforeRouteLeave (to, from, next) {
    window.onscroll = null
    next()
  },
  methods: {
    // 获得滚动高度
    scrollTop () {
      return Math.max(document.body.scrollTop, document.documentElement.scrollTop)
    }
  }
}
</script>

<style scoped>
.the-setting {
  width: 100%;
  background-image: linear-gradient(45deg, rgb(130, 130, 130), rgb(30, 30, 30));
}

.vip {
  width: 100%;
  height: 160px;
}
/*--------------------content---------------------------*/
.setting-content {
  background-color: rgb(240, 240, 240);
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  overflow: hidden;
  top:60px;
  height: calc(100vh - 55px);
  position: sticky;
}

.login {
  background-color: #ffffff;
  height: 130px;
}

.login p {
  text-align: center;
  padding: 23px 0;
  font-size: 14px;
}

.login div {
  width: 180px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  color: #ffffff;
  background-color: #d7463f;
  margin: auto;
  border-radius: 30px;
  font-size: 16px;
}

.msg-list {
  background-color: #ffffff;
}

h5 {
  background-color: #ffffff;
  padding: 10px 20px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

.setting-content .setting-item li{
  height: 50px;
  line-height: 50px;
  background-color: #ffffff;
  display: flex;
  width: 100%;
  justify-content: space-between;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

.setting-content .setting-item li span {
  width: 90%;
}

.setting-content .setting-item li div {
  width: 40px;
  height: 100%;
}
</style>
