<template>
  <div class="the-video">
    <the-header icon="#icon-shipin"/>
    <play-small :showIcon="true"/>
    <div class="kong"></div>
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
import { mixin } from '../mixins'
import axios from 'axios'
import TheHeader from '../components/TheHeader'
import PlaySmall from '../components/PlaySmall'
import TheFooter from '../components/TheFooter'

export default {
  name: 'videos',
  components: {
    TheHeader,
    PlaySmall,
    TheFooter
  },
  mixins: [mixin],
  data () {
    return {
      placeholder: '',
      videoTagList: [],
      videoList: []
    }
  },
  mounted () {
    this.getShowKeyword()
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
.kong {
  width: 100%;
  height: 55px;
}

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
