'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.install = exports.theme = exports.Tooltip = exports.TextField = exports.Tabs = exports.Switch = exports.SubHeader = exports.Stepper = exports.Snackbar = exports.Slider = exports.SlidePicker = exports.Select = exports.Radio = exports.Progress = exports.Popover = exports.Picker = exports.Paper = exports.Pagination = exports.Menu = exports.LoadMore = exports.List = exports.Icon = exports.Helpers = exports.GridList = exports.Grid = exports.Form = exports.ExpansionPanel = exports.Drawer = exports.Divider = exports.Dialog = exports.DataTable = exports.DateInput = exports.Chip = exports.Checkbox = exports.Carousel = exports.Card = exports.Button = exports.Breadcrumbs = exports.BottomSheet = exports.BottomNav = exports.Badge = exports.Avatar = exports.AutoComplete = exports.AppBar = exports.Alert = exports.Colors = exports.version = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

require('./styles/base.less');

var _Alert = require('./Alert');

var _Alert2 = _interopRequireDefault(_Alert);

var _AppBar = require('./AppBar');

var _AppBar2 = _interopRequireDefault(_AppBar);

var _AutoComplete = require('./AutoComplete');

var _AutoComplete2 = _interopRequireDefault(_AutoComplete);

var _Avatar = require('./Avatar');

var _Avatar2 = _interopRequireDefault(_Avatar);

var _Badge = require('./Badge');

var _Badge2 = _interopRequireDefault(_Badge);

var _BottomNav = require('./BottomNav');

var _BottomNav2 = _interopRequireDefault(_BottomNav);

var _BottomSheet = require('./BottomSheet');

var _BottomSheet2 = _interopRequireDefault(_BottomSheet);

var _Breadcrumbs = require('./Breadcrumbs');

var _Breadcrumbs2 = _interopRequireDefault(_Breadcrumbs);

var _Button = require('./Button');

var _Button2 = _interopRequireDefault(_Button);

var _Card = require('./Card');

var _Card2 = _interopRequireDefault(_Card);

var _Carousel = require('./Carousel');

var _Carousel2 = _interopRequireDefault(_Carousel);

var _Checkbox = require('./Checkbox');

var _Checkbox2 = _interopRequireDefault(_Checkbox);

var _Chip = require('./Chip');

var _Chip2 = _interopRequireDefault(_Chip);

var _DateInput = require('./DateInput');

var _DateInput2 = _interopRequireDefault(_DateInput);

var _DataTable = require('./DataTable');

var _DataTable2 = _interopRequireDefault(_DataTable);

var _Dialog = require('./Dialog');

var _Dialog2 = _interopRequireDefault(_Dialog);

var _Divider = require('./Divider');

var _Divider2 = _interopRequireDefault(_Divider);

var _Drawer = require('./Drawer');

var _Drawer2 = _interopRequireDefault(_Drawer);

var _ExpansionPanel = require('./ExpansionPanel');

var _ExpansionPanel2 = _interopRequireDefault(_ExpansionPanel);

var _Form = require('./Form');

var _Form2 = _interopRequireDefault(_Form);

var _Grid = require('./Grid');

var _Grid2 = _interopRequireDefault(_Grid);

var _GridList = require('./GridList');

var _GridList2 = _interopRequireDefault(_GridList);

var _Helpers = require('./Helpers');

var _Helpers2 = _interopRequireDefault(_Helpers);

