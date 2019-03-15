'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Col = exports.Row = exports.Container = undefined;

require('../styles/components/grid.css');

var _Container = require('./Container');

var _Container2 = _interopRequireDefault(_Container);

var _Row = require('./Row');

var _Row2 = _interopRequireDefault(_Row);

var _Col = require('./Col');

var _Col2 = _interopRequireDefault(_Col);

var _Flex = require('./Flex');

var _Flex2 = _interopRequireDefault(_Flex);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Container = _Container2.default;
exports.Row = _Row2.default;
exports.Col = _Col2.default;
exports.default = {
  install: function install(Vue) {
    Vue.component(_Container2.default.name, _Container2.default);
    Vue.component(_Row2.default.name, _Row2.default);
    Vue.component(_Col2.default.name, _Col2.default);
    Vue.component(_Flex2.default.name, _Flex2.default);
  }
};