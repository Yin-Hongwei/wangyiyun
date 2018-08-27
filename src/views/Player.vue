<template>
  <div class="player">
    <div class="playing-header">
      <div class="back" @click="goback(-1)">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-fanhui01"></use>
        </svg>
      </div>
      <div class="playing-title">
        <p>{{title}}</p>
        <p>{{artist}}</p>
      </div>
      <div class="forwarding">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-zhuanfa"></use>
        </svg>
      </div>
    </div>
      <transition name="fade">
        <div class="playing-body" v-if="!showLrc" @click="showLrc = true">
          <img class='player-top' src="../assets/img/player-needle.png" alt="">
          <div class="pic-box" :class='{circle: isPlay}'>
            <img :src="picUrl" alt="" class="album-pic">
            <div></div>
          </div>
          <div class="playing-item">
            <div>
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-shoucang"></use>
              </svg>
            </div>
            <div>
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-xiazai"></use>
              </svg>
            </div>
            <div>
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-pinglunguanli"></use>
              </svg>
            </div>
            <div>
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-sandiancaidan"></use>
              </svg>
            </div>
          </div>
        </div>
      </transition>
      <transition name="fade">
        <div v-show="showLrc" class="showLrc-box" @click="showLrc = false">
          <ul v-show="lrc.length" v-bind:style="{top:lrcTop}" class="lrc">
            <li v-for="(item, index) in lrc" :key="index">
              {{ item[1] }}
            </li>
          </ul>
          <ul v-show="!lrc.length" style="margin-top:40%;">
            <span class="no-lrc">暂无歌词</span>
          </ul>
        </div>
      </transition>
    <div class="playing-footer">
      <div class="playing-speed">
        <div class="current-time">{{ nowTime }}</div>
        <div class="progress-box">
          <div ref="progress" class="progress">
            <div ref="curProgress" class="cur-progress" :style="{width: curLength+'%'}"></div>
            <div class="idot" :style="{left: curLength+'%'}" @mousedown="down" @mousemove="move" @touchstart="touchstart" @touchmove="touchmove"></div>
          </div>
        </div>
        <div class="left-time">{{ songTime }}</div>
      </div>
      <div class="playing-butt">
          <div>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-icon-test"></use>
            </svg>
          </div>
          <div @click="prev">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-shangyishou"></use>
            </svg>
          </div>
          <div @click="togglePlay">
            <svg class="icon" aria-hidden="true">
              <use :xlink:href="playButtonUrl"></use>
            </svg>
          </div>
          <div @click="next">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-xiayishouxianxing"></use>
            </svg>
          </div>
          <div>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-mulu"></use>
            </svg>
          </div>
      </div>
    </div>
    <div class="picbg" :style='{background: "url(" + picUrl + ")"}'></div>
    <div class="picbg2"></div>
  </div>
</template>

