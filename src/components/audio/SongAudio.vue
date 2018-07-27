<template>
  <div class="song-audio">
    <audio :src="url" controls="controls" id="player" preload="true"  @canplay="startPlay" @timeupdate="timeupdate" @ended="ended">
    </audio>
  </div>
</template>

<script>
import axios from 'axios'
import { mapGetters } from 'vuex'
export default {
  name: 'song-audio',
  computed: {
    ...mapGetters([
      'id', // 音乐id
      'url', // 音乐链接
      'songsList', // 存放的音乐
      'isPlay', // 播放状态
      'curTime' // 当前音乐的播放位置
      // 'changeTime'
      // 'autoNext'
    ])
  },
  watch: {
    // 得到id
    id: function () {
      this.getSong()
    },
    // 监听播放还是暂停
    isPlay: function () {
      this.togglePlay()
    }
    // changeTime: function () {
    //   //  跳到指定时刻播放
    //   var player = document.querySelector('#player')
    //   player.currentTime = this.changeTime
    // }
  },
  methods: {
    // 得到id后获取歌曲
    getSong () {
      let _this = this
      this.$store.commit('setCurTime', 0)
      this.$store.commit('setIsPlay', false)
      axios.get(this.$store.state.HOST + '/music/url', {
        params: {
          id: _this.id
        }
      }).then(function (res) {
        // console.log('获取歌曲信息：')
        console.log(res.data)
        if (!res.data.data[0].url) {
          _this.$store.commit('setUrl', '')
          return false
        }
        _this.$store.commit('setUrl', res.data.data[0].url)
      })
    },
    //  开始/暂停
    togglePlay () {
      let player = document.querySelector('#player')
      if (this.isPlay) {
        player.play()
      } else {
        player.pause()
      }
    },
    // 获取歌曲链接后准备播放
    startPlay () {
      let player = document.querySelector('#player')
      //  记录音乐时长
      this.$store.commit('setDuration', player.duration)
      //  开始播放
      player.play()
      this.$store.commit('setIsPlay', true)
    },
    // 音乐播放时记录音乐的播放位置
    timeupdate () {
      let player = document.querySelector('#player')
      this.$store.commit('setCurTime', player.currentTime)
    },
    // 音乐播放结束时触发
    ended () {
      this.$store.commit('setIsPlay', false)
      this.$store.commit('setCurTime', 0)
      this.$store.commit('setAutoNext', !this.autoNext)
    }
  }
}
</script>

<style>
  #player {
    display: none;
  }
</style>
