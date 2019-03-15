var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import '../styles/components/circle-ripple.less';

export default {
  props: {
    mergeStyle: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    color: {
      type: String,
      default: ''
    },
    opacity: {
      type: Number
    }
  },
  computed: {
    styles: function styles() {
      return _extends({
        color: this.color,
        opacity: this.opacity
      }, this.mergeStyle);
    }
  },
  render: function render(h) {
    return h('transition', {
      props: {
        name: 'mu-ripple'
      }
    }, [h('div', {
      class: 'mu-circle-ripple',
      style: this.styles
    })]);
  }
};