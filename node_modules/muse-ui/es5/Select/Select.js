function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

import input from '../internal/mixins/input.js';
import menu from './mixins/menu';
import selection from './mixins/selection';
import events from './mixins/events';
import keyboard from './mixins/keyboard';

export default {
  name: 'mu-select',
  mixins: [input, menu, selection, events, keyboard],
  props: {
    popoverClass: [String, Object, Array],
    multiple: Boolean,
    maxHeight: {
      type: [String, Number],
      default: 300
    },
    readonly: Boolean,
    chips: Boolean,
    tags: Boolean, // 可创建条目
    placeholder: String,
    separator: {
      type: String,
      default: ','
    },
    filterable: Boolean // enable search option
  },
  computed: {
    autoComplete: function autoComplete() {
      return this.filterable || this.tags;
    }
  },
  render: function render(h) {
    var _createSelection = this.createSelection(h),
        data = _createSelection.data,
        children = _createSelection.children,
        defaultActionIcon = _createSelection.defaultActionIcon;

    return this.createInput(h, data, [].concat(_toConsumableArray(children), [this.createMenu(h)]), defaultActionIcon);
  }
};