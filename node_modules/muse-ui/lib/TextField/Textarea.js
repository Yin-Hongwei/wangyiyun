'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = {
  inheritAttrs: false,
  props: {
    disabled: Boolean,
    rows: {
      type: Number,
      default: 1
    },
    rowsMax: {
      type: Number
    },
    value: {
      type: String,
      default: ''
    }
  },
  mounted: function mounted() {
    this.resizeTextarea();
  },

  watch: {
    value: function value(val, oldVal) {
      var _this = this;

      this.$nextTick(function () {
        _this.resizeTextarea();
      });
    }
  },
  methods: {
    resizeTextarea: function resizeTextarea() {
      var element = this.$refs.textarea;
      if (!element) return;
      var hiddenEl = this.$refs.textareaHidden;
      var lineHeight = window.getComputedStyle(element, null).getPropertyValue('line-height');
      lineHeight = Number(lineHeight.substring(0, lineHeight.indexOf('px')));
      var pt = window.getComputedStyle(element, null).getPropertyValue('padding-top');
      pt = Number(pt.substring(0, pt.indexOf('px')));
      var pd = window.getComputedStyle(element, null).getPropertyValue('padding-bottom');
      pd = Number(pd.substring(0, pd.indexOf('px')));
      var minHeight = pd + pt + lineHeight * this.rows;
      var maxHeight = pd + pt + lineHeight * (this.rowsMax || this.rows);
      var height = hiddenEl.scrollHeight;
      element.style.height = (height < minHeight ? minHeight : height > maxHeight && maxHeight > 0 ? maxHeight : height) + 'px';
    }
  },
  render: function render(h) {
    return h('div', {
      staticClass: 'mu-text-field-multiline'
    }, [h('textarea', {
      staticClass: 'mu-text-field-textarea-hide mu-text-field-input',
      ref: 'textareaHidden',
      attrs: {
        rows: 1
      },
      domProps: {
        value: this.value || ' '
      }
    }), h('textarea', {
      staticClass: 'mu-text-field-input mu-text-field-textarea',
      ref: 'textarea',
      attrs: _extends({
        tabindex: 0
      }, this.$attrs, {
        disabled: this.disabled
      }),
      domProps: {
        value: this.value || ''
      },
      on: this.$listeners
    })]);
  }
};