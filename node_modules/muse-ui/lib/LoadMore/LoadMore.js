'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _RefreshControl = require('./RefreshControl');

var _RefreshControl2 = _interopRequireDefault(_RefreshControl);

var _InfiniteScroll = require('./InfiniteScroll');

var _InfiniteScroll2 = _interopRequireDefault(_InfiniteScroll);

var _utils = require('../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'mu-load-more',
  props: _extends({
    refreshing: Boolean
  }, _InfiniteScroll2.default.props, {
    loadedAll: Boolean
  }),
  data: function data() {
    return {
      trigger: null
    };
  },
  mounted: function mounted() {
    this.trigger = this.$el;
  },
  render: function render(h) {
    var _this = this;

    return h('div', {
      staticClass: 'mu-load-more'
    }, [(0, _utils.isNotNull)(this.$listeners.refresh) ? h(_RefreshControl2.default, {
      props: {
        refreshing: this.refreshing,
        trigger: this.trigger
      },
      on: {
        refresh: function refresh() {
          return _this.$emit('refresh');
        }
      }
    }) : undefined, this.$slots.default, (0, _utils.isNotNull)(this.$listeners.load) && !this.loadedAll ? h(_InfiniteScroll2.default, {
      props: {
        loading: this.loading,
        loadingText: this.loadingText
      },
      on: {
        load: function load() {
          return _this.$emit('load');
        }
      }
    }) : undefined]);
  }
};