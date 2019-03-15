'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Popover = require('../Popover');

var _Popover2 = _interopRequireDefault(_Popover);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'mu-menu',
  props: {
    popoverClass: [String, Object, Array],
    cover: _Popover2.default.props.cover,
    placement: _Popover2.default.props.placement,
    space: _Popover2.default.props.space,
    open: Boolean,
    openOnHover: Boolean
  },
  data: function data() {
    return {
      active: this.open,
      trigger: null
    };
  },
  mounted: function mounted() {
    this.trigger = this.$el;
  },

  methods: {
    handleMouseEnter: function handleMouseEnter() {
      var _this = this;

      if (!this.openOnHover) return;
      if (this.timer) clearTimeout(this.timer);
      this.timer = setTimeout(function () {
        return _this.show();
      }, 100);
    },
    handleMouseLeave: function handleMouseLeave() {
      var _this2 = this;

      if (!this.openOnHover) return;
      if (this.timer) clearTimeout(this.timer);
      this.timer = setTimeout(function () {
        return _this2.hide();
      }, 100);
    },
    show: function show() {
      this.active = true;
      this.$emit('open');
    },
    hide: function hide() {
      this.active = false;
      this.$emit('close');
    },
    createPopover: function createPopover(h) {
      return h(_Popover2.default, {
        class: this.popoverClass,
        style: {
          'min-width': this.trigger ? this.trigger.offsetWidth + 'px' : ''
        },
        props: {
          cover: this.cover,
          placement: this.placement,
          open: this.active,
          space: this.space,
          trigger: this.trigger
        },
        on: {
          close: this.hide,
          mouseenter: this.handleMouseEnter,
          mouseleave: this.handleMouseLeave
        }
      }, this.$slots.content);
    }
  },
  render: function render(h) {
    var _this3 = this;

    return h('div', {
      staticClass: 'mu-menu',
      class: {
        'mu-menu__open': this.active
      }
    }, [h('div', {
      staticClass: 'mu-menu-activator',
      on: {
        click: function click() {
          return _this3.openOnHover ? null : _this3.active ? _this3.hide() : _this3.show();
        },
        mouseenter: this.handleMouseEnter,
        mouseleave: this.handleMouseLeave
      }
    }, this.$slots.default), this.createPopover(h)]);
  },

  watch: {
    active: function active(val) {
      this.$emit('update:open', val);
    },
    open: function open(val) {
      this.active = val;
    }
  }
};