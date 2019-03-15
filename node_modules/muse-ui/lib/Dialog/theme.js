'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _colorManipulator = require('../utils/colorManipulator');

exports.default = function (theme) {
  return '\n  .mu-dialog {\n    background-color: ' + theme.background.paper + ';\n  }\n  .mu-dialog-scrollable .mu-dialog-title {\n    border-bottom-color: ' + theme.divider + ';\n  }\n  .mu-dialog-scrollable .mu-dialog-actions {\n    border-top-color: ' + theme.divider + ';\n  }\n  .mu-dialog-title {\n    color: ' + theme.text.primary + ';\n  }\n  .mu-dialog-body {\n    color: ' + (0, _colorManipulator.fade)(theme.text.primary, 0.6) + ';\n  }\n  ';
};