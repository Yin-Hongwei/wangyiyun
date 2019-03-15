'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _colors = require('./colors');

var Colors = _interopRequireWildcard(_colors);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.default = {
  type: 'dark',
  primary: Colors.blue700,
  secondary: Colors.pinkA200,
  success: Colors.green,
  warning: Colors.yellow600,
  info: Colors.blue,
  error: Colors.red,
  track: Colors.grey600,
  text: {
    primary: Colors.white,
    secondary: 'rgba(255, 255, 255, 0.7)',
    alternate: '#303030',
    disabled: 'rgba(255, 255, 255, 0.3)',
    hint: 'rgba(255, 255, 255, 0.3)' },
  divider: 'rgba(255, 255, 255, 0.3)',
  background: {
    paper: Colors.grey800,
    chip: Colors.grey700,
    default: '#303030'
  }
};