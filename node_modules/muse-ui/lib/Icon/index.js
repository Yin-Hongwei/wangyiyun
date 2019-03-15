'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Icon = require('./Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_Icon2.default.install = function (Vue) {
  Vue.component(_Icon2.default.name, _Icon2.default);
};

exports.default = _Icon2.default;