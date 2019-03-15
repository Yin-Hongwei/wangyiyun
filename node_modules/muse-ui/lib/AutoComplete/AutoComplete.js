'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _input = require('../internal/mixins/input');

var _input2 = _interopRequireDefault(_input);

var _clickOutside = require('../internal/directives/click-outside');

var _clickOutside2 = _interopRequireDefault(_clickOutside);

var _Popover = require('../Popover');

var _Popover2 = _interopRequireDefault(_Popover);

var _List = require('../List');

var _keycode = require('keycode');

var _keycode2 = _interopRequireDefault(_keycode);

var _filter = require('./filter');

var _filter2 = _interopRequireDefault(_filter);

var _utils = require('../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'mu-auto-complete',
  mixins: [_input2.default],
  directives: {
    'click-outside': _clickOutside2.default
  },
  props: {
    data: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    maxHeight: {
      type: [String, Number],
      default: 300
    },
    debounce: {
      type: Number,
      default: 200,
      validator: function validator(val) {
        return val > 0;
      }
    },
    filter: {
      type: Function,
      default: _filter2.default
    },
    maxSearchResults: {
      type: Number,
      default: 0
    },
    openOnFocus: Boolean,
    dense: {
      type: Boolean,
      default: true
    },
    textline: _List.List.props.textline,
    popoverClass: String,
    placement: {
      type: String,
      default: 'bottom-start'
    },
    space: Number,
    avatar: Boolean
  },
  data: function data() {
    return {
      open: false,
      enableData: [],
      focusIndex: -1
    };
  },

  methods: {
    setValue: function setValue(value, item, e) {
      this.open = false;
      this.focusIndex = -1;
      if (!item) return;
      this.$emit('input', value, e);
      this.$emit('select', value, item, e);
      this.$emit('change', value, e);
    },
    onKeydown: function onKeydown(e) {
      if (this.disabled || this.$attrs.readonly) return;
      var code = (0, _keycode2.default)(e);
      var maxIndex = this.enableData.length - 1;
      var minIndex = 0;
      switch (code) {
        case 'enter':
          if (this.focusIndex === -1) return;
          var _enableData$focusInde = this.enableData[this.focusIndex],
              value = _enableData$focusInde.value,
              item = _enableData$focusInde.item;

          this.setValue(value, item, e);
          break;
        case 'up':
          event.preventDefault();
          if (!this.open) return;
          this.focusIndex--;
          if (this.focusIndex < minIndex) this.focusIndex = maxIndex;
          break;
        case 'down':
          event.preventDefault();
          if (!this.open) return;
          this.focusIndex++;
          if (this.focusIndex > maxIndex) this.focusIndex = minIndex;
          break;
        case 'tab':
          this.blur(e);
          break;
        default:
          this.focusIndex = -1;
          break;
      }
      this.$emit('keydown', e);
    },
    onInput: function onInput(e) {
      var _this = this;

      var value = e.target.value;
      if (this.timer) clearTimeout(this.timer);
      this.timer = setTimeout(function () {
        _this.filterData(value);
      }, this.debounce);
      this.$emit('input', value, e);
    },
    focus: function focus(e) {
      this.isFocused = true;
      if (this.openOnFocus) this.filterData(this.value);
      this.$emit('focus', e);
    },
    filterData: function filterData(val) {
      var _this2 = this;

      this.open = true;
      var results = this.filter(val, this.data, this.maxSearchResults);
      switch (true) {
        case Array.isArray(results):
          this.enableData = results;
          return;
        case (0, _utils.isPromise)(results):
          results.then(function (results) {
            _this2.enableData = Array.isArray(results) ? results : [];
          });
          return;
      }
      this.enableData = [];
    },
    blur: function blur(e) {
      this.isFocused = false;
      this.focusIndex = -1;
      this.open = false;
      this.$emit('blur', e);
    },
    setScollPosition: function setScollPosition(index) {
      var _this3 = this;

      if (!this.open) return;
      this.$nextTick(function () {
        var popoverEl = _this3.$refs.list.$el;
        var optionEl = popoverEl.querySelector('.is-focused');
        if (!optionEl) return;
        var optionHeight = optionEl.offsetHeight;
        var scrollTop = optionEl.offsetTop - optionHeight;
        if (scrollTop < optionHeight) scrollTop = 0;
        popoverEl.scrollTop = scrollTop;
      });
    },
    createTextField: function createTextField(h) {
      var _this4 = this;

      var listeners = _extends({}, this.$listeners, {
        input: this.onInput,
        change: function change(e) {
          return _this4.$emit('change', e.target.value, e);
        },
        keydown: this.onKeydown,
        focus: this.focus
      });
      var placeholder = !this.labelFloat ? this.$attrs.placeholder : '';
      return [h('input', {
        staticClass: 'mu-text-field-input',
        ref: 'input',
        attrs: _extends({
          tabindex: 0
        }, this.$attrs, {
          disabled: this.disabled,
          placeholder: placeholder
        }),
        domProps: {
          value: this.value
        },
        on: listeners
      })];
    },
    createContentList: function createContentList(h) {
      var _this5 = this;

      return h(_List.List, {
        staticClass: 'mu-option-list',
        ref: 'list',
        props: {
          dense: this.dense,
          textline: this.textline
        },
        style: {
          'maxHeight': this.maxHeight + 'px'
        }
      }, this.enableData.map(function (item, index) {
        return h(_List.ListItem, {
          staticClass: 'mu-option',
          class: {
            'is-focused': _this5.focusIndex === index
          },
          props: {
            button: true,
            avatar: _this5.avatar
          },
          on: {
            click: function click(e) {
              return _this5.setValue(item.value, item.item, e);
            }
          }
        }, _this5.$scopedSlots.default ? _this5.$scopedSlots.default(_extends({}, item, {
          index: index
        })) : [h('span', {
          domProps: {
            innerHTML: item.highlight
          }
        })]);
      }));
    }
  },
  render: function render(h) {
    var _this6 = this;

    var trigger = this.$refs.input;
    return this.createInput(h, {
      staticClass: 'mu-text-field',
      ref: 'content',
      directives: [{
        name: 'click-outside',
        value: function value(e) {
          if (_this6.$refs.popover.$el.contains(e.target)) return;
          _this6.blur(e);
        }
      }]
    }, [this.createTextField(h), this.$slots.default, h(_Popover2.default, {
      staticClass: [this.popoverClass || ''].join(' '),
      props: {
        trigger: trigger,
        placement: this.placement,
        space: this.space,
        open: this.open
      },
      on: {
        close: function close() {
          return _this6.open = false;
        }
      },
      ref: 'popover',
      style: {
        'visibility': this.enableData.length === 0 ? 'hidden' : '',
        'min-width': trigger ? trigger.offsetWidth + 'px' : ''
      }
    }, [this.createContentList(h), this.$slots.popover])]);
  },

  watch: {
    focusIndex: function focusIndex() {
      this.setScollPosition();
    }
  }
};