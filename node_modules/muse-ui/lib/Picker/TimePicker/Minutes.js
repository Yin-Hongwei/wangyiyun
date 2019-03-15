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
    initialMinutes: {
      type: Number,
      default: function _default() {
        return new Date().getMinutes();
      }
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
  data: function data() {
    return {
      minutes: null
    };
  },
  created: function created() {
    this.minutes = this.getMinuteNumbers();
  },

  methods: {
    getMinuteNumbers: function getMinuteNumbers() {
      var minutes = [];
      for (var i = 0; i < 12; i++) {
        minutes.push(i * 5);
      }
      var selectedMinutes = this.initialMinutes;
      var hasSelected = false;
      var numbers = minutes.map(function (minute) {
        var isSelected = selectedMinutes === minute;
        if (isSelected) {
          hasSelected = true;
        }
        return {
          minute: minute,
          isSelected: isSelected
        };
      });
      return {
        numbers: numbers,
        hasSelected: hasSelected,
        selected: selectedMinutes
      };
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
      if (this.isMousePressed(event) !== 1) {
        return;
      }
      this.setClock(event, false);
    },
    handleTouch: function handleTouch(event) {
      event.preventDefault();
      this.setClock(event.changedTouches[0], event.type.toLowerCase() === 'touchend');
    },
    setClock: function setClock(event, finish) {
      if (typeof event.offsetX === 'undefined') {
        var offset = (0, _timeUtils.getTouchEventOffsetValues)(event);
        event.offsetX = offset.offsetX;
        event.offsetY = offset.offsetY;
      }
      var minutes = this.getMinutes(event.offsetX, event.offsetY);
      this.$emit('change', minutes, finish);
    },
    getMinutes: function getMinutes(offsetX, offsetY) {
      var step = 6;
      var x = offsetX - this.center.x;
      var y = offsetY - this.center.y;
      var cx = this.basePoint.x - this.center.x;
      var cy = this.basePoint.y - this.center.y;
      var atan = Math.atan2(cx, cy) - Math.atan2(x, y);
      var deg = (0, _timeUtils.rad2deg)(atan);
      deg = Math.round(deg / step) * step;
      deg %= 360;
      var value = Math.floor(deg / step) || 0;
      return value;
    }
  },
  render: function render(h) {
    return h('div', {
      staticClass: 'mu-timepicker-minutes'
    }, [h(_Pointer2.default, {
      props: {
        hasSelected: this.minutes.hasSelected,
        value: this.minutes.selected,
        type: 'minute'
      }
    }), this.minutes.numbers.map(function (minute) {
      return h(_Number2.default, {
        props: {
          selected: minute.isSelected,
          type: 'minute',
          value: minute.minute
        },
        key: minute.minute
      });
    }), h('div', {
      staticClass: 'mu-timepicker-minutes-mask',
      on: {
        mousedown: this.handleDown,
        mouseup: this.handleUp,
        mousemove: this.handleMove,
        touchmove: this.handleTouch,
        touchend: this.handleTouch
      },
      ref: 'mask'
    })]);
  },

  watch: {
    initialMinutes: function initialMinutes(val) {
      this.minutes = this.getMinuteNumbers();
    }
  }
};