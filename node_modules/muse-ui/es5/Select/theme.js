import { fade } from '../utils/colorManipulator';

export default (function (theme) {
  return '\n  .mu-select-content {\n    color: ' + theme.text.primary + ';\n  }\n  .mu-select-input {\n    color: ' + theme.text.primary + ';\n  }\n  .mu-selection-text.is-active {\n    color: ' + theme.primary + ';\n  }\n  .mu-select-no-data {\n    color: ' + theme.text.disabled + ';\n  }\n  .mu-option.is-selected .mu-item {\n    color: ' + theme.secondary + ';\n  }\n  .mu-option.is-focused {\n    color: ' + theme.secondary + ';\n    background-color: ' + fade(theme.text.primary, 0.1) + ';\n  }\n  .mu-option.is-disabled .mu-item {\n    color: ' + theme.text.disabled + ';\n  }\n  ';
});