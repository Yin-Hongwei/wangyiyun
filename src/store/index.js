import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    HOST: 'http://123.207.59.80:3000',
    playing: {
      id: null, // 音乐ID
      picUrl: null, // 歌曲图片
      title: '', //  歌名
      artist: '', //  歌手名
      curTime: 0, // 当前音乐的播放时刻
      songsList: [], // 当前歌单列表
      isPlay: false, // 播放状态
      playButtonUrl: '#icon-bofang', // 播放状态小图标
      listIndex: -1 // 当前歌曲在歌曲列表的位置
    }
  },
  getters: {
    id: state => state.playing.id,
    picUrl: state => state.playing.picUrl,
    title: state => state.playing.title,
    artist: state => state.playing.artist,
    curTime: state => state.playing.curTime,
    songsList: state => state.playing.songList,
    listIndex: state => state.playing.listIndex,
    isPlay: state => state.playing.isPlay,
    playButtonUrl: state => state.playing.playButtonUrl
  },
  mutations: {
    setId: (state, id) => { state.playing.id = id },
    setpicUrl: (state, picUrl) => { state.playing.picUrl = picUrl },
    setTitle: (state, title) => { state.playing.title = title },
    setArtist: (state, artist) => { state.playing.artist = artist },
    setCurTime: (state, curTime) => { state.playing.curTime = curTime },
    setSongList: (state, songsList) => { state.playing.songList = songsList },
    setListIndex: (state, listIndex) => { state.playing.listIndex = listIndex },
    setIsPlay: (state, isPlay) => { state.playing.isPlay = isPlay },
    setPlayButtonUrl: (state, playButtonUrl) => { state.playing.playButtonUrl = playButtonUrl }
  }
})
export default store
