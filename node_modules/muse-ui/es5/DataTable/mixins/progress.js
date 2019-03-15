import { LinearProgress } from '../../Progress';
import { FadeTransition } from '../../internal/transitions';

export default {
  mounted: function mounted() {},

  methods: {
    createProgress: function createProgress(h) {
      var headerHeight = this.$refs.header ? this.$refs.header.offsetHeight + 'px' : '';
      return h(FadeTransition, {}, [this.loading ? h(LinearProgress, {
        staticClass: 'mu-table-progress',
        style: {
          top: headerHeight
        }
      }) : undefined]);
    }
  }
};