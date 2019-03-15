'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CardText = exports.CardActions = exports.CardTitle = exports.CardMedia = exports.CardHeader = exports.Card = undefined;

require('../styles/components/card.less');

var _theme = require('../theme');

var _theme2 = _interopRequireDefault(_theme);

var _theme3 = require('./theme');

var _theme4 = _interopRequireDefault(_theme3);

var _Card = require('./Card');

var _Card2 = _interopRequireDefault(_Card);

var _CardHeader = require('./CardHeader');

var _CardHeader2 = _interopRequireDefault(_CardHeader);

var _CardMedia = require('./CardMedia');

var _CardMedia2 = _interopRequireDefault(_CardMedia);

var _CardTitle = require('./CardTitle');

var _CardTitle2 = _interopRequireDefault(_CardTitle);

var _utils = require('../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Card = _Card2.default;
exports.CardHeader = _CardHeader2.default;
exports.CardMedia = _CardMedia2.default;
exports.CardTitle = _CardTitle2.default;
var CardActions = exports.CardActions = (0, _utils.createSimpleFunctional)('mu-card-actions', 'div', 'mu-card-actions');
var CardText = exports.CardText = (0, _utils.createSimpleFunctional)('mu-card-text', 'div', 'mu-card-text');

_Card2.default.install = function (Vue) {
  Vue.component(_Card2.default.name, _Card2.default);
  Vue.component(_CardHeader2.default.name, _CardHeader2.default);
  Vue.component(_CardMedia2.default.name, _CardMedia2.default);
  Vue.component(_CardTitle2.default.name, _CardTitle2.default);
  Vue.component(CardActions.name, CardActions);
  Vue.component(CardText.name, CardText);
};

_theme2.default.addCreateTheme(_theme4.default);
exports.default = _Card2.default;