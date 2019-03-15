'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  name: 'mu-step-connector',
  functional: true,
  render: function render(h, _ref) {
    var data = _ref.data,
        children = _ref.children;

    data.staticClass = 'mu-step-connector ' + (data.staticClass || '');
    return h('div', data, [h('span', { staticClass: 'mu-step-connector-line' })]);
  }
};