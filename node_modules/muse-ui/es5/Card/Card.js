export default {
  name: 'mu-card',
  props: {
    raised: Boolean
  },
  render: function render(h) {
    return h('div', {
      staticClass: 'mu-card',
      class: {
        'mu-card__raised': this.raised
      },
      on: this.$listeners
    }, this.$slots.default);
  }
};