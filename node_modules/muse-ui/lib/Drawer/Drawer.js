'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Paper = require('../Paper');

var _Paper2 = _interopRequireDefault(_Paper);

var _manager = require('../internal/mixins/popup/manager');

var _manager2 = _interopRequireDefault(_manager);

var _utils = require('../internal/mixins/popup/utils');

var _utils2 = require('../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var transitionEvents = ['msTransitionEnd', 'mozTransitionEnd', 'oTransitionEnd', 'webkitTransitionEnd', 'transitionend'];
exports.default = {
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
      overlayZIndex: (0, _utils.getZIndex)(),
      zIndex: (0, _utils.getZIndex)()
    };
  },

  computed: {
    drawerStyle: function drawerStyle() {
      return {
        width: (0, _utils2.getWidth)(this.width),
        'z-index': this.docked ? '' : this.zIndex
      };
    },
    overlay: function overlay() {
      return !this.docked;
    }
  },
  mounted: function mounted() {
    if (this.open && !this.docked) _manager2.default.open(this);
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
      this.overlayZIndex = (0, _utils.getZIndex)();
      this.zIndex = (0, _utils.getZIndex)();
    }
  },
  beforeDestroy: function beforeDestroy() {
    _manager2.default.close(this);
    this.unBindTransition();
  },

  watch: {
    open: function open(val) {
      if (val && !this.docked) {
        _manager2.default.open(this);
      } else {
        _manager2.default.close(this);
      }
    },
    docked: function docked(val, oldVal) {
      if (val && !oldVal) {
        _manager2.default.close(this);
      }
    }
  },
  render: function render(h) {
    return h(_Paper2.default, {
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