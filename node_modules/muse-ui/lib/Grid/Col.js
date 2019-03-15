'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = require('./utils');

function createColClass(props) {
  var classNames = [];
  if (props.span) classNames.push('col-' + props.span);
  if (props.sm) classNames.push('col-sm-' + props.sm);
  if (props.md) classNames.push('col-md-' + props.md);
  if (props.lg) classNames.push('col-lg-' + props.lg);
  if (props.xl) classNames.push('col-xl-' + props.xl);
  if (props.order) classNames.push('order-' + props.order);
  if (props.offset) classNames.push('offset-' + props.offset);
  return classNames.join(' ');
}

exports.default = {
  name: 'mu-col',
  functional: true,
  props: {
    tag: String,
    alignSelf: _utils.props.alignSelf,
    fill: Boolean,
    span: [String, Number],
    sm: [String, Number],
    md: [String, Number],
    lg: [String, Number],
    xl: [String, Number],
    order: [String, Number],
    offset: [String, Number] },
  render: function render(h, _ref) {
    var data = _ref.data,
        props = _ref.props,
        children = _ref.children;

    var flex = (0, _utils.generatePropsClass)(props);
    var col = createColClass(props);
    data.staticClass = ['col', col, flex, data.staticClass || ''].join(' ');
    return h(props.tag || 'div', data, children);
  }
};