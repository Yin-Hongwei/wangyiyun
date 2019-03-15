'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

require('../styles/components/expansion-panel.less');

var _theme = require('../theme');

var _theme2 = _interopRequireDefault(_theme);

var _theme3 = require('./theme');

var _theme4 = _interopRequireDefault(_theme3);

var _ExpansionPanel = require('./ExpansionPanel');

var _ExpansionPanel2 = _interopRequireDefault(_ExpansionPanel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_ExpansionPanel2.default.install = function (Vue) {
  Vue.component(_ExpansionPanel2.default.name, _ExpansionPanel2.default);
};

_theme2.default.addCreateTheme(_theme4.default);
exports.default = _ExpansionPanel2.default;