'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  methods: {
    createFooter: function createFooter(h) {
      return this.$scopedSlots.footer ? h('div', {
        staticClass: 'mu-table-footer-wrapper',
        ref: 'footer'
      }, [h('table', {
        staticClass: 'mu-table-footer',
        style: {
          width: this.tableWidth
        }
      }, [this.createColGroup(h), h('tbody', {}, this.$scopedSlots.footer({
        columns: this.columns
      }))])]) : undefined;
    }
  }
};