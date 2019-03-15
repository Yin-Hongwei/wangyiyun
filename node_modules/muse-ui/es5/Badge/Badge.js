import { convertClass } from '../utils';
import color from '../internal/mixins/color';

export default {
  name: 'mu-badge',
  mixins: [color],
  props: {
    content: {
      type: String,
      default: ''
    },
    circle: Boolean,
    badgeClass: [String, Object, Array]
  },
  render: function render(h) {
    var slots = this.$slots;
    var isFloat = slots.default && slots.default.length > 0;
    var badge = h('em', {
      staticClass: 'mu-badge ' + convertClass(this.badgeClass).join(' ') + ' ' + this.getColorClass(),
      style: {
        'background-color': this.getColor(this.color)
      },
      class: {
        'mu-badge-circle': this.circle,
        'mu-badge-float': isFloat
      }
    }, slots.content && slots.content.length > 0 ? slots.content : this.content);

    return h('div', {
      staticClass: 'mu-badge-container',
      on: this.$listeners
    }, [slots.default, badge]);
  }
};