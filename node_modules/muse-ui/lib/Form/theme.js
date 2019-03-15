"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (theme) {
  return "\n  .mu-form-item {\n    color: " + theme.text.secondary + ";\n  }\n\n  .mu-form-item__focus {\n    color: " + theme.primary + ";\n  }\n\n  .mu-form-item__error {\n    color: " + theme.error + ";\n  }\n  .mu-form-item-help {\n    color: " + theme.text.secondary + ";\n  }\n  .mu-form-item__error .mu-form-item-help {\n    color: " + theme.error + ";\n  }\n  ";
};