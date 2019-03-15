import color from '../internal/mixins/color';

export default {
  name: 'mu-appbar',
  mixins: [color],
  props: {
    zDepth: {
      type: [Number, String],
      default: 4,
      validator: function validator(val) {
        return val >= 0 && val <= 24;
      }
    },
    title: {
      type: String,
      default: ''
    },
    textColor: String
  },
  render: function render(h) {
    var slots = this.$slots;
    var left = slots.left && slots.left.length > 0 ? h('div', { staticClass: 'mu-appbar-left' }, slots.left) : undefined;
    var right = slots.right && slots.right.length > 0 ? h('div', { staticClass: 'mu-appbar-right' }, slots.right) : undefined;
    var center = h('div', { staticClass: 'mu-appbar-title' }, slots.default && slots.default.length > 0 ? slots.default : this.title);

    return h('header', {
      staticClass: 'mu-appbar ' + this.getColorClass() + ' ' + this.getTextColorClass() + ' mu-elevation-' + this.zDepth,
      style: {
        'background-color': this.getColor(this.color),
        color: this.getColor(this.textColor)
      }
    }, [left, center, right]);
  }
};