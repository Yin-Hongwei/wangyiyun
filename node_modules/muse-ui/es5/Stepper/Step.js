var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

export default {
  name: 'mu-step',
  props: {
    active: {
      type: Boolean,
      default: false
    },
    completed: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    index: {
      type: Number
    },
    last: {
      type: Boolean,
      default: false
    }
  },
  render: function render(h) {
    var active = this.active,
        completed = this.completed,
        disabled = this.disabled,
        index = this.index,
        last = this.last;

    var children = [];
    var slots = this.$slots;

    if (slots.default && slots.default.length > 0) {
      slots.default.forEach(function (vNode) {
        if (!vNode.componentOptions || !vNode.componentOptions.propsData) return;
        var num = index + 1;
        vNode.componentOptions.propsData = _extends({ active: active, completed: completed, disabled: disabled, last: last, num: num }, vNode.componentOptions.propsData);
        children.push(vNode);
      });
    }

    return h('div', { staticClass: 'mu-step', on: this.$listeners }, children);
  }
};