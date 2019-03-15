'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CircularProgress = exports.LinearProgress = undefined;

require('../styles/components/progress.less');

var _theme = require('../theme');

var _theme2 = _interopRequireDefault(_theme);

var _theme3 = require('./theme');

var _theme4 = _interopRequireDefault(_theme3);

var _LinearProgress = require('./LinearProgress');

var _LinearProgress2 = _interopRequireDefault(_LinearProgress);

var _CircularProgress = require('./CircularProgress');

var _CircularProgress2 = _interopRequireDefault(_CircularProgress);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_theme2.default.addCreateTheme(_theme4.default);
exports.LinearProgress = _LinearProgress2.default;
exports.CircularProgress = _CircularProgress2.default;
exports.default = {
  install: function install(Vue) {
    Vue.component(_LinearProgress2.default.name, _LinearProgress2.default);
    Vue.component(_CircularProgress2.default.name, _CircularProgress2.default);
  }
};