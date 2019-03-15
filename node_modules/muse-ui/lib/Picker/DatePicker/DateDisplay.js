'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _color = require('../../internal/mixins/color');

var _color2 = _interopRequireDefault(_color);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  mixins: [_color2.default],
  props: {
    type: String,
    dateTimeFormat: Object,
    monthDaySelected: {
      type: Boolean,
      default: true
    },
    displayDate: Date
  },
  data: function data() {
    return {
      displayDates: [this.displayDate],
      slideType: 'next'
    };
  },

  methods: {
    replaceSelected: function replaceSelected(date) {
      var oldDate = this.displayDates[0];
      this.slideType = date.getTime() > oldDate.getTime() ? 'next' : 'prev';
      this.displayDates.push(date);
      this.displayDates.splice(0, 1);
    },
    createYearSlide: function createYearSlide(h) {
      var _this = this;

      return this.displayDates.map(function (displayDate, index) {
        var fullYear = displayDate.getFullYear();
        return h('transition', {
          props: {
            name: 'mu-date-display-' + _this.slideType
          },
          key: index
        }, [h('div', {
          staticClass: 'mu-date-display-slideIn-wrapper',
          key: fullYear
        }, [h('div', { staticClass: 'mu-date-display-year-title' }, fullYear)])]);
      });
    },
    createMonthSlide: function createMonthSlide(h) {
      var _this2 = this;

      return this.displayDates.map(function (displayDate, index) {
        var displayMonthDay = _this2.type === 'date' ? _this2.dateTimeFormat.formatDisplay(displayDate) : _this2.dateTimeFormat.getMonthList()[displayDate.getMonth()];
        return h('transition', {
          props: {
            name: 'mu-date-display-' + _this2.slideType
          },
          key: index
        }, [h('div', {
          staticClass: 'mu-date-display-slideIn-wrapper',
          key: displayMonthDay
        }, [h('div', { staticClass: 'mu-date-display-monthday-title' }, displayMonthDay)])]);
      });
    }
  },
  render: function render(h) {
    var _this3 = this;

    var displayYear = h('div', {
      staticClass: 'mu-date-display-year',
      on: {
        click: function click() {
          return _this3.$emit('changeView', 'year');
        }
      }
    }, this.createYearSlide(h));
    var displayMonthDay = this.type !== 'year' ? h('div', {
      staticClass: 'mu-date-display-monthday',
      on: {
        click: function click() {
          return _this3.$emit('changeView', _this3.type === 'date' ? 'monthDay' : 'month');
        }
      }
    }, this.createMonthSlide(h)) : undefined;

    return h('div', {
      staticClass: 'mu-picker-display mu-date-display ' + this.getColorClass(false),
      style: {
        'background-color': this.getColor(this.color)
      },
      class: {
        'selected-year': !this.monthDaySelected
      }
    }, [displayYear, displayMonthDay]);
  },

  watch: {
    displayDate: function displayDate(val) {
      this.replaceSelected(val);
    }
  }
};