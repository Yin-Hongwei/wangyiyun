'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = require('../utils');

var _color = require('../internal/mixins/color');

var _color2 = _interopRequireDefault(_color);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'mu-avatar',
  mixins: [_color2.default],
  props: {
    textColor: String,
    size: {
      type: [Number, String],
      default: 40
    }
  },
  render: function render(h) {
    var size = (0, _utils.getWidth)(this.size);
    return h('div', {
      staticClass: 'mu-avatar ' + this.getColorClass() + ' ' + this.getTextColorClass(),
      style: {
        width: size,
        height: size,
        'font-size': this.size / 2 + 'px',
        'background-color': this.getColor(this.color),
        'color': this.getColor(this.textColor)
      },
      on: this.$listeners
    }, [h('div', { class: 'mu-avatar-inner' }, this.$slots.default)]);
  }
};