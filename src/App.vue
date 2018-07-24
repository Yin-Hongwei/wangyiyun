<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App',
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
