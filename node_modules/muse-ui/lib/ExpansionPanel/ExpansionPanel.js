'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Paper = require('../Paper');

var _Paper2 = _interopRequireDefault(_Paper);

var _Button = require('../Button');

var _Button2 = _interopRequireDefault(_Button);

var _transitions = require('../internal/transitions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'mu-expansion-panel',
  props: {
    expand: Boolean,
    zDepth: {
      type: Number,
      default: 2
    }
  },
  data: function data() {
    return {
      show: this.expand
    };
  },

  methods: {
    createToggleIcon: function createToggleIcon(h) {
      return h('svg', {
        staticClass: '',
        attrs: {
          viewBox: '0 0 24 24'
        }
      }, [h('g', {}, [h('path', {
        attrs: {
          d: 'M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z'
        }
      })])]);
    },
    createHeader: function createHeader(h) {
      var _this = this;

      return h('div', {
        staticClass: 'mu-expansion-panel-header',
        on: {
          click: function click() {
            _this.show = !_this.show;
            _this.$emit('update:expand', _this.show);
            _this.$emit('change', _this.show);
          }
        }
      }, [this.$slots.header, h(_Button2.default, {
        staticClass: 'mu-expansion-toggle-btn',
        props: {
          icon: true
        },
        attrs: {
          tabindex: -1
        }
      }, [this.createToggleIcon(h)])]);
    },
    createContainer: function createContainer(h) {
      return h(_transitions.ExpandTransition, {}, [h('div', {
        staticClass: 'mu-expansion-panel-container',
        directives: [{
          name: 'show',
          value: this.show
        }]
      }, [this.createContent(h), this.createActions(h)])]);
    },
    createContent: function createContent(h) {
      return h('div', {
        staticClass: 'mu-expansion-panel-content'
      }, this.$slots.default);
    },
    createActions: function createActions(h) {
      return this.$slots.action && this.$slots.action.length > 0 ? h('div', {
        staticClass: 'mu-expansion-panel-actions'
      }, this.$slots.action) : undefined;
    }
  },
  render: function render(h) {
    return h(_Paper2.default, {
      staticClass: 'mu-expansion-panel',
      class: {
        'mu-expansion-panel__expand': this.show
      },
      props: {
        zDepth: this.zDepth,
        rounded: false
      }
    }, [this.createHeader(h), this.createContainer(h)]);
  },

  watch: {
    expand: function expand(val) {
      this.show = val;
    }
  }
};