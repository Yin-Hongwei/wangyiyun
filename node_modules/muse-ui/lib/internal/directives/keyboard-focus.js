'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keycode = require('keycode');

var _keycode2 = _interopRequireDefault(_keycode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var tabPressed = false;
var listening = false;

function listenForTabPresses() {
  if (!listening) {
    typeof window !== 'undefined' && window.addEventListener('keydown', function (event) {
      tabPressed = (0, _keycode2.default)(event) === 'tab';
    });
    listening = true;
  }
}

var keyboardcontext = '@@keyboardcontext';
exports.default = {
  name: 'keyboard-focus',
  bind: function bind(el, binding, vnode) {
    listenForTabPresses();
    var timer = void 0;
    var handleFocus = function handleFocus(e) {
      if (timer) clearTimeout(timer);
      timer = setTimeout(function () {
        if (tabPressed) {
          if (binding.expression) {
            vnode.context[el[keyboardcontext].methodName](e);
          } else {
            el[keyboardcontext].bindingFn(e);
          }
          tabPressed = false;
        }
      }, 150);
    };

    el[keyboardcontext] = {
      handleFocus: handleFocus,
      methodName: binding.expression,
      bindingFn: binding.value
    };
    el.addEventListener('focus', handleFocus);
    el.addEventListener('blur', function () {
      if (timer) clearTimeout(timer);
    });
  },
  update: function update(el, binding) {
    el[keyboardcontext].methodName = binding.expression;
    el[keyboardcontext].bindingFn = binding.value;
  },
  unbind: function unbind(el) {
    el.removeEventListener('focus', el[keyboardcontext].handleFocus);
  }
};