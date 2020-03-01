<template>
  <div class="friends">
    <div class="friend-head">
      <div class="head-add">
        <div class="item-icon">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-tianjiahaoyou"></use>
          </svg>
        </div>
        <ul class="head-nav">
          <li @click="getColor(item)" :class="{'active-color': item.name === activeName}" v-for="(item, index) in navList" :key="index">
            {{item.name}}
          </li>
        </ul>
      </div>
      <div class="head-bottom">
        <div class="writer-icon">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-xie"></use>
          </svg>
          &nbsp;&nbsp;发动态
        </div>
        <div class="writer-icon">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-shipin"></use>
          </svg>
          &nbsp;&nbsp;发布视频
        </div>
      </div>
    </div>
    <play-icon :showIcon="true"/>
    <div class="friend-content">
      你还没有朋友...
    </div>
    <the-footer/>
  </div>
</template>

<script>
import PlayIcon from '../components/PlayIcon'
import TheFooter from '../components/TheFooter'

export default {
  name: 'friends',
  components: {
    PlayIcon,
    TheFooter
  },
  data () {
    return {
      navList: [{
        name: '广场'
      }, {
        name: '动态'
      }],
      activeName: '广场'
    }
  },
  methods: {
    getColor (val) {
      this.activeName = val.name
    }
  }
}
</script>

<style scoped>
.friend-head {
  text-align: center;
  color: rgb(33, 33, 33);
}
/*------------------head第一行-----------------------*/
.head-add{
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

.head-nav{
  flex: 1;
  display: flex;
  justify-content:space-around;
  align-content: center;
}

.head-nav li {
  border-bottom: 2px solid transparent;
}

.active-color {
  color: #d7463f;
  border-bottom: 2px solid #d7463f !important;
}
/*-------------------head第二行---------------------*/
.head-bottom {
  display: flex;
  justify-content: space-around;
  text-align: center;
}

.writer-icon {
  align-items: center;
  display: flex;
  font-size: 14px;
  padding-top: 5px;
}

/*--------------------内容区---------------------*/
.friend-content {
  text-align: center;
  margin-top: 100px;
  color: black;
}
</style>
