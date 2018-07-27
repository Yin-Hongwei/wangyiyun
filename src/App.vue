<template>
  <div id="app">
    <song-audio/>
    <router-view/>
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
*{
  margin: 0;
  padding: 0;
}
body{
  background-color: #fcfdfe;
}
ul {
  list-style: none;
}
</style>
