'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

require('../styles/components/badge.less');

var _theme = require('../theme');

var _theme2 = _interopRequireDefault(_theme);

var _theme3 = require('./theme');

var _theme4 = _interopRequireDefault(_theme3);

var _Badge = require('./Badge');

var _Badge2 = _interopRequireDefault(_Badge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_Badge2.default.install = function (Vue) {
  Vue.component(_Badge2.default.name, _Badge2.default);
};

_theme2.default.addCreateTheme(_theme4.default);
exports.default = _Badge2.default;