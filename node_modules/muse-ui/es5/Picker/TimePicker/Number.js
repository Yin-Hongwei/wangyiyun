var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

import { isInner as _isInner } from './timeUtils';
var positions = [[0, 5], [54.5, 16.6], [94.4, 59.5], [109, 114], [94.4, 168.5], [54.5, 208.4], [0, 223], [-54.5, 208.4], [-94.4, 168.5], [-109, 114], [-94.4, 59.5], [-54.5, 19.6]];
var innerPositions = [[0, 40], [36.9, 49.9], [64, 77], [74, 114], [64, 151], [37, 178], [0, 188], [-37, 178], [-64, 151], [-74, 114], [-64, 77], [-37, 50]];
export default {
  inject: ['getColorObject'],
  props: {
    value: {
      type: Number,
      default: 0
    },
    type: {
      type: String,
      default: 'minute',
      validator: function validator(val) {
        return ['hour', 'minute'].indexOf(val) !== -1;
      }
    },
    selected: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    isInner: function isInner() {
      return _isInner(this);
    },
    numberClass: function numberClass() {
      return {
        'mu-timepicker-number__selected': this.selected,
        'mu-timepicker-number__inner': this.isInner
      };
    },
    numberStyle: function numberStyle() {
      var pos = this.value;
      if (this.type === 'hour') {
        pos %= 12;
      } else {
        pos = pos / 5;
      }
      var transformPos = positions[pos];
      if (this.isInner) transformPos = innerPositions[pos];

      var _transformPos = transformPos,
          _transformPos2 = _slicedToArray(_transformPos, 2),
          x = _transformPos2[0],
          y = _transformPos2[1];

      return {
        transform: 'translate(' + x + 'px, ' + y + 'px)',
        left: this.isInner ? 'calc(50% - 14px)' : 'calc(50% - 16px)'
      };
    }
  },
  render: function render(h) {
    var _getColorObject = this.getColorObject(),
        color = _getColorObject.color,
        bgColorClass = _getColorObject.bgColorClass;

    return h('span', {
      staticClass: 'mu-timepicker-number ' + (this.selected ? bgColorClass : ''),
      class: this.numberClass,
      style: _extends({
        'background-color': this.selected ? color : ''
      }, this.numberStyle)
    }, this.value === 0 ? '00' : this.value);
  }
};