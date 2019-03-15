'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _Chip = require('../../Chip');

var _Chip2 = _interopRequireDefault(_Chip);

var _clickOutside = require('../../internal/directives/click-outside');

var _clickOutside2 = _interopRequireDefault(_clickOutside);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

exports.default = {
  directives: {
    'click-outside': _clickOutside2.default
  },
  data: function data() {
    return {
      searchValue: '',
      shouldBreak: false,
      selectedIndex: -1
    };
  },
  created: function created() {
    this.setSeachValue();
  },

  methods: {
    setSeachValue: function setSeachValue() {
      if (!this.multiple) this.searchValue = this.selects.map(function (item) {
        return item.label;
      }).join(',');
    },
    changeSelectedIndex: function changeSelectedIndex(keycode) {
      var maxIndex = this.selects.length - 1;
      if (keycode === 'left') {
        this.selectedIndex = this.selectedIndex === -1 ? maxIndex : this.selectedIndex - 1;
      } else if (keycode === 'right') {
        this.selectedIndex = this.selectedIndex >= maxIndex ? -1 : this.selectedIndex + 1;
      } else if (this.selectedIndex === -1) {
        this.selectedIndex = maxIndex;
        return;
      }

      if (['backspace', 'delete'].indexOf(keycode) !== -1) {
        var newIndex = this.selectedIndex === maxIndex ? this.selectedIndex - 1 : this.selects[this.selectedIndex + 1] ? this.selectedIndex : -1;
        if (this.selectedIndex !== -1) this.removeSelection(this.selectedIndex);
        this.selectedIndex = newIndex;
      }
    },
    resetSelectedIndex: function resetSelectedIndex() {
      this.selectedIndex = -1;
    },
    removeSelection: function removeSelection(index) {
      var value = [].concat(_toConsumableArray(this.value));
      value.splice(index, 1);
      this.$emit('input', value);
      this.$emit('change', value);
    },
    createSlotSelection: function createSlotSelection(item) {
      return this.$scopedSlots.selection(_extends({}, item, {
        disabled: this.disabled || this.readonly
      }));
    },
    createChipSelection: function createChipSelection(h, _ref) {
      var _this = this;

      var selected = _ref.selected,
          index = _ref.index,
          label = _ref.label;

      return h(_Chip2.default, {
        attrs: {
          tabindex: -1
        },
        props: {
          delete: true,
          selected: selected
        },
        on: {
          delete: function _delete() {
            if (_this.disabled || _this.readonly) return;
            _this.removeSelection(index);
          }
        }
      }, label);
    },
    createTextSelection: function createTextSelection(h, _ref2, isLast) {
      var selected = _ref2.selected,
          label = _ref2.label;

      return h('span', {
        staticClass: 'mu-selection-text',
        class: {
          'is-active': selected
        }
      }, isLast ? label : label + this.separator);
    },
    createSelectedItems: function createSelectedItems(h) {
      var _this2 = this;

      return this.selects.map(function (item, index) {
        var selected = _this2.selectedIndex === index;

        switch (true) {
          case !!_this2.$scopedSlots.selection:
            return _this2.createSlotSelection(_extends({}, item, { selected: selected }));
          case _this2.chips:
            return _this2.createChipSelection(h, _extends({}, item, { selected: selected }));
          default:
            return _this2.createTextSelection(h, _extends({}, item, { selected: selected }), index === _this2.selects.length - 1);
        }
      });
    },
    createInputElement: function createInputElement(h) {
      var _this3 = this;

      var enable = this.autoComplete && !this.readonly;
      return [h('input', {
        staticClass: 'mu-select-input',
        ref: 'input',
        class: {
          'is-enable': enable,
          'is-break': this.shouldBreak
        },
        attrs: {
          tabindex: 0,
          readonly: !enable,
          placeholder: !this.value && this.value !== 0 ? this.placeholder : ''
        },
        domProps: {
          value: this.searchValue
        },
        on: _extends({}, this.createListeners(), {
          input: function input(e) {
            _this3.searchValue = e.target.value;
          }
        })
      }), h('input', {
        attrs: _extends({}, this.$attrs, {
          type: 'hidden'
        }),
        domProps: {
          value: this.value
        }
      })];
    },
    createSelection: function createSelection(h) {
      var _this4 = this;

      var content = h('div', {
        staticClass: 'mu-select-content'
      }, this.multiple ? [].concat(_toConsumableArray(this.createSelectedItems(h)), _toConsumableArray(this.createInputElement(h))) : this.createInputElement(h));
      return {
        data: {
          staticClass: 'mu-select',
          class: {
            'is-open': this.open,
            'is-multi': this.multiple,
            'is-filterable': this.autoComplete,
            'is-readonly': this.readonly,
            'is-disabled': this.disabled
          },
          on: {
            click: function click(e) {
              if (_this4.disabled || _this4.readonly || _this4.autoComplete && e.target === _this4.$refs.input) return;
              _this4.toggleMenu();
            }
          },
          directives: [{
            name: 'click-outside',
            value: function value(e) {
              if (_this4.open && _this4.$refs.popover.$el.contains(e.target)) return;
              _this4.blur();
            }
          }],
          ref: 'select'
        },
        children: [content],
        defaultActionIcon: h('div', {
          staticClass: 'mu-select-action'
        }, [h('svg', {
          staticClass: 'mu-select-icon',
          attrs: {
            viewBox: '0 0 24 24'
          }
        }, [h('path', {
          attrs: {
            d: 'M7 10l5 5 5-5z'
          }
        })])])
      };
    }
  },
  watch: {
    searchValue: function searchValue(val) {
      var _this5 = this;

      if (this.$refs.input) {
        if (this.$refs.input.scrollWidth > this.$refs.input.clientWidth) {
          this.shouldBreak = true;
        } else if (val === '') {
          this.shouldBreak = false;
        }
      }

      this.options.forEach(function (option) {
        option.visible = !_this5.autoComplete || !val || option.label.toLowerCase().indexOf(val.toLowerCase()) !== -1;
      });
      this.resetFocusIndex();
      if (this.isFocused && !this.open) this.open = true;
    },
    selects: function selects() {
      this.setSeachValue();
    }
  }
};