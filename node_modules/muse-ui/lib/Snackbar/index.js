'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

require('../styles/components/snackbar.less');

var _theme = require('../theme');

var _theme2 = _interopRequireDefault(_theme);

var _theme3 = require('./theme');

var _theme4 = _interopRequireDefault(_theme3);

var _Snackbar = require('./Snackbar');

var _Snackbar2 = _interopRequireDefault(_Snackbar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_Snackbar2.default.install = function (Vue) {
  Vue.component(_Snackbar2.default.name, _Snackbar2.default);
};

_theme2.default.addCreateTheme(_theme4.default);
exports.default = _Snackbar2.default;