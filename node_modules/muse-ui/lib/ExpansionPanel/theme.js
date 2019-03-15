"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (theme) {
  return "\n  .mu-expansion-panel {\n    color: " + theme.text.primary + ";\n    border-top-color: " + theme.divider + ";\n  }\n  .mu-expansion-toggle-btn {\n    color: " + theme.text.secondary + ";\n  }\n  .mu-expansion-panel-actions {\n    border-top-color: " + theme.divider + ";\n  }\n  ";
};