'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

require('../styles/components/avatar.less');

var _theme = require('../theme');

var _theme2 = _interopRequireDefault(_theme);

var _theme3 = require('./theme');

var _theme4 = _interopRequireDefault(_theme3);

var _Avatar = require('./Avatar');

var _Avatar2 = _interopRequireDefault(_Avatar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_Avatar2.default.install = function (Vue) {
  Vue.component(_Avatar2.default.name, _Avatar2.default);
};

_theme2.default.addCreateTheme(_theme4.default);
exports.default = _Avatar2.default;