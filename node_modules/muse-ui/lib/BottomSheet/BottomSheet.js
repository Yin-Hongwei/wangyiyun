'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _popup = require('../internal/mixins/popup');

var _popup2 = _interopRequireDefault(_popup);

var _transitions = require('../internal/transitions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'mu-bottom-sheet',
  mixins: [_popup2.default],
  render: function render(h) {
    return h(_transitions.BottomSheetTransition, [this.open ? h('div', {
      staticClass: 'mu-bottom-sheet',
      style: {
        'z-index': this.zIndex
      }
    }, this.$slots.default) : undefined]);
  }
};