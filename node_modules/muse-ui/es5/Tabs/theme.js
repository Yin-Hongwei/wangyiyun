import { fade } from '../utils/colorManipulator';
export default (function (theme) {
  return '\n  .mu-tabs{\n    background-color: ' + theme.primary + ';\n    color: ' + fade(theme.text.alternate, 0.7) + ';\n  }\n\n  .mu-tabs-inverse {\n    background-color: ' + theme.background.default + ';\n    color: ' + theme.text.secondary + ';\n  }\n\n  .mu-tab-link-highlight{\n    background-color: ' + theme.secondary + ';\n  }\n  .mu-tab-active {\n    color: ' + theme.text.alternate + ';\n  }\n  .mu-tab-active.is-inverse {\n    color: ' + theme.text.primary + ';\n  }\n  ';
});