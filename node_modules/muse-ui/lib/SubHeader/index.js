'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

require('../styles/components/subheader.less');

var _theme = require('../theme');

var _theme2 = _interopRequireDefault(_theme);

var _theme3 = require('./theme');

var _theme4 = _interopRequireDefault(_theme3);

var _SubHeader = require('./SubHeader');

var _SubHeader2 = _interopRequireDefault(_SubHeader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_SubHeader2.default.install = function (Vue) {
  Vue.component(_SubHeader2.default.name, _SubHeader2.default);
};

_theme2.default.addCreateTheme(_theme4.default);
exports.default = _SubHeader2.default;