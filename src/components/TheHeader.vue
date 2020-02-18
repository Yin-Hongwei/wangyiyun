<template>
  <div class="the-header">
    <!--听歌识曲，搜索，播放-->
    <div class="head-icon">
      <svg class="icon" aria-hidden="true">
        <use :xlink:href="icon"></use>
      </svg>
    </div>
    <!--搜索框-->
    <div class="search" >
      <input type="text" :placeholder="placeholder" @click="getPath('search')"/>
      <div class="head-search">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-fangdajing"></use>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
import { mixin } from '../mixins'

export default {
  name: 'the-header',
  mixins: [mixin],
  props: {
    icon: ''
  },
  data () {
    return {
      placeholder: ''
    }
  },
  mounted () {
    this.getShowKeyword()
  }
}
</script>

<style scoped>
.the-header{
  background-color: #ffffff;
  width: 100%;
  height: 55px;
  position: fixed;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.the-header .head-icon {
  margin-left: 6px;
  width: 50px;
  height: 30px;
  text-align: center;
}

/*搜索框*/
.search {
  flex: 1;
  position: relative;
}

.search > input{
  height: 30px;
  width: 73vw;
  border-radius: 25px;
  border: 0;
  background-color:rgba(225, 225, 225,0.4);
  text-indent:40px;
}

::-webkit-input-placeholder { /* WebKit, Blink, Edge */
  color: rgba(150, 150, 150, 1);
}

.head-search {
  position: absolute;
  top: 6px;
  left: 17px;
}

.head-search .icon {
  color: rgb(33, 33, 33);
  font-size: 1em;
}
</style>
