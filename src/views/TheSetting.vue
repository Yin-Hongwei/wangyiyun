<template>
  <div class="the-setting">
    <div class="setting-head"></div>
    <div class="setting-content">
      <div class="login">
        <p>手机电脑多端同步，尽享海量高品质音乐</p>
        <div>立即登录</div>
      </div>
      <ul class="msg-list">
        <li v-for="(item, index) in msgList" :key="index">
          <span>
            <svg class="icon" aria-hidden="true">
              <use :xlink:href="item.icon"></use>
            </svg>
          </span>
          <span>{{item.name}}</span>
        </li>
      </ul>
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
import TheFooter from '../components/TheFooter'

export default {
  name: 'the-setting',
  components: {
    TheFooter
  },
  data () {
    return {
      msgList: [{
        icon: '#icon-xiaoxi',
        name: '我的消息'
      }, {
        icon: '#icon-iconfont31haoyou1',
        name: '我的好友'
      }, {
        icon: '#icon-zhuye',
        name: '个人主页'
      }, {
        icon: '#icon-pifugexinghuazhuti-xianxing',
        name: '个性装扮'
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
  }
}
</script>

<style scoped>
.the-setting {
  width: 100%;
  background-image: linear-gradient(to bottom right, rgb(130, 130, 130), rgb(30, 30, 30));
}

.setting-head {
  height: 160px;
  width: 100%;
  color: white;
  text-align: center;
  line-height: 60px;
  font-size: 1.2em;
}
/*--------------------content---------------------------*/
.setting-content {
  background-color: rgb(240, 240, 240);
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  overflow: hidden;
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
  display: flex;
  flex-wrap: nowrap;
  background-color: #ffffff;
  margin-bottom: 5px;
}

.msg-list li {
  width: 25%;
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 10px 0;
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

.icon {
  width: 100%;
  height: 30px;
  vertical-align: -0.15em;
  fill: currentColor;
  color: #d7463f;
  overflow: hidden;
}
</style>
