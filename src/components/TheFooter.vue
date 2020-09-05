<template>
  <div class="the-footer">
    <div class="kong"></div>
    <ul class="item-page">
      <li
        v-for="(item, index) in nameList"
        :key="index"
        :class="{'avtive-page': item.name === activePage}"
        @click="goPage(item)"
      >
        <span :class="{'avtive-icon': item.name === activePage}">
          <svg class="icon" aria-hidden="true">
            <use :xlink:href="item.icon" />
          </svg>
        </span>
        <span>{{item.name}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { nameList } from "../assets/js/icon";

export default {
  name: "the-footer",
  data() {
    return {
      nameList: nameList,
    };
  },
  computed: {
    ...mapGetters(["activePage"]),
  },
  methods: {
    goPage(val) {
      this.$store.commit("SetActivePage", val.name);
      this.$router.push({ path: val.path });
    },
  },
};
</script>

<style scoped>
.kong {
  width: 100%;
  height: 60px;
}
.item-page {
  position: fixed;
  width: 100%;
  height: 60px;
  bottom: 0;
  z-index: 100px;
  display: flex;
  justify-content: center;
  background-color: #eceae8;
  align-items: center;
}

.item-page li {
  width: 20%;
  height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 8px;
  color: #959595;
}

.avtive-page {
  color: #d73e39 !important;
}

.avtive-icon {
  background: linear-gradient(to right, #ff5a4c, #ff1d11);
  color: #ffffff;
  border-radius: 100%;
  min-width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.icon {
  width: 1em;
  height: 1em;
  fill: currentColor;
  font-size: 16pt;
}
</style>
