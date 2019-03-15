'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Toolbar = require('./Toolbar');

var _Toolbar2 = _interopRequireDefault(_Toolbar);

var _dateUtils = require('./dateUtils');

var dateUtils = _interopRequireWildcard(_dateUtils);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  props: {
    dateTimeFormat: Object,
    maxDate: Date,
    minDate: Date,
    displayDate: Date
  },
  data: function data() {
    var displayDate = dateUtils.cloneDate(this.displayDate);
    displayDate.setDate(1);
    return {
      displayDates: [displayDate],
      slideType: 'next'
    };
  },

  methods: {
    changeDisplayDate: function changeDisplayDate(date) {
      var oldDate = this.displayDates[0];
      if (date.getFullYear() === oldDate.getFullYear() && date.getMonth() === oldDate.getMonth()) return;
      this.slideType = date.getTime() > oldDate.getTime() ? 'next' : 'prev';
      var displayDate = dateUtils.cloneDate(date);
      displayDate.setDate(1);
      this.displayDates.push(displayDate);
      this.displayDates.splice(0, 1);
    },
    handleChange: function handleChange(val) {
      var displayDate = dateUtils.cloneDate(this.displayDates[0]);
      displayDate.setFullYear(displayDate.getFullYear() + val);
      this.changeDisplayDate(displayDate);
    },
    createMonth: function createMonth(h) {
      var _this = this;

      return h('div', {
        staticClass: 'mu-datepicker-month'
      }, this.displayDates.map(function (displayDate, index) {
        return h('transition', {
          props: {
            name: 'mu-datepicker-slide-' + _this.slideType
          },
          key: index
        }, [h('div', {
          staticClass: 'mu-datepicker-month-slide',
          key: displayDate.getTime()
        }, [_this.createContent(h, displayDate)])]);
      }));
    },
    createContent: function createContent(h, displayDate) {
      var _this2 = this;

      var monthArray = dateUtils.getMonthArray(displayDate);
      return h('div', {
        staticClass: 'mu-datepicker-month-content'
      }, monthArray.map(function (month, i) {
        return h('div', {
          staticClass: 'mu-datepicker-month-row',
          key: i
        }, month.map(function (date) {
          return _this2.createMonthButton(h, date);
        }));
      }));
    },
    createMonthButton: function createMonthButton(h, date) {
      var _this3 = this;

      var monthText = this.dateTimeFormat.getMonthList()[date.getMonth()];
      var maxDate = new Date(this.maxDate.getFullYear(), this.maxDate.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds());
      var minDate = new Date(this.minDate.getFullYear(), this.minDate.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds());
      var disabled = date.getTime() > maxDate.getTime() || date.getTime() < minDate.getTime();
      return h('button', {
        staticClass: 'mu-month-button',
        attrs: {
          disabled: disabled
        },
        class: {
          selected: date.getFullYear() === this.displayDate.getFullYear() && date.getMonth() === this.displayDate.getMonth()
        },
        on: {
          click: function click() {
            return !disabled && _this3.$emit('change', date);
          }
        }
      }, [h('div', { staticClass: 'mu-month-button-bg' }), h('span', { staticClass: 'mu-month-button-text' }, monthText)]);
    }
  },
  render: function render(h) {
    var _this4 = this;

    return h('div', {
      staticClass: 'mu-datepicker-month-container'
    }, [h(_Toolbar2.default, {
      props: {
        slideType: this.slideType,
        type: 'year',
        displayDates: this.displayDates,
        dateTimeFormat: this.dateTimeFormat
      },
      on: {
        click: function click() {
          return _this4.$emit('changeView', 'year');
        },
        change: this.handleChange
      }
    }), this.createMonth(h)]);
  }
};