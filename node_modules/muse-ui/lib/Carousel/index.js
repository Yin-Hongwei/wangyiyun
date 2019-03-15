'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CarouselItem = exports.Carousel = undefined;

require('../styles/components/carousel.less');

var _Carousel = require('./Carousel');

var _Carousel2 = _interopRequireDefault(_Carousel);

var _CarouselItem = require('./CarouselItem');

var _CarouselItem2 = _interopRequireDefault(_CarouselItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_Carousel2.default.install = function (Vue) {
  Vue.component(_Carousel2.default.name, _Carousel2.default);
  Vue.component(_CarouselItem2.default.name, _CarouselItem2.default);
};

exports.Carousel = _Carousel2.default;
exports.CarouselItem = _CarouselItem2.default;
exports.default = _Carousel2.default;