var _Icon = require('./Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _List = require('./List');

var _List2 = _interopRequireDefault(_List);

var _LoadMore = require('./LoadMore');

var _LoadMore2 = _interopRequireDefault(_LoadMore);

var _Menu = require('./Menu');

var _Menu2 = _interopRequireDefault(_Menu);

var _Pagination = require('./Pagination');

var _Pagination2 = _interopRequireDefault(_Pagination);

var _Paper = require('./Paper');

var _Paper2 = _interopRequireDefault(_Paper);

var _Picker = require('./Picker');

var _Picker2 = _interopRequireDefault(_Picker);

var _Popover = require('./Popover');

var _Popover2 = _interopRequireDefault(_Popover);

var _Progress = require('./Progress');

var _Progress2 = _interopRequireDefault(_Progress);

var _Radio = require('./Radio');

var _Radio2 = _interopRequireDefault(_Radio);

var _Select = require('./Select');

var _Select2 = _interopRequireDefault(_Select);

var _SlidePicker = require('./SlidePicker');

var _SlidePicker2 = _interopRequireDefault(_SlidePicker);

var _Slider = require('./Slider');

var _Slider2 = _interopRequireDefault(_Slider);

var _Snackbar = require('./Snackbar');

var _Snackbar2 = _interopRequireDefault(_Snackbar);

var _Stepper = require('./Stepper');

var _Stepper2 = _interopRequireDefault(_Stepper);

var _SubHeader = require('./SubHeader');

var _SubHeader2 = _interopRequireDefault(_SubHeader);

var _Switch = require('./Switch');

var _Switch2 = _interopRequireDefault(_Switch);

var _Tabs = require('./Tabs');

var _Tabs2 = _interopRequireDefault(_Tabs);

var _TextField = require('./TextField');

var _TextField2 = _interopRequireDefault(_TextField);

var _Tooltip = require('./Tooltip');

var _Tooltip2 = _interopRequireDefault(_Tooltip);

require('./styles/theme.less');

var _theme = require('./theme');

var _theme2 = _interopRequireDefault(_theme);

var _colors = require('./theme/colors');

var Colors = _interopRequireWildcard(_colors);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var version = '__VERSION__';
var components = {
  Alert: _Alert2.default, AppBar: _AppBar2.default, AutoComplete: _AutoComplete2.default, Avatar: _Avatar2.default,
  Badge: _Badge2.default, BottomNav: _BottomNav2.default, BottomSheet: _BottomSheet2.default, Breadcrumbs: _Breadcrumbs2.default, Button: _Button2.default,
  Card: _Card2.default, Carousel: _Carousel2.default, Checkbox: _Checkbox2.default, Chip: _Chip2.default,
  DataTable: _DataTable2.default, DateInput: _DateInput2.default, Dialog: _Dialog2.default, Divider: _Divider2.default, Drawer: _Drawer2.default,
  ExpansionPanel: _ExpansionPanel2.default, Form: _Form2.default, Grid: _Grid2.default, GridList: _GridList2.default, Helpers: _Helpers2.default, Icon: _Icon2.default,
  LoadMore: _LoadMore2.default, List: _List2.default, Menu: _Menu2.default,
  Pagination: _Pagination2.default, Paper: _Paper2.default, Picker: _Picker2.default, Popover: _Popover2.default, Progress: _Progress2.default, Radio: _Radio2.default,
  Select: _Select2.default, SlidePicker: _SlidePicker2.default, Slider: _Slider2.default, Snackbar: _Snackbar2.default, Stepper: _Stepper2.default, SubHeader: _SubHeader2.default, Switch: _Switch2.default,
  Tabs: _Tabs2.default, TextField: _TextField2.default, Tooltip: _Tooltip2.default
};

function install(Vue) {
  Object.keys(components).forEach(function (key) {
    Vue.use(components[key]);
  });
}

if (typeof window !== 'undefined' && window.Vue) install(window.Vue);

exports.version = version;
exports.Colors = Colors;
exports.Alert = _Alert2.default;
exports.AppBar = _AppBar2.default;
exports.AutoComplete = _AutoComplete2.default;
exports.Avatar = _Avatar2.default;
exports.Badge = _Badge2.default;
exports.BottomNav = _BottomNav2.default;
exports.BottomSheet = _BottomSheet2.default;
exports.Breadcrumbs = _Breadcrumbs2.default;
exports.Button = _Button2.default;
exports.Card = _Card2.default;
exports.Carousel = _Carousel2.default;
exports.Checkbox = _Checkbox2.default;
exports.Chip = _Chip2.default;
exports.DateInput = _DateInput2.default;
exports.DataTable = _DataTable2.default;
exports.Dialog = _Dialog2.default;
exports.Divider = _Divider2.default;
exports.Drawer = _Drawer2.default;
exports.ExpansionPanel = _ExpansionPanel2.default;
exports.Form = _Form2.default;
exports.Grid = _Grid2.default;
exports.GridList = _GridList2.default;
exports.Helpers = _Helpers2.default;
exports.Icon = _Icon2.default;
exports.List = _List2.default;
exports.LoadMore = _LoadMore2.default;
exports.Menu = _Menu2.default;
exports.Pagination = _Pagination2.default;
exports.Paper = _Paper2.default;
exports.Picker = _Picker2.default;
exports.Popover = _Popover2.default;
exports.Progress = _Progress2.default;
exports.Radio = _Radio2.default;
exports.Select = _Select2.default;
exports.SlidePicker = _SlidePicker2.default;
exports.Slider = _Slider2.default;
exports.Snackbar = _Snackbar2.default;
exports.Stepper = _Stepper2.default;
exports.SubHeader = _SubHeader2.default;
exports.Switch = _Switch2.default;
exports.Tabs = _Tabs2.default;
exports.TextField = _TextField2.default;
exports.Tooltip = _Tooltip2.default;
exports.theme = _theme2.default;
exports.install = install;
exports.default = _extends({
  version: version,
  install: install,
  theme: _theme2.default,
  Colors: Colors
}, components);