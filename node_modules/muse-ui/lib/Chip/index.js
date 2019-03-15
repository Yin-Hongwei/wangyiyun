'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

require('../styles/components/chip.less');

var _theme = require('../theme');

var _theme2 = _interopRequireDefault(_theme);

var _theme3 = require('./theme');

var _theme4 = _interopRequireDefault(_theme3);

var _Chip = require('./Chip');

var _Chip2 = _interopRequireDefault(_Chip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_Chip2.default.install = function (Vue) {
  Vue.component(_Chip2.default.name, _Chip2.default);
};

_theme2.default.addCreateTheme(_theme4.default);
exports.default = _Chip2.default;