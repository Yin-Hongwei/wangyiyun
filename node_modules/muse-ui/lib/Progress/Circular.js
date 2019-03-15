'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _color = require('../internal/mixins/color');

var _color2 = _interopRequireDefault(_color);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  mixins: [_color2.default],
  props: {
    size: {
      type: Number,
      default: 24
    },
    color: {
      type: String,
      default: ''
    },
    borderWidth: {
      type: Number,
      default: 3
    }
  },
  render: function render(h) {
    return h('div', {
      staticClass: 'mu-circle-wrapper active',
      style: {
        width: this.size + 'px',
        height: this.size + 'px'
      }
    }, [h('div', {
      staticClass: 'mu-circle-spinner active ' + this.getColorClass(),
      style: {
        'border-color': this.getColor(this.color)
      }
    }, [h('div', { staticClass: 'mu-circle-clipper left' }, [h('div', { staticClass: 'mu-circle', style: { 'border-width': this.borderWidth + 'px' } })]), h('div', { staticClass: 'mu-circle-gap-patch' }, [h('div', { staticClass: 'mu-circle' })]), h('div', { staticClass: 'mu-circle-clipper right' }, [h('div', { staticClass: 'mu-circle', style: { 'border-width': this.borderWidth + 'px' } })])])]);
  }
};