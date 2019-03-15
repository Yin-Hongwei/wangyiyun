'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

exports.default = {
  name: 'mu-carousel-item',
  inject: ['addCarouselItem', 'removeCarouselItem', 'isCarouselActive', 'getCarouselTransition'],
  data: function data() {
    return {
      classes: []
    };
  },

  computed: {
    active: function active() {
      return this.isCarouselActive(this);
    },
    transition: function transition() {
      return this.getCarouselTransition();
    }
  },
  created: function created() {
    this.addCarouselItem(this);
  },
  beforeDestroy: function beforeDestroy() {
    this.removeCarouselItem(this);
  },
  render: function render(h) {
    return h('transition', {
      props: {
        name: 'mu-carousel-' + this.transition
      }
    }, [h('div', {
      staticClass: 'mu-carousel-item',
      class: [].concat(_toConsumableArray(this.classes)),
      directives: [{
        name: 'show',
        value: this.active
      }]
    }, this.$slots.default)]);
  }
};