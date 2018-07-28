import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    HOST: 'http://123.207.59.80:3000',
    headIndex: 0,
    page: 'find',
    playing: {
      isPlay: false, // 播放状态
      playButtonUrl: '#icon-bofang', // 播放状态的图标
      songsList: [], // 当前歌单列表
      id: null, // 音乐ID
      url: '', // 歌曲URL
      duration: 0, //  音乐时长
      curTime: 0, // 当前音乐的播放位置
      changeTime: 0, //  指定播放时刻
      title: '', //  歌名
      artist: '', //  歌手名
      picUrl: null, // 歌曲图片
      autoNext: true, // 用于触发自动播放下一首
      //
      lyric: '', // 未处理的歌词数据
      lrc: [], //  处理的歌词数据
      listIndex: -1 // 当前歌曲在歌曲列表的位置
    }
  },
  getters: {
    headIndex: state => state.headIndex,
    page: state => state.page,
    id: state => state.playing.id,
    artist: state => state.playing.artist,
    isPlay: state => state.playing.isPlay,
    title: state => state.playing.title,
    url: state => state.playing.url,
    lyric: state => state.playing.lyric,
    lrc: state => state.playing.lrc,
    songsList: state => state.playing.songsList,
    playButtonUrl: state => state.playing.playButtonUrl,
    picUrl: state => state.playing.picUrl,
    curTime: state => state.playing.curTime,
    duration: state => state.playing.duration,
    changeTime: state => state.playing.changeTime,
    listIndex: state => state.playing.listIndex,
    autoNext: state => state.playing.autoNext
  },
  mutations: {
    setHheadIndex: (state, headIndex) => { state.headIndex = headIndex },
    setPage: (state, page) => { state.page = page },
    setId: (state, id) => { state.playing.id = id },
    setUrl: (state, url) => { state.playing.url = url },
    setTitle: (state, title) => { state.playing.title = title },
    setArtist: (state, artist) => { state.playing.artist = artist },
    setIsPlay: (state, isPlay) => { state.playing.isPlay = isPlay },
    setPlayButtonUrl: (state, playButtonUrl) => { state.playing.playButtonUrl = playButtonUrl },
    setLyric: (state, lyric) => { state.playing.lyric = lyric },
    setpicUrl: (state, picUrl) => { state.playing.picUrl = picUrl },
    setCurTime: (state, curTime) => { state.playing.curTime = curTime },
    setDuration: (state, duration) => { state.playing.duration = duration },
    setChangeTime: (state, changeTime) => { state.playing.changeTime = changeTime },
    setLrc: (state, lrc) => { state.playing.lrc = lrc },
    setSongsList: (state, songsList) => { state.playing.songsList = songsList },
    pushSongsList: (state, song) => { state.playing.songsList.unshift(song) },
    setListIndex: (state, listIndex) => { state.playing.listIndex = listIndex },
    setAutoNext: (state, autoNext) => { state.playing.autoNext = autoNext }
  }
})
export default store
