<template>
  <div class="search">
    <div class="search-head">
      <input type="text" placeholder="猜你喜欢，猜不到..."/>
      <div class="search-cancel" @click="goback(-1)">取消</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'search',
  methods: {
    goback: function (index) {
      this.$router.go(index)
    }
  }
}
</script>

<style scoped>
.search-head {
  height: 40px;
  background-color: #d7463f;
  display: flex;
  flex-grow: 1;
  padding-top: 18px;
  color: white;
}
.search-head input {
  height:28px;
  width: 85%;
  border-radius: 25px;
  border: 0;
  margin-left: 10px;
  background-color:rgba(225, 225, 225,0.4);
  text-indent:30px;
}
::-webkit-input-placeholder { /* WebKit, Blink, Edge */
  color: rgba(255,255,255,0.6);
}
.search-cancel {
  width: 50px;
  text-align: center;
}
/**/
</style>
