'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  props: {
    selected: Boolean,
    date: Date,
    disabled: Boolean
  },
  data: function data() {
    return {
      hover: false
    };
  },

  computed: {
    isNow: function isNow() {
      var now = new Date();
      return this.date && this.date.getYear() === now.getYear() && this.date.getMonth() === now.getMonth() && this.date.getDate() === now.getDate();
    },
    dayButtonClass: function dayButtonClass() {
      return {
        selected: this.selected,
        disabled: this.disabled,
        now: this.isNow
      };
    }
  },
  render: function render(h) {
    return this.date ? h('button', {
      staticClass: 'mu-day-button',
      class: this.dayButtonClass,
      on: this.$listeners,
      domProps: {
        disabled: this.disabled
      }
    }, [h('div', { class: 'mu-day-button-bg' }), h('span', {
      class: 'mu-day-button-text',
      domProps: {
        innerHTML: this.date.getDate()
      }
    })]) : h('span', { class: 'mu-day-empty' });
  }
};