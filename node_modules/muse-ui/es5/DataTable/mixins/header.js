var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import Checkbox from '../../Checkbox';
import Tooltip from '../../Tooltip';

export default {
  methods: {
    toggleSelectAll: function toggleSelectAll(val) {
      this.isSelectAll = val;
      var selects = [];
      if (this.isSelectAll) {
        var i = 0;
        while (i < this.data.length) {
          selects.push(i++);
        }
      }
      this.$emit('update:selects', selects);
    },
    handleSortChange: function handleSortChange(column) {
      var sort = _extends({}, this.sort);

      if (this.sort && this.sort.name === column.name) {
        sort.order = sort.order === 'desc' ? 'asc' : 'desc';
      } else {
        sort.name = column.name;
        sort.order = 'desc';
      }

      this.$emit('update:sort', sort);
      this.$emit('sort-change', sort);
    },
    createSlotHeader: function createSlotHeader() {
      return this.$scopedSlots.header({
        columns: this.columns
      });
    },
    createSlotTh: function createSlotTh(column) {
      return this.$scopedSlots.th(_extends({}, column));
    },
    createDefaultTh: function createDefaultTh(h, column) {
      return [column.sortable ? h('svg', {
        staticClass: 'mu-table-sort-icon',
        attrs: {
          viewBox: '0 0 24 24'
        }
      }, [h('path', {
        attrs: {
          d: 'M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z'
        }
      })]) : undefined, column.title];
    },
    createTh: function createTh(h, column) {
      return this.$scopedSlots.th ? this.createSlotTh(column) : this.createDefaultTh(h, column);
    },
    createCheckboxTh: function createCheckboxTh(h) {
      var isEnable = this.selectable && this.selectAll;
      return h('th', {
        staticClass: 'mu-checkbox-col'
      }, [h(Checkbox, {
        props: {
          inputValue: this.isSelectAll,
          disabled: !isEnable
        },
        on: {
          change: this.toggleSelectAll
        }
      })]);
    },
    createTHeader: function createTHeader(h) {
      var _this = this;

      var arr = this.columns.map(function (column) {
        var th = h('th', {
          class: [column.align ? 'is-' + column.align : '', column.class || '', column.sortable ? 'is-sortable' : '', column.sortable && _this.sort && _this.sort.name === column.name ? 'is-sorting' : '', column.sortable && _this.sort && _this.sort.name === column.name && _this.sort.order === 'asc' ? 'sort-asc' : ''],
          on: {
            click: function click() {
              return column.sortable && _this.handleSortChange(column);
            }
          }
        }, _this.createTh(h, column));

        return column.tooltip ? h(Tooltip, {
          props: {
            content: column.tooltip
          }
        }, [th]) : th;
      });

      if (this.checkbox) arr.unshift(this.createCheckboxTh(h));
      return h('tr', {}, arr);
    },
    createHeader: function createHeader(h) {
      return h('div', {
        staticClass: 'mu-table-header-wrapper',
        ref: 'header',
        directives: [{
          name: 'mousewheel',
          value: this.handleHeaderFooterMousewheel
        }]
      }, [h('table', {
        staticClass: 'mu-table-header',
        style: {
          width: this.tableWidth
        }
      }, [this.createColGroup(h), h('thead', {}, [this.$scopedSlots.header ? this.createSlotHeader() : this.createTHeader(h)])])]);
    }
  }
};