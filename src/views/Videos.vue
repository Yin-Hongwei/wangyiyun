<template>
  <div class="videos">
    <div class="video-head">
      <div class="shiping-icon">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-shipin"></use>
        </svg>
      </div>
      <span>
      <input type="text" placeholder="猜你喜欢，猜不到..."/>
      </span>
      <router-link to="/player">
        <div>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-p7zhengzaibofangzhong"></use>
          </svg>
        </div>
      </router-link>
    </div>
    <div class="video-content">
      这里还没有视频...
    </div>
    <foot/>
  </div>
</template>

<script>
import Foot from '../components/foot/Footer'
export default {
  name: 'videos',
  components: {
    Foot
  }
}
</script>

<style scoped>
.video-head {
  width: 100%;
  height: 60px;
  background-color: #d7463f;
  color: white;
  line-height: 60px;
  display: flex;
  align-items: center;
}
.video-head span {
  flex-grow: 1;
}
.video-head input {
  height:28px;
  width: 100%;
  border-radius: 25px;
  border: 0;
  background-color:rgba(225, 225, 225,0.4);
  text-indent:30px;
}
::-webkit-input-placeholder { /* WebKit, Blink, Edge */
  color: rgba(255,255,255,0.6);
}
.video-head div {
  margin-top: 5px;
  width: 40px;
  text-align: center;
  height: 50px;
}
.video-head .shiping-icon {
  font-size: 1.1em;
}
/*-----------------------------------------------------------------*/
.video-content {
  text-align: center;
  margin-top: 100px;
}
</style>
