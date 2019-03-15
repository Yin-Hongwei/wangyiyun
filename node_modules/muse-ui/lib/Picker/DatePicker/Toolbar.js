'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Button = require('../../Button');

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  props: {
    dateTimeFormat: Object,
    displayDates: Array,
    type: {
      type: String,
      default: 'month'
    },
    nextMonth: {
      type: Boolean,
      default: true
    },
    prevMonth: {
      type: Boolean,
      default: true
    },
    slideType: String
  },
  methods: {
    createTitleSlide: function createTitleSlide(h) {
      var _this = this;

      return this.displayDates.map(function (displayDate, index) {
        var title = _this.type === 'month' ? _this.dateTimeFormat.formatMonth(displayDate) : displayDate.getFullYear();
        return h('transition', {
          props: {
            name: 'mu-datepicker-slide-' + _this.slideType
          },
          key: index
        }, [h('div', {
          staticClass: 'mu-datepicker-toolbar-title',
          class: {
            'clickable': true
          },
          key: title,
          on: {
            click: function click(e) {
              return _this.$emit('click', e);
            }
          }
        }, title)]);
      });
    },
    createPrevIcon: function createPrevIcon(h) {
      return h('svg', {
        staticClass: 'mu-datepicker-svg-icon',
        attrs: {
          viewBox: '0 0 24 24'
        }
      }, [h('path', {
        attrs: {
          d: 'M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z'
        }
      })]);
    },
    createNextIcon: function createNextIcon(h) {
      return h('svg', {
        staticClass: 'mu-datepicker-svg-icon',
        attrs: {
          viewBox: '0 0 24 24'
        }
      }, [h('path', {
        attrs: {
          d: 'M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z'
        }
      })]);
    }
  },
  render: function render(h) {
    var _this2 = this;

    return h('div', {
      staticClass: 'mu-datepicker-toolbar'
    }, [h(_Button2.default, {
      staticClass: 'mu-datepicker-tool-btn',
      props: {
        icon: true,
        disabled: !this.prevMonth
      },
      on: {
        click: function click() {
          return _this2.$emit('change', -1);
        }
      }
    }, [this.createPrevIcon(h)]), h('div', {
      staticClass: 'mu-datepicker-toolbar-title-wrapper',
      on: {
        click: function click() {
          return _this2.$emit('changeView', 'month');
        }
      }
    }, [this.createTitleSlide(h)]), h(_Button2.default, {
      staticClass: 'mu-datepicker-tool-btn',
      props: {
        icon: true,
        disabled: !this.nextMonth
      },
      on: {
        click: function click() {
          return _this2.$emit('change', 1);
        }
      }
    }, [this.createNextIcon(h)])]);
  }
};