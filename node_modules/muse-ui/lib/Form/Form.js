'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = require('../utils');

exports.default = {
  name: 'mu-form',
  provide: function provide() {
    return {
      muForm: this
    };
  },

  props: {
    model: {
      type: Object,
      required: true
    },
    inline: Boolean,
    labelWidth: [String, Number],
    labelPosition: {
      type: String,
      default: 'top',
      validator: function validator(val) {
        return ['left', 'right', 'top'].indexOf(val) !== -1;
      }
    },
    autoValidate: {
      type: Boolean,
      default: true
    }
  },
  data: function data() {
    return {
      items: []
    };
  },

  methods: {
    getValue: function getValue(prop) {
      return (0, _utils.getObjAttr)(this.model, prop);
    },
    addItem: function addItem(item) {
      this.items.push(item);
    },
    removeItem: function removeItem(item) {
      var index = this.items.indexOf(item);
      if (index === -1) return;
      this.items.splice(index, 1);
    },
    validate: function validate() {
      var valid = true;
      var promises = [];
      for (var i = 0; i < this.items.length; i++) {
        var item = this.items[i];
        var result = item.validate();
        if ((0, _utils.isPromise)(result)) {
          promises.push(result);
          continue;
        }
        if (!result) {
          valid = false;
        }
      }
      if (promises.length > 0 && typeof Promise !== 'undefined') {
        return Promise.all([valid ? Promise.resolve(valid) : Promise.reject(valid)].concat(promises)).then(function () {
          return true;
        }, function () {
          return false;
        });
      }
      return typeof Promise !== 'undefined' ? Promise.resolve(valid) : valid;
    },
    clear: function clear() {
      this.items.forEach(function (item) {
        return item.errorMessage = '';
      });
    }
  },
  render: function render(h) {
    return h('form', {
      staticClass: 'mu-form',
      class: {
        'mu-form__inline': this.inline
      },
      on: this.$listeners
    }, this.$slots.default);
  }
};