<template>
  <div class="footer-item">
    <div class="kong"></div>
    <div id="opt">
      <div id="find" @click="gofind">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-wangyiyunyinle"></use>
        </svg>
        <p>发现</p>
      </div>
      <div id="video" @click="govideo">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-shiping"></use>
        </svg>
        <p>视频</p>
      </div>
      <div id="my" @click="gomy">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-yinyue"></use>
        </svg>
        <p>我的</p>
      </div>
      <div id="friend" @click="gofriend">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-pengyou"></use>
        </svg>
        <p>朋友</p>
      </div>
      <div id="account" @click="goaccount">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-zhanghaoguanli"></use>
        </svg>
        <p>账号</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'footer-item',
  computed: {
    ...mapGetters([
      'page'
    ])
  },
  mounted: function () {
    this.nextPage()
  },
  methods: {
    nextPage: function () {
      let i = this.page
      // console.log(i)
      document.getElementById(i).style.color = '#d73e39'
      document.getElementById(i).getElementsByClassName('icon')[0].style.color = '#d73e39'
    },
    gofind: function () {
      this.$store.commit('setPage', 'find')
      this.$router.push({path: '/'})
    },
    govideo: function () {
      this.$store.commit('setPage', 'video')
      this.$router.push({path: '/videos'})
    },
    gomy: function () {
      this.$store.commit('setPage', 'my')
      this.$router.push({path: '/my'})
    },
    gofriend: function () {
      this.$store.commit('setPage', 'friend')
      this.$router.push({path: '/friends'})
    },
    goaccount: function () {
      this.$store.commit('setPage', 'account')
      this.$router.push({path: '/account'})
    }
  }
}
</script>

<style scoped>
.kong{
  width: 100%;
  height: 60px;
}
#opt{
  width: 100%;
  height: 60px;
  position: fixed;
  display: flex;
  justify-content: center;
  bottom: 0;
  background-color: #eceae8;
  align-items: center;
}
#opt div{
  width: 20%;
  height: 50px;
  color: #a5a5a5;
  text-align: center;
}
  /**/
.icon {
  width: 1em;
  height: 1em;
  fill: currentColor;
  color: #a5a5a5;
  font-size: 1.6em;
}
</style>
