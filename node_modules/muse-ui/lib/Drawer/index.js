'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

require('../styles/components/drawer.less');

var _theme = require('../theme');

var _theme2 = _interopRequireDefault(_theme);

var _theme3 = require('./theme');

var _theme4 = _interopRequireDefault(_theme3);

var _Drawer = require('./Drawer');

var _Drawer2 = _interopRequireDefault(_Drawer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_Drawer2.default.install = function (Vue) {
  Vue.component(_Drawer2.default.name, _Drawer2.default);
};

_theme2.default.addCreateTheme(_theme4.default);
exports.default = _Drawer2.default;