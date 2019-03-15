var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import route from '../internal/mixins/route';
import ripple from '../internal/mixins/ripple';
import { isNotNull } from '../utils';
import AbstractButton from '../internal/AbstractButton';

export default {
  name: 'mu-tab',
  mixins: [route, ripple],
  inject: ['tabClick', 'getActiveValue', 'getDefaultVal', 'addTab', 'removeTab', 'setTabHighLineStyle', 'getActiveColor', 'getTabsInverse'],
  props: {
    disabled: Boolean,
    value: {}
  },
  data: function data() {
    return {
      tabVal: 0
    };
  },

  computed: {
    active: function active() {
      return !this.disabled && this.getActiveValue() === this.tabVal;
    },
    activeColor: function activeColor() {
      return this.getActiveColor();
    }
  },
  created: function created() {
    this.tabVal = isNotNull(this.value) ? this.value : this.getDefaultVal();
    this.addTab(this);
  },

  methods: {
    handleClick: function handleClick(e) {
      this.tabClick(this.tabVal, this);
      this.$emit('click', e);
    }
  },
  beforeDestory: function beforeDestory() {
    this.removeTab(this);
  },

  watch: {
    active: function active(val, oldVal) {
      if (val) this.$emit('active');
    },
    value: function value(val) {
      this.tabVal = val;
      this.setTabHighLineStyle();
    }
  },
  render: function render(h) {
    return h(AbstractButton, {
      staticClass: 'mu-tab',
      props: _extends({}, this.generateRouteProps(), {
        containerElement: 'div',
        wrapperClass: 'mu-tab-wrapper',
        disabled: this.disabled,
        ripple: this.ripple,
        rippleOpacity: this.rippleOpacity,
        rippleColor: this.rippleColor
      }),
      style: {
        color: this.active ? this.activeColor.color : ''
      },
      class: _defineProperty({
        'mu-tab-active': this.active,
        'is-inverse': this.active && this.getTabsInverse() && !this.activeColor.className && !this.activeColor.color
      }, this.activeColor.className, this.active),
      on: {
        click: this.handleClick
      }
    }, this.$slots.default);
  }
};