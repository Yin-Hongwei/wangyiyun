import '../../../styles/components/overlay.less';
import { FadeTransition } from '../../transitions';

export default {
  name: 'mu-overlay',
  props: {
    show: Boolean,
    fixed: Boolean,
    onClick: Function,
    opacity: {
      type: Number,
      default: 0.4
    },
    color: String,
    zIndex: Number
  },
  computed: {
    overlayStyle: function overlayStyle() {
      return {
        'opacity': this.opacity,
        'background-color': this.color,
        'position': this.fixed ? 'fixed' : '',
        'z-index': this.zIndex
      };
    }
  },
  methods: {
    prevent: function prevent(event) {
      event.preventDefault();
      event.stopPropagation();
    },
    handleClick: function handleClick() {
      if (this.onClick) {
        this.onClick();
      }
    }
  },
  render: function render(h) {
    return h(FadeTransition, [h('div', {
      staticClass: 'mu-overlay',
      style: this.overlayStyle,
      directives: [{
        name: 'show',
        value: this.show
      }],
      on: {
        click: this.handleClick,
        touchmove: this.prevent
      }
    })]);
  }
};