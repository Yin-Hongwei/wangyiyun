'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _List = require('../List');

var _Checkbox = require('../Checkbox');

var _Checkbox2 = _interopRequireDefault(_Checkbox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'mu-option',
  inject: ['addOption', 'removeOption', 'optionClick', 'isOptionSelected', 'isMultiple'],
  props: {
    label: {
      required: true,
      type: String
    },
    value: {
      required: true
    },
    disabled: Boolean,
    ripple: {
      type: Boolean,
      default: true
    },
    avatar: Boolean
  },
  data: function data() {
    return {
      visible: true,
      focused: false
    };
  },

  computed: {
    selected: function selected() {
      return this.isOptionSelected(this.value);
    }
  },
  created: function created() {
    this.addOption(this);
  },
  destroyed: function destroyed() {
    this.removeOption(this);
  },
  render: function render(h) {
    var _this = this;

    var defaultItem = [this.isMultiple() ? h(_List.ListAction, [h(_Checkbox2.default, {
      props: {
        inputValue: this.selected,
        color: 'secondary',
        disabled: this.disabled,
        tabIndex: -1
      }
    })]) : undefined, h(_List.ListItemContent, [h(_List.ListItemTitle, {}, this.label)])];
    return h(_List.ListItem, {
      staticClass: 'mu-option',
      ref: 'listItem',
      class: {
        'is-selected': this.selected,
        'is-disabled': this.disabled,
        'is-focused': this.focused
      },
      props: {
        ripple: this.ripple,
        open: this.open,
        avatar: this.avatar,
        button: !this.disabled,
        tabIndex: -1
      },
      directives: [{
        name: 'show',
        value: this.visible
      }],
      on: {
        click: function click(e) {
          return _this.optionClick(_this.value);
        }
      }
    }, this.$slots.default && this.$slots.default.length > 0 ? this.$slots.default : defaultItem);
  }
};