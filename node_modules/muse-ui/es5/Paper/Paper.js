function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import { convertClass } from '../utils';

export default {
  name: 'mu-paper',
  functional: true,
  props: {
    circle: Boolean,
    rounded: {
      type: Boolean,
      default: true
    },
    zDepth: {
      type: Number,
      default: 0,
      validator: function validator(val) {
        return val >= 0 && val < 25;
      }
    }
  },
  render: function render(h, _ref) {
    var data = _ref.data,
        props = _ref.props,
        children = _ref.children;

    var classObj = _defineProperty({
      'mu-paper-circle': props.circle,
      'mu-paper-round': props.rounded
    }, 'mu-elevation-' + props.zDepth, !!props.zDepth);
    data.staticClass = 'mu-paper ' + (data.staticClass || '') + ' ' + convertClass(classObj).join(' ');
    return h('div', data, children);
  }
};