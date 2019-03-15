var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

import List from '../../List';
import Popover from '../../Popover';

export default {
  provide: function provide() {
    return {
      optionClick: this.optionClick,
      addOption: this.addOption,
      removeOption: this.removeOption,
      isOptionSelected: this.isOptionSelected,
      isMultiple: this.isMultiple
    };
  },

  props: {
    textline: List.props.textline,
    space: Popover.props.space,
    placement: Popover.props.placement,
    dense: _extends({}, List.props.dense, {
      default: true
    }),
    noDataText: {
      type: String,
      default: '暂无数据显示'
    }
  },
  data: function data() {
    return {
      options: [],
      open: false
    };
  },

  computed: {
    selects: function selects() {
      if (!this.multiple) {
        var option = this.getOption(this.value);
        return option ? [{
          label: option.label,
          value: this.value,
          index: 0
        }] : [];
      }
      var selects = Array.isArray(this.value) ? this.value : [];
      var selectItems = [];
      for (var i = 0; i < selects.length; i++) {
        var value = selects[i];
        var _option = this.getOption(value);
        if (_option) {
          selectItems.push({
            label: _option.label,
            value: _option.value,
            index: selectItems.length
          });
          continue;
        }

        if (this.tags) {
          selectItems.push({
            label: value,
            value: value,
            index: selectItems.length
          });
        }
      }
      return selectItems;
    }
  },
  methods: {
    activateInput: function activateInput() {
      this.isFocused = true;
    },
    deactivateInput: function deactivateInput() {
      this.isFocused = false;
      this.selectedIndex = -1;
      this.setSeachValue();
    },
    openMenu: function openMenu() {
      var _this = this;

      this.open = true;
      this.resetOptionVisable();
      var selectedIndex = this.getSelectedIndex();
      this.setFocusIndex(selectedIndex);
      setTimeout(function () {
        return _this.setScollPosition(selectedIndex);
      }, 0);
      if (this.autoComplete) {
        this.$nextTick(function () {
          _this.$refs.input.select();
        });
      }
    },
    closeMenu: function closeMenu() {
      this.open = false;
      this.resetFocusIndex();
    },
    toggleMenu: function toggleMenu() {
      if (this.open) return this.closeMenu();
      this.openMenu();
      this.focusInput();
    },
    resetOptionVisable: function resetOptionVisable() {
      this.options.forEach(function (option) {
        return option.visible = true;
      });
    },
    isMultiple: function isMultiple() {
      return this.multiple;
    },
    isOptionSelected: function isOptionSelected(value) {
      return value === this.value || this.multiple && this.value && this.value.indexOf(value) !== -1;
    },
    addOption: function addOption(option) {
      this.options.push(option);
    },
    removeOption: function removeOption(option) {
      var index = this.options.indexOf(option);
      if (index !== -1) this.options.splice(index, 1);
    },
    getOption: function getOption(value) {
      var option = this.options.filter(function (option) {
        return option.value === value;
      })[0];
      if (option) return option;
      return {
        label: value,
        value: value
      };
    },
    insertValue: function insertValue(selectedValue, value) {
      var index = 0;
      for (var i = 0; i < this.options.length; i++) {
        var item = this.options[i];
        if (item.selected) {
          index = selectedValue.indexOf(item.value) + 1;
          continue;
        }
        if (item.value === value) {
          return selectedValue.splice(index, 0, value);
        }
      }
      return selectedValue.push(value);
    },
    optionClick: function optionClick(value) {
      var _this2 = this;

      var notRemove = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      var selectedValue = this.multiple ? this.value ? [].concat(_toConsumableArray(this.value)) : [] : this.value;
      if (this.multiple) {
        var index = selectedValue.indexOf(value);
        if (index === -1) {
          this.insertValue(selectedValue, value);
        } else {
          if (!notRemove) selectedValue.splice(index, 1);
        }
      } else {
        selectedValue = value;
      }
      this.$emit('input', selectedValue);
      this.$emit('change', selectedValue);
      if (this.multiple && this.autoComplete) this.searchValue = '';
      this.$nextTick(function () {
        _this2.focusInput();
        if (!_this2.multiple) _this2.closeMenu();
      });
    },
    createMenu: function createMenu(h) {
      var _this3 = this;

      var trigger = this.$refs.select;
      return h(Popover, {
        staticClass: 'mu-option-list',
        class: this.popoverClass,
        style: {
          'maxHeight': this.maxHeight + 'px',
          'visibility': this.tags && this.enableOptions.length === 0 ? 'hidden' : '',
          'min-width': trigger ? trigger.offsetWidth + 'px' : ''
        },
        ref: 'popover',
        props: {
          trigger: trigger,
          open: this.open,
          space: this.space,
          cover: !this.autoComplete,
          placement: this.placement
        },
        on: {
          close: function close() {
            return _this3.closeMenu();
          }
        }
      }, [h(List, {
        props: {
          textline: this.textline,
          dense: this.dense
        }
      }, [!this.tags && this.filterable && this.enableOptions.length === 0 ? h('div', { staticClass: 'mu-select-no-data' }, this.noDataText) : null, this.$slots.default])]);
    }
  }
};