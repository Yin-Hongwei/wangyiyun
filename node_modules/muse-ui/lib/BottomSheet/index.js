'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

require('../styles/components/bottom-sheet.less');

var _theme = require('../theme');

var _theme2 = _interopRequireDefault(_theme);

var _theme3 = require('./theme');

var _theme4 = _interopRequireDefault(_theme3);

var _BottomSheet = require('./BottomSheet');

var _BottomSheet2 = _interopRequireDefault(_BottomSheet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_BottomSheet2.default.install = function (Vue) {
  Vue.component(_BottomSheet2.default.name, _BottomSheet2.default);
};

_theme2.default.addCreateTheme(_theme4.default);
exports.default = _BottomSheet2.default;