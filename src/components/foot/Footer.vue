<template>
  <div class="footer-item">
    <div class="kong"></div>
    <div id="opt">
      <div id="发现">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-wangyiyunyinlezizhi"></use>
        </svg>
        <p>发现</p>
      </div>
      <div id="视频">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-bofang"></use>
        </svg>
        <p>视频</p>
      </div>
      <div id="我的">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-yinyue"></use>
        </svg>
        <p>我的</p>
      </div>
      <div id="朋友">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-19"></use>
        </svg>
        <p>朋友</p>
      </div>
      <div id="账号">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-zhanghao"></use>
        </svg>
        <p>账号</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'footer-item'
}
</script>

<style scoped>
.kong{
  width: 100%;
  height: 60px;
}
#opt{
  width: 100%;
  height: 60px;
  position: fixed;
  display: flex;
  justify-content: center;
  bottom: 0;
  background-color: rgba(236,234,232,0.98);
  align-items: center;
}
#opt>div{
  width: 20%;
  height: 50px;
  color: #a5a5a5;
  text-align: center;
}
  /**/
.icon {
  width: 1em;
  height: 1em;
  fill: currentColor;
  color: #d7463f;
  font-size: 1.6em;
}
</style>
