export default {
  name: 'mu-list-item-action',
  functional: true,
  render: function render(h, _ref) {
    var data = _ref.data,
        props = _ref.props,
        children = _ref.children;

    data.staticClass = 'mu-item-action ' + (children && children.length > 1 ? 'is-more' : '') + ' ' + (data.staticClass || '');
    return h('div', data, children);
  }
};