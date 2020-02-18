import axios from 'axios'

export const mixin = {
  methods: {
    getShowKeyword () {
      let _this = this
      axios.get(_this.$store.state.HOST + '/search/default')
        .then(function (res) {
          _this.placeholder = res.data.data.showKeyword
        })
        .catch(function (error) {
          console.log(error)
        })
    },
    getPath (path) {
      switch (path) {
        case 'search':
          this.$router.push({path: '/search'})
          break
        case 'play':
          this.$router.push({path: '/player'})
          break
      }
    }
  }
}
