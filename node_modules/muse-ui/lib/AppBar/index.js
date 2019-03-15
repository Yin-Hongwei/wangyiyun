'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

require('../styles/components/elevation.less');

require('../styles/components/appbar.less');

var _theme = require('../theme');

var _theme2 = _interopRequireDefault(_theme);

var _theme3 = require('./theme');

var _theme4 = _interopRequireDefault(_theme3);

var _AppBar = require('./AppBar');

var _AppBar2 = _interopRequireDefault(_AppBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_AppBar2.default.install = function (Vue) {
  Vue.component(_AppBar2.default.name, _AppBar2.default);
};

_theme2.default.addCreateTheme(_theme4.default);
exports.default = _AppBar2.default;