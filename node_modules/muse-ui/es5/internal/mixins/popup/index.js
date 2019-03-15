import PopupManager from './manager';
import { getZIndex } from './utils';

export default {
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
    escPressClose: { // 按退出键是否触发关闭事件
      type: Boolean,
      default: true
    },
    appendBody: { // 是否添加到 body 元素后, 内部使用
      type: Boolean,
      default: true
    }
  },
  data: function data() {
    return {
      overlayZIndex: getZIndex(),
      zIndex: getZIndex()
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
      this.overlayZIndex = getZIndex();
      this.zIndex = getZIndex();
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
      PopupManager.open(this);
      this.appendPopupElToBody();
    }
  },
  beforeDestroy: function beforeDestroy() {
    PopupManager.close(this);
    if (this.appendBody) {
      if (!this.$el) return;
      if (this.$el.parentNode) this.$el.parentNode.removeChild(this.$el);
    }
  },

  watch: {
    open: function open(val, oldVal) {
      if (val) {
        this.resetZIndex();
        PopupManager.open(this);
        this.appendPopupElToBody();
      } else {
        PopupManager.close(this);
      }
    }
  }
};