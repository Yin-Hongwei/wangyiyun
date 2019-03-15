'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _TouchRipple = require('../internal/TouchRipple');

var _TouchRipple2 = _interopRequireDefault(_TouchRipple);

var _transitions = require('../internal/transitions');

var _clickOutside = require('../internal/directives/click-outside');

var _clickOutside2 = _interopRequireDefault(_clickOutside);

var _resize = require('../internal/directives/resize');

var _resize2 = _interopRequireDefault(_resize);

var _scroll = require('../internal/directives/scroll');

var _scroll2 = _interopRequireDefault(_scroll);

var _elevation = require('../internal/directives/elevation');

var _elevation2 = _interopRequireDefault(_elevation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  install: function install(Vue) {
    Vue.component('mu-ripple', _TouchRipple2.default);
    [_transitions.ExpandTransition, _transitions.FadeTransition, _transitions.SlideTopTransition, _transitions.SlideBottomTransition, _transitions.SlideLeftTransition, _transitions.SlideRightTransition, _transitions.ScaleTransition].forEach(function (transition) {
      return Vue.component(transition.name, transition);
    });
    Vue.directive(_clickOutside2.default.name, _clickOutside2.default);
    Vue.directive(_resize2.default.name, _resize2.default);
    Vue.directive(_scroll2.default.name, _scroll2.default);
    Vue.directive(_elevation2.default.name, _elevation2.default);
  }
};