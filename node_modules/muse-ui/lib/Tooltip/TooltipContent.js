'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _popup = require('../internal/mixins/popup');

var _popup2 = _interopRequireDefault(_popup);

var _resize = require('../internal/directives/resize');

var _resize2 = _interopRequireDefault(_resize);

var _scroll = require('../internal/directives/scroll');

var _scroll2 = _interopRequireDefault(_scroll);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SPACE = 8;
exports.default = {
  name: 'mu-tooltip-content',
  mixins: [_popup2.default],
  directives: {
    resize: _resize2.default,
    scroll: _scroll2.default
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
          return react.left - width - SPACE;
        case 'right':
        case 'right-start':
        case 'right-end':
          return react.left + react.width + SPACE;
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
          return react.top - height - SPACE;
        case 'bottom':
        case 'bottom-start':
        case 'bottom-end':
          return react.top + react.height + SPACE;
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