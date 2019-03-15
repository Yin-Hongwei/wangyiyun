'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  name: 'mu-sub-header',
  functional: true,
  props: {
    inset: Boolean
  },
  render: function render(h, _ref) {
    var data = _ref.data,
        props = _ref.props,
        children = _ref.children;

    data.staticClass = (data.staticClass || '') + ' mu-sub-header ' + (props.inset ? 'inset' : '');
    return h('div', data, children);
  }
};