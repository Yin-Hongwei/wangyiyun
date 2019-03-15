'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _AbstractButton = require('../internal/AbstractButton');

var _AbstractButton2 = _interopRequireDefault(_AbstractButton);

var _Icon = require('../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _route = require('../internal/mixins/route');

var _route2 = _interopRequireDefault(_route);

var _ripple = require('../internal/mixins/ripple');

var _ripple2 = _interopRequireDefault(_ripple);

var _utils = require('../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.default = {
  name: 'mu-bottom-nav-item',
  mixins: [_route2.default, _ripple2.default],
  inject: ['getBottomNavValue', 'getBottomNavShift', 'getDefaultVal', 'bottomNavItemClick', 'getActiveColor'],
  props: {
    icon: String,
    title: String,
    value: {}
  },
  data: function data() {
    return {
      itemVal: null
    };
  },
  created: function created() {
    this.itemVal = (0, _utils.isNotNull)(this.value) ? this.value : this.getDefaultVal();
  },

  computed: {
    active: function active() {
      return this.getBottomNavValue() === this.itemVal;
    },
    activeClassName: function activeClassName() {
      return this.getActiveColor().className;
    },
    activeColor: function activeColor() {
      return this.getActiveColor().color;
    },
    shift: function shift() {
      return this.getBottomNavShift();
    }
  },
  methods: {
    handleClick: function handleClick() {
      this.bottomNavItemClick(this.itemVal);
    }
  },
  watch: {
    value: function value(val) {
      this.itemVal = val;
    }
  },
  render: function render(h) {
    var icon = this.icon ? h(_Icon2.default, { class: 'mu-bottom-item-icon', props: { value: this.icon } }) : undefined;
    var title = this.title ? h('span', { staticClass: 'mu-bottom-item-text' }, this.title) : undefined;
    return h(_AbstractButton2.default, {
      staticClass: 'mu-bottom-item',
      class: _defineProperty({
        'mu-bottom-item-active': this.active,
        'is-shift': this.active && this.shift
      }, this.activeClassName, !this.shift && this.active),
      style: {
        color: !this.shift && this.active ? this.activeColor : ''
      },
      props: _extends({
        ripple: !this.shift && this.ripple,
        containerElement: 'div',
        wrapperClass: 'mu-bottom-item-wrapper'
      }, this.generateRouteProps()),
      on: {
        click: this.handleClick
      }
    }, [icon, title]);
  }
};