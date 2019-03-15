'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

require('../styles/components/slide-picker.less');

var _theme = require('../theme');

var _theme2 = _interopRequireDefault(_theme);

var _theme3 = require('./theme');

var _theme4 = _interopRequireDefault(_theme3);

var _Picker = require('./Picker');

var _Picker2 = _interopRequireDefault(_Picker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_Picker2.default.install = function (Vue) {
  Vue.component(_Picker2.default.name, _Picker2.default);
};

_theme2.default.addCreateTheme(_theme4.default);
exports.default = _Picker2.default;