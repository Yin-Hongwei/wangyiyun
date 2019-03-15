var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import './styles/base.less';
import Alert from './Alert';
import AppBar from './AppBar';
import AutoComplete from './AutoComplete';
import Avatar from './Avatar';
import Badge from './Badge';
import BottomNav from './BottomNav';
import BottomSheet from './BottomSheet';
import Breadcrumbs from './Breadcrumbs';
import Button from './Button';
import Card from './Card';
import Carousel from './Carousel';
import Checkbox from './Checkbox';
import Chip from './Chip';
import DateInput from './DateInput';
import DataTable from './DataTable';
import Dialog from './Dialog';
import Divider from './Divider';
import Drawer from './Drawer';
import ExpansionPanel from './ExpansionPanel';
import Form from './Form';
import Grid from './Grid';
import GridList from './GridList';
import Helpers from './Helpers';
import Icon from './Icon';
import List from './List';
import LoadMore from './LoadMore';
import Menu from './Menu';
import Pagination from './Pagination';
import Paper from './Paper';
import Picker from './Picker';
import Popover from './Popover';
import Progress from './Progress';
import Radio from './Radio';
import Select from './Select';
import SlidePicker from './SlidePicker';
import Slider from './Slider';
import Snackbar from './Snackbar';
import Stepper from './Stepper';
import SubHeader from './SubHeader';
import Switch from './Switch';
import Tabs from './Tabs';
import TextField from './TextField';
import Tooltip from './Tooltip';
import './styles/theme.less';
import theme from './theme';
import * as Colors from './theme/colors';

var version = '__VERSION__';
var components = {
  Alert: Alert, AppBar: AppBar, AutoComplete: AutoComplete, Avatar: Avatar,
  Badge: Badge, BottomNav: BottomNav, BottomSheet: BottomSheet, Breadcrumbs: Breadcrumbs, Button: Button,
  Card: Card, Carousel: Carousel, Checkbox: Checkbox, Chip: Chip,
  DataTable: DataTable, DateInput: DateInput, Dialog: Dialog, Divider: Divider, Drawer: Drawer,
  ExpansionPanel: ExpansionPanel, Form: Form, Grid: Grid, GridList: GridList, Helpers: Helpers, Icon: Icon,
  LoadMore: LoadMore, List: List, Menu: Menu,
  Pagination: Pagination, Paper: Paper, Picker: Picker, Popover: Popover, Progress: Progress, Radio: Radio,
  Select: Select, SlidePicker: SlidePicker, Slider: Slider, Snackbar: Snackbar, Stepper: Stepper, SubHeader: SubHeader, Switch: Switch,
  Tabs: Tabs, TextField: TextField, Tooltip: Tooltip
};

function install(Vue) {
  Object.keys(components).forEach(function (key) {
    Vue.use(components[key]);
  });
}

if (typeof window !== 'undefined' && window.Vue) install(window.Vue);

export { version, Colors, Alert, AppBar, AutoComplete, Avatar, Badge, BottomNav, BottomSheet, Breadcrumbs, Button, Card, Carousel, Checkbox, Chip, DateInput, DataTable, Dialog, Divider, Drawer, ExpansionPanel, Form, Grid, GridList, Helpers, Icon, List, LoadMore, Menu, Pagination, Paper, Picker, Popover, Progress, Radio, Select, SlidePicker, Slider, Snackbar, Stepper, SubHeader, Switch, Tabs, TextField, Tooltip, theme, install };
export default _extends({
  version: version,
  install: install,
  theme: theme,
  Colors: Colors
}, components);