<script>
import axios from 'axios'
import { mapGetters } from 'vuex'
export default {
  name: 'player',
  data () {
    return {
      showSongsList: false,
      showLrc: false,
      curLength: 0,
      nowTime: '00.00',
      songTime: '00.00',
      progressLength: 0,
      isDown: false,
      lrcTop: 200 + 'px',
      touchStartX: 0
    }
  },
  computed: {
    ...mapGetters([
      'isPlay', // 播放状态
      'playButtonUrl', // 播放状态的图标
      'id', // 音乐id
      'title', // 歌名
      'artist', // 歌手名
      'picUrl', // 歌曲图片
      'curTime', // 当前音乐的播放位置
      'duration', // 音乐时长
      'lrc', // 歌词
      'songsList', // 当前歌单列表
      'listIndex', // 当前歌曲在歌曲列表的位置
      'autoNext' // 用于触发自动播放下一首
    ])
  },
  watch: {
    // 切换播放状态的图标
    isPlay: function (val) {
      if (val) {
        this.$store.commit('setPlayButtonUrl', '#icon-zanting')
      } else {
        this.$store.commit('setPlayButtonUrl', '#icon-bofang')
      }
    },
    // 播放时间的开始和结束
    curTime: function () {
      this.nowTime = this.formatSeconds(this.curTime)
      this.songTime = this.formatSeconds(this.duration)
      this.curLength = (this.curTime / this.duration) * 100
      if (this.lrc.length !== 0) {
        for (var i = 0; i < this.lrc.length; i++) {
          if (this.curTime >= this.lrc[i][0]) {
            for (var j = 0; j < this.lrc.length; j++) {
              document.querySelectorAll('.lrc li')[j].style.color = 'rgba(155,155,155,0.7)'
            }
            if (i >= 0) {
              this.lrcTop = -i * 30 + 180 + 'px'
              document.querySelectorAll('.lrc li')[i].style.color = '#ffffff'
            }
          }
        }
      }
    },
    // 自动播放下一首
    autoNext: function () {
      this.next()
    }
  },
  mounted () {
    this.progressLength = this.$refs.progress.getBoundingClientRect().width
    document.onmouseup = this.up
    if (this.$route.params.id && this.id !== this.$route.params.id) {
      this.$store.commit('setId', this.$route.params.id)
      this.getSongDetail()
    }
  },
  methods: {
    //  控制音乐播放/暂停
    togglePlay () {
      if (this.isPlay) {
        this.$store.commit('setIsPlay', false)
      } else {
        this.$store.commit('setIsPlay', true)
      }
    },
    //  获取歌曲详情
    getSongDetail () {
      let _this = this
      axios.get(_this.$store.state.HOST + '/song/detail', {
        params: {
          ids: _this.id
        }
      }).then(function (res) {
        // console.log('歌曲详情')
        // console.log(res.data)
        _this.getLyric()
        _this.$store.commit('setTitle', res.data.songs[0].name)
        _this.$store.commit('setArtist', res.data.songs[0].ar[0].name)
        _this.$store.commit('setpicUrl', res.data.songs[0].al.picUrl)
      })
    },
    getLyric () {
      this.$store.commit('setLyric', [])
      this.$store.commit('setLrc', [])
      let _this = this
      axios.get(_this.$store.state.HOST + '/lyric', {
        params: {
          id: _this.id
        }
      }).then(function (res) {
        // console.log('歌词')
        // console.log(res.data.lrc)
        let lrc = _this.parseLyric(res.data.lrc.lyric)
        _this.$store.commit('setLyric', res.data.lrc.lyric)
        _this.$store.commit('setLrc', lrc)
        // console.log(lrc)
      })
    },
    parseLyric (text) {
      // console.log(typeof text)
      var lines = text.split('\n'),
        pattern = /\[\d{2}:\d{2}.(\d{3}|\d{2})\]/g,
        result = []
      // console.log(lines)
      while (!pattern.test(lines[0])) {
        lines = lines.slice(1)
      };
      // console.log(lines.length)
      lines[lines.length - 1].length === 0 && lines.pop()
      lines.forEach(function (item, index, array) {
        let time = item.match(pattern) // 存前面的时间段
        let value = item.replace(pattern, '') // 存歌词
        // console.log(time)
        // console.log(value)
        time.forEach(function (item1, i1, a1) {
          var t = item1.slice(1, -1).split(':')
          // 测试
          // console.log(item1)
          // console.log(item1.slice(1, -1))
          // console.log(t)
          if (value !== '') {
            result.push([parseInt(t[0], 10) * 60 + parseFloat(t[1]), value])
          }
        })
      })
      // console.log(result)
      result.sort(function (a, b) {
        return a[0] - b[0]
      })
      // console.log(result)
      return result
    },
    //  解析播放时间
    formatSeconds (value) {
      let theTime = parseInt(value)
      let theTime1 = 0
      let theTime2 = 0
      if (theTime > 60) {
        theTime1 = parseInt(theTime / 60) // 分
        theTime = parseInt(theTime % 60) // 秒
        // 是否超过一个小时
        if (theTime1 > 60) {
          theTime2 = parseInt(theTime1 / 60) // 小时
          theTime1 = 60 // 分
        }
      }
      if (parseInt(theTime) < 10) {
        var result = '0:0' + parseInt(theTime) + ''
      } else {
        result = '0:' + parseInt(theTime) + ''
      }
      // 多少分钟时
      if (theTime1 > 0) {
        if (parseInt(theTime) < 10) {
          result = '0' + parseInt(theTime)
        } else {
          result = parseInt(theTime)
        }
        result = '0' + parseInt(theTime1) + ':' + result
      }
      // 多少小时时
      if (theTime2 > 0) {
        if (parseInt(theTime) < 10) {
          result = '0' + parseInt(theTime)
        } else {
          result = parseInt(theTime)
        }
        result = parseInt(theTime2) + ':' + parseInt(theTime1) + ':' + result
      }
      return result
    },
    // 鼠标事件
    down () {
      this.isDown = true
    },
    move (e) {
      if (this.isDown) {
        let curLength = this.$refs.curProgress.getBoundingClientRect().width
        let newLength = ((curLength + e.movementX) / this.progressLength) * 100
        if (newLength > 100) {
          newLength = 100
        } else if (newLength < 0) {
          newLength = 0
        }
        this.curLength = newLength
      }
    },
    //  松开鼠标
    up () {
      this.isDown = false
    },
    touchstart (e) {
      this.touchStartX = e.touches[0].pageX
    },
    touchmove (e) {
      if (!this.duration) {
        return false
      }
      let movementX = e.touches[0].pageX - this.touchStartX
      let curLength = this.$refs.curProgress.getBoundingClientRect().width
      //  计算出百分比
      let newPercent = ((curLength + movementX) / this.progressLength) * 100
      if (newPercent > 100) {
        newLength = 100
      }
      this.curLength = newPercent
      this.touchStartX = e.touches[0].pageX
      //  根据百分比推出对应的播放时间
      this.changeTime(newPercent)
    },
    changeTime (percent) {
      let newCurTime = this.duration * (percent * 0.01)
      this.$store.commit('setChangeTime', newCurTime)
    },
    // 上一首
    prev () {
      if (this.listIndex !== -1 && this.songsList.length > 1) {
        if (this.listIndex > 0) {
          this.$store.commit('setListIndex', this.listIndex - 1)
          this.toPlay(this.songsList[this.listIndex].id)
        } else {
          this.$store.commit('setListIndex', this.songsList.length - 1)
          this.toPlay(this.songsList[this.listIndex].id)
        }
      }
    },
    // 下一首
    next () {
      if (this.listIndex !== -1 && this.songsList.length > 1) {
        // console.log('下一首')
        if (this.listIndex < (this.songsList.length - 1)) {
          this.toPlay(this.songsList[this.listIndex + 1].id)
          this.$store.commit('setListIndex', this.listIndex + 1)
        } else {
          this.$store.commit('setListIndex', 0)
          this.toPlay(this.songsList[0].id)
        }
      }
    },
    // 选中播放
    toPlay (id) {
      if (id && id !== this.id) {
        this.$router.replace({path: '/player/' + id})
        this.$store.commit('setId', id)
        this.$store.commit('setIsPlay', false)
        this.getSongDetail()
      }
      this.showSongsList = false
    },
    // 返回
    goback (index) {
      this.$router.go(index)
    }
  }
}
</script>

