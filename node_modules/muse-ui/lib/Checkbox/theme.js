"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (theme) {
  return "\n  .mu-checkbox {\n    color: " + theme.text.secondary + ";\n  }\n  .mu-checkbox.disabled {\n    color: " + theme.text.disabled + ";\n  }\n  .mu-checkbox-checked {\n    color: " + theme.primary + ";\n  }\n  .mu-checkbox.disabled .mu-checkbox-label {\n    color: " + theme.text.disabled + ";\n  }\n  .mu-checkbox-label {\n    color: " + theme.text.primary + ";\n  }\n  ";
};