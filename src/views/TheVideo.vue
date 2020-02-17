<template>
  <div class="videos">
    <div class="video-head">
      <div class="shiping-icon">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-shipin"></use>
        </svg>
      </div>
      <span>
      <input type="text" placeholder="猜你喜欢，猜不到..."/>
      </span>
      <router-link to="/player">
        <div>
          <!-- <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-p7zhengzaibofangzhong"></use>
          </svg> -->
        </div>
      </router-link>
    </div>
    <div class="video-tags">
      <ul>
        <li v-for="(item, index) in videoTagList" :key="index">
          {{item.name}}
        </li>
      </ul>
    </div>
    <div class="video-content">
      这里还没有视频...
    </div>
    <the-footer/>
  </div>
</template>

<script>
import axios from 'axios'
import TheFooter from '../components/TheFooter'

export default {
  name: 'videos',
  components: {
    TheFooter
  },
  data () {
    return {
      videoTagList: [],
      videoList: []
    }
  },
  mounted () {
    this.getVideoTagList()
  },
  methods: {
    getVideoTagList () {
      let _this = this
      axios.get(_this.$store.state.HOST + '/video/group/list').then((res) => {
        this.videoTagList = res.data.data.slice(0, 10)
        // this.getVideoList(this.videoTagList[0].id)
      }
      ).catch(function (error) {
        console.log(error)
      })
    },
    getVideoList (id) {
      let _this = this
      console.log('id====>', id)
      axios.get(_this.$store.state.HOST + '/video/group?id=' + id).then((res) => {
        this.videoList = res.data.data
        console.log('video ====>', this.videoList)
      }
      ).catch(function (error) {
        console.log(error)
      })
    }
  }
}
</script>

<style scoped>
.video-head {
  width: 100%;
  height: 55px;
  background-color: #ffffff;
  color: white;
  line-height: 60px;
  display: flex;
  align-items: center;
}

.video-head span {
  flex-grow: 1;
}

.video-head input {
  height:28px;
  width: 100%;
  border-radius: 25px;
  border: 0;
  background-color:rgba(225, 225, 225,0.4);
  text-indent:30px;
}

::-webkit-input-placeholder { /* WebKit, Blink, Edge */
  color: rgba(150, 150, 150, 1);
}

.video-head div {
  margin-top: 5px;
  width: 40px;
  text-align: center;
  height: 50px;
}

.video-head .shiping-icon {
  color: rgb(33, 33, 33);
  font-size: 1.1em;
}
/*-----------------------------------------------------------------*/
.video-tags{
  overflow-x: auto;
}

.video-tags ul{
  display: flex;
  flex-wrap: nowrap;
  padding: 0 5px;
}

.video-tags ul li {
  padding: 0 8px;
  line-height: 40px;
  white-space:nowrap;
  display: inline-block;
  border-bottom: 1px solid rgb(150, 150, 150);
}

.video-content {
  text-align: center;
  margin-top: 100px;
}

.icon {
  font-size: 25px;
}
</style>
