<template>
  <div class="playing">
    <div class="playing-header">
      <div class="back">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-fanhui"></use>
        </svg>
      </div>
      <div class="playing-title"></div>
      <div class="forwarding">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-zhuanfa"></use>
        </svg>
      </div>
    </div>
    <div class="playing-body">
      <img class='player-top' src="../assets/img/player-needle.png" alt="">
      <div class="pic-box" :style='{"animation": (isPlay?" 25s linear 0s normal none infinite rotate":"none")}'>
        <img :src="picUrl" alt="" class="album-pic">
        <div></div>
      </div>
    </div>
    <div class="playing-footer">
      <div class="playing-opt">
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
            <use xlink:href="#icon-pinglun"></use>
          </svg>
        </div>
        <div>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-sandiancaidan"></use>
          </svg>
        </div>
      </div>
      <div class="playing-speed">
        <div class="current-time">{{ nowTime }}</div>
        <div class="progress-box">
          <div ref="progress" class="progress">
            <div ref="curProgress" class="cur-progress" :style="{width: curLength+'%'}"></div>
            <div class="idot" :style="{left: curLength+'%'}"></div>
          </div>
        </div>
        <div class="left-time">{{ songTime }}</div>
      </div>
      <div class="playing-butt">
          <div>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-xunhuanbofang01"></use>
            </svg>
          </div>
          <div>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-shangyishou"></use>
            </svg>
          </div>
          <div @click="togglePlay">
            <svg class="icon" aria-hidden="true">
              <use :xlink:href="playButtonUrl"></use>
            </svg>
          </div>
          <div>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-next1"></use>
            </svg>
          </div>
          <div>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-mulu"></use>
            </svg>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { mapGetters } from 'vuex'
export default {
  name: 'playing',
  data () {
    return {
      curLength: 0,
      nowTime: '00.00',
      songTime: '00.00',
      progressLength: 0
    }
  },
  watch: {
    isPlay: function (val) {
      if (val) {
        this.$store.commit('setPlayButtonUrl', '#icon-zanting1')
      } else {
        this.$store.commit('setPlayButtonUrl', '#icon-bofang')
      }
    },
    curTime: function () {
      this.nowTime = this.formatSeconds(this.curTime)
      this.songTime = this.formatSeconds(this.duration - this.curTime)
      this.curLength = (this.curTime / this.duration) * 100
      if (this.lrc.length !== 0) {
        for (var i = 0; i < this.lrc.length; i++) {
          if (this.curTime >= this.lrc[i][0]) {
            for (var j = 0; j < this.lrc.length; j++) {
              document.querySelectorAll('.lrc li')[j].style.color = 'rgba(145,145,145,0.5)'
            }
            if (i >= 0) {
              this.lrcTop = -i * 31 + 180 + 'px'
              document.querySelectorAll('.lrc li')[i].style.color = '#ffffff'
            }
          }
        }
      }
    }
  },
  computed: {
    ...mapGetters([
      'picUrl',
      'curTime',
      'isPlay',
      'playButtonUrl'
    ])
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
    //  暂停\播放
    togglePlay () {
      if (this.isPlay) {
        this.$store.commit('setIsPlay', false)
      } else {
        this.$store.commit('setIsPlay', true)
      }
    },
    //  解析时间
    formatSeconds (value) {
      var theTime = parseInt(value)
      var theTime1 = 0
      var theTime2 = 0
      if (theTime > 60) {
        theTime1 = parseInt(theTime / 60)
        theTime = parseInt(theTime % 60)
        if (theTime1 > 60) {
          theTime2 = parseInt(theTime1 / 60)
          theTime1 = parseInt(theTime1 % 60)
        }
      }
      if (parseInt(theTime) < 10) {
        var result = '0:0' + parseInt(theTime) + ''
      } else {
        result = '0:' + parseInt(theTime) + ''
      }
      if (theTime1 > 0) {
        if (parseInt(theTime) < 10) {
          result = '0' + parseInt(theTime)
        } else {
          result = parseInt(theTime)
        }
        result = '0' + parseInt(theTime1) + ':' + result
      }
      return result
    },
    getLyric () {
      this.$store.commit('setLyric', [])
      this.$store.commit('setLrc', [])
      if (!this.id) {
        return false
      }
      var _this = this
      axios.get(this.host + '/lyric', {
        params: {
          id: _this.id
        }
      }).then(function(res) {
        console.log('获取歌词：')
        console.log(res.data)
        var lrc = _this.parseLyric(res.data.lrc.lyric)
        _this.$store.commit('setLyric', res.data.lrc.lyric)
        _this.$store.commit('setLrc', lrc)
      })
    },
    getSongDetail () {
      var _this = this
      axios.get(this.host + '/song/detail', {
        params: {
          ids: _this.id
        }
      }).then(function (res) {
        console.log('获取歌曲详情：')
        console.log(res.data.songs[0])
        _this.getLyric()
        _this.$store.commit('setpicUrl', res.data.songs[0].al.picUrl)
        _this.$store.commit('setTitle', res.data.songs[0].name)
        _this.$store.commit('setArtist', res.data.songs[0].ar[0].name)
      })
    },
    toPlay (id) {
      if (id && id !== this.id) {
        this.$router.replace({path: '/player/' + id})
        this.$store.commit('setId', id)
        this.$store.commit('setIsPlay', false)
        this.getSongDetail()
      }
      this.showSongsList = false
    }
  }
}
</script>

