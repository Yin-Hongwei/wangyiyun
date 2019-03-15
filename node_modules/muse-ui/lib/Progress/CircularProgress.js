'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Circular = require('./Circular');

var _Circular2 = _interopRequireDefault(_Circular);

var _color = require('../internal/mixins/color');

var _color2 = _interopRequireDefault(_color);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'mu-circular-progress',
  mixins: [_color2.default],
  props: {
    max: {
      type: Number,
      default: 100
    },
    min: {
      type: Number,
      default: 0
    },
    mode: {
      type: String,
      default: 'indeterminate',
      validator: function validator(val) {
        return ['indeterminate', 'determinate'].indexOf(val) !== -1;
      }
    },
    value: {
      type: Number,
      default: 0
    },
    size: {
      type: Number,
      default: 24
    },
    strokeWidth: {
      type: Number,
      default: 3
    }
  },
  computed: {
    radius: function radius() {
      return (this.size - this.strokeWidth) / 2;
    },
    circularSvgStyle: function circularSvgStyle() {
      return {
        width: this.size,
        height: this.size
      };
    },
    circularPathStyle: function circularPathStyle() {
      var relVal = this.getRelativeValue();
      return {
        stroke: this.getColor(this.color),
        'stroke-dasharray': this.getArcLength(relVal) + ', ' + this.getArcLength(1)
      };
    }
  },
  methods: {
    getArcLength: function getArcLength(fraction) {
      return fraction * Math.PI * (this.size - this.strokeWidth);
    },
    getRelativeValue: function getRelativeValue() {
      var value = this.value,
          min = this.min,
          max = this.max;

      var clampedValue = Math.min(Math.max(min, value), max);
      return clampedValue / (max - min);
    },
    createDeterminateCircular: function createDeterminateCircular(h) {
      if (this.mode !== 'determinate') return;
      return h('svg', {
        staticClass: 'mu-circular-progress-determinate',
        style: this.circularSvgStyle,
        attrs: {
          viewBox: '0 0 ' + this.size + ' ' + this.size
        }
      }, [h('circle', {
        staticClass: 'mu-circular-progress-determinate-path',
        style: this.circularPathStyle,
        attrs: {
          r: this.radius,
          cx: this.size / 2,
          cy: this.size / 2,
          fill: 'none',
          'stroke-miterlimit': '20',
          'stroke-width': this.strokeWidth
        }
      })]);
    }
  },
  render: function render(h) {
    var circular = this.mode === 'indeterminate' ? h(_Circular2.default, {
      props: {
        size: this.size,
        color: this.color,
        borderWidth: this.strokeWidth
      }
    }) : undefined;
    return h('div', {
      staticClass: 'mu-circular-progress ' + this.getColorClass(),
      style: {
        width: this.size + 'px',
        height: this.size + 'px'
      }
    }, [circular, this.createDeterminateCircular(h)]);
  }
};