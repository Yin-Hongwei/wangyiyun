'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

require('../../styles/components/elevation.less');

var _dom = require('../../utils/dom');

function getElevationClass(depth) {
  return 'mu-elevation-' + depth;
}
exports.default = {
  name: 'elevation',
  inserted: function inserted(el, _ref, vnode) {
    var value = _ref.value;

    (0, _dom.addClass)(el, getElevationClass(value));
  },
  update: function update(el, _ref2) {
    var value = _ref2.value,
        oldValue = _ref2.oldValue;

    if (value === oldValue && (0, _dom.hasClass)(el, getElevationClass(oldValue))) return;
    (0, _dom.removeClass)(el, getElevationClass(oldValue));
    (0, _dom.addClass)(el, getElevationClass(value));
  },
  unbind: function unbind(el, _ref3) {
    var value = _ref3.value;

    (0, _dom.removeClass)(el, getElevationClass(value));
  }
};