<template>
  <div class="user">
    <div class="my-head">
      <div>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-yun"></use>
        </svg>
      </div>
    </div>
    <div class="my-content">
      <!-- <ul>
        <li>
          <div></div>
          <p>本地音乐</p>
          <div> {{bendi}}＞ </div>
        </li>
        <li>
          <div></div>
          <p>最近播放</p>
          <div> {{zuijin}}＞ </div>
        </li>
        <li>
          <div></div>
          <p>我的电台</p>
          <div> {{diantai}}＞ </div>
        </li>
        <li>
          <div></div>
          <p>我的收藏</p>
          <div> {{shoucang}}＞ </div>
        </li>
      </ul> -->
    </div>
    <the-footer/>
  </div>
</template>

<script>
import TheFooter from '../components/TheFooter'
export default {
  name: 'user',
  components: {
    TheFooter
  },
  data () {
    return {
      bendi: '0',
      zuijin: '0',
      diantai: '0',
      shoucang: '0'
    }
  }
}
</script>

<style scoped>
.user {
  background-color: rgb(50, 50, 50);
}

.my-head {
  width: 100%;
  height: 240px;
  color: white;
  line-height: 60px;
  display: flex;
}

.my-head div {
  width: 50px;
  margin-top: 5px;
  text-align: center;
}

.my-head span {
  flex-grow: 1;
  padding-left: 30%;
  font-size: 1.2em;
}
/*-----------------content------------------------*/
.my-content {
  position: static;
  top: 55px;
  bottom: 0;
  width: 100%;
  min-height: 400px;
  background-color: rgb(240, 240, 240);
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  overflow: hidden;
}

.my-content ul li{
  line-height: 40px;
  background-color: white;
  display: flex;
  width: 100%;
  color: dimgrey;
}

.my-content ul li p {
  width: 90%;
}

.my-content ul li:after {
  content:"";
  left: 0;
  right: 0;
  margin-left: 43px;
  height:1px;
  background-color:#eceae8;
  position:absolute;
  z-index:1;
}

.my-content ul li div {
  width: 40px;
  height: 100%;
  font-size: 0.9em;
}
</style>
