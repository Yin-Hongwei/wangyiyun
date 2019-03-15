'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _colorManipulator = require('../utils/colorManipulator');

exports.default = function (theme) {
  return '\n  .mu-chip {\n    background-color: ' + theme.background.chip + ';\n    color: ' + theme.text.primary + ';\n  }\n  .mu-chip:hover .mu-chip-delete-icon{\n    color: ' + (0, _colorManipulator.fade)((0, _colorManipulator.fade)(theme.text.primary, 0.26), 0.4) + ';\n  }\n  .mu-chip-delete-icon{\n    color: ' + (0, _colorManipulator.fade)(theme.text.primary, 0.26) + ';\n  }\n  .mu-chip:active,\n  .mu-chip:focus,\n  .mu-chip.is-deletable {\n    background-color: ' + (0, _colorManipulator.emphasize)(theme.background.chip, 0.08) + ';\n  }\n  .mu-chip:hover{\n    background-color: ' + (0, _colorManipulator.emphasize)(theme.background.chip, 0.08) + ';\n  }\n  .mu-chip.mu-primary-color {\n    background-color: ' + theme.primary + ';\n  }\n  .mu-chip.mu-secondary-color {\n    background-color: ' + theme.secondary + ';\n  }\n  .mu-chip.mu-success-color {\n    background-color: ' + theme.success + ';\n  }\n  .mu-chip.mu-warning-color {\n    background-color: ' + theme.warning + ';\n  }\n  .mu-chip.mu-info-color {\n    background-color: ' + theme.info + ';\n  }\n  .mu-chip.mu-error-color {\n    background-color: ' + theme.error + ';\n  }\n  ';
};