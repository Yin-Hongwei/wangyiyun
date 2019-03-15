import { isInner as _isInner } from './timeUtils';

export default {
  props: {
    hasSelected: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'minute',
      validator: function validator(val) {
        return ['hour', 'minute'].indexOf(val) !== -1;
      }
    },
    value: {
      type: Number
    }
  },
  computed: {
    isInner: function isInner() {
      return _isInner(this);
    },
    pointerStyle: function pointerStyle() {
      var type = this.type,
          value = this.value,
          calcAngle = this.calcAngle;

      var angle = type === 'hour' ? calcAngle(value, 12) : calcAngle(value, 60);
      return {
        transform: 'rotateZ(' + angle + 'deg)'
      };
    }
  },
  methods: {
    calcAngle: function calcAngle(value, base) {
      value %= base;
      var angle = 360 / base * value;
      return angle;
    }
  },
  render: function render(h) {
    if (this.value === undefined || this.value === null) return h('span', {});
    return h('div', {
      staticClass: 'mu-timepicker-pointer',
      class: {
        'inner': this.isInner
      },
      style: this.pointerStyle
    }, [h('div', {
      staticClass: 'mu-timepicker-pointer-mark',
      class: {
        'has-selected': this.hasSelected
      }
    })]);
  }
};