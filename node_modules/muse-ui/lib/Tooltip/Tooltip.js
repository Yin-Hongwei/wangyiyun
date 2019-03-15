'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _vue = require('vue');

var _vue2 = _interopRequireDefault(_vue);

var _TooltipContent = require('./TooltipContent');

var _TooltipContent2 = _interopRequireDefault(_TooltipContent);

var _utils = require('../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'mu-tooltip',
  props: {
    content: String,
    placement: _TooltipContent2.default.props.placement,
    open: Boolean,
    tooltipClass: [String, Object, Array]
  },
  data: function data() {
    return {
      active: this.open,
      trigger: null
    };
  },
  beforeCreate: function beforeCreate() {
    if (this.$isServer) return;

    this.tooltipVM = new _vue2.default({
      data: { node: '' },
      render: function render(h) {
        return this.node;
      }
    }).$mount();
  },
  mounted: function mounted() {
    this.trigger = this.$el;
  },

  methods: {
    addEventHandle: function addEventHandle(old, fn) {
      if (!old) {
        return fn;
      } else if (Array.isArray(old)) {
        return old.indexOf(fn) > -1 ? old : old.concat(fn);
      } else {
        return old === fn ? old : [old, fn];
      }
    },
    show: function show() {
      if (this.timer) clearTimeout(this.timer);
      this.active = true;
    },
    hide: function hide() {
      var _this = this;

      if (this.timer) clearTimeout(this.timer);
      this.timer = setTimeout(function () {
        _this.active = false;
      }, 200);
    }
  },
  watch: {
    active: function active(val) {
      this.$emit('update:open', val);
    },
    open: function open(val) {
      this.active = val;
    }
  },
  render: function render(h) {
    var _this2 = this;

    var content = (this.$slots.content && this.$slots.content.length > 0 ? this.$slots.content : this.content) || '';
    if (this.tooltipVM) {
      this.tooltipVM.node = h(_TooltipContent2.default, {
        class: this.tooltipClass,
        props: {
          placement: this.placement,
          open: this.active,
          trigger: this.trigger
        },
        nativeOn: {
          mouseenter: function mouseenter() {
            return _this2.show();
          },
          mouseleave: function mouseleave() {
            return _this2.hide();
          }
        }
      }, content);
    }

    var vnode = (0, _utils.getFirstComponentChild)(this.$slots.default);
    if (!vnode) return vnode;
    vnode.data = vnode.data || {};
    var on = vnode.data.on = vnode.data.on || {};
    var nativeOn = vnode.data.nativeOn = vnode.data.nativeOn || {};
    nativeOn.mouseenter = on.mouseenter = this.addEventHandle(on.mouseenter, this.show);
    nativeOn.mouseleave = on.mouseleave = this.addEventHandle(on.mouseleave, this.hide);
    return vnode;
  }
};