<template>
  <div id="app">
    <song-audio/>
    <!--<keep-alive>-->
      <router-view/>
    <!--</keep-alive>-->
  </div>
</template>

<script>
import SongAudio from './components/SongAudio'

export default {
  name: 'App',
  components: {
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
