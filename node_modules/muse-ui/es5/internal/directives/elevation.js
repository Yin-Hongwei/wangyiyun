import '../../styles/components/elevation.less';
import { hasClass, addClass, removeClass } from '../../utils/dom';

function getElevationClass(depth) {
  return 'mu-elevation-' + depth;
}
export default {
  name: 'elevation',
  inserted: function inserted(el, _ref, vnode) {
    var value = _ref.value;

    addClass(el, getElevationClass(value));
  },
  update: function update(el, _ref2) {
    var value = _ref2.value,
        oldValue = _ref2.oldValue;

    if (value === oldValue && hasClass(el, getElevationClass(oldValue))) return;
    removeClass(el, getElevationClass(oldValue));
    addClass(el, getElevationClass(value));
  },
  unbind: function unbind(el, _ref3) {
    var value = _ref3.value;

    removeClass(el, getElevationClass(value));
  }
};