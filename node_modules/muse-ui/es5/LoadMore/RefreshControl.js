import Circular from '../Progress/Circular';
import { transitionEnd, getScrollEventTarget } from '../utils/dom';
import Drag from '../utils/drag';

var LENGTH = 130; // 下拉最大长度
var INITY = -68; // 初始化Y轴位置

export default {
  name: 'mu-refresh-control',
  props: {
    refreshing: Boolean,
    trigger: {}
  },
  data: function data() {
    return {
      y: 0,
      draging: false,
      state: 'ready'
    };
  },

  computed: {
    refreshStyle: function refreshStyle() {
      var style = {};
      if (!this.refreshing && this.draging) {
        var translate3d = 'translate3d(0, ' + (this.y + INITY) + 'px, 0) ';
        style['-webkit-transform'] = style['transform'] = translate3d;
      }
      return style;
    },
    circularStyle: function circularStyle() {
      var style = {};
      if (!this.refreshing && this.draging) {
        var percentage = this.y / LENGTH;
        var rotate = 'rotate(' + 360 * percentage + 'deg)';
        var opacity = this.y / Math.abs(INITY);
        style['-webkit-transform'] = style['transform'] = rotate;
        style['opacity'] = opacity;
      }
      return style;
    },
    refreshClass: function refreshClass() {
      var classNames = [];
      switch (this.state) {
        case 'ready':
          classNames.push('mu-refresh-control-noshow');
          break;
        case 'dragStart':
          classNames.push('mu-refresh-control-hide');
          break;
        case 'dragAnimate':
          classNames.push('mu-refresh-control-animate');
          classNames.push('mu-refresh-control-hide');
          break;
        case 'refreshAnimate':
          classNames.push('mu-refresh-control-animate');
          classNames.push('mu-refresh-control-noshow');
          break;
      }
      if (this.refreshing) classNames.push('mu-refresh-control-refreshing');
      return classNames;
    }
  },
  mounted: function mounted() {
    this.bindDrag();
  },
  beforeDestory: function beforeDestory() {
    this.unbindDrag();
  },

  methods: {
    clearState: function clearState() {
      this.state = 'ready';
      this.draging = false;
      this.y = 0;
    },
    getScrollTop: function getScrollTop() {
      var scroller = getScrollEventTarget(this.$el);
      if (scroller === window) {
        return Math.max(window.pageYOffset || 0, document.documentElement.scrollTop);
      } else {
        return scroller.scrollTop;
      }
    },
    bindDrag: function bindDrag() {
      var _this = this;

      if (!this.trigger) return;
      var drager = this.drager = new Drag(this.trigger);
      this.state = 'ready';
      drager.start(function () {
        if (_this.refreshing) return;
        _this.state = 'dragStart';
        var scrollTop = _this.getScrollTop();
        if (scrollTop === 0) _this.draging = true;
      }).drag(function (pos, event) {
        var scrollTop = _this.getScrollTop();
        if (pos.y < 5 || _this.refreshing || scrollTop !== 0) return; // 消除误差
        if (scrollTop === 0 && !_this.draging) {
          _this.draging = true;
          drager.reset(event);
        }
        _this.y = pos.y / 2;
        if (_this.y < 0) _this.y = 1;
        if (_this.y > LENGTH) _this.y = LENGTH;
      }).end(function (pos, event) {
        if (!pos.y || pos.y < 5) {
          _this.clearState();
          return; // 消除误差
        }
        var canRefresh = _this.y + INITY > 0 && _this.draging;
        _this.state = 'dragAnimate';
        if (canRefresh) {
          _this.draging = false;
          _this.$emit('refresh');
        } else {
          _this.y = 0;
          transitionEnd(_this.$el, _this.clearState.bind(_this));
        }
      });

      // fix ios
      this.handlePrevent = function (event) {
        if (_this.draging && _this.y > 0) event.preventDefault();
      };
      this.handleTouchEnd = function () {
        return true;
      };
      this.trigger.addEventListener('touchmove', this.handlePrevent, { passive: false });
      this.trigger.addEventListener('touchend', this.handleTouchEnd, { passive: false });
    },
    unbindDrag: function unbindDrag() {
      if (!this.drager) return;
      if (this.handlePrevent) {
        this.trigger.removeEventListener('touchmove', this.handlePrevent);
        this.trigger.removeEventListener('touchend', this.handleTouchEnd);
      }
      this.drager.destory();
      this.drager = null;
    },
    createRefreshIcon: function createRefreshIcon(h) {
      return this.refreshing ? h(Circular, {
        props: {
          size: 24,
          borderWidth: 2
        }
      }) : this.draging ? h('svg', {
        staticClass: 'mu-refresh-svg-icon',
        style: this.circularStyle,
        attrs: {
          viewBox: '0 0 24 24'
        }
      }, [h('path', {
        attrs: {
          d: 'M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z'
        }
      })]) : undefined;
    }
  },
  render: function render(h) {
    return h('div', {
      staticClass: 'mu-refresh-control',
      style: this.refreshStyle,
      class: this.refreshClass
    }, [this.createRefreshIcon(h)]);
  },

  watch: {
    refreshing: function refreshing(val) {
      if (!val) {
        transitionEnd(this.$el, this.clearState.bind(this));
      } else {
        this.state = 'refreshAnimate';
      }
    },
    trigger: function trigger(_trigger, oldTrigger) {
      if (_trigger === oldTrigger) return;
      this.unbindDrag();
      this.bindDrag();
    }
  }
};