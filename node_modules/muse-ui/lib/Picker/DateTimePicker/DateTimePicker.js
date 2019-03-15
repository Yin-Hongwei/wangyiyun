'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _props = require('../mixins/props');

var _props2 = _interopRequireDefault(_props);

var _color = require('../../internal/mixins/color');

var _color2 = _interopRequireDefault(_color);

var _DatePicker = require('../DatePicker');

var _DatePicker2 = _interopRequireDefault(_DatePicker);

var _TimePicker = require('../TimePicker');

var _TimePicker2 = _interopRequireDefault(_TimePicker);

var _DateTimeDisplay = require('./DateTimeDisplay');

var _DateTimeDisplay2 = _interopRequireDefault(_DateTimeDisplay);

var _MonthDayView = require('../DatePicker/MonthDayView');

var _MonthDayView2 = _interopRequireDefault(_MonthDayView);

var _YearView = require('../DatePicker/YearView');

var _YearView2 = _interopRequireDefault(_YearView);

var _MonthView = require('../DatePicker/MonthView');

var _MonthView2 = _interopRequireDefault(_MonthView);

var _Hours = require('../TimePicker/Hours');

var _Hours2 = _interopRequireDefault(_Hours);

var _Minutes = require('../TimePicker/Minutes');

var _Minutes2 = _interopRequireDefault(_Minutes);

var _ListView = require('../TimePicker/ListView');

var _ListView2 = _interopRequireDefault(_ListView);

var _Tabs = require('../../Tabs');

var _transitions = require('../../internal/transitions');

var _dateUtils = require('../DatePicker/dateUtils');

var dateUtils = _interopRequireWildcard(_dateUtils);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var props = _extends({}, _DatePicker2.default.props, _TimePicker2.default.props);

