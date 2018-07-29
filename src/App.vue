<template>
  <div id="app">
    <song-audio/>
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
import SongAudio from './components/audio/SongAudio'
export default {
  components: {SongAudio},
  name: 'App',
  component: {
    SongAudio
  },
  data () {
    return {
      selected: 0
    }
  }
}
</script>

<style>
</style>
