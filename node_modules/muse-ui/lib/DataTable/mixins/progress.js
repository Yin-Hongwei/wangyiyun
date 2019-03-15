'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Progress = require('../../Progress');

var _transitions = require('../../internal/transitions');

exports.default = {
  mounted: function mounted() {},

  methods: {
    createProgress: function createProgress(h) {
      var headerHeight = this.$refs.header ? this.$refs.header.offsetHeight + 'px' : '';
      return h(_transitions.FadeTransition, {}, [this.loading ? h(_Progress.LinearProgress, {
        staticClass: 'mu-table-progress',
        style: {
          top: headerHeight
        }
      }) : undefined]);
    }
  }
};