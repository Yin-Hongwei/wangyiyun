<template>
  <div class="the-icon">
    <ul>
      <li v-for="(item, index) in iconList" :key="index">
        <span :style="{color: item.iconColor}">
          <svg class="icon" aria-hidden="true">
            <use :xlink:href="item.icon"></use>
          </svg>
        </span>
        <span :style="{color: item.textColor}">{{item.text}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'the-icon',
  props: {
    iconList: [Array]
  }
}
</script>

<style>
.the-icon ul {
  display: flex;
  width: 100%;
  flex-wrap: nowrap;
  margin-bottom: 10px
}

.the-icon li {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 25%;
}

.the-icon li span {
  display: inline-block;
  padding: 3px 0;
}
</style>
