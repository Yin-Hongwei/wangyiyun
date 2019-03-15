'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

require('../styles/components/paper.less');

require('../styles/components/elevation.less');

var _theme = require('../theme');

var _theme2 = _interopRequireDefault(_theme);

var _theme3 = require('./theme');

var _theme4 = _interopRequireDefault(_theme3);

var _Paper = require('./Paper');

var _Paper2 = _interopRequireDefault(_Paper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_Paper2.default.install = function (Vue) {
  Vue.component(_Paper2.default.name, _Paper2.default);
};

_theme2.default.addCreateTheme(_theme4.default);
exports.default = _Paper2.default;