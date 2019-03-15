import route from '../internal/mixins/route';

export default {
  name: 'mu-breadcrumbs-item',
  mixins: [route],
  props: {
    disabled: Boolean
  },
  render: function render(h) {
    var props = this.to ? this.generateRouteProps() : {};
    return h('li', {
      staticClass: 'mu-breadcrumbs-item',
      class: this.disabled ? 'is-disbaled' : ''
    }, [h(this.to ? 'router-link' : 'a', {
      props: props
    }, this.$slots.default)]);
  }
};