'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _select = require('../internal/mixins/select');

var _select2 = _interopRequireDefault(_select);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'mu-switch',
  mixins: [(0, _select2.default)('switch')],
  props: {
    inputValue: Boolean
  },
  computed: {
    checked: function checked() {
      return this.inputValue;
    }
  },
  methods: {
    toggle: function toggle() {
      this.$emit('change', !this.inputValue);
    }
  },
  render: function render(h) {
    var view = h('div', {
      staticClass: 'mu-switch-container'
    }, [h('div', { staticClass: 'mu-switch-track' }), this.createRipple(h, 'mu-switch-thumb')]);

    return this.createSelect(h, view);
  }
};