import resize from '../../internal/directives/resize';
export default {
  props: {
    minColWidth: {
      type: Number,
      default: 128
    },
    checkboxColWidth: {
      type: Number,
      default: 75
    }
  },
  data: function data() {
    return {
      cols: [],
      tableWidth: ''
    };
  },
  mounted: function mounted() {
    this.setCols();
  },

  methods: {
    setCols: function setCols() {
      var _this = this;

      var tableElWidth = this.$el.offsetWidth;
      var widthArr = this.columns.filter(function (column) {
        return column.width;
      }).map(function (column) {
        return Number(column.width);
      });
      widthArr.forEach(function (width) {
        return tableElWidth -= width;
      });
      if (this.checkbox) tableElWidth -= this.checkboxColWidth;

      var otherWidth = Math.floor(tableElWidth / (this.columns.length - widthArr.length));

      if (otherWidth < this.minColWidth) otherWidth = this.minColWidth;
      this.cols = this.columns.map(function (column) {
        return column.width ? column.width : _this.fit ? otherWidth : _this.minColWidth;
      });
      if (this.checkbox) this.cols.unshift(this.checkboxColWidth);
      var tableWidth = 0;
      this.cols.forEach(function (width) {
        return tableWidth += Number(width);
      });
      this.tableWidth = tableWidth + 'px';
    },
    createColGroup: function createColGroup(h) {
      return h('colgroup', {}, this.cols.map(function (width) {
        return h('col', {
          attrs: {
            width: width
          }
        });
      }));
    }
  },
  watch: {
    columns: function columns() {
      this.setCols();
    }
  },
  directives: {
    resize: resize
  }
};