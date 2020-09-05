<template>
  <div class="the-setting">
    <div class="setting-header">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-im_erweimasaomiao" />
      </svg>
    </div>
    <div class="vip"></div>
    <div class="setting-content">
      <div class="login">
        <p>手机电脑多端同步，尽享海量高品质音乐</p>
        <div>立即登录</div>
      </div>
      <yin-icon class="msg-list" fontSize="14px" iconColor="#d7463f" :data="msgList"></yin-icon>
      <h5>小工具</h5>
      <ul class="setting-item">
        <li v-for="(item, index) in setList" :key="index">
          <div></div>
          <span>{{item.name}}</span>
          <div>{{item.pic}}</div>
        </li>
      </ul>
    </div>
    <yin-footer></yin-footer>
  </div>
</template>

<script>
import { msgList, setList } from "../assets/js/icon";
import YinIcon from "../components/TheIcon";
import YinFooter from "../components/TheFooter";

export default {
  name: "the-setting",
  components: {
    YinIcon,
    YinFooter,
  },
  data() {
    return {
      msgList: msgList,
      setList: setList,
    };
  },
  beforeRouteEnter(to, form, next) {
    next(function (vm) {
      window.onscroll = function () {
        let domComponent = document.getElementsByClassName(
          "setting-content"
        )[0];
        if (vm.scrollTop() >= 100) {
          domComponent.style.overflow = "scroll";
        } else {
          domComponent.style.overflow = "hidden";
        }
      };
    });
  },
  beforeRouteLeave(to, from, next) {
    window.onscroll = null;
    next();
  },
  methods: {
    // 获得滚动高度
    scrollTop() {
      return Math.max(
        document.body.scrollTop,
        document.documentElement.scrollTop
      );
    },
  },
};
</script>

<style scoped>
.the-setting {
  background-image: linear-gradient(90deg, rgb(150, 150, 150), rgb(50, 50, 50));
}

.setting-header {
  padding: 10px;
  color: #ffffff;
  height: 50px;
}

.vip {
  width: 100%;
  height: 100px;
}
/*--------------------content---------------------------*/
.setting-content {
  background-color: rgb(240, 240, 240);
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  overflow: hidden;
  top: 60px;
  margin-bottom: 60px;
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
  background: linear-gradient(to right, #ff5a4c, #ff1d11);
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

.setting-content .setting-item li {
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
