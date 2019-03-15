'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _route = require('../internal/mixins/route');

var _route2 = _interopRequireDefault(_route);

var _ripple = require('../internal/mixins/ripple');

var _ripple2 = _interopRequireDefault(_ripple);

var _button = require('../internal/mixins/button');

var _button2 = _interopRequireDefault(_button);

var _color = require('../internal/mixins/color');

var _color2 = _interopRequireDefault(_color);

var _AbstractButton = require('../internal/AbstractButton');

var _AbstractButton2 = _interopRequireDefault(_AbstractButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.default = {
  name: 'mu-button',
  mixins: [_route2.default, _ripple2.default, _button2.default, _color2.default],
  props: {
    fab: Boolean,
    flat: Boolean,
    icon: Boolean,
    small: Boolean,
    large: Boolean,
    round: Boolean,
    textColor: String,
    fullWidth: Boolean
  },
  computed: {
    buttonClass: function buttonClass() {
      var _ref;

      var colorClass = this.getNormalColorClass(this.color, this.icon || this.flat);
      var textColorClass = this.getTextColorClass();
      return _ref = {
        'mu-fab-button': this.fab,
        'mu-flat-button': this.flat,
        'mu-icon-button': this.icon,
        'mu-raised-button': !this.icon && !this.flat && !this.fab,
        'mu-button-small': this.small,
        'mu-button-large': this.large,
        'mu-button-full-width': !this.fab && !this.icon && this.fullWidth
      }, _defineProperty(_ref, colorClass, true), _defineProperty(_ref, textColorClass, true), _defineProperty(_ref, 'mu-button-round', this.round), _defineProperty(_ref, 'is-focus', this.focus), _ref;
    }
  },
  render: function render(h) {
    var flat = this.flat || this.icon;
    var color = this.getColor(this.textColor);
    if (!color && flat) color = this.getColor(this.color);
    return h(_AbstractButton2.default, {
      staticClass: 'mu-button',
      class: this.buttonClass,
      style: {
        'background-color': !flat ? this.getColor(this.color) : '',
        color: color
      },
      props: _extends({
        wrapperClass: 'mu-button-wrapper',
        disabled: this.disabled,
        keyboardFocused: this.keyboardFocused,
        type: this.type,
        centerRipple: this.icon,
        ripple: this.ripple,
        rippleOpacity: this.rippleOpacity,
        rippleColor: this.rippleColor
      }, this.generateRouteProps()),
      on: this.getListener()
    }, this.$slots.default);
  }
};