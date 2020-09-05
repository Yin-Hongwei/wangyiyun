<template>
  <div class="index-page">
    <yin-header
      icon="#icon-tinggeshiqu40x40"
      backgroundColor="#ffffff"
      :showInput="true"
      :showIcon="id !== null"
    ></yin-header>
    <yin-swiper></yin-swiper>
    <yin-icon
      class="icon-list"
      background="linear-gradient(to right, #ff5a4c, #ff1d11)"
      iconColor="#ffffff"
      fontSize="12px"
      width="40px"
      :data="findIcon"
    ></yin-icon>
    <recommend-song title="推荐歌单" :data="recommendSong"></recommend-song>
    <new-song title="最新音乐" :data="newSong"></new-song>
    <yin-footer></yin-footer>
  </div>
</template>

<script>
import axios from "axios";
import { mapGetters } from "vuex";
import { findIcon } from "../assets/js/icon";
import YinHeader from "../components/TheHeader";
import YinSwiper from "../components/TheSwiper";
import YinIcon from "../components/TheIcon";
import RecommendSong from "../components/songType/RecommendSong";
import NewSong from "../components/songType/NewSong";
import YinFooter from "../components/TheFooter";

export default {
  name: "index-page",
  components: {
    YinHeader,
    YinSwiper,
    YinIcon,
    RecommendSong,
    NewSong,
    YinFooter,
  },
  data() {
    return {
      findIcon: [],
      recommendSong: [],
      newSong: [],
    };
  },
  computed: {
    ...mapGetters(["id"]),
  },
  mounted() {
    this.findIcon = findIcon;
    this.getRecommendSong();
    this.getNewSong();
  },
  methods: {
    // 获取推荐歌单
    getRecommendSong() {
      let _this = this;
      axios
        .get(_this.$store.state.HOST + "/personalized")
        .then((response) => {
          console.log("推荐歌单 ===> ", response.data.result);
          _this.recommendSong = response.data.result;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    // 获取最新音乐
    getNewSong() {
      let _this = this;
      axios
        .get(_this.$store.state.HOST + "/personalized/newsong")
        .then((response) => {
          console.log("最新音乐 ===> ", response.data.result);
          _this.newSong = response.data.result;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style scoped>
.icon-list {
  position: relative;
  margin-top: 22vw;
}
</style>
