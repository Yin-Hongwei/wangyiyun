import Form from './Form';
import Icon from '../Icon';
import { getWidth, isPromise, isObject } from '../utils';
import { SlideTopTransition } from '../internal/transitions';

export default {
  name: 'mu-form-item',
  inject: ['muForm'],
  provide: function provide() {
    return {
      muFormItem: this
    };
  },

  props: {
    label: String,
    labelFloat: Boolean,
    icon: String,
    prop: String,
    labelWidth: Form.props.labelWidth,
    rules: Array,
    helpText: String,
    errorText: String,
    labelPosition: String
  },
  data: function data() {
    return {
      focus: false,
      errorMessage: this.errorText
    };
  },
  mounted: function mounted() {
    this.setHelpLeft();
    this.muForm.addItem(this);
  },
  updated: function updated() {
    var _this = this;

    setTimeout(function () {
      return _this.setHelpLeft();
    }, 0);
  },
  beforeDestroy: function beforeDestroy() {
    this.muForm.removeItem(this);
  },

  methods: {
    validate: function validate() {
      var _this2 = this;

      if (!this.rules || this.rules.length === 0) return true;
      var promises = [];
      var promiseMessages = [];
      for (var i = 0; i < this.rules.length; i++) {
        var rule = this.rules[i];
        var result = rule.validate(this.muForm.getValue(this.prop), this.muForm.model);
        if (isPromise(result)) {
          promises.push(result);
          promiseMessages.push(rule.message);
          continue;
        }
        if (!this.validateResult(result, rule.message)) return false;
      }

      // promise 处理
      if (promises.length > 0 && typeof Promise !== 'undefined') {
        return Promise.all(promises).then(function (results) {
          for (var _i = 0; _i < results.length; _i++) {
            var valid = _this2.validateResult(results[_i], promiseMessages[_i]);
            if (!valid) return Promise.reject(false);
          }
          _this2.errorMessage = '';
          return true;
        });
      }

      this.errorMessage = '';
      return true;
    },
    validateResult: function validateResult(result, message) {
      switch (true) {
        case isObject(result) && !result.valid:
          this.errorMessage = result.message || message;
          return false;
        case !result:
          this.errorMessage = message;
          return false;
      }
      return true;
    },
    onFocus: function onFocus() {
      this.focus = true;
    },
    onBlur: function onBlur() {
      this.focus = false;
      if (this.muForm.autoValidate) this.validate();
    },
    createIcon: function createIcon(h) {
      if (!this.icon) return;
      return h(Icon, {
        staticClass: 'mu-form-item-icon',
        props: {
          value: this.icon
        }
      });
    },
    createContent: function createContent(h) {
      return h('div', {
        staticClass: 'mu-form-item-content',
        ref: 'content'
      }, this.$slots.default);
    },
    createLabel: function createLabel(h) {
      var labelWidth = getWidth(this.labelWidth || this.muForm.labelWidth);
      var value = this.muForm.model && this.prop && this.muForm.model[this.prop];
      return h('div', {
        staticClass: 'mu-form-item-label',
        class: {
          'is-float': this.labelFloat && !this.focus && !value && value !== 0
        },
        style: {
          width: labelWidth
        }
      }, this.$slots.label || this.label);
    },
    createHelpText: function createHelpText(h) {
      if (!this.helpText && !this.errorMessage) return;
      return h('div', {
        staticClass: 'mu-form-item-help',
        ref: 'help'
      }, this.errorMessage || this.helpText);
    },
    setHelpLeft: function setHelpLeft() {
      if (!this.$refs.help || !this.$refs.content) return;
      this.$refs.help.style.left = this.$refs.content.offsetLeft + 'px';
    }
  },
  render: function render(h) {
    var labelPosition = this.labelPosition || this.muForm.labelPosition;
    return h('div', {
      staticClass: 'mu-form-item',
      class: {
        'mu-form-item__float-label': this.labelFloat,
        'mu-form-item__label-left': labelPosition === 'left',
        'mu-form-item__label-right': labelPosition === 'right',
        'mu-form-item__has-icon': !!this.icon && labelPosition === 'top',
        'mu-form-item__has-label': !!this.label || this.$slots.label && this.$slots.label.length > 0,
        'mu-form-item__focus': this.focus,
        'mu-form-item__error': !!this.errorMessage
      }
    }, [this.createLabel(h), labelPosition === 'top' ? this.createIcon(h) : undefined, h(SlideTopTransition, {}, [this.createHelpText(h)]), this.createContent(h)]);
  },

  watch: {
    errorText: function errorText(val) {
      this.errorMessage = val;
    },
    rules: function rules() {
      if (this.errorMessage) this.validate();
    }
  }
};