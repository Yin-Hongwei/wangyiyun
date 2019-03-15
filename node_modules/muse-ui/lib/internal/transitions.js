'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ScaleTransition = exports.BottomSheetTransition = exports.PopoverTransiton = exports.SlideRightTransition = exports.SlideLeftTransition = exports.SlideBottomTransition = exports.SlideTopTransition = exports.FadeTransition = exports.ExpandTransition = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _ExpandTransition = require('./ExpandTransition');

Object.defineProperty(exports, 'ExpandTransition', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_ExpandTransition).default;
  }
});

require('../styles/transitions.less');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createTransition(name, mode) {
  return {
    name: name,
    functional: true,
    render: function render(h, context) {
      context.data = context.data || {};
      context.data.props = { name: name };
      context.data.on = context.data.on || {};
      if (!Object.isExtensible(context.data.on)) {
        context.data.on = _extends({}, context.data.on);
      }

      if (mode) context.data.props.mode = mode;

      return h('transition', context.data, context.children);
    }
  };
}

var FadeTransition = exports.FadeTransition = createTransition('mu-fade-transition');
var SlideTopTransition = exports.SlideTopTransition = createTransition('mu-slide-top-transition');
var SlideBottomTransition = exports.SlideBottomTransition = createTransition('mu-slide-bottom-transition');
var SlideLeftTransition = exports.SlideLeftTransition = createTransition('mu-slide-left-transition');
var SlideRightTransition = exports.SlideRightTransition = createTransition('mu-slide-right-transition');
var PopoverTransiton = exports.PopoverTransiton = createTransition('mu-popover-transition');
var BottomSheetTransition = exports.BottomSheetTransition = createTransition('mu-bottom-sheet-transition');
var ScaleTransition = exports.ScaleTransition = createTransition('mu-scale-transition');