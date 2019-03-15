var zIndex = 20141223;

export var getZIndex = function getZIndex() {
  return zIndex++;
};

export var getDOM = function getDOM(dom) {
  if (dom.nodeType === 3) {
    dom = dom.nextElementSibling || dom.nextSibling;
    getDOM(dom);
  }
  return dom;
};