delete props.time;
delete props.type;
delete props.landscape;
exports.default = {
  name: 'mu-date-time-picker',
  provide: function provide() {
    return {
      getColorObject: this.getColorObject
    };
  },

  mixins: [_props2.default, _color2.default],
  props: props,
  data: function data() {
    return {
      displayDate: this.date,
      view: 'monthDay',
      type: 'date' };
  },

  methods: {
    getColorObject: function getColorObject() {
      return {
        color: this.getColor(this.color),
        colorClass: this.getNormalColorClass(this.color, true),
        bgColorClass: this.getNormalColorClass(this.color)
      };
    },
    getAffix: function getAffix() {
      if (this.format !== 'ampm') return '';
      var hours = this.date.getHours();
      if (hours < 12) {
        return 'am';
      }
      return 'pm';
    },
    handleYearChange: function handleYearChange(year) {
      var date = dateUtils.cloneAsDate(this.displayDate);
      date.setDate(1);
      date.setFullYear(year);
      this.changeDisplayDate(date);
      this.changeView('monthDay');
    },
    handleMonthChange: function handleMonthChange(date) {
      this.changeDisplayDate(date);
      this.changeView('monthDay');
    },
    handleSelect: function handleSelect(date) {
      if (date.getTime() > this.maxDate.getTime()) date = new Date(this.maxDate.getTime());
      if (date.getTime() < this.minDate.getTime()) date = new Date(this.minDate.getTime());
      this.changeDisplayDate(date);
      this.changeTime(date, 'monthDay', false);
      this.changeType('time');
    },
    changeDisplayDate: function changeDisplayDate(date) {
      this.displayDate = date;
    },
    changeType: function changeType(type) {
      this.type = type;
      if (type === 'date' && ['hour', 'minute'].indexOf(this.view) !== -1) {
        this.changeView('monthDay');
      } else if (type === 'time' && ['monthDay', 'month', 'year'].indexOf(this.view) !== -1) {
        this.changeView('hour');
      }
    },
    changeView: function changeView(view) {
      this.view = view;
      if (['hour', 'minute'].indexOf(view) !== -1 && this.type === 'date') {
        this.changeType('time');
      } else if (['monthDay', 'month', 'year'].indexOf(view) !== -1 && this.type === 'time') {
        this.changeType('date');
      }
    },
    handleSelectAffix: function handleSelectAffix(affix) {
      if (affix === this.getAffix()) return;
      var hours = this.date.getHours();
      if (affix === 'am') {
        this.handleChangeHours(hours - 12, affix);
        return;
      }
      this.handleChangeHours(hours + 12, affix);
    },
    handleChangeHours: function handleChangeHours(hours, finished) {
      var time = new Date(this.date);
      var affix = void 0;
      if (typeof finished === 'string') {
        affix = finished;
        finished = undefined;
      }
      if (!affix) {
        affix = this.getAffix();
      }
      if (affix === 'pm' && hours < 12) {
        hours += 12;
      }
      time.setHours(hours);
      this.changeTime(time, 'hour', finished);
      if (finished) this.view = 'minute';
    },
    handleChangeMinutes: function handleChangeMinutes(minutes, finished) {
      var time = new Date(this.date);
      time.setMinutes(minutes);
      this.changeTime(time, 'minute', finished);
    },
    changeTime: function changeTime(time, view, finished) {
      this.$emit('change', time, view, finished);
      this.$emit('update:date', time);
    },
    createDisplay: function createDisplay(h) {
      if (this.noDisplay) return;
      return h(_DateTimeDisplay2.default, {
        props: {
          affix: this.getAffix(),
          dateTimeFormat: this.dateTimeFormat,
          view: this.view,
          format: this.format,
          viewType: this.viewType,
          color: this.displayColor,
          displayDate: this.displayDate
        },
        on: {
          changeView: this.changeView,
          selectAffix: this.handleSelectAffix
        }
      });
    },
    createClock: function createClock(h) {
      return h('div', {
        staticClass: 'mu-timepicker-clock'
      }, [h('div', { staticClass: 'mu-timepicker-circle' }), this.view === 'hour' ? h(_Hours2.default, {
        props: {
          format: this.format,
          initialHours: this.date.getHours()
        },
        on: {
          change: this.handleChangeHours
        }
      }) : undefined, this.view === 'minute' ? h(_Minutes2.default, {
        props: {
          initialMinutes: this.date.getMinutes()
        },
        on: {
          change: this.handleChangeMinutes
        }
      }) : undefined]);
    },
    createList: function createList(h) {
      var _this = this;

      return h(_ListView2.default, {
        props: {
          format: this.format,
          time: this.date
        },
        on: {
          changeHours: function changeHours(val) {
            return _this.handleChangeHours(val, true);
          },
          changeMinutes: function changeMinutes(val) {
            return _this.handleChangeMinutes(val, true);
          }
        }
      });
    },
    createTabs: function createTabs(h) {
      return h(_Tabs.Tabs, {
        props: {
          value: this.type,
          color: this.displayColor || this.color,
          fullWidth: true
        },
        on: {
          'update:value': this.changeType
        }
      }, [h(_Tabs.Tab, {
        props: {
          value: 'date'
        }
      }, [h('svg', {
        staticClass: 'mu-datetime-picker-svg',
        attrs: {
          viewBox: '0 0 24 24'
        }
      }, [h('path', {
        attrs: {
          d: 'M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z'
        }
      }), h('path', {
        attrs: {
          d: 'M0 0h24v24H0z',
          fill: 'none'
        }
      })])]), h(_Tabs.Tab, {
        props: {
          value: 'time'
        }
      }, [h('svg', {
        staticClass: 'mu-datetime-picker-svg',
        attrs: {
          viewBox: '0 0 24 24'
        }
      }, [h('path', {
        attrs: {
          d: 'M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z'
        }
      }), h('path', {
        attrs: {
          d: 'M0 0h24v24H0z',
          fill: 'none'
        }
      }), h('path', {
        attrs: {
          d: 'M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z'
        }
      })])])]);
    },
    createContent: function createContent(h) {
      switch (this.view) {
        case 'monthDay':
          return h(_MonthDayView2.default, {
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
        case 'month':
          return h(_MonthView2.default, {
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
        case 'year':
          return h(_YearView2.default, {
            props: {
              displayDate: this.displayDate,
              maxDate: this.maxDate,
              minDate: this.minDate
            },
            on: {
              change: this.handleYearChange
            }
          });
      }
      return this.viewType === 'clock' ? this.createClock(h) : this.createList(h);
    }
  },
  render: function render(h) {
    var _getColorObject = this.getColorObject(),
        color = _getColorObject.color,
        colorClass = _getColorObject.colorClass;

    return h('div', {
      staticClass: 'mu-picker mu-datetime-picker ' + colorClass,
      style: {
        color: color
      }
    }, [this.createDisplay(h), h('div', {
      staticClass: 'mu-picker-container'
    }, [this.createTabs(h), h(_transitions.FadeTransition, [this.createContent(h)]), this.$slots.default])]);
  },

  watch: {
    date: function date(val) {
      this.displayDate = val;
    }
  }
};