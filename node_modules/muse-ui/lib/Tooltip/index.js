'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

require('../styles/components/tooltip.less');

var _Tooltip = require('./Tooltip');

var _Tooltip2 = _interopRequireDefault(_Tooltip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_Tooltip2.default.install = function (Vue) {
  Vue.component(_Tooltip2.default.name, _Tooltip2.default);
};

exports.default = _Tooltip2.default;