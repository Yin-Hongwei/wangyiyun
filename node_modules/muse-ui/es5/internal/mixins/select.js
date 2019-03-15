var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import TouchRipple from '../TouchRipple';
import keycode from 'keycode';
import color from './color';
import ripple from './ripple';

export default function () {
  var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'checkbox';
  // checkbox
  var iconProps = type === 'switch' ? {} : { uncheckIcon: String, checkedIcon: String };
  return {
    mixins: [color, ripple],
    inheritAttrs: false,
    inject: {
      muFormItem: {
        default: ''
      }
    },
    model: {
      prop: 'inputValue',
      event: 'change'
    },
    props: _extends({
      label: String,
      labelLeft: Boolean,
      readonly: Boolean
    }, iconProps, {
      disabled: Boolean,
      tabIndex: [Number, String]
    }),
    methods: {
      start: function start(event) {
        if (this.disabled) return;
        if (this.ripple && (event.type !== 'mousedown' || event.button === 0)) {
          this.$refs.ripple.start(event);
        }
        this.$emit(event.type, event);
      },
      end: function end(event) {
        if (this.disabled) return;
        if (this.ripple) this.$refs.ripple.end();
        if (event) this.$emit(event.type, event);
      },
      handleClick: function handleClick(e) {
        if (this.disabled || this.readonly) return;
        this.toggle();
        this.muFormItem && this.muFormItem.onBlur();
        this.end();
        this.$emit('click', e);
      },
      handleKeydown: function handleKeydown(e) {
        if (this.disabled) return;
        this.end(e);
        if (keycode(e) === 'enter' && !this.readonly) this.handleClick(e);
      },
      createRipple: function createRipple(h, staticClass, children) {
        return this.disabled || !this.ripple ? h('div', {
          staticClass: staticClass
        }, children) : h(TouchRipple, {
          staticClass: staticClass,
          props: {
            rippleWrapperClass: 'mu-' + type + '-ripple-wrapper',
            centerRipple: true,
            color: this.rippleColor,
            opacity: this.rippleOpacity
          },
          ref: 'ripple'
        }, children);
      },
      createInputElement: function createInputElement(h) {
        return h('input', {
          attrs: _extends({}, this.$attrs, {
            type: type === 'switch' ? 'checkbox' : type,
            disabled: this.disabled,
            checked: this.checked,
            readonly: this.readonly,
            tabindex: -1
          })
        });
      },
      createSelect: function createSelect(h, view) {
        var _class;

        var colorClass = this.getNormalColorClass(this.color, true);
        var label = this.label ? h('div', { staticClass: 'mu-' + type + '-label' }, this.label) : undefined;
        var wrapper = h('div', {
          staticClass: 'mu-' + type + '-wrapper'
        }, this.labelLeft ? [label, view] : [view, label]);

        return h('div', {
          staticClass: 'mu-' + type + ' ' + (this.checked ? colorClass : ''),
          attrs: {
            tabindex: this.disabled ? -1 : this.tabIndex ? this.tabIndex : 0
          },
          style: {
            color: this.checked && !this.disabled ? this.getColor(this.color) : ''
          },
          class: (_class = {
            'label-left': this.labelLeft,
            'disabled': this.disabled
          }, _defineProperty(_class, 'mu-' + type + '-checked', this.checked), _defineProperty(_class, 'no-label', !this.label), _class),
          on: _extends({}, this.$listeners, {
            click: this.handleClick,
            keydown: this.handleKeydown,
            mousedown: this.start,
            mouseleave: this.end,
            mouseup: this.end,
            touchstart: this.start,
            touchend: this.end,
            touchcancel: this.end,
            focus: this.start,
            blur: this.end
          })
        }, [this.createInputElement(h), wrapper]);
      }
    }
  };
}