<style scoped>
  @media screen and (min-width: 320px) {
    html {font-size: 16px;}
    body {font-size: 16px;}
  }
  @media screen and (min-width: 481px) and (max-width:640px) {
    html {font-size: 320px}
    body {font-size: 16px;}
  }
  @media screen and (min-width: 641px) {
    html {font-size: 640px;}
    body {font-size: 16px;}
  }
/*----------------------背景-----------------------------*/
.player {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0,0,0,0.7);
  z-index: -1;
}
.picbg {
  position: fixed;
  overflow: hidden;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -2;
  background-position: center top;
  background-size: cover;
  background-attachment: fixed;
  -webkit-filter: blur(30px);
  -moz-filter: blur(30px);
  -ms-filter: blur(30px);
  -o-filter: blur(30px);
  filter: blur(30px);
}
.picbg2 {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  background-color: rgba(0,0,0,0.2);
}
/*-------------------------header--------------------*/
.playing-header {
  height:60px;
  display: flex;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
}
.playing-header .playing-title {
  width: 80%;
  flex-grow: 1;
  color: white;
  text-align: center;
}
.playing-header .playing-title>p:nth-child(2) {
  font-size: 0.6em;
}
.playing-header .back,
.playing-header .forwarding {
  width: 35px;
}
.playing-header .icon {
  font-size: 2em;
}
.playing-header:after {
  content: '';
  position: fixed;
  left: 0;
  top: 60px;
  background: rgba(255,255,255,0.3);
  width: 100%;
  height: 1px;
  -webkit-transform: scaleY(0.5);
  transform: scaleY(0.5);
  -webkit-transform-origin: 0 0;
  transform-origin: 0 0;
}
/*-----------------------中间唱片-----------------------------*/
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-to {
  opacity: 0
}
.playing-body {
  height: 100%;
}
.playing-body .player-top {
  width: 20%;
  position: fixed;
  left: 45%;
  z-index: 20;
}
.pic-box {
  position: relative;
  display: flex;
  width: 70%;
  margin: 0 auto;
  border: 12px solid rgba(255,255,255,0.2);
  border-radius: 50%;
  text-align: center;
  top: 8%;
  justify-content: center;
  align-items: center;
}
.circle {
  animation:rotate 9.5s linear 0s normal none infinite;
}
@-webkit-keyframes rotate{
  from { -webkit-transform:rotate(0deg) }
  to { -webkit-transform:rotate(360deg) }
}
.pic-box>img {
  width: 75%;
  border-radius: 50%;
  margin: 13%;
}
.pic-box>div {
  position: absolute;
  background: url('../assets/img/coverall.png') no-repeat;
  background-size: 100%;
  width: 107%;
  height: 107%;
  border-radius: 50%;
}
/*----------------------第一行控件----------------------------------*/
.playing-item {
  height:60px;
  width: 100%;
  display: flex;
  position: absolute;
  bottom: 130px;
  left: 0;
  justify-content: center;
  align-items: center;
}
.playing-item>div {
  width: 30%;
  margin: 0 10%;
}
/*-----------------------------歌词-------------------------*/
.showLrc-box {
  position: absolute;
  top: 80px;
  bottom: 130px;
  width: 100%;
  overflow: hidden;
  transition: all 1s;
}
.showLrc-box ul{
  position: absolute;
  width:100%;
  text-align: center;
  font-size: 16px;
  line-height: 30px;
  transition: all 0.5s;
  color:rgba(155,155,155,0.7);
}
/*---------------------footer---------------------------*/
.playing-footer {
  position: fixed;
  width: 100%;
  bottom: 0;
}
/*-----------------------控制速度-----------*/
.playing-speed {
  height: 50px;
  display: flex;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
}
.playing-speed .current-time,
.playing-speed .left-time {
  width: 70px;
  text-align: center;
  font-size: 13px;
  color: #ffffff;
  top: -10px;
}
.playing-speed .progress-box {
  flex: 1;
}
.playing-speed .progress-box .progress {
  width: 100%;
  background: #ffffff;
  height: 2px;
}
.playing-speed .progress-box .cur-progress {
  width: 20%;
  height: 100%;
  background: #D23023;
}
.playing-speed>.progress-box .idot {
  width: 16px;
  height: 16px;
  position: relative;
  border-radius: 50%;
  background-color: #fff;
  top: -9px;
  vertical-align: middle;
}
/*------------------------控制播放---------------------------*/
.playing-butt {
  height: 80px;
  display: flex;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
}
.playing-butt>div {
  width: 30px;
  margin: 0 6%;
}
.playing-butt .icon {
  font-size: 2em;
}
.playing-butt>div:nth-child(1) .icon {
  font-size: 2.5em;
}
.playing-butt>div:nth-child(3) .icon{
  font-size: 3.3em;
  position: relative;
  left: -10px;
}
.playing-butt>div:nth-child(5) .icon {
  font-size: 1.8em;
}

</style>
