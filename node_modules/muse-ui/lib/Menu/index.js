'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

require('../styles/components/menu.less');

var _Menu = require('./Menu');

var _Menu2 = _interopRequireDefault(_Menu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_Menu2.default.install = function (Vue) {
  Vue.component(_Menu2.default.name, _Menu2.default);
};

exports.default = _Menu2.default;