'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _color = require('../../internal/mixins/color');

var _color2 = _interopRequireDefault(_color);

var _props = require('../mixins/props');

var _props2 = _interopRequireDefault(_props);

var _DateDisplay = require('./DateDisplay');

var _DateDisplay2 = _interopRequireDefault(_DateDisplay);

var _MonthDayView = require('./MonthDayView');

var _MonthDayView2 = _interopRequireDefault(_MonthDayView);

var _YearView = require('./YearView');

var _YearView2 = _interopRequireDefault(_YearView);

var _MonthView = require('./MonthView');

var _MonthView2 = _interopRequireDefault(_MonthView);

var _dateUtils = require('./dateUtils');

var dateUtils = _interopRequireWildcard(_dateUtils);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'mu-date-picker',
  mixins: [_color2.default, _props2.default],
  props: {
    dateTimeFormat: {
      type: Object,
      default: function _default() {
        return dateUtils.dateTimeFormat;
      }
    },
    firstDayOfWeek: {
      type: Number,
      default: 0
    },
    date: {
      type: Date,
      default: function _default() {
        return new Date();
      }
    },
    type: {
      type: String,
      default: 'date' },
    maxDate: {
      type: Date,
      default: function _default() {
        return dateUtils.addYears(new Date(), 100);
      }
    },
    minDate: {
      type: Date,
      default: function _default() {
        return dateUtils.addYears(new Date(), -100);
      }
    },
    shouldDisableDate: Function
  },
  data: function data() {
    return {
      displayDate: this.date,
      view: this.type === 'date' ? 'monthDay' : this.type === 'year' ? 'year' : 'month'
    };
  },

  methods: {
    handleYearChange: function handleYearChange(year) {
      var date = dateUtils.cloneAsDate(this.displayDate);
      date.setDate(1);
      date.setFullYear(year);
      this.changeDisplayDate(date);
      if (this.type === 'year') return this.changeDate(date);
      this.changeView(this.type === 'month' ? 'month' : 'monthDay');
    },
    handleMonthChange: function handleMonthChange(date) {
      this.changeDisplayDate(date);
      if (this.type === 'month') return this.changeDate(date);
      this.changeView('monthDay');
    },
    handleSelect: function handleSelect(date) {
      if (date.getTime() > this.maxDate.getTime()) date = new Date(this.maxDate.getTime());
      if (date.getTime() < this.minDate.getTime()) date = new Date(this.minDate.getTime());
      this.changeDisplayDate(date);
      this.changeDate(date);
    },
    changeDate: function changeDate(date) {
      this.$emit('change', date);
      this.$emit('update:date', date);
    },
    changeDisplayDate: function changeDisplayDate(date) {
      this.displayDate = date;
    },
    changeView: function changeView(view) {
      this.view = view;
    }
  },
  render: function render(h) {
    var colorClass = this.getNormalColorClass(this.color, true);
    var color = this.getColor(this.color);
    var monthdayView = h(_MonthDayView2.default, {
      props: {
        dateTimeFormat: this.dateTimeFormat,
        firstDayOfWeek: this.firstDayOfWeek,
        maxDate: this.maxDate,
        minDate: this.minDate,
        displayDate: this.displayDate,
        selectedDate: this.date,
        shouldDisableDate: this.shouldDisableDate
      },
      on: {
        changeView: this.changeView,
        select: this.handleSelect
      }
    });
    var yearView = h(_YearView2.default, {
      props: {
        displayDate: this.displayDate,
        maxDate: this.maxDate,
        minDate: this.minDate
      },
      on: {
        change: this.handleYearChange
      }
    });
    var monthView = h(_MonthView2.default, {
      props: {
        dateTimeFormat: this.dateTimeFormat,
        maxDate: this.maxDate,
        minDate: this.minDate,
        displayDate: this.displayDate
      },
      on: {
        changeView: this.changeView,
        change: this.handleMonthChange
      }
    });
    return h('div', {
      staticClass: 'mu-picker mu-datepicker ' + colorClass,
      class: {
        'mu-picker-landspace': this.landscape
      },
      style: {
        color: color
      }
    }, [!this.noDisplay ? h(_DateDisplay2.default, {
      props: {
        type: this.type,
        monthDaySelected: this.view !== 'year',
        color: this.displayColor,
        displayDate: this.displayDate,
        dateTimeFormat: this.dateTimeFormat
      },
      on: {
        changeView: this.changeView
      }
    }) : undefined, h('div', {
      staticClass: 'mu-picker-container'
    }, [this.view === 'monthDay' ? monthdayView : this.view === 'month' ? monthView : yearView, this.$slots.default])]);
  },

  watch: {
    date: function date(val) {
      this.displayDate = val;
    }
  }
};