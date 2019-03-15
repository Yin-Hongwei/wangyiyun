'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = require('../utils');

var _resize = require('../internal/directives/resize');

var _resize2 = _interopRequireDefault(_resize);

var _color = require('../internal/mixins/color');

var _color2 = _interopRequireDefault(_color);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'mu-tabs',
  mixins: [_color2.default],
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
      activeValue: (0, _utils.isNotNull)(this.value) ? this.value : 0
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
    resize: _resize2.default
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