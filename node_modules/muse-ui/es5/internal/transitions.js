var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import '../styles/transitions.less';
export { default as ExpandTransition } from './ExpandTransition';

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

export var FadeTransition = createTransition('mu-fade-transition');
export var SlideTopTransition = createTransition('mu-slide-top-transition');
export var SlideBottomTransition = createTransition('mu-slide-bottom-transition');
export var SlideLeftTransition = createTransition('mu-slide-left-transition');
export var SlideRightTransition = createTransition('mu-slide-right-transition');
export var PopoverTransiton = createTransition('mu-popover-transition');
export var BottomSheetTransition = createTransition('mu-bottom-sheet-transition');
export var ScaleTransition = createTransition('mu-scale-transition');