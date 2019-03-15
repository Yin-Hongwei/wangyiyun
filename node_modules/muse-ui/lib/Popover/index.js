'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

require('../styles/components/popover.less');

var _theme = require('../theme');

var _theme2 = _interopRequireDefault(_theme);

var _theme3 = require('./theme');

var _theme4 = _interopRequireDefault(_theme3);

var _Popover = require('./Popover');

var _Popover2 = _interopRequireDefault(_Popover);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_Popover2.default.install = function (Vue) {
  Vue.component(_Popover2.default.name, _Popover2.default);
};

_theme2.default.addCreateTheme(_theme4.default);
exports.default = _Popover2.default;