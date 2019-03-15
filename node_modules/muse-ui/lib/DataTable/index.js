'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

require('../styles/components/data-table.less');

var _theme = require('../theme');

var _theme2 = _interopRequireDefault(_theme);

var _theme3 = require('./theme');

var _theme4 = _interopRequireDefault(_theme3);

var _DataTable = require('./DataTable');

var _DataTable2 = _interopRequireDefault(_DataTable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_DataTable2.default.install = function (Vue) {
  Vue.component(_DataTable2.default.name, _DataTable2.default);
};

_theme2.default.addCreateTheme(_theme4.default);
exports.default = _DataTable2.default;