"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (theme) {
  return "\n    .mu-badge{\n      background-color: " + theme.track + ";\n      color: " + theme.text.alternate + ";\n    }\n  ";
};