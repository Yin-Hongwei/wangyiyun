export default (function (theme, type) {
  return '\n    .mu-appbar {\n      background-color: ' + (type === 'light' ? '#f5f5f5' : '#212121') + ';\n      color: ' + theme.text.primary + ';\n    }\n  ';
});