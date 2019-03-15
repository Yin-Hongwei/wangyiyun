export default {
  name: 'mu-breadcrumbs',
  props: {
    divider: {
      type: String,
      default: '/'
    }
  },
  methods: {
    createChildren: function createChildren(h) {
      var _this = this;

      if (!this.$slots.default) return;
      var divider = this.$slots.divider ? this.$slots.divider : this.divider;
      var children = [];
      var length = this.$slots.default.length;
      var dividerData = { staticClass: 'mu-breadcrumbs-divider' };

      this.$slots.default.forEach(function (el, i) {
        children.push(el);
        if (!el.componentOptions || el.componentOptions.tag !== 'mu-breadcrumbs-item' || i === length - 1) return;

        children.push(_this.$createElement('li', dividerData, divider));
      });
      return children;
    }
  },
  render: function render(h) {
    return h('ul', {
      staticClass: 'mu-breadcrumbs',
      on: this.$listeners
    }, this.createChildren(h));
  }
};