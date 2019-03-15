import { getScrollEventTarget } from '../../utils/dom';

function bindScroll(el, binding) {
  var callback = typeof binding.value === 'function' ? binding.value : binding.value.callback;
  var options = binding.value.options || { passive: true };
  var target = binding.value.target || window;
  if (target === 'undefined') return;
  if (target instanceof Element) {
    target = getScrollEventTarget(target);
  } else if (target !== window) {
    target = document.querySelector(target);
  }

  var handleScroll = function handleScroll(e) {
    callback(target, e);
  };
  if (el._onScroll && target !== el._onScroll.target) unbind(el, binding);

  target.addEventListener('scroll', handleScroll, options);

  el._onScroll = {
    callback: handleScroll,
    options: options,
    target: target
  };
}

function unbind(el, binding) {
  var _el$_onScroll = el._onScroll,
      callback = _el$_onScroll.callback,
      options = _el$_onScroll.options,
      target = _el$_onScroll.target;

  if (!target) return;
  target.removeEventListener('scroll', callback, options);
}
export default {
  name: 'scroll',
  inserted: bindScroll,
  update: bindScroll,
  unbind: unbind
};