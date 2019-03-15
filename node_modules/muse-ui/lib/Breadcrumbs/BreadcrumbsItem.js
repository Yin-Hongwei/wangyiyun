'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _route = require('../internal/mixins/route');

var _route2 = _interopRequireDefault(_route);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'mu-breadcrumbs-item',
  mixins: [_route2.default],
  props: {
    disabled: Boolean
  },
  render: function render(h) {
    var props = this.to ? this.generateRouteProps() : {};
    return h('li', {
      staticClass: 'mu-breadcrumbs-item',
      class: this.disabled ? 'is-disbaled' : ''
    }, [h(this.to ? 'router-link' : 'a', {
      props: props
    }, this.$slots.default)]);
  }
};