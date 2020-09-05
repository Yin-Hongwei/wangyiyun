<template>
  <div class="friends">
    <div class="friend-head">
      <div class="head-add">
        <div class="item-icon">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-tianjiahaoyou" />
          </svg>
        </div>
        <ul class="head-nav">
          <li
            v-for="(item, index) in navList"
            :class="{'active-color': item.name === activeName}"
            :key="index"
            @click="getColor(item)"
          >{{item.name}}</li>
        </ul>
      </div>
    </div>
    <div class="friend-content">开发中...</div>
    <yin-footer></yin-footer>
  </div>
</template>

<script>
import YinFooter from "../components/TheFooter";

export default {
  name: "friends",
  components: {
    YinFooter,
  },
  data() {
    return {
      navList: [
        {
          name: "广场",
        },
        {
          name: "动态",
        },
      ],
      activeName: "广场",
    };
  },
  methods: {
    getColor(val) {
      this.activeName = val.name;
    },
  },
};
</script>

<style scoped>
.friend-head {
  text-align: center;
  color: rgb(33, 33, 33);
}
/*------------------head第一行-----------------------*/
.head-add {
  width: 100%;
  height: 55px;
  line-height: 55px;
  padding-right: 40px;
  box-sizing: border-box;
  display: flex;
}

.head-add .item-icon {
  width: 40px;
  height: 55px;
  line-height: 70px;
  margin-left: 10px;
}

.head-nav {
  flex: 1;
  display: flex;
  justify-content: space-around;
  align-content: center;
}

.head-nav li {
  border-bottom: 2px solid transparent;
}

.active-color {
  color: #d7463f;
  border-bottom: 2px solid #d7463f !important;
}

/*--------------------内容区---------------------*/
.friend-content {
  text-align: center;
  margin-top: 100px;
  color: black;
}
</style>
