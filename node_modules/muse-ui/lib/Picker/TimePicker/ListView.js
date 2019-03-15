'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  props: {
    format: {
      type: String,
      default: 'ampm',
      validator: function validator(val) {
        return ['ampm', '24hr'].indexOf(val) !== -1;
      }
    },
    time: {
      type: Date,
      default: function _default() {
        return new Date();
      }
    }
  },
  computed: {
    hours: function hours() {
      var hourSize = this.format === 'ampm' ? 12 : 24;
      var hours = [];
      for (var i = 1; i <= hourSize; i++) {
        var num = i % 24;
        num === 0 ? hours.unshift('00') : hours.push(num > 9 ? num : '0' + num);
      }
      return hours;
    },
    minutes: function minutes() {
      var minutes = [];
      for (var i = 1; i <= 60; i++) {
        var num = i % 60;
        num === 0 ? minutes.unshift('00') : minutes.push(num > 9 ? num : '0' + num);
      }
      return minutes;
    }
  },
  mounted: function mounted() {
    this.scrollToSelected(this.$refs.hours);
    this.scrollToSelected(this.$refs.minutes);
  },

  methods: {
    scrollToSelected: function scrollToSelected(container) {
      var buttonNode = container.querySelector('.is-active');
      var btnTop = buttonNode.offsetTop;
      var btnHeight = buttonNode.offsetHeight;
      var containerTop = container.offsetTop;
      var containerHeight = container.offsetHeight;
      var top = containerTop + containerHeight / 2;
      var maxScrollTop = container.scrollHeight - containerHeight;
      var scrollTop = btnTop + btnHeight / 2 - top;
      scrollTop = Math.min(maxScrollTop, scrollTop);
      scrollTop = Math.max(0, scrollTop);
      setTimeout(function () {
        return container.scrollTop = scrollTop;
      }, 0);
    },
    createHoursList: function createHoursList(h) {
      var _this = this;

      var buttons = this.hours.map(function (hour) {
        var val = Number(hour);
        var curHour = _this.time.getHours();
        if (_this.format === 'ampm') {
          curHour %= 12;
          curHour = curHour || 12;
        }
        var isActive = curHour === val;
        return h('button', {
          staticClass: 'mu-timepicker-hour-button',
          class: {
            'is-active': isActive
          },
          on: {
            click: function click() {
              return _this.$emit('changeHours', val);
            }
          }
        }, hour);
      });
      return h('div', {
        staticClass: 'mu-timepicker-list-hours',
        ref: 'hours'
      }, buttons);
    },
    createMinutesList: function createMinutesList(h) {
      var _this2 = this;

      var buttons = this.minutes.map(function (minute) {
        var val = Number(minute);
        return h('button', {
          staticClass: 'mu-timepicker-minute-button',
          class: {
            'is-active': _this2.time.getMinutes() === val
          },
          on: {
            click: function click() {
              return _this2.$emit('changeMinutes', val);
            }
          }
        }, minute);
      });
      return h('div', {
        staticClass: 'mu-timepicker-list-minutes',
        ref: 'minutes'
      }, buttons);
    }
  },
  render: function render(h) {
    return h('div', {
      staticClass: 'mu-timepicker-list'
    }, [this.createHoursList(h), this.createMinutesList(h)]);
  },

  watch: {
    time: function time() {
      var _this3 = this;

      if (this.$isServer) return;
      this.$nextTick(function () {
        _this3.scrollToSelected(_this3.$refs.hours);
        _this3.scrollToSelected(_this3.$refs.minutes);
      });
    }
  }
};