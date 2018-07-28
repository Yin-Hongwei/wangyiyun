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
.icon {
  width: 1em;
  height: 1em;
  fill: currentColor;
  color: white;
  font-size: 1.6em;
}
</style>
