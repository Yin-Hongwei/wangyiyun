'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _DateInput = require('./DateInput');

var _DateInput2 = _interopRequireDefault(_DateInput);

require('../styles/components/date-input.less');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_DateInput2.default.install = function (Vue) {
  Vue.component(_DateInput2.default.name, _DateInput2.default);
};

exports.default = _DateInput2.default;