export default {
  name: 'mu-divider',
  functional: true,
  props: {
    inset: Boolean,
    shallowInset: Boolean
  },
  render: function render(h, _ref) {
    var data = _ref.data,
        props = _ref.props;

    data.staticClass = (data.staticClass || '') + ' mu-divider ' + (props.inset ? 'inset' : '') + ' ' + (props.shallowInset ? 'shallow-inset' : '');

    return h('hr', data);
  }
};