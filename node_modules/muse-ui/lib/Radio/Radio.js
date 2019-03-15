'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _select = require('../internal/mixins/select');

var _select2 = _interopRequireDefault(_select);

var _Icon = require('../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _utils = require('../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'mu-radio',
  mixins: [(0, _select2.default)('radio')],
  props: {
    inputValue: {}
  },
  computed: {
    checked: function checked() {
      var inputValue = this.inputValue;
      var value = this.$attrs.value;
      if ((0, _utils.isNull)(inputValue)) return false;
      return inputValue === value;
    }
  },
  methods: {
    toggle: function toggle() {
      this.$emit('change', this.$attrs.value);
    }
  },
  render: function render(h) {
    var defaultSvgUnCheckIcon = h('svg', {
      staticClass: 'mu-radio-icon-uncheck mu-radio-svg-icon',
      attrs: {
        viewBox: '0 0 24 24'
      }
    }, [h('path', {
      attrs: {
        d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z'
      }
    })]);
    var defaultSvgCheckedIcon = h('svg', {
      staticClass: 'mu-radio-icon-checked mu-radio-svg-icon',
      attrs: {
        viewBox: '0 0 24 24'
      }
    }, [h('path', {
      attrs: {
        d: 'M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z'
      }
    })]);
    var view = this.createRipple(h, 'mu-radio-icon', [this.uncheckIcon ? h(_Icon2.default, {
      staticClass: 'mu-radio-icon-uncheck',
      props: {
        value: this.uncheckIcon
      }
    }) : defaultSvgUnCheckIcon, this.checkedIcon ? h(_Icon2.default, {
      staticClass: 'mu-radio-icon-checked',
      props: {
        value: this.checkedIcon
      }
    }) : defaultSvgCheckedIcon]);
    return this.createSelect(h, view);
  }
};