<template>
  <div class="the-video">
    <yin-header icon="#icon-shipin1" backgroundColor="#ffffff" :showInput="true" :showIcon="false"></yin-header>
    <div class="video-tags">
      <ul>
        <li v-for="(item, index) in videoTagList" :key="index">{{item.name}}</li>
      </ul>
    </div>
    <div class="video-content">开发中...</div>
    <yin-footer></yin-footer>
  </div>
</template>

<script>
import YinHeader from "../components/TheHeader";
import YinFooter from "../components/TheFooter";
import { mixin } from "../mixins";
import axios from "axios";

export default {
  name: "the-video",
  components: {
    YinHeader,
    YinFooter,
  },
  mixins: [mixin],
  data() {
    return {
      videoTagList: [],
      videoList: [],
    };
  },
  mounted() {
    this.getShowKeyword();
    this.getVideoTagList();
  },
  methods: {
    getVideoTagList() {
      let _this = this;
      axios
        .get(_this.$store.state.HOST + "/video/group/list")
        .then((res) => {
          this.videoTagList = res.data.data.slice(0, 10);
          // this.getVideoList(this.videoTagList[0].id);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getVideoList(id) {
      let _this = this;
      axios
        .get(_this.$store.state.HOST + "/video/group?id=" + id)
        .then((res) => {
          console.log(res.data);
          this.videoList = res.data.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style scoped>
.video-tags {
  padding-top: 55px;
  overflow-x: auto;
}

.video-tags ul {
  display: flex;
  flex-wrap: nowrap;
  padding: 0 5px;
}

.video-tags ul li {
  padding: 0 8px;
  line-height: 40px;
  white-space: nowrap;
  display: inline-block;
  border-bottom: 1px solid rgb(150, 150, 150);
}

.video-content {
  text-align: center;
  margin-top: 100px;
}
</style>
