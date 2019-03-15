'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _utils = require('./utils');

exports.default = {
  name: 'mu-row',
  functional: true,
  props: _extends({}, _utils.props, {
    tag: String,
    gutter: Boolean
  }),
  render: function render(h, _ref) {
    var data = _ref.data,
        props = _ref.props,
        children = _ref.children;

    var gutter = !props.gutter ? 'no-gutters' : '';
    var flex = (0, _utils.generatePropsClass)(props);

    data.staticClass = ['row', gutter, flex, data.staticClass || ''].join(' ');
    return h(props.tag || 'div', data, children);
  }
};