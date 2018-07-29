<template>
  <div class="my">
    <div class="my-head">
      <div>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-yun"></use>
        </svg>
      </div>
      <span>我的音乐</span>
    </div>
    <div class="my-item">
      <ul>
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
      </ul>
    </div>
    <foot/>
  </div>
</template>

<script>
import Foot from '../components/foot/Footer'
export default {
  name: 'my',
  components: {
    Foot
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
.my-head {
  width: 100%;
  height: 60px;
  background-color: #d7463f;
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
/*-----------------item------------------------*/
.my-item ul li{
  line-height: 40px;
  background-color: white;
  display: flex;
  width: 100%;
  color: dimgrey;
}
.my-item ul li p {
  width: 90%;
}
.my-item ul li:after {
  content:"";
  width: 88%;
  left: 30px;
  right: 0;
  height:1px;
  background-color:#eceae8;
  position:absolute;
  z-index:1;
}
.my-item ul li div {
  width: 40px;
  height: 100%;
  font-size: 0.9em;
}
</style>
