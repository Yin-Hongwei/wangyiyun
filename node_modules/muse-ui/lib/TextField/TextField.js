'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _input = require('../internal/mixins/input');

var _input2 = _interopRequireDefault(_input);

var _Textarea = require('./Textarea');

var _Textarea2 = _interopRequireDefault(_Textarea);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'mu-text-field',
  mixins: [_input2.default],
  props: {
    rows: {
      type: Number,
      default: 1
    },
    rowsMax: {
      type: Number
    },
    multiLine: Boolean,
    maxLength: [String, Number]
  },
  methods: {
    handleFocus: function handleFocus(e) {
      this.isFocused = true;
      this.$emit('focus', e);
    },
    handleBlur: function handleBlur(e) {
      this.isFocused = false;
      this.$emit('blur', e);
    },
    createTextField: function createTextField(h) {
      var _this = this;

      var listeners = _extends({}, this.$listeners, {
        input: function input(e) {
          return _this.$emit('input', e.target.value, e);
        },
        change: function change(e) {
          return _this.$emit('change', e.target.value, e);
        },
        focus: this.handleFocus,
        blur: this.handleBlur
      });
      var placeholder = !this.labelFloat ? this.$attrs.placeholder : '';
      return [this.multiLine ? h(_Textarea2.default, {
        attrs: _extends({}, this.$attrs, {
          maxlength: this.maxLength,
          placeholder: placeholder
        }),
        props: {
          disabled: this.disabled,
          rows: this.rows,
          rowsMax: this.rowsMax,
          value: String(this.value || '')
        },
        on: listeners
      }) : h('input', {
        staticClass: 'mu-text-field-input',
        attrs: _extends({
          tabindex: 0
        }, this.$attrs, {
          maxlength: this.maxLength,
          disabled: this.disabled,
          placeholder: placeholder
        }),
        domProps: {
          value: this.value
        },
        on: listeners
      })];
    }
  },
  render: function render(h) {
    return this.createInput(h, {
      staticClass: 'mu-text-field'
    }, [this.createTextField(h), this.$slots.default]);
  }
};