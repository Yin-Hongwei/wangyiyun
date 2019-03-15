'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

require('../styles/components/text-field.less');

require('../styles/components/select.less');

var _AutoComplete = require('./AutoComplete');

var _AutoComplete2 = _interopRequireDefault(_AutoComplete);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_AutoComplete2.default.install = function (Vue) {
  Vue.component(_AutoComplete2.default.name, _AutoComplete2.default);
};

exports.default = _AutoComplete2.default;