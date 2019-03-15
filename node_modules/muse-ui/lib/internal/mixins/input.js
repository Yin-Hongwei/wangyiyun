'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

require('../../styles/components/input.less');

var _Icon = require('../../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _color = require('./color');

var _color2 = _interopRequireDefault(_color);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

exports.default = {
  inheritAttrs: false,
  mixins: [_color2.default],
  model: {
    prop: 'value',
    event: 'input'
  },
  inject: {
    muFormItem: {
      default: ''
    }
  },
  props: {
    icon: String,
    label: String,
    labelFloat: Boolean,
    actionIcon: String,
    actionClick: Function,
    suffix: String,
    prefix: String,
    errorText: String,
    helpText: String,
    fullWidth: Boolean,
    disabled: Boolean,
    solo: Boolean,
    underlineColor: String,
    value: {}
  },
  data: function data() {
    return {
      isFocused: false
    };
  },

  computed: {
    error: function error() {
      return !!this.errorText || this.muFormItem && this.muFormItem.errorMessage;
    },
    inputClass: function inputClass() {
      return {
        'mu-input__focus': this.isFocused,
        'has-label': this.label,
        'no-empty-state': this.value,
        'has-icon': this.icon,
        'mu-input__error': this.error,
        'multi-line': this.multiLine,
        'disabled': this.disabled,
        'full-width': this.fullWidth,
        'is-solo': this.solo
      };
    },
    float: function float() {
      return this.labelFloat && !this.isFocused && !this.value && this.value !== 0;
    }
  },
  methods: {
    createIcon: function createIcon(h) {
      if (!this.icon) return;
      return h(_Icon2.default, {
        staticClass: 'mu-input-icon',
        props: {
          value: this.icon
        }
      });
    },
    createLabel: function createLabel(h) {
      return !this.solo && this.label ? h('div', {
        staticClass: 'mu-input-label',
        class: {
          float: this.float
        }
      }, this.label) : undefined;
    },
    createUnderline: function createUnderline(h) {
      if (this.solo) return;
      return h('div', [h('div', {
        staticClass: 'mu-input-line',
        class: {
          disabled: this.disabled
        }
      }), this.disabled ? undefined : h('div', {
        staticClass: ['mu-input-focus-line', this.getNormalColorClass(this.underlineColor, false, false)].join(' '),
        class: {
          focus: this.isFocused
        },
        style: {
          'background-color': this.getColor(this.underlineColor)
        }
      })]);
    },
    createHelpText: function createHelpText(h) {
      if (!this.errorText && !this.helpText && !this.maxLength) return;
      return h('div', {
        staticClass: 'mu-input-help'
      }, [h('div', {}, (this.errorText ? this.errorText : this.helpText) || ''), this.maxLength ? h('div', {}, (this.value ? String(this.value).length : 0) + ' / ' + this.maxLength) : undefined]);
    },
    createActionIcon: function createActionIcon(h) {
      var _this = this;

      return this.actionIcon ? h(_Icon2.default, {
        staticClass: 'mu-input-action-icon',
        props: {
          value: this.actionIcon
        },
        on: {
          click: function click() {
            return !_this.disabled && _this.actionClick && _this.actionClick();
          }
        }
      }) : undefined;
    },
    createInput: function createInput(h, data, children, defaultAction) {
      data.staticClass = (data.staticClass || '') + ' mu-input-content';
      var isFocus = !this.disabled && !this.errorText && this.isFocused;
      var colorClass = isFocus ? this.getNormalColorClass(this.color, true) : '';
      var color = isFocus ? this.getColor(this.color) : '';
      return h('div', {
        staticClass: 'mu-input ' + colorClass,
        class: this.inputClass,
        style: {
          color: color
        }
      }, [this.createIcon(h), this.createLabel(h), h('div', data, [this.$slots.prepend, this.prefix && !this.float ? h('span', { staticClass: 'mu-input-prefix-text' }, this.prefix) : undefined].concat(_toConsumableArray(children), [this.suffix && !this.float ? h('span', { staticClass: 'mu-input-suffix-text' }, this.suffix) : undefined, defaultAction || this.createActionIcon(h), this.$slots.append, this.createUnderline(h), this.createHelpText(h)]))]);
    }
  },
  watch: {
    isFocused: function isFocused(val) {
      if (!this.muFormItem) return;
      val ? this.muFormItem.onFocus() : this.muFormItem.onBlur();
    }
  }
};