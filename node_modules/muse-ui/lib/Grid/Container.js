'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  name: 'mu-container',
  functional: true,
  props: {
    fluid: Boolean
  },
  render: function render(h, _ref) {
    var data = _ref.data,
        props = _ref.props,
        children = _ref.children;

    data.staticClass = (data.staticClass || '') + ' ' + (props.fluid ? 'container-fluid' : 'container');
    return h('div', data, children);
  }
};