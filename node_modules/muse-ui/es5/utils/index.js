var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

import * as colorsObj from '../theme/colors';

var colors = Object.keys(colorsObj);
export function getColor(color) {
  if (!color || ['primary', 'secondary', 'success', 'warning', 'info', 'error'].indexOf(color) !== -1) return '';
  return colors.indexOf(color) !== -1 ? colorsObj[color] : color;
};

export function isNotNull(val) {
  return val !== undefined && val !== null;
}

export function isNull(val) {
  return val === undefined || val === null;
}

export function getWidth(w) {
  var width = String(w);
  if (width && width.indexOf('%') === -1 && width.indexOf('px') === -1) width += 'px';
  return width;
}

export function isPc() {
  var uaInfo = typeof navigator !== 'undefined' ? navigator.userAgent : '';
  var agents = ['Android', 'iPhone', 'Windows Phone', 'iPad', 'iPod'];
  var flag = true;
  for (var i = 0; i < agents.length; i++) {
    if (uaInfo.indexOf(agents[i]) > 0) {
      flag = false;
      break;
    }
  }
  return flag;
}

export function retina() {
  // 处理retina屏幕显示效果
  if (isPc()) return;
  var classNames = [];
  var pixelRatio = (typeof window === 'undefined' ? 'undefined' : _typeof(window)) !== undefined && window.devicePixelRatio || 1;
  classNames.push('pixel-ratio-' + Math.floor(pixelRatio));
  if (pixelRatio >= 2) {
    classNames.push('retina');
  }

  var html = document.getElementsByTagName('html')[0];

  classNames.forEach(function (className) {
    return html.classList.add(className);
  });
}

/**
 * 将 String, Object, Array 转成 Array
 */
export function convertClass(classes) {
  var newClasses = [];
  if (!classes) return newClasses;
  if (classes instanceof Array) {
    newClasses = newClasses.concat(classes);
  } else if (classes instanceof Object) {
    for (var name in classes) {
      if (classes[name]) newClasses.push(name);
    }
  } else {
    newClasses = newClasses.concat(classes.split(' '));
  }
  return newClasses;
}

export function createSimpleFunctional(c) {
  var el = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'div';
  var name = arguments[2];

  return {
    name: name,
    functional: true,

    render: function render(h, _ref) {
      var data = _ref.data,
          children = _ref.children;

      data.staticClass = (c + ' ' + (data.staticClass || '')).trim();

      return h(el, data, children);
    }
  };
}

export function getFirstComponentChild(children) {
  return children && children.filter(function (c) {
    return c && c.tag;
  })[0];
};

export function isPromise(val) {
  return val && typeof val.then === 'function';
}

export function isObject(val) {
  return val !== null && val && (typeof val === 'undefined' ? 'undefined' : _typeof(val)) === 'object' && !Array.isArray(val);
}

export function getObjAttr(obj, attrs) {
  if (!obj || !attrs) return;
  var value = obj;
  attrs.split('.').forEach(function (key, index) {
    if (!value) return;
    value = value[key];
  });
  return value;
}

export function setObjAttr(obj, attrs, value) {
  attrs.split('.').forEach(function (key, index) {
    if (attrs.length - index <= 1) {
      obj[key] = value;
      return;
    }
    obj = obj[key];
  });
}