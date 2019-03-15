'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _colorManipulator = require('../utils/colorManipulator');

exports.default = function (theme) {
  return '\n  .mu-bottom-nav{\n    background-color: ' + theme.background.paper + ';\n  }\n\n  .mu-bottom-nav-shift{\n    background-color: ' + theme.primary + ';\n  }\n  .mu-bottom-item {\n    color: ' + theme.text.secondary + ';\n  }\n  .mu-bottom-nav-shift .mu-bottom-item {\n    color: ' + (0, _colorManipulator.fade)(theme.text.alternate, 0.7) + ';\n  }\n  .mu-bottom-item-active .mu-bottom-item-icon,\n  .mu-bottom-item-active .mu-bottom-item-text {\n    color: ' + theme.primary + ';\n  }\n  .mu-bottom-nav-shift .mu-bottom-item-active .mu-bottom-item-icon,\n  .mu-bottom-nav-shift .mu-bottom-item-active .mu-bottom-item-text {\n    color: ' + theme.text.alternate + ';\n  }\n  ';
};