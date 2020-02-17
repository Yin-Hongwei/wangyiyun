<template>
  <div class="player">
    <!--标题栏-->
    <div class="playing-header">
      <!--返回-->
      <div class="back" @click="goback(-1)">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-fanhui01"></use>
        </svg>
      </div>
      <!--标题-->
      <div class="playing-title">
        <p>{{title}}</p>
        <p>{{artist}}</p>
      </div>
      <!--分享-->
      <div class="forwarding">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-zhuanfa"></use>
        </svg>
      </div>
    </div>
    <!--唱片-->
    <transition name="fade">
      <div class="playing-body" v-if="!showLrc" @click="showLrc = true">
        <img class='player-top ' :class="{pause: isPlay}" src="../assets/img/swith.png" alt="">
        <div class="pic-box" :class="isPlay ? 'circle ' : ''">
          <img :src="picUrl" alt="" class="album-pic">
          <div></div>
        </div>
        <!--第一行控件-->
        <div class="playing-item">
          <!--收藏-->
          <div>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-shoucang"></use>
            </svg>
          </div>
          <!--下载-->
          <div>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-xiazai"></use>
            </svg>
          </div>
          <!--评论-->
          <div>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-pinglunguanli"></use>
            </svg>
          </div>
          <!--编辑-->
          <div>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-sandiancaidan"></use>
            </svg>
          </div>
        </div>
      </div>
    </transition>
    <!--歌词-->
    <transition name="fade">
        <div v-show="showLrc" class="showLrc-box" @click="showLrc = false">
          <ul v-show="lrc.length" v-bind:style="{top:lrcTop}" class="lrc">
            <li v-for="(item, index) in lrc" :key="index">
              {{ item[1] }}
            </li>
          </ul>
          <!--没歌词的情况-->
          <ul v-show="!lrc.length" style="margin-top:40%;">
            <span class="no-lrc">暂无歌词</span>
          </ul>
        </div>
    </transition>
    <!--歌词 end -->
    <div class="playing-footer">
      <div class="playing-speed">
        <!--播放开始时间-->
        <div class="current-time">{{ nowTime }}</div>
        <div class="progress-box">
          <div ref="progress" class="progress">
            <!--进度条-->
            <div ref="curProgress" class="cur-progress" :style="{width: curLength+'%'}"></div>
            <!--进度条 end -->
            <!--拖动的点点-->
            <div class="idot" :style="{left: curLength+'%'}" @touchstart="touchstart" @touchmove="touchmove"></div>
            <!--拖动的点点 end -->
          </div>
        </div>
        <!--播放结束时间-->
        <div class="left-time">{{ songTime }}</div>
      </div>
      <!--最底层控件-->
      <div class="playing-butt">
        <!--模式-->
          <div>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-icon-test"></use>
            </svg>
          </div>
        <!--上一首-->
          <div @click="prev">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-shangyishou"></use>
            </svg>
          </div>
        <!--播放-->
          <div @click="togglePlay">
            <svg class="icon" aria-hidden="true">
              <use :xlink:href="playButtonUrl"></use>
            </svg>
          </div>
        <!--下一首-->
          <div @click="next">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-xiayishouxianxing"></use>
            </svg>
          </div>
        <!--选择-->
          <div>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-mulu"></use>
            </svg>
          </div>
      </div>
    </div>
    <!--背景-->
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
      showLrc: false, // 切换唱片和歌词
      lrcTop: 200 + 'px', // 歌词滑动
      nowTime: '00.00', // 播放开始时间
      songTime: '00.00', // 播放结束时间
      curLength: 0, // 进度条的位置
      progressLength: 0, // 进度条长度
      touchStartX: 0 // 拖拽开始位置
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
      // 移动进度条
      this.curLength = (this.curTime / this.duration) * 100
      // 处理歌词位置及颜色
      if (this.lrc.length !== 0) {
        for (var i = 0; i < this.lrc.length; i++) {
          if (this.curTime >= this.lrc[i][0]) {
            for (var j = 0; j < this.lrc.length; j++) {
              document.querySelectorAll('.lrc li')[j].style.color = 'rgba(165,165,165,0.7)'
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
    // 获取进度条的长度
    this.progressLength = this.$refs.progress.getBoundingClientRect().width
    // 调用歌曲
    if (this.$route.params.id && this.id !== this.$route.params.id) {
      this.$store.commit('setId', this.$route.params.id)
      this.getSongDetail()
    }
  },
  methods: {
    // 控制音乐播放/暂停
    togglePlay () {
      if (this.isPlay) {
        this.$store.commit('setIsPlay', false)
      } else {
        this.$store.commit('setIsPlay', true)
      }
    },
    // 获取歌曲详情
    getSongDetail () {
      let _this = this
      axios.get(_this.$store.state.HOST + '/song/detail', {
        params: {
          ids: _this.id
        }
      }).then(function (res) {
        // console.log('<---歌曲详情--->')
        // console.log(res.data)
        _this.getLyric()
        _this.$store.commit('setTitle', res.data.songs[0].name)
        _this.$store.commit('setArtist', res.data.songs[0].ar[0].name)
        _this.$store.commit('setpicUrl', res.data.songs[0].al.picUrl)
        window.sessionStorage.setItem('picUrl', JSON.stringify(res.data.songs[0].al.picUrl))
      })
    },
    // 获取歌词
    getLyric () {
      let _this = this
      axios.get(_this.$store.state.HOST + '/lyric', {
        params: {
          id: _this.id
        }
      }).then(function (res) {
        let lrc = _this.parseLyric(res.data.lrc.lyric)
        _this.$store.commit('setLyric', res.data.lrc.lyric)
        _this.$store.commit('setLrc', lrc)
        console.log('<---歌词--->')
        console.log(res.data)
        // console.log(lrc)
      }).catch(function (error) {
        console.log(error)
      })
    },
    // 处理歌词，按行保存到数组
    parseLyric (text) {
      var lines = text.split('\n')
      var pattern = /\[\d{2}:\d{2}.(\d{3}|\d{2})\]/g
      var result = []
      while (!pattern.test(lines[0])) {
        lines = lines.slice(1)
      };
      lines[lines.length - 1].length === 0 && lines.pop()
      lines.forEach(function (item) {
        let time = item.match(pattern) // 存前面的时间段
        let value = item.replace(pattern, '') // 存歌词
        // console.log(time) // 时间
        // console.log(value) // 歌词数据
        time.forEach(function (item1) {
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
      result.sort(function (a, b) {
        return a[0] - b[0]
      })
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
      // 多少秒
      if (parseInt(theTime) < 10) {
        var result = '0:0' + parseInt(theTime)
      } else {
        result = '0:' + parseInt(theTime)
      }
      // 多少分钟时
      if (theTime1 > 0) {
        if (parseInt(theTime) < 10) {
          result = '0' + parseInt(theTime)
        } else {
          result = parseInt(theTime)
        }
        result = parseInt(theTime1) + ':' + result
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
    //  拖拽开始
    touchstart (e) {
      // console.log(e.touches[0])
      this.touchStartX = e.touches[0].pageX
    },
    //  拖拽ing
    touchmove (e) {
      if (!this.duration) {
        return false
      }
      // console.log(e.touches)
      let movementX = e.touches[0].pageX - this.touchStartX
      // console.log(movementX)
      let curLength = this.$refs.curProgress.getBoundingClientRect().width
      //  计算出百分比
      let newPercent = ((curLength + movementX) / this.progressLength) * 100
      if (newPercent > 100) {
        newPercent = 100
      }
      this.curLength = newPercent
      this.touchStartX = e.touches[0].pageX
      //  根据百分比推出对应的播放时间
      this.changeTime(newPercent)
    },
    // 更改歌曲进度
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
        this.getSongDetail()
      }
    },
    // 返回
    goback (index) {
      this.$router.go(index)
    }
  }
}
</script>

<style scoped>
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
  position: relative;
  z-index: 10;
}
.playing-header .playing-title {
  width: 80%;
  flex-grow: 1;
  color: white;
  text-align: center;
}
.playing-header .playing-title > p:nth-child(2) {
  font-size: 0.6em;
}
.playing-header .back,
.playing-header .forwarding {
  width: 35px;
}
.playing-header .icon {
  font-size: 2em;
}
/*-----------------------中间唱片-----------------------------*/
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-to {
  opacity: 0
}
.playing-body {
  height: 90%;
  width: 100%;
  position: absolute;
  overflow: hidden;
}
.player-top {
  width: 90px;
  height: 130px;
  position: absolute;
  top:-15px;
  left: 45%;
  z-index: 5;
  transition:all 0.3s;
  transform-origin:14px 16px;
}
.pause{
  transform: rotateZ(-30deg);
}
.pic-box {
  position: relative;
  display: flex;
  width: 40vh;
  height: 40vh;
  margin: 0 auto;
  border: 12px solid rgba(255,255,255,0.2);
  border-radius: 50%;
  text-align: center;
  top: 8%;
  justify-content: center;
  align-items: center;
}
.circle {
  animation:rotate 16s linear infinite 0.1s;
}
@-webkit-keyframes rotate{
  0%{
    transform: rotate(0)
  }
  50%{
    transform: rotate(180deg)
  }
  100%{
    transform: rotate(360deg)
  }
}
.pic-box>img {
  width: 40vh;
  height: 40vh;
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
  padding-bottom: 10px;
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
  /*width: 20%;*/
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
.icon {
  color: #ffffff;
}
</style>
