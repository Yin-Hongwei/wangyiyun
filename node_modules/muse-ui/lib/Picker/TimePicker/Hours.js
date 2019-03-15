'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Number = require('./Number');

var _Number2 = _interopRequireDefault(_Number);

var _Pointer = require('./Pointer');

var _Pointer2 = _interopRequireDefault(_Pointer);

var _timeUtils = require('./timeUtils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  props: {
    format: {
      type: String,
      default: 'ampm',
      validator: function validator(val) {
        return ['ampm', '24hr'].indexOf(val) !== -1;
      }
    },
    initialHours: {
      type: Number,
      default: new Date().getHours()
    }
  },
  computed: {
    hours: function hours() {
      var hourSize = this.format === 'ampm' ? 12 : 24;
      var hours = [];
      for (var i = 1; i <= hourSize; i++) {
        hours.push(i % 24);
      }
      return hours;
    }
  },
  mounted: function mounted() {
    var clockElement = this.$refs.mask;
    this.center = {
      x: clockElement.offsetWidth / 2,
      y: clockElement.offsetHeight / 2
    };
    this.basePoint = {
      x: this.center.x,
      y: 0
    };
  },

  methods: {
    getSelected: function getSelected() {
      var hour = this.initialHours;
      if (this.format === 'ampm') {
        hour %= 12;
        hour = hour || 12;
      }
      return hour;
    },
    isMousePressed: function isMousePressed(event) {
      if (typeof event.buttons === 'undefined') {
        return event.nativeEvent.which;
      }
      return event.buttons;
    },
    handleDown: function handleDown(event) {
      this.isMouseDown = true;
    },
    handleUp: function handleUp(event) {
      if (!this.isMouseDown) return;
      event.preventDefault();
      this.isMouseDown = false;
      this.setClock(event, true);
    },
    handleMove: function handleMove(event) {
      event.preventDefault();
      if (this.isMousePressed(event) !== 1) return;
      this.setClock(event, false);
    },
    handleTouchMove: function handleTouchMove(event) {
      event.preventDefault();
      this.setClock(event.changedTouches[0], false);
    },
    handleTouchEnd: function handleTouchEnd(event) {
      event.preventDefault();
      this.setClock(event.changedTouches[0], true);
    },
    setClock: function setClock(event, finish) {
      if (typeof event.offsetX === 'undefined') {
        var offset = (0, _timeUtils.getTouchEventOffsetValues)(event);
        event.offsetX = offset.offsetX;
        event.offsetY = offset.offsetY;
      }
      var hours = this.getHours(event.offsetX, event.offsetY);
      this.$emit('change', hours, finish);
    },
    getHours: function getHours(offsetX, offsetY) {
      var step = 30;
      var x = offsetX - this.center.x;
      var y = offsetY - this.center.y;
      var cx = this.basePoint.x - this.center.x;
      var cy = this.basePoint.y - this.center.y;
      var atan = Math.atan2(cx, cy) - Math.atan2(x, y);
      var deg = (0, _timeUtils.rad2deg)(atan);
      deg = Math.round(deg / step) * step;
      deg %= 360;
      var value = Math.floor(deg / step) || 0;
      var delta = Math.pow(x, 2) + Math.pow(y, 2);
      var distance = Math.sqrt(delta);
      value = value || 12;
      if (this.format === '24hr') {
        if (distance < 90) {
          value += 12;
          value %= 24;
        }
      } else {
        value %= 12;
      }
      return value;
    }
  },
  render: function render(h) {
    var _this = this;

    return h('div', {
      staticClass: 'mu-timepicker-hours'
    }, [h(_Pointer2.default, {
      props: {
        type: 'hour',
        hasSelected: true,
        value: this.getSelected()
      }
    }), this.hours.map(function (hour) {
      return h(_Number2.default, {
        props: {
          selected: _this.getSelected() === hour,
          type: 'hour',
          value: hour
        },
        key: hour
      });
    }), h('div', {
      staticClass: 'mu-timepicker-hours-mask',
      on: {
        mousedown: this.handleDown,
        mouseup: this.handleUp,
        mousemove: this.handleMove,
        touchmove: this.handleTouchMove,
        touchend: this.handleTouchEnd
      },
      ref: 'mask'
    })]);
  }
};