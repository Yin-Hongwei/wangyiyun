'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _colors = require('../theme/colors');

var colors = _interopRequireWildcard(_colors);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.default = function (theme, type) {
  return '\n  .mu-table {\n    background-color: ' + theme.text.alternate + ';\n  }\n  .mu-table tr {\n    color: ' + theme.text.primary + ';\n  }\n  .mu-table tr.is-stripe {\n    background-color: ' + (type === 'dark' ? colors.grey800 : colors.grey50) + ';\n  }\n  .mu-table tr.is-hover {\n    background-color: ' + (type === 'dark' ? 'rgba(0, 0, 0, .14)' : colors.grey200) + ';\n  }\n  .mu-table tr.is-selected {\n    background-color: ' + (type === 'dark' ? colors.grey700 : colors.grey100) + ';\n  }\n  .mu-table td {\n    border-bottom-color: ' + theme.divider + ';\n  }\n  .mu-table th {\n    color: ' + theme.text.secondary + ';\n    border-bottom-color: ' + theme.divider + ';\n  }\n  .mu-table th.is-sortable:hover {\n    color: ' + theme.text.primary + ';\n  }\n  .mu-table th.is-sorting {\n    color: ' + theme.text.primary + ';\n  }\n  .mu-table-border {\n    border-color: ' + theme.divider + ';\n  }\n  .mu-table-border th,\n  .mu-table-border td {\n    border-right-color: ' + theme.divider + ';\n  }\n  .mu-table-empty {\n    color: ' + theme.text.secondary + ';\n  }\n  .mu-table-expand-row td.is-expand {\n    border-bottom-color: ' + theme.divider + ';\n  }\n  ';
};