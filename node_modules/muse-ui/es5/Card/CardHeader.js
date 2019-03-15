export default {
  name: 'mu-card-header',
  functional: true,
  props: {
    title: String,
    subTitle: String
  },
  render: function render(h, _ref) {
    var data = _ref.data,
        props = _ref.props,
        slots = _ref.slots;

    slots = slots();
    var title = props.title || props.subTitle ? h('div', {
      staticClass: 'mu-card-header-title'
    }, [h('div', { staticClass: 'mu-card-title' }, props.title), h('div', { staticClass: 'mu-card-sub-title' }, props.subTitle)]) : undefined;

    data.staticClass = (data.staticClass || '') + ' mu-card-header';
    return h('div', data, [slots.avatar, title, slots.default]);
  }
};