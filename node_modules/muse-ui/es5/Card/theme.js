import { fade } from '../utils/colorManipulator';

export default (function (theme) {
  return '\n    .mu-card {\n      background-color: ' + theme.background.paper + ';\n    }\n    .mu-card-header-title .mu-card-title{\n      color: ' + fade(theme.text.primary, 0.87) + ';\n    }\n    .mu-card-header-title .mu-card-sub-title{\n      color: ' + fade(theme.text.primary, 0.57) + ';\n    }\n    .mu-card-text{\n      color: ' + theme.text.primary + ';\n    }\n    .mu-card-title-container .mu-card-title{\n      color: ' + theme.text.primary + ';\n    }\n    .mu-card-title-container .mu-card-sub-title {\n      color: ' + theme.text.secondary + ';\n    }\n  ';
});