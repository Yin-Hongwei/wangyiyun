import header from './mixins/header';
import body from './mixins/body';
import footer from './mixins/footer';
import colgroup from './mixins/colgroup';
import progress from './mixins/progress';
import mousewheel from '../internal/directives/mousewheel';
import { addResizeListener, removeResizeListener } from '../utils/resize-event';
import { getWidth } from '../utils';

export default {
  name: 'mu-data-table',
  mixins: [header, body, footer, colgroup, progress],
  props: {
    data: Array,
    columns: Array,
    noDataText: {
      type: String,
      default: '暂无数据'
    },
    height: [String, Number],
    maxHeight: [String, Number],
    selectAll: Boolean,
    selectable: Boolean,
    selects: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    sort: {
      type: Object
    },
    checkbox: Boolean,
    stripe: Boolean,
    border: Boolean,
    loading: Boolean,
    hideHeader: Boolean,
    rowClassName: [String, Function],
    rowStyle: [Object, Function],
    rowKey: {
      type: String,
      default: 'id'
    },
    fit: {
      type: Boolean,
      default: true
    },
    hover: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    handleHeaderFooterMousewheel: function handleHeaderFooterMousewheel(event, data) {
      var pixelX = data.pixelX,
          pixelY = data.pixelY;

      if (Math.abs(pixelX) >= Math.abs(pixelY)) {
        event.preventDefault();
        if (!this.$refs.body) return;
        this.$refs.body.scrollLeft += data.pixelX / 5;
      }
    },
    resizeListener: function resizeListener() {
      this.setCols();
    }
  },
  mounted: function mounted() {
    if (this.fit) {
      addResizeListener(this.$el, this.resizeListener);
    }
  },
  beforeDestroy: function beforeDestroy() {
    if (this.resizeListener) removeResizeListener(this.$el, this.resizeListener);
  },
  render: function render(h) {
    return h('div', {
      staticClass: 'mu-table',
      class: {
        'mu-table-border': this.border,
        'mu-table-flex': this.maxHeight || this.height
      },
      style: {
        'max-height': getWidth(this.maxHeight),
        'height': getWidth(this.height)
      }
    }, [!this.hideHeader ? this.createHeader(h) : undefined, this.createProgress(h), this.createBody(h), this.createFooter(h)]);
  },

  directives: {
    mousewheel: mousewheel
  }
};