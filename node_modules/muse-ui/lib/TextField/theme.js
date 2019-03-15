"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (theme) {
  return "\n  .mu-input {\n    color: " + theme.text.secondary + ";\n  }\n  .mu-input__focus {\n    color: " + theme.primary + ";\n  }\n  .mu-input__error {\n    color: " + theme.error + ";\n  }\n  .mu-input.disabled .mu-input-content {\n    color: " + theme.text.disabled + ";\n  }\n  .mu-input-help {\n    color: " + theme.text.secondary + ";\n  }\n  .mu-input__error .mu-input-help {\n    color: " + theme.error + ";\n  }\n  .mu-input.has-label .mu-input-label.float {\n    color: " + theme.text.disabled + ";\n  }\n  .mu-input-line {\n    background-color: " + theme.divider + ";\n  }\n  .mu-input-line.disabled{\n    border-bottom-color: " + theme.text.disabled + ";\n  }\n  .mu-input-suffix-text,\n  .mu-input-prefix-text {\n    color: " + theme.text.secondary + ";\n  }\n  .mu-text-field-input {\n    color: " + theme.text.primary + ";\n  }\n  .mu-text-field-suffix {\n    color: " + theme.text.secondary + ";\n  }\n  ";
};