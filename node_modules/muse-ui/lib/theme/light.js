'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _colors = require('./colors');

var Colors = _interopRequireWildcard(_colors);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.default = {
  type: 'light',
  primary: Colors.blue,
  secondary: Colors.pinkA200,
  success: Colors.green,
  warning: Colors.yellow600,
  info: Colors.blue,
  error: Colors.red,
  track: Colors.grey400,
  text: {
    primary: Colors.darkBlack,
    secondary: Colors.lightBlack,
    alternate: Colors.white,
    disabled: 'rgba(0, 0, 0, 0.38)',
    hint: 'rgba(0, 0, 0, 0.38)' },
  divider: Colors.faintBlack,
  background: {
    paper: Colors.white,
    chip: Colors.grey300,
    default: Colors.grey50
  }
};