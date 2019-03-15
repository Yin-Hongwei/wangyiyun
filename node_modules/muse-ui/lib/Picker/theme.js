'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _colorManipulator = require('../utils/colorManipulator');

exports.default = function (theme, type) {
  return '\n  .mu-picker {\n    color: ' + theme.primary + ';\n    background-color: ' + theme.background.paper + ';\n  }\n  .mu-picker-display {\n    background-color: ' + (type === 'dark' ? '#555555' : 'currentColor') + ';\n  }\n  .mu-datepicker-week,\n  .mu-datepicker-toolbar-title,\n  .mu-datepicker-tool-btn,\n  .mu-datepicker-svg-icon,\n  .mu-day-button-text,\n  .mu-month-button-text,\n  .mu-year-button-text,\n  .mu-timepicker-number {\n    color: ' + theme.text.primary + ';\n  }\n\n  .mu-day-button:hover:not(:disabled) .mu-day-button-text,\n  .mu-day-button.selected .mu-day-button-text{\n    color: ' + theme.text.alternate + ';\n  }\n\n  .mu-month-button:hover .mu-month-button-text,\n  .mu-month-button.selected .mu-month-button-text {\n    color: ' + theme.text.alternate + ';\n  }\n  .mu-month-button:disabled .mu-month-button-text {\n    color: ' + theme.text.disabled + ';\n  }\n\n  .mu-timepicker-number__selected {\n    background-color: ' + theme.primary + ';\n    color: ' + theme.text.alternate + ';\n  }\n\n  .mu-timepicker-pointer-mark {\n     background-color: ' + theme.text.alternate + ';\n  }\n  .mu-timepicker-list-hours {\n    border-right-color: ' + theme.divider + ';\n  }\n  .mu-timepicker-hour-button,\n  .mu-timepicker-minute-button {\n    color: ' + theme.text.primary + ';\n  }\n  .mu-timepicker-hour-button:hover,\n  .mu-timepicker-minute-button:hover,\n  .mu-year-button:hover {\n    background-color: ' + (0, _colorManipulator.fade)(theme.text.primary, 0.1) + ';\n  }\n  .mu-datetime-picker .mu-tabs {\n    background-color: ' + (type === 'dark' ? '#555555' : '') + ';\n    color: ' + (type === 'dark' ? theme.text.secondary : '') + '\n  }\n  .mu-datetime-picker .mu-tab-active {\n    color: ' + (type === 'dark' ? theme.text.primary : '') + '\n  }\n  ';
};