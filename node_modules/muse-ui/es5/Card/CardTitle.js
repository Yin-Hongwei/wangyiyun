export default {
  name: 'mu-card-title',
  functional: true,
  props: {
    title: String,
    subTitle: String
  },
  render: function render(h, _ref) {
    var data = _ref.data,
        props = _ref.props;

    data.staticClass = (data.staticClass || '') + ' mu-card-title-container';
    return h('div', data, [h('div', { staticClass: 'mu-card-title' }, props.title), h('div', { staticClass: 'mu-card-sub-title' }, props.subTitle)]);
  }
};