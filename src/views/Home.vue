<template>
  <div class="hello">
    <header-item/>
    <div class="redBac"></div>
    <swipe-pic/>
    <div class="tags">
      <img src="../assets/img/IMG_4224_01.jpg"/>
      <img src="../assets/img/IMG_4224_02.jpg"/>
      <img src="../assets/img/IMG_4224_03.jpg"/>
      <img src="../assets/img/IMG_4224_04.jpg"/>
    </div>
    <hr>
    <find/>
    <footer-item/>
  </div>
</template>

<script>
import Find from '../components/Home/Find'
import HeaderItem from '../components/head/Header'
import FooterItem from '../components/foot/Footer'
import SwipePic from '../components/swipe/Swipe'
export default {
  name: 'home',
  components: {
    Find,
    HeaderItem,
    FooterItem,
    SwipePic
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.redBac{
  /*background-color: #d73e39;*/
  width: 100%;
  height: 200px;
}
.tags{
  margin-top:10%;
  width: 100%;
}
.tags>img{
  width: 25%;
  float: left;
}
</style>
