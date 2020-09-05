<template>
  <div class="the-header" :style="{backgroundColor: backgroundColor}">
    <!--听歌识曲，搜索，播放-->
    <div class="head-icon" :style="{color: iconColor}">
      <svg class="icon" aria-hidden="true">
        <use :xlink:href="icon"></use>
      </svg>
    </div>
    <!--搜索框-->
    <div class="search" v-if="showInput">
      <input type="text" :placeholder="placeholder" @click="getPath('search')"/>
      <div class="head-search">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-fangdajing"></use>
        </svg>
      </div>
    </div>
    <play-icon class="play" :showIcon="showIcon"></play-icon>
  </div>
</template>

<script>
import PlayIcon from '../components/PlayIcon'
import { mixin } from '../mixins'

export default {
  name: 'the-header',
  components: {
    PlayIcon
  },
  mixins: [mixin],
  props: {
    backgroundColor: {
      type: String
    },
    icon: String,
    iconColor: {
      type: String,
      default: '#1E1E1E'
    },
    showInput: {
      type: Boolean,
      default: false
    },
    showIcon: {
      type: Boolean,
      default: true
    }
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
  margin-right: 20px;
}

.search > input{
  height: 30px;
  width: 100%;
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
  font-size: 1em;
}

.play {
  width: 30px;
  height: 30px;
}
</style>
