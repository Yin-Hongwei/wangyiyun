'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Option = exports.Select = undefined;

require('../styles/components/select.less');

var _theme = require('../theme');

var _theme2 = _interopRequireDefault(_theme);

var _theme3 = require('./theme');

var _theme4 = _interopRequireDefault(_theme3);

var _Select = require('./Select');

var _Select2 = _interopRequireDefault(_Select);

var _Option = require('./Option');

var _Option2 = _interopRequireDefault(_Option);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_Select2.default.install = function (Vue) {
  Vue.component(_Select2.default.name, _Select2.default);
  Vue.component(_Option2.default.name, _Option2.default);
};

_theme2.default.addCreateTheme(_theme4.default);
exports.Select = _Select2.default;
exports.Option = _Option2.default;
exports.default = _Select2.default;