<style scoped>
/*----------------------背景-----------------------------*/
.playing {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0,0,0,0.6);
  z-index: -1;
}
/*-------------------------header--------------------*/
.playing-header {
  height:60px;
}
.playing-header>.playing-title {
  width: 80%;
  flex-grow: 1;
}
.playing-header>.back,
.playing-header>.forwarding {
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
/*-----------------------body-----------------------------*/
.playing-body {
  position: relative;
  height:380px;
}
.playing-body>.player-top {
  width: 20%;
  position: fixed;
  left: 45%;
  z-index: 20;
}
.playing-body>.pic-box {
  position: relative;
  width: 70%;
  height: 0;
  padding-bottom: 70%;
  border-radius: 50%;
  border: 10px solid rgba(255,255,255,0.2);
  margin: 0 auto;
  top: 14%;
  text-align: center;
}
.playing-body>.pic-box>div {
  position: absolute;
  width: 105%;
  height: 105%;
  border-radius: 50%;
  overflow: hidden;
  top: -3px;
  left: -3px;
  background: url('../assets/img/coverall.png') no-repeat;
  background-position: -5px -7px;
  background-size: 102%;
  z-index:10;
}
/*---------------------footer---------------------------*/
.playing-footer {
  position: fixed;
  width: 100%;
  bottom: 0;
}
.playing-footer>.playing-opt {
  height:60px;
}
.playing-footer>.playing-opt>div {
  width: 35px;
  margin: 0 6%;
}
/*--------第二行控件-----------*/
.playing-footer>.playing-speed {
  height: 50px;
}
.playing-footer>.playing-speed>.current-time,
.playing-footer>.playing-speed>.left-time {
  width: 70px;
  text-align: center;
  font-size: 13px;
  color: #ffffff;
  top: -10px;
}
.playing-footer>.playing-speed>.progress-box {
  flex: 1;
}
.playing-footer>.playing-speed>.progress-box .progress {
  width: 100%;
  background: #ffffff;
  height: 2px;
}
.playing-footer>.playing-speed>.progress-box .cur-progress {
  width: 20%;
  height: 100%;
  background: #D23023;
}
.playing-footer>.playing-speed>.progress-box .idot {
  width: 16px;
  height: 16px;
  position: relative;
  border-radius: 50%;
  background-color: #fff;
  top: -9px;
  vertical-align: middle;
}
/*--------第三行控件-----------*/
.playing-footer>.playing-butt {
  height: 80px;
}
.playing-footer>.playing-butt>div {
  width: 30px;
  margin: 0 6%;
}
.playing-footer>.playing-butt .icon {
  font-size: 2em;
}
.playing-footer .playing-butt>div:nth-child(3) .icon{
  font-size: 3.3em;
  position: relative;
  left: -10px;
}
/*------------------------共性---------------------------------*/
.playing-header,
.playing-footer>.playing-opt,
.playing-footer>.playing-speed,
.playing-footer>.playing-butt {
  display: flex;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
}
.icon {
  width: 1em;
  height: 1em;
  fill: currentColor;
  overflow: hidden;
  color: white;
  font-size: 1.6em;
}
</style>
