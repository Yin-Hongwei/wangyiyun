'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _colorManipulator = require('../utils/colorManipulator');

exports.default = function (theme) {
  return '\n  .mu-item-wrapper.hover {\n    background-color: ' + (0, _colorManipulator.fade)(theme.text.primary, 0.1) + ';\n  }\n  .mu-item {\n    color: ' + theme.text.primary + ';\n  }\n  .mu-item-action {\n    color: ' + theme.text.secondary + ';\n  }\n  .mu-item.is-selected {\n    color: ' + theme.primary + ';\n  }\n  .mu-item-sub-title {\n    color: ' + theme.text.secondary + ';\n  }\n  .mu-item-after-text {\n   color: ' + theme.text.secondary + ';\n  }\n  ';
};