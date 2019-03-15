function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

import Button from '../Button';
import swipe from '../internal/directives/swipe';

export default {
  name: 'mu-carousel',
  directives: {
    swipe: swipe
  },
  provide: function provide() {
    return {
      addCarouselItem: this.addCarouselItem,
      removeCarouselItem: this.removeCarouselItem,
      isCarouselActive: this.isCarouselActive,
      getCarouselTransition: this.getTransition
    };
  },

  props: {
    active: {
      type: Number,
      default: 0
    },
    cycle: {
      type: Boolean,
      default: true
    },
    interval: {
      type: [Number, String],
      default: 6000,
      validator: function validator(value) {
        return value > 0;
      }
    },
    transition: {
      type: String,
      default: 'slide',
      validator: function validator(val) {
        return ['slide', 'fade'].indexOf(val) !== -1;
      }
    },
    hideIndicators: Boolean,
    hideControls: Boolean
  },
  data: function data() {
    return {
      items: [],
      inverse: false,
      activeIndex: this.active
    };
  },
  mounted: function mounted() {
    this.startAutoNext();
  },
  beforeDestroy: function beforeDestroy() {
    if (this.timer) clearInterval(this.timer);
  },

  methods: {
    getTransition: function getTransition() {
      return this.transition;
    },
    addCarouselItem: function addCarouselItem(item) {
      var index = this.$children.indexOf(item);
      return index === -1 ? this.items.push(item) : this.items.splice(index, 0, item);
    },
    removeCarouselItem: function removeCarouselItem(item) {
      var index = this.items.indexOf(item);
      if (index === -1) return;
      this.items.splice(index, 1);
    },
    isCarouselActive: function isCarouselActive(item) {
      return this.items.indexOf(item) === this.activeIndex;
    },
    startAutoNext: function startAutoNext() {
      var _this = this;

      if (this.timer) clearInterval(this.timer);
      if (!this.cycle) return;
      this.timer = setInterval(function () {
        return _this.next();
      }, this.interval > 0 ? this.interval : 6000);
    },
    next: function next() {
      var maxIndex = this.items.length - 1;
      var index = this.activeIndex + 1;
      if (index > maxIndex) index = 0;
      this.activeIndex = index;
      this.inverse = false;
    },
    prev: function prev() {
      var index = this.activeIndex - 1;
      if (index < 0) index = this.items.length - 1;
      this.activeIndex = index;
      this.inverse = true;
    },
    changeActiveIndex: function changeActiveIndex(index) {
      if (index !== this.activeIndex) {
        this.inverse = this.activeIndex > index;
        this.activeIndex = index;
      }
    },
    createControls: function createControls(h) {
      if (this.hideControls) return [];
      return [h(Button, {
        class: 'mu-carousel-button mu-carousel-button__left',
        props: {
          icon: true
        },
        on: {
          click: this.prev
        }
      }, [this.$slots.left && this.$slots.left.length > 0 ? this.$slots.left : h('svg', {
        staticClass: 'mu-carousel-svg-icon',
        attrs: {
          viewBox: '0 0 24 24'
        }
      }, [h('path', {
        attrs: {
          d: 'M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z'
        }
      }), h('path', {
        attrs: {
          d: 'M0 0h24v24H0z',
          fill: 'none'
        }
      })])]), h(Button, {
        class: 'mu-carousel-button mu-carousel-button__right',
        props: {
          icon: true
        },
        on: {
          click: this.next
        }
      }, [this.$slots.right && this.$slots.right.length > 0 ? this.$slots.right : h('svg', {
        staticClass: 'mu-carousel-svg-icon',
        attrs: {
          viewBox: '0 0 24 24'
        }
      }, [h('path', {
        attrs: {
          d: 'M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z'
        }
      }), h('path', {
        attrs: {
          d: 'M0 0h24v24H0z',
          fill: 'none'
        }
      })])])];
    },
    createIndicators: function createIndicators(h) {
      var _this2 = this;

      if (this.hideIndicators) return;
      return h('div', {
        staticClass: 'mu-carousel-indicators'
      }, this.items.map(function (item, index) {
        var active = index === _this2.activeIndex;
        return _this2.$scopedSlots.indicator ? _this2.$scopedSlots.indicator({ index: index, active: active }) : h(Button, {
          staticClass: 'mu-carousel-indicator-button',
          class: {
            'mu-carousel-indicator-button__active': active
          },
          props: {
            icon: true
          },
          on: {
            click: function click() {
              return _this2.changeActiveIndex(index);
            }
          }
        }, [h('span', {
          staticClass: 'mu-carousel-indicator-icon'
        })]);
      }));
    }
  },
  render: function render(h) {
    return h('div', {
      staticClass: 'mu-carousel',
      class: {
        'mu-carousel__transition_inverse': this.inverse
      },
      directives: [{
        name: 'swipe',
        value: {
          left: this.next,
          right: this.prev
        },
        modifiers: {
          touch: true
        }
      }]
    }, [].concat(_toConsumableArray(this.createControls(h)), [this.createIndicators(h), this.$slots.default]));
  },

  watch: {
    activeIndex: function activeIndex(val) {
      this.startAutoNext();
      this.$emit('change', val);
      this.$emit('update:active', val);
    },
    active: function active(val) {
      this.changeActiveIndex(val);
    },
    cycle: function cycle() {
      this.startAutoNext();
    },
    interval: function interval() {
      this.startAutoNext();
    }
  }
};