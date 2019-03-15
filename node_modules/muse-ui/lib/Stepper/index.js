'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StepContent = exports.StepConnector = exports.StepButton = exports.StepLabel = exports.Step = exports.Stepper = undefined;

require('../styles/components/stepper.less');

var _theme = require('../theme');

var _theme2 = _interopRequireDefault(_theme);

var _theme3 = require('./theme');

var _theme4 = _interopRequireDefault(_theme3);

var _Stepper = require('./Stepper');

var _Stepper2 = _interopRequireDefault(_Stepper);

var _Step = require('./Step');

var _Step2 = _interopRequireDefault(_Step);

var _StepLabel = require('./StepLabel');

var _StepLabel2 = _interopRequireDefault(_StepLabel);

var _StepButton = require('./StepButton');

var _StepButton2 = _interopRequireDefault(_StepButton);

var _StepConnector = require('./StepConnector');

var _StepConnector2 = _interopRequireDefault(_StepConnector);

var _StepContent = require('./StepContent');

var _StepContent2 = _interopRequireDefault(_StepContent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_Stepper2.default.install = function (Vue) {
  Vue.component(_Stepper2.default.name, _Stepper2.default);
  Vue.component(_Step2.default.name, _Step2.default);
  Vue.component(_StepLabel2.default.name, _StepLabel2.default);
  Vue.component(_StepButton2.default.name, _StepButton2.default);
  Vue.component(_StepConnector2.default.name, _StepConnector2.default);
  Vue.component(_StepContent2.default.name, _StepContent2.default);
};

_theme2.default.addCreateTheme(_theme4.default);
exports.Stepper = _Stepper2.default;
exports.Step = _Step2.default;
exports.StepLabel = _StepLabel2.default;
exports.StepButton = _StepButton2.default;
exports.StepConnector = _StepConnector2.default;
exports.StepContent = _StepContent2.default;
exports.default = _Stepper2.default;