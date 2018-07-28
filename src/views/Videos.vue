<template>
  <div class="videos">
    <div class="video-head">MV</div>
    <foot/>
  </div>
</template>

<script>
import Foot from '../components/foot/Footer'
export default {
  name: 'videos',
  components: {
    Foot
  }
}
</script>

<style scoped>
.video-head {
  width: 100%;
  height: 60px;
  text-align: center;
  background-color: #d7463f;
  color: white;
  line-height: 60px;
}
</style>
