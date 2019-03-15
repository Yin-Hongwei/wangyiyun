'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _manager = require('./manager');

var _manager2 = _interopRequireDefault(_manager);

var _utils = require('./utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
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
    escPressClose: {
      type: Boolean,
      default: true
    },
    appendBody: {
      type: Boolean,
      default: true
    }
  },
  data: function data() {
    return {
      overlayZIndex: (0, _utils.getZIndex)(),
      zIndex: (0, _utils.getZIndex)()
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
      this.overlayZIndex = (0, _utils.getZIndex)();
      this.zIndex = (0, _utils.getZIndex)();
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
      _manager2.default.open(this);
      this.appendPopupElToBody();
    }
  },
  beforeDestroy: function beforeDestroy() {
    _manager2.default.close(this);
    if (this.appendBody) {
      if (!this.$el) return;
      if (this.$el.parentNode) this.$el.parentNode.removeChild(this.$el);
    }
  },

  watch: {
    open: function open(val, oldVal) {
      if (val) {
        this.resetZIndex();
        _manager2.default.open(this);
        this.appendPopupElToBody();
      } else {
        _manager2.default.close(this);
      }
    }
  }
};