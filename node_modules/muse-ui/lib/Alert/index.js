'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

require('../styles/components/alert.less');

var _Alert = require('./Alert');

var _Alert2 = _interopRequireDefault(_Alert);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_Alert2.default.install = function (Vue) {
  Vue.component(_Alert2.default.name, _Alert2.default);
};

exports.default = _Alert2.default;