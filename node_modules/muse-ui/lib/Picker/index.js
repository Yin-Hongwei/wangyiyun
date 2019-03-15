'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DateTimePicker = exports.TimePicker = exports.DatePicker = undefined;

require('../styles/components/picker.less');

var _theme = require('../theme');

var _theme2 = _interopRequireDefault(_theme);

var _theme3 = require('./theme');

var _theme4 = _interopRequireDefault(_theme3);

var _DatePicker = require('./DatePicker');

var _DatePicker2 = _interopRequireDefault(_DatePicker);

var _TimePicker = require('./TimePicker');

var _TimePicker2 = _interopRequireDefault(_TimePicker);

var _DateTimePicker = require('./DateTimePicker');

var _DateTimePicker2 = _interopRequireDefault(_DateTimePicker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_theme2.default.addCreateTheme(_theme4.default);
exports.DatePicker = _DatePicker2.default;
exports.TimePicker = _TimePicker2.default;
exports.DateTimePicker = _DateTimePicker2.default;
exports.default = {
  install: function install(Vue) {
    Vue.component(_DatePicker2.default.name, _DatePicker2.default);
    Vue.component(_TimePicker2.default.name, _TimePicker2.default);
    Vue.component(_DateTimePicker2.default.name, _DateTimePicker2.default);
  }
};