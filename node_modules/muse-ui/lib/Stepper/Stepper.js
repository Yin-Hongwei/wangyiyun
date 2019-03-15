'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _StepConnector = require('./StepConnector');

var _StepConnector2 = _interopRequireDefault(_StepConnector);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'mu-stepper',
  props: {
    activeStep: {
      type: Number,
      default: 0
    },
    linear: {
      type: Boolean,
      default: true
    },
    orientation: {
      type: String,
      default: 'horizontal',
      validator: function validator(val) {
        return ['horizontal', 'vertical'].indexOf(val) !== -1;
      }
    }
  },
  render: function render(h) {
    var activeStep = this.activeStep,
        linear = this.linear,
        orientation = this.orientation;

    var children = [];
    var slots = this.$slots;

    if (slots.default && slots.default.length > 0) {
      var index = 0;
      slots.default.forEach(function (vNode) {
        if (!vNode.componentOptions) return;
        if (index > 0) {
          children.push(h(_StepConnector2.default, {}));
        }
        var propsData = vNode.componentOptions.propsData;

        if (activeStep === index) {
          propsData.active = true;
        } else if (linear && activeStep > index) {
          propsData.completed = true;
        } else if (linear && activeStep < index) {
          propsData.disabled = true;
        }

        propsData.index = index++;
        children.push(vNode);
      });
      if (children.length > 0) children[children.length - 1].componentOptions.propsData.last = true;
    }

    return h('div', {
      staticClass: 'mu-stepper ' + (orientation === 'vertical' ? 'mu-stepper-vertical' : '')
    }, children);
  }
};