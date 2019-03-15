'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ExpandTransition = require('../internal/ExpandTransition');

var _ExpandTransition2 = _interopRequireDefault(_ExpandTransition);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'mu-step-content',
  props: {
    active: Boolean,
    last: Boolean
  },
  render: function render(h) {
    return h('div', {
      staticClass: 'mu-step-content',
      class: {
        last: this.last
      },
      on: this.$listeners
    }, [h('div', {
      style: {
        position: 'relative',
        overflow: 'hidden',
        height: '100%'
      }
    }, [h(_ExpandTransition2.default, [this.active ? h('div', { staticClass: 'mu-step-content-inner', ref: 'inner' }, this.$slots.default) : undefined])])]);
  }
};