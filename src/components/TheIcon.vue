<template>
  <div class="the-icon">
    <ul>
      <li v-for="(item, index) in data" :key="index">
        <span :style="{background: background, fontSize: iconSize, minWidth: width, height: width}">
          <svg class="icon" aria-hidden="true" :style="{color: iconColor}">
            <use :xlink:href="item.icon" />
          </svg>
        </span>
        <span class="rili-tuijian" v-if="item.name === '每日推荐'">{{new Date().getMonth() + 1}}</span>
        <span :style="{color: textColor, fontSize: fontSize}">{{item.name}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "the-icon",
  props: {
    data: Array,
    background: String,
    iconColor: String,
    textColor: String,
    iconSize: String,
    fontSize: String,
    width: String,
  },
};
</script>

<style>
.the-icon ul {
  display: flex;
  width: 100%;
  flex-wrap: nowrap;
  margin-bottom: 10px;
}

.the-icon li {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.the-icon li span {
  display: inline-block;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.the-icon li span:first-child {
  border-radius: 50%;
}

.the-icon li span:last-child {
  height: 26px;
}

.rili-tuijian {
  position: absolute;
  margin-top: 15px;
  font-size: 12px;
  color: red;
}
</style>
