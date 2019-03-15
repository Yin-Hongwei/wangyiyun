/* muse-ui myron.liu version 3.0.0-rc.7 */
import Vue from 'vue';

var red50 = '#ffebee';
var red100 = '#ffcdd2';
var red200 = '#ef9a9a';
var red300 = '#e57373';
var red400 = '#ef5350';
var red500 = '#f44336';
var red600 = '#e53935';
var red700 = '#d32f2f';
var red800 = '#c62828';
var red900 = '#b71c1c';
var redA100 = '#ff8a80';
var redA200 = '#ff5252';
var redA400 = '#ff1744';
var redA700 = '#d50000';
var red = red500;

var pink50 = '#fce4ec';
var pink100 = '#f8bbd0';
var pink200 = '#f48fb1';
var pink300 = '#f06292';
var pink400 = '#ec407a';
var pink500 = '#e91e63';
var pink600 = '#d81b60';
var pink700 = '#c2185b';
var pink800 = '#ad1457';
var pink900 = '#880e4f';
var pinkA100 = '#ff80ab';
var pinkA200 = '#ff4081';
var pinkA400 = '#f50057';
var pinkA700 = '#c51162';
var pink = pink500;

var purple50 = '#f3e5f5';
var purple100 = '#e1bee7';
var purple200 = '#ce93d8';
var purple300 = '#ba68c8';
var purple400 = '#ab47bc';
var purple500 = '#9c27b0';
var purple600 = '#8e24aa';
var purple700 = '#7b1fa2';
var purple800 = '#6a1b9a';
var purple900 = '#4a148c';
var purpleA100 = '#ea80fc';
var purpleA200 = '#e040fb';
var purpleA400 = '#d500f9';
var purpleA700 = '#aa00ff';
var purple = purple500;

var deepPurple50 = '#ede7f6';
var deepPurple100 = '#d1c4e9';
var deepPurple200 = '#b39ddb';
var deepPurple300 = '#9575cd';
var deepPurple400 = '#7e57c2';
var deepPurple500 = '#673ab7';
var deepPurple600 = '#5e35b1';
var deepPurple700 = '#512da8';
var deepPurple800 = '#4527a0';
var deepPurple900 = '#311b92';
var deepPurpleA100 = '#b388ff';
var deepPurpleA200 = '#7c4dff';
var deepPurpleA400 = '#651fff';
var deepPurpleA700 = '#6200ea';
var deepPurple = deepPurple500;

var indigo50 = '#e8eaf6';
var indigo100 = '#c5cae9';
var indigo200 = '#9fa8da';
var indigo300 = '#7986cb';
var indigo400 = '#5c6bc0';
var indigo500 = '#3f51b5';
var indigo600 = '#3949ab';
var indigo700 = '#303f9f';
var indigo800 = '#283593';
var indigo900 = '#1a237e';
var indigoA100 = '#8c9eff';
var indigoA200 = '#536dfe';
var indigoA400 = '#3d5afe';
var indigoA700 = '#304ffe';
var indigo = indigo500;

var blue50 = '#e3f2fd';
var blue100 = '#bbdefb';
var blue200 = '#90caf9';
var blue300 = '#64b5f6';
var blue400 = '#42a5f5';
var blue500 = '#2196f3';
var blue600 = '#1e88e5';
var blue700 = '#1976d2';
var blue800 = '#1565c0';
var blue900 = '#0d47a1';
var blueA100 = '#82b1ff';
var blueA200 = '#448aff';
var blueA400 = '#2979ff';
var blueA700 = '#2962ff';
var blue = blue500;

var lightBlue50 = '#e1f5fe';
var lightBlue100 = '#b3e5fc';
var lightBlue200 = '#81d4fa';
var lightBlue300 = '#4fc3f7';
var lightBlue400 = '#29b6f6';
var lightBlue500 = '#03a9f4';
var lightBlue600 = '#039be5';
var lightBlue700 = '#0288d1';
var lightBlue800 = '#0277bd';
var lightBlue900 = '#01579b';
var lightBlueA100 = '#80d8ff';
var lightBlueA200 = '#40c4ff';
var lightBlueA400 = '#00b0ff';
var lightBlueA700 = '#0091ea';
var lightBlue = lightBlue500;

var cyan50 = '#e0f7fa';
var cyan100 = '#b2ebf2';
var cyan200 = '#80deea';
var cyan300 = '#4dd0e1';
var cyan400 = '#26c6da';
var cyan500 = '#00bcd4';
var cyan600 = '#00acc1';
var cyan700 = '#0097a7';
var cyan800 = '#00838f';
var cyan900 = '#006064';
var cyanA100 = '#84ffff';
var cyanA200 = '#18ffff';
var cyanA400 = '#00e5ff';
var cyanA700 = '#00b8d4';
var cyan = cyan500;

var teal50 = '#e0f2f1';
var teal100 = '#b2dfdb';
var teal200 = '#80cbc4';
var teal300 = '#4db6ac';
var teal400 = '#26a69a';
var teal500 = '#009688';
var teal600 = '#00897b';
var teal700 = '#00796b';
var teal800 = '#00695c';
var teal900 = '#004d40';
var tealA100 = '#a7ffeb';
var tealA200 = '#64ffda';
var tealA400 = '#1de9b6';
var tealA700 = '#00bfa5';
var teal = teal500;

var green50 = '#e8f5e9';
var green100 = '#c8e6c9';
var green200 = '#a5d6a7';
var green300 = '#81c784';
var green400 = '#66bb6a';
var green500 = '#4caf50';
var green600 = '#43a047';
var green700 = '#388e3c';
var green800 = '#2e7d32';
var green900 = '#1b5e20';
var greenA100 = '#b9f6ca';
var greenA200 = '#69f0ae';
var greenA400 = '#00e676';
var greenA700 = '#00c853';
var green = green500;

var lightGreen50 = '#f1f8e9';
var lightGreen100 = '#dcedc8';
var lightGreen200 = '#c5e1a5';
var lightGreen300 = '#aed581';
var lightGreen400 = '#9ccc65';
var lightGreen500 = '#8bc34a';
var lightGreen600 = '#7cb342';
var lightGreen700 = '#689f38';
var lightGreen800 = '#558b2f';
var lightGreen900 = '#33691e';
var lightGreenA100 = '#ccff90';
var lightGreenA200 = '#b2ff59';
var lightGreenA400 = '#76ff03';
var lightGreenA700 = '#64dd17';
var lightGreen = lightGreen500;

var lime50 = '#f9fbe7';
var lime100 = '#f0f4c3';
var lime200 = '#e6ee9c';
var lime300 = '#dce775';
var lime400 = '#d4e157';
var lime500 = '#cddc39';
var lime600 = '#c0ca33';
var lime700 = '#afb42b';
var lime800 = '#9e9d24';
var lime900 = '#827717';
var limeA100 = '#f4ff81';
var limeA200 = '#eeff41';
var limeA400 = '#c6ff00';
var limeA700 = '#aeea00';
var lime = lime500;

var yellow50 = '#fffde7';
var yellow100 = '#fff9c4';
var yellow200 = '#fff59d';
var yellow300 = '#fff176';
var yellow400 = '#ffee58';
var yellow500 = '#ffeb3b';
var yellow600 = '#fdd835';
var yellow700 = '#fbc02d';
var yellow800 = '#f9a825';
var yellow900 = '#f57f17';
var yellowA100 = '#ffff8d';
var yellowA200 = '#ffff00';
var yellowA400 = '#ffea00';
var yellowA700 = '#ffd600';
var yellow = yellow500;

var amber50 = '#fff8e1';
var amber100 = '#ffecb3';
var amber200 = '#ffe082';
var amber300 = '#ffd54f';
var amber400 = '#ffca28';
var amber500 = '#ffc107';
var amber600 = '#ffb300';
var amber700 = '#ffa000';
var amber800 = '#ff8f00';
var amber900 = '#ff6f00';
var amberA100 = '#ffe57f';
var amberA200 = '#ffd740';
var amberA400 = '#ffc400';
var amberA700 = '#ffab00';
var amber = amber500;

var orange50 = '#fff3e0';
var orange100 = '#ffe0b2';
var orange200 = '#ffcc80';
var orange300 = '#ffb74d';
var orange400 = '#ffa726';
var orange500 = '#ff9800';
var orange600 = '#fb8c00';
var orange700 = '#f57c00';
var orange800 = '#ef6c00';
var orange900 = '#e65100';
var orangeA100 = '#ffd180';
var orangeA200 = '#ffab40';
var orangeA400 = '#ff9100';
var orangeA700 = '#ff6d00';
var orange = orange500;

var deepOrange50 = '#fbe9e7';
var deepOrange100 = '#ffccbc';
var deepOrange200 = '#ffab91';
var deepOrange300 = '#ff8a65';
var deepOrange400 = '#ff7043';
var deepOrange500 = '#ff5722';
var deepOrange600 = '#f4511e';
var deepOrange700 = '#e64a19';
var deepOrange800 = '#d84315';
var deepOrange900 = '#bf360c';
var deepOrangeA100 = '#ff9e80';
var deepOrangeA200 = '#ff6e40';
var deepOrangeA400 = '#ff3d00';
var deepOrangeA700 = '#dd2c00';
var deepOrange = deepOrange500;

var brown50 = '#efebe9';
var brown100 = '#d7ccc8';
var brown200 = '#bcaaa4';
var brown300 = '#a1887f';
var brown400 = '#8d6e63';
var brown500 = '#795548';
var brown600 = '#6d4c41';
var brown700 = '#5d4037';
var brown800 = '#4e342e';
var brown900 = '#3e2723';
var brown = brown500;

var blueGrey50 = '#eceff1';
var blueGrey100 = '#cfd8dc';
var blueGrey200 = '#b0bec5';
var blueGrey300 = '#90a4ae';
var blueGrey400 = '#78909c';
var blueGrey500 = '#607d8b';
var blueGrey600 = '#546e7a';
var blueGrey700 = '#455a64';
var blueGrey800 = '#37474f';
var blueGrey900 = '#263238';
var blueGrey = blueGrey500;

var grey50 = '#fafafa';
var grey100 = '#f5f5f5';
var grey200 = '#eeeeee';
var grey300 = '#e0e0e0';
var grey400 = '#bdbdbd';
var grey500 = '#9e9e9e';
var grey600 = '#757575';
var grey700 = '#616161';
var grey800 = '#424242';
var grey900 = '#212121';
var grey = grey500;

var black = '#000000';
var white = '#ffffff';

var transparent = 'rgba(0, 0, 0, 0)';
var fullBlack = 'rgba(0, 0, 0, 1)';
var darkBlack = 'rgba(0, 0, 0, 0.87)';
var lightBlack = 'rgba(0, 0, 0, 0.54)';
var minBlack = 'rgba(0, 0, 0, 0.26)';
var faintBlack = 'rgba(0, 0, 0, 0.12)';
var fullWhite = 'rgba(255, 255, 255, 1)';
var darkWhite = 'rgba(255, 255, 255, 0.87)';
var lightWhite = 'rgba(255, 255, 255, 0.54)';

var colorsObj = /*#__PURE__*/Object.freeze({
  red50: red50,
  red100: red100,
  red200: red200,
  red300: red300,
  red400: red400,
  red500: red500,
  red600: red600,
  red700: red700,
  red800: red800,
  red900: red900,
  redA100: redA100,
  redA200: redA200,
  redA400: redA400,
  redA700: redA700,
  red: red,
  pink50: pink50,
  pink100: pink100,
  pink200: pink200,
  pink300: pink300,
  pink400: pink400,
  pink500: pink500,
  pink600: pink600,
  pink700: pink700,
  pink800: pink800,
  pink900: pink900,
  pinkA100: pinkA100,
  pinkA200: pinkA200,
  pinkA400: pinkA400,
  pinkA700: pinkA700,
  pink: pink,
  purple50: purple50,
  purple100: purple100,
  purple200: purple200,
  purple300: purple300,
  purple400: purple400,
  purple500: purple500,
  purple600: purple600,
  purple700: purple700,
  purple800: purple800,
  purple900: purple900,
  purpleA100: purpleA100,
  purpleA200: purpleA200,
  purpleA400: purpleA400,
  purpleA700: purpleA700,
  purple: purple,
  deepPurple50: deepPurple50,
  deepPurple100: deepPurple100,
  deepPurple200: deepPurple200,
  deepPurple300: deepPurple300,
  deepPurple400: deepPurple400,
  deepPurple500: deepPurple500,
  deepPurple600: deepPurple600,
  deepPurple700: deepPurple700,
  deepPurple800: deepPurple800,
  deepPurple900: deepPurple900,
  deepPurpleA100: deepPurpleA100,
  deepPurpleA200: deepPurpleA200,
  deepPurpleA400: deepPurpleA400,
  deepPurpleA700: deepPurpleA700,
  deepPurple: deepPurple,
  indigo50: indigo50,
  indigo100: indigo100,
  indigo200: indigo200,
  indigo300: indigo300,
  indigo400: indigo400,
  indigo500: indigo500,
  indigo600: indigo600,
  indigo700: indigo700,
  indigo800: indigo800,
  indigo900: indigo900,
  indigoA100: indigoA100,
  indigoA200: indigoA200,
  indigoA400: indigoA400,
  indigoA700: indigoA700,
  indigo: indigo,
  blue50: blue50,
  blue100: blue100,
  blue200: blue200,
  blue300: blue300,
  blue400: blue400,
  blue500: blue500,
  blue600: blue600,
  blue700: blue700,
  blue800: blue800,
  blue900: blue900,
  blueA100: blueA100,
  blueA200: blueA200,
  blueA400: blueA400,
  blueA700: blueA700,
  blue: blue,
  lightBlue50: lightBlue50,
  lightBlue100: lightBlue100,
  lightBlue200: lightBlue200,
  lightBlue300: lightBlue300,
  lightBlue400: lightBlue400,
  lightBlue500: lightBlue500,
  lightBlue600: lightBlue600,
  lightBlue700: lightBlue700,
  lightBlue800: lightBlue800,
  lightBlue900: lightBlue900,
  lightBlueA100: lightBlueA100,
  lightBlueA200: lightBlueA200,
  lightBlueA400: lightBlueA400,
  lightBlueA700: lightBlueA700,
  lightBlue: lightBlue,
  cyan50: cyan50,
  cyan100: cyan100,
  cyan200: cyan200,
  cyan300: cyan300,
  cyan400: cyan400,
  cyan500: cyan500,
  cyan600: cyan600,
  cyan700: cyan700,
  cyan800: cyan800,
  cyan900: cyan900,
  cyanA100: cyanA100,
  cyanA200: cyanA200,
  cyanA400: cyanA400,
  cyanA700: cyanA700,
  cyan: cyan,
  teal50: teal50,
  teal100: teal100,
  teal200: teal200,
  teal300: teal300,
  teal400: teal400,
  teal500: teal500,
  teal600: teal600,
  teal700: teal700,
  teal800: teal800,
  teal900: teal900,
  tealA100: tealA100,
  tealA200: tealA200,
  tealA400: tealA400,
  tealA700: tealA700,
  teal: teal,
  green50: green50,
  green100: green100,
  green200: green200,
  green300: green300,
  green400: green400,
  green500: green500,
  green600: green600,
  green700: green700,
  green800: green800,
  green900: green900,
  greenA100: greenA100,
  greenA200: greenA200,
  greenA400: greenA400,
  greenA700: greenA700,
  green: green,
  lightGreen50: lightGreen50,
  lightGreen100: lightGreen100,
  lightGreen200: lightGreen200,
  lightGreen300: lightGreen300,
  lightGreen400: lightGreen400,
  lightGreen500: lightGreen500,
  lightGreen600: lightGreen600,
  lightGreen700: lightGreen700,
  lightGreen800: lightGreen800,
  lightGreen900: lightGreen900,
  lightGreenA100: lightGreenA100,
  lightGreenA200: lightGreenA200,
  lightGreenA400: lightGreenA400,
  lightGreenA700: lightGreenA700,
  lightGreen: lightGreen,
  lime50: lime50,
  lime100: lime100,
  lime200: lime200,
  lime300: lime300,
  lime400: lime400,
  lime500: lime500,
  lime600: lime600,
  lime700: lime700,
  lime800: lime800,
  lime900: lime900,
  limeA100: limeA100,
  limeA200: limeA200,
  limeA400: limeA400,
  limeA700: limeA700,
  lime: lime,
  yellow50: yellow50,
  yellow100: yellow100,
  yellow200: yellow200,
  yellow300: yellow300,
  yellow400: yellow400,
  yellow500: yellow500,
  yellow600: yellow600,
  yellow700: yellow700,
  yellow800: yellow800,
  yellow900: yellow900,
  yellowA100: yellowA100,
  yellowA200: yellowA200,
  yellowA400: yellowA400,
  yellowA700: yellowA700,
  yellow: yellow,
  amber50: amber50,
  amber100: amber100,
  amber200: amber200,
  amber300: amber300,
  amber400: amber400,
  amber500: amber500,
  amber600: amber600,
  amber700: amber700,
  amber800: amber800,
  amber900: amber900,
  amberA100: amberA100,
  amberA200: amberA200,
  amberA400: amberA400,
  amberA700: amberA700,
  amber: amber,
  orange50: orange50,
  orange100: orange100,
  orange200: orange200,
  orange300: orange300,
  orange400: orange400,
  orange500: orange500,
  orange600: orange600,
  orange700: orange700,
  orange800: orange800,
  orange900: orange900,
  orangeA100: orangeA100,
  orangeA200: orangeA200,
  orangeA400: orangeA400,
  orangeA700: orangeA700,
  orange: orange,
  deepOrange50: deepOrange50,
  deepOrange100: deepOrange100,
  deepOrange200: deepOrange200,
  deepOrange300: deepOrange300,
  deepOrange400: deepOrange400,
  deepOrange500: deepOrange500,
  deepOrange600: deepOrange600,
  deepOrange700: deepOrange700,
  deepOrange800: deepOrange800,
  deepOrange900: deepOrange900,
  deepOrangeA100: deepOrangeA100,
  deepOrangeA200: deepOrangeA200,
  deepOrangeA400: deepOrangeA400,
  deepOrangeA700: deepOrangeA700,
  deepOrange: deepOrange,
  brown50: brown50,
  brown100: brown100,
  brown200: brown200,
  brown300: brown300,
  brown400: brown400,
  brown500: brown500,
  brown600: brown600,
  brown700: brown700,
  brown800: brown800,
  brown900: brown900,
  brown: brown,
  blueGrey50: blueGrey50,
  blueGrey100: blueGrey100,
  blueGrey200: blueGrey200,
  blueGrey300: blueGrey300,
  blueGrey400: blueGrey400,
  blueGrey500: blueGrey500,
  blueGrey600: blueGrey600,
  blueGrey700: blueGrey700,
  blueGrey800: blueGrey800,
  blueGrey900: blueGrey900,
  blueGrey: blueGrey,
  grey50: grey50,
  grey100: grey100,
  grey200: grey200,
  grey300: grey300,
  grey400: grey400,
  grey500: grey500,
  grey600: grey600,
  grey700: grey700,
  grey800: grey800,
  grey900: grey900,
  grey: grey,
  black: black,
  white: white,
  transparent: transparent,
  fullBlack: fullBlack,
  darkBlack: darkBlack,
  lightBlack: lightBlack,
  minBlack: minBlack,
  faintBlack: faintBlack,
  fullWhite: fullWhite,
  darkWhite: darkWhite,
  lightWhite: lightWhite
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var defineProperty = function (obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var slicedToArray = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if (Symbol.iterator in Object(arr)) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();

var toConsumableArray = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  } else {
    return Array.from(arr);
  }
};

var colors = Object.keys(colorsObj);
function getColor(color) {
  if (!color || ['primary', 'secondary', 'success', 'warning', 'info', 'error'].indexOf(color) !== -1) return '';
  return colors.indexOf(color) !== -1 ? colorsObj[color] : color;
}
function isNotNull(val) {
  return val !== undefined && val !== null;
}

function isNull(val) {
  return val === undefined || val === null;
}

function getWidth(w) {
  var width = String(w);
  if (width && width.indexOf('%') === -1 && width.indexOf('px') === -1) width += 'px';
  return width;
}

function isPc() {
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

/**
 * 将 String, Object, Array 转成 Array
 */
function convertClass(classes) {
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

function createSimpleFunctional(c) {
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

function getFirstComponentChild(children) {
  return children && children.filter(function (c) {
    return c && c.tag;
  })[0];
}
function isPromise(val) {
  return val && typeof val.then === 'function';
}

function isObject(val) {
  return val !== null && val && (typeof val === 'undefined' ? 'undefined' : _typeof(val)) === 'object' && !Array.isArray(val);
}

function getObjAttr(obj, attrs) {
  if (!obj || !attrs) return;
  var value = obj;
  attrs.split('.').forEach(function (key, index) {
    if (!value) return;
    value = value[key];
  });
  return value;
}

var color = {
  props: {
    color: String
  },
  methods: {
    getColorClass: function getColorClass() {
      var addInverse = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      return this.getNormalColorClass(this.color, false, addInverse);
    },
    getTextColorClass: function getTextColorClass() {
      return this.getNormalColorClass(this.textColor, true, true);
    },
    getColor: function getColor$$1(color, disabled) {
      if (disabled || this.disabled) return;
      return getColor(color);
    },
    getNormalColorClass: function getNormalColorClass(color) {
      var text = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var addInverse = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

      var classObj = {};
      var themes = ['primary', 'secondary', 'success', 'warning', 'info', 'error'];

      themes.forEach(function (theme) {
        classObj['mu-' + theme + (text ? '-text' : '') + '-color'] = color === theme;
      });
      if (!text && addInverse) classObj['mu-inverse'] = !!color;

      return convertClass(classObj).join(' ');
    }
  }
};

var BaseTheme = (function (theme) {
  return "\n  body{\n    background-color: " + theme.background.default + ";\n    color: " + theme.text.primary + ";\n  }\n\n  a{\n    color: " + theme.secondary + ";\n  }\n  ";
});

var ColorTheme = (function (theme) {
  return "\n  .mu-primary-color {\n    background-color: " + theme.primary + ";\n  }\n  .mu-secondary-color {\n    background-color: " + theme.secondary + ";\n  }\n  .mu-success-color {\n    background-color: " + theme.success + ";\n  }\n  .mu-warning-color {\n    background-color: " + theme.warning + ";\n  }\n  .mu-info-color {\n    background-color: " + theme.info + ";\n  }\n  .mu-error-color {\n    background-color: " + theme.error + ";\n  }\n  .mu-inverse {\n    color: #fff;\n  }\n  .mu-primary-text-color {\n    color: " + theme.primary + ";\n  }\n  .mu-secondary-text-color {\n    color: " + theme.secondary + ";\n  }\n  .mu-success-text-color {\n    color: " + theme.success + ";\n  }\n  .mu-warning-text-color {\n    color: " + theme.warning + ";\n  }\n  .mu-info-text-color {\n    color: " + theme.info + ";\n  }\n  .mu-error-text-color {\n    color: " + theme.error + ";\n  }\n  ";
});

var light = {
  type: 'light',
  primary: blue,
  secondary: pinkA200,
  success: green,
  warning: yellow600,
  info: blue,
  error: red,
  track: grey400,
  text: {
    primary: darkBlack,
    secondary: lightBlack,
    alternate: white,
    disabled: 'rgba(0, 0, 0, 0.38)',
    hint: 'rgba(0, 0, 0, 0.38)' // 提示文字颜色
  },
  divider: faintBlack,
  background: {
    paper: white,
    chip: grey300,
    default: grey50
  }
};

var dark = {
  type: 'dark',
  primary: blue700,
  secondary: pinkA200,
  success: green,
  warning: yellow600,
  info: blue,
  error: red,
  track: grey600,
  text: {
    primary: white,
    secondary: 'rgba(255, 255, 255, 0.7)',
    alternate: '#303030',
    disabled: 'rgba(255, 255, 255, 0.3)',
    hint: 'rgba(255, 255, 255, 0.3)' // 提示文字颜色
  },
  divider: 'rgba(255, 255, 255, 0.3)',
  background: {
    paper: grey800,
    chip: grey700,
    default: '#303030'
  }
};

var themes = [BaseTheme, ColorTheme];

var vars = {
  light: light,
  dark: dark
};

function getThemeStyle() {
  var themeId = 'muse-theme';
  var styleEl = document.getElementById(themeId);
  if (styleEl) return styleEl;
  styleEl = document.createElement('style');
  styleEl.id = themeId;
  document.body.appendChild(styleEl);
  return styleEl;
}

var theme = {
  addCreateTheme: function addCreateTheme(theme) {
    var length = themes.length;
    themes.splice(length - 1, 0, theme);
    return this;
  },
  add: function add(name) {
    var varObj = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var extendName = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'light';

    var theme = _extends({
      name: name
    }, vars[extendName], varObj);
    vars[name] = theme;
    return this;
  },
  use: function use(name) {
    var themeEl = getThemeStyle();
    themeEl.innerHTML = themes.map(function (theme) {
      return theme(vars[name], vars[name].type, name);
    }).join(' ');
    return this;
  },
  generate: function generate(name) {
    return themes.map(function (theme) {
      return theme(vars[name], vars[name].type, name);
    }).join(' ');
  }
};

/**
 * material-ui colorManipulator.js
 * https://github.com/mui-org/material-ui/blob/master/src/utils/colorManipulator.js
 */

/**
 * Returns a number whose value is limited to the given range.
 *
 * @param {number} value The value to be clamped
 * @param {number} min The lower boundary of the output range
 * @param {number} max The upper boundary of the output range
 * @returns {number} A number in the range [min, max]
 */
function clamp(value, min, max) {
  if (value < min) {
    return min;
  }
  if (value > max) {
    return max;
  }
  return value;
}

/**
 * Converts a color object with type and values to a string.
 *
 * @param {object} color - Decomposed color
 * @param {string} color.type - One of, 'rgb', 'rgba', 'hsl', 'hsla'
 * @param {array} color.values - [n,n,n] or [n,n,n,n]
 * @returns {string} A CSS color string
 */
function convertColorToString(color) {
  var type = color.type,
      values = color.values;


  if (type.indexOf('rgb') > -1) {
    // Only convert the first 3 values to int (i.e. not alpha)
    for (var i = 0; i < 3; i++) {
      values[i] = parseInt(values[i]);
    }
  }

  var colorString = void 0;

  if (type.indexOf('hsl') > -1) {
    colorString = color.type + '(' + values[0] + ', ' + values[1] + '%, ' + values[2] + '%';
  } else {
    colorString = color.type + '(' + values[0] + ', ' + values[1] + ', ' + values[2];
  }

  if (values.length === 4) {
    colorString += ', ' + color.values[3] + ')';
  } else {
    colorString += ')';
  }

  return colorString;
}

/**
 * Converts a color from CSS hex format to CSS rgb format.
 *
 *  @param {string} color - Hex color, i.e. #nnn or #nnnnnn
 *  @returns {string} A CSS rgb color string
 */
function convertHexToRGB(color) {
  if (color.length === 4) {
    var extendedColor = '#';
    for (var i = 1; i < color.length; i++) {
      extendedColor += color.charAt(i) + color.charAt(i);
    }
    color = extendedColor;
  }

  var values = {
    r: parseInt(color.substr(1, 2), 16),
    g: parseInt(color.substr(3, 2), 16),
    b: parseInt(color.substr(5, 2), 16)
  };

  return 'rgb(' + values.r + ', ' + values.g + ', ' + values.b + ')';
}

/**
 * Returns an object with the type and values of a color.
 *
 * Note: Does not support rgb % values and color names.
 *
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @returns {{type: string, values: number[]}} A MUI color object
 */
function decomposeColor(color) {
  if (color.charAt(0) === '#') {
    return decomposeColor(convertHexToRGB(color));
  }

  var marker = color.indexOf('(');
  var type = color.substring(0, marker);
  var values = color.substring(marker + 1, color.length - 1).split(',');
  values = values.map(function (value) {
    return parseFloat(value);
  });

  return { type: type, values: values };
}

/**
 * The relative brightness of any point in a color space,
 * normalized to 0 for darkest black and 1 for lightest white.
 *
 * Formula: https://www.w3.org/WAI/GL/wiki/Relative_luminance
 *
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @returns {number} The relative brightness of the color in the range 0 - 1
 */
function getLuminance(color) {
  color = decomposeColor(color);

  if (color.type.indexOf('rgb') > -1) {
    var rgb = color.values.map(function (val) {
      val /= 255; // normalized
      return val <= 0.03928 ? val / 12.92 : Math.pow((val + 0.055) / 1.055, 2.4);
    });
    return Number((0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2]).toFixed(3)); // Truncate at 3 digits
  } else if (color.type.indexOf('hsl') > -1) {
    return color.values[2] / 100;
  }
}

/**
 * Darken or lighten a colour, depending on its luminance.
 * Light colors are darkened, dark colors are lightened.
 *
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @param {number} coefficient=0.15 - multiplier in the range 0 - 1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 */
function emphasize(color) {
  var coefficient = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.15;

  return getLuminance(color) > 0.5 ? darken(color, coefficient) : lighten(color, coefficient);
}

/**
 * Set the absolute transparency of a color.
 * Any existing alpha values are overwritten.
 *
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @param {number} value - value to set the alpha channel to in the range 0 -1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 */
function fade(color, value) {
  color = decomposeColor(color);
  value = clamp(value, 0, 1);

  if (color.type === 'rgb' || color.type === 'hsl') {
    color.type += 'a';
  }
  color.values[3] = value;

  return convertColorToString(color);
}

/**
 * Darkens a color.
 *
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @param {number} coefficient - multiplier in the range 0 - 1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 */
function darken(color, coefficient) {
  color = decomposeColor(color);
  coefficient = clamp(coefficient, 0, 1);

  if (color.type.indexOf('hsl') > -1) {
    color.values[2] *= 1 - coefficient;
  } else if (color.type.indexOf('rgb') > -1) {
    for (var i = 0; i < 3; i++) {
      color.values[i] *= 1 - coefficient;
    }
  }
  return convertColorToString(color);
}

/**
 * Lightens a color.
 *
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @param {number} coefficient - multiplier in the range 0 - 1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 */
function lighten(color, coefficient) {
  color = decomposeColor(color);
  coefficient = clamp(coefficient, 0, 1);

  if (color.type.indexOf('hsl') > -1) {
    color.values[2] += (100 - color.values[2]) * coefficient;
  } else if (color.type.indexOf('rgb') > -1) {
    for (var i = 0; i < 3; i++) {
      color.values[i] += (255 - color.values[i]) * coefficient;
    }
  }

  return convertColorToString(color);
}

var ButtonTheme = (function (theme) {
  return '\n  .mu-raised-button {\n    background-color: ' + theme.background.paper + ';\n    color: ' + theme.text.primary + ';\n  }\n  .mu-raised-button.disabled{\n    color: ' + fade(theme.text.primary, 0.3) + ';\n    background-color: ' + darken(theme.text.alternate, 0.1) + ';\n  }\n  .mu-flat-button {\n    color: ' + theme.text.primary + ';\n  }\n  .mu-flat-button.disabled {\n    color: ' + theme.text.disabled + ';\n  }\n  .mu-icon-button {\n    color: ' + theme.text.primary + ';\n  }\n  .mu-icon-button.disabled {\n    color: ' + theme.text.disabled + ';\n  }\n  .mu-fab-button {\n    background-color: ' + theme.primary + ';\n    color: ' + theme.text.alternate + ';\n  }\n  .mu-fab-button.disabled {\n    color: ' + fade(theme.text.primary, 0.3) + ';\n    background-color: ' + darken(theme.text.alternate, 0.1) + ';\n  }\n  ';
});

var route = {
  props: {
    href: String,
    target: String,
    to: {
      type: [String, Object]
    },
    tag: {
      type: String,
      default: 'a'
    },
    activeClass: String,
    event: {
      type: [String, Array],
      default: 'click'
    },
    exact: Boolean,
    exactActiveClass: String,
    append: Boolean,
    replace: Boolean
  },
  methods: {
    generateRouteProps: function generateRouteProps() {
      return {
        href: this.href,
        target: this.target,
        to: this.to,
        tag: this.tag,
        activeClass: this.activeClass,
        event: this.event,
        exact: this.exact,
        exactActiveClass: this.exactActiveClass,
        append: this.append,
        replace: this.replace
      };
    }
  }
};

var ripple = {
  props: {
    ripple: {
      type: Boolean,
      default: true
    },
    rippleColor: {
      type: String,
      default: ''
    },
    rippleOpacity: {
      type: Number
    }
  }
};

var button = {
  props: {
    disabled: Boolean,
    type: {
      type: String,
      default: 'button'
    },
    keyboardFocused: Boolean
  },
  data: function data() {
    return {
      focus: this.focus
    };
  },

  methods: {
    handleClick: function handleClick(e) {
      this.$emit('click', e);
    },
    handleKeyboardFocus: function handleKeyboardFocus(isFocus) {
      this.focus = isFocus;
      this.$emit('keyboard-focus', isFocus);
    },
    handleHover: function handleHover(e) {
      this.$emit('hover', e);
    },
    handleHoverExit: function handleHoverExit(e) {
      this.$emit('hover-exit', e);
    },
    getListener: function getListener() {
      return _extends({}, this.$listeners, {
        click: this.handleClick,
        keyboardFocus: this.handleKeyboardFocus,
        hover: this.handleHover,
        hoverExit: this.handleHoverExit
      });
    }
  }
};

var CircleRipple = {
  props: {
    mergeStyle: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    color: {
      type: String,
      default: ''
    },
    opacity: {
      type: Number
    }
  },
  computed: {
    styles: function styles() {
      return _extends({
        color: this.color,
        opacity: this.opacity
      }, this.mergeStyle);
    }
  },
  render: function render(h) {
    return h('transition', {
      props: {
        name: 'mu-ripple'
      }
    }, [h('div', {
      class: 'mu-circle-ripple',
      style: this.styles
    })]);
  }
};

function getScrollEventTarget(element) {
  var currentNode = element;
  while (currentNode && currentNode.tagName !== 'HTML' && currentNode.nodeType === 1) {
    var overflowY = window.getComputedStyle(currentNode).overflowY;
    if (overflowY === 'scroll' || overflowY === 'auto') {
      return currentNode;
    }
    currentNode = currentNode.parentNode;
  }
  return window;
}

function getScrollTop(element) {
  if (element === window) {
    return Math.max(window.pageYOffset || 0, document.documentElement.scrollTop);
  } else {
    return element.scrollTop;
  }
}

function getOffset(el) {
  var box = el.getBoundingClientRect();
  var body = document.body;
  var clientTop = el.clientTop || body.clientTop || 0;
  var clientLeft = el.clientLeft || body.clientLeft || 0;
  var scrollTop = window.pageYOffset || el.scrollTop;
  var scrollLeft = window.pageXOffset || el.scrollLeft;
  return {
    top: box.top + scrollTop - clientTop,
    left: box.left + scrollLeft - clientLeft
  };
}

function transitionEnd(el, fun) {
  var arr = ['msTransitionEnd', 'mozTransitionEnd', 'oTransitionEnd', 'webkitTransitionEnd', 'transitionend'];
  var handler = {
    handleEvent: function handleEvent(event) {
      arr.forEach(function (eventName) {
        el.removeEventListener(eventName, handler, false);
      });
      fun.apply(el, arguments);
    }
  };
  arr.forEach(function (eventName) {
    el.addEventListener(eventName, handler, false);
  });
}

function hasClass(el, cls) {
  if (!el || !cls) return false;
  if (cls.indexOf(' ') !== -1) throw new Error('className should not contain space.');
  if (el.classList) {
    return el.classList.contains(cls);
  } else {
    return (' ' + el.className + ' ').indexOf(' ' + cls + ' ') > -1;
  }
}
function addClass(el, cls) {
  if (!el) return;
  var curClass = el.className;
  var classes = (cls || '').split(' ');

  for (var i = 0, j = classes.length; i < j; i++) {
    var clsName = classes[i];
    if (!clsName) continue;

    if (el.classList) {
      el.classList.add(clsName);
    } else {
      if (!hasClass(el, clsName)) {
        curClass += ' ' + clsName;
      }
    }
  }
  if (!el.classList) {
    el.className = curClass;
  }
}
function removeClass(el, cls) {
  if (!el || !cls) return;
  var classes = cls.split(' ');
  var curClass = ' ' + el.className + ' ';

  for (var i = 0, j = classes.length; i < j; i++) {
    var clsName = classes[i];
    if (!clsName) continue;

    if (el.classList) {
      el.classList.remove(clsName);
    } else {
      if (hasClass(el, clsName)) {
        curClass = curClass.replace(' ' + clsName + ' ', ' ');
      }
    }
  }
  if (!el.classList) {
    el.className = curClass ? curClass.trim() : curClass;
  }
}

var TouchRipple = {
  props: {
    centerRipple: {
      type: Boolean,
      default: false
    },
    rippleWrapperClass: {},
    tag: {
      type: String,
      default: 'div'
    },
    autoBind: {
      type: Boolean,
      default: true
    },
    color: {
      type: String,
      default: ''
    },
    opacity: Number
  },
  data: function data() {
    return {
      nextKey: 0,
      ripples: []
    };
  },

  methods: {
    start: function start(event, isRippleTouchGenerated) {
      if (this.ignoreNextMouseDown && !isRippleTouchGenerated) {
        this.ignoreNextMouseDown = false;
        return;
      }
      this.ripples.push({
        key: this.nextKey++,
        color: this.color,
        opacity: this.opacity,
        style: this.centerRipple ? {} : this.getRippleStyle(event)
      });
      this.ignoreNextMouseDown = isRippleTouchGenerated;
    },
    end: function end() {
      if (this.ripples.length === 0) return;
      this.ripples.splice(0, 1);
      this.stopListeningForScrollAbort();
    },
    stopListeningForScrollAbort: function stopListeningForScrollAbort() {
      if (!this.handleMove) this.handleMove = this.handleTouchMove.bind(this);
      document.body.removeEventListener('touchmove', this.handleMove, false);
    },
    startListeningForScrollAbort: function startListeningForScrollAbort(event) {
      this.firstTouchY = event.touches[0].clientY;
      this.firstTouchX = event.touches[0].clientX;
      document.body.addEventListener('touchmove', this.handleMove, false);
    },
    handleMouseDown: function handleMouseDown(event) {
      if (event.button === 0) {
        this.start(event, false);
      }
    },
    handleTouchStart: function handleTouchStart(event) {
      if (event.touches) {
        this.startListeningForScrollAbort(event);
        this.startTime = Date.now();
      }
      this.start(event.touches[0], true);
    },
    handleTouchMove: function handleTouchMove(event) {
      var deltaY = Math.abs(event.touches[0].clientY - this.firstTouchY);
      var deltaX = Math.abs(event.touches[0].clientX - this.firstTouchX);
      // 判断滚动 6px
      if (deltaY > 6 || deltaX > 6) this.end();
      // const timeSinceStart = Math.abs(Date.now() - this.startTime)
      // if (timeSinceStart > 300) {
      //   this.stopListeningForScrollAbort()
      //   return
      // }
    },
    getRippleStyle: function getRippleStyle(event) {
      var el = this.$refs.holder;
      if (!el) return;
      var offset = getOffset(el);
      var elHeight = el.offsetHeight;
      var elWidth = el.offsetWidth;
      var isTouchEvent = event.touches && event.touches.length;
      var pageX = isTouchEvent ? event.touches[0].pageX : event.pageX;
      var pageY = isTouchEvent ? event.touches[0].pageY : event.pageY;
      var pointerX = pageX - offset.left;
      var pointerY = pageY - offset.top;
      var topLeftDiag = this.calcDiag(pointerX, pointerY);
      var topRightDiag = this.calcDiag(elWidth - pointerX, pointerY);
      var botRightDiag = this.calcDiag(elWidth - pointerX, elHeight - pointerY);
      var botLeftDiag = this.calcDiag(pointerX, elHeight - pointerY);
      var rippleRadius = Math.max(topLeftDiag, topRightDiag, botRightDiag, botLeftDiag);
      var rippleSize = rippleRadius * 2;
      var left = pointerX - rippleRadius;
      var top = pointerY - rippleRadius;

      return {
        directionInvariant: true,
        height: rippleSize + 'px',
        width: rippleSize + 'px',
        top: top + 'px',
        left: left + 'px'
      };
    },
    calcDiag: function calcDiag(a, b) {
      return Math.sqrt(a * a + b * b);
    },
    createCircleRipple: function createCircleRipple(h) {
      return this.ripples.map(function (ripple) {
        return h(CircleRipple, {
          props: {
            color: ripple.color,
            opacity: ripple.opacity,
            mergeStyle: ripple.style
          },
          key: ripple.key
        });
      });
    }
  },
  render: function render(h) {
    var listeners = this.autoBind ? {
      mousedown: this.handleMouseDown,
      mouseup: this.end,
      mouseleave: this.end,
      touchstart: this.handleTouchStart,
      touchend: this.end,
      touchcancel: this.end
    } : {};
    return h(this.tag, {
      on: listeners
    }, [h('div', {
      class: this.rippleWrapperClass,
      attrs: {
        class: 'mu-ripple-wrapper'
      },
      ref: 'holder'
    }, this.createCircleRipple(h)), this.$slots.default]);
  }
};

var FocusRipple = {
  props: {
    color: {
      type: String,
      default: ''
    },
    opacity: {
      type: Number
    }
  },
  computed: {
    style: function style() {
      return {
        color: this.color,
        opacity: this.opacity
      };
    }
  },
  methods: {
    setRippleSize: function setRippleSize() {
      var el = this.$refs.innerCircle;
      var height = el.offsetHeight;
      var width = el.offsetWidth;
      var size = Math.max(height, width);

      var oldTop = 0;

      if (el.style.top.indexOf('px', el.style.top.length - 2) !== -1) {
        oldTop = parseInt(el.style.top);
      }

      el.style.height = size + 'px';
      el.style.top = height / 2 - size / 2 + oldTop + 'px';
    }
  },
  mounted: function mounted() {
    this.setRippleSize();
  },
  updated: function updated() {
    this.setRippleSize();
  },
  render: function render(h) {
    return h('div', {
      class: 'mu-focus-ripple-wrapper'
    }, [h('div', {
      ref: 'innerCircle',
      style: this.style,
      class: 'mu-focus-ripple'
    })]);
  }
};

var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var keycode = createCommonjsModule(function (module, exports) {
// Source: http://jsfiddle.net/vWx8V/
// http://stackoverflow.com/questions/5603195/full-list-of-javascript-keycodes

/**
 * Conenience method returns corresponding value for given keyName or keyCode.
 *
 * @param {Mixed} keyCode {Number} or keyName {String}
 * @return {Mixed}
 * @api public
 */

exports = module.exports = function(searchInput) {
  // Keyboard Events
  if (searchInput && 'object' === typeof searchInput) {
    var hasKeyCode = searchInput.which || searchInput.keyCode || searchInput.charCode;
    if (hasKeyCode) searchInput = hasKeyCode;
  }

  // Numbers
  if ('number' === typeof searchInput) return names[searchInput]

  // Everything else (cast to string)
  var search = String(searchInput);

  // check codes
  var foundNamedKey = codes[search.toLowerCase()];
  if (foundNamedKey) return foundNamedKey

  // check aliases
  var foundNamedKey = aliases[search.toLowerCase()];
  if (foundNamedKey) return foundNamedKey

  // weird character?
  if (search.length === 1) return search.charCodeAt(0)

  return undefined
};

/**
 * Get by name
 *
 *   exports.code['enter'] // => 13
 */

var codes = exports.code = exports.codes = {
  'backspace': 8,
  'tab': 9,
  'enter': 13,
  'shift': 16,
  'ctrl': 17,
  'alt': 18,
  'pause/break': 19,
  'caps lock': 20,
  'esc': 27,
  'space': 32,
  'page up': 33,
  'page down': 34,
  'end': 35,
  'home': 36,
  'left': 37,
  'up': 38,
  'right': 39,
  'down': 40,
  'insert': 45,
  'delete': 46,
  'command': 91,
  'left command': 91,
  'right command': 93,
  'numpad *': 106,
  'numpad +': 107,
  'numpad -': 109,
  'numpad .': 110,
  'numpad /': 111,
  'num lock': 144,
  'scroll lock': 145,
  'my computer': 182,
  'my calculator': 183,
  ';': 186,
  '=': 187,
  ',': 188,
  '-': 189,
  '.': 190,
  '/': 191,
  '`': 192,
  '[': 219,
  '\\': 220,
  ']': 221,
  "'": 222
};

// Helper aliases

var aliases = exports.aliases = {
  'windows': 91,
  '⇧': 16,
  '⌥': 18,
  '⌃': 17,
  '⌘': 91,
  'ctl': 17,
  'control': 17,
  'option': 18,
  'pause': 19,
  'break': 19,
  'caps': 20,
  'return': 13,
  'escape': 27,
  'spc': 32,
  'pgup': 33,
  'pgdn': 34,
  'ins': 45,
  'del': 46,
  'cmd': 91
};


/*!
 * Programatically add the following
 */

// lower case chars
for (i = 97; i < 123; i++) codes[String.fromCharCode(i)] = i - 32;

// numbers
for (var i = 48; i < 58; i++) codes[i - 48] = i;

// function keys
for (i = 1; i < 13; i++) codes['f'+i] = i + 111;

// numpad keys
for (i = 0; i < 10; i++) codes['numpad '+i] = i + 96;

/**
 * Get by code
 *
 *   exports.name[13] // => 'Enter'
 */

var names = exports.names = exports.title = {}; // title for backward compat

// Create reverse mapping
for (i in codes) names[codes[i]] = i;

// Add aliases
for (var alias in aliases) {
  codes[alias] = aliases[alias];
}
});
var keycode_1 = keycode.code;
var keycode_2 = keycode.codes;
var keycode_3 = keycode.aliases;
var keycode_4 = keycode.names;
var keycode_5 = keycode.title;

var tabPressed = false;
var listening = false;

function listenForTabPresses() {
  if (!listening) {
    typeof window !== 'undefined' && window.addEventListener('keydown', function (event) {
      tabPressed = keycode(event) === 'tab';
    });
    listening = true;
  }
}

var AbstractButton = {
  mixins: [route, ripple],
  props: {
    disabled: Boolean,
    centerRipple: Boolean,
    containerElement: String,
    disableKeyboardFocus: Boolean,
    wrapperClass: String,
    wrapperStyle: [String, Object],
    type: {
      type: String,
      default: 'button'
    },
    keyboardFocused: Boolean
  },
  data: function data() {
    return {
      hover: false,
      isKeyboardFocused: false
    };
  },

  computed: {
    buttonClass: function buttonClass() {
      var classNames = [];
      if (this.disabled) classNames.push('disabled');
      if (!this.disabled && (this.hover || this.isKeyboardFocused)) classNames.push('hover');
      return classNames.join(' ');
    }
  },
  beforeMount: function beforeMount() {
    var disabled = this.disabled,
        disableKeyboardFocus = this.disableKeyboardFocus,
        keyboardFocused = this.keyboardFocused;

    if (!disabled && keyboardFocused && !disableKeyboardFocus) {
      this.isKeyboardFocused = true;
    }
  },
  mounted: function mounted() {
    listenForTabPresses();
    if (this.isKeyboardFocused) {
      this.$el.focus();
      this.$emit('keyboardFocus', true);
    }
  },
  beforeUpdate: function beforeUpdate() {
    if ((this.disabled || this.disableKeyboardFocus) && this.isKeyboardFocused) {
      this.isKeyboardFocused = false;
      this.$emit('keyboardFocus', false);
    }
  },
  beforeDestory: function beforeDestory() {
    this.cancelFocusTimeout();
  },

  methods: {
    handleHover: function handleHover(event) {
      if (!this.disabled && isPc()) {
        this.hover = true;
        this.$emit('hover', event);
        this.$emit('mouseenter', event);
      }
    },
    handleOut: function handleOut(event) {
      if (!this.disabled && isPc()) {
        this.hover = false;
        this.$emit('hoverExit', event);
        this.$emit(event.type, event);
      }
    },
    removeKeyboardFocus: function removeKeyboardFocus(event) {
      if (this.isKeyboardFocused) {
        this.isKeyboardFocused = false;
        this.$emit('KeyboardFocus', false);
      }
    },
    setKeyboardFocus: function setKeyboardFocus(event) {
      if (!this.isKeyboardFocused) {
        this.isKeyboardFocused = true;
        this.$emit('KeyboardFocus', true);
      }
    },
    cancelFocusTimeout: function cancelFocusTimeout() {
      if (this.focusTimeout) {
        clearTimeout(this.focusTimeout);
        this.focusTimeout = null;
      }
    },
    handleKeydown: function handleKeydown(event) {
      if (!this.disabled && !this.disableKeyboardFocus) {
        if (keycode(event) === 'enter' && this.isKeyboardFocused) {
          this.$el.click();
        }
        if (keycode(event) === 'esc' && this.isKeyboardFocused) {
          this.removeKeyboardFocus(event);
        }
      }
      this.$emit('keydown', event);
    },
    handleFocus: function handleFocus(event) {
      var _this = this;

      if (!this.disabled && !this.disableKeyboardFocus) {
        this.focusTimeout = setTimeout(function () {
          if (tabPressed) {
            _this.setKeyboardFocus(event);
            tabPressed = false;
          }
        }, 150);
        this.$emit('focus', event);
      }
    },
    handleBlur: function handleBlur(event) {
      this.cancelFocusTimeout();
      this.removeKeyboardFocus(event);
      this.$emit('blur', event);
    },
    handleClick: function handleClick(event) {
      if (!this.disabled) {
        tabPressed = false;
        // this.$el.blur(); // 点击之后失去焦点
        this.removeKeyboardFocus(event);
        this.$emit('click', event);
      }
    },
    getTagName: function getTagName() {
      var defaultTag = 'button';
      switch (true) {
        case !!this.to:
          return 'router-link';
        case !!this.href:
          return 'a';
        case !!this.containerElement:
          return this.containerElement;
        default:
          return defaultTag;
      }
    },
    createButtonChildren: function createButtonChildren(h) {
      var isKeyboardFocused = this.isKeyboardFocused,
          disabled = this.disabled,
          ripple$$1 = this.ripple,
          disableKeyboardFocus = this.disableKeyboardFocus,
          rippleColor = this.rippleColor,
          rippleOpacity = this.rippleOpacity;

      var children = [];
      children = children.concat(this.$slots.default);
      var FocusRippleEL = isKeyboardFocused && !disableKeyboardFocus && !disabled && ripple$$1 ? h(FocusRipple, {
        color: rippleColor,
        opacity: rippleOpacity
      }) : undefined;

      if (!disabled && ripple$$1) {
        children = [h(TouchRipple, {
          class: this.wrapperClass,
          style: this.wrapperStyle,
          ref: 'ripple',
          props: {
            autoBind: false,
            color: this.rippleColor,
            centerRipple: this.centerRipple,
            opacity: this.rippleOpacity
          }
        }, this.$slots.default)];
      } else {
        children = [h('div', {
          class: this.wrapperClass,
          style: this.wrapperStyle
        }, this.$slots.default)];
      }
      children.unshift(FocusRippleEL);
      return children;
    }
  },
  watch: {
    disabled: function disabled(val) {
      if (!val) this.hover = false;
    }
  },
  render: function render(h) {
    var _this2 = this;

    var tagName = this.getTagName();
    var attrs = {
      target: this.target,
      tabindex: !this.disabled ? this.$attrs.tabindex || 0 : -1
    };

    if (tagName === 'button') {
      attrs.disabled = this.disabled;
      attrs.type = this.type;
    }

    if (this.href && !this.disabled) {
      attrs.href = this.href;
    }

    var props = this.to ? {
      to: this.to,
      tag: this.tag,
      activeClass: this.activeClass,
      event: this.event,
      exact: this.exact,
      append: this.append,
      replace: this.replace,
      exactActiveClass: this.exactActiveClass
    } : {};

    return h(tagName, defineProperty({
      class: this.buttonClass,
      attrs: attrs,
      props: props,
      style: tagName === 'button' ? {
        'user-select': this.disabled ? '' : 'none',
        '-webkit-user-select': this.disabled ? '' : 'none',
        'outline': 'none',
        'appearance': 'none'
      } : {}
    }, tagName === 'router-link' ? 'nativeOn' : 'on', _extends({}, this.$listeners, {
      mouseup: function mouseup(e) {
        _this2.$refs.ripple && _this2.$refs.ripple.end(e);
        _this2.$emit('mouseup', e);
      },
      mousedown: function mousedown(e) {
        _this2.$refs.ripple && _this2.$refs.ripple.handleMouseDown(e);
        _this2.$emit('mousedown', e);
      },
      mouseenter: this.handleHover,
      mouseleave: function mouseleave(e) {
        _this2.$refs.ripple && _this2.$refs.ripple.end(e);
        _this2.handleOut(e);
      },
      touchstart: function touchstart(e) {
        _this2.$refs.ripple && _this2.$refs.ripple.handleTouchStart(e);
        _this2.$emit('touchstart', e);
      },
      touchend: function touchend(e) {
        _this2.$refs.ripple && _this2.$refs.ripple.end(e);
        _this2.handleOut(e);
      },
      touchcancel: function touchcancel(e) {
        _this2.$refs.ripple && _this2.$refs.ripple.end(e);
        _this2.handleOut(e);
      },
      click: this.handleClick,
      focus: this.handleFocus,
      blur: this.handleBlur,
      keydown: this.handleKeydown
    })), this.createButtonChildren(h));
  }
};

var Button = {
  name: 'mu-button',
  mixins: [route, ripple, button, color],
  props: {
    fab: Boolean,
    flat: Boolean,
    icon: Boolean,
    small: Boolean,
    large: Boolean,
    round: Boolean,
    textColor: String,
    fullWidth: Boolean
  },
  computed: {
    buttonClass: function buttonClass() {
      var _ref;

      var colorClass = this.getNormalColorClass(this.color, this.icon || this.flat);
      var textColorClass = this.getTextColorClass();
      return _ref = {
        'mu-fab-button': this.fab,
        'mu-flat-button': this.flat,
        'mu-icon-button': this.icon,
        'mu-raised-button': !this.icon && !this.flat && !this.fab,
        'mu-button-small': this.small,
        'mu-button-large': this.large,
        'mu-button-full-width': !this.fab && !this.icon && this.fullWidth
      }, defineProperty(_ref, colorClass, true), defineProperty(_ref, textColorClass, true), defineProperty(_ref, 'mu-button-round', this.round), defineProperty(_ref, 'is-focus', this.focus), _ref;
    }
  },
  render: function render(h) {
    var flat = this.flat || this.icon;
    var color$$1 = this.getColor(this.textColor);
    if (!color$$1 && flat) color$$1 = this.getColor(this.color);
    return h(AbstractButton, {
      staticClass: 'mu-button',
      class: this.buttonClass,
      style: {
        'background-color': !flat ? this.getColor(this.color) : '',
        color: color$$1
      },
      props: _extends({
        wrapperClass: 'mu-button-wrapper',
        disabled: this.disabled,
        keyboardFocused: this.keyboardFocused,
        type: this.type,
        centerRipple: this.icon,
        ripple: this.ripple,
        rippleOpacity: this.rippleOpacity,
        rippleColor: this.rippleColor
      }, this.generateRouteProps()),
      on: this.getListener()
    }, this.$slots.default);
  }
};

Button.install = function (Vue$$1) {
  Vue$$1.component(Button.name, Button);
};

theme.addCreateTheme(ButtonTheme);

var Alert = {
  name: 'mu-alert',
  mixins: [color],
  props: {
    delete: Boolean,
    transition: String,
    mode: String
  },
  methods: {
    handleDelete: function handleDelete(e) {
      e.stopPropagation();
      this.$emit('delete');
    }
  },
  render: function render(h) {
    var deleteIcon = h(Button, {
      staticClass: 'mu-alert-delete-btn',
      props: {
        icon: true
      },
      on: {
        click: this.handleDelete
      }
    }, [h('svg', {
      staticClass: 'mu-alert-delete-icon',
      attrs: {
        viewBox: '0 0 24 24'
      }
    }, [h('path', {
      attrs: {
        d: 'M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z'
      }
    }), h('path', {
      attrs: {
        d: 'M0 0h24v24H0z',
        fill: 'none'
      }
    })])]);
    var alert = h('div', {
      staticClass: 'mu-alert ' + this.getColorClass(),
      style: {
        'background-color': this.getColor(this.color)
      },
      on: this.$listeners
    }, [this.$slots.default, this.delete ? deleteIcon : undefined]);
    return this.transition ? h('transition', {
      props: {
        mode: this.mode,
        name: this.transition
      }
    }, [alert]) : alert;
  }
};

Alert.install = function (Vue$$1) {
  Vue$$1.component(Alert.name, Alert);
};

var AppBarTheme = (function (theme, type) {
  return '\n    .mu-appbar {\n      background-color: ' + (type === 'light' ? '#f5f5f5' : '#212121') + ';\n      color: ' + theme.text.primary + ';\n    }\n  ';
});

var AppBar = {
  name: 'mu-appbar',
  mixins: [color],
  props: {
    zDepth: {
      type: [Number, String],
      default: 4,
      validator: function validator(val) {
        return val >= 0 && val <= 24;
      }
    },
    title: {
      type: String,
      default: ''
    },
    textColor: String
  },
  render: function render(h) {
    var slots = this.$slots;
    var left = slots.left && slots.left.length > 0 ? h('div', { staticClass: 'mu-appbar-left' }, slots.left) : undefined;
    var right = slots.right && slots.right.length > 0 ? h('div', { staticClass: 'mu-appbar-right' }, slots.right) : undefined;
    var center = h('div', { staticClass: 'mu-appbar-title' }, slots.default && slots.default.length > 0 ? slots.default : this.title);

    return h('header', {
      staticClass: 'mu-appbar ' + this.getColorClass() + ' ' + this.getTextColorClass() + ' mu-elevation-' + this.zDepth,
      style: {
        'background-color': this.getColor(this.color),
        color: this.getColor(this.textColor)
      }
    }, [left, center, right]);
  }
};

AppBar.install = function (Vue$$1) {
  Vue$$1.component(AppBar.name, AppBar);
};

theme.addCreateTheme(AppBarTheme);

var Icon = {
  name: 'mu-icon',
  functional: true,
  props: {
    value: String,
    left: Boolean,
    right: Boolean,
    size: [Number, String],
    color: String
  },
  render: function render(h, _ref) {
    var data = _ref.data,
        props = _ref.props;

    if (!props.value) return null;
    data.style = data.style || {};
    data.style = _extends({}, data.style, {
      'user-select': 'none',
      'font-size': props.size + 'px',
      'width': props.size + 'px',
      'height': props.size + 'px',
      'color': color.methods.getColor(props.color)
    });
    var isMaterial = props.value.indexOf(':') !== 0;
    var text = isMaterial ? props.value : '';

    data.staticClass = (data.staticClass || '') + ' mu-icon ' + color.methods.getNormalColorClass(props.color, true) + ' ' + (isMaterial ? 'material-icons' : props.value.substring(1)) + ' ' + (props.left ? 'mu-icon-left' : '') + ' ' + (props.right ? 'mu-icon-right' : '');
    return h('i', data, text);
  }
};

Icon.install = function (Vue$$1) {
  Vue$$1.component(Icon.name, Icon);
};

var input = {
  inheritAttrs: false,
  mixins: [color],
  model: {
    prop: 'value',
    event: 'input'
  },
  inject: {
    muFormItem: {
      default: ''
    }
  },
  props: {
    icon: String,
    label: String,
    labelFloat: Boolean,
    actionIcon: String,
    actionClick: Function,
    suffix: String,
    prefix: String,
    errorText: String,
    helpText: String,
    fullWidth: Boolean,
    disabled: Boolean,
    solo: Boolean,
    underlineColor: String,
    value: {}
  },
  data: function data() {
    return {
      isFocused: false
    };
  },

  computed: {
    error: function error() {
      return !!this.errorText || this.muFormItem && this.muFormItem.errorMessage;
    },
    inputClass: function inputClass() {
      return {
        'mu-input__focus': this.isFocused,
        'has-label': this.label,
        'no-empty-state': this.value,
        'has-icon': this.icon,
        'mu-input__error': this.error,
        'multi-line': this.multiLine,
        'disabled': this.disabled,
        'full-width': this.fullWidth,
        'is-solo': this.solo
      };
    },
    float: function float() {
      return this.labelFloat && !this.isFocused && !this.value && this.value !== 0;
    }
  },
  methods: {
    createIcon: function createIcon(h) {
      if (!this.icon) return;
      return h(Icon, {
        staticClass: 'mu-input-icon',
        props: {
          value: this.icon
        }
      });
    },
    createLabel: function createLabel(h) {
      return !this.solo && this.label ? h('div', {
        staticClass: 'mu-input-label',
        class: {
          float: this.float
        }
      }, this.label) : undefined;
    },
    createUnderline: function createUnderline(h) {
      if (this.solo) return;
      return h('div', [h('div', {
        staticClass: 'mu-input-line',
        class: {
          disabled: this.disabled
        }
      }), this.disabled ? undefined : h('div', {
        staticClass: ['mu-input-focus-line', this.getNormalColorClass(this.underlineColor, false, false)].join(' '),
        class: {
          focus: this.isFocused
        },
        style: {
          'background-color': this.getColor(this.underlineColor)
        }
      })]);
    },
    createHelpText: function createHelpText(h) {
      if (!this.errorText && !this.helpText && !this.maxLength) return;
      return h('div', {
        staticClass: 'mu-input-help'
      }, [h('div', {}, (this.errorText ? this.errorText : this.helpText) || ''), this.maxLength ? h('div', {}, (this.value ? String(this.value).length : 0) + ' / ' + this.maxLength) : undefined]);
    },
    createActionIcon: function createActionIcon(h) {
      var _this = this;

      return this.actionIcon ? h(Icon, {
        staticClass: 'mu-input-action-icon',
        props: {
          value: this.actionIcon
        },
        on: {
          click: function click() {
            return !_this.disabled && _this.actionClick && _this.actionClick();
          }
        }
      }) : undefined;
    },
    createInput: function createInput(h, data, children, defaultAction) {
      data.staticClass = (data.staticClass || '') + ' mu-input-content';
      var isFocus = !this.disabled && !this.errorText && this.isFocused;
      var colorClass = isFocus ? this.getNormalColorClass(this.color, true) : '';
      var color$$1 = isFocus ? this.getColor(this.color) : '';
      return h('div', {
        staticClass: 'mu-input ' + colorClass,
        class: this.inputClass,
        style: {
          color: color$$1
        }
      }, [this.createIcon(h), this.createLabel(h), h('div', data, [this.$slots.prepend, this.prefix && !this.float ? h('span', { staticClass: 'mu-input-prefix-text' }, this.prefix) : undefined].concat(toConsumableArray(children), [this.suffix && !this.float ? h('span', { staticClass: 'mu-input-suffix-text' }, this.suffix) : undefined, defaultAction || this.createActionIcon(h), this.$slots.append, this.createUnderline(h), this.createHelpText(h)]))]);
    }
  },
  watch: {
    isFocused: function isFocused(val) {
      if (!this.muFormItem) return;
      val ? this.muFormItem.onFocus() : this.muFormItem.onBlur();
    }
  }
};

var clickoutsideContext = '@@clickoutsideContext';

var clickOutSide = {
  name: 'click-outside',
  bind: function bind(el, binding, vnode) {
    var documentHandler = function documentHandler(e) {
      if (!vnode.context || el.contains(e.target)) return;
      if (binding.expression) {
        vnode.context[el[clickoutsideContext].methodName](e);
      } else {
        el[clickoutsideContext].bindingFn(e);
      }
    };
    el[clickoutsideContext] = {
      documentHandler: documentHandler,
      methodName: binding.expression,
      bindingFn: binding.value
    };
    setTimeout(function () {
      document.addEventListener('click', documentHandler);
    }, 0);
  },
  update: function update(el, binding) {
    el[clickoutsideContext].methodName = binding.expression;
    el[clickoutsideContext].bindingFn = binding.value;
  },
  unbind: function unbind(el) {
    document.removeEventListener('click', el[clickoutsideContext].documentHandler);
  }
};

var PopoverTheme = (function (theme) {
  return "\n  .mu-popover{\n    background: " + theme.background.paper + ";\n  }\n  ";
});

var bodyScrollLock = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var isIosDevice = typeof window !== 'undefined' && window.navigator && window.navigator.platform && /iPad|iPhone|iPod|(iPad Simulator)|(iPhone Simulator)|(iPod Simulator)/.test(window.navigator.platform);
// Adopted and modified solution from Bohdan Didukh (2017)
// https://stackoverflow.com/questions/41594997/ios-10-safari-prevent-scrolling-behind-a-fixed-overlay-and-maintain-scroll-posi

var firstTargetElement = null;
var allTargetElements = [];
var initialClientY = -1;
var previousBodyOverflowSetting = void 0;
var previousBodyPaddingRight = void 0;

var preventDefault = function preventDefault(rawEvent) {
  var e = rawEvent || window.event;
  if (e.preventDefault) e.preventDefault();

  return false;
};

var setOverflowHidden = function setOverflowHidden(options) {
  // Setting overflow on body/documentElement synchronously in Desktop Safari slows down
  // the responsiveness for some reason. Setting within a setTimeout fixes this.
  setTimeout(function () {
    // If previousBodyPaddingRight is already set, don't set it again.
    if (previousBodyPaddingRight === undefined) {
      var _reserveScrollBarGap = !!options && options.reserveScrollBarGap === true;
      var scrollBarGap = window.innerWidth - document.documentElement.clientWidth;

      if (_reserveScrollBarGap && scrollBarGap > 0) {
        previousBodyPaddingRight = document.body.style.paddingRight;
        document.body.style.paddingRight = scrollBarGap + 'px';
      }
    }

    // If previousBodyOverflowSetting is already set, don't set it again.
    if (previousBodyOverflowSetting === undefined) {
      previousBodyOverflowSetting = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
    }
  });
};

var restoreOverflowSetting = function restoreOverflowSetting() {
  // Setting overflow on body/documentElement synchronously in Desktop Safari slows down
  // the responsiveness for some reason. Setting within a setTimeout fixes this.
  setTimeout(function () {
    if (previousBodyPaddingRight !== undefined) {
      document.body.style.paddingRight = previousBodyPaddingRight;

      // Restore previousBodyPaddingRight to undefined so setOverflowHidden knows it
      // can be set again.
      previousBodyPaddingRight = undefined;
    }

    if (previousBodyOverflowSetting !== undefined) {
      document.body.style.overflow = previousBodyOverflowSetting;

      // Restore previousBodyOverflowSetting to undefined
      // so setOverflowHidden knows it can be set again.
      previousBodyOverflowSetting = undefined;
    }
  });
};

// https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollHeight#Problems_and_solutions
var isTargetElementTotallyScrolled = function isTargetElementTotallyScrolled(targetElement) {
  return targetElement ? targetElement.scrollHeight - targetElement.scrollTop <= targetElement.clientHeight : false;
};

var handleScroll = function handleScroll(event, targetElement) {
  var clientY = event.targetTouches[0].clientY - initialClientY;

  if (targetElement && targetElement.scrollTop === 0 && clientY > 0) {
    // element is at the top of its scroll
    return preventDefault(event);
  }

  if (isTargetElementTotallyScrolled(targetElement) && clientY < 0) {
    // element is at the top of its scroll
    return preventDefault(event);
  }

  return true;
};

var disableBodyScroll = exports.disableBodyScroll = function disableBodyScroll(targetElement, options) {
  if (isIosDevice) {
    // targetElement must be provided, and disableBodyScroll must not have been
    // called on this targetElement before.
    if (targetElement && !allTargetElements.includes(targetElement)) {
      allTargetElements = [].concat(_toConsumableArray(allTargetElements), [targetElement]);

      targetElement.ontouchstart = function (event) {
        if (event.targetTouches.length === 1) {
          // detect single touch
          initialClientY = event.targetTouches[0].clientY;
        }
      };
      targetElement.ontouchmove = function (event) {
        if (event.targetTouches.length === 1) {
          // detect single touch
          handleScroll(event, targetElement);
        }
      };
    }
  } else {
    setOverflowHidden(options);

    if (!firstTargetElement) firstTargetElement = targetElement;
  }
};

var clearAllBodyScrollLocks = exports.clearAllBodyScrollLocks = function clearAllBodyScrollLocks() {
  if (isIosDevice) {
    // Clear all allTargetElements ontouchstart/ontouchmove handlers, and the references
    allTargetElements.forEach(function (targetElement) {
      targetElement.ontouchstart = null;
      targetElement.ontouchmove = null;
    });

    allTargetElements = [];

    // Reset initial clientY
    initialClientY = -1;
  } else {
    restoreOverflowSetting();

    firstTargetElement = null;
  }
};

var enableBodyScroll = exports.enableBodyScroll = function enableBodyScroll(targetElement) {
  if (isIosDevice) {
    targetElement.ontouchstart = null;
    targetElement.ontouchmove = null;

    allTargetElements = allTargetElements.filter(function (element) {
      return element !== targetElement;
    });
  } else if (firstTargetElement === targetElement) {
    restoreOverflowSetting();

    firstTargetElement = null;
  }
};
});

unwrapExports(bodyScrollLock);
var bodyScrollLock_1 = bodyScrollLock.disableBodyScroll;
var bodyScrollLock_2 = bodyScrollLock.clearAllBodyScrollLocks;
var bodyScrollLock_3 = bodyScrollLock.enableBodyScroll;

function getSize(size) {
  if (!size) return 0;
  var index = size.indexOf('px');
  if (index === -1) return 0;
  return Number(size.substring(0, index));
}
var ExpandTransition = {
  name: 'mu-expand-transition',
  methods: {
    beforeEnter: function beforeEnter(el) {
      el.dataset.oldPaddingTop = el.style.paddingTop;
      el.dataset.oldPaddingBottom = el.style.paddingBottom;
      el.dataset.oldOverflow = el.style.overflow;
      el.style.paddingTop = '0';
      el.style.paddingBottom = '0';
      el.style.height = '0';
    },
    enter: function enter(el) {
      el.style.display = 'block';
      el.style.overflow = 'hidden';
      el.style.height = el.scrollHeight + getSize(el.dataset.oldPaddingTop) + getSize(el.dataset.oldPaddingBottom) + 'px';
      el.style.paddingTop = el.dataset.oldPaddingTop;
      el.style.paddingBottom = el.dataset.oldPaddingBottom;
    },
    afterEnter: function afterEnter(el) {
      el.style.display = '';
      // uc浏览器上设置height会闪屏
      el.style.height = '';
      el.style.overflow = el.dataset.oldOverflow;
      el.style.paddingTop = el.dataset.oldPaddingTop;
      el.style.paddingBottom = el.dataset.oldPaddingBottom;
    },
    beforeLeave: function beforeLeave(el) {
      el.dataset.oldPaddingTop = el.style.paddingTop;
      el.dataset.oldPaddingBottom = el.style.paddingBottom;
      el.dataset.oldOverflow = el.style.overflow;

      el.style.display = 'block';
      if (el.scrollHeight !== 0) {
        el.style.height = el.scrollHeight + 'px';
      }
      el.style.overflow = 'hidden';
    },
    leave: function leave(el) {
      if (el.scrollHeight !== 0) {
        setTimeout(function () {
          el.style.height = 0;
          el.style.paddingTop = 0;
          el.style.paddingBottom = 0;
        });
      }
    },
    afterLeave: function afterLeave(el) {
      el.style.display = 'none';
      el.style.height = '';
      el.style.overflow = el.dataset.oldOverflow;
      el.style.paddingTop = el.dataset.oldPaddingTop;
      el.style.paddingBottom = el.dataset.oldPaddingBottom;
    }
  },
  render: function render(h) {
    return h('transition', {
      props: {
        name: 'mu-expand'
      },
      on: {
        'before-enter': this.beforeEnter,
        enter: this.enter,
        'after-enter': this.afterEnter,
        'before-leave': this.beforeLeave,
        leave: this.leave,
        'after-leave': this.afterLeave
      }
    }, this.$slots.default);
  }
};

function createTransition(name, mode) {
  return {
    name: name,
    functional: true,
    render: function render(h, context) {
      context.data = context.data || {};
      context.data.props = { name: name };
      context.data.on = context.data.on || {};
      if (!Object.isExtensible(context.data.on)) {
        context.data.on = _extends({}, context.data.on);
      }

      if (mode) context.data.props.mode = mode;

      return h('transition', context.data, context.children);
    }
  };
}

var FadeTransition = createTransition('mu-fade-transition');
var SlideTopTransition = createTransition('mu-slide-top-transition');
var SlideBottomTransition = createTransition('mu-slide-bottom-transition');
var SlideLeftTransition = createTransition('mu-slide-left-transition');
var SlideRightTransition = createTransition('mu-slide-right-transition');
var PopoverTransiton = createTransition('mu-popover-transition');
var BottomSheetTransition = createTransition('mu-bottom-sheet-transition');
var ScaleTransition = createTransition('mu-scale-transition');

var overlayOpt = {
  name: 'mu-overlay',
  props: {
    show: Boolean,
    fixed: Boolean,
    onClick: Function,
    opacity: {
      type: Number,
      default: 0.4
    },
    color: String,
    zIndex: Number
  },
  computed: {
    overlayStyle: function overlayStyle() {
      return {
        'opacity': this.opacity,
        'background-color': this.color,
        'position': this.fixed ? 'fixed' : '',
        'z-index': this.zIndex
      };
    }
  },
  methods: {
    prevent: function prevent(event) {
      event.preventDefault();
      event.stopPropagation();
    },
    handleClick: function handleClick() {
      if (this.onClick) {
        this.onClick();
      }
    }
  },
  render: function render(h) {
    return h(FadeTransition, [h('div', {
      staticClass: 'mu-overlay',
      style: this.overlayStyle,
      directives: [{
        name: 'show',
        value: this.show
      }],
      on: {
        click: this.handleClick,
        touchmove: this.prevent
      }
    })]);
  }
};

var Overlay = Vue.extend(overlayOpt);

var PopupManager = {
  instances: [],
  overlay: false,

  open: function open(instance) {
    if (!instance || this.instances.indexOf(instance) !== -1) return;
    if (!this.overlay && instance.overlay) {
      this.showOverlay(instance);
    }
    this.instances.push(instance);
    this.changeOverlayStyle();
  },
  close: function close(instance) {
    var index = this.instances.indexOf(instance);
    if (index === -1) return;
    this.instances.splice(index, 1);
    this.changeOverlayStyle();
  },
  showOverlay: function showOverlay(instance) {
    var overlay = this.overlay = new Overlay({
      el: document.createElement('div')
    });
    overlay.fixed = true;
    overlay.color = instance.overlayColor;
    overlay.opacity = instance.overlayOpacity;
    overlay.zIndex = instance.overlayZIndex;
    overlay.onClick = this.handleOverlayClick.bind(this);
    document.body.appendChild(overlay.$el);
    this.preventScrolling();
    Vue.nextTick(function () {
      overlay.show = true;
    });
  },

  // 禁止滚动
  preventScrolling: function preventScrolling() {
    if (this.locked) return;
    // body 操作
    var body = document.getElementsByTagName('body')[0];
    bodyScrollLock_1(body, {
      reserveScrollBarGap: true
    });
    this.locked = true;
  },


  // 还原滚动设置
  allowScrolling: function allowScrolling() {
    var body = document.getElementsByTagName('body')[0];
    bodyScrollLock_3(body, {
      reserveScrollBarGap: true
    });
    bodyScrollLock_2();
    this.locked = false;
  },
  closeOverlay: function closeOverlay() {
    if (!this.overlay) return;
    this.allowScrolling();
    var overlay = this.overlay;
    overlay.show = false;
    this.overlay = null;
    setTimeout(function () {
      document.body.removeChild(overlay.$el);
      overlay.$destroy();
    }, 450);
  },
  changeOverlayStyle: function changeOverlayStyle() {
    if (!this.overlay) return;
    var instance = void 0;
    for (var i = 1; i <= this.instances.length; i++) {
      instance = this.instances[this.instances.length - i];
      if (instance && instance.overlay) {
        break;
      }
      instance = null;
    }

    if (!instance) return this.closeOverlay();

    if (instance && instance.overlay) {
      this.overlay.color = instance.overlayColor;
      this.overlay.opacity = instance.overlayOpacity;
      this.overlay.zIndex = instance.overlayZIndex;
    }
  },
  handleOverlayClick: function handleOverlayClick() {
    if (this.instances.length === 0) return;
    var instance = this.instances[this.instances.length - 1];
    if (instance.overlayClick) {
      instance.overlayClick();
    }
  }
};

typeof window !== 'undefined' && window.addEventListener('keydown', function (e) {
  if (PopupManager.instances.length === 0 || keycode(e) !== 'esc') return;
  var instance = PopupManager.instances[PopupManager.instances.length - 1];
  if (instance.escPress) {
    instance.escPress();
  }
});

var zIndex = 20141223;

var getZIndex = function getZIndex() {
  return zIndex++;
};

var popup = {
  props: {
    open: Boolean,
    overlay: {
      type: Boolean,
      default: true
    },
    overlayClose: {
      type: Boolean,
      default: true
    },
    overlayOpacity: {
      type: Number,
      default: 0.4
    },
    overlayColor: {
      type: String,
      default: '#000'
    },
    escPressClose: { // 按退出键是否触发关闭事件
      type: Boolean,
      default: true
    },
    appendBody: { // 是否添加到 body 元素后, 内部使用
      type: Boolean,
      default: true
    }
  },
  data: function data() {
    return {
      overlayZIndex: getZIndex(),
      zIndex: getZIndex()
    };
  },

  methods: {
    overlayClick: function overlayClick(e) {
      if (!this.overlay || !this.overlayClose || !this.open) return;
      this.$emit('update:open', false);
      this.$emit('close', 'overlay');
    },
    escPress: function escPress(e) {
      if (!this.escPressClose || !this.open) return;
      this.$emit('update:open', false);
      this.$emit('close', 'esc');
    },
    resetZIndex: function resetZIndex() {
      this.overlayZIndex = getZIndex();
      this.zIndex = getZIndex();
    },
    popupEl: function popupEl() {
      return this.$el;
    },
    appendPopupElToBody: function appendPopupElToBody() {
      var _this = this;

      if (!this.appendBody || this.appened) return;
      this.$nextTick(function () {
        document.body.appendChild(_this.$el);
        _this.appened = true;
      });
    }
  },
  mounted: function mounted() {
    if (this.open) {
      PopupManager.open(this);
      this.appendPopupElToBody();
    }
  },
  beforeDestroy: function beforeDestroy() {
    PopupManager.close(this);
    if (this.appendBody) {
      if (!this.$el) return;
      if (this.$el.parentNode) this.$el.parentNode.removeChild(this.$el);
    }
  },

  watch: {
    open: function open(val, oldVal) {
      if (val) {
        this.resetZIndex();
        PopupManager.open(this);
        this.appendPopupElToBody();
      } else {
        PopupManager.close(this);
      }
    }
  }
};

function bindScroll(el, binding) {
  var callback = typeof binding.value === 'function' ? binding.value : binding.value.callback;
  var options = binding.value.options || { passive: true };
  var target = binding.value.target || window;
  if (target === 'undefined') return;
  if (target instanceof Element) {
    target = getScrollEventTarget(target);
  } else if (target !== window) {
    target = document.querySelector(target);
  }

  var handleScroll = function handleScroll(e) {
    callback(target, e);
  };
  if (el._onScroll && target !== el._onScroll.target) unbind(el, binding);

  target.addEventListener('scroll', handleScroll, options);

  el._onScroll = {
    callback: handleScroll,
    options: options,
    target: target
  };
}

function unbind(el, binding) {
  var _el$_onScroll = el._onScroll,
      callback = _el$_onScroll.callback,
      options = _el$_onScroll.options,
      target = _el$_onScroll.target;

  if (!target) return;
  target.removeEventListener('scroll', callback, options);
}
var scroll = {
  name: 'scroll',
  inserted: bindScroll,
  update: bindScroll,
  unbind: unbind
};

var resize = {
  name: 'resize',
  inserted: function inserted(el, binding) {
    var cb = binding.value;
    var debounce = 200;
    var callOnLoad = true;

    if (typeof binding.value !== 'function') {
      cb = binding.value.value;
      debounce = binding.value.debounce || debounce;
      callOnLoad = binding.value.quiet !== null ? false : callOnLoad;
    }

    var debounceTimeout = null;
    var onResize = function onResize() {
      clearTimeout(debounceTimeout);
      debounceTimeout = setTimeout(cb, debounce);
    };

    window.addEventListener('resize', onResize, { passive: true });
    el._onResize = onResize;

    callOnLoad && onResize();
  },
  unbind: function unbind(el, binding) {
    window.removeEventListener('resize', el._onResize);
  }
};

var SPACE = 8;
var Popover = {
  name: 'mu-popover',
  mixins: [popup],
  directives: {
    scroll: scroll,
    resize: resize,
    'click-outside': clickOutSide
  },
  props: {
    overlay: {
      default: false
    },
    lazy: Boolean,
    cover: Boolean,
    space: {
      type: Number,
      default: 0
    }, // 距离trigger 的间隔, 在cover false的情况下完成
    trigger: {},
    placement: {
      type: String,
      default: 'bottom-start',
      validator: function validator(val) {
        return ['top', 'top-start', 'top-end', 'bottom', 'bottom-start', 'bottom-end', 'left', 'left-start', 'left-end', 'right', 'right-start', 'right-end'].indexOf(val) !== -1;
      }
    }
  },
  methods: {
    getLeftPosition: function getLeftPosition(width, react) {
      var left = 0;
      var maxLeft = window.innerWidth - SPACE - width;
      var minLeft = SPACE;
      switch (this.placement) {
        case 'left':
        case 'left-start':
        case 'left-end':
          left = react.left - width - this.space;
          if (this.cover) {
            left += react.width;
          } else if (left < minLeft) {
            left = react.left + react.width + this.space;
          }          break;
        case 'right':
        case 'right-start':
        case 'right-end':
          left = this.cover ? react.left : react.left + react.width > maxLeft ? react.left - width - this.space : react.left + react.width + this.space;
          break;
        case 'top':
        case 'bottom':
          left = react.left + react.width / 2 - width / 2;
          break;
        case 'bottom-start':
        case 'top-start':
          left = react.left;
          break;
        case 'bottom-end':
        case 'top-end':
          left = react.left + react.width - width;
          break;
      }
      left = Math.min(maxLeft, left);
      left = Math.max(minLeft, left);
      return left;
    },
    getTopPosition: function getTopPosition(height, react) {
      var top = 0;
      var maxTop = window.innerHeight - SPACE - height;
      var minTop = SPACE;
      switch (this.placement) {
        case 'top':
        case 'top-start':
        case 'top-end':
          top = react.top - height;
          if (!this.cover) {
            top += this.space;
            if (top < minTop) top = react.top + react.height + this.space;
          } else {
            top += react.height;
          }
          break;
        case 'bottom':
        case 'bottom-start':
        case 'bottom-end':
          top = this.cover ? react.top : react.top + react.height + this.space > maxTop ? react.top - height - this.space : react.top + react.height + this.space;
          break;
        case 'left':
        case 'right':
          top = react.top + react.height / 2 - height / 2;
          break;
        case 'left-start':
        case 'right-start':
          top = react.top;
          break;
        case 'left-end':
        case 'right-end':
          top = react.top + react.height - height;
          break;
      }
      top = Math.min(maxTop, top);
      top = Math.max(minTop, top);
      return top;
    },
    setStyle: function setStyle() {
      if (!this.open) return;
      var el = this.$el;
      var triggerEl = this.trigger;
      if (!el || !triggerEl) return;
      var react = triggerEl.getBoundingClientRect();
      if (react.top < -react.height || react.top > window.innerHeight) this.close('overflow');
      el.style.top = this.getTopPosition(el.offsetHeight, react) + 'px';
      el.style.left = this.getLeftPosition(el.offsetWidth, react) + 'px';
    },
    close: function close(reason) {
      if (!this.open) return;
      this.$emit('update:open', false);
      this.$emit('close', reason);
    },
    clickOutSide: function clickOutSide$$1(e) {
      if (this.trigger && this.trigger.contains(e.target)) return;
      this.close('clickOutSide');
    },
    getTransitionName: function getTransitionName() {
      if (this.cover) return 'transition-' + this.placement;
      return this.placement.indexOf('top') !== -1 || ['left-end', 'right-end'].indexOf(this.placement) !== -1 ? 'transition-top' : 'transition-bottom';
    }
  },
  mounted: function mounted() {
    this.setStyle();
  },
  updated: function updated() {
    var _this = this;

    setTimeout(function () {
      _this.setStyle();
    }, 0);
  },
  render: function render(h) {
    var directives = [{
      name: 'resize',
      value: this.setStyle
    }, {
      name: 'scroll',
      value: {
        target: this.trigger,
        callback: this.setStyle
      }
    }, {
      name: 'click-outside',
      value: this.clickOutSide
    }];
    if (!this.lazy) {
      directives.push({
        name: 'show',
        value: this.open
      });
    }

    var transition = this.getTransitionName();
    return h(PopoverTransiton, [!this.lazy || this.open ? h('div', {
      staticClass: 'mu-popover ' + transition,
      style: {
        'z-index': this.zIndex
      },
      on: this.$listeners,
      directives: directives
    }, this.$slots.default) : undefined]);
  }
};

Popover.install = function (Vue$$1) {
  Vue$$1.component(Popover.name, Popover);
};

theme.addCreateTheme(PopoverTheme);

var ListTheme = (function (theme) {
  return '\n  .mu-item-wrapper.hover {\n    background-color: ' + fade(theme.text.primary, 0.1) + ';\n  }\n  .mu-item {\n    color: ' + theme.text.primary + ';\n  }\n  .mu-item-action {\n    color: ' + theme.text.secondary + ';\n  }\n  .mu-item.is-selected {\n    color: ' + theme.primary + ';\n  }\n  .mu-item-sub-title {\n    color: ' + theme.text.secondary + ';\n  }\n  .mu-item-after-text {\n   color: ' + theme.text.secondary + ';\n  }\n  ';
});

var List = {
  name: 'mu-list',
  provide: function provide() {
    return {
      listItemClick: this.listItemClick,
      getNestedLevel: this.getNestedLevel,
      getToggleNested: this.getToggleNested,
      getToggleNestedType: this.getToggleNestedType,
      getListValue: this.getListValue,
      getNestedIndent: this.getNestedIndent
    };
  },

  props: {
    nestedLevel: {
      type: Number,
      default: 0
    },
    textline: {
      type: String,
      default: '',
      validator: function validator(val) {
        return ['', 'two-line', 'three-line'].indexOf(val) !== -1;
      }
    },
    nestedIndent: {
      type: Boolean,
      default: true
    },
    toggleNested: Boolean,
    toggleNestedType: {
      type: String,
      default: 'expand',
      validator: function validator(val) {
        return ['expand', 'popover'].indexOf !== -1;
      }
    },
    dense: Boolean,
    value: {}
  },
  methods: {
    listItemClick: function listItemClick(item) {
      this.$emit('change', item.value);
      this.$emit('item-click', item);
    },
    getListValue: function getListValue() {
      return this.value;
    },
    getNestedLevel: function getNestedLevel() {
      return this.nestedLevel;
    },
    getNestedIndent: function getNestedIndent() {
      return this.nestedIndent;
    },
    getToggleNested: function getToggleNested() {
      return this.toggleNested;
    },
    getToggleNestedType: function getToggleNestedType() {
      return this.toggleNestedType;
    }
  },
  render: function render(h) {
    var _class;

    return h('ul', {
      staticClass: 'mu-list',
      class: (_class = {}, defineProperty(_class, 'mu-list-' + this.textline, this.textline), defineProperty(_class, 'mu-list-dense', this.dense), _class),
      on: this.$listeners
    }, this.$slots.default);
  }
};

var ListItem = {
  name: 'mu-list-item',
  mixins: [route, ripple],
  inject: ['listItemClick', 'getNestedLevel', 'getNestedIndent', 'getListValue', 'getToggleNested', 'getToggleNestedType'],
  props: {
    button: Boolean,
    nestedListClass: [String, Object, Array],
    open: {
      type: Boolean,
      default: true
    },
    avatar: Boolean,
    nested: Boolean, // 是否允许嵌套
    tabIndex: [String, Number],
    value: {}
  },
  data: function data() {
    return {
      nestedOpen: this.open
    };
  },

  computed: {
    nestedLevel: function nestedLevel() {
      return this.getNestedLevel();
    },
    nestedIndent: function nestedIndent() {
      return this.getNestedIndent();
    },
    toggleNested: function toggleNested() {
      return this.getToggleNested();
    },
    toggleNestedType: function toggleNestedType() {
      return this.getToggleNestedType();
    }
  },
  created: function created() {
    if (this.toggleNestedType === 'popover' && this.nestedOpen) {
      this.nestedOpen = false;
    }
  },

  methods: {
    handleClick: function handleClick(e) {
      this.$emit('click', e);
      this.listItemClick(this);
      if (this.toggleNested) this.handleToggleNested();
    },
    handleKeyboardFocus: function handleKeyboardFocus(isFocus) {
      this.$emit('keyboard-focus', isFocus);
    },
    handleHover: function handleHover(event) {
      this.$emit('hover', event);
    },
    handleHoverExit: function handleHoverExit(event) {
      this.$emit('hover-exit', event);
    },
    handleToggleNested: function handleToggleNested() {
      this.nestedOpen = !this.nestedOpen;
      this.$emit('toggle-nested', this.nestedOpen);
    },
    handleNestedClick: function handleNestedClick(item) {
      this.listItemClick(item);
    },
    createItem: function createItem(h) {
      var listValue = this.getListValue();
      var nestedPadding = this.nestedIndent && this.toggleNestedType === 'expand' ? 18 * this.nestedLevel : 0;
      var itemClass = ['mu-item', this.nestedOpen && this.nested ? 'mu-item__open' : '', this.avatar ? 'has-avatar' : '', this.textline, isNotNull(listValue) && isNotNull(this.value) && listValue === this.value ? 'is-selected' : ''].join(' ');

      return h(AbstractButton, {
        class: 'mu-item-wrapper',
        ref: 'button',
        attrs: {
          tabindex: this.tabIndex
        },
        props: _extends({
          containerElement: this.button ? 'a' : 'div',
          wrapperClass: itemClass,
          wrapperStyle: {
            'margin-left': nestedPadding ? nestedPadding + 'px' : ''
          },
          disabled: !this.button,
          ripple: this.button && this.ripple,
          rippleColor: this.rippleColor,
          rippleOpacity: this.rippleOpacity,
          centerRipple: false
        }, this.generateRouteProps()),
        on: {
          click: this.handleClick,
          keyboardFocus: this.handleKeyboardFocus,
          hover: this.handleHover,
          hoverExit: this.handleHoverExit
        }
      }, this.$slots.default);
    },
    createNestedList: function createNestedList(h) {
      if (!this.nested) return null;
      var list = h(List, {
        class: this.nestedListClass,
        props: {
          nestedIndent: this.nestedIndent,
          toggleNested: this.toggleNested,
          toggleNestedType: this.toggleNestedType,
          nestedLevel: this.nestedLevel + 1,
          value: this.getListValue()
        },
        on: {
          'item-click': this.handleNestedClick
        }
      }, this.$slots.nested);

      switch (this.toggleNestedType) {
        case 'expand':
          return h(ExpandTransition, {}, [this.nestedOpen ? list : undefined]);
        case 'popover':
          return h(Popover, {
            props: {
              open: this.nestedOpen,
              trigger: this.$el,
              appendBody: false,
              placement: 'right-start'
            },
            on: {
              close: this.handleToggleNested
            }
          }, [list]);
      }
      return null;
    }
  },
  render: function render(h) {
    return h('li', [this.createItem(h), this.createNestedList(h)]);
  },

  watch: {
    open: function open(val) {
      this.nestedOpen = val;
    },
    nestedOpen: function nestedOpen(val) {
      this.$emit('update:open', val);
    }
  }
};

var ListAction = {
  name: 'mu-list-item-action',
  functional: true,
  render: function render(h, _ref) {
    var data = _ref.data,
        props = _ref.props,
        children = _ref.children;

    data.staticClass = 'mu-item-action ' + (children && children.length > 1 ? 'is-more' : '') + ' ' + (data.staticClass || '');
    return h('div', data, children);
  }
};

var ListItemContent = createSimpleFunctional('mu-item-content', 'div', 'mu-list-item-content');
var ListItemTitle = createSimpleFunctional('mu-item-title', 'div', 'mu-list-item-title');
var ListItemSubTitle = createSimpleFunctional('mu-item-sub-title', 'div', 'mu-list-item-sub-title');
var ListItemAfterText = createSimpleFunctional('mu-item-after-text', 'span', 'mu-list-item-after-text');

List.install = function (Vue$$1) {
  Vue$$1.component(List.name, List);
  Vue$$1.component(ListItem.name, ListItem);
  Vue$$1.component(ListAction.name, ListAction);
  Vue$$1.component(ListItemContent.name, ListItemContent);
  Vue$$1.component(ListItemTitle.name, ListItemTitle);
  Vue$$1.component(ListItemSubTitle.name, ListItemSubTitle);
  Vue$$1.component(ListItemAfterText.name, ListItemAfterText);
};

theme.addCreateTheme(ListTheme);

var caseSensitiveFilter = (function () {
  var query = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var maxSearchResults = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

  var results = [];
  for (var i = 0; i < data.length; i++) {
    var value = getValueByItem(data[i]);
    var index = value.toLowerCase().indexOf(query.toLowerCase());
    if (index === -1) continue;
    var before = value.substring(0, index);
    var highlight = value.substring(index, index + query.length);
    var after = value.substring(index + query.length);
    results.push({
      value: value,
      item: data[i],
      highlight: [before, '<span class="mu-secondary-text-color">' + highlight + '</span>', after].join('')
    });
    if (maxSearchResults > 0 && maxSearchResults === results.length) break;
  }
  return results;
});

function getValueByItem(item) {
  if (!item) return '';
  return typeof item === 'string' ? item : item.value;
}

var AutoComplete = {
  name: 'mu-auto-complete',
  mixins: [input],
  directives: {
    'click-outside': clickOutSide
  },
  props: {
    data: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    maxHeight: {
      type: [String, Number],
      default: 300
    },
    debounce: {
      type: Number,
      default: 200,
      validator: function validator(val) {
        return val > 0;
      }
    },
    filter: {
      type: Function,
      default: caseSensitiveFilter
    },
    maxSearchResults: {
      type: Number,
      default: 0
    },
    openOnFocus: Boolean,
    dense: {
      type: Boolean,
      default: true
    },
    textline: List.props.textline,
    popoverClass: String,
    placement: {
      type: String,
      default: 'bottom-start'
    },
    space: Number,
    avatar: Boolean
  },
  data: function data() {
    return {
      open: false,
      enableData: [],
      focusIndex: -1
    };
  },

  methods: {
    setValue: function setValue(value, item, e) {
      this.open = false;
      this.focusIndex = -1;
      if (!item) return;
      this.$emit('input', value, e);
      this.$emit('select', value, item, e);
      this.$emit('change', value, e);
    },
    onKeydown: function onKeydown(e) {
      if (this.disabled || this.$attrs.readonly) return;
      var code = keycode(e);
      var maxIndex = this.enableData.length - 1;
      var minIndex = 0;
      switch (code) {
        case 'enter':
          if (this.focusIndex === -1) return;
          var _enableData$focusInde = this.enableData[this.focusIndex],
              value = _enableData$focusInde.value,
              item = _enableData$focusInde.item;

          this.setValue(value, item, e);
          break;
        case 'up':
          event.preventDefault();
          if (!this.open) return;
          this.focusIndex--;
          if (this.focusIndex < minIndex) this.focusIndex = maxIndex;
          break;
        case 'down':
          event.preventDefault();
          if (!this.open) return;
          this.focusIndex++;
          if (this.focusIndex > maxIndex) this.focusIndex = minIndex;
          break;
        case 'tab':
          this.blur(e);
          break;
        default:
          this.focusIndex = -1;
          break;
      }
      this.$emit('keydown', e);
    },
    onInput: function onInput(e) {
      var _this = this;

      var value = e.target.value;
      if (this.timer) clearTimeout(this.timer);
      this.timer = setTimeout(function () {
        _this.filterData(value);
      }, this.debounce);
      this.$emit('input', value, e);
    },
    focus: function focus(e) {
      this.isFocused = true;
      if (this.openOnFocus) this.filterData(this.value);
      this.$emit('focus', e);
    },
    filterData: function filterData(val) {
      var _this2 = this;

      this.open = true;
      var results = this.filter(val, this.data, this.maxSearchResults);
      switch (true) {
        case Array.isArray(results):
          this.enableData = results;
          return;
        case isPromise(results):
          results.then(function (results) {
            _this2.enableData = Array.isArray(results) ? results : [];
          });
          return;
      }
      this.enableData = [];
    },
    blur: function blur(e) {
      this.isFocused = false;
      this.focusIndex = -1;
      this.open = false;
      this.$emit('blur', e);
    },
    setScollPosition: function setScollPosition(index) {
      var _this3 = this;

      if (!this.open) return;
      this.$nextTick(function () {
        var popoverEl = _this3.$refs.list.$el;
        var optionEl = popoverEl.querySelector('.is-focused');
        if (!optionEl) return;
        var optionHeight = optionEl.offsetHeight;
        var scrollTop = optionEl.offsetTop - optionHeight;
        if (scrollTop < optionHeight) scrollTop = 0;
        popoverEl.scrollTop = scrollTop;
      });
    },
    createTextField: function createTextField(h) {
      var _this4 = this;

      var listeners = _extends({}, this.$listeners, {
        input: this.onInput,
        change: function change(e) {
          return _this4.$emit('change', e.target.value, e);
        },
        keydown: this.onKeydown,
        focus: this.focus
      });
      var placeholder = !this.labelFloat ? this.$attrs.placeholder : '';
      return [h('input', {
        staticClass: 'mu-text-field-input',
        ref: 'input',
        attrs: _extends({
          tabindex: 0
        }, this.$attrs, {
          disabled: this.disabled,
          placeholder: placeholder
        }),
        domProps: {
          value: this.value
        },
        on: listeners
      })];
    },
    createContentList: function createContentList(h) {
      var _this5 = this;

      return h(List, {
        staticClass: 'mu-option-list',
        ref: 'list',
        props: {
          dense: this.dense,
          textline: this.textline
        },
        style: {
          'maxHeight': this.maxHeight + 'px'
        }
      }, this.enableData.map(function (item, index) {
        return h(ListItem, {
          staticClass: 'mu-option',
          class: {
            'is-focused': _this5.focusIndex === index
          },
          props: {
            button: true,
            avatar: _this5.avatar
          },
          on: {
            click: function click(e) {
              return _this5.setValue(item.value, item.item, e);
            }
          }
        }, _this5.$scopedSlots.default ? _this5.$scopedSlots.default(_extends({}, item, {
          index: index
        })) : [h('span', {
          domProps: {
            innerHTML: item.highlight
          }
        })]);
      }));
    }
  },
  render: function render(h) {
    var _this6 = this;

    var trigger = this.$refs.input;
    return this.createInput(h, {
      staticClass: 'mu-text-field',
      ref: 'content',
      directives: [{
        name: 'click-outside',
        value: function value(e) {
          if (_this6.$refs.popover.$el.contains(e.target)) return;
          _this6.blur(e);
        }
      }]
    }, [this.createTextField(h), this.$slots.default, h(Popover, {
      staticClass: [this.popoverClass || ''].join(' '),
      props: {
        trigger: trigger,
        placement: this.placement,
        space: this.space,
        open: this.open
      },
      on: {
        close: function close() {
          return _this6.open = false;
        }
      },
      ref: 'popover',
      style: {
        'visibility': this.enableData.length === 0 ? 'hidden' : '',
        'min-width': trigger ? trigger.offsetWidth + 'px' : ''
      }
    }, [this.createContentList(h), this.$slots.popover])]);
  },

  watch: {
    focusIndex: function focusIndex() {
      this.setScollPosition();
    }
  }
};

AutoComplete.install = function (Vue$$1) {
  Vue$$1.component(AutoComplete.name, AutoComplete);
};

var AvatarTheme = (function (theme) {
  return "\n    .mu-avatar {\n      background-color: " + theme.track + ";\n      color: " + theme.text.alternate + ";\n    }\n  ";
});

var Avatar = {
  name: 'mu-avatar',
  mixins: [color],
  props: {
    textColor: String,
    size: {
      type: [Number, String],
      default: 40
    }
  },
  render: function render(h) {
    var size = getWidth(this.size);
    return h('div', {
      staticClass: 'mu-avatar ' + this.getColorClass() + ' ' + this.getTextColorClass(),
      style: {
        width: size,
        height: size,
        'font-size': this.size / 2 + 'px',
        'background-color': this.getColor(this.color),
        'color': this.getColor(this.textColor)
      },
      on: this.$listeners
    }, [h('div', { class: 'mu-avatar-inner' }, this.$slots.default)]);
  }
};

Avatar.install = function (Vue$$1) {
  Vue$$1.component(Avatar.name, Avatar);
};

theme.addCreateTheme(AvatarTheme);

var BadgeTheme = (function (theme) {
  return "\n    .mu-badge{\n      background-color: " + theme.track + ";\n      color: " + theme.text.alternate + ";\n    }\n  ";
});

var Badge = {
  name: 'mu-badge',
  mixins: [color],
  props: {
    content: {
      type: String,
      default: ''
    },
    circle: Boolean,
    badgeClass: [String, Object, Array]
  },
  render: function render(h) {
    var slots = this.$slots;
    var isFloat = slots.default && slots.default.length > 0;
    var badge = h('em', {
      staticClass: 'mu-badge ' + convertClass(this.badgeClass).join(' ') + ' ' + this.getColorClass(),
      style: {
        'background-color': this.getColor(this.color)
      },
      class: {
        'mu-badge-circle': this.circle,
        'mu-badge-float': isFloat
      }
    }, slots.content && slots.content.length > 0 ? slots.content : this.content);

    return h('div', {
      staticClass: 'mu-badge-container',
      on: this.$listeners
    }, [slots.default, badge]);
  }
};

Badge.install = function (Vue$$1) {
  Vue$$1.component(Badge.name, Badge);
};

theme.addCreateTheme(BadgeTheme);

var BottomNavTheme = (function (theme) {
  return '\n  .mu-bottom-nav{\n    background-color: ' + theme.background.paper + ';\n  }\n\n  .mu-bottom-nav-shift{\n    background-color: ' + theme.primary + ';\n  }\n  .mu-bottom-item {\n    color: ' + theme.text.secondary + ';\n  }\n  .mu-bottom-nav-shift .mu-bottom-item {\n    color: ' + fade(theme.text.alternate, 0.7) + ';\n  }\n  .mu-bottom-item-active .mu-bottom-item-icon,\n  .mu-bottom-item-active .mu-bottom-item-text {\n    color: ' + theme.primary + ';\n  }\n  .mu-bottom-nav-shift .mu-bottom-item-active .mu-bottom-item-icon,\n  .mu-bottom-nav-shift .mu-bottom-item-active .mu-bottom-item-text {\n    color: ' + theme.text.alternate + ';\n  }\n  ';
});

var BottomNav = {
  name: 'mu-bottom-nav',
  mixins: [color],
  provide: function provide() {
    return {
      getBottomNavValue: this.getBottomNavValue,
      getBottomNavShift: this.getBottomNavShift,
      bottomNavItemClick: this.bottomNavItemClick,
      getDefaultVal: this.getDefaultVal,
      getActiveColor: this.getActiveColor
    };
  },

  props: {
    shift: Boolean,
    value: {}
  },
  data: function data() {
    return {
      activeValue: this.value || 0
    };
  },

  methods: {
    getBottomNavValue: function getBottomNavValue() {
      return this.activeValue;
    },
    getBottomNavShift: function getBottomNavShift() {
      return this.shift;
    },
    getDefaultVal: function getDefaultVal() {
      if (!this.index) this.index = 0;
      return this.index++;
    },
    getActiveColor: function getActiveColor() {
      return {
        className: this.getNormalColorClass(this.color, true),
        color: this.getColor(this.color)
      };
    },
    bottomNavItemClick: function bottomNavItemClick(value) {
      this.activeValue = value;
    }
  },
  watch: {
    value: function value(val) {
      this.activeValue = val;
    },
    activeValue: function activeValue(val) {
      if (val === this.value) return;
      this.$emit('update:value', val);
      this.$emit('change', val);
    }
  },
  render: function render(h) {
    return h(AbstractButton, {
      class: defineProperty({
        'mu-bottom-nav': true,
        'mu-bottom-nav-shift': this.shift
      }, this.getColorClass(false), this.shift),
      style: {
        'background-color': this.shift ? this.getColor(this.color) : ''
      },
      props: {
        ripple: this.shift,
        wrapperClass: 'mu-bottom-nav-shift-wrapper',
        containerElement: 'div',
        rippleOpacity: 0.3
      }
    }, this.$slots.default);
  }
};

var BottomNavItem = {
  name: 'mu-bottom-nav-item',
  mixins: [route, ripple],
  inject: ['getBottomNavValue', 'getBottomNavShift', 'getDefaultVal', 'bottomNavItemClick', 'getActiveColor'],
  props: {
    icon: String,
    title: String,
    value: {}
  },
  data: function data() {
    return {
      itemVal: null
    };
  },
  created: function created() {
    this.itemVal = isNotNull(this.value) ? this.value : this.getDefaultVal();
  },

  computed: {
    active: function active() {
      return this.getBottomNavValue() === this.itemVal;
    },
    activeClassName: function activeClassName() {
      return this.getActiveColor().className;
    },
    activeColor: function activeColor() {
      return this.getActiveColor().color;
    },
    shift: function shift() {
      return this.getBottomNavShift();
    }
  },
  methods: {
    handleClick: function handleClick() {
      this.bottomNavItemClick(this.itemVal);
    }
  },
  watch: {
    value: function value(val) {
      this.itemVal = val;
    }
  },
  render: function render(h) {
    var icon = this.icon ? h(Icon, { class: 'mu-bottom-item-icon', props: { value: this.icon } }) : undefined;
    var title = this.title ? h('span', { staticClass: 'mu-bottom-item-text' }, this.title) : undefined;
    return h(AbstractButton, {
      staticClass: 'mu-bottom-item',
      class: defineProperty({
        'mu-bottom-item-active': this.active,
        'is-shift': this.active && this.shift
      }, this.activeClassName, !this.shift && this.active),
      style: {
        color: !this.shift && this.active ? this.activeColor : ''
      },
      props: _extends({
        ripple: !this.shift && this.ripple,
        containerElement: 'div',
        wrapperClass: 'mu-bottom-item-wrapper'
      }, this.generateRouteProps()),
      on: {
        click: this.handleClick
      }
    }, [icon, title]);
  }
};

BottomNav.install = function (Vue$$1) {
  Vue$$1.component(BottomNav.name, BottomNav);
  Vue$$1.component(BottomNavItem.name, BottomNavItem);
};

theme.addCreateTheme(BottomNavTheme);

var BottomSheetTheme = (function (theme) {
  return "\n    .mu-bottom-sheet {\n      background-color: " + theme.background.paper + ";\n    }\n  ";
});

var BottomSheet = {
  name: 'mu-bottom-sheet',
  mixins: [popup],
  render: function render(h) {
    return h(BottomSheetTransition, [this.open ? h('div', {
      staticClass: 'mu-bottom-sheet',
      style: {
        'z-index': this.zIndex
      }
    }, this.$slots.default) : undefined]);
  }
};

BottomSheet.install = function (Vue$$1) {
  Vue$$1.component(BottomSheet.name, BottomSheet);
};

theme.addCreateTheme(BottomSheetTheme);

var BreadcrumbsTheme = (function (theme) {
  return "\n  .mu-breadcrumbs-item {\n    color: " + theme.primary + ";\n  }\n  .mu-breadcrumbs-item.is-disbaled {\n    color: " + theme.text.disabled + ";\n  }\n  .mu-breadcrumbs-divider {\n    color: " + theme.text.disabled + ";\n  }\n  ";
});

var Breadcrumbs = {
  name: 'mu-breadcrumbs',
  props: {
    divider: {
      type: String,
      default: '/'
    }
  },
  methods: {
    createChildren: function createChildren(h) {
      var _this = this;

      if (!this.$slots.default) return;
      var divider = this.$slots.divider ? this.$slots.divider : this.divider;
      var children = [];
      var length = this.$slots.default.length;
      var dividerData = { staticClass: 'mu-breadcrumbs-divider' };

      this.$slots.default.forEach(function (el, i) {
        children.push(el);
        if (!el.componentOptions || el.componentOptions.tag !== 'mu-breadcrumbs-item' || i === length - 1) return;

        children.push(_this.$createElement('li', dividerData, divider));
      });
      return children;
    }
  },
  render: function render(h) {
    return h('ul', {
      staticClass: 'mu-breadcrumbs',
      on: this.$listeners
    }, this.createChildren(h));
  }
};

var BreadcrumbsItem = {
  name: 'mu-breadcrumbs-item',
  mixins: [route],
  props: {
    disabled: Boolean
  },
  render: function render(h) {
    var props = this.to ? this.generateRouteProps() : {};
    return h('li', {
      staticClass: 'mu-breadcrumbs-item',
      class: this.disabled ? 'is-disbaled' : ''
    }, [h(this.to ? 'router-link' : 'a', {
      props: props
    }, this.$slots.default)]);
  }
};

Breadcrumbs.install = function (Vue$$1) {
  Vue$$1.component(Breadcrumbs.name, Breadcrumbs);
  Vue$$1.component(BreadcrumbsItem.name, BreadcrumbsItem);
};

theme.addCreateTheme(BreadcrumbsTheme);

var CardTheme = (function (theme) {
  return '\n    .mu-card {\n      background-color: ' + theme.background.paper + ';\n    }\n    .mu-card-header-title .mu-card-title{\n      color: ' + fade(theme.text.primary, 0.87) + ';\n    }\n    .mu-card-header-title .mu-card-sub-title{\n      color: ' + fade(theme.text.primary, 0.57) + ';\n    }\n    .mu-card-text{\n      color: ' + theme.text.primary + ';\n    }\n    .mu-card-title-container .mu-card-title{\n      color: ' + theme.text.primary + ';\n    }\n    .mu-card-title-container .mu-card-sub-title {\n      color: ' + theme.text.secondary + ';\n    }\n  ';
});

var Card = {
  name: 'mu-card',
  props: {
    raised: Boolean
  },
  render: function render(h) {
    return h('div', {
      staticClass: 'mu-card',
      class: {
        'mu-card__raised': this.raised
      },
      on: this.$listeners
    }, this.$slots.default);
  }
};

var CardHeader = {
  name: 'mu-card-header',
  functional: true,
  props: {
    title: String,
    subTitle: String
  },
  render: function render(h, _ref) {
    var data = _ref.data,
        props = _ref.props,
        slots = _ref.slots;

    slots = slots();
    var title = props.title || props.subTitle ? h('div', {
      staticClass: 'mu-card-header-title'
    }, [h('div', { staticClass: 'mu-card-title' }, props.title), h('div', { staticClass: 'mu-card-sub-title' }, props.subTitle)]) : undefined;

    data.staticClass = (data.staticClass || '') + ' mu-card-header';
    return h('div', data, [slots.avatar, title, slots.default]);
  }
};

var CardMedia = {
  name: 'mu-card-media',
  functional: true,
  props: {
    title: String,
    subTitle: String
  },
  render: function render(h, _ref) {
    var data = _ref.data,
        props = _ref.props,
        children = _ref.children;

    var title = props.title || props.subTitle ? h('div', {
      staticClass: 'mu-card-media-title'
    }, [h('div', { staticClass: 'mu-card-title' }, props.title), h('div', { staticClass: 'mu-card-sub-title' }, props.subTitle)]) : undefined;

    data.staticClass = (data.staticClass || '') + ' mu-card-media';
    return h('div', data, [children, title]);
  }
};

var CardTitle = {
  name: 'mu-card-title',
  functional: true,
  props: {
    title: String,
    subTitle: String
  },
  render: function render(h, _ref) {
    var data = _ref.data,
        props = _ref.props;

    data.staticClass = (data.staticClass || '') + ' mu-card-title-container';
    return h('div', data, [h('div', { staticClass: 'mu-card-title' }, props.title), h('div', { staticClass: 'mu-card-sub-title' }, props.subTitle)]);
  }
};

var CardActions = createSimpleFunctional('mu-card-actions', 'div', 'mu-card-actions');
var CardText = createSimpleFunctional('mu-card-text', 'div', 'mu-card-text');

Card.install = function (Vue$$1) {
  Vue$$1.component(Card.name, Card);
  Vue$$1.component(CardHeader.name, CardHeader);
  Vue$$1.component(CardMedia.name, CardMedia);
  Vue$$1.component(CardTitle.name, CardTitle);
  Vue$$1.component(CardActions.name, CardActions);
  Vue$$1.component(CardText.name, CardText);
};

theme.addCreateTheme(CardTheme);

var IS_TOUCH = typeof window !== 'undefined' && ('ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch);

var Drag = function () {
  function Drag(element, onlyTouch) {
    classCallCheck(this, Drag);

    this.el = element;
    this.startPos = {};
    this.endPos = {};
    this.starts = [];
    this.drags = [];
    this.ends = [];
    this.onlyTouch = onlyTouch;
    if (IS_TOUCH || onlyTouch) {
      this.el.addEventListener('touchstart', this);
    } else {
      this.el.addEventListener('mousedown', this);
    }
  }

  createClass(Drag, [{
    key: 'handleEvent',
    value: function handleEvent(event) {
      switch (event.type) {
        case 'touchstart':
          this.touchStart(event);
          break;
        case 'touchmove':
          this.touchMove(event);
          break;
        case 'touchcancel':
        case 'touchend':
          this.touchEnd(event);
          break;
        case 'mousedown':
          this.mouseStart(event);
          break;
        case 'mousemove':
          this.mouseMove(event);
          break;
        case 'mouseleave':
        case 'mouseup':
          this.mouseEnd(event);
          break;
      }
    }
  }, {
    key: 'touchStart',
    value: function touchStart(event) {
      var _this = this;

      var touch = event.touches[0];
      this.startPos = { // 取第一个touch的坐标值
        x: touch.pageX,
        y: touch.pageY,
        time: new Date().getTime()
      };
      this.endPos = {};
      document.addEventListener('touchmove', this, {
        passive: false
      });
      document.addEventListener('touchend', this, {
        passive: false
      });
      this.starts.map(function (func) {
        func.call(_this, _this.startPos, event);
      });
    }
  }, {
    key: 'touchMove',
    value: function touchMove(event) {
      var _this2 = this;

      if (event.touches.length > 1 || event.scale && event.scale !== 1) return;
      var touch = event.touches[0];
      this.endPos = {
        x: touch.pageX - this.startPos.x,
        y: touch.pageY - this.startPos.y,
        time: new Date().getTime() - this.startPos.time
      };
      this.drags.map(function (func) {
        func.call(_this2, _this2.endPos, event);
      });
    }
  }, {
    key: 'touchEnd',
    value: function touchEnd(event) {
      var _this3 = this;

      this.endPos.time = new Date().getTime() - this.startPos.time;

      document.removeEventListener('touchmove', this);
      document.removeEventListener('touchend', this);
      this.ends.map(function (func) {
        func.call(_this3, _this3.endPos, event);
      });
    }
  }, {
    key: 'mouseStart',
    value: function mouseStart(event) {
      var _this4 = this;

      this.startPos = {
        x: event.clientX,
        y: event.clientY,
        time: new Date().getTime()
      };
      this.endPos = {};
      document.addEventListener('mousemove', this);
      document.addEventListener('mouseup', this);
      this.starts.map(function (func) {
        func.call(_this4, _this4.startPos, event);
      });
    }
  }, {
    key: 'mouseMove',
    value: function mouseMove(event) {
      var _this5 = this;

      this.endPos = {
        x: event.clientX - this.startPos.x,
        y: event.clientY - this.startPos.y
      };

      this.drags.map(function (func) {
        func.call(_this5, _this5.endPos, event);
      });
    }
  }, {
    key: 'mouseEnd',
    value: function mouseEnd(event) {
      var _this6 = this;

      document.removeEventListener('mousemove', this);
      document.removeEventListener('mouseup', this);

      this.endPos.time = new Date().getTime() - this.startPos.time;

      this.ends.map(function (func) {
        func.call(_this6, _this6.endPos, event);
      });
    }
  }, {
    key: 'start',
    value: function start(fun) {
      this.starts.push(fun);
      return this;
    }
  }, {
    key: 'end',
    value: function end(fun) {
      this.ends.push(fun);
      return this;
    }
  }, {
    key: 'drag',
    value: function drag(fun) {
      this.drags.push(fun);
      return this;
    }
  }, {
    key: 'reset',
    value: function reset(event) {
      var touch = event.touches ? event.touches[0] : {};
      this.startPos = { // 取第一个touch的坐标值
        x: touch.pageX || event.clientX,
        y: touch.pageY || event.clientY,
        time: new Date().getTime()
      };
      this.endPos = {
        x: 0,
        y: 0
      };
    }
  }, {
    key: 'destory',
    value: function destory() {
      if (IS_TOUCH || this.onlyTouch) {
        this.el.removeEventListener('touchstart', this);
      } else {
        this.el.removeEventListener('mousedown', this);
      }
    }
  }]);
  return Drag;
}();

function inserted(el, _ref) {
  var value = _ref.value,
      modifiers = _ref.modifiers;

  var drag = new Drag(el, modifiers.touch);
  el._drag = drag;
  drag.start(function (pos, e) {
    value.start && value.start(pos, drag, e);
  });
  drag.drag(function (pos, e) {
    value.move && value.move(pos, drag, e);
  });
  drag.end(function (pos, e) {
    value.end && value.end(pos, drag, e);
    var dirRatio = 0.5;
    var minDistance = 16;
    if (Math.abs(pos.y) < dirRatio * Math.abs(pos.x)) {
      value.left && pos.x < -minDistance && value.left(pos, drag, e);
      value.right && pos.x > minDistance && value.right(pos, e);
    }

    if (Math.abs(pos.x) < dirRatio * Math.abs(pos.y)) {
      value.up && pos.y < -minDistance && value.up(pos, drag, e);
      value.down && pos.y > minDistance && value.down(pos, drag, e);
    }
  });
}
function unbind$1(el) {
  if (el._drag) el._drag.destory();
  el._drag = null;
}

var swipe = {
  name: 'swipe',
  inserted: inserted,
  unbind: unbind$1
};

var Carousel = {
  name: 'mu-carousel',
  directives: {
    swipe: swipe
  },
  provide: function provide() {
    return {
      addCarouselItem: this.addCarouselItem,
      removeCarouselItem: this.removeCarouselItem,
      isCarouselActive: this.isCarouselActive,
      getCarouselTransition: this.getTransition
    };
  },

  props: {
    active: {
      type: Number,
      default: 0
    },
    cycle: {
      type: Boolean,
      default: true
    },
    interval: {
      type: [Number, String],
      default: 6000,
      validator: function validator(value) {
        return value > 0;
      }
    },
    transition: {
      type: String,
      default: 'slide',
      validator: function validator(val) {
        return ['slide', 'fade'].indexOf(val) !== -1;
      }
    },
    hideIndicators: Boolean,
    hideControls: Boolean
  },
  data: function data() {
    return {
      items: [],
      inverse: false,
      activeIndex: this.active
    };
  },
  mounted: function mounted() {
    this.startAutoNext();
  },
  beforeDestroy: function beforeDestroy() {
    if (this.timer) clearInterval(this.timer);
  },

  methods: {
    getTransition: function getTransition() {
      return this.transition;
    },
    addCarouselItem: function addCarouselItem(item) {
      var index = this.$children.indexOf(item);
      return index === -1 ? this.items.push(item) : this.items.splice(index, 0, item);
    },
    removeCarouselItem: function removeCarouselItem(item) {
      var index = this.items.indexOf(item);
      if (index === -1) return;
      this.items.splice(index, 1);
    },
    isCarouselActive: function isCarouselActive(item) {
      return this.items.indexOf(item) === this.activeIndex;
    },
    startAutoNext: function startAutoNext() {
      var _this = this;

      if (this.timer) clearInterval(this.timer);
      if (!this.cycle) return;
      this.timer = setInterval(function () {
        return _this.next();
      }, this.interval > 0 ? this.interval : 6000);
    },
    next: function next() {
      var maxIndex = this.items.length - 1;
      var index = this.activeIndex + 1;
      if (index > maxIndex) index = 0;
      this.activeIndex = index;
      this.inverse = false;
    },
    prev: function prev() {
      var index = this.activeIndex - 1;
      if (index < 0) index = this.items.length - 1;
      this.activeIndex = index;
      this.inverse = true;
    },
    changeActiveIndex: function changeActiveIndex(index) {
      if (index !== this.activeIndex) {
        this.inverse = this.activeIndex > index;
        this.activeIndex = index;
      }
    },
    createControls: function createControls(h) {
      if (this.hideControls) return [];
      return [h(Button, {
        class: 'mu-carousel-button mu-carousel-button__left',
        props: {
          icon: true
        },
        on: {
          click: this.prev
        }
      }, [this.$slots.left && this.$slots.left.length > 0 ? this.$slots.left : h('svg', {
        staticClass: 'mu-carousel-svg-icon',
        attrs: {
          viewBox: '0 0 24 24'
        }
      }, [h('path', {
        attrs: {
          d: 'M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z'
        }
      }), h('path', {
        attrs: {
          d: 'M0 0h24v24H0z',
          fill: 'none'
        }
      })])]), h(Button, {
        class: 'mu-carousel-button mu-carousel-button__right',
        props: {
          icon: true
        },
        on: {
          click: this.next
        }
      }, [this.$slots.right && this.$slots.right.length > 0 ? this.$slots.right : h('svg', {
        staticClass: 'mu-carousel-svg-icon',
        attrs: {
          viewBox: '0 0 24 24'
        }
      }, [h('path', {
        attrs: {
          d: 'M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z'
        }
      }), h('path', {
        attrs: {
          d: 'M0 0h24v24H0z',
          fill: 'none'
        }
      })])])];
    },
    createIndicators: function createIndicators(h) {
      var _this2 = this;

      if (this.hideIndicators) return;
      return h('div', {
        staticClass: 'mu-carousel-indicators'
      }, this.items.map(function (item, index) {
        var active = index === _this2.activeIndex;
        return _this2.$scopedSlots.indicator ? _this2.$scopedSlots.indicator({ index: index, active: active }) : h(Button, {
          staticClass: 'mu-carousel-indicator-button',
          class: {
            'mu-carousel-indicator-button__active': active
          },
          props: {
            icon: true
          },
          on: {
            click: function click() {
              return _this2.changeActiveIndex(index);
            }
          }
        }, [h('span', {
          staticClass: 'mu-carousel-indicator-icon'
        })]);
      }));
    }
  },
  render: function render(h) {
    return h('div', {
      staticClass: 'mu-carousel',
      class: {
        'mu-carousel__transition_inverse': this.inverse
      },
      directives: [{
        name: 'swipe',
        value: {
          left: this.next,
          right: this.prev
        },
        modifiers: {
          touch: true
        }
      }]
    }, [].concat(toConsumableArray(this.createControls(h)), [this.createIndicators(h), this.$slots.default]));
  },

  watch: {
    activeIndex: function activeIndex(val) {
      this.startAutoNext();
      this.$emit('change', val);
      this.$emit('update:active', val);
    },
    active: function active(val) {
      this.changeActiveIndex(val);
    },
    cycle: function cycle() {
      this.startAutoNext();
    },
    interval: function interval() {
      this.startAutoNext();
    }
  }
};

var CarouselItem = {
  name: 'mu-carousel-item',
  inject: ['addCarouselItem', 'removeCarouselItem', 'isCarouselActive', 'getCarouselTransition'],
  data: function data() {
    return {
      classes: []
    };
  },

  computed: {
    active: function active() {
      return this.isCarouselActive(this);
    },
    transition: function transition() {
      return this.getCarouselTransition();
    }
  },
  created: function created() {
    this.addCarouselItem(this);
  },
  beforeDestroy: function beforeDestroy() {
    this.removeCarouselItem(this);
  },
  render: function render(h) {
    return h('transition', {
      props: {
        name: 'mu-carousel-' + this.transition
      }
    }, [h('div', {
      staticClass: 'mu-carousel-item',
      class: [].concat(toConsumableArray(this.classes)),
      directives: [{
        name: 'show',
        value: this.active
      }]
    }, this.$slots.default)]);
  }
};

Carousel.install = function (Vue$$1) {
  Vue$$1.component(Carousel.name, Carousel);
  Vue$$1.component(CarouselItem.name, CarouselItem);
};

var CheckboxTheme = (function (theme) {
  return "\n  .mu-checkbox {\n    color: " + theme.text.secondary + ";\n  }\n  .mu-checkbox.disabled {\n    color: " + theme.text.disabled + ";\n  }\n  .mu-checkbox-checked {\n    color: " + theme.primary + ";\n  }\n  .mu-checkbox.disabled .mu-checkbox-label {\n    color: " + theme.text.disabled + ";\n  }\n  .mu-checkbox-label {\n    color: " + theme.text.primary + ";\n  }\n  ";
});

function select () {
  var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'checkbox';
  // checkbox
  var iconProps = type === 'switch' ? {} : { uncheckIcon: String, checkedIcon: String };
  return {
    mixins: [color, ripple],
    inheritAttrs: false,
    inject: {
      muFormItem: {
        default: ''
      }
    },
    model: {
      prop: 'inputValue',
      event: 'change'
    },
    props: _extends({
      label: String,
      labelLeft: Boolean,
      readonly: Boolean
    }, iconProps, {
      disabled: Boolean,
      tabIndex: [Number, String]
    }),
    methods: {
      start: function start(event) {
        if (this.disabled) return;
        if (this.ripple && (event.type !== 'mousedown' || event.button === 0)) {
          this.$refs.ripple.start(event);
        }
        this.$emit(event.type, event);
      },
      end: function end(event) {
        if (this.disabled) return;
        if (this.ripple) this.$refs.ripple.end();
        if (event) this.$emit(event.type, event);
      },
      handleClick: function handleClick(e) {
        if (this.disabled || this.readonly) return;
        this.toggle();
        this.muFormItem && this.muFormItem.onBlur();
        this.end();
        this.$emit('click', e);
      },
      handleKeydown: function handleKeydown(e) {
        if (this.disabled) return;
        this.end(e);
        if (keycode(e) === 'enter' && !this.readonly) this.handleClick(e);
      },
      createRipple: function createRipple(h, staticClass, children) {
        return this.disabled || !this.ripple ? h('div', {
          staticClass: staticClass
        }, children) : h(TouchRipple, {
          staticClass: staticClass,
          props: {
            rippleWrapperClass: 'mu-' + type + '-ripple-wrapper',
            centerRipple: true,
            color: this.rippleColor,
            opacity: this.rippleOpacity
          },
          ref: 'ripple'
        }, children);
      },
      createInputElement: function createInputElement(h) {
        return h('input', {
          attrs: _extends({}, this.$attrs, {
            type: type === 'switch' ? 'checkbox' : type,
            disabled: this.disabled,
            checked: this.checked,
            readonly: this.readonly,
            tabindex: -1
          })
        });
      },
      createSelect: function createSelect(h, view) {
        var _class;

        var colorClass = this.getNormalColorClass(this.color, true);
        var label = this.label ? h('div', { staticClass: 'mu-' + type + '-label' }, this.label) : undefined;
        var wrapper = h('div', {
          staticClass: 'mu-' + type + '-wrapper'
        }, this.labelLeft ? [label, view] : [view, label]);

        return h('div', {
          staticClass: 'mu-' + type + ' ' + (this.checked ? colorClass : ''),
          attrs: {
            tabindex: this.disabled ? -1 : this.tabIndex ? this.tabIndex : 0
          },
          style: {
            color: this.checked && !this.disabled ? this.getColor(this.color) : ''
          },
          class: (_class = {
            'label-left': this.labelLeft,
            'disabled': this.disabled
          }, defineProperty(_class, 'mu-' + type + '-checked', this.checked), defineProperty(_class, 'no-label', !this.label), _class),
          on: _extends({}, this.$listeners, {
            click: this.handleClick,
            keydown: this.handleKeydown,
            mousedown: this.start,
            mouseleave: this.end,
            mouseup: this.end,
            touchstart: this.start,
            touchend: this.end,
            touchcancel: this.end,
            focus: this.start,
            blur: this.end
          })
        }, [this.createInputElement(h), wrapper]);
      }
    }
  };
}

var Checkbox = {
  name: 'mu-checkbox',
  mixins: [select('checkbox')],
  props: {
    inputValue: [Boolean, Array]
  },
  computed: {
    checked: function checked() {
      if (!this.inputValue) return false;
      var inputValue = this.inputValue;
      var value = this.$attrs.value;
      if (inputValue instanceof Array) return inputValue.indexOf(value) !== -1;
      return inputValue;
    }
  },
  methods: {
    toggle: function toggle() {
      var inputValue = this.inputValue;
      var value = this.$attrs.value;
      if (!inputValue || typeof inputValue === 'boolean') {
        this.$emit('change', !inputValue);
        return;
      }
      if (this.checked) {
        inputValue.splice(inputValue.indexOf(value), 1);
        this.$emit('change', inputValue);
      } else {
        this.$emit('change', [].concat(toConsumableArray(inputValue), [value]));
      }
    }
  },
  render: function render(h) {
    var defaultSvgUnCheckIcon = h('svg', {
      staticClass: 'mu-checkbox-icon-uncheck mu-checkbox-svg-icon',
      attrs: {
        viewBox: '0 0 24 24'
      }
    }, [h('path', {
      attrs: {
        d: 'M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z'
      }
    })]);
    var defaultSvgCheckedIcon = h('svg', {
      staticClass: 'mu-checkbox-icon-checked mu-checkbox-svg-icon',
      attrs: {
        viewBox: '0 0 24 24'
      }
    }, [h('path', {
      attrs: {
        d: 'M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z'
      }
    })]);
    var view = this.createRipple(h, 'mu-checkbox-icon', [this.uncheckIcon ? h(Icon, {
      staticClass: 'mu-checkbox-icon-uncheck',
      props: {
        value: this.uncheckIcon
      }
    }) : defaultSvgUnCheckIcon, this.checkedIcon ? h(Icon, {
      staticClass: 'mu-checkbox-icon-checked',
      props: {
        value: this.checkedIcon
      }
    }) : defaultSvgCheckedIcon]);
    return this.createSelect(h, view);
  }
};

Checkbox.install = function (Vue$$1) {
  Vue$$1.component(Checkbox.name, Checkbox);
};

theme.addCreateTheme(CheckboxTheme);

var ChipTheme = (function (theme) {
  return '\n  .mu-chip {\n    background-color: ' + theme.background.chip + ';\n    color: ' + theme.text.primary + ';\n  }\n  .mu-chip:hover .mu-chip-delete-icon{\n    color: ' + fade(fade(theme.text.primary, 0.26), 0.4) + ';\n  }\n  .mu-chip-delete-icon{\n    color: ' + fade(theme.text.primary, 0.26) + ';\n  }\n  .mu-chip:active,\n  .mu-chip:focus,\n  .mu-chip.is-deletable {\n    background-color: ' + emphasize(theme.background.chip, 0.08) + ';\n  }\n  .mu-chip:hover{\n    background-color: ' + emphasize(theme.background.chip, 0.08) + ';\n  }\n  .mu-chip.mu-primary-color {\n    background-color: ' + theme.primary + ';\n  }\n  .mu-chip.mu-secondary-color {\n    background-color: ' + theme.secondary + ';\n  }\n  .mu-chip.mu-success-color {\n    background-color: ' + theme.success + ';\n  }\n  .mu-chip.mu-warning-color {\n    background-color: ' + theme.warning + ';\n  }\n  .mu-chip.mu-info-color {\n    background-color: ' + theme.info + ';\n  }\n  .mu-chip.mu-error-color {\n    background-color: ' + theme.error + ';\n  }\n  ';
});

var Chip = {
  name: 'mu-chip',
  mixins: [color],
  props: {
    delete: Boolean,
    selected: Boolean,
    textColor: String
  },
  methods: {
    handleDelete: function handleDelete(e) {
      e.stopPropagation();
      this.$emit('delete');
    }
  },
  render: function render(h) {
    var svgDeleteIcon = h('svg', {
      staticClass: 'mu-chip-delete-icon',
      attrs: {
        viewBox: '0 0 24 24'
      },
      on: {
        click: this.handleDelete
      }
    }, [h('path', {
      attrs: {
        d: 'M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z'
      }
    })]);

    return h('span', {
      staticClass: 'mu-chip ' + this.getColorClass() + ' ' + this.getTextColorClass(),
      class: {
        'is-deletable': this.selected
      },
      attrs: {
        tabindex: 0
      },
      style: {
        color: this.getColor(this.textColor),
        backgroundColor: this.getColor(this.color)
      },
      on: this.$listeners
    }, [this.$slots.default, this.delete ? svgDeleteIcon : undefined]);
  }
};

Chip.install = function (Vue$$1) {
  Vue$$1.component(Chip.name, Chip);
};

theme.addCreateTheme(ChipTheme);

var tabPressed$1 = false;
var listening$1 = false;

function listenForTabPresses$1() {
  if (!listening$1) {
    typeof window !== 'undefined' && window.addEventListener('keydown', function (event) {
      tabPressed$1 = keycode(event) === 'tab';
    });
    listening$1 = true;
  }
}

var keyboardcontext = '@@keyboardcontext';
var keyboardFocus = {
  name: 'keyboard-focus',
  bind: function bind(el, binding, vnode) {
    listenForTabPresses$1();
    var timer = void 0;
    var handleFocus = function handleFocus(e) {
      if (timer) clearTimeout(timer);
      timer = setTimeout(function () {
        if (tabPressed$1) {
          if (binding.expression) {
            vnode.context[el[keyboardcontext].methodName](e);
          } else {
            el[keyboardcontext].bindingFn(e);
          }
          tabPressed$1 = false;
        }
      }, 150);
    };

    el[keyboardcontext] = {
      handleFocus: handleFocus,
      methodName: binding.expression,
      bindingFn: binding.value
    };
    el.addEventListener('focus', handleFocus);
    el.addEventListener('blur', function () {
      if (timer) clearTimeout(timer);
    });
  },
  update: function update(el, binding) {
    el[keyboardcontext].methodName = binding.expression;
    el[keyboardcontext].bindingFn = binding.value;
  },
  unbind: function unbind(el) {
    el.removeEventListener('focus', el[keyboardcontext].handleFocus);
  }
};

var PickerTheme = (function (theme, type) {
  return '\n  .mu-picker {\n    color: ' + theme.primary + ';\n    background-color: ' + theme.background.paper + ';\n  }\n  .mu-picker-display {\n    background-color: ' + (type === 'dark' ? '#555555' : 'currentColor') + ';\n  }\n  .mu-datepicker-week,\n  .mu-datepicker-toolbar-title,\n  .mu-datepicker-tool-btn,\n  .mu-datepicker-svg-icon,\n  .mu-day-button-text,\n  .mu-month-button-text,\n  .mu-year-button-text,\n  .mu-timepicker-number {\n    color: ' + theme.text.primary + ';\n  }\n\n  .mu-day-button:hover:not(:disabled) .mu-day-button-text,\n  .mu-day-button.selected .mu-day-button-text{\n    color: ' + theme.text.alternate + ';\n  }\n\n  .mu-month-button:hover .mu-month-button-text,\n  .mu-month-button.selected .mu-month-button-text {\n    color: ' + theme.text.alternate + ';\n  }\n  .mu-month-button:disabled .mu-month-button-text {\n    color: ' + theme.text.disabled + ';\n  }\n\n  .mu-timepicker-number__selected {\n    background-color: ' + theme.primary + ';\n    color: ' + theme.text.alternate + ';\n  }\n\n  .mu-timepicker-pointer-mark {\n     background-color: ' + theme.text.alternate + ';\n  }\n  .mu-timepicker-list-hours {\n    border-right-color: ' + theme.divider + ';\n  }\n  .mu-timepicker-hour-button,\n  .mu-timepicker-minute-button {\n    color: ' + theme.text.primary + ';\n  }\n  .mu-timepicker-hour-button:hover,\n  .mu-timepicker-minute-button:hover,\n  .mu-year-button:hover {\n    background-color: ' + fade(theme.text.primary, 0.1) + ';\n  }\n  .mu-datetime-picker .mu-tabs {\n    background-color: ' + (type === 'dark' ? '#555555' : '') + ';\n    color: ' + (type === 'dark' ? theme.text.secondary : '') + '\n  }\n  .mu-datetime-picker .mu-tab-active {\n    color: ' + (type === 'dark' ? theme.text.primary : '') + '\n  }\n  ';
});

var pickerProps = {
  props: {
    landscape: Boolean,
    noDisplay: Boolean,
    displayColor: String
  }
};

var DateDisplay = {
  mixins: [color],
  props: {
    type: String,
    dateTimeFormat: Object,
    monthDaySelected: {
      type: Boolean,
      default: true
    },
    displayDate: Date
  },
  data: function data() {
    return {
      displayDates: [this.displayDate],
      slideType: 'next'
    };
  },

  methods: {
    replaceSelected: function replaceSelected(date) {
      var oldDate = this.displayDates[0];
      this.slideType = date.getTime() > oldDate.getTime() ? 'next' : 'prev';
      this.displayDates.push(date);
      this.displayDates.splice(0, 1);
    },
    createYearSlide: function createYearSlide(h) {
      var _this = this;

      return this.displayDates.map(function (displayDate, index) {
        var fullYear = displayDate.getFullYear();
        return h('transition', {
          props: {
            name: 'mu-date-display-' + _this.slideType
          },
          key: index
        }, [h('div', {
          staticClass: 'mu-date-display-slideIn-wrapper',
          key: fullYear
        }, [h('div', { staticClass: 'mu-date-display-year-title' }, fullYear)])]);
      });
    },
    createMonthSlide: function createMonthSlide(h) {
      var _this2 = this;

      return this.displayDates.map(function (displayDate, index) {
        var displayMonthDay = _this2.type === 'date' ? _this2.dateTimeFormat.formatDisplay(displayDate) : _this2.dateTimeFormat.getMonthList()[displayDate.getMonth()];
        return h('transition', {
          props: {
            name: 'mu-date-display-' + _this2.slideType
          },
          key: index
        }, [h('div', {
          staticClass: 'mu-date-display-slideIn-wrapper',
          key: displayMonthDay
        }, [h('div', { staticClass: 'mu-date-display-monthday-title' }, displayMonthDay)])]);
      });
    }
  },
  render: function render(h) {
    var _this3 = this;

    var displayYear = h('div', {
      staticClass: 'mu-date-display-year',
      on: {
        click: function click() {
          return _this3.$emit('changeView', 'year');
        }
      }
    }, this.createYearSlide(h));
    var displayMonthDay = this.type !== 'year' ? h('div', {
      staticClass: 'mu-date-display-monthday',
      on: {
        click: function click() {
          return _this3.$emit('changeView', _this3.type === 'date' ? 'monthDay' : 'month');
        }
      }
    }, this.createMonthSlide(h)) : undefined;

    return h('div', {
      staticClass: 'mu-picker-display mu-date-display ' + this.getColorClass(false),
      style: {
        'background-color': this.getColor(this.color)
      },
      class: {
        'selected-year': !this.monthDaySelected
      }
    }, [displayYear, displayMonthDay]);
  },

  watch: {
    displayDate: function displayDate(val) {
      this.replaceSelected(val);
    }
  }
};

var DayButton = {
  props: {
    selected: Boolean,
    date: Date,
    disabled: Boolean
  },
  data: function data() {
    return {
      hover: false
    };
  },

  computed: {
    isNow: function isNow() {
      var now = new Date();
      return this.date && this.date.getYear() === now.getYear() && this.date.getMonth() === now.getMonth() && this.date.getDate() === now.getDate();
    },
    dayButtonClass: function dayButtonClass() {
      return {
        selected: this.selected,
        disabled: this.disabled,
        now: this.isNow
      };
    }
  },
  render: function render(h) {
    return this.date ? h('button', {
      staticClass: 'mu-day-button',
      class: this.dayButtonClass,
      on: this.$listeners,
      domProps: {
        disabled: this.disabled
      }
    }, [h('div', { class: 'mu-day-button-bg' }), h('span', {
      class: 'mu-day-button-text',
      domProps: {
        innerHTML: this.date.getDate()
      }
    })]) : h('span', { class: 'mu-day-empty' });
  }
};

var Toolbar = {
  props: {
    dateTimeFormat: Object,
    displayDates: Array,
    type: {
      type: String,
      default: 'month'
    }, // month, year
    nextMonth: {
      type: Boolean,
      default: true
    },
    prevMonth: {
      type: Boolean,
      default: true
    },
    slideType: String
  },
  methods: {
    createTitleSlide: function createTitleSlide(h) {
      var _this = this;

      return this.displayDates.map(function (displayDate, index) {
        var title = _this.type === 'month' ? _this.dateTimeFormat.formatMonth(displayDate) : displayDate.getFullYear();
        return h('transition', {
          props: {
            name: 'mu-datepicker-slide-' + _this.slideType
          },
          key: index
        }, [h('div', {
          staticClass: 'mu-datepicker-toolbar-title',
          class: {
            'clickable': true
          },
          key: title,
          on: {
            click: function click(e) {
              return _this.$emit('click', e);
            }
          }
        }, title)]);
      });
    },
    createPrevIcon: function createPrevIcon(h) {
      return h('svg', {
        staticClass: 'mu-datepicker-svg-icon',
        attrs: {
          viewBox: '0 0 24 24'
        }
      }, [h('path', {
        attrs: {
          d: 'M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z'
        }
      })]);
    },
    createNextIcon: function createNextIcon(h) {
      return h('svg', {
        staticClass: 'mu-datepicker-svg-icon',
        attrs: {
          viewBox: '0 0 24 24'
        }
      }, [h('path', {
        attrs: {
          d: 'M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z'
        }
      })]);
    }
  },
  render: function render(h) {
    var _this2 = this;

    return h('div', {
      staticClass: 'mu-datepicker-toolbar'
    }, [h(Button, {
      staticClass: 'mu-datepicker-tool-btn',
      props: {
        icon: true,
        disabled: !this.prevMonth
      },
      on: {
        click: function click() {
          return _this2.$emit('change', -1);
        }
      }
    }, [this.createPrevIcon(h)]), h('div', {
      staticClass: 'mu-datepicker-toolbar-title-wrapper',
      on: {
        click: function click() {
          return _this2.$emit('changeView', 'month');
        }
      }
    }, [this.createTitleSlide(h)]), h(Button, {
      staticClass: 'mu-datepicker-tool-btn',
      props: {
        icon: true,
        disabled: !this.nextMonth
      },
      on: {
        click: function click() {
          return _this2.$emit('change', 1);
        }
      }
    }, [this.createNextIcon(h)])]);
  }
};

/**
 * material-ui dateUtils.js
 * https://github.com/callemall/material-ui/blob/master/src/DatePicker/dateUtils.js
 */
var localConfig = {
  dayAbbreviation: ['日', '一', '二', '三', '四', '五', '六'],
  dayList: ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'],
  monthList: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'],
  monthLongList: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
};

var dateTimeFormat = {
  formatDisplay: function formatDisplay(date) {
    var day = date.getDate();
    return localConfig.monthList[date.getMonth()] + '-' + (day > 9 ? day : '0' + day) + ' ' + localConfig.dayList[date.getDay()];
  },
  formatDateDisplay: function formatDateDisplay(date) {
    var day = date.getDate();
    return localConfig.monthList[date.getMonth()] + '-' + (day > 9 ? day : '0' + day);
  },
  formatMonth: function formatMonth(date) {
    return date.getFullYear() + ' ' + localConfig.monthLongList[date.getMonth()];
  },
  getWeekDayArray: function getWeekDayArray(firstDayOfWeek) {
    var beforeArray = [];
    var afterArray = [];
    var dayAbbreviation = localConfig.dayAbbreviation;
    for (var i = 0; i < dayAbbreviation.length; i++) {
      if (i < firstDayOfWeek) {
        afterArray.push(dayAbbreviation[i]);
      } else {
        beforeArray.push(dayAbbreviation[i]);
      }
    }
    return beforeArray.concat(afterArray);
  },
  getMonthList: function getMonthList() {
    return localConfig.monthLongList;
  }
};

function getDaysInMonth(d) {
  var resultDate = getFirstDayOfMonth(d);

  resultDate.setMonth(resultDate.getMonth() + 1);
  resultDate.setDate(resultDate.getDate() - 1);

  return resultDate.getDate();
}

function getFirstDayOfMonth(d) {
  return new Date(d.getFullYear(), d.getMonth(), 1);
}

function getMonthArray(d) {
  var length = 3;
  var months = [];
  var month = [];
  for (var i = 0; i < 12; i++) {
    month.push(new Date(d.getFullYear(), i, 1, d.getHours(), d.getMinutes()));
    if (month.length === length) {
      months.push(month);
      month = [];
    }
  }

  return months;
}

function getWeekArray(d, firstDayOfWeek) {
  var dayArray = [];
  var daysInMonth = getDaysInMonth(d);
  var weekArray = [];
  var week = [];

  for (var i = 1; i <= daysInMonth; i++) {
    dayArray.push(new Date(d.getFullYear(), d.getMonth(), i, d.getHours(), d.getMinutes()));
  }

  var addWeek = function addWeek(week) {
    var emptyDays = 7 - week.length;
    for (var _i = 0; _i < emptyDays; ++_i) {
      week[weekArray.length ? 'push' : 'unshift'](null);
    }
    weekArray.push(week);
  };

  dayArray.forEach(function (day) {
    if (week.length > 0 && day.getDay() === firstDayOfWeek) {
      addWeek(week);
      week = [];
    }
    week.push(day);
    if (dayArray.indexOf(day) === dayArray.length - 1) {
      addWeek(week);
    }
  });

  return weekArray;
}

function addMonths(d, months) {
  var newDate = cloneDate(d);
  newDate.setMonth(d.getMonth() + months);
  return newDate;
}

function addYears(d, years) {
  var newDate = cloneDate(d);
  newDate.setFullYear(d.getFullYear() + years);
  return newDate;
}

function cloneDate(d) {
  return new Date(d.getTime());
}

function cloneAsDate(d) {
  var clonedDate = cloneDate(d);
  clonedDate.setHours(0, 0, 0, 0);
  return clonedDate;
}

function isBeforeDate(d1, d2) {
  var date1 = cloneAsDate(d1);
  var date2 = cloneAsDate(d2);

  return date1.getTime() < date2.getTime();
}

function isAfterDate(d1, d2) {
  var date1 = cloneAsDate(d1);
  var date2 = cloneAsDate(d2);

  return date1.getTime() > date2.getTime();
}

function isBetweenDates(dateToCheck, startDate, endDate) {
  return !isBeforeDate(dateToCheck, startDate) && !isAfterDate(dateToCheck, endDate);
}

function isEqualDate(d1, d2) {
  return d1 && d2 && d1.getFullYear() === d2.getFullYear() && d1.getMonth() === d2.getMonth() && d1.getDate() === d2.getDate();
}

function monthDiff(d1, d2) {
  var m = void 0;
  m = (d1.getFullYear() - d2.getFullYear()) * 12;
  m += d1.getMonth();
  m -= d2.getMonth();
  return m;
}

var MonthDayView = {
  props: {
    dateTimeFormat: Object,
    firstDayOfWeek: {
      type: Number,
      default: 1
    },
    maxDate: Date,
    minDate: Date,
    displayDate: Date,
    selectedDate: Date,
    shouldDisableDate: Function
  },
  data: function data() {
    var displayDate = cloneDate(this.displayDate);
    displayDate.setDate(1);
    return {
      weekTexts: this.dateTimeFormat.getWeekDayArray(this.firstDayOfWeek),
      displayDates: [displayDate],
      slideType: 'next'
    };
  },

  computed: {
    prevMonth: function prevMonth() {
      return this.displayDates && monthDiff(this.displayDates[0], this.minDate) > 0;
    },
    nextMonth: function nextMonth() {
      return this.displayDates && monthDiff(this.displayDates[0], this.maxDate) < 0;
    }
  },
  methods: {
    equalsDate: function equalsDate(date) {
      return isEqualDate(date, this.selectedDate);
    },
    isDisableDate: function isDisableDate(day) {
      if (day === null) return false;
      var disabled = false;
      if (this.maxDate && this.minDate) disabled = !isBetweenDates(day, this.minDate, this.maxDate);
      if (!disabled && this.shouldDisableDate) disabled = this.shouldDisableDate(day);
      return disabled;
    },
    handleClick: function handleClick(date) {
      if (date) this.$emit('select', date);
    },
    handleChange: function handleChange(val) {
      var displayDate = addMonths(this.displayDates[0], val);
      this.changeDisplayDate(displayDate);
    },
    changeDisplayDate: function changeDisplayDate(date) {
      var oldDate = this.displayDates[0];
      if (date.getFullYear() === oldDate.getFullYear() && date.getMonth() === oldDate.getMonth()) return;
      this.slideType = date.getTime() > oldDate.getTime() ? 'next' : 'prev';
      var displayDate = cloneDate(date);
      displayDate.setDate(1);
      this.displayDates.push(displayDate);
      this.displayDates.splice(0, 1);
    },
    createWeek: function createWeek(h) {
      return h('div', {
        staticClass: 'mu-datepicker-week'
      }, this.weekTexts.map(function (weekText, index) {
        return h('span', {
          staticClass: 'mu-datepicker-week-day',
          key: index
        }, weekText);
      }));
    },
    createMonthDay: function createMonthDay(h) {
      var _this = this;

      return h('div', {
        staticClass: 'mu-datepicker-monthday'
      }, this.displayDates.map(function (displayDate, index) {
        return h('transition', {
          props: {
            name: 'mu-datepicker-slide-' + _this.slideType
          },
          key: index
        }, [h('div', {
          staticClass: 'mu-datepicker-monthday-slide',
          key: displayDate.getTime()
        }, [_this.createContent(h, displayDate)])]);
      }));
    },
    createContent: function createContent(h, displayDate) {
      var _this2 = this;

      var weeksArray = getWeekArray(displayDate || new Date(), this.firstDayOfWeek);
      return h('div', {
        staticClass: 'mu-datepicker-monthday-content'
      }, weeksArray.map(function (week, i) {
        return h('div', {
          staticClass: 'mu-datepicker-monthday-row',
          key: i
        }, week.map(function (date, j) {
          return h(DayButton, {
            props: {
              disabled: _this2.isDisableDate(date),
              selected: _this2.equalsDate(date),
              date: date
            },
            on: {
              click: function click() {
                return _this2.handleClick(date);
              }
            },
            key: 'dayButton' + i + j
          });
        }));
      }));
    }
  },
  render: function render(h) {
    var _this3 = this;

    return h('div', {
      staticClass: 'mu-datepicker-monthday-container'
    }, [h(Toolbar, {
      props: {
        slideType: this.slideType,
        nextMonth: this.nextMonth,
        prevMonth: this.prevMonth,
        displayDates: this.displayDates,
        dateTimeFormat: this.dateTimeFormat
      },
      on: {
        click: function click() {
          return _this3.$emit('changeView', 'month');
        },
        change: this.handleChange
      }
    }), this.createWeek(h), this.createMonthDay(h)]);
  },

  watch: {
    displayDate: function displayDate(val) {
      this.changeDisplayDate(val);
    }
  }
};

var YearButton = {
  props: {
    year: [String, Number],
    selected: Boolean
  },
  mounted: function mounted() {
    if (this.selected) this.$parent.scrollToSelectedYear(this.$el);
  },
  render: function render(h) {
    return h('button', {
      staticClass: 'mu-year-button',
      class: {
        selected: this.selected
      },
      on: this.$listeners
    }, [h('span', {
      staticClass: 'mu-year-button-text'
    }, this.year)]);
  },

  watch: {
    selected: function selected(val) {
      if (val) this.$parent.scrollToSelectedYear(this.$el);
    }
  }

};

var YearView = {
  props: {
    maxDate: Date,
    minDate: Date,
    displayDate: Date
  },
  computed: {
    years: function years() {
      var minYear = this.minDate.getFullYear();
      var maxYear = this.maxDate.getFullYear();
      var years = [];
      for (var year = minYear; year <= maxYear; year++) {
        years.push(year);
      }
      return years;
    }
  },
  methods: {
    scrollToSelectedYear: function scrollToSelectedYear(yearButtonNode) {
      var container = this.$refs.container;
      var containerHeight = container.clientHeight;
      var yearButtonNodeHeight = yearButtonNode.clientHeight || 32;
      var scrollYOffset = yearButtonNode.offsetTop + yearButtonNodeHeight / 2 - containerHeight / 2;
      setTimeout(function () {
        return container.scrollTop = scrollYOffset;
      }, 0);
    },
    createYearButtons: function createYearButtons(h) {
      var _this = this;

      return this.years.map(function (year) {
        return h(YearButton, {
          props: {
            year: year,
            selected: year === _this.displayDate.getFullYear()
          },
          on: {
            click: function click(e) {
              _this.$emit('change', year);
            }
          }
        });
      });
    }
  },
  render: function render(h) {
    return h('div', {
      staticClass: 'mu-datepicker-year-container'
    }, [h('div', {
      staticClass: 'mu-datepicker-year',
      ref: 'container'
    }, [h('div', {
      staticClass: 'mu-datepicker-year-list'
    }, this.createYearButtons(h))])]);
  }
};

var MonthView = {
  props: {
    dateTimeFormat: Object,
    maxDate: Date,
    minDate: Date,
    displayDate: Date
  },
  data: function data() {
    var displayDate = cloneDate(this.displayDate);
    displayDate.setDate(1);
    return {
      displayDates: [displayDate],
      slideType: 'next'
    };
  },

  methods: {
    changeDisplayDate: function changeDisplayDate(date) {
      var oldDate = this.displayDates[0];
      if (date.getFullYear() === oldDate.getFullYear() && date.getMonth() === oldDate.getMonth()) return;
      this.slideType = date.getTime() > oldDate.getTime() ? 'next' : 'prev';
      var displayDate = cloneDate(date);
      displayDate.setDate(1);
      this.displayDates.push(displayDate);
      this.displayDates.splice(0, 1);
    },
    handleChange: function handleChange(val) {
      var displayDate = cloneDate(this.displayDates[0]);
      displayDate.setFullYear(displayDate.getFullYear() + val);
      this.changeDisplayDate(displayDate);
    },
    createMonth: function createMonth(h) {
      var _this = this;

      return h('div', {
        staticClass: 'mu-datepicker-month'
      }, this.displayDates.map(function (displayDate, index) {
        return h('transition', {
          props: {
            name: 'mu-datepicker-slide-' + _this.slideType
          },
          key: index
        }, [h('div', {
          staticClass: 'mu-datepicker-month-slide',
          key: displayDate.getTime()
        }, [_this.createContent(h, displayDate)])]);
      }));
    },
    createContent: function createContent(h, displayDate) {
      var _this2 = this;

      var monthArray = getMonthArray(displayDate);
      return h('div', {
        staticClass: 'mu-datepicker-month-content'
      }, monthArray.map(function (month, i) {
        return h('div', {
          staticClass: 'mu-datepicker-month-row',
          key: i
        }, month.map(function (date) {
          return _this2.createMonthButton(h, date);
        }));
      }));
    },
    createMonthButton: function createMonthButton(h, date) {
      var _this3 = this;

      var monthText = this.dateTimeFormat.getMonthList()[date.getMonth()];
      var maxDate = new Date(this.maxDate.getFullYear(), this.maxDate.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds());
      var minDate = new Date(this.minDate.getFullYear(), this.minDate.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds());
      var disabled = date.getTime() > maxDate.getTime() || date.getTime() < minDate.getTime();
      return h('button', {
        staticClass: 'mu-month-button',
        attrs: {
          disabled: disabled
        },
        class: {
          selected: date.getFullYear() === this.displayDate.getFullYear() && date.getMonth() === this.displayDate.getMonth()
        },
        on: {
          click: function click() {
            return !disabled && _this3.$emit('change', date);
          }
        }
      }, [h('div', { staticClass: 'mu-month-button-bg' }), h('span', { staticClass: 'mu-month-button-text' }, monthText)]);
    }
  },
  render: function render(h) {
    var _this4 = this;

    return h('div', {
      staticClass: 'mu-datepicker-month-container'
    }, [h(Toolbar, {
      props: {
        slideType: this.slideType,
        type: 'year',
        displayDates: this.displayDates,
        dateTimeFormat: this.dateTimeFormat
      },
      on: {
        click: function click() {
          return _this4.$emit('changeView', 'year');
        },
        change: this.handleChange
      }
    }), this.createMonth(h)]);
  }
};

var DatePicker = {
  name: 'mu-date-picker',
  mixins: [color, pickerProps],
  props: {
    dateTimeFormat: {
      type: Object,
      default: function _default() {
        return dateTimeFormat;
      }
    },
    firstDayOfWeek: {
      type: Number,
      default: 0
    },
    date: {
      type: Date,
      default: function _default() {
        return new Date();
      }
    },
    type: {
      type: String,
      default: 'date' // date, year, month
    },
    maxDate: {
      type: Date,
      default: function _default() {
        return addYears(new Date(), 100);
      }
    },
    minDate: {
      type: Date,
      default: function _default() {
        return addYears(new Date(), -100);
      }
    },
    shouldDisableDate: Function
  },
  data: function data() {
    return {
      displayDate: this.date,
      view: this.type === 'date' ? 'monthDay' : this.type === 'year' ? 'year' : 'month'
    };
  },

  methods: {
    handleYearChange: function handleYearChange(year) {
      var date = cloneAsDate(this.displayDate);
      date.setDate(1);
      date.setFullYear(year);
      this.changeDisplayDate(date);
      if (this.type === 'year') return this.changeDate(date);
      this.changeView(this.type === 'month' ? 'month' : 'monthDay');
    },
    handleMonthChange: function handleMonthChange(date) {
      this.changeDisplayDate(date);
      if (this.type === 'month') return this.changeDate(date);
      this.changeView('monthDay');
    },
    handleSelect: function handleSelect(date) {
      if (date.getTime() > this.maxDate.getTime()) date = new Date(this.maxDate.getTime());
      if (date.getTime() < this.minDate.getTime()) date = new Date(this.minDate.getTime());
      this.changeDisplayDate(date);
      this.changeDate(date);
    },
    changeDate: function changeDate(date) {
      this.$emit('change', date);
      this.$emit('update:date', date);
    },
    changeDisplayDate: function changeDisplayDate(date) {
      this.displayDate = date;
    },
    changeView: function changeView(view) {
      this.view = view;
    }
  },
  render: function render(h) {
    var colorClass = this.getNormalColorClass(this.color, true);
    var color$$1 = this.getColor(this.color);
    var monthdayView = h(MonthDayView, {
      props: {
        dateTimeFormat: this.dateTimeFormat,
        firstDayOfWeek: this.firstDayOfWeek,
        maxDate: this.maxDate,
        minDate: this.minDate,
        displayDate: this.displayDate,
        selectedDate: this.date,
        shouldDisableDate: this.shouldDisableDate
      },
      on: {
        changeView: this.changeView,
        select: this.handleSelect
      }
    });
    var yearView = h(YearView, {
      props: {
        displayDate: this.displayDate,
        maxDate: this.maxDate,
        minDate: this.minDate
      },
      on: {
        change: this.handleYearChange
      }
    });
    var monthView = h(MonthView, {
      props: {
        dateTimeFormat: this.dateTimeFormat,
        maxDate: this.maxDate,
        minDate: this.minDate,
        displayDate: this.displayDate
      },
      on: {
        changeView: this.changeView,
        change: this.handleMonthChange
      }
    });
    return h('div', {
      staticClass: 'mu-picker mu-datepicker ' + colorClass,
      class: {
        'mu-picker-landspace': this.landscape
      },
      style: {
        color: color$$1
      }
    }, [!this.noDisplay ? h(DateDisplay, {
      props: {
        type: this.type,
        monthDaySelected: this.view !== 'year',
        color: this.displayColor,
        displayDate: this.displayDate,
        dateTimeFormat: this.dateTimeFormat
      },
      on: {
        changeView: this.changeView
      }
    }) : undefined, h('div', {
      staticClass: 'mu-picker-container'
    }, [this.view === 'monthDay' ? monthdayView : this.view === 'month' ? monthView : yearView, this.$slots.default])]);
  },

  watch: {
    date: function date(val) {
      this.displayDate = val;
    }
  }
};

var TimeDisplay = {
  mixins: [color],
  props: {
    affix: {
      type: String,
      default: '',
      validator: function validator(val) {
        return ['', 'pm', 'am'].indexOf(val) !== -1;
      }
    },
    format: {
      type: String,
      validator: function validator(val) {
        return val && ['ampm', '24hr'].indexOf(val) !== -1;
      }
    },
    mode: {
      type: String,
      default: 'hour',
      validator: function validator(val) {
        return ['hour', 'minute'].indexOf(val) !== -1;
      }
    },
    selectedTime: {
      type: Date,
      default: function _default() {
        return new Date();
      },

      required: true
    },
    viewType: String
  },
  computed: {
    sanitizeTime: function sanitizeTime() {
      var hour = this.selectedTime.getHours();
      var min = this.selectedTime.getMinutes().toString();
      if (this.format === 'ampm') {
        hour %= 12;
        hour = hour || 12;
      }
      hour = hour.toString();
      if (hour.length < 2) hour = '0' + hour;
      if (min.length < 2) min = '0' + min;
      return [hour, min];
    }
  },
  methods: {
    handleSelectAffix: function handleSelectAffix(affix) {
      this.$emit('selectAffix', affix);
    },
    handleSelectHour: function handleSelectHour() {
      this.$emit('changeView', 'hour');
    },
    handleSelectMin: function handleSelectMin() {
      this.$emit('changeView', 'minute');
    }
  },
  render: function render(h) {
    var _this = this;

    var displayTime = h('div', {
      staticClass: 'mu-time-display-time'
    }, [h('span', {
      staticClass: 'mu-time-display-clickable',
      class: {
        'inactive': this.viewType === 'clock' && this.mode === 'minute'
      },
      on: {
        click: this.viewType === 'list' ? function () {} : this.handleSelectHour
      }
    }, this.sanitizeTime[0]), h('span', {}, ':'), h('span', {
      staticClass: 'mu-time-display-clickable',
      class: {
        'inactive': this.viewType === 'clock' && this.mode === 'hour'
      },
      on: {
        click: this.viewType === 'list' ? function () {} : this.handleSelectMin
      }
    }, this.sanitizeTime[1])]);

    var displayAffix = this.format === 'ampm' ? h('div', {
      staticClass: 'mu-time-display-affix'
    }, [h('div', {
      staticClass: 'mu-time-display-clickable',
      class: {
        'inactive': this.affix === 'am'
      },
      on: {
        click: function click() {
          return _this.handleSelectAffix('pm');
        }
      }
    }, 'PM'), h('div', {
      staticClass: 'mu-time-display-clickable',
      class: {
        'inactive': this.affix === 'pm'
      },
      on: {
        click: function click() {
          return _this.handleSelectAffix('am');
        }
      }
    }, 'AM')]) : undefined;
    return h('div', {
      staticClass: 'mu-picker-display mu-time-display ' + this.getColorClass(false),
      style: {
        'background-color': this.getColor(this.color)
      }
    }, [h('div', {
      staticClass: 'mu-time-display-text'
    }, [this.format === 'ampm' ? h('div', {
      staticClass: 'mu-time-display-affix'
    }) : undefined, displayTime, displayAffix])]);
  }
};

/**
 * material-ui timeUtils.js
 * https://github.com/callemall/material-ui/blob/master/src/TimePicker/timeUtils.js
 */

function rad2deg(rad) {
  return rad * 57.29577951308232;
}

function getTouchEventOffsetValues(event) {
  var el = event.target;
  var boundingRect = el.getBoundingClientRect();

  return {
    offsetX: event.clientX - boundingRect.left,
    offsetY: event.clientY - boundingRect.top
  };
}

function isInner(props) {
  if (props.type !== 'hour') {
    return false;
  }
  return props.value < 1 || props.value > 12;
}

var positions = [[0, 5], [54.5, 16.6], [94.4, 59.5], [109, 114], [94.4, 168.5], [54.5, 208.4], [0, 223], [-54.5, 208.4], [-94.4, 168.5], [-109, 114], [-94.4, 59.5], [-54.5, 19.6]];
var innerPositions = [[0, 40], [36.9, 49.9], [64, 77], [74, 114], [64, 151], [37, 178], [0, 188], [-37, 178], [-64, 151], [-74, 114], [-64, 77], [-37, 50]];
var ClockNumber = {
  inject: ['getColorObject'],
  props: {
    value: {
      type: Number,
      default: 0
    },
    type: {
      type: String,
      default: 'minute',
      validator: function validator(val) {
        return ['hour', 'minute'].indexOf(val) !== -1;
      }
    },
    selected: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    isInner: function isInner$$1() {
      return isInner(this);
    },
    numberClass: function numberClass() {
      return {
        'mu-timepicker-number__selected': this.selected,
        'mu-timepicker-number__inner': this.isInner
      };
    },
    numberStyle: function numberStyle() {
      var pos = this.value;
      if (this.type === 'hour') {
        pos %= 12;
      } else {
        pos = pos / 5;
      }
      var transformPos = positions[pos];
      if (this.isInner) transformPos = innerPositions[pos];

      var _transformPos = transformPos,
          _transformPos2 = slicedToArray(_transformPos, 2),
          x = _transformPos2[0],
          y = _transformPos2[1];

      return {
        transform: 'translate(' + x + 'px, ' + y + 'px)',
        left: this.isInner ? 'calc(50% - 14px)' : 'calc(50% - 16px)'
      };
    }
  },
  render: function render(h) {
    var _getColorObject = this.getColorObject(),
        color = _getColorObject.color,
        bgColorClass = _getColorObject.bgColorClass;

    return h('span', {
      staticClass: 'mu-timepicker-number ' + (this.selected ? bgColorClass : ''),
      class: this.numberClass,
      style: _extends({
        'background-color': this.selected ? color : ''
      }, this.numberStyle)
    }, this.value === 0 ? '00' : this.value);
  }
};

var ClockPointer = {
  props: {
    hasSelected: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'minute',
      validator: function validator(val) {
        return ['hour', 'minute'].indexOf(val) !== -1;
      }
    },
    value: {
      type: Number
    }
  },
  computed: {
    isInner: function isInner$$1() {
      return isInner(this);
    },
    pointerStyle: function pointerStyle() {
      var type = this.type,
          value = this.value,
          calcAngle = this.calcAngle;

      var angle = type === 'hour' ? calcAngle(value, 12) : calcAngle(value, 60);
      return {
        transform: 'rotateZ(' + angle + 'deg)'
      };
    }
  },
  methods: {
    calcAngle: function calcAngle(value, base) {
      value %= base;
      var angle = 360 / base * value;
      return angle;
    }
  },
  render: function render(h) {
    if (this.value === undefined || this.value === null) return h('span', {});
    return h('div', {
      staticClass: 'mu-timepicker-pointer',
      class: {
        'inner': this.isInner
      },
      style: this.pointerStyle
    }, [h('div', {
      staticClass: 'mu-timepicker-pointer-mark',
      class: {
        'has-selected': this.hasSelected
      }
    })]);
  }
};

var ClockHours = {
  props: {
    format: {
      type: String,
      default: 'ampm',
      validator: function validator(val) {
        return ['ampm', '24hr'].indexOf(val) !== -1;
      }
    },
    initialHours: {
      type: Number,
      default: new Date().getHours()
    }
  },
  computed: {
    hours: function hours() {
      var hourSize = this.format === 'ampm' ? 12 : 24;
      var hours = [];
      for (var i = 1; i <= hourSize; i++) {
        hours.push(i % 24);
      }
      return hours;
    }
  },
  mounted: function mounted() {
    var clockElement = this.$refs.mask;
    this.center = {
      x: clockElement.offsetWidth / 2,
      y: clockElement.offsetHeight / 2
    };
    this.basePoint = {
      x: this.center.x,
      y: 0
    };
  },

  methods: {
    getSelected: function getSelected() {
      var hour = this.initialHours;
      if (this.format === 'ampm') {
        hour %= 12;
        hour = hour || 12;
      }
      return hour;
    },
    isMousePressed: function isMousePressed(event) {
      if (typeof event.buttons === 'undefined') {
        return event.nativeEvent.which;
      }
      return event.buttons;
    },
    handleDown: function handleDown(event) {
      this.isMouseDown = true;
    },
    handleUp: function handleUp(event) {
      if (!this.isMouseDown) return;
      event.preventDefault();
      this.isMouseDown = false;
      this.setClock(event, true);
    },
    handleMove: function handleMove(event) {
      event.preventDefault();
      if (this.isMousePressed(event) !== 1) return;
      this.setClock(event, false);
    },
    handleTouchMove: function handleTouchMove(event) {
      event.preventDefault();
      this.setClock(event.changedTouches[0], false);
    },
    handleTouchEnd: function handleTouchEnd(event) {
      event.preventDefault();
      this.setClock(event.changedTouches[0], true);
    },
    setClock: function setClock(event, finish) {
      if (typeof event.offsetX === 'undefined') {
        var offset = getTouchEventOffsetValues(event);
        event.offsetX = offset.offsetX;
        event.offsetY = offset.offsetY;
      }
      var hours = this.getHours(event.offsetX, event.offsetY);
      this.$emit('change', hours, finish);
    },
    getHours: function getHours(offsetX, offsetY) {
      var step = 30;
      var x = offsetX - this.center.x;
      var y = offsetY - this.center.y;
      var cx = this.basePoint.x - this.center.x;
      var cy = this.basePoint.y - this.center.y;
      var atan = Math.atan2(cx, cy) - Math.atan2(x, y);
      var deg = rad2deg(atan);
      deg = Math.round(deg / step) * step;
      deg %= 360;
      var value = Math.floor(deg / step) || 0;
      var delta = Math.pow(x, 2) + Math.pow(y, 2);
      var distance = Math.sqrt(delta);
      value = value || 12;
      if (this.format === '24hr') {
        if (distance < 90) {
          value += 12;
          value %= 24;
        }
      } else {
        value %= 12;
      }
      return value;
    }
  },
  render: function render(h) {
    var _this = this;

    return h('div', {
      staticClass: 'mu-timepicker-hours'
    }, [h(ClockPointer, {
      props: {
        type: 'hour',
        hasSelected: true,
        value: this.getSelected()
      }
    }), this.hours.map(function (hour) {
      return h(ClockNumber, {
        props: {
          selected: _this.getSelected() === hour,
          type: 'hour',
          value: hour
        },
        key: hour
      });
    }), h('div', {
      staticClass: 'mu-timepicker-hours-mask',
      on: {
        mousedown: this.handleDown,
        mouseup: this.handleUp,
        mousemove: this.handleMove,
        touchmove: this.handleTouchMove,
        touchend: this.handleTouchEnd
      },
      ref: 'mask'
    })]);
  }
};

var ClockMinutes = {
  props: {
    initialMinutes: {
      type: Number,
      default: function _default() {
        return new Date().getMinutes();
      }
    }
  },
  mounted: function mounted() {
    var clockElement = this.$refs.mask;
    this.center = {
      x: clockElement.offsetWidth / 2,
      y: clockElement.offsetHeight / 2
    };
    this.basePoint = {
      x: this.center.x,
      y: 0
    };
  },
  data: function data() {
    return {
      minutes: null
    };
  },
  created: function created() {
    this.minutes = this.getMinuteNumbers();
  },

  methods: {
    getMinuteNumbers: function getMinuteNumbers() {
      var minutes = [];
      for (var i = 0; i < 12; i++) {
        minutes.push(i * 5);
      }
      var selectedMinutes = this.initialMinutes;
      var hasSelected = false;
      var numbers = minutes.map(function (minute) {
        var isSelected = selectedMinutes === minute;
        if (isSelected) {
          hasSelected = true;
        }
        return {
          minute: minute,
          isSelected: isSelected
        };
      });
      return {
        numbers: numbers,
        hasSelected: hasSelected,
        selected: selectedMinutes
      };
    },
    isMousePressed: function isMousePressed(event) {
      if (typeof event.buttons === 'undefined') {
        return event.nativeEvent.which;
      }
      return event.buttons;
    },
    handleDown: function handleDown(event) {
      this.isMouseDown = true;
    },
    handleUp: function handleUp(event) {
      if (!this.isMouseDown) return;
      event.preventDefault();
      this.isMouseDown = false;
      this.setClock(event, true);
    },
    handleMove: function handleMove(event) {
      event.preventDefault();
      if (this.isMousePressed(event) !== 1) {
        return;
      }
      this.setClock(event, false);
    },
    handleTouch: function handleTouch(event) {
      event.preventDefault();
      this.setClock(event.changedTouches[0], event.type.toLowerCase() === 'touchend');
    },
    setClock: function setClock(event, finish) {
      if (typeof event.offsetX === 'undefined') {
        var offset = getTouchEventOffsetValues(event);
        event.offsetX = offset.offsetX;
        event.offsetY = offset.offsetY;
      }
      var minutes = this.getMinutes(event.offsetX, event.offsetY);
      this.$emit('change', minutes, finish);
    },
    getMinutes: function getMinutes(offsetX, offsetY) {
      var step = 6;
      var x = offsetX - this.center.x;
      var y = offsetY - this.center.y;
      var cx = this.basePoint.x - this.center.x;
      var cy = this.basePoint.y - this.center.y;
      var atan = Math.atan2(cx, cy) - Math.atan2(x, y);
      var deg = rad2deg(atan);
      deg = Math.round(deg / step) * step;
      deg %= 360;
      var value = Math.floor(deg / step) || 0;
      return value;
    }
  },
  render: function render(h) {
    return h('div', {
      staticClass: 'mu-timepicker-minutes'
    }, [h(ClockPointer, {
      props: {
        hasSelected: this.minutes.hasSelected,
        value: this.minutes.selected,
        type: 'minute'
      }
    }), this.minutes.numbers.map(function (minute) {
      return h(ClockNumber, {
        props: {
          selected: minute.isSelected,
          type: 'minute',
          value: minute.minute
        },
        key: minute.minute
      });
    }), h('div', {
      staticClass: 'mu-timepicker-minutes-mask',
      on: {
        mousedown: this.handleDown,
        mouseup: this.handleUp,
        mousemove: this.handleMove,
        touchmove: this.handleTouch,
        touchend: this.handleTouch
      },
      ref: 'mask'
    })]);
  },

  watch: {
    initialMinutes: function initialMinutes(val) {
      this.minutes = this.getMinuteNumbers();
    }
  }
};

var ListView = {
  props: {
    format: {
      type: String,
      default: 'ampm',
      validator: function validator(val) {
        return ['ampm', '24hr'].indexOf(val) !== -1;
      }
    },
    time: {
      type: Date,
      default: function _default() {
        return new Date();
      }
    }
  },
  computed: {
    hours: function hours() {
      var hourSize = this.format === 'ampm' ? 12 : 24;
      var hours = [];
      for (var i = 1; i <= hourSize; i++) {
        var num = i % 24;
        num === 0 ? hours.unshift('00') : hours.push(num > 9 ? num : '0' + num);
      }
      return hours;
    },
    minutes: function minutes() {
      var minutes = [];
      for (var i = 1; i <= 60; i++) {
        var num = i % 60;
        num === 0 ? minutes.unshift('00') : minutes.push(num > 9 ? num : '0' + num);
      }
      return minutes;
    }
  },
  mounted: function mounted() {
    this.scrollToSelected(this.$refs.hours);
    this.scrollToSelected(this.$refs.minutes);
  },

  methods: {
    scrollToSelected: function scrollToSelected(container) {
      var buttonNode = container.querySelector('.is-active');
      var btnTop = buttonNode.offsetTop;
      var btnHeight = buttonNode.offsetHeight;
      var containerTop = container.offsetTop;
      var containerHeight = container.offsetHeight;
      var top = containerTop + containerHeight / 2;
      var maxScrollTop = container.scrollHeight - containerHeight;
      var scrollTop = btnTop + btnHeight / 2 - top;
      scrollTop = Math.min(maxScrollTop, scrollTop);
      scrollTop = Math.max(0, scrollTop);
      setTimeout(function () {
        return container.scrollTop = scrollTop;
      }, 0);
    },
    createHoursList: function createHoursList(h) {
      var _this = this;

      var buttons = this.hours.map(function (hour) {
        var val = Number(hour);
        var curHour = _this.time.getHours();
        if (_this.format === 'ampm') {
          curHour %= 12;
          curHour = curHour || 12;
        }
        var isActive = curHour === val;
        return h('button', {
          staticClass: 'mu-timepicker-hour-button',
          class: {
            'is-active': isActive
          },
          on: {
            click: function click() {
              return _this.$emit('changeHours', val);
            }
          }
        }, hour);
      });
      return h('div', {
        staticClass: 'mu-timepicker-list-hours',
        ref: 'hours'
      }, buttons);
    },
    createMinutesList: function createMinutesList(h) {
      var _this2 = this;

      var buttons = this.minutes.map(function (minute) {
        var val = Number(minute);
        return h('button', {
          staticClass: 'mu-timepicker-minute-button',
          class: {
            'is-active': _this2.time.getMinutes() === val
          },
          on: {
            click: function click() {
              return _this2.$emit('changeMinutes', val);
            }
          }
        }, minute);
      });
      return h('div', {
        staticClass: 'mu-timepicker-list-minutes',
        ref: 'minutes'
      }, buttons);
    }
  },
  render: function render(h) {
    return h('div', {
      staticClass: 'mu-timepicker-list'
    }, [this.createHoursList(h), this.createMinutesList(h)]);
  },

  watch: {
    time: function time() {
      var _this3 = this;

      if (this.$isServer) return;
      this.$nextTick(function () {
        _this3.scrollToSelected(_this3.$refs.hours);
        _this3.scrollToSelected(_this3.$refs.minutes);
      });
    }
  }
};

var TimePicker = {
  name: 'mu-time-picker',
  provide: function provide() {
    return {
      getColorObject: this.getColorObject
    };
  },

  mixins: [color, pickerProps],
  props: {
    viewType: {
      type: String,
      default: 'clock',
      validator: function validator(val) {
        return ['clock', 'list'].indexOf(val) !== -1;
      }
    },
    format: {
      type: String,
      default: 'ampm',
      validator: function validator(val) {
        return ['ampm', '24hr'].indexOf(val) !== -1;
      }
    },
    time: {
      type: Date,
      default: function _default() {
        return new Date();
      }
    }
  },
  data: function data() {
    return {
      view: 'hour'
    };
  },

  methods: {
    getColorObject: function getColorObject() {
      return {
        color: this.getColor(this.color),
        colorClass: this.getNormalColorClass(this.color, true),
        bgColorClass: this.getNormalColorClass(this.color)
      };
    },
    getAffix: function getAffix() {
      if (this.format !== 'ampm') return '';
      var hours = this.time.getHours();
      if (hours < 12) {
        return 'am';
      }
      return 'pm';
    },
    handleSelectAffix: function handleSelectAffix(affix) {
      if (affix === this.getAffix()) return;
      var hours = this.time.getHours();
      if (affix === 'am') {
        this.handleChangeHours(hours - 12, affix);
        return;
      }
      this.handleChangeHours(hours + 12, affix);
    },
    handleChangeHours: function handleChangeHours(hours, finished) {
      var time = new Date(this.time);
      var affix = void 0;
      if (typeof finished === 'string') {
        affix = finished;
        finished = undefined;
      }
      if (!affix) {
        affix = this.getAffix();
      }
      if (affix === 'pm' && hours < 12) {
        hours += 12;
      }
      time.setHours(hours);
      this.changeTime(time, 'hour', finished);
      if (finished) this.view = 'minute';
    },
    handleChangeMinutes: function handleChangeMinutes(minutes, finished) {
      var time = new Date(this.time);
      time.setMinutes(minutes);
      this.changeTime(time, 'minute', finished);
      if (finished) this.view = 'hour';
    },
    changeTime: function changeTime(time, view, finished) {
      this.$emit('change', time, view, finished);
      this.$emit('update:time', time);
    },
    changeView: function changeView(view) {
      this.view = view;
    },
    createTimeDisplay: function createTimeDisplay(h) {
      if (this.noDisplay) return;
      return h(TimeDisplay, {
        props: {
          selectedTime: this.time,
          format: this.format,
          mode: this.view,
          color: this.displayColor,
          viewType: this.viewType,
          affix: this.getAffix()
        },
        on: {
          changeView: this.changeView,
          selectAffix: this.handleSelectAffix
        }
      });
    },
    createClock: function createClock(h) {
      return h('div', {
        staticClass: 'mu-timepicker-clock'
      }, [h('div', { staticClass: 'mu-timepicker-circle' }), this.view === 'hour' ? h(ClockHours, {
        props: {
          format: this.format,
          initialHours: this.time.getHours()
        },
        on: {
          change: this.handleChangeHours
        }
      }) : undefined, this.view === 'minute' ? h(ClockMinutes, {
        props: {
          initialMinutes: this.time.getMinutes()
        },
        on: {
          change: this.handleChangeMinutes
        }
      }) : undefined]);
    },
    createList: function createList(h) {
      var _this = this;

      return h(ListView, {
        props: {
          format: this.format,
          time: this.time
        },
        on: {
          changeHours: function changeHours(val) {
            return _this.handleChangeHours(val, true);
          },
          changeMinutes: function changeMinutes(val) {
            return _this.handleChangeMinutes(val, true);
          }
        }
      });
    }
  },
  render: function render(h) {
    var _getColorObject = this.getColorObject(),
        color$$1 = _getColorObject.color,
        colorClass = _getColorObject.colorClass;

    return h('div', {
      staticClass: 'mu-picker mu-timepicker ' + colorClass,
      style: {
        color: color$$1
      },
      class: {
        'mu-picker-landspace': this.landscape
      }
    }, [this.createTimeDisplay(h), h('div', {
      staticClass: 'mu-picker-container'
    }, [this.viewType === 'list' ? this.createList(h) : this.createClock(h), this.$slots.default])]);
  }
};

var DateTimeDisplay = {
  mixins: [color],
  props: {
    affix: String,
    dateTimeFormat: Object,
    view: String,
    format: String,
    viewType: String,
    displayDate: Date
  },
  computed: {
    sanitizeTime: function sanitizeTime() {
      var hour = this.displayDate.getHours();
      var min = this.displayDate.getMinutes().toString();
      if (this.format === 'ampm') {
        hour %= 12;
        hour = hour || 12;
      }
      hour = hour.toString();
      if (hour.length < 2) hour = '0' + hour;
      if (min.length < 2) min = '0' + min;
      return [hour, min];
    }
  },
  methods: {
    createDateDisplay: function createDateDisplay(h) {
      var _this = this;

      var fullYear = this.displayDate.getFullYear();
      var displayMonthDay = this.dateTimeFormat.formatDateDisplay(this.displayDate);
      return h('div', {
        staticClass: 'mu-date-display'
      }, [h('div', {
        staticClass: 'mu-date-display-year',
        class: {
          active: this.view === 'year'
        },
        on: {
          click: function click() {
            return _this.$emit('changeView', 'year');
          }
        }
      }, [h('div', {
        staticClass: 'mu-date-display-year-title'
      }, fullYear)]), h('div', {
        staticClass: 'mu-date-display-monthday',
        class: {
          active: this.view === 'monthDay' || this.view === 'month'
        },
        on: {
          click: function click() {
            return _this.$emit('changeView', 'monthDay');
          }
        }
      }, [h('div', {
        staticClass: 'mu-date-display-monthday-title'
      }, displayMonthDay)])]);
    },
    createTimeDisplay: function createTimeDisplay(h) {
      var _this2 = this;

      var displayTime = h('div', {
        staticClass: 'mu-time-display-time'
      }, [h('span', {
        staticClass: 'mu-time-display-clickable',
        class: {
          'active': this.view === 'hour' || this.view === 'minute' && this.viewType === 'list'
        },
        on: {
          click: this.viewType === 'list' ? function () {} : function () {
            return _this2.$emit('changeView', 'hour');
          }
        }
      }, this.sanitizeTime[0]), h('span', {}, ':'), h('span', {
        staticClass: 'mu-time-display-clickable',
        class: {
          'active': this.view === 'minute' || this.view === 'hour' && this.viewType === 'list'
        },
        on: {
          click: this.viewType === 'list' ? function () {} : function () {
            return _this2.$emit('changeView', 'minute');
          }
        }
      }, this.sanitizeTime[1])]);

      var displayAffix = this.format === 'ampm' ? h('div', {
        staticClass: 'mu-time-display-affix'
      }, [h('div', {
        staticClass: 'mu-time-display-clickable',
        class: {
          'active': this.affix === 'pm'
        },
        on: {
          click: function click() {
            return _this2.$emit('selectAffix', 'pm');
          }
        }
      }, 'PM'), h('div', {
        staticClass: 'mu-time-display-clickable',
        class: {
          'active': this.affix === 'am'
        },
        on: {
          click: function click() {
            return _this2.$emit('selectAffix', 'am');
          }
        }
      }, 'AM')]) : undefined;
      return h('div', {
        staticClass: ' mu-time-display'
      }, [h('div', {
        staticClass: 'mu-time-display-text'
      }, [this.format === 'ampm' ? h('div', {
        staticClass: 'mu-time-display-affix'
      }) : undefined, displayTime, displayAffix])]);
    }
  },
  render: function render(h) {
    return h('div', {
      staticClass: 'mu-picker-display mu-date-time-display ' + this.getColorClass(false),
      style: {
        'background-color': this.getColor(this.color)
      }
    }, [this.createDateDisplay(h), this.createTimeDisplay(h)]);
  }
};

var TabsTheme = (function (theme) {
  return '\n  .mu-tabs{\n    background-color: ' + theme.primary + ';\n    color: ' + fade(theme.text.alternate, 0.7) + ';\n  }\n\n  .mu-tabs-inverse {\n    background-color: ' + theme.background.default + ';\n    color: ' + theme.text.secondary + ';\n  }\n\n  .mu-tab-link-highlight{\n    background-color: ' + theme.secondary + ';\n  }\n  .mu-tab-active {\n    color: ' + theme.text.alternate + ';\n  }\n  .mu-tab-active.is-inverse {\n    color: ' + theme.text.primary + ';\n  }\n  ';
});

var Tabs = {
  name: 'mu-tabs',
  mixins: [color],
  provide: function provide() {
    return {
      tabClick: this.handleTabClick,
      getDefaultVal: this.getDefaultVal,
      addTab: this.addTab,
      removeTab: this.removeTab,
      setTabHighLineStyle: this.setTabHighLineStyle,
      getActiveValue: this.getActiveValue,
      getActiveColor: this.getActiveColor,
      getTabsInverse: this.getInverse
    };
  },

  props: {
    inverse: Boolean,
    indicatorColor: String,
    fullWidth: Boolean,
    center: Boolean,
    value: {}
  },
  data: function data() {
    return {
      tabs: [],
      activeValue: isNotNull(this.value) ? this.value : 0
    };
  },
  created: function created() {
    this.tabIndex = 0;
  },
  mounted: function mounted() {
    this.setTabHighLineStyle();
  },
  updated: function updated() {
    this.setTabHighLineStyle();
  },

  methods: {
    handleTabClick: function handleTabClick(value, tab) {
      if (this.activeValue !== value) {
        this.activeValue = value;
        this.$emit('update:value', value);
        this.$emit('change', value);
      }
    },
    getActiveValue: function getActiveValue() {
      return this.activeValue;
    },
    getDefaultVal: function getDefaultVal() {
      return this.tabIndex++;
    },
    getActiveColor: function getActiveColor() {
      return this.inverse ? {
        className: this.getNormalColorClass(this.color, true),
        color: this.getColor(this.color)
      } : { className: '', color: '' };
    },
    getInverse: function getInverse() {
      return this.inverse;
    },
    addTab: function addTab(tab) {
      var index = this.$children.indexOf(tab);
      return index === -1 ? this.tabs.push(tab) : this.tabs.splice(index, 0, tab);
    },
    removeTab: function removeTab(tab) {
      var index = this.tabs.indexOf(tab);
      if (index === -1) return;
      this.tabs.splice(index, 1);
    },
    getActiveTab: function getActiveTab() {
      return this.tabs.filter(function (tab) {
        return tab.active;
      })[0];
    },
    setTabHighLineStyle: function setTabHighLineStyle() {
      var _this = this;

      this.$nextTick(function () {
        var activeTab = _this.getActiveTab();
        if (!activeTab || !_this.$refs.line || !activeTab.$el) return;
        var el = activeTab.$el;
        var lineEl = _this.$refs.line;
        var rect = el.getBoundingClientRect();
        var tabsRect = _this.$el.getBoundingClientRect();
        lineEl.style.width = rect.width + 'px';
        lineEl.style.left = rect.left - tabsRect.left + 'px';
      });
    }
  },
  watch: {
    value: function value(val) {
      this.activeValue = val;
    },
    activeValue: function activeValue() {
      this.setTabHighLineStyle();
    }
  },
  directives: {
    resize: resize
  },
  render: function render(h) {
    return h('div', {
      staticClass: 'mu-tabs ' + (!this.inverse ? this.getColorClass(false) : ''),
      class: {
        'mu-tabs-full-width': this.fullWidth,
        'mu-tabs-center': this.center,
        'mu-tabs-inverse': this.inverse
      },
      style: {
        'background-color': !this.inverse ? this.getColor(this.color) : ''
      },
      directives: [{
        name: 'resize',
        value: this.setTabHighLineStyle
      }]
    }, [this.$slots.default, h('span', {
      staticClass: 'mu-tab-link-highlight ' + this.getNormalColorClass(this.indicatorColor, false, false),
      style: {
        'background-color': this.getColor(this.indicatorColor)
      },
      ref: 'line'
    })]);
  }
};

var Tab = {
  name: 'mu-tab',
  mixins: [route, ripple],
  inject: ['tabClick', 'getActiveValue', 'getDefaultVal', 'addTab', 'removeTab', 'setTabHighLineStyle', 'getActiveColor', 'getTabsInverse'],
  props: {
    disabled: Boolean,
    value: {}
  },
  data: function data() {
    return {
      tabVal: 0
    };
  },

  computed: {
    active: function active() {
      return !this.disabled && this.getActiveValue() === this.tabVal;
    },
    activeColor: function activeColor() {
      return this.getActiveColor();
    }
  },
  created: function created() {
    this.tabVal = isNotNull(this.value) ? this.value : this.getDefaultVal();
    this.addTab(this);
  },

  methods: {
    handleClick: function handleClick(e) {
      this.tabClick(this.tabVal, this);
      this.$emit('click', e);
    }
  },
  beforeDestory: function beforeDestory() {
    this.removeTab(this);
  },

  watch: {
    active: function active(val, oldVal) {
      if (val) this.$emit('active');
    },
    value: function value(val) {
      this.tabVal = val;
      this.setTabHighLineStyle();
    }
  },
  render: function render(h) {
    return h(AbstractButton, {
      staticClass: 'mu-tab',
      props: _extends({}, this.generateRouteProps(), {
        containerElement: 'div',
        wrapperClass: 'mu-tab-wrapper',
        disabled: this.disabled,
        ripple: this.ripple,
        rippleOpacity: this.rippleOpacity,
        rippleColor: this.rippleColor
      }),
      style: {
        color: this.active ? this.activeColor.color : ''
      },
      class: defineProperty({
        'mu-tab-active': this.active,
        'is-inverse': this.active && this.getTabsInverse() && !this.activeColor.className && !this.activeColor.color
      }, this.activeColor.className, this.active),
      on: {
        click: this.handleClick
      }
    }, this.$slots.default);
  }
};

Tabs.install = function (Vue$$1) {
  Vue$$1.component(Tabs.name, Tabs);
  Vue$$1.component(Tab.name, Tab);
};

theme.addCreateTheme(TabsTheme);

var props = _extends({}, DatePicker.props, TimePicker.props);

delete props.time;
delete props.type;
delete props.landscape;
var DateTimePicker = {
  name: 'mu-date-time-picker',
  provide: function provide() {
    return {
      getColorObject: this.getColorObject
    };
  },

  mixins: [pickerProps, color],
  props: props,
  data: function data() {
    return {
      displayDate: this.date,
      view: 'monthDay',
      type: 'date' // date, time
    };
  },

  methods: {
    getColorObject: function getColorObject() {
      return {
        color: this.getColor(this.color),
        colorClass: this.getNormalColorClass(this.color, true),
        bgColorClass: this.getNormalColorClass(this.color)
      };
    },
    getAffix: function getAffix() {
      if (this.format !== 'ampm') return '';
      var hours = this.date.getHours();
      if (hours < 12) {
        return 'am';
      }
      return 'pm';
    },
    handleYearChange: function handleYearChange(year) {
      var date = cloneAsDate(this.displayDate);
      date.setDate(1);
      date.setFullYear(year);
      this.changeDisplayDate(date);
      this.changeView('monthDay');
    },
    handleMonthChange: function handleMonthChange(date) {
      this.changeDisplayDate(date);
      this.changeView('monthDay');
    },
    handleSelect: function handleSelect(date) {
      if (date.getTime() > this.maxDate.getTime()) date = new Date(this.maxDate.getTime());
      if (date.getTime() < this.minDate.getTime()) date = new Date(this.minDate.getTime());
      this.changeDisplayDate(date);
      this.changeTime(date, 'monthDay', false);
      this.changeType('time');
    },
    changeDisplayDate: function changeDisplayDate(date) {
      this.displayDate = date;
    },
    changeType: function changeType(type) {
      this.type = type;
      if (type === 'date' && ['hour', 'minute'].indexOf(this.view) !== -1) {
        this.changeView('monthDay');
      } else if (type === 'time' && ['monthDay', 'month', 'year'].indexOf(this.view) !== -1) {
        this.changeView('hour');
      }
    },
    changeView: function changeView(view) {
      this.view = view;
      if (['hour', 'minute'].indexOf(view) !== -1 && this.type === 'date') {
        this.changeType('time');
      } else if (['monthDay', 'month', 'year'].indexOf(view) !== -1 && this.type === 'time') {
        this.changeType('date');
      }
    },
    handleSelectAffix: function handleSelectAffix(affix) {
      if (affix === this.getAffix()) return;
      var hours = this.date.getHours();
      if (affix === 'am') {
        this.handleChangeHours(hours - 12, affix);
        return;
      }
      this.handleChangeHours(hours + 12, affix);
    },
    handleChangeHours: function handleChangeHours(hours, finished) {
      var time = new Date(this.date);
      var affix = void 0;
      if (typeof finished === 'string') {
        affix = finished;
        finished = undefined;
      }
      if (!affix) {
        affix = this.getAffix();
      }
      if (affix === 'pm' && hours < 12) {
        hours += 12;
      }
      time.setHours(hours);
      this.changeTime(time, 'hour', finished);
      if (finished) this.view = 'minute';
    },
    handleChangeMinutes: function handleChangeMinutes(minutes, finished) {
      var time = new Date(this.date);
      time.setMinutes(minutes);
      this.changeTime(time, 'minute', finished);
    },
    changeTime: function changeTime(time, view, finished) {
      this.$emit('change', time, view, finished);
      this.$emit('update:date', time);
    },
    createDisplay: function createDisplay(h) {
      if (this.noDisplay) return;
      return h(DateTimeDisplay, {
        props: {
          affix: this.getAffix(),
          dateTimeFormat: this.dateTimeFormat,
          view: this.view,
          format: this.format,
          viewType: this.viewType,
          color: this.displayColor,
          displayDate: this.displayDate
        },
        on: {
          changeView: this.changeView,
          selectAffix: this.handleSelectAffix
        }
      });
    },
    createClock: function createClock(h) {
      return h('div', {
        staticClass: 'mu-timepicker-clock'
      }, [h('div', { staticClass: 'mu-timepicker-circle' }), this.view === 'hour' ? h(ClockHours, {
        props: {
          format: this.format,
          initialHours: this.date.getHours()
        },
        on: {
          change: this.handleChangeHours
        }
      }) : undefined, this.view === 'minute' ? h(ClockMinutes, {
        props: {
          initialMinutes: this.date.getMinutes()
        },
        on: {
          change: this.handleChangeMinutes
        }
      }) : undefined]);
    },
    createList: function createList(h) {
      var _this = this;

      return h(ListView, {
        props: {
          format: this.format,
          time: this.date
        },
        on: {
          changeHours: function changeHours(val) {
            return _this.handleChangeHours(val, true);
          },
          changeMinutes: function changeMinutes(val) {
            return _this.handleChangeMinutes(val, true);
          }
        }
      });
    },
    createTabs: function createTabs(h) {
      return h(Tabs, {
        props: {
          value: this.type,
          color: this.displayColor || this.color,
          fullWidth: true
        },
        on: {
          'update:value': this.changeType
        }
      }, [h(Tab, {
        props: {
          value: 'date'
        }
      }, [h('svg', {
        staticClass: 'mu-datetime-picker-svg',
        attrs: {
          viewBox: '0 0 24 24'
        }
      }, [h('path', {
        attrs: {
          d: 'M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z'
        }
      }), h('path', {
        attrs: {
          d: 'M0 0h24v24H0z',
          fill: 'none'
        }
      })])]), h(Tab, {
        props: {
          value: 'time'
        }
      }, [h('svg', {
        staticClass: 'mu-datetime-picker-svg',
        attrs: {
          viewBox: '0 0 24 24'
        }
      }, [h('path', {
        attrs: {
          d: 'M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z'
        }
      }), h('path', {
        attrs: {
          d: 'M0 0h24v24H0z',
          fill: 'none'
        }
      }), h('path', {
        attrs: {
          d: 'M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z'
        }
      })])])]);
    },
    createContent: function createContent(h) {
      switch (this.view) {
        case 'monthDay':
          return h(MonthDayView, {
            props: {
              dateTimeFormat: this.dateTimeFormat,
              firstDayOfWeek: this.firstDayOfWeek,
              maxDate: this.maxDate,
              minDate: this.minDate,
              displayDate: this.displayDate,
              selectedDate: this.date,
              shouldDisableDate: this.shouldDisableDate
            },
            on: {
              changeView: this.changeView,
              select: this.handleSelect
            }
          });
        case 'month':
          return h(MonthView, {
            props: {
              dateTimeFormat: this.dateTimeFormat,
              maxDate: this.maxDate,
              minDate: this.minDate,
              displayDate: this.displayDate
            },
            on: {
              changeView: this.changeView,
              change: this.handleMonthChange
            }
          });
        case 'year':
          return h(YearView, {
            props: {
              displayDate: this.displayDate,
              maxDate: this.maxDate,
              minDate: this.minDate
            },
            on: {
              change: this.handleYearChange
            }
          });
      }
      return this.viewType === 'clock' ? this.createClock(h) : this.createList(h);
    }
  },
  render: function render(h) {
    var _getColorObject = this.getColorObject(),
        color$$1 = _getColorObject.color,
        colorClass = _getColorObject.colorClass;

    return h('div', {
      staticClass: 'mu-picker mu-datetime-picker ' + colorClass,
      style: {
        color: color$$1
      }
    }, [this.createDisplay(h), h('div', {
      staticClass: 'mu-picker-container'
    }, [this.createTabs(h), h(FadeTransition, [this.createContent(h)]), this.$slots.default])]);
  },

  watch: {
    date: function date(val) {
      this.displayDate = val;
    }
  }
};

theme.addCreateTheme(PickerTheme);
var Picker = {
  install: function install(Vue$$1) {
    Vue$$1.component(DatePicker.name, DatePicker);
    Vue$$1.component(TimePicker.name, TimePicker);
    Vue$$1.component(DateTimePicker.name, DateTimePicker);
  }
};

var DialogTheme = (function (theme) {
  return '\n  .mu-dialog {\n    background-color: ' + theme.background.paper + ';\n  }\n  .mu-dialog-scrollable .mu-dialog-title {\n    border-bottom-color: ' + theme.divider + ';\n  }\n  .mu-dialog-scrollable .mu-dialog-actions {\n    border-top-color: ' + theme.divider + ';\n  }\n  .mu-dialog-title {\n    color: ' + theme.text.primary + ';\n  }\n  .mu-dialog-body {\n    color: ' + fade(theme.text.primary, 0.6) + ';\n  }\n  ';
});

var Dialog = {
  name: 'mu-dialog',
  mixins: [popup],
  props: {
    dialogClass: [String, Array, Object],
    title: String,
    scrollable: Boolean,
    fullscreen: Boolean,
    width: [String, Number],
    maxWidth: [String, Number],
    transition: {
      type: String,
      default: 'scale',
      validator: function validator(val) {
        return ['slide-top', 'slide-bottom', 'slide-left', 'slide-right', 'fade', 'scale'];
      }
    }
  },
  mounted: function mounted() {
    this.setMaxDialogContentHeight();
  },
  updated: function updated() {
    var _this = this;

    this.$nextTick(function () {
      _this.setMaxDialogContentHeight();
    });
  },

  methods: {
    handleWrapperClick: function handleWrapperClick(e) {
      if (this.$el !== e.target) return;
      this.overlayClick(e);
    },
    setMaxDialogContentHeight: function setMaxDialogContentHeight() {
      var dialogEl = this.$refs.dialog;
      if (!dialogEl) return;
      if (!this.scrollable) {
        dialogEl.style.maxHeight = '';
        return;
      }

      var maxDialogContentHeight = window.innerHeight - 2 * 64;
      var _$refs = this.$refs,
          footer = _$refs.footer,
          title = _$refs.title,
          elBody = _$refs.elBody;

      if (footer) maxDialogContentHeight -= footer.offsetHeight;
      if (title) maxDialogContentHeight -= title.offsetHeight;
      if (elBody) {
        var maxBodyHeight = maxDialogContentHeight;
        if (footer) maxBodyHeight -= footer.offsetHeight;
        if (title) maxBodyHeight -= title.offsetHeight;
        elBody.style.maxHeight = maxBodyHeight + 'px';
      }
      dialogEl.style.maxHeight = maxDialogContentHeight + 'px';
    }
  },
  watch: {
    open: function open(newValue) {
      var _this2 = this;

      if (!newValue) return;
      this.$nextTick(function () {
        _this2.setMaxDialogContentHeight();
      });
    }
  },
  render: function render(h) {
    var hasTitleSlots = this.$slots.title && this.$slots.title.length > 0;
    var isShowTitle = this.title || hasTitleSlots;
    var dialogTitle = isShowTitle ? h('div', {
      staticClass: 'mu-dialog-title',
      ref: 'title'
    }, hasTitleSlots ? this.$slots.title : this.title) : undefined;

    var dialogBody = h('div', {
      staticClass: 'mu-dialog-body',
      ref: 'elBody'
    }, this.$slots.default);

    var dialogActions = this.$slots.actions && this.$slots.actions.length > 0 ? h('div', {
      staticClass: 'mu-dialog-actions',
      ref: 'footer'
    }, this.$slots.actions) : undefined;

    var data = {
      staticClass: 'mu-dialog ' + convertClass(this.dialogClass).join(' '),
      class: defineProperty({
        'mu-dialog-fullscreen': this.fullscreen,
        'mu-dialog-scrollable': this.scrollable
      }, 'mu-' + this.transition, true),
      ref: 'dialog'
    };

    if (!this.fullscreen) {
      data.style = {
        'max-width': this.maxWidth === 'auto' ? undefined : getWidth(this.maxWidth),
        'width': this.width === 'auto' ? undefined : getWidth(this.width)
      };
    }
    var dialog = h('div', data, [dialogTitle, dialogBody, dialogActions]);

    return this.open ? h('transition', {
      props: {
        name: 'mu-dialog-transition'
      }
    }, [h('div', {
      staticClass: 'mu-dialog-wrapper',
      style: {
        'z-index': this.zIndex
      },
      on: {
        click: this.handleWrapperClick
      }
    }, [dialog])]) : null;
  }
};

Dialog.install = function (Vue$$1) {
  Vue$$1.component(Dialog.name, Dialog);
};

theme.addCreateTheme(DialogTheme);

var Container = {
  props: {
    container: {
      type: String,
      default: 'popover', // dialog popover bottomSheet
      validator: function validator(val) {
        return val && ['dialog', 'popover', 'bottomSheet'].indexOf(val) !== -1;
      }
    },
    trigger: {},
    open: Boolean
  },
  methods: {
    createWrap: function createWrap(h, children) {
      switch (this.container) {
        case 'popover':
          return h(Popover, {
            props: {
              open: this.open,
              cover: true,
              lazy: true,
              trigger: this.trigger
            },
            on: this.$listeners
          }, children);
        case 'dialog':
          return h(Dialog, {
            props: {
              open: this.open,
              dialogClass: 'mu-picker-dialog',
              transition: 'slide-top'
            },
            on: this.$listeners
          }, children);
        case 'bottomSheet':
          return h(BottomSheet, {
            props: {
              open: this.open
            },
            on: this.$listeners
          }, children);
      }
    }
  },
  render: function render(h) {
    return this.createWrap(h, this.$slots.default);
  }
};

var dayjs_min = createCommonjsModule(function (module, exports) {
!function(t,e){module.exports=e();}(commonjsGlobal,function(){var t="millisecond",e="second",n="minute",r="hour",s="day",i="week",a="month",u="year",c=/^(\d{4})-?(\d{1,2})-?(\d{0,2})(.*?(\d{1,2}):(\d{1,2}):(\d{1,2}))?.?(\d{1,3})?$/,o=/\[.*?\]|Y{2,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,h={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},d=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},f={padStart:d,padZoneStr:function(t){var e=Math.abs(t),n=Math.floor(e/60),r=e%60;return(t<=0?"+":"-")+d(n,2,"0")+":"+d(r,2,"0")},monthDiff:function(t,e){var n=12*(e.year()-t.year())+(e.month()-t.month()),r=t.clone().add(n,"months"),s=e-r<0,i=t.clone().add(n+(s?-1:1),"months");return Number(-(n+(e-r)/(s?r-i:i-r)))},absFloor:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},prettyUnit:function(c){return{M:a,y:u,w:i,d:s,h:r,m:n,s:e,ms:t}[c]||String(c||"").toLowerCase().replace(/s$/,"")},isUndefined:function(t){return void 0===t}},$="en",l={};l[$]=h;var m=function(t){return t instanceof D},y=function(t,e,n){var r;if(!t)return null;if("string"==typeof t)l[t]&&(r=t), e&&(l[t]=e, r=t);else{var s=t.name;l[s]=t, r=s;}return n||($=r), r},M=function(t,e){if(m(t))return t.clone();var n=e||{};return n.date=t, new D(n)},p=function(t,e){return M(t,{locale:e.$L})},S=f;S.parseLocale=y, S.isDayjs=m, S.wrapper=p;var D=function(){function h(t){this.parse(t);}var d=h.prototype;return d.parse=function(t){var e,n;this.$d=null===(e=t.date)?new Date(NaN):S.isUndefined(e)?new Date:e instanceof Date?e:"string"==typeof e&&/.*[^Z]$/i.test(e)&&(n=e.match(c))?new Date(n[1],n[2]-1,n[3]||1,n[5]||0,n[6]||0,n[7]||0,n[8]||0):new Date(e), this.init(t);}, d.init=function(t){this.$y=this.$d.getFullYear(), this.$M=this.$d.getMonth(), this.$D=this.$d.getDate(), this.$W=this.$d.getDay(), this.$H=this.$d.getHours(), this.$m=this.$d.getMinutes(), this.$s=this.$d.getSeconds(), this.$ms=this.$d.getMilliseconds(), this.$L=this.$L||y(t.locale,null,!0)||$;}, d.$utils=function(){return S}, d.isValid=function(){return!("Invalid Date"===this.$d.toString())}, d.isLeapYear=function(){return this.$y%4==0&&this.$y%100!=0||this.$y%400==0}, d.$compare=function(t){return this.valueOf()-M(t).valueOf()}, d.isSame=function(t){return 0===this.$compare(t)}, d.isBefore=function(t){return this.$compare(t)<0}, d.isAfter=function(t){return this.$compare(t)>0}, d.year=function(){return this.$y}, d.month=function(){return this.$M}, d.day=function(){return this.$W}, d.date=function(){return this.$D}, d.hour=function(){return this.$H}, d.minute=function(){return this.$m}, d.second=function(){return this.$s}, d.millisecond=function(){return this.$ms}, d.unix=function(){return Math.floor(this.valueOf()/1e3)}, d.valueOf=function(){return this.$d.getTime()}, d.startOf=function(t,c){var o=this,h=!!S.isUndefined(c)||c,d=function(t,e){var n=p(new Date(o.$y,e,t),o);return h?n:n.endOf(s)},f=function(t,e){return p(o.toDate()[t].apply(o.toDate(),h?[0,0,0,0].slice(e):[23,59,59,999].slice(e)),o)};switch(S.prettyUnit(t)){case u:return h?d(1,0):d(31,11);case a:return h?d(1,this.$M):d(0,this.$M+1);case i:return d(h?this.$D-this.$W:this.$D+(6-this.$W),this.$M);case s:case"date":return f("setHours",0);case r:return f("setMinutes",1);case n:return f("setSeconds",2);case e:return f("setMilliseconds",3);default:return this.clone()}}, d.endOf=function(t){return this.startOf(t,!1)}, d.$set=function(s,i){switch(S.prettyUnit(s)){case"date":this.$d.setDate(i);break;case a:this.$d.setMonth(i);break;case u:this.$d.setFullYear(i);break;case r:this.$d.setHours(i);break;case n:this.$d.setMinutes(i);break;case e:this.$d.setSeconds(i);break;case t:this.$d.setMilliseconds(i);}return this.init(), this}, d.set=function(t,e){return this.clone().$set(t,e)}, d.add=function(t,c){var o=this;t=Number(t);var h,d=S.prettyUnit(c),f=function(e,n){var r=o.set("date",1).set(e,n+t);return r.set("date",Math.min(o.$D,r.daysInMonth()))};if(d===a)return f(a,this.$M);if(d===u)return f(u,this.$y);switch(d){case n:h=6e4;break;case r:h=36e5;break;case s:h=864e5;break;case i:h=6048e5;break;case e:h=1e3;break;default:h=1;}var $=this.valueOf()+t*h;return p($,this)}, d.subtract=function(t,e){return this.add(-1*t,e)}, d.format=function(t,e){var n=this,r=t||"YYYY-MM-DDTHH:mm:ssZ",s=S.padZoneStr(this.$d.getTimezoneOffset()),i=e||this.$locale(),a=i.weekdays,u=i.months;return r.replace(o,function(t){if(t.indexOf("[")>-1)return t.replace(/\[|\]/g,"");switch(t){case"YY":return String(n.$y).slice(-2);case"YYYY":return String(n.$y);case"M":return String(n.$M+1);case"MM":return S.padStart(n.$M+1,2,"0");case"MMM":return u[n.$M].slice(0,3);case"MMMM":return u[n.$M];case"D":return String(n.$D);case"DD":return S.padStart(n.$D,2,"0");case"d":return String(n.$W);case"dddd":return a[n.$W];case"H":return String(n.$H);case"HH":return S.padStart(n.$H,2,"0");case"h":case"hh":return 0===n.$H?12:S.padStart(n.$H<13?n.$H:n.$H-12,"hh"===t?2:1,"0");case"a":return n.$H<12?"am":"pm";case"A":return n.$H<12?"AM":"PM";case"m":return String(n.$m);case"mm":return S.padStart(n.$m,2,"0");case"s":return String(n.$s);case"ss":return S.padStart(n.$s,2,"0");case"SSS":return S.padStart(n.$ms,3,"0");case"Z":return s;default:return s.replace(":","")}})}, d.diff=function(t,c,o){var h=S.prettyUnit(c),d=M(t),f=this-d,$=S.monthDiff(this,d);switch(h){case u:$/=12;break;case a:break;case"quarter":$/=3;break;case i:$=f/6048e5;break;case s:$=f/864e5;break;case r:$=f/36e5;break;case n:$=f/6e4;break;case e:$=f/1e3;break;default:$=f;}return o?$:S.absFloor($)}, d.daysInMonth=function(){return this.endOf(a).$D}, d.$locale=function(){return l[this.$L]}, d.locale=function(t,e){var n=this.clone();return n.$L=y(t,e,!0), n}, d.clone=function(){return p(this.toDate(),this)}, d.toDate=function(){return new Date(this.$d)}, d.toArray=function(){return[this.$y,this.$M,this.$D,this.$H,this.$m,this.$s,this.$ms]}, d.toJSON=function(){return this.toISOString()}, d.toISOString=function(){return this.toDate().toISOString()}, d.toObject=function(){return{years:this.$y,months:this.$M,date:this.$D,hours:this.$H,minutes:this.$m,seconds:this.$s,milliseconds:this.$ms}}, d.toString=function(){return this.$d.toUTCString()}, h}();return M.extend=function(t,e){return t(e,D,M), M}, M.locale=y, M.en=l[$], M});
});

var DEFAULT_FORMAT = {
  date: 'YYYY-MM-DD',
  time: 'HH:mm',
  year: 'YYYY',
  month: 'YYYY-MM',
  dateTime: 'YYYY-MM-DD HH:mm'
};

var PickerProps = _extends({}, TimePicker.props, DatePicker.props, pickerProps.props);

delete PickerProps.date;
delete PickerProps.time;
delete PickerProps.type;
delete PickerProps.format;

var DateInput = {
  name: 'mu-date-input',
  mixins: [_extends({}, input)],
  directives: {
    keyboardFocus: keyboardFocus
  },
  model: {
    prop: 'value',
    event: 'input'
  },
  props: _extends({
    container: {
      type: String,
      default: 'popover', // dialog popover bottomSheet
      validator: function validator(val) {
        return val && ['dialog', 'popover', 'bottomSheet'].indexOf(val) !== -1;
      }
    },
    type: {
      type: String,
      default: 'date' // date, time, year, month, dateTime, dateRange
    },
    format: {
      type: String
    },
    rangeSeparator: {
      type: String,
      default: '—'
    },
    actions: Boolean,
    clockType: TimePicker.props.format,
    okLabel: {
      type: String,
      default: '确定'
    },
    cancelLabel: {
      type: String,
      default: '取消'
    },
    value: {},
    valueFormat: String
  }, PickerProps),
  data: function data() {
    return {
      open: false,
      date: this.value ? dayjs_min(this.value).toDate() : new Date()
    };
  },

  methods: {
    changeValue: function changeValue() {
      this.closePicker();
      var value = this.valueFormat ? dayjs_min(this.date).format(this.valueFormat) : this.date;
      this.$emit('input', value);
      this.$emit('change', value);
      if (this.muFormItem) this.muFormItem.onBlur();
    },
    focus: function focus(e) {
      this.isFocused = true;
      this.$emit('focus', e);
    },
    blur: function blur(e) {
      this.isFocused = false;
      this.$emit('blur', e);
    },
    closePicker: function closePicker() {
      this.open = false;
    },
    handleDateChange: function handleDateChange(date) {
      this.date = date;
      if (!this.actions) this.changeValue();
    },
    handleTimeChange: function handleTimeChange(date, mode, finished) {
      this.date = date;
      if (!finished || mode !== 'minute') return;
      if (!this.actions) this.changeValue();
    },
    generateTextFieldProps: function generateTextFieldProps() {
      return this.generateProps(input.props);
    },
    generatePickerProps: function generatePickerProps() {
      return this.generateProps(pickerProps.props);
    },
    generateDatePickerProps: function generateDatePickerProps() {
      return this.generateProps(DatePicker.props);
    },
    generateTimePickerProps: function generateTimePickerProps() {
      return this.generateProps(TimePicker.props);
    },
    generateProps: function generateProps(props) {
      var _this = this;

      var obj = {};
      Object.keys(props).forEach(function (key) {
        obj[key] = _this[key];
      });
      return obj;
    },
    createTextField: function createTextField(h) {
      var _this2 = this;

      var dateStr = this.value ? dayjs_min(this.value).format(this.format ? this.format : DEFAULT_FORMAT[this.type]) : '';
      var listeners = _extends({}, this.$listeners, {
        keydown: function keydown(e) {
          if (keycode(e) === 'tab') {
            _this2.blur(e);
            _this2.open = false;
          }
        },
        click: function click() {
          return _this2.open = true;
        },
        focus: this.focus,
        blur: this.blur
      });
      delete listeners.input;
      delete listeners.change;
      var placeholder = !this.labelFloat ? this.$attrs.placeholder : '';
      return [h('input', {
        staticClass: 'mu-text-field-input',
        ref: 'input',
        attrs: _extends({
          tabindex: 0
        }, this.$attrs, {
          disabled: this.disabled,
          placeholder: placeholder,
          readonly: true
        }),
        domProps: {
          value: dateStr
        },
        directives: [{
          name: 'keyboard-focus',
          value: function value() {
            return _this2.open = true;
          }
        }],
        on: listeners
      })];
    },
    createActions: function createActions(h) {
      if (!this.actions) return;
      return h('div', {
        staticClass: 'mu-picker-actions'
      }, [h(Button, {
        props: {
          flat: true,
          color: 'primary'
        },
        on: {
          click: this.closePicker
        }
      }, this.cancelLabel), h(Button, {
        props: {
          flat: true,
          color: 'primary'
        },
        on: {
          click: this.changeValue
        }
      }, this.okLabel)]);
    },
    createPicker: function createPicker(h) {
      switch (this.type) {
        case 'date':
        case 'year':
        case 'month':
          return h(DatePicker, {
            props: _extends({}, this.generateDatePickerProps(), this.generatePickerProps(), {
              type: this.type === 'month' ? 'month' : this.type === 'year' ? 'year' : 'date',
              date: this.date
            }),
            on: {
              change: this.handleDateChange
            },
            style: {
              width: this.container === 'bottomSheet' ? 'auto' : ''
            }
          }, [this.createActions(h)]);
        case 'dateTime':
          return h(DateTimePicker, {
            props: _extends({}, this.generateDatePickerProps(), this.generateTimePickerProps(), this.generatePickerProps(), {
              format: this.clockType,
              date: this.date
            }),
            on: {
              change: this.handleTimeChange
            },
            style: {
              width: this.container === 'bottomSheet' ? 'auto' : ''
            }
          }, [this.createActions(h)]);
        case 'time':
          return h(TimePicker, {
            props: _extends({}, this.generateTimePickerProps(), this.generatePickerProps(), {
              time: this.date,
              format: this.clockType
            }),
            on: {
              change: this.handleTimeChange
            },
            style: {
              width: this.container === 'bottomSheet' ? 'auto' : ''
            }
          }, [this.createActions(h)]);
      }
    }
  },
  render: function render(h) {
    return this.createInput(h, {
      staticClass: 'mu-text-field',
      ref: 'content'
    }, [this.createTextField(h), this.$slots.default, h(Container, {
      props: {
        container: this.container,
        open: this.open,
        trigger: this.$el ? this.$el.querySelector('.mu-text-field') : undefined
      },
      ref: 'popover',
      on: {
        close: this.closePicker
      }
    }, [this.createPicker(h)])]);
  },

  watch: {
    value: function value(val) {
      this.date = val ? dayjs_min(val).toDate() : undefined;
    }
  }
};

DateInput.install = function (Vue$$1) {
  Vue$$1.component(DateInput.name, DateInput);
};

var DataTableTheme = (function (theme, type) {
  return '\n  .mu-table {\n    background-color: ' + theme.text.alternate + ';\n  }\n  .mu-table tr {\n    color: ' + theme.text.primary + ';\n  }\n  .mu-table tr.is-stripe {\n    background-color: ' + (type === 'dark' ? grey800 : grey50) + ';\n  }\n  .mu-table tr.is-hover {\n    background-color: ' + (type === 'dark' ? 'rgba(0, 0, 0, .14)' : grey200) + ';\n  }\n  .mu-table tr.is-selected {\n    background-color: ' + (type === 'dark' ? grey700 : grey100) + ';\n  }\n  .mu-table td {\n    border-bottom-color: ' + theme.divider + ';\n  }\n  .mu-table th {\n    color: ' + theme.text.secondary + ';\n    border-bottom-color: ' + theme.divider + ';\n  }\n  .mu-table th.is-sortable:hover {\n    color: ' + theme.text.primary + ';\n  }\n  .mu-table th.is-sorting {\n    color: ' + theme.text.primary + ';\n  }\n  .mu-table-border {\n    border-color: ' + theme.divider + ';\n  }\n  .mu-table-border th,\n  .mu-table-border td {\n    border-right-color: ' + theme.divider + ';\n  }\n  .mu-table-empty {\n    color: ' + theme.text.secondary + ';\n  }\n  .mu-table-expand-row td.is-expand {\n    border-bottom-color: ' + theme.divider + ';\n  }\n  ';
});

var SPACE$1 = 8;
var TooltipContent = {
  name: 'mu-tooltip-content',
  mixins: [popup],
  directives: {
    resize: resize,
    scroll: scroll
  },
  props: {
    overlay: {
      default: false
    },
    escPressClose: {
      default: false
    },
    placement: {
      type: String,
      default: 'bottom',
      validator: function validator(val) {
        return ['top', 'top-start', 'top-end', 'bottom', 'bottom-start', 'bottom-end', 'left', 'left-start', 'left-end', 'right', 'right-start', 'right-end'].indexOf(val) !== -1;
      }
    },
    trigger: {}
  },
  mounted: function mounted() {
    this.setStyle();
  },
  updated: function updated() {
    var _this = this;

    setTimeout(function () {
      return _this.setStyle();
    }, 0);
  },

  methods: {
    getLeftPosition: function getLeftPosition(width, react) {
      switch (this.placement) {
        case 'left':
        case 'left-start':
        case 'left-end':
          return react.left - width - SPACE$1;
        case 'right':
        case 'right-start':
        case 'right-end':
          return react.left + react.width + SPACE$1;
        case 'top':
        case 'bottom':
          return react.left + react.width / 2 - width / 2;
        case 'bottom-start':
        case 'top-start':
          return react.left;
        case 'bottom-end':
        case 'top-end':
          return react.left + react.width - width;
      }
    },
    getTopPosition: function getTopPosition(height, react) {
      switch (this.placement) {
        case 'top':
        case 'top-start':
        case 'top-end':
          return react.top - height - SPACE$1;
        case 'bottom':
        case 'bottom-start':
        case 'bottom-end':
          return react.top + react.height + SPACE$1;
        case 'left':
        case 'right':
          return react.top + react.height / 2 - height / 2;
        case 'left-start':
        case 'right-start':
          return react.top;
        case 'left-end':
        case 'right-end':
          return react.top + react.height - height;
      }
    },
    setStyle: function setStyle() {
      if (!this.open) return;
      var el = this.$el;
      var triggerEl = this.trigger;
      if (!el || !triggerEl) return;
      var elReact = el.getBoundingClientRect();
      var react = triggerEl.getBoundingClientRect();
      el.style.top = this.getTopPosition(elReact.height, react) + 'px';
      el.style.left = this.getLeftPosition(elReact.width, react) + 'px';
    }
  },
  render: function render(h) {
    return h('transition', {
      props: {
        name: 'mu-tooltip-' + this.placement.split('-')[0]
      }
    }, [this.open ? h('div', {
      staticClass: 'mu-tooltip',
      style: {
        'z-index': this.zIndex
      },
      directives: [{
        name: 'resize',
        value: this.setStyle
      }, {
        name: 'scroll',
        value: this.setStyle
      }]
    }, this.$slots.default) : undefined]);
  }
};

var Tooltip = {
  name: 'mu-tooltip',
  props: {
    content: String,
    placement: TooltipContent.props.placement,
    open: Boolean,
    tooltipClass: [String, Object, Array]
  },
  data: function data() {
    return {
      active: this.open,
      trigger: null
    };
  },
  beforeCreate: function beforeCreate() {
    if (this.$isServer) return;

    this.tooltipVM = new Vue({
      data: { node: '' },
      render: function render(h) {
        return this.node;
      }
    }).$mount();
  },
  mounted: function mounted() {
    this.trigger = this.$el;
  },

  methods: {
    addEventHandle: function addEventHandle(old, fn) {
      if (!old) {
        return fn;
      } else if (Array.isArray(old)) {
        return old.indexOf(fn) > -1 ? old : old.concat(fn);
      } else {
        return old === fn ? old : [old, fn];
      }
    },
    show: function show() {
      if (this.timer) clearTimeout(this.timer);
      this.active = true;
    },
    hide: function hide() {
      var _this = this;

      if (this.timer) clearTimeout(this.timer);
      this.timer = setTimeout(function () {
        _this.active = false;
      }, 200);
    }
  },
  watch: {
    active: function active(val) {
      this.$emit('update:open', val);
    },
    open: function open(val) {
      this.active = val;
    }
  },
  render: function render(h) {
    var _this2 = this;

    var content = (this.$slots.content && this.$slots.content.length > 0 ? this.$slots.content : this.content) || '';
    if (this.tooltipVM) {
      this.tooltipVM.node = h(TooltipContent, {
        class: this.tooltipClass,
        props: {
          placement: this.placement,
          open: this.active,
          trigger: this.trigger
        },
        nativeOn: {
          mouseenter: function mouseenter() {
            return _this2.show();
          },
          mouseleave: function mouseleave() {
            return _this2.hide();
          }
        }
      }, content);
    }

    var vnode = getFirstComponentChild(this.$slots.default);
    if (!vnode) return vnode;
    vnode.data = vnode.data || {};
    var on = vnode.data.on = vnode.data.on || {};
    var nativeOn = vnode.data.nativeOn = vnode.data.nativeOn || {};
    nativeOn.mouseenter = on.mouseenter = this.addEventHandle(on.mouseenter, this.show);
    nativeOn.mouseleave = on.mouseleave = this.addEventHandle(on.mouseleave, this.hide);
    return vnode;
  }
};

Tooltip.install = function (Vue$$1) {
  Vue$$1.component(Tooltip.name, Tooltip);
};

var header = {
  methods: {
    toggleSelectAll: function toggleSelectAll(val) {
      this.isSelectAll = val;
      var selects = [];
      if (this.isSelectAll) {
        var i = 0;
        while (i < this.data.length) {
          selects.push(i++);
        }
      }
      this.$emit('update:selects', selects);
    },
    handleSortChange: function handleSortChange(column) {
      var sort = _extends({}, this.sort);

      if (this.sort && this.sort.name === column.name) {
        sort.order = sort.order === 'desc' ? 'asc' : 'desc';
      } else {
        sort.name = column.name;
        sort.order = 'desc';
      }

      this.$emit('update:sort', sort);
      this.$emit('sort-change', sort);
    },
    createSlotHeader: function createSlotHeader() {
      return this.$scopedSlots.header({
        columns: this.columns
      });
    },
    createSlotTh: function createSlotTh(column) {
      return this.$scopedSlots.th(_extends({}, column));
    },
    createDefaultTh: function createDefaultTh(h, column) {
      return [column.sortable ? h('svg', {
        staticClass: 'mu-table-sort-icon',
        attrs: {
          viewBox: '0 0 24 24'
        }
      }, [h('path', {
        attrs: {
          d: 'M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z'
        }
      })]) : undefined, column.title];
    },
    createTh: function createTh(h, column) {
      return this.$scopedSlots.th ? this.createSlotTh(column) : this.createDefaultTh(h, column);
    },
    createCheckboxTh: function createCheckboxTh(h) {
      var isEnable = this.selectable && this.selectAll;
      return h('th', {
        staticClass: 'mu-checkbox-col'
      }, [h(Checkbox, {
        props: {
          inputValue: this.isSelectAll,
          disabled: !isEnable
        },
        on: {
          change: this.toggleSelectAll
        }
      })]);
    },
    createTHeader: function createTHeader(h) {
      var _this = this;

      var arr = this.columns.map(function (column) {
        var th = h('th', {
          class: [column.align ? 'is-' + column.align : '', column.class || '', column.sortable ? 'is-sortable' : '', column.sortable && _this.sort && _this.sort.name === column.name ? 'is-sorting' : '', column.sortable && _this.sort && _this.sort.name === column.name && _this.sort.order === 'asc' ? 'sort-asc' : ''],
          on: {
            click: function click() {
              return column.sortable && _this.handleSortChange(column);
            }
          }
        }, _this.createTh(h, column));

        return column.tooltip ? h(Tooltip, {
          props: {
            content: column.tooltip
          }
        }, [th]) : th;
      });

      if (this.checkbox) arr.unshift(this.createCheckboxTh(h));
      return h('tr', {}, arr);
    },
    createHeader: function createHeader(h) {
      return h('div', {
        staticClass: 'mu-table-header-wrapper',
        ref: 'header',
        directives: [{
          name: 'mousewheel',
          value: this.handleHeaderFooterMousewheel
        }]
      }, [h('table', {
        staticClass: 'mu-table-header',
        style: {
          width: this.tableWidth
        }
      }, [this.createColGroup(h), h('thead', {}, [this.$scopedSlots.header ? this.createSlotHeader() : this.createTHeader(h)])])]);
    }
  }
};

var body = {
  props: {
    expandRowIndex: {
      type: Number,
      default: -1
    },
    autoExpand: {
      type: Boolean,
      default: true
    }
  },
  data: function data() {
    return {
      hoverIndex: -1,
      expandIndex: this.expandRowIndex,
      isSelectAll: false
    };
  },

  methods: {
    handleScroll: function handleScroll(e) {
      var scrollLeft = e.target.scrollLeft;
      var theader = this.$refs.header;
      var tfooter = this.$refs.tfooter;
      if (theader) theader.scrollLeft = scrollLeft;
      if (tfooter) tfooter.scrollLeft = scrollLeft;
    },
    isSelected: function isSelected(index) {
      return this.selects.indexOf(index) !== -1;
    },
    toggleSelect: function toggleSelect(index) {
      if (!this.selectable) return;
      var selects = [].concat(toConsumableArray(this.selects));
      var selectIndex = selects.indexOf(index);
      if (selectIndex !== -1) {
        selects.splice(selectIndex, 1);
      } else {
        selects.push(index);
      }
      selects.sort(function (a, b) {
        return a - b;
      });
      this.$emit('update:selects', selects);
      this.$emit('select-change', index, selects);
    },
    toggleExpand: function toggleExpand(index) {
      this.expandIndex = this.expandIndex === index ? -1 : index;
    },
    createEmpty: function createEmpty(h) {
      return [this.$slots.empty ? this.$slots.empty : h('div', { staticClass: 'mu-table-empty' }, this.noDataText)];
    },
    createSlotContent: function createSlotContent(row, index) {
      return this.$scopedSlots.default({
        row: row,
        $index: index
      });
    },
    createCheckboxTd: function createCheckboxTd(h, index) {
      return h('td', {
        staticClass: 'mu-checkbox-col'
      }, [h(Checkbox, {
        props: {
          inputValue: this.isSelected(index),
          disabled: !this.selectable
        }
      })]);
    },
    createContent: function createContent(h) {
      var _this = this;

      var contents = [];

      var _loop = function _loop(index) {
        var row = _this.data[index];
        var arr = _this.$scopedSlots.default ? _this.createSlotContent(row, index) : _this.columns.map(function (column) {
          var text = column.formatter && typeof column.formatter === 'function' ? column.formatter(row[column.name], row) : row[column.name];
          return h('td', {
            class: [column.align || column.cellAlign ? 'is-' + (column.cellAlign || column.align) : '']
          }, text);
        }) || [];
        if (_this.checkbox) arr.unshift(_this.createCheckboxTd(h, index));

        var rowClassName = typeof _this.rowClassName === 'function' ? _this.rowClassName(index, row) : _this.rowClassName;
        contents.push(h('tr', {
          staticClass: rowClassName,
          class: {
            'is-hover': _this.hover && _this.hoverIndex === index,
            'is-stripe': _this.stripe && index % 2 !== 0,
            'is-selected': _this.isSelected(index)
          },
          style: typeof _this.rowStyle === 'function' ? _this.rowStyle(index, row) : _this.rowStyle,
          on: {
            mouseenter: function mouseenter(e) {
              _this.hoverIndex = index;
              _this.$emit('row-mouseenter', index, row, e);
            },
            mouseleave: function mouseleave(e) {
              _this.hoverIndex = -1;
              _this.$emit('row-mouseleave', index, row, e);
            },
            contextmenu: function contextmenu(e) {
              _this.$emit('row-contextmenu', index, row, e);
            },
            click: function click(e) {
              _this.toggleSelect(index);
              if (_this.autoExpand) _this.toggleExpand(index);
              _this.$emit('row-click', index, row, e);
            },
            dblclick: function dblclick(e) {
              return _this.$emit('row-dblclick', index, row, e);
            }
          },
          key: row[_this.rowKey]
        }, arr));

        if (_this.$scopedSlots.expand) {
          contents.push(h('tr', {
            staticClass: 'mu-table-expand-row'
          }, [h('td', {
            attrs: {
              colspan: _this.columns.length + (_this.checkbox ? 1 : 0)
            },
            class: {
              'is-expand': _this.expandIndex === index
            }
          }, _this.expandIndex === index ? [h(ExpandTransition, {}, _this.$scopedSlots.expand({
            row: row,
            $index: index
          }))] : undefined)]));
        }
      };

      for (var index = 0; index < this.data.length; index++) {
        _loop(index);
      }
      return contents;
    },
    createBody: function createBody(h) {
      return this.data && this.data.length > 0 ? h('div', {
        staticClass: 'mu-table-body-wrapper',
        on: {
          scroll: this.handleScroll
        },
        ref: 'body'
      }, [h('table', {
        staticClass: 'mu-table-body',
        style: {
          width: this.tableWidth
        }
      }, [this.createColGroup(h), h('tbody', {}, this.createContent(h))])]) : this.createEmpty(h);
    }
  },
  watch: {
    selects: function selects(val) {
      this.isSelectAll = val && val.length >= this.data.length;
    },
    expandRowIndex: function expandRowIndex(val) {
      if (this.expandIndex === val) return;
      this.expandIndex = val;
    },
    expandIndex: function expandIndex(val) {
      this.$emit('update:expandRowIndex', val);
      this.$emit('change-expand', val);
    }
  }
};

var footer = {
  methods: {
    createFooter: function createFooter(h) {
      return this.$scopedSlots.footer ? h('div', {
        staticClass: 'mu-table-footer-wrapper',
        ref: 'footer'
      }, [h('table', {
        staticClass: 'mu-table-footer',
        style: {
          width: this.tableWidth
        }
      }, [this.createColGroup(h), h('tbody', {}, this.$scopedSlots.footer({
        columns: this.columns
      }))])]) : undefined;
    }
  }
};

var colgroup = {
  props: {
    minColWidth: {
      type: Number,
      default: 128
    },
    checkboxColWidth: {
      type: Number,
      default: 75
    }
  },
  data: function data() {
    return {
      cols: [],
      tableWidth: ''
    };
  },
  mounted: function mounted() {
    this.setCols();
  },

  methods: {
    setCols: function setCols() {
      var _this = this;

      var tableElWidth = this.$el.offsetWidth;
      var widthArr = this.columns.filter(function (column) {
        return column.width;
      }).map(function (column) {
        return Number(column.width);
      });
      widthArr.forEach(function (width) {
        return tableElWidth -= width;
      });
      if (this.checkbox) tableElWidth -= this.checkboxColWidth;

      var otherWidth = Math.floor(tableElWidth / (this.columns.length - widthArr.length));

      if (otherWidth < this.minColWidth) otherWidth = this.minColWidth;
      this.cols = this.columns.map(function (column) {
        return column.width ? column.width : _this.fit ? otherWidth : _this.minColWidth;
      });
      if (this.checkbox) this.cols.unshift(this.checkboxColWidth);
      var tableWidth = 0;
      this.cols.forEach(function (width) {
        return tableWidth += Number(width);
      });
      this.tableWidth = tableWidth + 'px';
    },
    createColGroup: function createColGroup(h) {
      return h('colgroup', {}, this.cols.map(function (width) {
        return h('col', {
          attrs: {
            width: width
          }
        });
      }));
    }
  },
  watch: {
    columns: function columns() {
      this.setCols();
    }
  },
  directives: {
    resize: resize
  }
};

var ProgressTheme = (function (theme) {
  return "\n  .mu-linear-progress.mu-secondary-color .mu-linear-progress-background,\n  .mu-linear-progress.mu-secondary-color .mu-linear-progress-indeterminate,\n  .mu-linear-progress.mu-secondary-color .mu-linear-progress-determinate {\n    background-color: " + theme.secondary + ";\n  }\n  .mu-linear-progress.mu-success-color .mu-linear-progress-background,\n  .mu-linear-progress.mu-success-color .mu-linear-progress-indeterminate,\n  .mu-linear-progress.mu-success-color .mu-linear-progress-determinate {\n    background-color: " + theme.success + ";\n  }\n  .mu-linear-progress.mu-warning-color .mu-linear-progress-background,\n  .mu-linear-progress.mu-warning-color .mu-linear-progress-indeterminate,\n  .mu-linear-progress.mu-warning-color .mu-linear-progress-determinate {\n    background-color: " + theme.warning + ";\n  }\n  .mu-linear-progress.mu-info-color .mu-linear-progress-background,\n  .mu-linear-progress.mu-info-color .mu-linear-progress-indeterminate,\n  .mu-linear-progress.mu-info-color .mu-linear-progress-determinate {\n    background-color: " + theme.info + ";\n  }\n  .mu-linear-progress.mu-error-color .mu-linear-progress-background,\n  .mu-linear-progress.mu-error-color .mu-linear-progress-indeterminate,\n  .mu-linear-progress.mu-error-color .mu-linear-progress-determinate {\n    background-color: " + theme.error + ";\n  }\n  .mu-linear-progress-background {\n    background-color: " + theme.primary + ";\n  }\n  .mu-linear-progress-indeterminate{\n    background-color: " + theme.primary + ";\n  }\n  .mu-linear-progress-determinate{\n    background-color: " + theme.primary + ";\n  }\n  .mu-circle-spinner {\n    border-color: " + theme.primary + ";\n  }\n  .mu-circle-spinner.mu-secondary-color {\n    border-color: " + theme.secondary + ";\n  }\n  .mu-circular-progress.mu-secondary-color .mu-circular-progress-determinate-path {\n    stroke: " + theme.secondary + ";\n  }\n  .mu-circle-spinner.mu-success-color {\n    border-color: " + theme.success + ";\n  }\n  .mu-circular-progress.mu-success-color .mu-circular-progress-determinate-path {\n    stroke: " + theme.success + ";\n  }\n  .mu-circle-spinner.mu-warning-color {\n    border-color: " + theme.warning + ";\n  }\n  .mu-circular-progress.mu-warning-color .mu-circular-progress-determinate-path {\n    stroke: " + theme.warning + ";\n  }\n  .mu-circle-spinner.mu-info-color {\n    border-color: " + theme.info + ";\n  }\n  .mu-circular-progress.mu-info-color .mu-circular-progress-determinate-path {\n    stroke: " + theme.info + ";\n  }\n  .mu-circle-spinner.mu-error-color {\n    border-color: " + theme.error + ";\n  }\n  .mu-circular-progress.mu-error-color .mu-circular-progress-determinate-path {\n    stroke: " + theme.error + ";\n  }\n  .mu-circular-progress-determinate-path{\n    stroke: " + theme.primary + ";\n  }\n  ";
});

var LinearProgress = {
  name: 'mu-linear-progress',
  mixins: [color],
  props: {
    max: {
      type: Number,
      default: 100
    },
    min: {
      type: Number,
      default: 0
    },
    mode: {
      type: String,
      default: 'indeterminate',
      validator: function validator(val) {
        return ['indeterminate', 'determinate'].indexOf(val) !== -1;
      }
    },
    value: {
      type: Number,
      default: 0
    },
    size: [Number, String]
  },
  computed: {
    percent: function percent() {
      return (this.value - this.min) / (this.max - this.min) * 100;
    },
    linearStyle: function linearStyle() {
      var color$$1 = this.color,
          mode = this.mode,
          percent = this.percent;

      return {
        'background-color': this.getColor(color$$1),
        width: mode === 'determinate' ? percent + '%' : ''
      };
    },
    linearClass: function linearClass() {
      return 'mu-linear-progress-' + this.mode;
    }
  },
  render: function render(h) {
    return h('div', {
      staticClass: 'mu-linear-progress ' + this.getColorClass(),
      style: {
        height: this.size + 'px'
      }
    }, [h('div', {
      staticClass: 'mu-linear-progress-background',
      style: {
        'background-color': this.getColor(this.color)
      }
    }), h('div', {
      style: this.linearStyle,
      class: this.linearClass
    })]);
  }
};

var Circular = {
  mixins: [color],
  props: {
    size: {
      type: Number,
      default: 24
    },
    color: {
      type: String,
      default: ''
    },
    borderWidth: {
      type: Number,
      default: 3
    }
  },
  render: function render(h) {
    return h('div', {
      staticClass: 'mu-circle-wrapper active',
      style: {
        width: this.size + 'px',
        height: this.size + 'px'
      }
    }, [h('div', {
      staticClass: 'mu-circle-spinner active ' + this.getColorClass(),
      style: {
        'border-color': this.getColor(this.color)
      }
    }, [h('div', { staticClass: 'mu-circle-clipper left' }, [h('div', { staticClass: 'mu-circle', style: { 'border-width': this.borderWidth + 'px' } })]), h('div', { staticClass: 'mu-circle-gap-patch' }, [h('div', { staticClass: 'mu-circle' })]), h('div', { staticClass: 'mu-circle-clipper right' }, [h('div', { staticClass: 'mu-circle', style: { 'border-width': this.borderWidth + 'px' } })])])]);
  }
};

var CircularProgress = {
  name: 'mu-circular-progress',
  mixins: [color],
  props: {
    max: {
      type: Number,
      default: 100
    },
    min: {
      type: Number,
      default: 0
    },
    mode: {
      type: String,
      default: 'indeterminate',
      validator: function validator(val) {
        return ['indeterminate', 'determinate'].indexOf(val) !== -1;
      }
    },
    value: {
      type: Number,
      default: 0
    },
    size: {
      type: Number,
      default: 24
    },
    strokeWidth: {
      type: Number,
      default: 3
    }
  },
  computed: {
    radius: function radius() {
      return (this.size - this.strokeWidth) / 2;
    },
    circularSvgStyle: function circularSvgStyle() {
      return {
        width: this.size,
        height: this.size
      };
    },
    circularPathStyle: function circularPathStyle() {
      var relVal = this.getRelativeValue();
      return {
        stroke: this.getColor(this.color),
        'stroke-dasharray': this.getArcLength(relVal) + ', ' + this.getArcLength(1)
      };
    }
  },
  methods: {
    getArcLength: function getArcLength(fraction) {
      return fraction * Math.PI * (this.size - this.strokeWidth);
    },
    getRelativeValue: function getRelativeValue() {
      var value = this.value,
          min = this.min,
          max = this.max;

      var clampedValue = Math.min(Math.max(min, value), max);
      return clampedValue / (max - min);
    },
    createDeterminateCircular: function createDeterminateCircular(h) {
      if (this.mode !== 'determinate') return;
      return h('svg', {
        staticClass: 'mu-circular-progress-determinate',
        style: this.circularSvgStyle,
        attrs: {
          viewBox: '0 0 ' + this.size + ' ' + this.size
        }
      }, [h('circle', {
        staticClass: 'mu-circular-progress-determinate-path',
        style: this.circularPathStyle,
        attrs: {
          r: this.radius,
          cx: this.size / 2,
          cy: this.size / 2,
          fill: 'none',
          'stroke-miterlimit': '20',
          'stroke-width': this.strokeWidth
        }
      })]);
    }
  },
  render: function render(h) {
    var circular = this.mode === 'indeterminate' ? h(Circular, {
      props: {
        size: this.size,
        color: this.color,
        borderWidth: this.strokeWidth
      }
    }) : undefined;
    return h('div', {
      staticClass: 'mu-circular-progress ' + this.getColorClass(),
      style: {
        width: this.size + 'px',
        height: this.size + 'px'
      }
    }, [circular, this.createDeterminateCircular(h)]);
  }
};

theme.addCreateTheme(ProgressTheme);
var Progress = {
  install: function install(Vue$$1) {
    Vue$$1.component(LinearProgress.name, LinearProgress);
    Vue$$1.component(CircularProgress.name, CircularProgress);
  }
};

var progress = {
  mounted: function mounted() {},

  methods: {
    createProgress: function createProgress(h) {
      var headerHeight = this.$refs.header ? this.$refs.header.offsetHeight + 'px' : '';
      return h(FadeTransition, {}, [this.loading ? h(LinearProgress, {
        staticClass: 'mu-table-progress',
        style: {
          top: headerHeight
        }
      }) : undefined]);
    }
  }
};

/**
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 * @providesModule UserAgent_DEPRECATED
 */

/**
 *  Provides entirely client-side User Agent and OS detection. You should prefer
 *  the non-deprecated UserAgent module when possible, which exposes our
 *  authoritative server-side PHP-based detection to the client.
 *
 *  Usage is straightforward:
 *
 *    if (UserAgent_DEPRECATED.ie()) {
 *      //  IE
 *    }
 *
 *  You can also do version checks:
 *
 *    if (UserAgent_DEPRECATED.ie() >= 7) {
 *      //  IE7 or better
 *    }
 *
 *  The browser functions will return NaN if the browser does not match, so
 *  you can also do version compares the other way:
 *
 *    if (UserAgent_DEPRECATED.ie() < 7) {
 *      //  IE6 or worse
 *    }
 *
 *  Note that the version is a float and may include a minor version number,
 *  so you should always use range operators to perform comparisons, not
 *  strict equality.
 *
 *  **Note:** You should **strongly** prefer capability detection to browser
 *  version detection where it's reasonable:
 *
 *    http://www.quirksmode.org/js/support.html
 *
 *  Further, we have a large number of mature wrapper functions and classes
 *  which abstract away many browser irregularities. Check the documentation,
 *  grep for things, or ask on javascript@lists.facebook.com before writing yet
 *  another copy of "event || window.event".
 *
 */

var _populated = false;

// Browsers
var _ie, _firefox, _opera, _webkit, _chrome;

// Actual IE browser for compatibility mode
var _ie_real_version;

// Platforms
var _osx, _windows, _linux, _android;

// Architectures
var _win64;

// Devices
var _iphone, _ipad, _native;

var _mobile;

function _populate() {
  if (_populated) {
    return;
  }

  _populated = true;

  // To work around buggy JS libraries that can't handle multi-digit
  // version numbers, Opera 10's user agent string claims it's Opera
  // 9, then later includes a Version/X.Y field:
  //
  // Opera/9.80 (foo) Presto/2.2.15 Version/10.10
  var uas = navigator.userAgent;
  var agent = /(?:MSIE.(\d+\.\d+))|(?:(?:Firefox|GranParadiso|Iceweasel).(\d+\.\d+))|(?:Opera(?:.+Version.|.)(\d+\.\d+))|(?:AppleWebKit.(\d+(?:\.\d+)?))|(?:Trident\/\d+\.\d+.*rv:(\d+\.\d+))/.exec(uas);
  var os    = /(Mac OS X)|(Windows)|(Linux)/.exec(uas);

  _iphone = /\b(iPhone|iP[ao]d)/.exec(uas);
  _ipad = /\b(iP[ao]d)/.exec(uas);
  _android = /Android/i.exec(uas);
  _native = /FBAN\/\w+;/i.exec(uas);
  _mobile = /Mobile/i.exec(uas);

  // Note that the IE team blog would have you believe you should be checking
  // for 'Win64; x64'.  But MSDN then reveals that you can actually be coming
  // from either x64 or ia64;  so ultimately, you should just check for Win64
  // as in indicator of whether you're in 64-bit IE.  32-bit IE on 64-bit
  // Windows will send 'WOW64' instead.
  _win64 = !!(/Win64/.exec(uas));

  if (agent) {
    _ie = agent[1] ? parseFloat(agent[1]) : (
          agent[5] ? parseFloat(agent[5]) : NaN);
    // IE compatibility mode
    if (_ie && document && document.documentMode) {
      _ie = document.documentMode;
    }
    // grab the "true" ie version from the trident token if available
    var trident = /(?:Trident\/(\d+.\d+))/.exec(uas);
    _ie_real_version = trident ? parseFloat(trident[1]) + 4 : _ie;

    _firefox = agent[2] ? parseFloat(agent[2]) : NaN;
    _opera   = agent[3] ? parseFloat(agent[3]) : NaN;
    _webkit  = agent[4] ? parseFloat(agent[4]) : NaN;
    if (_webkit) {
      // We do not add the regexp to the above test, because it will always
      // match 'safari' only since 'AppleWebKit' appears before 'Chrome' in
      // the userAgent string.
      agent = /(?:Chrome\/(\d+\.\d+))/.exec(uas);
      _chrome = agent && agent[1] ? parseFloat(agent[1]) : NaN;
    } else {
      _chrome = NaN;
    }
  } else {
    _ie = _firefox = _opera = _chrome = _webkit = NaN;
  }

  if (os) {
    if (os[1]) {
      // Detect OS X version.  If no version number matches, set _osx to true.
      // Version examples:  10, 10_6_1, 10.7
      // Parses version number as a float, taking only first two sets of
      // digits.  If only one set of digits is found, returns just the major
      // version number.
      var ver = /(?:Mac OS X (\d+(?:[._]\d+)?))/.exec(uas);

      _osx = ver ? parseFloat(ver[1].replace('_', '.')) : true;
    } else {
      _osx = false;
    }
    _windows = !!os[2];
    _linux   = !!os[3];
  } else {
    _osx = _windows = _linux = false;
  }
}

var UserAgent_DEPRECATED = {

  /**
   *  Check if the UA is Internet Explorer.
   *
   *
   *  @return float|NaN Version number (if match) or NaN.
   */
  ie: function() {
    return _populate() || _ie;
  },

  /**
   * Check if we're in Internet Explorer compatibility mode.
   *
   * @return bool true if in compatibility mode, false if
   * not compatibility mode or not ie
   */
  ieCompatibilityMode: function() {
    return _populate() || (_ie_real_version > _ie);
  },


  /**
   * Whether the browser is 64-bit IE.  Really, this is kind of weak sauce;  we
   * only need this because Skype can't handle 64-bit IE yet.  We need to remove
   * this when we don't need it -- tracked by #601957.
   */
  ie64: function() {
    return UserAgent_DEPRECATED.ie() && _win64;
  },

  /**
   *  Check if the UA is Firefox.
   *
   *
   *  @return float|NaN Version number (if match) or NaN.
   */
  firefox: function() {
    return _populate() || _firefox;
  },


  /**
   *  Check if the UA is Opera.
   *
   *
   *  @return float|NaN Version number (if match) or NaN.
   */
  opera: function() {
    return _populate() || _opera;
  },


  /**
   *  Check if the UA is WebKit.
   *
   *
   *  @return float|NaN Version number (if match) or NaN.
   */
  webkit: function() {
    return _populate() || _webkit;
  },

  /**
   *  For Push
   *  WILL BE REMOVED VERY SOON. Use UserAgent_DEPRECATED.webkit
   */
  safari: function() {
    return UserAgent_DEPRECATED.webkit();
  },

  /**
   *  Check if the UA is a Chrome browser.
   *
   *
   *  @return float|NaN Version number (if match) or NaN.
   */
  chrome : function() {
    return _populate() || _chrome;
  },


  /**
   *  Check if the user is running Windows.
   *
   *  @return bool `true' if the user's OS is Windows.
   */
  windows: function() {
    return _populate() || _windows;
  },


  /**
   *  Check if the user is running Mac OS X.
   *
   *  @return float|bool   Returns a float if a version number is detected,
   *                       otherwise true/false.
   */
  osx: function() {
    return _populate() || _osx;
  },

  /**
   * Check if the user is running Linux.
   *
   * @return bool `true' if the user's OS is some flavor of Linux.
   */
  linux: function() {
    return _populate() || _linux;
  },

  /**
   * Check if the user is running on an iPhone or iPod platform.
   *
   * @return bool `true' if the user is running some flavor of the
   *    iPhone OS.
   */
  iphone: function() {
    return _populate() || _iphone;
  },

  mobile: function() {
    return _populate() || (_iphone || _ipad || _android || _mobile);
  },

  nativeApp: function() {
    // webviews inside of the native apps
    return _populate() || _native;
  },

  android: function() {
    return _populate() || _android;
  },

  ipad: function() {
    return _populate() || _ipad;
  }
};

var UserAgent_DEPRECATED_1 = UserAgent_DEPRECATED;

/**
 * Copyright (c) 2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ExecutionEnvironment
 */

var canUseDOM = !!(
  typeof window !== 'undefined' &&
  window.document &&
  window.document.createElement
);

/**
 * Simple, lightweight module assisting with the detection and context of
 * Worker. Helps avoid circular dependencies and allows code to reason about
 * whether or not they are in a Worker, even if they never include the main
 * `ReactWorker` dependency.
 */
var ExecutionEnvironment = {

  canUseDOM: canUseDOM,

  canUseWorkers: typeof Worker !== 'undefined',

  canUseEventListeners:
    canUseDOM && !!(window.addEventListener || window.attachEvent),

  canUseViewport: canUseDOM && !!window.screen,

  isInWorker: !canUseDOM // For now, this is true - might change in the future.

};

var ExecutionEnvironment_1 = ExecutionEnvironment;

var useHasFeature;
if (ExecutionEnvironment_1.canUseDOM) {
  useHasFeature =
    document.implementation &&
    document.implementation.hasFeature &&
    // always returns true in newer browsers as per the standard.
    // @see http://dom.spec.whatwg.org/#dom-domimplementation-hasfeature
    document.implementation.hasFeature('', '') !== true;
}

/**
 * Checks if an event is supported in the current execution environment.
 *
 * NOTE: This will not work correctly for non-generic events such as `change`,
 * `reset`, `load`, `error`, and `select`.
 *
 * Borrows from Modernizr.
 *
 * @param {string} eventNameSuffix Event name, e.g. "click".
 * @param {?boolean} capture Check if the capture phase is supported.
 * @return {boolean} True if the event is supported.
 * @internal
 * @license Modernizr 3.0.0pre (Custom Build) | MIT
 */
function isEventSupported(eventNameSuffix, capture) {
  if (!ExecutionEnvironment_1.canUseDOM ||
      capture && !('addEventListener' in document)) {
    return false;
  }

  var eventName = 'on' + eventNameSuffix;
  var isSupported = eventName in document;

  if (!isSupported) {
    var element = document.createElement('div');
    element.setAttribute(eventName, 'return;');
    isSupported = typeof element[eventName] === 'function';
  }

  if (!isSupported && useHasFeature && eventNameSuffix === 'wheel') {
    // This is the only way to test support for the `wheel` event in IE9+.
    isSupported = document.implementation.hasFeature('Events.wheel', '3.0');
  }

  return isSupported;
}

var isEventSupported_1 = isEventSupported;

// Reasonable defaults
var PIXEL_STEP  = 10;
var LINE_HEIGHT = 40;
var PAGE_HEIGHT = 800;

/**
 * Mouse wheel (and 2-finger trackpad) support on the web sucks.  It is
 * complicated, thus this doc is long and (hopefully) detailed enough to answer
 * your questions.
 *
 * If you need to react to the mouse wheel in a predictable way, this code is
 * like your bestest friend. * hugs *
 *
 * As of today, there are 4 DOM event types you can listen to:
 *
 *   'wheel'                -- Chrome(31+), FF(17+), IE(9+)
 *   'mousewheel'           -- Chrome, IE(6+), Opera, Safari
 *   'MozMousePixelScroll'  -- FF(3.5 only!) (2010-2013) -- don't bother!
 *   'DOMMouseScroll'       -- FF(0.9.7+) since 2003
 *
 * So what to do?  The is the best:
 *
 *   normalizeWheel.getEventType();
 *
 * In your event callback, use this code to get sane interpretation of the
 * deltas.  This code will return an object with properties:
 *
 *   spinX   -- normalized spin speed (use for zoom) - x plane
 *   spinY   -- " - y plane
 *   pixelX  -- normalized distance (to pixels) - x plane
 *   pixelY  -- " - y plane
 *
 * Wheel values are provided by the browser assuming you are using the wheel to
 * scroll a web page by a number of lines or pixels (or pages).  Values can vary
 * significantly on different platforms and browsers, forgetting that you can
 * scroll at different speeds.  Some devices (like trackpads) emit more events
 * at smaller increments with fine granularity, and some emit massive jumps with
 * linear speed or acceleration.
 *
 * This code does its best to normalize the deltas for you:
 *
 *   - spin is trying to normalize how far the wheel was spun (or trackpad
 *     dragged).  This is super useful for zoom support where you want to
 *     throw away the chunky scroll steps on the PC and make those equal to
 *     the slow and smooth tiny steps on the Mac. Key data: This code tries to
 *     resolve a single slow step on a wheel to 1.
 *
 *   - pixel is normalizing the desired scroll delta in pixel units.  You'll
 *     get the crazy differences between browsers, but at least it'll be in
 *     pixels!
 *
 *   - positive value indicates scrolling DOWN/RIGHT, negative UP/LEFT.  This
 *     should translate to positive value zooming IN, negative zooming OUT.
 *     This matches the newer 'wheel' event.
 *
 * Why are there spinX, spinY (or pixels)?
 *
 *   - spinX is a 2-finger side drag on the trackpad, and a shift + wheel turn
 *     with a mouse.  It results in side-scrolling in the browser by default.
 *
 *   - spinY is what you expect -- it's the classic axis of a mouse wheel.
 *
 *   - I dropped spinZ/pixelZ.  It is supported by the DOM 3 'wheel' event and
 *     probably is by browsers in conjunction with fancy 3D controllers .. but
 *     you know.
 *
 * Implementation info:
 *
 * Examples of 'wheel' event if you scroll slowly (down) by one step with an
 * average mouse:
 *
 *   OS X + Chrome  (mouse)     -    4   pixel delta  (wheelDelta -120)
 *   OS X + Safari  (mouse)     -  N/A   pixel delta  (wheelDelta  -12)
 *   OS X + Firefox (mouse)     -    0.1 line  delta  (wheelDelta  N/A)
 *   Win8 + Chrome  (mouse)     -  100   pixel delta  (wheelDelta -120)
 *   Win8 + Firefox (mouse)     -    3   line  delta  (wheelDelta -120)
 *
 * On the trackpad:
 *
 *   OS X + Chrome  (trackpad)  -    2   pixel delta  (wheelDelta   -6)
 *   OS X + Firefox (trackpad)  -    1   pixel delta  (wheelDelta  N/A)
 *
 * On other/older browsers.. it's more complicated as there can be multiple and
 * also missing delta values.
 *
 * The 'wheel' event is more standard:
 *
 * http://www.w3.org/TR/DOM-Level-3-Events/#events-wheelevents
 *
 * The basics is that it includes a unit, deltaMode (pixels, lines, pages), and
 * deltaX, deltaY and deltaZ.  Some browsers provide other values to maintain
 * backward compatibility with older events.  Those other values help us
 * better normalize spin speed.  Example of what the browsers provide:
 *
 *                          | event.wheelDelta | event.detail
 *        ------------------+------------------+--------------
 *          Safari v5/OS X  |       -120       |       0
 *          Safari v5/Win7  |       -120       |       0
 *         Chrome v17/OS X  |       -120       |       0
 *         Chrome v17/Win7  |       -120       |       0
 *                IE9/Win7  |       -120       |   undefined
 *         Firefox v4/OS X  |     undefined    |       1
 *         Firefox v4/Win7  |     undefined    |       3
 *
 */
function normalizeWheel(/*object*/ event) /*object*/ {
  var sX = 0, sY = 0,       // spinX, spinY
      pX = 0, pY = 0;       // pixelX, pixelY

  // Legacy
  if ('detail'      in event) { sY = event.detail; }
  if ('wheelDelta'  in event) { sY = -event.wheelDelta / 120; }
  if ('wheelDeltaY' in event) { sY = -event.wheelDeltaY / 120; }
  if ('wheelDeltaX' in event) { sX = -event.wheelDeltaX / 120; }

  // side scrolling on FF with DOMMouseScroll
  if ( 'axis' in event && event.axis === event.HORIZONTAL_AXIS ) {
    sX = sY;
    sY = 0;
  }

  pX = sX * PIXEL_STEP;
  pY = sY * PIXEL_STEP;

  if ('deltaY' in event) { pY = event.deltaY; }
  if ('deltaX' in event) { pX = event.deltaX; }

  if ((pX || pY) && event.deltaMode) {
    if (event.deltaMode == 1) {          // delta in LINE units
      pX *= LINE_HEIGHT;
      pY *= LINE_HEIGHT;
    } else {                             // delta in PAGE units
      pX *= PAGE_HEIGHT;
      pY *= PAGE_HEIGHT;
    }
  }

  // Fall-back if spin cannot be determined
  if (pX && !sX) { sX = (pX < 1) ? -1 : 1; }
  if (pY && !sY) { sY = (pY < 1) ? -1 : 1; }

  return { spinX  : sX,
           spinY  : sY,
           pixelX : pX,
           pixelY : pY };
}


/**
 * The best combination if you prefer spinX + spinY normalization.  It favors
 * the older DOMMouseScroll for Firefox, as FF does not include wheelDelta with
 * 'wheel' event, making spin speed determination impossible.
 */
normalizeWheel.getEventType = function() /*string*/ {
  return (UserAgent_DEPRECATED_1.firefox())
           ? 'DOMMouseScroll'
           : (isEventSupported_1('wheel'))
               ? 'wheel'
               : 'mousewheel';
};

var normalizeWheel_1 = normalizeWheel;

var normalizeWheel$1 = normalizeWheel_1;

var isFirefox = typeof navigator !== 'undefined' && navigator.userAgent.toLowerCase().indexOf('firefox') > -1;

var mousewheel = function mousewheel(element, callback) {
  if (element && element.addEventListener) {
    element.addEventListener(isFirefox ? 'DOMMouseScroll' : 'mousewheel', function (event) {
      var normalized = normalizeWheel$1(event);
      callback && callback.apply(this, [event, normalized]);
    });
  }
};

var mousewheel$1 = {
  bind: function bind(el, binding) {
    mousewheel(el, binding.value);
  }
};

/**
 * A collection of shims that provide minimal functionality of the ES6 collections.
 *
 * These implementations are not meant to be used outside of the ResizeObserver
 * modules as they cover only a limited range of use cases.
 */
/* eslint-disable require-jsdoc, valid-jsdoc */
var MapShim = (function () {
    if (typeof Map !== 'undefined') {
        return Map;
    }

    /**
     * Returns index in provided array that matches the specified key.
     *
     * @param {Array<Array>} arr
     * @param {*} key
     * @returns {number}
     */
    function getIndex(arr, key) {
        var result = -1;

        arr.some(function (entry, index) {
            if (entry[0] === key) {
                result = index;

                return true;
            }

            return false;
        });

        return result;
    }

    return (function () {
        function anonymous() {
            this.__entries__ = [];
        }

        var prototypeAccessors = { size: { configurable: true } };

        /**
         * @returns {boolean}
         */
        prototypeAccessors.size.get = function () {
            return this.__entries__.length;
        };

        /**
         * @param {*} key
         * @returns {*}
         */
        anonymous.prototype.get = function (key) {
            var index = getIndex(this.__entries__, key);
            var entry = this.__entries__[index];

            return entry && entry[1];
        };

        /**
         * @param {*} key
         * @param {*} value
         * @returns {void}
         */
        anonymous.prototype.set = function (key, value) {
            var index = getIndex(this.__entries__, key);

            if (~index) {
                this.__entries__[index][1] = value;
            } else {
                this.__entries__.push([key, value]);
            }
        };

        /**
         * @param {*} key
         * @returns {void}
         */
        anonymous.prototype.delete = function (key) {
            var entries = this.__entries__;
            var index = getIndex(entries, key);

            if (~index) {
                entries.splice(index, 1);
            }
        };

        /**
         * @param {*} key
         * @returns {void}
         */
        anonymous.prototype.has = function (key) {
            return !!~getIndex(this.__entries__, key);
        };

        /**
         * @returns {void}
         */
        anonymous.prototype.clear = function () {
            this.__entries__.splice(0);
        };

        /**
         * @param {Function} callback
         * @param {*} [ctx=null]
         * @returns {void}
         */
        anonymous.prototype.forEach = function (callback, ctx) {
            var this$1 = this;
            if ( ctx === void 0 ) ctx = null;

            for (var i = 0, list = this$1.__entries__; i < list.length; i += 1) {
                var entry = list[i];

                callback.call(ctx, entry[1], entry[0]);
            }
        };

        Object.defineProperties( anonymous.prototype, prototypeAccessors );

        return anonymous;
    }());
})();

/**
 * Detects whether window and document objects are available in current environment.
 */
var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined' && window.document === document;

// Returns global object of a current environment.
var global$1 = (function () {
    if (typeof global !== 'undefined' && global.Math === Math) {
        return global;
    }

    if (typeof self !== 'undefined' && self.Math === Math) {
        return self;
    }

    if (typeof window !== 'undefined' && window.Math === Math) {
        return window;
    }

    // eslint-disable-next-line no-new-func
    return Function('return this')();
})();

/**
 * A shim for the requestAnimationFrame which falls back to the setTimeout if
 * first one is not supported.
 *
 * @returns {number} Requests' identifier.
 */
var requestAnimationFrame$1 = (function () {
    if (typeof requestAnimationFrame === 'function') {
        // It's required to use a bounded function because IE sometimes throws
        // an "Invalid calling object" error if rAF is invoked without the global
        // object on the left hand side.
        return requestAnimationFrame.bind(global$1);
    }

    return function (callback) { return setTimeout(function () { return callback(Date.now()); }, 1000 / 60); };
})();

// Defines minimum timeout before adding a trailing call.
var trailingTimeout = 2;

/**
 * Creates a wrapper function which ensures that provided callback will be
 * invoked only once during the specified delay period.
 *
 * @param {Function} callback - Function to be invoked after the delay period.
 * @param {number} delay - Delay after which to invoke callback.
 * @returns {Function}
 */
var throttle = function (callback, delay) {
    var leadingCall = false,
        trailingCall = false,
        lastCallTime = 0;

    /**
     * Invokes the original callback function and schedules new invocation if
     * the "proxy" was called during current request.
     *
     * @returns {void}
     */
    function resolvePending() {
        if (leadingCall) {
            leadingCall = false;

            callback();
        }

        if (trailingCall) {
            proxy();
        }
    }

    /**
     * Callback invoked after the specified delay. It will further postpone
     * invocation of the original function delegating it to the
     * requestAnimationFrame.
     *
     * @returns {void}
     */
    function timeoutCallback() {
        requestAnimationFrame$1(resolvePending);
    }

    /**
     * Schedules invocation of the original function.
     *
     * @returns {void}
     */
    function proxy() {
        var timeStamp = Date.now();

        if (leadingCall) {
            // Reject immediately following calls.
            if (timeStamp - lastCallTime < trailingTimeout) {
                return;
            }

            // Schedule new call to be in invoked when the pending one is resolved.
            // This is important for "transitions" which never actually start
            // immediately so there is a chance that we might miss one if change
            // happens amids the pending invocation.
            trailingCall = true;
        } else {
            leadingCall = true;
            trailingCall = false;

            setTimeout(timeoutCallback, delay);
        }

        lastCallTime = timeStamp;
    }

    return proxy;
};

// Minimum delay before invoking the update of observers.
var REFRESH_DELAY = 20;

// A list of substrings of CSS properties used to find transition events that
// might affect dimensions of observed elements.
var transitionKeys = ['top', 'right', 'bottom', 'left', 'width', 'height', 'size', 'weight'];

// Check if MutationObserver is available.
var mutationObserverSupported = typeof MutationObserver !== 'undefined';

/**
 * Singleton controller class which handles updates of ResizeObserver instances.
 */
var ResizeObserverController = function() {
    this.connected_ = false;
    this.mutationEventsAdded_ = false;
    this.mutationsObserver_ = null;
    this.observers_ = [];

    this.onTransitionEnd_ = this.onTransitionEnd_.bind(this);
    this.refresh = throttle(this.refresh.bind(this), REFRESH_DELAY);
};

/**
 * Adds observer to observers list.
 *
 * @param {ResizeObserverSPI} observer - Observer to be added.
 * @returns {void}
 */


/**
 * Holds reference to the controller's instance.
 *
 * @private {ResizeObserverController}
 */


/**
 * Keeps reference to the instance of MutationObserver.
 *
 * @private {MutationObserver}
 */

/**
 * Indicates whether DOM listeners have been added.
 *
 * @private {boolean}
 */
ResizeObserverController.prototype.addObserver = function (observer) {
    if (!~this.observers_.indexOf(observer)) {
        this.observers_.push(observer);
    }

    // Add listeners if they haven't been added yet.
    if (!this.connected_) {
        this.connect_();
    }
};

/**
 * Removes observer from observers list.
 *
 * @param {ResizeObserverSPI} observer - Observer to be removed.
 * @returns {void}
 */
ResizeObserverController.prototype.removeObserver = function (observer) {
    var observers = this.observers_;
    var index = observers.indexOf(observer);

    // Remove observer if it's present in registry.
    if (~index) {
        observers.splice(index, 1);
    }

    // Remove listeners if controller has no connected observers.
    if (!observers.length && this.connected_) {
        this.disconnect_();
    }
};

/**
 * Invokes the update of observers. It will continue running updates insofar
 * it detects changes.
 *
 * @returns {void}
 */
ResizeObserverController.prototype.refresh = function () {
    var changesDetected = this.updateObservers_();

    // Continue running updates if changes have been detected as there might
    // be future ones caused by CSS transitions.
    if (changesDetected) {
        this.refresh();
    }
};

/**
 * Updates every observer from observers list and notifies them of queued
 * entries.
 *
 * @private
 * @returns {boolean} Returns "true" if any observer has detected changes in
 *  dimensions of it's elements.
 */
ResizeObserverController.prototype.updateObservers_ = function () {
    // Collect observers that have active observations.
    var activeObservers = this.observers_.filter(function (observer) {
        return observer.gatherActive(), observer.hasActive();
    });

    // Deliver notifications in a separate cycle in order to avoid any
    // collisions between observers, e.g. when multiple instances of
    // ResizeObserver are tracking the same element and the callback of one
    // of them changes content dimensions of the observed target. Sometimes
    // this may result in notifications being blocked for the rest of observers.
    activeObservers.forEach(function (observer) { return observer.broadcastActive(); });

    return activeObservers.length > 0;
};

/**
 * Initializes DOM listeners.
 *
 * @private
 * @returns {void}
 */
ResizeObserverController.prototype.connect_ = function () {
    // Do nothing if running in a non-browser environment or if listeners
    // have been already added.
    if (!isBrowser || this.connected_) {
        return;
    }

    // Subscription to the "Transitionend" event is used as a workaround for
    // delayed transitions. This way it's possible to capture at least the
    // final state of an element.
    document.addEventListener('transitionend', this.onTransitionEnd_);

    window.addEventListener('resize', this.refresh);

    if (mutationObserverSupported) {
        this.mutationsObserver_ = new MutationObserver(this.refresh);

        this.mutationsObserver_.observe(document, {
            attributes: true,
            childList: true,
            characterData: true,
            subtree: true
        });
    } else {
        document.addEventListener('DOMSubtreeModified', this.refresh);

        this.mutationEventsAdded_ = true;
    }

    this.connected_ = true;
};

/**
 * Removes DOM listeners.
 *
 * @private
 * @returns {void}
 */
ResizeObserverController.prototype.disconnect_ = function () {
    // Do nothing if running in a non-browser environment or if listeners
    // have been already removed.
    if (!isBrowser || !this.connected_) {
        return;
    }

    document.removeEventListener('transitionend', this.onTransitionEnd_);
    window.removeEventListener('resize', this.refresh);

    if (this.mutationsObserver_) {
        this.mutationsObserver_.disconnect();
    }

    if (this.mutationEventsAdded_) {
        document.removeEventListener('DOMSubtreeModified', this.refresh);
    }

    this.mutationsObserver_ = null;
    this.mutationEventsAdded_ = false;
    this.connected_ = false;
};

/**
 * "Transitionend" event handler.
 *
 * @private
 * @param {TransitionEvent} event
 * @returns {void}
 */
ResizeObserverController.prototype.onTransitionEnd_ = function (ref) {
        var propertyName = ref.propertyName; if ( propertyName === void 0 ) propertyName = '';

    // Detect whether transition may affect dimensions of an element.
    var isReflowProperty = transitionKeys.some(function (key) {
        return !!~propertyName.indexOf(key);
    });

    if (isReflowProperty) {
        this.refresh();
    }
};

/**
 * Returns instance of the ResizeObserverController.
 *
 * @returns {ResizeObserverController}
 */
ResizeObserverController.getInstance = function () {
    if (!this.instance_) {
        this.instance_ = new ResizeObserverController();
    }

    return this.instance_;
};

ResizeObserverController.instance_ = null;

/**
 * Defines non-writable/enumerable properties of the provided target object.
 *
 * @param {Object} target - Object for which to define properties.
 * @param {Object} props - Properties to be defined.
 * @returns {Object} Target object.
 */
var defineConfigurable = (function (target, props) {
    for (var i = 0, list = Object.keys(props); i < list.length; i += 1) {
        var key = list[i];

        Object.defineProperty(target, key, {
            value: props[key],
            enumerable: false,
            writable: false,
            configurable: true
        });
    }

    return target;
});

/**
 * Returns the global object associated with provided element.
 *
 * @param {Object} target
 * @returns {Object}
 */
var getWindowOf = (function (target) {
    // Assume that the element is an instance of Node, which means that it
    // has the "ownerDocument" property from which we can retrieve a
    // corresponding global object.
    var ownerGlobal = target && target.ownerDocument && target.ownerDocument.defaultView;

    // Return the local global object if it's not possible extract one from
    // provided element.
    return ownerGlobal || global$1;
});

// Placeholder of an empty content rectangle.
var emptyRect = createRectInit(0, 0, 0, 0);

/**
 * Converts provided string to a number.
 *
 * @param {number|string} value
 * @returns {number}
 */
function toFloat(value) {
    return parseFloat(value) || 0;
}

/**
 * Extracts borders size from provided styles.
 *
 * @param {CSSStyleDeclaration} styles
 * @param {...string} positions - Borders positions (top, right, ...)
 * @returns {number}
 */
function getBordersSize(styles) {
    var positions = [], len = arguments.length - 1;
    while ( len-- > 0 ) positions[ len ] = arguments[ len + 1 ];

    return positions.reduce(function (size, position) {
        var value = styles['border-' + position + '-width'];

        return size + toFloat(value);
    }, 0);
}

/**
 * Extracts paddings sizes from provided styles.
 *
 * @param {CSSStyleDeclaration} styles
 * @returns {Object} Paddings box.
 */
function getPaddings(styles) {
    var positions = ['top', 'right', 'bottom', 'left'];
    var paddings = {};

    for (var i = 0, list = positions; i < list.length; i += 1) {
        var position = list[i];

        var value = styles['padding-' + position];

        paddings[position] = toFloat(value);
    }

    return paddings;
}

/**
 * Calculates content rectangle of provided SVG element.
 *
 * @param {SVGGraphicsElement} target - Element content rectangle of which needs
 *      to be calculated.
 * @returns {DOMRectInit}
 */
function getSVGContentRect(target) {
    var bbox = target.getBBox();

    return createRectInit(0, 0, bbox.width, bbox.height);
}

/**
 * Calculates content rectangle of provided HTMLElement.
 *
 * @param {HTMLElement} target - Element for which to calculate the content rectangle.
 * @returns {DOMRectInit}
 */
function getHTMLElementContentRect(target) {
    // Client width & height properties can't be
    // used exclusively as they provide rounded values.
    var clientWidth = target.clientWidth;
    var clientHeight = target.clientHeight;

    // By this condition we can catch all non-replaced inline, hidden and
    // detached elements. Though elements with width & height properties less
    // than 0.5 will be discarded as well.
    //
    // Without it we would need to implement separate methods for each of
    // those cases and it's not possible to perform a precise and performance
    // effective test for hidden elements. E.g. even jQuery's ':visible' filter
    // gives wrong results for elements with width & height less than 0.5.
    if (!clientWidth && !clientHeight) {
        return emptyRect;
    }

    var styles = getWindowOf(target).getComputedStyle(target);
    var paddings = getPaddings(styles);
    var horizPad = paddings.left + paddings.right;
    var vertPad = paddings.top + paddings.bottom;

    // Computed styles of width & height are being used because they are the
    // only dimensions available to JS that contain non-rounded values. It could
    // be possible to utilize the getBoundingClientRect if only it's data wasn't
    // affected by CSS transformations let alone paddings, borders and scroll bars.
    var width = toFloat(styles.width),
        height = toFloat(styles.height);

    // Width & height include paddings and borders when the 'border-box' box
    // model is applied (except for IE).
    if (styles.boxSizing === 'border-box') {
        // Following conditions are required to handle Internet Explorer which
        // doesn't include paddings and borders to computed CSS dimensions.
        //
        // We can say that if CSS dimensions + paddings are equal to the "client"
        // properties then it's either IE, and thus we don't need to subtract
        // anything, or an element merely doesn't have paddings/borders styles.
        if (Math.round(width + horizPad) !== clientWidth) {
            width -= getBordersSize(styles, 'left', 'right') + horizPad;
        }

        if (Math.round(height + vertPad) !== clientHeight) {
            height -= getBordersSize(styles, 'top', 'bottom') + vertPad;
        }
    }

    // Following steps can't be applied to the document's root element as its
    // client[Width/Height] properties represent viewport area of the window.
    // Besides, it's as well not necessary as the <html> itself neither has
    // rendered scroll bars nor it can be clipped.
    if (!isDocumentElement(target)) {
        // In some browsers (only in Firefox, actually) CSS width & height
        // include scroll bars size which can be removed at this step as scroll
        // bars are the only difference between rounded dimensions + paddings
        // and "client" properties, though that is not always true in Chrome.
        var vertScrollbar = Math.round(width + horizPad) - clientWidth;
        var horizScrollbar = Math.round(height + vertPad) - clientHeight;

        // Chrome has a rather weird rounding of "client" properties.
        // E.g. for an element with content width of 314.2px it sometimes gives
        // the client width of 315px and for the width of 314.7px it may give
        // 314px. And it doesn't happen all the time. So just ignore this delta
        // as a non-relevant.
        if (Math.abs(vertScrollbar) !== 1) {
            width -= vertScrollbar;
        }

        if (Math.abs(horizScrollbar) !== 1) {
            height -= horizScrollbar;
        }
    }

    return createRectInit(paddings.left, paddings.top, width, height);
}

/**
 * Checks whether provided element is an instance of the SVGGraphicsElement.
 *
 * @param {Element} target - Element to be checked.
 * @returns {boolean}
 */
var isSVGGraphicsElement = (function () {
    // Some browsers, namely IE and Edge, don't have the SVGGraphicsElement
    // interface.
    if (typeof SVGGraphicsElement !== 'undefined') {
        return function (target) { return target instanceof getWindowOf(target).SVGGraphicsElement; };
    }

    // If it's so, then check that element is at least an instance of the
    // SVGElement and that it has the "getBBox" method.
    // eslint-disable-next-line no-extra-parens
    return function (target) { return target instanceof getWindowOf(target).SVGElement && typeof target.getBBox === 'function'; };
})();

/**
 * Checks whether provided element is a document element (<html>).
 *
 * @param {Element} target - Element to be checked.
 * @returns {boolean}
 */
function isDocumentElement(target) {
    return target === getWindowOf(target).document.documentElement;
}

/**
 * Calculates an appropriate content rectangle for provided html or svg element.
 *
 * @param {Element} target - Element content rectangle of which needs to be calculated.
 * @returns {DOMRectInit}
 */
function getContentRect(target) {
    if (!isBrowser) {
        return emptyRect;
    }

    if (isSVGGraphicsElement(target)) {
        return getSVGContentRect(target);
    }

    return getHTMLElementContentRect(target);
}

/**
 * Creates rectangle with an interface of the DOMRectReadOnly.
 * Spec: https://drafts.fxtf.org/geometry/#domrectreadonly
 *
 * @param {DOMRectInit} rectInit - Object with rectangle's x/y coordinates and dimensions.
 * @returns {DOMRectReadOnly}
 */
function createReadOnlyRect(ref) {
    var x = ref.x;
    var y = ref.y;
    var width = ref.width;
    var height = ref.height;

    // If DOMRectReadOnly is available use it as a prototype for the rectangle.
    var Constr = typeof DOMRectReadOnly !== 'undefined' ? DOMRectReadOnly : Object;
    var rect = Object.create(Constr.prototype);

    // Rectangle's properties are not writable and non-enumerable.
    defineConfigurable(rect, {
        x: x, y: y, width: width, height: height,
        top: y,
        right: x + width,
        bottom: height + y,
        left: x
    });

    return rect;
}

/**
 * Creates DOMRectInit object based on the provided dimensions and the x/y coordinates.
 * Spec: https://drafts.fxtf.org/geometry/#dictdef-domrectinit
 *
 * @param {number} x - X coordinate.
 * @param {number} y - Y coordinate.
 * @param {number} width - Rectangle's width.
 * @param {number} height - Rectangle's height.
 * @returns {DOMRectInit}
 */
function createRectInit(x, y, width, height) {
    return { x: x, y: y, width: width, height: height };
}

/**
 * Class that is responsible for computations of the content rectangle of
 * provided DOM element and for keeping track of it's changes.
 */
var ResizeObservation = function(target) {
    this.broadcastWidth = 0;
    this.broadcastHeight = 0;
    this.contentRect_ = createRectInit(0, 0, 0, 0);

    this.target = target;
};

/**
 * Updates content rectangle and tells whether it's width or height properties
 * have changed since the last broadcast.
 *
 * @returns {boolean}
 */


/**
 * Reference to the last observed content rectangle.
 *
 * @private {DOMRectInit}
 */


/**
 * Broadcasted width of content rectangle.
 *
 * @type {number}
 */
ResizeObservation.prototype.isActive = function () {
    var rect = getContentRect(this.target);

    this.contentRect_ = rect;

    return rect.width !== this.broadcastWidth || rect.height !== this.broadcastHeight;
};

/**
 * Updates 'broadcastWidth' and 'broadcastHeight' properties with a data
 * from the corresponding properties of the last observed content rectangle.
 *
 * @returns {DOMRectInit} Last observed content rectangle.
 */
ResizeObservation.prototype.broadcastRect = function () {
    var rect = this.contentRect_;

    this.broadcastWidth = rect.width;
    this.broadcastHeight = rect.height;

    return rect;
};

var ResizeObserverEntry = function(target, rectInit) {
    var contentRect = createReadOnlyRect(rectInit);

    // According to the specification following properties are not writable
    // and are also not enumerable in the native implementation.
    //
    // Property accessors are not being used as they'd require to define a
    // private WeakMap storage which may cause memory leaks in browsers that
    // don't support this type of collections.
    defineConfigurable(this, { target: target, contentRect: contentRect });
};

var ResizeObserverSPI = function(callback, controller, callbackCtx) {
    this.activeObservations_ = [];
    this.observations_ = new MapShim();

    if (typeof callback !== 'function') {
        throw new TypeError('The callback provided as parameter 1 is not a function.');
    }

    this.callback_ = callback;
    this.controller_ = controller;
    this.callbackCtx_ = callbackCtx;
};

/**
 * Starts observing provided element.
 *
 * @param {Element} target - Element to be observed.
 * @returns {void}
 */


/**
 * Registry of the ResizeObservation instances.
 *
 * @private {Map<Element, ResizeObservation>}
 */


/**
 * Public ResizeObserver instance which will be passed to the callback
 * function and used as a value of it's "this" binding.
 *
 * @private {ResizeObserver}
 */

/**
 * Collection of resize observations that have detected changes in dimensions
 * of elements.
 *
 * @private {Array<ResizeObservation>}
 */
ResizeObserverSPI.prototype.observe = function (target) {
    if (!arguments.length) {
        throw new TypeError('1 argument required, but only 0 present.');
    }

    // Do nothing if current environment doesn't have the Element interface.
    if (typeof Element === 'undefined' || !(Element instanceof Object)) {
        return;
    }

    if (!(target instanceof getWindowOf(target).Element)) {
        throw new TypeError('parameter 1 is not of type "Element".');
    }

    var observations = this.observations_;

    // Do nothing if element is already being observed.
    if (observations.has(target)) {
        return;
    }

    observations.set(target, new ResizeObservation(target));

    this.controller_.addObserver(this);

    // Force the update of observations.
    this.controller_.refresh();
};

/**
 * Stops observing provided element.
 *
 * @param {Element} target - Element to stop observing.
 * @returns {void}
 */
ResizeObserverSPI.prototype.unobserve = function (target) {
    if (!arguments.length) {
        throw new TypeError('1 argument required, but only 0 present.');
    }

    // Do nothing if current environment doesn't have the Element interface.
    if (typeof Element === 'undefined' || !(Element instanceof Object)) {
        return;
    }

    if (!(target instanceof getWindowOf(target).Element)) {
        throw new TypeError('parameter 1 is not of type "Element".');
    }

    var observations = this.observations_;

    // Do nothing if element is not being observed.
    if (!observations.has(target)) {
        return;
    }

    observations.delete(target);

    if (!observations.size) {
        this.controller_.removeObserver(this);
    }
};

/**
 * Stops observing all elements.
 *
 * @returns {void}
 */
ResizeObserverSPI.prototype.disconnect = function () {
    this.clearActive();
    this.observations_.clear();
    this.controller_.removeObserver(this);
};

/**
 * Collects observation instances the associated element of which has changed
 * it's content rectangle.
 *
 * @returns {void}
 */
ResizeObserverSPI.prototype.gatherActive = function () {
        var this$1 = this;

    this.clearActive();

    this.observations_.forEach(function (observation) {
        if (observation.isActive()) {
            this$1.activeObservations_.push(observation);
        }
    });
};

/**
 * Invokes initial callback function with a list of ResizeObserverEntry
 * instances collected from active resize observations.
 *
 * @returns {void}
 */
ResizeObserverSPI.prototype.broadcastActive = function () {
    // Do nothing if observer doesn't have active observations.
    if (!this.hasActive()) {
        return;
    }

    var ctx = this.callbackCtx_;

    // Create ResizeObserverEntry instance for every active observation.
    var entries = this.activeObservations_.map(function (observation) {
        return new ResizeObserverEntry(observation.target, observation.broadcastRect());
    });

    this.callback_.call(ctx, entries, ctx);
    this.clearActive();
};

/**
 * Clears the collection of active observations.
 *
 * @returns {void}
 */
ResizeObserverSPI.prototype.clearActive = function () {
    this.activeObservations_.splice(0);
};

/**
 * Tells whether observer has active observations.
 *
 * @returns {boolean}
 */
ResizeObserverSPI.prototype.hasActive = function () {
    return this.activeObservations_.length > 0;
};

// Registry of internal observers. If WeakMap is not available use current shim
// for the Map collection as it has all required methods and because WeakMap
// can't be fully polyfilled anyway.
var observers = typeof WeakMap !== 'undefined' ? new WeakMap() : new MapShim();

/**
 * ResizeObserver API. Encapsulates the ResizeObserver SPI implementation
 * exposing only those methods and properties that are defined in the spec.
 */
var ResizeObserver = function(callback) {
    if (!(this instanceof ResizeObserver)) {
        throw new TypeError('Cannot call a class as a function.');
    }
    if (!arguments.length) {
        throw new TypeError('1 argument required, but only 0 present.');
    }

    var controller = ResizeObserverController.getInstance();
    var observer = new ResizeObserverSPI(callback, controller, this);

    observers.set(this, observer);
};

// Expose public methods of ResizeObserver.
['observe', 'unobserve', 'disconnect'].forEach(function (method) {
    ResizeObserver.prototype[method] = function () {
        return (ref = observers.get(this))[method].apply(ref, arguments);
        var ref;
    };
});

var index = (function () {
    // Export existing implementation if available.
    if (typeof global$1.ResizeObserver !== 'undefined') {
        return global$1.ResizeObserver;
    }

    return ResizeObserver;
})();

var isServer = typeof window === 'undefined';

var resizeHandler = function resizeHandler(entries) {
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = entries[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var entry = _step.value;

      var listeners = entry.target.__resizeListeners__ || [];
      if (listeners.length) {
        listeners.forEach(function (fn) {
          fn();
        });
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
};

var addResizeListener = function addResizeListener(element, fn) {
  if (isServer) return;
  if (!element.__resizeListeners__) {
    element.__resizeListeners__ = [];
    element.__ro__ = new index(resizeHandler);
    element.__ro__.observe(element);
  }
  element.__resizeListeners__.push(fn);
};

var removeResizeListener = function removeResizeListener(element, fn) {
  if (!element || !element.__resizeListeners__) return;
  element.__resizeListeners__.splice(element.__resizeListeners__.indexOf(fn), 1);
  if (!element.__resizeListeners__.length) {
    element.__ro__.disconnect();
  }
};

var DataTable = {
  name: 'mu-data-table',
  mixins: [header, body, footer, colgroup, progress],
  props: {
    data: Array,
    columns: Array,
    noDataText: {
      type: String,
      default: '暂无数据'
    },
    height: [String, Number],
    maxHeight: [String, Number],
    selectAll: Boolean,
    selectable: Boolean,
    selects: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    sort: {
      type: Object
    },
    checkbox: Boolean,
    stripe: Boolean,
    border: Boolean,
    loading: Boolean,
    hideHeader: Boolean,
    rowClassName: [String, Function],
    rowStyle: [Object, Function],
    rowKey: {
      type: String,
      default: 'id'
    },
    fit: {
      type: Boolean,
      default: true
    },
    hover: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    handleHeaderFooterMousewheel: function handleHeaderFooterMousewheel(event, data) {
      var pixelX = data.pixelX,
          pixelY = data.pixelY;

      if (Math.abs(pixelX) >= Math.abs(pixelY)) {
        event.preventDefault();
        if (!this.$refs.body) return;
        this.$refs.body.scrollLeft += data.pixelX / 5;
      }
    },
    resizeListener: function resizeListener() {
      this.setCols();
    }
  },
  mounted: function mounted() {
    if (this.fit) {
      addResizeListener(this.$el, this.resizeListener);
    }
  },
  beforeDestroy: function beforeDestroy() {
    if (this.resizeListener) removeResizeListener(this.$el, this.resizeListener);
  },
  render: function render(h) {
    return h('div', {
      staticClass: 'mu-table',
      class: {
        'mu-table-border': this.border,
        'mu-table-flex': this.maxHeight || this.height
      },
      style: {
        'max-height': getWidth(this.maxHeight),
        'height': getWidth(this.height)
      }
    }, [!this.hideHeader ? this.createHeader(h) : undefined, this.createProgress(h), this.createBody(h), this.createFooter(h)]);
  },

  directives: {
    mousewheel: mousewheel$1
  }
};

DataTable.install = function (Vue$$1) {
  Vue$$1.component(DataTable.name, DataTable);
};

theme.addCreateTheme(DataTableTheme);

var DividerTheme = (function (theme) {
  return "\n  .mu-divider {\n    background-color: " + theme.divider + ";\n  }\n  ";
});

var Divider = {
  name: 'mu-divider',
  functional: true,
  props: {
    inset: Boolean,
    shallowInset: Boolean
  },
  render: function render(h, _ref) {
    var data = _ref.data,
        props = _ref.props;

    data.staticClass = (data.staticClass || '') + ' mu-divider ' + (props.inset ? 'inset' : '') + ' ' + (props.shallowInset ? 'shallow-inset' : '');

    return h('hr', data);
  }
};

Divider.install = function (Vue$$1) {
  Vue$$1.component(Divider.name, Divider);
};

theme.addCreateTheme(DividerTheme);

var DrawerTheme = (function (theme) {
  return "\n  .mu-drawer {\n    background-color: " + theme.background.paper + ";\n  }\n  ";
});

var PaperTheme = (function (theme) {
  return "\n  .mu-paper {\n    color: " + theme.text.primary + ";\n    background-color: " + theme.background.paper + ";\n  }\n  ";
});

var Paper = {
  name: 'mu-paper',
  functional: true,
  props: {
    circle: Boolean,
    rounded: {
      type: Boolean,
      default: true
    },
    zDepth: {
      type: Number,
      default: 0,
      validator: function validator(val) {
        return val >= 0 && val < 25;
      }
    }
  },
  render: function render(h, _ref) {
    var data = _ref.data,
        props = _ref.props,
        children = _ref.children;

    var classObj = defineProperty({
      'mu-paper-circle': props.circle,
      'mu-paper-round': props.rounded
    }, 'mu-elevation-' + props.zDepth, !!props.zDepth);
    data.staticClass = 'mu-paper ' + (data.staticClass || '') + ' ' + convertClass(classObj).join(' ');
    return h('div', data, children);
  }
};

Paper.install = function (Vue$$1) {
  Vue$$1.component(Paper.name, Paper);
};

theme.addCreateTheme(PaperTheme);

var transitionEvents = ['msTransitionEnd', 'mozTransitionEnd', 'oTransitionEnd', 'webkitTransitionEnd', 'transitionend'];
var Drawer = {
  name: 'mu-drawer',
  props: {
    right: Boolean,
    open: Boolean,
    docked: {
      type: Boolean,
      default: true
    },
    width: [Number, String],
    zDepth: {
      type: Number,
      default: 16
    }
  },
  data: function data() {
    return {
      overlayZIndex: getZIndex(),
      zIndex: getZIndex()
    };
  },

  computed: {
    drawerStyle: function drawerStyle() {
      return {
        width: getWidth(this.width),
        'z-index': this.docked ? '' : this.zIndex
      };
    },
    overlay: function overlay() {
      return !this.docked;
    }
  },
  mounted: function mounted() {
    if (this.open && !this.docked) PopupManager.open(this);
    this.bindTransition();
  },

  methods: {
    overlayClick: function overlayClick() {
      this.close('overlay');
    },
    escPress: function escPress(e) {
      if (this.docked) return;
      this.close('esc');
    },
    close: function close(reason) {
      this.$emit('update:open', false);
      this.$emit('close', reason);
    },
    bindTransition: function bindTransition() {
      var _this = this;

      this.handleTransition = function (e) {
        if (e.propertyName !== 'transform') return;
        _this.$emit(_this.open ? 'show' : 'hide');
      };
      transitionEvents.forEach(function (eventName) {
        _this.$el.addEventListener(eventName, _this.handleTransition);
      });
    },
    unBindTransition: function unBindTransition() {
      var _this2 = this;

      if (!this.handleTransition) return;
      transitionEvents.forEach(function (eventName) {
        _this2.$el.removeEventListener(eventName, _this2.handleTransition);
      });
    },
    resetZIndex: function resetZIndex() {
      this.overlayZIndex = getZIndex();
      this.zIndex = getZIndex();
    }
  },
  beforeDestroy: function beforeDestroy() {
    PopupManager.close(this);
    this.unBindTransition();
  },

  watch: {
    open: function open(val) {
      if (val && !this.docked) {
        PopupManager.open(this);
      } else {
        PopupManager.close(this);
      }
    },
    docked: function docked(val, oldVal) {
      if (val && !oldVal) {
        PopupManager.close(this);
      }
    }
  },
  render: function render(h) {
    return h(Paper, {
      class: {
        'mu-drawer': true,
        'is-open': this.open,
        'is-right': this.right
      },
      style: this.drawerStyle,
      props: {
        zDepth: this.zDepth
      }
    }, this.$slots.default);
  }
};

Drawer.install = function (Vue$$1) {
  Vue$$1.component(Drawer.name, Drawer);
};

theme.addCreateTheme(DrawerTheme);

var ExpansionPanelTheme = (function (theme) {
  return "\n  .mu-expansion-panel {\n    color: " + theme.text.primary + ";\n    border-top-color: " + theme.divider + ";\n  }\n  .mu-expansion-toggle-btn {\n    color: " + theme.text.secondary + ";\n  }\n  .mu-expansion-panel-actions {\n    border-top-color: " + theme.divider + ";\n  }\n  ";
});

var ExpansionPanel = {
  name: 'mu-expansion-panel',
  props: {
    expand: Boolean,
    zDepth: {
      type: Number,
      default: 2
    }
  },
  data: function data() {
    return {
      show: this.expand
    };
  },

  methods: {
    createToggleIcon: function createToggleIcon(h) {
      return h('svg', {
        staticClass: '',
        attrs: {
          viewBox: '0 0 24 24'
        }
      }, [h('g', {}, [h('path', {
        attrs: {
          d: 'M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z'
        }
      })])]);
    },
    createHeader: function createHeader(h) {
      var _this = this;

      return h('div', {
        staticClass: 'mu-expansion-panel-header',
        on: {
          click: function click() {
            _this.show = !_this.show;
            _this.$emit('update:expand', _this.show);
            _this.$emit('change', _this.show);
          }
        }
      }, [this.$slots.header, h(Button, {
        staticClass: 'mu-expansion-toggle-btn',
        props: {
          icon: true
        },
        attrs: {
          tabindex: -1
        }
      }, [this.createToggleIcon(h)])]);
    },
    createContainer: function createContainer(h) {
      return h(ExpandTransition, {}, [h('div', {
        staticClass: 'mu-expansion-panel-container',
        directives: [{
          name: 'show',
          value: this.show
        }]
      }, [this.createContent(h), this.createActions(h)])]);
    },
    createContent: function createContent(h) {
      return h('div', {
        staticClass: 'mu-expansion-panel-content'
      }, this.$slots.default);
    },
    createActions: function createActions(h) {
      return this.$slots.action && this.$slots.action.length > 0 ? h('div', {
        staticClass: 'mu-expansion-panel-actions'
      }, this.$slots.action) : undefined;
    }
  },
  render: function render(h) {
    return h(Paper, {
      staticClass: 'mu-expansion-panel',
      class: {
        'mu-expansion-panel__expand': this.show
      },
      props: {
        zDepth: this.zDepth,
        rounded: false
      }
    }, [this.createHeader(h), this.createContainer(h)]);
  },

  watch: {
    expand: function expand(val) {
      this.show = val;
    }
  }
};

ExpansionPanel.install = function (Vue$$1) {
  Vue$$1.component(ExpansionPanel.name, ExpansionPanel);
};

theme.addCreateTheme(ExpansionPanelTheme);

var FormTheme = (function (theme) {
  return "\n  .mu-form-item {\n    color: " + theme.text.secondary + ";\n  }\n\n  .mu-form-item__focus {\n    color: " + theme.primary + ";\n  }\n\n  .mu-form-item__error {\n    color: " + theme.error + ";\n  }\n  .mu-form-item-help {\n    color: " + theme.text.secondary + ";\n  }\n  .mu-form-item__error .mu-form-item-help {\n    color: " + theme.error + ";\n  }\n  ";
});

var Form = {
  name: 'mu-form',
  provide: function provide() {
    return {
      muForm: this
    };
  },

  props: {
    model: {
      type: Object,
      required: true
    },
    inline: Boolean,
    labelWidth: [String, Number],
    labelPosition: {
      type: String,
      default: 'top',
      validator: function validator(val) {
        return ['left', 'right', 'top'].indexOf(val) !== -1;
      }
    },
    autoValidate: {
      type: Boolean,
      default: true
    }
  },
  data: function data() {
    return {
      items: []
    };
  },

  methods: {
    getValue: function getValue(prop) {
      return getObjAttr(this.model, prop);
    },
    addItem: function addItem(item) {
      this.items.push(item);
    },
    removeItem: function removeItem(item) {
      var index = this.items.indexOf(item);
      if (index === -1) return;
      this.items.splice(index, 1);
    },
    validate: function validate() {
      var valid = true;
      var promises = [];
      for (var i = 0; i < this.items.length; i++) {
        var item = this.items[i];
        var result = item.validate();
        if (isPromise(result)) {
          promises.push(result);
          continue;
        }
        if (!result) {
          valid = false;
        }
      }
      if (promises.length > 0 && typeof Promise !== 'undefined') {
        return Promise.all([valid ? Promise.resolve(valid) : Promise.reject(valid)].concat(promises)).then(function () {
          return true;
        }, function () {
          return false;
        });
      }
      return typeof Promise !== 'undefined' ? Promise.resolve(valid) : valid;
    },
    clear: function clear() {
      this.items.forEach(function (item) {
        return item.errorMessage = '';
      });
    }
  },
  render: function render(h) {
    return h('form', {
      staticClass: 'mu-form',
      class: {
        'mu-form__inline': this.inline
      },
      on: this.$listeners
    }, this.$slots.default);
  }
};

var FormItem = {
  name: 'mu-form-item',
  inject: ['muForm'],
  provide: function provide() {
    return {
      muFormItem: this
    };
  },

  props: {
    label: String,
    labelFloat: Boolean,
    icon: String,
    prop: String,
    labelWidth: Form.props.labelWidth,
    rules: Array,
    helpText: String,
    errorText: String,
    labelPosition: String
  },
  data: function data() {
    return {
      focus: false,
      errorMessage: this.errorText
    };
  },
  mounted: function mounted() {
    this.setHelpLeft();
    this.muForm.addItem(this);
  },
  updated: function updated() {
    var _this = this;

    setTimeout(function () {
      return _this.setHelpLeft();
    }, 0);
  },
  beforeDestroy: function beforeDestroy() {
    this.muForm.removeItem(this);
  },

  methods: {
    validate: function validate() {
      var _this2 = this;

      if (!this.rules || this.rules.length === 0) return true;
      var promises = [];
      var promiseMessages = [];
      for (var i = 0; i < this.rules.length; i++) {
        var rule = this.rules[i];
        var result = rule.validate(this.muForm.getValue(this.prop), this.muForm.model);
        if (isPromise(result)) {
          promises.push(result);
          promiseMessages.push(rule.message);
          continue;
        }
        if (!this.validateResult(result, rule.message)) return false;
      }

      // promise 处理
      if (promises.length > 0 && typeof Promise !== 'undefined') {
        return Promise.all(promises).then(function (results) {
          for (var _i = 0; _i < results.length; _i++) {
            var valid = _this2.validateResult(results[_i], promiseMessages[_i]);
            if (!valid) return Promise.reject(false);
          }
          _this2.errorMessage = '';
          return true;
        });
      }

      this.errorMessage = '';
      return true;
    },
    validateResult: function validateResult(result, message) {
      switch (true) {
        case isObject(result) && !result.valid:
          this.errorMessage = result.message || message;
          return false;
        case !result:
          this.errorMessage = message;
          return false;
      }
      return true;
    },
    onFocus: function onFocus() {
      this.focus = true;
    },
    onBlur: function onBlur() {
      this.focus = false;
      if (this.muForm.autoValidate) this.validate();
    },
    createIcon: function createIcon(h) {
      if (!this.icon) return;
      return h(Icon, {
        staticClass: 'mu-form-item-icon',
        props: {
          value: this.icon
        }
      });
    },
    createContent: function createContent(h) {
      return h('div', {
        staticClass: 'mu-form-item-content',
        ref: 'content'
      }, this.$slots.default);
    },
    createLabel: function createLabel(h) {
      var labelWidth = getWidth(this.labelWidth || this.muForm.labelWidth);
      var value = this.muForm.model && this.prop && this.muForm.model[this.prop];
      return h('div', {
        staticClass: 'mu-form-item-label',
        class: {
          'is-float': this.labelFloat && !this.focus && !value && value !== 0
        },
        style: {
          width: labelWidth
        }
      }, this.$slots.label || this.label);
    },
    createHelpText: function createHelpText(h) {
      if (!this.helpText && !this.errorMessage) return;
      return h('div', {
        staticClass: 'mu-form-item-help',
        ref: 'help'
      }, this.errorMessage || this.helpText);
    },
    setHelpLeft: function setHelpLeft() {
      if (!this.$refs.help || !this.$refs.content) return;
      this.$refs.help.style.left = this.$refs.content.offsetLeft + 'px';
    }
  },
  render: function render(h) {
    var labelPosition = this.labelPosition || this.muForm.labelPosition;
    return h('div', {
      staticClass: 'mu-form-item',
      class: {
        'mu-form-item__float-label': this.labelFloat,
        'mu-form-item__label-left': labelPosition === 'left',
        'mu-form-item__label-right': labelPosition === 'right',
        'mu-form-item__has-icon': !!this.icon && labelPosition === 'top',
        'mu-form-item__has-label': !!this.label || this.$slots.label && this.$slots.label.length > 0,
        'mu-form-item__focus': this.focus,
        'mu-form-item__error': !!this.errorMessage
      }
    }, [this.createLabel(h), labelPosition === 'top' ? this.createIcon(h) : undefined, h(SlideTopTransition, {}, [this.createHelpText(h)]), this.createContent(h)]);
  },

  watch: {
    errorText: function errorText(val) {
      this.errorMessage = val;
    },
    rules: function rules() {
      if (this.errorMessage) this.validate();
    }
  }
};

Form.install = function (Vue$$1) {
  Vue$$1.component(Form.name, Form);
  Vue$$1.component(FormItem.name, FormItem);
};

theme.addCreateTheme(FormTheme);

var Container$1 = {
  name: 'mu-container',
  functional: true,
  props: {
    fluid: Boolean
  },
  render: function render(h, _ref) {
    var data = _ref.data,
        props = _ref.props,
        children = _ref.children;

    data.staticClass = (data.staticClass || '') + ' ' + (props.fluid ? 'container-fluid' : 'container');
    return h('div', data, children);
  }
};

function createEnumProps(type, def, enums) {
  return {
    type: type,
    default: def,
    validator: function validator(val) {
      return enums.indexOf(val) !== -1;
    }
  };
}

var props$1 = {
  direction: createEnumProps(String, 'row', ['row', 'column', 'row-reverse', 'column-reverse']),
  wrap: createEnumProps(String, '', ['', 'wrap', 'nowrap', 'wrap-reverse']),
  fill: Boolean,
  justifyContent: createEnumProps(String, 'start', ['start', 'center', 'end', 'between', 'around']),
  alignItems: createEnumProps(String, 'start', ['start', 'center', 'end', 'baseline', 'stretch']),
  alignContent: createEnumProps(String, '', ['', 'start', 'center', 'end', 'between', 'around', 'stretch']),
  alignSelf: createEnumProps(String, '', ['', 'auto', 'start', 'center', 'end', 'baseline', 'stretch'])
};

function generatePropsClass(props) {
  var classNames = [];
  if (props.direction) classNames.push('flex-' + props.direction);
  if (props.wrap) classNames.push('flex-' + props.wrap);
  if (props.fill) classNames.push('flex-fill');
  if (props.justifyContent) classNames.push('justify-content-' + props.justifyContent);
  if (props.alignItems) classNames.push('align-items-' + props.alignItems);
  if (props.alignContent) classNames.push('align-content-' + props.alignContent);
  if (props.alignSelf) classNames.push('align-self-' + props.alignSelf);
  return classNames.join(' ');
}

var Row = {
  name: 'mu-row',
  functional: true,
  props: _extends({}, props$1, {
    tag: String,
    gutter: Boolean
  }),
  render: function render(h, _ref) {
    var data = _ref.data,
        props = _ref.props,
        children = _ref.children;

    var gutter = !props.gutter ? 'no-gutters' : '';
    var flex = generatePropsClass(props);

    data.staticClass = ['row', gutter, flex, data.staticClass || ''].join(' ');
    return h(props.tag || 'div', data, children);
  }
};

function createColClass(props) {
  var classNames = [];
  if (props.span) classNames.push('col-' + props.span);
  if (props.sm) classNames.push('col-sm-' + props.sm);
  if (props.md) classNames.push('col-md-' + props.md);
  if (props.lg) classNames.push('col-lg-' + props.lg);
  if (props.xl) classNames.push('col-xl-' + props.xl);
  if (props.order) classNames.push('order-' + props.order);
  if (props.offset) classNames.push('offset-' + props.offset);
  return classNames.join(' ');
}

var Col = {
  name: 'mu-col',
  functional: true,
  props: {
    tag: String,
    alignSelf: props$1.alignSelf,
    fill: Boolean,
    span: [String, Number], // auto 1-12
    sm: [String, Number], // auto 1-12
    md: [String, Number], // auto 1-12
    lg: [String, Number], // auto 1-12
    xl: [String, Number], // auto 1-12
    order: [String, Number], // first last 0-12
    offset: [String, Number] // 1-11
  },
  render: function render(h, _ref) {
    var data = _ref.data,
        props = _ref.props,
        children = _ref.children;

    var flex = generatePropsClass(props);
    var col = createColClass(props);
    data.staticClass = ['col', col, flex, data.staticClass || ''].join(' ');
    return h(props.tag || 'div', data, children);
  }
};

var Flex = {
  name: 'mu-flex',
  functional: true,
  props: _extends({
    tag: String,
    inline: Boolean
  }, props$1),
  render: function render(h, _ref) {
    var data = _ref.data,
        props = _ref.props,
        children = _ref.children;

    var flexClass = generatePropsClass(props);
    data.staticClass = (props.inline ? 'd-inline-flex' : 'd-flex') + ' ' + flexClass + ' ' + (data.staticClass || '');
    return h(props.tag || 'div', data, children);
  }
};

var Grid = {
  install: function install(Vue$$1) {
    Vue$$1.component(Container$1.name, Container$1);
    Vue$$1.component(Row.name, Row);
    Vue$$1.component(Col.name, Col);
    Vue$$1.component(Flex.name, Flex);
  }
};

var GridListTheme = (function (theme) {
  return "";
});

var GridList = {
  name: 'mu-grid-list',
  provide: function provide() {
    return {
      getGridListCellHeight: this.getGridListCellHeight,
      getGridListCols: this.getGridListCols,
      getGridListPadding: this.getGridListPadding
    };
  },

  props: {
    cellHeight: {
      type: Number,
      default: 180
    },
    cols: {
      type: Number,
      default: 2
    },
    padding: {
      type: Number,
      default: 4
    }
  },
  methods: {
    getGridListCellHeight: function getGridListCellHeight() {
      return this.cellHeight;
    },
    getGridListCols: function getGridListCols() {
      return this.cols;
    },
    getGridListPadding: function getGridListPadding() {
      return this.padding;
    }
  },
  render: function render(h) {
    return h('div', {
      staticClass: 'mu-grid-list',
      style: {
        margin: -this.padding / this.cols + 'px'
      },
      on: this.$listeners
    }, this.$slots.default);
  }
};

var GridTile = {
  name: 'mu-grid-tile',
  inject: ['getGridListCellHeight', 'getGridListCols', 'getGridListPadding'],
  props: {
    actionPosition: {
      type: String,
      default: 'right',
      validator: function validator(val) {
        return ['left', 'right'].indexOf(val) !== -1;
      }
    },
    cols: {
      type: Number,
      default: 1
    },
    rows: {
      type: Number,
      default: 1
    },
    title: {
      type: String
    },
    subTitle: {
      type: String
    },
    titlePosition: {
      type: String,
      default: 'bottom',
      validator: function validator(val) {
        return ['top', 'bottom'].indexOf(val) !== -1;
      }
    }
  },
  computed: {
    tileClass: function tileClass() {
      return {
        'is-top': this.titlePosition === 'top',
        'action-left': this.actionPosition === 'left',
        'multiline': this.$slots.title && this.$slots.subTitle && this.$slots.title.length > 0 && this.$slots.subTitle.length > 0
      };
    },
    style: function style() {
      return {
        width: this.cols / this.getGridListCols() * 100 + '%',
        padding: this.getGridListPadding() / 2 + 'px',
        height: this.getGridListCellHeight() * this.rows + 'px'
      };
    }
  },
  render: function render(h) {
    var title = h('div', {
      staticClass: 'mu-grid-tile-title'
    }, this.$slots.title && this.$slots.title.length > 0 ? this.$slots.title : this.title);

    var subTitle = h('div', {
      staticClass: 'mu-grid-tile-subtitle'
    }, this.$slots.subTitle && this.$slots.subTitle.length > 0 ? this.$slots.subTitle : this.subTitle);

    return h('div', {
      staticClass: 'mu-grid-tile-wrapper',
      style: this.style,
      on: this.$listeners
    }, [h('div', {
      staticClass: 'mu-grid-tile',
      class: this.tileClass
    }, [this.$slots.default, h('div', { staticClass: 'mu-grid-tile-titlebar' }, [h('div', { staticClass: 'mu-grid-tile-title-container' }, [title, subTitle]), h('div', { staticClass: 'mu-grid-tile-action' }, this.$slots.action)])])]);
  }
};

GridList.install = function (Vue$$1) {
  Vue$$1.component(GridList.name, GridList);
  Vue$$1.component(GridTile.name, GridTile);
};

theme.addCreateTheme(GridListTheme);

function getElevationClass(depth) {
  return 'mu-elevation-' + depth;
}
var elevation = {
  name: 'elevation',
  inserted: function inserted(el, _ref, vnode) {
    var value = _ref.value;

    addClass(el, getElevationClass(value));
  },
  update: function update(el, _ref2) {
    var value = _ref2.value,
        oldValue = _ref2.oldValue;

    if (value === oldValue && hasClass(el, getElevationClass(oldValue))) return;
    removeClass(el, getElevationClass(oldValue));
    addClass(el, getElevationClass(value));
  },
  unbind: function unbind(el, _ref3) {
    var value = _ref3.value;

    removeClass(el, getElevationClass(value));
  }
};

var Helpers = {
  install: function install(Vue$$1) {
    Vue$$1.component('mu-ripple', TouchRipple);
    [ExpandTransition, FadeTransition, SlideTopTransition, SlideBottomTransition, SlideLeftTransition, SlideRightTransition, ScaleTransition].forEach(function (transition) {
      return Vue$$1.component(transition.name, transition);
    });
    Vue$$1.directive(clickOutSide.name, clickOutSide);
    Vue$$1.directive(resize.name, resize);
    Vue$$1.directive(scroll.name, scroll);
    Vue$$1.directive(elevation.name, elevation);
  }
};

var LoadMoreTheme = (function (theme) {
  return "\n  .mu-refresh-control{\n    color: " + theme.primary + ";\n  }\n  ";
});

var InfiniteScroll = {
  name: 'mu-infinite-scroll',
  directives: {
    scroll: scroll
  },
  props: {
    loading: {
      type: Boolean,
      default: false
    },
    loadingText: {
      type: String,
      default: '正在加载...'
    }
  },
  data: function data() {
    return {
      target: null
    };
  },
  mounted: function mounted() {
    this.target = this.$el;
  },

  methods: {
    onScroll: function onScroll(scroller) {
      if (this.loading) return;
      var isWindow = scroller === window;
      var scrollTop = getScrollTop(scroller);
      var scrollHeight = isWindow ? document.documentElement.scrollHeight || document.body.scrollHeight : scroller.scrollHeight;
      var h = scrollHeight - scrollTop - 5;
      var sh = isWindow ? window.innerHeight : scroller.offsetHeight;
      if (h <= sh) {
        this.$emit('load');
      }
    }
  },
  render: function render(h) {
    return h('div', {
      staticClass: 'mu-infinite-scroll',
      directives: [{
        name: 'scroll',
        value: {
          callback: this.onScroll,
          target: this.target
        }
      }]
    }, [h(Circular, {
      props: {
        size: 24
      },
      directives: [{
        name: 'show',
        value: this.loading
      }]
    }), h('span', {
      staticClass: 'mu-infinite-scroll-text',
      directives: [{
        name: 'show',
        value: this.loading
      }]
    }, this.loadingText)]);
  }
};

var LENGTH = 130; // 下拉最大长度
var INITY = -68; // 初始化Y轴位置

var RefreshControl = {
  name: 'mu-refresh-control',
  props: {
    refreshing: Boolean,
    trigger: {}
  },
  data: function data() {
    return {
      y: 0,
      draging: false,
      state: 'ready'
    };
  },

  computed: {
    refreshStyle: function refreshStyle() {
      var style = {};
      if (!this.refreshing && this.draging) {
        var translate3d = 'translate3d(0, ' + (this.y + INITY) + 'px, 0) ';
        style['-webkit-transform'] = style['transform'] = translate3d;
      }
      return style;
    },
    circularStyle: function circularStyle() {
      var style = {};
      if (!this.refreshing && this.draging) {
        var percentage = this.y / LENGTH;
        var rotate = 'rotate(' + 360 * percentage + 'deg)';
        var opacity = this.y / Math.abs(INITY);
        style['-webkit-transform'] = style['transform'] = rotate;
        style['opacity'] = opacity;
      }
      return style;
    },
    refreshClass: function refreshClass() {
      var classNames = [];
      switch (this.state) {
        case 'ready':
          classNames.push('mu-refresh-control-noshow');
          break;
        case 'dragStart':
          classNames.push('mu-refresh-control-hide');
          break;
        case 'dragAnimate':
          classNames.push('mu-refresh-control-animate');
          classNames.push('mu-refresh-control-hide');
          break;
        case 'refreshAnimate':
          classNames.push('mu-refresh-control-animate');
          classNames.push('mu-refresh-control-noshow');
          break;
      }
      if (this.refreshing) classNames.push('mu-refresh-control-refreshing');
      return classNames;
    }
  },
  mounted: function mounted() {
    this.bindDrag();
  },
  beforeDestory: function beforeDestory() {
    this.unbindDrag();
  },

  methods: {
    clearState: function clearState() {
      this.state = 'ready';
      this.draging = false;
      this.y = 0;
    },
    getScrollTop: function getScrollTop$$1() {
      var scroller = getScrollEventTarget(this.$el);
      if (scroller === window) {
        return Math.max(window.pageYOffset || 0, document.documentElement.scrollTop);
      } else {
        return scroller.scrollTop;
      }
    },
    bindDrag: function bindDrag() {
      var _this = this;

      if (!this.trigger) return;
      var drager = this.drager = new Drag(this.trigger);
      this.state = 'ready';
      drager.start(function () {
        if (_this.refreshing) return;
        _this.state = 'dragStart';
        var scrollTop = _this.getScrollTop();
        if (scrollTop === 0) _this.draging = true;
      }).drag(function (pos, event) {
        var scrollTop = _this.getScrollTop();
        if (pos.y < 5 || _this.refreshing || scrollTop !== 0) return; // 消除误差
        if (scrollTop === 0 && !_this.draging) {
          _this.draging = true;
          drager.reset(event);
        }
        _this.y = pos.y / 2;
        if (_this.y < 0) _this.y = 1;
        if (_this.y > LENGTH) _this.y = LENGTH;
      }).end(function (pos, event) {
        if (!pos.y || pos.y < 5) {
          _this.clearState();
          return; // 消除误差
        }
        var canRefresh = _this.y + INITY > 0 && _this.draging;
        _this.state = 'dragAnimate';
        if (canRefresh) {
          _this.draging = false;
          _this.$emit('refresh');
        } else {
          _this.y = 0;
          transitionEnd(_this.$el, _this.clearState.bind(_this));
        }
      });

      // fix ios
      this.handlePrevent = function (event) {
        if (_this.draging && _this.y > 0) event.preventDefault();
      };
      this.handleTouchEnd = function () {
        return true;
      };
      this.trigger.addEventListener('touchmove', this.handlePrevent, { passive: false });
      this.trigger.addEventListener('touchend', this.handleTouchEnd, { passive: false });
    },
    unbindDrag: function unbindDrag() {
      if (!this.drager) return;
      if (this.handlePrevent) {
        this.trigger.removeEventListener('touchmove', this.handlePrevent);
        this.trigger.removeEventListener('touchend', this.handleTouchEnd);
      }
      this.drager.destory();
      this.drager = null;
    },
    createRefreshIcon: function createRefreshIcon(h) {
      return this.refreshing ? h(Circular, {
        props: {
          size: 24,
          borderWidth: 2
        }
      }) : this.draging ? h('svg', {
        staticClass: 'mu-refresh-svg-icon',
        style: this.circularStyle,
        attrs: {
          viewBox: '0 0 24 24'
        }
      }, [h('path', {
        attrs: {
          d: 'M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z'
        }
      })]) : undefined;
    }
  },
  render: function render(h) {
    return h('div', {
      staticClass: 'mu-refresh-control',
      style: this.refreshStyle,
      class: this.refreshClass
    }, [this.createRefreshIcon(h)]);
  },

  watch: {
    refreshing: function refreshing(val) {
      if (!val) {
        transitionEnd(this.$el, this.clearState.bind(this));
      } else {
        this.state = 'refreshAnimate';
      }
    },
    trigger: function trigger(_trigger, oldTrigger) {
      if (_trigger === oldTrigger) return;
      this.unbindDrag();
      this.bindDrag();
    }
  }
};

var LoadMore = {
  name: 'mu-load-more',
  props: _extends({
    refreshing: Boolean
  }, InfiniteScroll.props, {
    loadedAll: Boolean
  }),
  data: function data() {
    return {
      trigger: null
    };
  },
  mounted: function mounted() {
    this.trigger = this.$el;
  },
  render: function render(h) {
    var _this = this;

    return h('div', {
      staticClass: 'mu-load-more'
    }, [isNotNull(this.$listeners.refresh) ? h(RefreshControl, {
      props: {
        refreshing: this.refreshing,
        trigger: this.trigger
      },
      on: {
        refresh: function refresh() {
          return _this.$emit('refresh');
        }
      }
    }) : undefined, this.$slots.default, isNotNull(this.$listeners.load) && !this.loadedAll ? h(InfiniteScroll, {
      props: {
        loading: this.loading,
        loadingText: this.loadingText
      },
      on: {
        load: function load() {
          return _this.$emit('load');
        }
      }
    }) : undefined]);
  }
};

LoadMore.install = function (Vue$$1) {
  Vue$$1.component(LoadMore.name, LoadMore);
  Vue$$1.component(RefreshControl.name, RefreshControl);
  Vue$$1.component(InfiniteScroll.name, InfiniteScroll);
};

theme.addCreateTheme(LoadMoreTheme);

var Menu = {
  name: 'mu-menu',
  props: {
    popoverClass: [String, Object, Array],
    cover: Popover.props.cover,
    placement: Popover.props.placement,
    space: Popover.props.space,
    open: Boolean,
    openOnHover: Boolean
  },
  data: function data() {
    return {
      active: this.open,
      trigger: null
    };
  },
  mounted: function mounted() {
    this.trigger = this.$el;
  },

  methods: {
    handleMouseEnter: function handleMouseEnter() {
      var _this = this;

      if (!this.openOnHover) return;
      if (this.timer) clearTimeout(this.timer);
      this.timer = setTimeout(function () {
        return _this.show();
      }, 100);
    },
    handleMouseLeave: function handleMouseLeave() {
      var _this2 = this;

      if (!this.openOnHover) return;
      if (this.timer) clearTimeout(this.timer);
      this.timer = setTimeout(function () {
        return _this2.hide();
      }, 100);
    },
    show: function show() {
      this.active = true;
      this.$emit('open');
    },
    hide: function hide() {
      this.active = false;
      this.$emit('close');
    },
    createPopover: function createPopover(h) {
      return h(Popover, {
        class: this.popoverClass,
        style: {
          'min-width': this.trigger ? this.trigger.offsetWidth + 'px' : ''
        },
        props: {
          cover: this.cover,
          placement: this.placement,
          open: this.active,
          space: this.space,
          trigger: this.trigger
        },
        on: {
          close: this.hide,
          mouseenter: this.handleMouseEnter,
          mouseleave: this.handleMouseLeave
        }
      }, this.$slots.content);
    }
  },
  render: function render(h) {
    var _this3 = this;

    return h('div', {
      staticClass: 'mu-menu',
      class: {
        'mu-menu__open': this.active
      }
    }, [h('div', {
      staticClass: 'mu-menu-activator',
      on: {
        click: function click() {
          return _this3.openOnHover ? null : _this3.active ? _this3.hide() : _this3.show();
        },
        mouseenter: this.handleMouseEnter,
        mouseleave: this.handleMouseLeave
      }
    }, this.$slots.default), this.createPopover(h)]);
  },

  watch: {
    active: function active(val) {
      this.$emit('update:open', val);
    },
    open: function open(val) {
      this.active = val;
    }
  }
};

Menu.install = function (Vue$$1) {
  Vue$$1.component(Menu.name, Menu);
};

var PaginationTheme = (function (theme) {
  return "\n  .mu-pagination {\n    color: " + theme.text.primary + ";\n    font-size: 14px;\n  }\n  .mu-pagination__raised .mu-pagination-item.mu-button,\n  .mu-pagination__raised .mu-pagination-btn.mu-button{\n    background-color: " + theme.text.alternate + ";\n  }\n  .mu-pagination-item.mu-button.is-current {\n    background-color: " + theme.primary + ";\n  }\n  ";
});

var Pagination = {
  name: 'mu-pagination',
  props: {
    total: {
      type: Number,
      default: 0,
      validator: function validator(val) {
        return val >= 0;
      }
    },
    current: {
      type: Number,
      default: 1,
      validator: function validator(val) {
        return val >= 1;
      }
    },
    pageCount: {
      type: Number,
      default: 7,
      validator: function validator(val) {
        return val >= 5 && val <= 21 && val % 2 !== 0;
      }
    },
    pageSize: {
      type: Number,
      default: 10
    },
    raised: Boolean,
    circle: Boolean
  },
  computed: {
    showPageCount: function showPageCount() {
      return this.pageCount - 2;
    },
    totalPage: function totalPage() {
      return Math.ceil(this.total / this.pageSize);
    },
    items: function items() {
      if (this.total === 0) return [];
      var showPageCount = this.showPageCount;
      var arr = [];
      var start = 1;
      var end = this.totalPage;

      if (end <= showPageCount + 2) {
        for (var i = start; i <= end; i++) {
          arr.push({ text: i, value: i });
        }
        return arr;
      }
      arr.push({ text: start, value: start });
      if (this.current - start >= showPageCount - 1) {
        var go = this.current - showPageCount;
        arr.push({
          text: '...',
          value: go < 1 ? 1 : go
        });
      }

      var listStart = this.current - Math.floor(showPageCount / 2);
      if (listStart <= 1) listStart = 2;
      var listEnd = listStart + showPageCount - 1;
      if (listEnd >= end) listEnd = end - 1;
      listStart = listEnd - showPageCount + 1;

      for (var _i = listStart; _i <= listEnd; _i++) {
        arr.push({ text: _i, value: _i });
      }

      if (end - this.current >= showPageCount - 1) {
        var _go = this.current + showPageCount;
        arr.push({
          text: '...',
          value: _go > end ? end : _go
        });
      }
      arr.push({ text: end, value: end });
      return arr;
    }
  },
  methods: {
    changePage: function changePage(page) {
      this.$emit('update:current', page);
      this.$emit('change', page);
    },
    createPrevBtn: function createPrevBtn(h) {
      var _this = this;

      return h(Button, {
        staticClass: 'mu-pagination-btn',
        props: {
          flat: true,
          disabled: this.current <= 1
        },
        on: {
          click: function click() {
            return _this.changePage(_this.current - 1);
          }
        }
      }, [h('svg', {
        staticClass: 'mu-pagination-svg-icon',
        attrs: {
          viewBox: '0 0 24 24'
        }
      }, [h('path', {
        attrs: {
          d: 'M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z'
        }
      })])]);
    },
    creatNextBtn: function creatNextBtn(h) {
      var _this2 = this;

      return h(Button, {
        staticClass: 'mu-pagination-btn',
        props: {
          flat: true,
          disabled: this.current >= this.totalPage
        },
        on: {
          click: function click() {
            return _this2.changePage(_this2.current + 1);
          }
        }
      }, [h('svg', {
        staticClass: 'mu-pagination-svg-icon',
        attrs: {
          viewBox: '0 0 24 24'
        }
      }, [h('path', {
        attrs: {
          d: 'M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z'
        }
      })])]);
    },
    createPageList: function createPageList(h) {
      var _this3 = this;

      return h('ul', {}, this.items.map(function (item) {
        var btn = h(Button, {
          staticClass: 'mu-pagination-item',
          class: {
            'is-current': _this3.current === item.value
          },
          props: {
            flat: true
          },
          on: {
            click: function click() {
              return _this3.changePage(item.value);
            }
          }
        }, [item.text === '...' ? h('svg', {
          staticClass: 'mu-pagination-svg-icon',
          attrs: {
            viewBox: '0 0 24 24'
          }
        }, [h('path', {
          attrs: {
            d: 'M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z'
          }
        })]) : item.text]);
        return h('li', {}, [btn]);
      }));
    }
  },
  render: function render(h) {
    return h('div', {
      staticClass: 'mu-pagination',
      class: {
        'mu-pagination__raised': this.raised,
        'mu-pagination__circle': this.circle
      }
    }, [this.createPrevBtn(h), this.createPageList(h), this.creatNextBtn(h)]);
  }
};

Pagination.install = function (Vue$$1) {
  Vue$$1.component(Pagination.name, Pagination);
};

theme.addCreateTheme(PaginationTheme);

var RadioTheme = (function (theme) {
  return "\n  .mu-radio.disabled  {\n    color: " + theme.text.disabled + ";\n  }\n  .mu-radio-checked {\n    color: " + theme.primary + ";\n  }\n  .mu-radio-label {\n    color: " + theme.text.primary + ";\n  }\n  .mu-radio.disabled .mu-radio-label {\n    color: " + theme.text.disabled + ";\n  }\n  ";
});

var Radio = {
  name: 'mu-radio',
  mixins: [select('radio')],
  props: {
    inputValue: {}
  },
  computed: {
    checked: function checked() {
      var inputValue = this.inputValue;
      var value = this.$attrs.value;
      if (isNull(inputValue)) return false;
      return inputValue === value;
    }
  },
  methods: {
    toggle: function toggle() {
      this.$emit('change', this.$attrs.value);
    }
  },
  render: function render(h) {
    var defaultSvgUnCheckIcon = h('svg', {
      staticClass: 'mu-radio-icon-uncheck mu-radio-svg-icon',
      attrs: {
        viewBox: '0 0 24 24'
      }
    }, [h('path', {
      attrs: {
        d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z'
      }
    })]);
    var defaultSvgCheckedIcon = h('svg', {
      staticClass: 'mu-radio-icon-checked mu-radio-svg-icon',
      attrs: {
        viewBox: '0 0 24 24'
      }
    }, [h('path', {
      attrs: {
        d: 'M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z'
      }
    })]);
    var view = this.createRipple(h, 'mu-radio-icon', [this.uncheckIcon ? h(Icon, {
      staticClass: 'mu-radio-icon-uncheck',
      props: {
        value: this.uncheckIcon
      }
    }) : defaultSvgUnCheckIcon, this.checkedIcon ? h(Icon, {
      staticClass: 'mu-radio-icon-checked',
      props: {
        value: this.checkedIcon
      }
    }) : defaultSvgCheckedIcon]);
    return this.createSelect(h, view);
  }
};

Radio.install = function (Vue$$1) {
  Vue$$1.component(Radio.name, Radio);
};

theme.addCreateTheme(RadioTheme);

var SelectTheme = (function (theme) {
  return '\n  .mu-select-content {\n    color: ' + theme.text.primary + ';\n  }\n  .mu-select-input {\n    color: ' + theme.text.primary + ';\n  }\n  .mu-selection-text.is-active {\n    color: ' + theme.primary + ';\n  }\n  .mu-select-no-data {\n    color: ' + theme.text.disabled + ';\n  }\n  .mu-option.is-selected .mu-item {\n    color: ' + theme.secondary + ';\n  }\n  .mu-option.is-focused {\n    color: ' + theme.secondary + ';\n    background-color: ' + fade(theme.text.primary, 0.1) + ';\n  }\n  .mu-option.is-disabled .mu-item {\n    color: ' + theme.text.disabled + ';\n  }\n  ';
});

var menu = {
  provide: function provide() {
    return {
      optionClick: this.optionClick,
      addOption: this.addOption,
      removeOption: this.removeOption,
      isOptionSelected: this.isOptionSelected,
      isMultiple: this.isMultiple
    };
  },

  props: {
    textline: List.props.textline,
    space: Popover.props.space,
    placement: Popover.props.placement,
    dense: _extends({}, List.props.dense, {
      default: true
    }),
    noDataText: {
      type: String,
      default: '暂无数据显示'
    }
  },
  data: function data() {
    return {
      options: [],
      open: false
    };
  },

  computed: {
    selects: function selects() {
      if (!this.multiple) {
        var option = this.getOption(this.value);
        return option ? [{
          label: option.label,
          value: this.value,
          index: 0
        }] : [];
      }
      var selects = Array.isArray(this.value) ? this.value : [];
      var selectItems = [];
      for (var i = 0; i < selects.length; i++) {
        var value = selects[i];
        var _option = this.getOption(value);
        if (_option) {
          selectItems.push({
            label: _option.label,
            value: _option.value,
            index: selectItems.length
          });
          continue;
        }

        if (this.tags) {
          selectItems.push({
            label: value,
            value: value,
            index: selectItems.length
          });
        }
      }
      return selectItems;
    }
  },
  methods: {
    activateInput: function activateInput() {
      this.isFocused = true;
    },
    deactivateInput: function deactivateInput() {
      this.isFocused = false;
      this.selectedIndex = -1;
      this.setSeachValue();
    },
    openMenu: function openMenu() {
      var _this = this;

      this.open = true;
      this.resetOptionVisable();
      var selectedIndex = this.getSelectedIndex();
      this.setFocusIndex(selectedIndex);
      setTimeout(function () {
        return _this.setScollPosition(selectedIndex);
      }, 0);
      if (this.autoComplete) {
        this.$nextTick(function () {
          _this.$refs.input.select();
        });
      }
    },
    closeMenu: function closeMenu() {
      this.open = false;
      this.resetFocusIndex();
    },
    toggleMenu: function toggleMenu() {
      if (this.open) return this.closeMenu();
      this.openMenu();
      this.focusInput();
    },
    resetOptionVisable: function resetOptionVisable() {
      this.options.forEach(function (option) {
        return option.visible = true;
      });
    },
    isMultiple: function isMultiple() {
      return this.multiple;
    },
    isOptionSelected: function isOptionSelected(value) {
      return value === this.value || this.multiple && this.value && this.value.indexOf(value) !== -1;
    },
    addOption: function addOption(option) {
      this.options.push(option);
    },
    removeOption: function removeOption(option) {
      var index = this.options.indexOf(option);
      if (index !== -1) this.options.splice(index, 1);
    },
    getOption: function getOption(value) {
      var option = this.options.filter(function (option) {
        return option.value === value;
      })[0];
      if (option) return option;
      return {
        label: value,
        value: value
      };
    },
    insertValue: function insertValue(selectedValue, value) {
      var index = 0;
      for (var i = 0; i < this.options.length; i++) {
        var item = this.options[i];
        if (item.selected) {
          index = selectedValue.indexOf(item.value) + 1;
          continue;
        }
        if (item.value === value) {
          return selectedValue.splice(index, 0, value);
        }
      }
      return selectedValue.push(value);
    },
    optionClick: function optionClick(value) {
      var _this2 = this;

      var notRemove = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      var selectedValue = this.multiple ? this.value ? [].concat(toConsumableArray(this.value)) : [] : this.value;
      if (this.multiple) {
        var index = selectedValue.indexOf(value);
        if (index === -1) {
          this.insertValue(selectedValue, value);
        } else {
          if (!notRemove) selectedValue.splice(index, 1);
        }
      } else {
        selectedValue = value;
      }
      this.$emit('input', selectedValue);
      this.$emit('change', selectedValue);
      if (this.multiple && this.autoComplete) this.searchValue = '';
      this.$nextTick(function () {
        _this2.focusInput();
        if (!_this2.multiple) _this2.closeMenu();
      });
    },
    createMenu: function createMenu(h) {
      var _this3 = this;

      var trigger = this.$refs.select;
      return h(Popover, {
        staticClass: 'mu-option-list',
        class: this.popoverClass,
        style: {
          'maxHeight': this.maxHeight + 'px',
          'visibility': this.tags && this.enableOptions.length === 0 ? 'hidden' : '',
          'min-width': trigger ? trigger.offsetWidth + 'px' : ''
        },
        ref: 'popover',
        props: {
          trigger: trigger,
          open: this.open,
          space: this.space,
          cover: !this.autoComplete,
          placement: this.placement
        },
        on: {
          close: function close() {
            return _this3.closeMenu();
          }
        }
      }, [h(List, {
        props: {
          textline: this.textline,
          dense: this.dense
        }
      }, [!this.tags && this.filterable && this.enableOptions.length === 0 ? h('div', { staticClass: 'mu-select-no-data' }, this.noDataText) : null, this.$slots.default])]);
    }
  }
};

var selection = {
  directives: {
    'click-outside': clickOutSide
  },
  data: function data() {
    return {
      searchValue: '',
      shouldBreak: false,
      selectedIndex: -1
    };
  },
  created: function created() {
    this.setSeachValue();
  },

  methods: {
    setSeachValue: function setSeachValue() {
      if (!this.multiple) this.searchValue = this.selects.map(function (item) {
        return item.label;
      }).join(',');
    },
    changeSelectedIndex: function changeSelectedIndex(keycode) {
      var maxIndex = this.selects.length - 1;
      if (keycode === 'left') {
        this.selectedIndex = this.selectedIndex === -1 ? maxIndex : this.selectedIndex - 1;
      } else if (keycode === 'right') {
        this.selectedIndex = this.selectedIndex >= maxIndex ? -1 : this.selectedIndex + 1;
      } else if (this.selectedIndex === -1) {
        this.selectedIndex = maxIndex;
        return;
      }

      if (['backspace', 'delete'].indexOf(keycode) !== -1) {
        var newIndex = this.selectedIndex === maxIndex ? this.selectedIndex - 1 : this.selects[this.selectedIndex + 1] ? this.selectedIndex : -1;
        if (this.selectedIndex !== -1) this.removeSelection(this.selectedIndex);
        this.selectedIndex = newIndex;
      }
    },
    resetSelectedIndex: function resetSelectedIndex() {
      this.selectedIndex = -1;
    },
    removeSelection: function removeSelection(index) {
      var value = [].concat(toConsumableArray(this.value));
      value.splice(index, 1);
      this.$emit('input', value);
      this.$emit('change', value);
    },
    createSlotSelection: function createSlotSelection(item) {
      return this.$scopedSlots.selection(_extends({}, item, {
        disabled: this.disabled || this.readonly
      }));
    },
    createChipSelection: function createChipSelection(h, _ref) {
      var _this = this;

      var selected = _ref.selected,
          index = _ref.index,
          label = _ref.label;

      return h(Chip, {
        attrs: {
          tabindex: -1
        },
        props: {
          delete: true,
          selected: selected
        },
        on: {
          delete: function _delete() {
            if (_this.disabled || _this.readonly) return;
            _this.removeSelection(index);
          }
        }
      }, label);
    },
    createTextSelection: function createTextSelection(h, _ref2, isLast) {
      var selected = _ref2.selected,
          label = _ref2.label;

      return h('span', {
        staticClass: 'mu-selection-text',
        class: {
          'is-active': selected
        }
      }, isLast ? label : label + this.separator);
    },
    createSelectedItems: function createSelectedItems(h) {
      var _this2 = this;

      return this.selects.map(function (item, index) {
        var selected = _this2.selectedIndex === index;

        switch (true) {
          case !!_this2.$scopedSlots.selection:
            return _this2.createSlotSelection(_extends({}, item, { selected: selected }));
          case _this2.chips:
            return _this2.createChipSelection(h, _extends({}, item, { selected: selected }));
          default:
            return _this2.createTextSelection(h, _extends({}, item, { selected: selected }), index === _this2.selects.length - 1);
        }
      });
    },
    createInputElement: function createInputElement(h) {
      var _this3 = this;

      var enable = this.autoComplete && !this.readonly;
      return [h('input', {
        staticClass: 'mu-select-input',
        ref: 'input',
        class: {
          'is-enable': enable,
          'is-break': this.shouldBreak
        },
        attrs: {
          tabindex: 0,
          readonly: !enable,
          placeholder: !this.value && this.value !== 0 ? this.placeholder : ''
        },
        domProps: {
          value: this.searchValue
        },
        on: _extends({}, this.createListeners(), {
          input: function input(e) {
            _this3.searchValue = e.target.value;
          }
        })
      }), h('input', {
        attrs: _extends({}, this.$attrs, {
          type: 'hidden'
        }),
        domProps: {
          value: this.value
        }
      })];
    },
    createSelection: function createSelection(h) {
      var _this4 = this;

      var content = h('div', {
        staticClass: 'mu-select-content'
      }, this.multiple ? [].concat(toConsumableArray(this.createSelectedItems(h)), toConsumableArray(this.createInputElement(h))) : this.createInputElement(h));
      return {
        data: {
          staticClass: 'mu-select',
          class: {
            'is-open': this.open,
            'is-multi': this.multiple,
            'is-filterable': this.autoComplete,
            'is-readonly': this.readonly,
            'is-disabled': this.disabled
          },
          on: {
            click: function click(e) {
              if (_this4.disabled || _this4.readonly || _this4.autoComplete && e.target === _this4.$refs.input) return;
              _this4.toggleMenu();
            }
          },
          directives: [{
            name: 'click-outside',
            value: function value(e) {
              if (_this4.open && _this4.$refs.popover.$el.contains(e.target)) return;
              _this4.blur();
            }
          }],
          ref: 'select'
        },
        children: [content],
        defaultActionIcon: h('div', {
          staticClass: 'mu-select-action'
        }, [h('svg', {
          staticClass: 'mu-select-icon',
          attrs: {
            viewBox: '0 0 24 24'
          }
        }, [h('path', {
          attrs: {
            d: 'M7 10l5 5 5-5z'
          }
        })])])
      };
    }
  },
  watch: {
    searchValue: function searchValue(val) {
      var _this5 = this;

      if (this.$refs.input) {
        if (this.$refs.input.scrollWidth > this.$refs.input.clientWidth) {
          this.shouldBreak = true;
        } else if (val === '') {
          this.shouldBreak = false;
        }
      }

      this.options.forEach(function (option) {
        option.visible = !_this5.autoComplete || !val || option.label.toLowerCase().indexOf(val.toLowerCase()) !== -1;
      });
      this.resetFocusIndex();
      if (this.isFocused && !this.open) this.open = true;
    },
    selects: function selects() {
      this.setSeachValue();
    }
  }
};

var events = {
  methods: {
    blur: function blur() {
      this.deactivateInput();
      this.closeMenu();
      this.$emit('blur');
    },
    focus: function focus() {
      this.activateInput();
      this.openMenu();
      this.$emit('focus');
    },
    focusInput: function focusInput() {
      this.$refs.input.focus();
    },
    createListeners: function createListeners() {
      var _this = this;

      var listeners = Object.assign({}, this.$listeners);
      delete listeners.input;
      delete listeners.change;
      return _extends({}, listeners, {
        click: function click(e) {
          if (_this.disabled || _this.readonly || !_this.autoComplete) return;
          if (_this.isFocused && !_this.open) {
            _this.openMenu();
            return;
          }
          _this.focus();
        },
        focus: function focus(e) {
          if (_this.disabled || _this.readonly || _this.isFocused) {
            return;
          }

          _this.activateInput();
          _this.$nextTick(_this.focusInput);
        },
        keydown: this.onKeydown //  mixins/keyboard.js
      });
    }
  }
};

var keyboard = {
  data: function data() {
    return {
      focusIndex: -1
    };
  },

  computed: {
    enableOptions: function enableOptions() {
      return this.options.filter(function (option) {
        return option.visible && !option.disabled;
      });
    }
  },
  methods: {
    onKeydown: function onKeydown(e) {
      if (this.disabled || this.readonly) return;
      var code = keycode(e);
      if (!this.open && ['enter', 'space', 'up', 'down'].indexOf(code) !== -1) {
        e.preventDefault();
        return this.openMenu();
      }
      var options = this.enableOptions;
      switch (code) {
        case 'enter':
          var option = options[this.focusIndex];
          if (option) {
            this.optionClick(option.value);
          } else if (this.tags && this.multiple && this.searchValue) {
            this.optionClick(this.searchValue, true);
          }
          break;
        case 'up':
        case 'down':
          event.preventDefault();
          this.resetSelectedIndex();
          code === 'up' ? this.decrementFocusIndex() : this.incrementFocusIndex();
          break;
        case 'tab':
          this.blur();
          if (this.multiple) this.searchValue = '';
          break;
        case 'left':
        case 'right':
        case 'delete':
        case 'backspace':
          if (!this.searchValue && this.autoComplete && this.multiple) this.changeSelectedIndex(code);
          break;
        default:
          this.resetSelectedIndex();
          break;
      }
    },
    decrementFocusIndex: function decrementFocusIndex() {
      var index = this.focusIndex;
      var maxIndex = this.getOptionCount() - 1;
      index--;
      if (index < 0) index = maxIndex;
      this.setFocusIndex(index);
    },
    incrementFocusIndex: function incrementFocusIndex() {
      var index = this.focusIndex;
      var maxIndex = this.getOptionCount() - 1;
      index++;
      if (index > maxIndex) index = 0;
      this.setFocusIndex(index);
    },
    getOptionCount: function getOptionCount() {
      return this.enableOptions.length;
    },
    resetFocusIndex: function resetFocusIndex() {
      this.focusIndex = -1;
    },
    setFocusIndex: function setFocusIndex(index) {
      this.focusIndex = index;
    },
    getSelectedIndex: function getSelectedIndex() {
      for (var i = 0; i < this.enableOptions.length; i++) {
        if (this.enableOptions[i].selected) return i;
      }
      return -1;
    },
    setScollPosition: function setScollPosition(index) {
      var _this = this;

      if (index === -1 || !this.open) return;
      this.$nextTick(function () {
        var option = _this.enableOptions[index];
        if (!option) return;
        var optionEl = option.$el;
        var optionHeight = optionEl.offsetHeight;
        var scrollTop = optionEl.offsetTop - optionHeight;
        if (scrollTop < optionHeight) scrollTop = 0;
        _this.$refs.popover.$el.scrollTop = scrollTop;
      });
    }
  },
  watch: {
    focusIndex: function focusIndex(val) {
      this.enableOptions.forEach(function (option, index) {
        option.focused = index === val;
      });
      this.setScollPosition(val);
    }
  }
};

var Select = {
  name: 'mu-select',
  mixins: [input, menu, selection, events, keyboard],
  props: {
    popoverClass: [String, Object, Array],
    multiple: Boolean,
    maxHeight: {
      type: [String, Number],
      default: 300
    },
    readonly: Boolean,
    chips: Boolean,
    tags: Boolean, // 可创建条目
    placeholder: String,
    separator: {
      type: String,
      default: ','
    },
    filterable: Boolean // enable search option
  },
  computed: {
    autoComplete: function autoComplete() {
      return this.filterable || this.tags;
    }
  },
  render: function render(h) {
    var _createSelection = this.createSelection(h),
        data = _createSelection.data,
        children = _createSelection.children,
        defaultActionIcon = _createSelection.defaultActionIcon;

    return this.createInput(h, data, [].concat(toConsumableArray(children), [this.createMenu(h)]), defaultActionIcon);
  }
};

var Option = {
  name: 'mu-option',
  inject: ['addOption', 'removeOption', 'optionClick', 'isOptionSelected', 'isMultiple'],
  props: {
    label: {
      required: true,
      type: String
    },
    value: {
      required: true
    },
    disabled: Boolean,
    ripple: {
      type: Boolean,
      default: true
    },
    avatar: Boolean
  },
  data: function data() {
    return {
      visible: true,
      focused: false
    };
  },

  computed: {
    selected: function selected() {
      return this.isOptionSelected(this.value);
    }
  },
  created: function created() {
    this.addOption(this);
  },
  destroyed: function destroyed() {
    this.removeOption(this);
  },
  render: function render(h) {
    var _this = this;

    var defaultItem = [this.isMultiple() ? h(ListAction, [h(Checkbox, {
      props: {
        inputValue: this.selected,
        color: 'secondary',
        disabled: this.disabled,
        tabIndex: -1
      }
    })]) : undefined, h(ListItemContent, [h(ListItemTitle, {}, this.label)])];
    return h(ListItem, {
      staticClass: 'mu-option',
      ref: 'listItem',
      class: {
        'is-selected': this.selected,
        'is-disabled': this.disabled,
        'is-focused': this.focused
      },
      props: {
        ripple: this.ripple,
        open: this.open,
        avatar: this.avatar,
        button: !this.disabled,
        tabIndex: -1
      },
      directives: [{
        name: 'show',
        value: this.visible
      }],
      on: {
        click: function click(e) {
          return _this.optionClick(_this.value);
        }
      }
    }, this.$slots.default && this.$slots.default.length > 0 ? this.$slots.default : defaultItem);
  }
};

Select.install = function (Vue$$1) {
  Vue$$1.component(Select.name, Select);
  Vue$$1.component(Option.name, Option);
};

theme.addCreateTheme(SelectTheme);

var PickerTheme$1 = (function (theme) {
  return "\n  .mu-slide-picker{\n    background: " + theme.background.paper + ";\n  }\n  .mu-slide-picker-center-highlight {\n    border-top-color: " + theme.divider + ";\n    border-bottom-color: " + theme.divider + ";\n  }\n  .mu-slide-picker-slot.mu-slide-picker-slot-divider{\n    color: " + theme.text.primary + ";\n  }\n  .mu-slide-picker-item{\n    color: " + theme.text.secondary + ";\n  }\n  .mu-slide-picker-item.selected {\n    color: " + theme.text.primary + ";\n  }\n  ";
});

var docStyle = typeof document !== 'undefined' ? document.documentElement.style : {};
var engine;
var translate3d = false;

if (typeof window !== 'undefined' && window.opera && Object.prototype.toString.call(window.opera) === '[object Opera]') {
  engine = 'presto';
} else if ('MozAppearance' in docStyle) {
  engine = 'gecko';
} else if ('WebkitAppearance' in docStyle) {
  engine = 'webkit';
} else if (typeof navigator !== 'undefined' && typeof navigator.cpuClass === 'string') {
  engine = 'trident';
} else {
  engine = 'node';
}

var cssPrefix = { trident: '-ms-', gecko: '-moz-', webkit: '-webkit-', presto: '-o-' }[engine];

var vendorPrefix = { trident: 'ms', gecko: 'Moz', webkit: 'Webkit', presto: 'O' }[engine];

var helperElem = typeof document !== 'undefined' ? document.createElement('div') : {};
var perspectiveProperty = vendorPrefix + 'Perspective';
var transformProperty = vendorPrefix + 'Transform';
var transformStyleName = cssPrefix + 'transform';
var transitionProperty = vendorPrefix + 'Transition';
var transitionStyleName = cssPrefix + 'transition';
var transitionEndProperty = (vendorPrefix || '').toLowerCase() + 'TransitionEnd';

if (helperElem.style && helperElem.style[perspectiveProperty] !== undefined) {
  translate3d = true;
}

var getTranslate = function getTranslate(element) {
  var result = { left: 0, top: 0 };
  if (element === null || element.style === null) return result;

  var transform = element.style[transformProperty];
  var matches = /translate\(\s*(-?\d+(\.?\d+?)?)px,\s*(-?\d+(\.\d+)?)px\)\s*translateZ\(0px\)/g.exec(transform);
  if (matches) {
    result.left = +matches[1];
    result.top = +matches[3];
  }

  return result;
};

var translateElement = function translateElement(element, x, y) {
  if (x === null && y === null) return;

  if (element === null || element.style === null) return;

  if (!element.style[transformProperty] && x === 0 && y === 0) return;

  if (x === null || y === null) {
    var translate = getTranslate(element);
    if (x === null) {
      x = translate.left;
    }
    if (y === null) {
      y = translate.top;
    }
  }

  cancelTranslateElement(element);

  if (translate3d) {
    element.style[transformProperty] += ' translate(' + (x ? x + 'px' : '0px') + ',' + (y ? y + 'px' : '0px') + ') translateZ(0px)';
  } else {
    element.style[transformProperty] += ' translate(' + (x ? x + 'px' : '0px') + ',' + (y ? y + 'px' : '0px') + ')';
  }
};

var cancelTranslateElement = function cancelTranslateElement(element) {
  if (element === null || element.style === null) return;
  var transformValue = element.style[transformProperty];
  if (transformValue) {
    transformValue = transformValue.replace(/translate\(\s*(-?\d+(\.?\d+?)?)px,\s*(-?\d+(\.\d+)?)px\)\s*translateZ\(0px\)/g, '');
    element.style[transformProperty] = transformValue;
  }
};

var translateUtil = {
  transformProperty: transformProperty,
  transformStyleName: transformStyleName,
  transitionProperty: transitionProperty,
  transitionStyleName: transitionStyleName,
  transitionEndProperty: transitionEndProperty,
  getElementTranslate: getTranslate,
  translateElement: translateElement,
  cancelTranslateElement: cancelTranslateElement
};

var ITEM_HEIGHT = 36;

var PickerSlot = {
  name: 'mu-slide-picker-slot',
  directives: {
    swipe: swipe
  },
  props: {
    divider: {
      type: Boolean,
      default: false
    },
    content: {
      type: String,
      default: ''
    },
    values: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    value: {},
    textAlign: {
      type: String,
      default: ''
    },
    width: {
      type: String,
      default: ''
    },
    visibleItemCount: {
      type: Number,
      default: 5
    }
  },
  data: function data() {
    return {
      animate: false,
      startTop: 0,
      velocityTranslate: 0,
      prevTranslate: 0
    };
  },

  computed: {
    itemHeight: function itemHeight() {},
    contentHeight: function contentHeight() {
      return ITEM_HEIGHT * this.visibleItemCount;
    },
    valueIndex: function valueIndex() {
      return this.values.indexOf(this.value);
    },
    dragRange: function dragRange() {
      var values = this.values;
      var visibleItemCount = this.visibleItemCount;
      return [-ITEM_HEIGHT * (values.length - Math.ceil(visibleItemCount / 2)), ITEM_HEIGHT * Math.floor(visibleItemCount / 2)];
    }
  },
  mounted: function mounted() {
    if (!this.divider) {
      this.doOnValueChange();
    }
  },

  methods: {
    value2Translate: function value2Translate(value) {
      var values = this.values;
      var valueIndex = values.indexOf(value);
      var offset = Math.floor(this.visibleItemCount / 2);
      if (valueIndex !== -1) {
        return (valueIndex - offset) * -ITEM_HEIGHT;
      }
    },
    translate2Value: function translate2Value(translate) {
      translate = Math.round(translate / ITEM_HEIGHT) * ITEM_HEIGHT;
      var index = -(translate - Math.floor(this.visibleItemCount / 2) * ITEM_HEIGHT) / ITEM_HEIGHT;
      return this.values[index];
    },
    doOnValueChange: function doOnValueChange() {
      var value = this.value;
      var wrapper = this.$refs.wrapper;
      translateUtil.translateElement(wrapper, null, this.value2Translate(value));
    },
    doOnValuesChange: function doOnValuesChange() {
      var el = this.$el;
      var items = el.querySelectorAll('.mu-slide-picker-item');
      Array.prototype.forEach.call(items, function (item, index) {
        translateUtil.translateElement(item, null, ITEM_HEIGHT * index);
      });
    },
    handleStart: function handleStart() {
      this.startTop = translateUtil.getElementTranslate(this.$refs.wrapper).top;
    },
    handleMove: function handleMove(pos, drag, event) {
      var el = this.$refs.wrapper;
      var translate = this.startTop + pos.y;
      translateUtil.translateElement(el, 0, translate);
      this.velocityTranslate = translate - this.prevTranslate || translate;
      this.prevTranslate = translate;
    },
    handleEnd: function handleEnd(pos, drag, event) {
      var _this = this;

      var el = this.$refs.wrapper;
      var momentumRatio = 7;
      var currentTranslate = translateUtil.getElementTranslate(el).top;
      var momentumTranslate = void 0;
      if (pos.time < 300) {
        momentumTranslate = currentTranslate + this.velocityTranslate * momentumRatio;
      }
      var dragRange = this.dragRange;
      this.animate = true;
      transitionEnd(el, function () {
        _this.animate = false;
      });
      this.$nextTick(function () {
        var translate = void 0;
        if (momentumTranslate) {
          translate = Math.round(momentumTranslate / ITEM_HEIGHT) * ITEM_HEIGHT;
        } else {
          translate = Math.round(currentTranslate / ITEM_HEIGHT) * ITEM_HEIGHT;
        }
        translate = Math.max(Math.min(translate, dragRange[1]), dragRange[0]);
        translateUtil.translateElement(el, null, translate);
        _this.$emit('change', _this.translate2Value(translate));
      });
    }
  },
  render: function render(h) {
    var _this2 = this;

    return h('div', {
      staticClass: 'mu-slide-picker-slot',
      class: {
        'mu-slide-picker-slot-divider': this.divider
      },
      style: {
        width: this.width
      },
      on: {
        touchmove: function touchmove(e) {
          e.preventDefault();
        }
      },
      directives: this.divider ? [] : [{
        name: 'swipe',
        value: {
          start: this.handleStart,
          move: this.handleMove,
          end: this.handleEnd
        }
      }]
    }, [this.divider ? h('div', {}, this.content) : h('div', {
      staticClass: 'mu-slide-picker-slot-wrapper',
      class: {
        animate: this.animate
      },
      style: {
        height: this.contentHeight + 'px'
      },
      ref: 'wrapper'
    }, this.values.map(function (item, index) {
      return h('div', {
        staticClass: 'mu-slide-picker-item',
        style: {
          'text-align': _this2.textAlign
        },
        class: {
          selected: item === _this2.value
        },
        key: 'pick-slot-' + index
      }, item.text || item);
    }))]);
  },

  watch: {
    values: function values(newVal) {
      if (this.valueIndex === -1) {
        this.value = (newVal || [])[0];
      }
    },
    value: function value() {
      this.doOnValueChange();
    }
  }
};

var Picker$1 = {
  name: 'mu-slide-picker',
  props: {
    visibleItemCount: {
      type: Number,
      default: 5
    },
    values: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    slots: {
      type: Array,
      default: function _default() {
        return [];
      }
    }
  },
  methods: {
    change: function change(index, value) {
      this.$emit('change', value, index);
    }
  },
  render: function render(h) {
    var _this = this;

    return h('div', {
      staticClass: 'mu-slide-picker'
    }, [].concat(toConsumableArray(this.slots.map(function (slot, index) {
      return h(PickerSlot, {
        props: {
          divider: slot.divider,
          content: slot.content,
          textAlign: slot.textAlign,
          width: slot.width,
          value: _this.values[index],
          values: slot.values,
          visibleItemCount: _this.visibleItemCount
        },
        key: 'picker-slot-item-' + index,
        on: {
          change: function change(value) {
            _this.change(index, value);
          }
        }
      });
    })), [h('div', {
      staticClass: 'mu-slide-picker-center-highlight'
    })]));
  }
};

Picker$1.install = function (Vue$$1) {
  Vue$$1.component(Picker$1.name, Picker$1);
};

theme.addCreateTheme(PickerTheme$1);

var SliderTheme = (function (theme) {
  return "\n  .mu-slider {\n    color: " + theme.primary + ";\n  }\n  .mu-slider-track{\n    background-color: " + theme.track + ";\n  }\n  .mu-slider.disabled .mu-slider-fill{\n    background-color: " + theme.track + ";\n  }\n  .mu-slider.zero .mu-slider-thumb,\n  .mu-slider.disabled .mu-slider-thumb{\n    border-color: " + theme.track + ";\n    color: " + theme.track + ";\n    background-color: " + theme.text.alternate + ";\n  }\n  ";
});

var Slider = {
  name: 'mu-slider',
  mixins: [color],
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    value: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 100
    },
    min: {
      type: Number,
      default: 0
    },
    step: {
      type: Number,
      default: 0.1
    },
    thumbColor: String,
    trackColor: String,
    disabled: Boolean,
    displayValue: {
      type: Boolean,
      default: true
    }
  },
  data: function data() {
    return {
      active: false,
      hover: false,
      focused: false,
      dragging: false
    };
  },

  computed: {
    percent: function percent() {
      var percentNum = (this.value - this.min) / (this.max - this.min) * 100;
      return percentNum > 100 ? 100 : percentNum < 0 ? 0 : percentNum;
    }
  },
  created: function created() {
    this.handleDragMouseMove = this.handleDragMouseMove.bind(this);
    this.handleMouseEnd = this.handleMouseEnd.bind(this);
    this.handleTouchMove = this.handleTouchMove.bind(this);
    this.handleTouchEnd = this.handleTouchEnd.bind(this);
  },

  methods: {
    handleKeydown: function handleKeydown(e) {
      var min = this.min,
          max = this.max,
          step = this.step;

      var action = void 0;
      switch (keycode(e)) {
        case 'page down':
        case 'down':
          action = 'decrease';
          break;
        case 'left':
          action = 'decrease';
          break;
        case 'page up':
        case 'up':
          action = 'increase';
          break;
        case 'right':
          action = 'increase';
          break;
        case 'home':
          action = 'min';
          break;
        case 'end':
          action = 'max';
          break;
      }
      var value = this.value;
      if (action) {
        e.preventDefault();
        switch (action) {
          case 'decrease':
            value -= step;
            break;
          case 'increase':
            value += step;
            break;
          case 'min':
            value = min;
            break;
          case 'max':
            value = max;
            break;
        }

        value = parseFloat(value.toFixed(5));

        if (value > max) {
          value = max;
        } else if (value < min) {
          value = min;
        }
      }
      this.$emit('change', value);
    },
    handleMouseDown: function handleMouseDown(e) {
      if (this.disabled) return;
      this.setValue(e);
      e.preventDefault();
      document.addEventListener('mousemove', this.handleDragMouseMove);
      document.addEventListener('mouseup', this.handleMouseEnd);
      this.$el.focus();
      this.onDragStart(e);
    },
    handleMouseUp: function handleMouseUp() {
      if (this.disabled) return;
      this.active = false;
    },
    handleTouchStart: function handleTouchStart(e) {
      if (this.disabled) return;
      this.setValue(e.touches[0]);

      document.addEventListener('touchmove', this.handleTouchMove);
      document.addEventListener('touchup', this.handleTouchEnd);
      document.addEventListener('touchend', this.handleTouchEnd);
      document.addEventListener('touchcancel', this.handleTouchEnd);

      e.preventDefault();
      this.onDragStart(e);
    },
    handleTouchEnd: function handleTouchEnd(e) {
      if (this.disabled) return;
      document.removeEventListener('touchmove', this.handleTouchMove);
      document.removeEventListener('touchup', this.handleTouchEnd);
      document.removeEventListener('touchend', this.handleTouchEnd);
      document.removeEventListener('touchcancel', this.handleTouchEnd);
      this.onDragStop(e);
    },
    handleFocus: function handleFocus() {
      if (this.disabled) return;
      this.focused = true;
    },
    handleBlur: function handleBlur() {
      if (this.disabled) return;
      this.focused = false;
    },
    handleMouseEnter: function handleMouseEnter() {
      if (this.disabled) return;
      this.hover = true;
    },
    handleMouseLeave: function handleMouseLeave() {
      if (this.disabled) return;
      this.hover = false;
    },

    // 从点击位置更新 value
    setValue: function setValue(e) {
      var $el = this.$el,
          max = this.max,
          min = this.min,
          step = this.step;

      var value = (e.clientX - $el.getBoundingClientRect().left) / $el.offsetWidth * (max - min);
      value = Math.round(value / step) * step + min;
      value = parseFloat(value.toFixed(5));

      if (value > max) {
        value = max;
      } else if (value < min) {
        value = min;
      }
      this.$emit('change', value);
    },

    // 拖拽控制
    onDragStart: function onDragStart(e) {
      this.dragging = true;
      this.active = true;
      this.$emit('drag-start', e);
    },
    onDragUpdate: function onDragUpdate(e) {
      var _this = this;

      if (this.dragRunning) return;
      this.dragRunning = true;
      window.requestAnimationFrame(function () {
        _this.dragRunning = false;
        if (!_this.disabled) _this.setValue(e);
      });
    },
    onDragStop: function onDragStop(e) {
      this.dragging = false;
      this.active = false;
      this.$emit('drag-stop', e);
    },
    handleDragMouseMove: function handleDragMouseMove(e) {
      this.onDragUpdate(e);
    },
    handleTouchMove: function handleTouchMove(e) {
      this.onDragUpdate(e.touches[0]);
    },
    handleMouseEnd: function handleMouseEnd(e) {
      document.removeEventListener('mousemove', this.handleDragMouseMove);
      document.removeEventListener('mouseup', this.handleMouseEnd);
      this.onDragStop(e);
    }
  },
  render: function render(h) {
    var colorClass = this.getNormalColorClass(this.color, true);
    var color$$1 = this.getColor(this.color);
    var thumbColorClass = this.getNormalColorClass(this.thumbColor);
    var thumbColor = this.getColor(this.thumbColor);
    var thumbTextColorClass = this.getNormalColorClass(this.thumbColor, true);
    var trackColorClass = this.getNormalColorClass(this.trackColor);
    var trackColor = this.getColor(this.trackColor);

    var percent = this.percent + '%';

    var input = h('input', {
      attrs: _extends({}, this.$attrs, {
        type: 'hidden',
        value: this.value
      })
    });

    var displayValue = this.displayValue ? h('div', {
      staticClass: 'mu-slider-display-value ' + thumbColorClass,
      style: {
        left: percent,
        'background-color': thumbColor
      }
    }, [h('span', {
      staticClass: 'display-value-text'
    }, this.value)]) : undefined;

    var thumb = h('div', {
      staticClass: ['mu-slider-thumb', thumbColorClass, thumbTextColorClass].join(' '),
      style: {
        left: this.percent + '%',
        color: thumbColor,
        'background-color': thumbColor
      }
    }, [(this.focused || this.hover) && !this.active ? h(FocusRipple) : undefined]);

    return h('div', {
      staticClass: 'mu-slider ' + colorClass,
      class: {
        zero: this.value <= this.min,
        active: this.active,
        'display-value': this.displayValue && this.active,
        disabled: this.disabled
      },
      style: { color: color$$1 },
      attrs: {
        tabindex: this.disabled ? -1 : 0
      },
      on: _extends({}, this.$listeners, {
        focus: this.handleFocus,
        blur: this.handleBlur,
        keydown: this.handleKeydown,
        touchstart: this.handleTouchStart,
        touchend: this.handleTouchEnd,
        touchcancel: this.handleTouchEnd,
        mousedown: this.handleMouseDown,
        mouseup: this.handleMouseUp,
        mouseenter: this.handleMouseEnter,
        mouseleave: this.handleMouseLeave
      })
    }, [input, displayValue, h('div', {
      staticClass: 'mu-slider-track ' + trackColorClass,
      style: {
        'background-color': trackColor
      }
    }), h('div', { staticClass: 'mu-slider-fill', style: { width: percent } }), thumb]);
  }
};

Slider.install = function (Vue$$1) {
  Vue$$1.component(Slider.name, Slider);
};

theme.addCreateTheme(SliderTheme);

var SnackbarTheme = (function (theme) {
  return "\n  .mu-snackbar {\n    color: " + theme.text.alternate + ";\n    background-color: " + theme.text.primary + ";\n  }\n  ";
});

var Snackbar = {
  name: 'mu-snackbar',
  mixins: [popup, color],
  props: {
    overlay: {
      default: false
    },
    escPressClose: {
      default: false
    },
    textColor: String,
    message: String,
    position: {
      type: String,
      default: 'bottom',
      validator: function validator(val) {
        return ['top-start', 'top', 'top-end', 'bottom-start', 'bottom', 'bottom-end'].indexOf(val) !== -1;
      }
    }
  },
  render: function render(h) {
    var message = h('div', {
      staticClass: 'mu-snackbar-message'
    }, this.$slots.default && this.$slots.default.length > 0 ? this.$slots.default : this.message);
    var action = this.$slots.action ? h('div', {
      staticClass: 'mu-snackbar-action'
    }, this.$slots.action) : undefined;

    return h(this.position.indexOf('top') !== -1 ? SlideTopTransition : SlideBottomTransition, [this.open ? h('div', {
      staticClass: 'mu-snackbar ' + this.getColorClass() + ' ' + this.getTextColorClass(),
      style: {
        'z-index': this.zIndex,
        'background-color': this.getColor(this.color),
        'color': this.getColor(this.textColor)
      },
      class: defineProperty({}, 'mu-snackbar-' + this.position, !!this.position),
      on: this.$listeners
    }, [message, action]) : undefined]);
  }
};

Snackbar.install = function (Vue$$1) {
  Vue$$1.component(Snackbar.name, Snackbar);
};

theme.addCreateTheme(SnackbarTheme);

var StepperTheme = (function (theme) {
  return "\n  .mu-step-label {\n    color: " + theme.text.primary + ";\n  }\n  .mu-step-label.disabled {\n    color: " + theme.text.disabled + ";\n  }\n  .mu-step-label.completed .mu-step-label-icon,\n  .mu-step-label.active .mu-step-label-icon {\n    color: " + theme.primary + ";\n  }\n  .mu-step-label-circle {\n    color: " + theme.text.alternate + ";\n  }\n  .mu-step-label.completed .mu-step-label-circle,\n  .mu-step-label.active .mu-step-label-circle {\n    background-color: " + theme.primary + ";\n  }\n  ";
});

var StepConnector = {
  name: 'mu-step-connector',
  functional: true,
  render: function render(h, _ref) {
    var data = _ref.data,
        children = _ref.children;

    data.staticClass = 'mu-step-connector ' + (data.staticClass || '');
    return h('div', data, [h('span', { staticClass: 'mu-step-connector-line' })]);
  }
};

var Stepper = {
  name: 'mu-stepper',
  props: {
    activeStep: {
      type: Number,
      default: 0
    },
    linear: {
      type: Boolean,
      default: true
    },
    orientation: {
      type: String,
      default: 'horizontal',
      validator: function validator(val) {
        return ['horizontal', 'vertical'].indexOf(val) !== -1;
      }
    }
  },
  render: function render(h) {
    var activeStep = this.activeStep,
        linear = this.linear,
        orientation = this.orientation;

    var children = [];
    var slots = this.$slots;

    if (slots.default && slots.default.length > 0) {
      var index = 0;
      slots.default.forEach(function (vNode) {
        if (!vNode.componentOptions) return;
        if (index > 0) {
          children.push(h(StepConnector, {}));
        }
        var propsData = vNode.componentOptions.propsData;

        if (activeStep === index) {
          propsData.active = true;
        } else if (linear && activeStep > index) {
          propsData.completed = true;
        } else if (linear && activeStep < index) {
          propsData.disabled = true;
        }

        propsData.index = index++;
        children.push(vNode);
      });
      if (children.length > 0) children[children.length - 1].componentOptions.propsData.last = true;
    }

    return h('div', {
      staticClass: 'mu-stepper ' + (orientation === 'vertical' ? 'mu-stepper-vertical' : '')
    }, children);
  }
};

var Step = {
  name: 'mu-step',
  props: {
    active: {
      type: Boolean,
      default: false
    },
    completed: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    index: {
      type: Number
    },
    last: {
      type: Boolean,
      default: false
    }
  },
  render: function render(h) {
    var active = this.active,
        completed = this.completed,
        disabled = this.disabled,
        index = this.index,
        last = this.last;

    var children = [];
    var slots = this.$slots;

    if (slots.default && slots.default.length > 0) {
      slots.default.forEach(function (vNode) {
        if (!vNode.componentOptions || !vNode.componentOptions.propsData) return;
        var num = index + 1;
        vNode.componentOptions.propsData = _extends({ active: active, completed: completed, disabled: disabled, last: last, num: num }, vNode.componentOptions.propsData);
        children.push(vNode);
      });
    }

    return h('div', { staticClass: 'mu-step', on: this.$listeners }, children);
  }
};

var StepLabel = {
  name: 'mu-step-label',
  props: {
    active: Boolean,
    completed: Boolean,
    disabled: Boolean,
    num: [String, Number]
  },
  render: function render(h) {
    var slots = this.$slots;
    var isSlotsIcon = slots.icon && slots.icon.length > 0;
    var icon = this.completed ? h('svg', {
      staticClass: 'mu-step-label-icon',
      attrs: {
        viewBox: '0 0 24 24'
      }
    }, [h('path', {
      attrs: {
        d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z'
      }
    })]) : h('div', { staticClass: 'mu-step-label-circle' }, this.num);

    return h('span', {
      staticClass: 'mu-step-label',
      class: {
        active: this.active,
        completed: this.completed,
        disabled: this.disabled
      },
      on: this.$listeners
    }, [this.num || isSlotsIcon ? h('span', { staticClass: 'mu-step-label-icon-container' }, [isSlotsIcon ? slots.icon : icon]) : undefined, slots.default]);
  }
};

var StepButton = {
  name: 'mu-step-button',
  props: {
    active: Boolean,
    completed: Boolean,
    disabled: Boolean,
    ripple: {
      type: Boolean,
      default: true
    },
    num: [String, Number],
    last: Boolean,
    childrenInLabel: {
      type: Boolean,
      default: true
    }
  },
  render: function render(h) {
    var slots = this.$slots;

    var stepLabel = h(StepLabel, {
      props: {
        active: this.active,
        completed: this.completed,
        num: this.num,
        disabled: this.disabled
      }
    }, [slots.default, slots.icon && slots.icon.map(function (vNode) {
      if (!vNode.tag) return vNode;
      vNode.data = vNode.data || {};
      vNode.data.slot = 'icon';
    })]);

    return h(AbstractButton, {
      staticClass: 'mu-step-button',
      props: {
        disabled: this.disabled,
        ripple: this.ripple
      },
      on: this.$listeners
    }, [this.childrenInLabel ? stepLabel : slots.default]);
  }
};

var StepContent = {
  name: 'mu-step-content',
  props: {
    active: Boolean,
    last: Boolean
  },
  render: function render(h) {
    return h('div', {
      staticClass: 'mu-step-content',
      class: {
        last: this.last
      },
      on: this.$listeners
    }, [h('div', {
      style: {
        position: 'relative',
        overflow: 'hidden',
        height: '100%'
      }
    }, [h(ExpandTransition, [this.active ? h('div', { staticClass: 'mu-step-content-inner', ref: 'inner' }, this.$slots.default) : undefined])])]);
  }
};

Stepper.install = function (Vue$$1) {
  Vue$$1.component(Stepper.name, Stepper);
  Vue$$1.component(Step.name, Step);
  Vue$$1.component(StepLabel.name, StepLabel);
  Vue$$1.component(StepButton.name, StepButton);
  Vue$$1.component(StepConnector.name, StepConnector);
  Vue$$1.component(StepContent.name, StepContent);
};

theme.addCreateTheme(StepperTheme);

var SubHeaderTheme = (function (theme) {
  return "\n  .mu-sub-header {\n    color: " + theme.text.secondary + ";\n  }\n  ";
});

var SubHeader = {
  name: 'mu-sub-header',
  functional: true,
  props: {
    inset: Boolean
  },
  render: function render(h, _ref) {
    var data = _ref.data,
        props = _ref.props,
        children = _ref.children;

    data.staticClass = (data.staticClass || '') + ' mu-sub-header ' + (props.inset ? 'inset' : '');
    return h('div', data, children);
  }
};

SubHeader.install = function (Vue$$1) {
  Vue$$1.component(SubHeader.name, SubHeader);
};

theme.addCreateTheme(SubHeaderTheme);

var SwitchTheme = (function (theme) {
  return "\n  .mu-switch.disabled input[type=\"checkbox\"]:checked+.mu-switch-wrapper .mu-switch-track{\n    background-color: " + theme.track + ";\n  }\n  .mu-switch-checked {\n    color: " + theme.primary + ";\n  }\n  .mu-switch.disabled .mu-switch-label {\n    color: " + theme.text.disabled + ";\n  }\n  .mu-switch-label {\n    color: " + theme.text.primary + ";\n  }\n  .mu-switch.disabled .mu-switch-track {\n    background-color: " + theme.track + ";\n  }\n  .mu-switch-track {\n    background-color: " + theme.track + ";\n  }\n  .mu-switch-thumb {\n    background-color: " + theme.background.paper + ";\n  }\n  ";
});

var Switch = {
  name: 'mu-switch',
  mixins: [select('switch')],
  props: {
    inputValue: Boolean
  },
  computed: {
    checked: function checked() {
      return this.inputValue;
    }
  },
  methods: {
    toggle: function toggle() {
      this.$emit('change', !this.inputValue);
    }
  },
  render: function render(h) {
    var view = h('div', {
      staticClass: 'mu-switch-container'
    }, [h('div', { staticClass: 'mu-switch-track' }), this.createRipple(h, 'mu-switch-thumb')]);

    return this.createSelect(h, view);
  }
};

Switch.install = function (Vue$$1) {
  Vue$$1.component(Switch.name, Switch);
};

theme.addCreateTheme(SwitchTheme);

var TextFieldTheme = (function (theme) {
  return "\n  .mu-input {\n    color: " + theme.text.secondary + ";\n  }\n  .mu-input__focus {\n    color: " + theme.primary + ";\n  }\n  .mu-input__error {\n    color: " + theme.error + ";\n  }\n  .mu-input.disabled .mu-input-content {\n    color: " + theme.text.disabled + ";\n  }\n  .mu-input-help {\n    color: " + theme.text.secondary + ";\n  }\n  .mu-input__error .mu-input-help {\n    color: " + theme.error + ";\n  }\n  .mu-input.has-label .mu-input-label.float {\n    color: " + theme.text.disabled + ";\n  }\n  .mu-input-line {\n    background-color: " + theme.divider + ";\n  }\n  .mu-input-line.disabled{\n    border-bottom-color: " + theme.text.disabled + ";\n  }\n  .mu-input-suffix-text,\n  .mu-input-prefix-text {\n    color: " + theme.text.secondary + ";\n  }\n  .mu-text-field-input {\n    color: " + theme.text.primary + ";\n  }\n  .mu-text-field-suffix {\n    color: " + theme.text.secondary + ";\n  }\n  ";
});

var Textarea = {
  inheritAttrs: false,
  props: {
    disabled: Boolean,
    rows: {
      type: Number,
      default: 1
    },
    rowsMax: {
      type: Number
    },
    value: {
      type: String,
      default: ''
    }
  },
  mounted: function mounted() {
    this.resizeTextarea();
  },

  watch: {
    value: function value(val, oldVal) {
      var _this = this;

      this.$nextTick(function () {
        _this.resizeTextarea();
      });
    }
  },
  methods: {
    resizeTextarea: function resizeTextarea() {
      var element = this.$refs.textarea;
      if (!element) return;
      var hiddenEl = this.$refs.textareaHidden;
      var lineHeight = window.getComputedStyle(element, null).getPropertyValue('line-height');
      lineHeight = Number(lineHeight.substring(0, lineHeight.indexOf('px')));
      var pt = window.getComputedStyle(element, null).getPropertyValue('padding-top');
      pt = Number(pt.substring(0, pt.indexOf('px')));
      var pd = window.getComputedStyle(element, null).getPropertyValue('padding-bottom');
      pd = Number(pd.substring(0, pd.indexOf('px')));
      var minHeight = pd + pt + lineHeight * this.rows;
      var maxHeight = pd + pt + lineHeight * (this.rowsMax || this.rows);
      var height = hiddenEl.scrollHeight;
      element.style.height = (height < minHeight ? minHeight : height > maxHeight && maxHeight > 0 ? maxHeight : height) + 'px';
    }
  },
  render: function render(h) {
    return h('div', {
      staticClass: 'mu-text-field-multiline'
    }, [h('textarea', {
      staticClass: 'mu-text-field-textarea-hide mu-text-field-input',
      ref: 'textareaHidden',
      attrs: {
        rows: 1
      },
      domProps: {
        value: this.value || ' '
      }
    }), h('textarea', {
      staticClass: 'mu-text-field-input mu-text-field-textarea',
      ref: 'textarea',
      attrs: _extends({
        tabindex: 0
      }, this.$attrs, {
        disabled: this.disabled
      }),
      domProps: {
        value: this.value || ''
      },
      on: this.$listeners
    })]);
  }
};

var TextField = {
  name: 'mu-text-field',
  mixins: [input],
  props: {
    rows: {
      type: Number,
      default: 1
    },
    rowsMax: {
      type: Number
    },
    multiLine: Boolean,
    maxLength: [String, Number]
  },
  methods: {
    handleFocus: function handleFocus(e) {
      this.isFocused = true;
      this.$emit('focus', e);
    },
    handleBlur: function handleBlur(e) {
      this.isFocused = false;
      this.$emit('blur', e);
    },
    createTextField: function createTextField(h) {
      var _this = this;

      var listeners = _extends({}, this.$listeners, {
        input: function input$$1(e) {
          return _this.$emit('input', e.target.value, e);
        },
        change: function change(e) {
          return _this.$emit('change', e.target.value, e);
        },
        focus: this.handleFocus,
        blur: this.handleBlur
      });
      var placeholder = !this.labelFloat ? this.$attrs.placeholder : '';
      return [this.multiLine ? h(Textarea, {
        attrs: _extends({}, this.$attrs, {
          maxlength: this.maxLength,
          placeholder: placeholder
        }),
        props: {
          disabled: this.disabled,
          rows: this.rows,
          rowsMax: this.rowsMax,
          value: String(this.value || '')
        },
        on: listeners
      }) : h('input', {
        staticClass: 'mu-text-field-input',
        attrs: _extends({
          tabindex: 0
        }, this.$attrs, {
          maxlength: this.maxLength,
          disabled: this.disabled,
          placeholder: placeholder
        }),
        domProps: {
          value: this.value
        },
        on: listeners
      })];
    }
  },
  render: function render(h) {
    return this.createInput(h, {
      staticClass: 'mu-text-field'
    }, [this.createTextField(h), this.$slots.default]);
  }
};

TextField.install = function (Vue$$1) {
  Vue$$1.component(TextField.name, TextField);
};

theme.addCreateTheme(TextFieldTheme);

var version = '3.0.0-rc.7';
var components = {
  Alert: Alert, AppBar: AppBar, AutoComplete: AutoComplete, Avatar: Avatar,
  Badge: Badge, BottomNav: BottomNav, BottomSheet: BottomSheet, Breadcrumbs: Breadcrumbs, Button: Button,
  Card: Card, Carousel: Carousel, Checkbox: Checkbox, Chip: Chip,
  DataTable: DataTable, DateInput: DateInput, Dialog: Dialog, Divider: Divider, Drawer: Drawer,
  ExpansionPanel: ExpansionPanel, Form: Form, Grid: Grid, GridList: GridList, Helpers: Helpers, Icon: Icon,
  LoadMore: LoadMore, List: List, Menu: Menu,
  Pagination: Pagination, Paper: Paper, Picker: Picker, Popover: Popover, Progress: Progress, Radio: Radio,
  Select: Select, SlidePicker: Picker$1, Slider: Slider, Snackbar: Snackbar, Stepper: Stepper, SubHeader: SubHeader, Switch: Switch,
  Tabs: Tabs, TextField: TextField, Tooltip: Tooltip
};

function install(Vue$$1) {
  Object.keys(components).forEach(function (key) {
    Vue$$1.use(components[key]);
  });
}

if (typeof window !== 'undefined' && window.Vue) install(window.Vue);
var index$1 = _extends({
  version: version,
  install: install,
  theme: theme,
  Colors: colorsObj
}, components);

export default index$1;
export { version, colorsObj as Colors, Alert, AppBar, AutoComplete, Avatar, Badge, BottomNav, BottomSheet, Breadcrumbs, Button, Card, Carousel, Checkbox, Chip, DateInput, DataTable, Dialog, Divider, Drawer, ExpansionPanel, Form, Grid, GridList, Helpers, Icon, List, LoadMore, Menu, Pagination, Paper, Picker, Popover, Progress, Radio, Select, Picker$1 as SlidePicker, Slider, Snackbar, Stepper, SubHeader, Switch, Tabs, TextField, Tooltip, theme, install };
