'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _BottomSheet = require('../BottomSheet');

var _BottomSheet2 = _interopRequireDefault(_BottomSheet);

var _Dialog = require('../Dialog');

var _Dialog2 = _interopRequireDefault(_Dialog);

var _Popover = require('../Popover');

var _Popover2 = _interopRequireDefault(_Popover);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  props: {
    container: {
      type: String,
      default: 'popover', validator: function validator(val) {
        return val && ['dialog', 'popover', 'bottomSheet'].indexOf(val) !== -1;
      }
    },
    trigger: {},
    open: Boolean
  },
  methods: {
    createWrap: function createWrap(h, children) {
      switch (this.container) {
        case 'popover':
          return h(_Popover2.default, {
            props: {
              open: this.open,
              cover: true,
              lazy: true,
              trigger: this.trigger
            },
            on: this.$listeners
          }, children);
        case 'dialog':
          return h(_Dialog2.default, {
            props: {
              open: this.open,
              dialogClass: 'mu-picker-dialog',
              transition: 'slide-top'
            },
            on: this.$listeners
          }, children);
        case 'bottomSheet':
          return h(_BottomSheet2.default, {
            props: {
              open: this.open
            },
            on: this.$listeners
          }, children);
      }
    }
  },
  render: function render(h) {
    return this.createWrap(h, this.$slots.default);
  }
};