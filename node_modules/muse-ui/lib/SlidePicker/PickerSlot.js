'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _swipe = require('../internal/directives/swipe');

var _swipe2 = _interopRequireDefault(_swipe);

var _translate = require('../utils/translate');

var _translate2 = _interopRequireDefault(_translate);

var _dom = require('../utils/dom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ITEM_HEIGHT = 36;

exports.default = {
  name: 'mu-slide-picker-slot',
  directives: {
    swipe: _swipe2.default
  },
  props: {
    divider: {
      type: Boolean,
      default: false
    },
    content: {
      type: String,
      default: ''
    },
    values: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    value: {},
    textAlign: {
      type: String,
      default: ''
    },
    width: {
      type: String,
      default: ''
    },
    visibleItemCount: {
      type: Number,
      default: 5
    }
  },
  data: function data() {
    return {
      animate: false,
      startTop: 0,
      velocityTranslate: 0,
      prevTranslate: 0
    };
  },

  computed: {
    itemHeight: function itemHeight() {},
    contentHeight: function contentHeight() {
      return ITEM_HEIGHT * this.visibleItemCount;
    },
    valueIndex: function valueIndex() {
      return this.values.indexOf(this.value);
    },
    dragRange: function dragRange() {
      var values = this.values;
      var visibleItemCount = this.visibleItemCount;
      return [-ITEM_HEIGHT * (values.length - Math.ceil(visibleItemCount / 2)), ITEM_HEIGHT * Math.floor(visibleItemCount / 2)];
    }
  },
  mounted: function mounted() {
    if (!this.divider) {
      this.doOnValueChange();
    }
  },

  methods: {
    value2Translate: function value2Translate(value) {
      var values = this.values;
      var valueIndex = values.indexOf(value);
      var offset = Math.floor(this.visibleItemCount / 2);
      if (valueIndex !== -1) {
        return (valueIndex - offset) * -ITEM_HEIGHT;
      }
    },
    translate2Value: function translate2Value(translate) {
      translate = Math.round(translate / ITEM_HEIGHT) * ITEM_HEIGHT;
      var index = -(translate - Math.floor(this.visibleItemCount / 2) * ITEM_HEIGHT) / ITEM_HEIGHT;
      return this.values[index];
    },
    doOnValueChange: function doOnValueChange() {
      var value = this.value;
      var wrapper = this.$refs.wrapper;
      _translate2.default.translateElement(wrapper, null, this.value2Translate(value));
    },
    doOnValuesChange: function doOnValuesChange() {
      var el = this.$el;
      var items = el.querySelectorAll('.mu-slide-picker-item');
      Array.prototype.forEach.call(items, function (item, index) {
        _translate2.default.translateElement(item, null, ITEM_HEIGHT * index);
      });
    },
    handleStart: function handleStart() {
      this.startTop = _translate2.default.getElementTranslate(this.$refs.wrapper).top;
    },
    handleMove: function handleMove(pos, drag, event) {
      var el = this.$refs.wrapper;
      var translate = this.startTop + pos.y;
      _translate2.default.translateElement(el, 0, translate);
      this.velocityTranslate = translate - this.prevTranslate || translate;
      this.prevTranslate = translate;
    },
    handleEnd: function handleEnd(pos, drag, event) {
      var _this = this;

      var el = this.$refs.wrapper;
      var momentumRatio = 7;
      var currentTranslate = _translate2.default.getElementTranslate(el).top;
      var momentumTranslate = void 0;
      if (pos.time < 300) {
        momentumTranslate = currentTranslate + this.velocityTranslate * momentumRatio;
      }
      var dragRange = this.dragRange;
      this.animate = true;
      (0, _dom.transitionEnd)(el, function () {
        _this.animate = false;
      });
      this.$nextTick(function () {
        var translate = void 0;
        if (momentumTranslate) {
          translate = Math.round(momentumTranslate / ITEM_HEIGHT) * ITEM_HEIGHT;
        } else {
          translate = Math.round(currentTranslate / ITEM_HEIGHT) * ITEM_HEIGHT;
        }
        translate = Math.max(Math.min(translate, dragRange[1]), dragRange[0]);
        _translate2.default.translateElement(el, null, translate);
        _this.$emit('change', _this.translate2Value(translate));
      });
    }
  },
  render: function render(h) {
    var _this2 = this;

    return h('div', {
      staticClass: 'mu-slide-picker-slot',
      class: {
        'mu-slide-picker-slot-divider': this.divider
      },
      style: {
        width: this.width
      },
      on: {
        touchmove: function touchmove(e) {
          e.preventDefault();
        }
      },
      directives: this.divider ? [] : [{
        name: 'swipe',
        value: {
          start: this.handleStart,
          move: this.handleMove,
          end: this.handleEnd
        }
      }]
    }, [this.divider ? h('div', {}, this.content) : h('div', {
      staticClass: 'mu-slide-picker-slot-wrapper',
      class: {
        animate: this.animate
      },
      style: {
        height: this.contentHeight + 'px'
      },
      ref: 'wrapper'
    }, this.values.map(function (item, index) {
      return h('div', {
        staticClass: 'mu-slide-picker-item',
        style: {
          'text-align': _this2.textAlign
        },
        class: {
          selected: item === _this2.value
        },
        key: 'pick-slot-' + index
      }, item.text || item);
    }))]);
  },

  watch: {
    values: function values(newVal) {
      if (this.valueIndex === -1) {
        this.value = (newVal || [])[0];
      }
    },
    value: function value() {
      this.doOnValueChange();
    }
  }
};