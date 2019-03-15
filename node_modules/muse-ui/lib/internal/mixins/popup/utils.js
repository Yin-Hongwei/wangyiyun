"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var zIndex = 20141223;

var getZIndex = exports.getZIndex = function getZIndex() {
  return zIndex++;
};

var getDOM = exports.getDOM = function getDOM(dom) {
  if (dom.nodeType === 3) {
    dom = dom.nextElementSibling || dom.nextSibling;
    getDOM(dom);
  }
  return dom;
};