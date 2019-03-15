import color from '../internal/mixins/color';

export default {
  name: 'mu-linear-progress',
  mixins: [color],
  props: {
    max: {
      type: Number,
      default: 100
    },
    min: {
      type: Number,
      default: 0
    },
    mode: {
      type: String,
      default: 'indeterminate',
      validator: function validator(val) {
        return ['indeterminate', 'determinate'].indexOf(val) !== -1;
      }
    },
    value: {
      type: Number,
      default: 0
    },
    size: [Number, String]
  },
  computed: {
    percent: function percent() {
      return (this.value - this.min) / (this.max - this.min) * 100;
    },
    linearStyle: function linearStyle() {
      var color = this.color,
          mode = this.mode,
          percent = this.percent;

      return {
        'background-color': this.getColor(color),
        width: mode === 'determinate' ? percent + '%' : ''
      };
    },
    linearClass: function linearClass() {
      return 'mu-linear-progress-' + this.mode;
    }
  },
  render: function render(h) {
    return h('div', {
      staticClass: 'mu-linear-progress ' + this.getColorClass(),
      style: {
        height: this.size + 'px'
      }
    }, [h('div', {
      staticClass: 'mu-linear-progress-background',
      style: {
        'background-color': this.getColor(this.color)
      }
    }), h('div', {
      style: this.linearStyle,
      class: this.linearClass
    })]);
  }
};