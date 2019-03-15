import select from '../internal/mixins/select';

export default {
  name: 'mu-switch',
  mixins: [select('switch')],
  props: {
    inputValue: Boolean
  },
  computed: {
    checked: function checked() {
      return this.inputValue;
    }
  },
  methods: {
    toggle: function toggle() {
      this.$emit('change', !this.inputValue);
    }
  },
  render: function render(h) {
    var view = h('div', {
      staticClass: 'mu-switch-container'
    }, [h('div', { staticClass: 'mu-switch-track' }), this.createRipple(h, 'mu-switch-thumb')]);

    return this.createSelect(h, view);
  }
};