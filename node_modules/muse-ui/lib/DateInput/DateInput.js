'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _input = require('../internal/mixins/input');

var _input2 = _interopRequireDefault(_input);

var _keyboardFocus = require('../internal/directives/keyboard-focus');

var _keyboardFocus2 = _interopRequireDefault(_keyboardFocus);

var _Picker = require('../Picker');

var _props = require('../Picker/mixins/props');

var _props2 = _interopRequireDefault(_props);

var _Container = require('./Container');

var _Container2 = _interopRequireDefault(_Container);

var _dayjs = require('dayjs');

var _dayjs2 = _interopRequireDefault(_dayjs);

var _Button = require('../Button/Button');

var _Button2 = _interopRequireDefault(_Button);

var _keycode = require('keycode');

var _keycode2 = _interopRequireDefault(_keycode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DEFAULT_FORMAT = {
  date: 'YYYY-MM-DD',
  time: 'HH:mm',
  year: 'YYYY',
  month: 'YYYY-MM',
  dateTime: 'YYYY-MM-DD HH:mm'
};

var PickerProps = _extends({}, _Picker.TimePicker.props, _Picker.DatePicker.props, _props2.default.props);

delete PickerProps.date;
delete PickerProps.time;
delete PickerProps.type;
delete PickerProps.format;

exports.default = {
  name: 'mu-date-input',
  mixins: [_extends({}, _input2.default)],
  directives: {
    keyboardFocus: _keyboardFocus2.default
  },
  model: {
    prop: 'value',
    event: 'input'
  },
  props: _extends({
    container: {
      type: String,
      default: 'popover', validator: function validator(val) {
        return val && ['dialog', 'popover', 'bottomSheet'].indexOf(val) !== -1;
      }
    },
    type: {
      type: String,
      default: 'date' },
    format: {
      type: String
    },
    rangeSeparator: {
      type: String,
      default: '—'
    },
    actions: Boolean,
    clockType: _Picker.TimePicker.props.format,
    okLabel: {
      type: String,
      default: '确定'
    },
    cancelLabel: {
      type: String,
      default: '取消'
    },
    value: {},
    valueFormat: String
  }, PickerProps),
  data: function data() {
    return {
      open: false,
      date: this.value ? (0, _dayjs2.default)(this.value).toDate() : new Date()
    };
  },

  methods: {
    changeValue: function changeValue() {
      this.closePicker();
      var value = this.valueFormat ? (0, _dayjs2.default)(this.date).format(this.valueFormat) : this.date;
      this.$emit('input', value);
      this.$emit('change', value);
      if (this.muFormItem) this.muFormItem.onBlur();
    },
    focus: function focus(e) {
      this.isFocused = true;
      this.$emit('focus', e);
    },
    blur: function blur(e) {
      this.isFocused = false;
      this.$emit('blur', e);
    },
    closePicker: function closePicker() {
      this.open = false;
    },
    handleDateChange: function handleDateChange(date) {
      this.date = date;
      if (!this.actions) this.changeValue();
    },
    handleTimeChange: function handleTimeChange(date, mode, finished) {
      this.date = date;
      if (!finished || mode !== 'minute') return;
      if (!this.actions) this.changeValue();
    },
    generateTextFieldProps: function generateTextFieldProps() {
      return this.generateProps(_input2.default.props);
    },
    generatePickerProps: function generatePickerProps() {
      return this.generateProps(_props2.default.props);
    },
    generateDatePickerProps: function generateDatePickerProps() {
      return this.generateProps(_Picker.DatePicker.props);
    },
    generateTimePickerProps: function generateTimePickerProps() {
      return this.generateProps(_Picker.TimePicker.props);
    },
    generateProps: function generateProps(props) {
      var _this = this;

      var obj = {};
      Object.keys(props).forEach(function (key) {
        obj[key] = _this[key];
      });
      return obj;
    },
    createTextField: function createTextField(h) {
      var _this2 = this;

      var dateStr = this.value ? (0, _dayjs2.default)(this.value).format(this.format ? this.format : DEFAULT_FORMAT[this.type]) : '';
      var listeners = _extends({}, this.$listeners, {
        keydown: function keydown(e) {
          if ((0, _keycode2.default)(e) === 'tab') {
            _this2.blur(e);
            _this2.open = false;
          }
        },
        click: function click() {
          return _this2.open = true;
        },
        focus: this.focus,
        blur: this.blur
      });
      delete listeners.input;
      delete listeners.change;
      var placeholder = !this.labelFloat ? this.$attrs.placeholder : '';
      return [h('input', {
        staticClass: 'mu-text-field-input',
        ref: 'input',
        attrs: _extends({
          tabindex: 0
        }, this.$attrs, {
          disabled: this.disabled,
          placeholder: placeholder,
          readonly: true
        }),
        domProps: {
          value: dateStr
        },
        directives: [{
          name: 'keyboard-focus',
          value: function value() {
            return _this2.open = true;
          }
        }],
        on: listeners
      })];
    },
    createActions: function createActions(h) {
      if (!this.actions) return;
      return h('div', {
        staticClass: 'mu-picker-actions'
      }, [h(_Button2.default, {
        props: {
          flat: true,
          color: 'primary'
        },
        on: {
          click: this.closePicker
        }
      }, this.cancelLabel), h(_Button2.default, {
        props: {
          flat: true,
          color: 'primary'
        },
        on: {
          click: this.changeValue
        }
      }, this.okLabel)]);
    },
    createPicker: function createPicker(h) {
      switch (this.type) {
        case 'date':
        case 'year':
        case 'month':
          return h(_Picker.DatePicker, {
            props: _extends({}, this.generateDatePickerProps(), this.generatePickerProps(), {
              type: this.type === 'month' ? 'month' : this.type === 'year' ? 'year' : 'date',
              date: this.date
            }),
            on: {
              change: this.handleDateChange
            },
            style: {
              width: this.container === 'bottomSheet' ? 'auto' : ''
            }
          }, [this.createActions(h)]);
        case 'dateTime':
          return h(_Picker.DateTimePicker, {
            props: _extends({}, this.generateDatePickerProps(), this.generateTimePickerProps(), this.generatePickerProps(), {
              format: this.clockType,
              date: this.date
            }),
            on: {
              change: this.handleTimeChange
            },
            style: {
              width: this.container === 'bottomSheet' ? 'auto' : ''
            }
          }, [this.createActions(h)]);
        case 'time':
          return h(_Picker.TimePicker, {
            props: _extends({}, this.generateTimePickerProps(), this.generatePickerProps(), {
              time: this.date,
              format: this.clockType
            }),
            on: {
              change: this.handleTimeChange
            },
            style: {
              width: this.container === 'bottomSheet' ? 'auto' : ''
            }
          }, [this.createActions(h)]);
      }
    }
  },
  render: function render(h) {
    return this.createInput(h, {
      staticClass: 'mu-text-field',
      ref: 'content'
    }, [this.createTextField(h), this.$slots.default, h(_Container2.default, {
      props: {
        container: this.container,
        open: this.open,
        trigger: this.$el ? this.$el.querySelector('.mu-text-field') : undefined
      },
      ref: 'popover',
      on: {
        close: this.closePicker
      }
    }, [this.createPicker(h)])]);
  },

  watch: {
    value: function value(val) {
      this.date = val ? (0, _dayjs2.default)(val).toDate() : undefined;
    }
  }
};