'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

require('../styles/components/text-field.less');

var _theme = require('../theme');

var _theme2 = _interopRequireDefault(_theme);

var _theme3 = require('./theme');

var _theme4 = _interopRequireDefault(_theme3);

var _TextField = require('./TextField');

var _TextField2 = _interopRequireDefault(_TextField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_TextField2.default.install = function (Vue) {
  Vue.component(_TextField2.default.name, _TextField2.default);
};

_theme2.default.addCreateTheme(_theme4.default);
exports.default = _TextField2.default;