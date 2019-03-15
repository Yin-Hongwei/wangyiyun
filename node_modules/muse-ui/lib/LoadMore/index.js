'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RefreshControl = exports.InfiniteScroll = exports.LoadMore = undefined;

require('../styles/components/progress.less');

require('../styles/components/load-more.less');

var _theme = require('../theme');

var _theme2 = _interopRequireDefault(_theme);

var _theme3 = require('./theme');

var _theme4 = _interopRequireDefault(_theme3);

var _InfiniteScroll = require('./InfiniteScroll');

var _InfiniteScroll2 = _interopRequireDefault(_InfiniteScroll);

var _RefreshControl = require('./RefreshControl');

var _RefreshControl2 = _interopRequireDefault(_RefreshControl);

var _LoadMore = require('./LoadMore');

var _LoadMore2 = _interopRequireDefault(_LoadMore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_LoadMore2.default.install = function (Vue) {
  Vue.component(_LoadMore2.default.name, _LoadMore2.default);
  Vue.component(_RefreshControl2.default.name, _RefreshControl2.default);
  Vue.component(_InfiniteScroll2.default.name, _InfiniteScroll2.default);
};

_theme2.default.addCreateTheme(_theme4.default);
exports.LoadMore = _LoadMore2.default;
exports.InfiniteScroll = _InfiniteScroll2.default;
exports.RefreshControl = _RefreshControl2.default;
exports.default = _LoadMore2.default;