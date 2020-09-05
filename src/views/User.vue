<template>
  <div class="user">
    <div class="user-nav">
      <div class="user-img">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-yonghu" />
        </svg>
      </div>
      <div class="user-login">立即登录 ></div>
    </div>
    <div class="nav-tool">
      <yin-icon iconColor="#FC3B34" textColor="#666666" fontSize="12px" :data="userIconTop"></yin-icon>
      <yin-icon iconColor="#FC3B34" textColor="#666666" fontSize="12px" :data="userIconBottom"></yin-icon>
    </div>
    <div class="my-love-song">
      <div class="love-img">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-chuangyikongjianICON_fuzhi-" />
        </svg>
      </div>
      <div class="love-msg">
        <span class="love-title">我喜欢的音乐</span>
        <span>{{collection}}首</span>
      </div>
    </div>
    <div class="user-section-title">
      <span>创建歌单</span>
      <span>收藏歌单</span>
    </div>
    <div class="create-songlist">
      <div class="songlist-content-title">
        <span>创建歌单</span>
      </div>
    </div>
    <div class="collection-songlist">
      <div class="songlist-content-title">
        <span>收藏歌单</span>
      </div>
    </div>
    <yin-footer></yin-footer>
  </div>
</template>

<script>
import { userIconTop, userIconBottom } from "../assets/js/icon";
import YinPlayIcon from "../components/PlayIcon";
import YinIcon from "../components/TheIcon";
import YinFooter from "../components/TheFooter";

export default {
  name: "user",
  components: {
    YinPlayIcon,
    YinIcon,
    YinFooter,
  },
  data() {
    return {
      userIconTop: userIconTop,
      userIconBottom: userIconBottom,
      collection: "0",
    };
  },
};
</script>

<style scoped>
.user-nav {
  padding: 0 12px;
  display: flex;
  align-items: center;
  padding-top: 30px;
}

.user-img {
  width: 40px;
  height: 40px;
  border-radius: 100%;
  overflow: hidden;
  color: #f8dada;
  background-color: #f7f1f1;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding-left: 4px;
}

.user-login {
  padding-left: 10px;
  font-weight: 600;
}

/* 图标 */
.nav-tool,
.my-love-song,
.create-songlist,
.collection-songlist {
  background-color: #ffffff;
  box-shadow: 0px 0px 6px 1px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  margin: 10px;
  padding: 10px;
}

.my-love-song {
  display: flex;
  height: 50px;
}

.my-love-song .love-img {
  color: #fc6464;
  background-color: #fee8e8;
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
}

.love-msg {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 10px;
  font-size: 9px;
  color: #666666;
}

.love-title {
  font-size: 16px;
  margin-bottom: 5px;
}

.user-section-title {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 20px 10px;
}

.create-songlist,
.collection-songlist {
  min-height: 70px;
}

.songlist-content-title {
  font-size: 9px;
}
</style>
