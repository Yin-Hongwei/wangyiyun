'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GridTile = exports.GridList = undefined;

require('../styles/components/grid-list.less');

var _theme = require('../theme');

var _theme2 = _interopRequireDefault(_theme);

var _theme3 = require('./theme');

var _theme4 = _interopRequireDefault(_theme3);

var _GridList = require('./GridList');

var _GridList2 = _interopRequireDefault(_GridList);

var _GridTile = require('./GridTile');

var _GridTile2 = _interopRequireDefault(_GridTile);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_GridList2.default.install = function (Vue) {
  Vue.component(_GridList2.default.name, _GridList2.default);
  Vue.component(_GridTile2.default.name, _GridTile2.default);
};

_theme2.default.addCreateTheme(_theme4.default);
exports.GridList = _GridList2.default;
exports.GridTile = _GridTile2.default;
exports.default = _GridList2.default;