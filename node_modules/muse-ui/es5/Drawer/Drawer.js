import Paper from '../Paper';
import PopupManager from '../internal/mixins/popup/manager';
import { getZIndex } from '../internal/mixins/popup/utils';
import { getWidth } from '../utils';

var transitionEvents = ['msTransitionEnd', 'mozTransitionEnd', 'oTransitionEnd', 'webkitTransitionEnd', 'transitionend'];
export default {
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