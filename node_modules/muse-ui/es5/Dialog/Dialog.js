function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import popup from '../internal/mixins/popup';
import { convertClass, getWidth } from '../utils';

export default {
  name: 'mu-dialog',
  mixins: [popup],
  props: {
    dialogClass: [String, Array, Object],
    title: String,
    scrollable: Boolean,
    fullscreen: Boolean,
    width: [String, Number],
    maxWidth: [String, Number],
    transition: {
      type: String,
      default: 'scale',
      validator: function validator(val) {
        return ['slide-top', 'slide-bottom', 'slide-left', 'slide-right', 'fade', 'scale'];
      }
    }
  },
  mounted: function mounted() {
    this.setMaxDialogContentHeight();
  },
  updated: function updated() {
    var _this = this;

    this.$nextTick(function () {
      _this.setMaxDialogContentHeight();
    });
  },

  methods: {
    handleWrapperClick: function handleWrapperClick(e) {
      if (this.$el !== e.target) return;
      this.overlayClick(e);
    },
    setMaxDialogContentHeight: function setMaxDialogContentHeight() {
      var dialogEl = this.$refs.dialog;
      if (!dialogEl) return;
      if (!this.scrollable) {
        dialogEl.style.maxHeight = '';
        return;
      }

      var maxDialogContentHeight = window.innerHeight - 2 * 64;
      var _$refs = this.$refs,
          footer = _$refs.footer,
          title = _$refs.title,
          elBody = _$refs.elBody;

      if (footer) maxDialogContentHeight -= footer.offsetHeight;
      if (title) maxDialogContentHeight -= title.offsetHeight;
      if (elBody) {
        var maxBodyHeight = maxDialogContentHeight;
        if (footer) maxBodyHeight -= footer.offsetHeight;
        if (title) maxBodyHeight -= title.offsetHeight;
        elBody.style.maxHeight = maxBodyHeight + 'px';
      }
      dialogEl.style.maxHeight = maxDialogContentHeight + 'px';
    }
  },
  watch: {
    open: function open(newValue) {
      var _this2 = this;

      if (!newValue) return;
      this.$nextTick(function () {
        _this2.setMaxDialogContentHeight();
      });
    }
  },
  render: function render(h) {
    var hasTitleSlots = this.$slots.title && this.$slots.title.length > 0;
    var isShowTitle = this.title || hasTitleSlots;
    var dialogTitle = isShowTitle ? h('div', {
      staticClass: 'mu-dialog-title',
      ref: 'title'
    }, hasTitleSlots ? this.$slots.title : this.title) : undefined;

    var dialogBody = h('div', {
      staticClass: 'mu-dialog-body',
      ref: 'elBody'
    }, this.$slots.default);

    var dialogActions = this.$slots.actions && this.$slots.actions.length > 0 ? h('div', {
      staticClass: 'mu-dialog-actions',
      ref: 'footer'
    }, this.$slots.actions) : undefined;

    var data = {
      staticClass: 'mu-dialog ' + convertClass(this.dialogClass).join(' '),
      class: _defineProperty({
        'mu-dialog-fullscreen': this.fullscreen,
        'mu-dialog-scrollable': this.scrollable
      }, 'mu-' + this.transition, true),
      ref: 'dialog'
    };

    if (!this.fullscreen) {
      data.style = {
        'max-width': this.maxWidth === 'auto' ? undefined : getWidth(this.maxWidth),
        'width': this.width === 'auto' ? undefined : getWidth(this.width)
      };
    }
    var dialog = h('div', data, [dialogTitle, dialogBody, dialogActions]);

    return this.open ? h('transition', {
      props: {
        name: 'mu-dialog-transition'
      }
    }, [h('div', {
      staticClass: 'mu-dialog-wrapper',
      style: {
        'z-index': this.zIndex
      },
      on: {
        click: this.handleWrapperClick
      }
    }, [dialog])]) : null;
  }
};