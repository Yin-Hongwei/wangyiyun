<template>
  <div class="header-item">
    <!--听歌识曲，搜索，播放-->
    <div class="headBac">
      <div class="search-nav">
        <div class="head-opt">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-tinggeshiqu"></use>
          </svg>
        </div>
        <div class="search" >
          <input type="text" placeholder="给你推荐  最美的期待" @click="search"/>
        </div>
        <router-link to="/player">
          <div class="head-opt">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-p7zhengzaibofangzhong"></use>
            </svg>
          </div>
        </router-link>
      </div>
      <!--个性推荐，主播电台-->
      <div class="tag">
        <div id="rec">个性推荐</div>
        <div id="sta">主播电台</div>
        <div class="bor"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'header-item',
  methods: {
    search: function () {
      this.$router.push({path: '/search'})
    }
  }
}
</script>

<style scoped>
.headBac{
  background-color: #d73e39;
  width: 100%;
  height: 92px;
  position: fixed;
  z-index: 1;
}
.search-nav{
  padding-top: 8px;
  height: 50px;
  width: 100%;
  display: flex;
  /*justify-content: center;*/
}
/*搜索框*/
.search{
  flex-grow: 1;
  margin-top: 10px;
}
.search>input{
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
.search-nav .head-opt{
  margin-top: 10px;
  width: 40px;
  text-align: center;
}
/*两个选项*/
.tag{
  text-align: center;
  font-size: 18px;
  color: #ffffff;
}
#rec,#sta{
  float: left;
  width: 50%;
}
.bor{
  clear: both;
  width: 10%;
  height:4px;
  background-color: white;
  margin-left: 20%;
  border-radius: 25px;
}
/**/
.icon {
  width: 1em;
  height: 1em;
  fill: currentColor;
  color: white;
  font-size: 1.6em;
}
</style>
