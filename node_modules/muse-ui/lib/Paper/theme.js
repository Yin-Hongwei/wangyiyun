"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (theme) {
  return "\n  .mu-paper {\n    color: " + theme.text.primary + ";\n    background-color: " + theme.background.paper + ";\n  }\n  ";
};