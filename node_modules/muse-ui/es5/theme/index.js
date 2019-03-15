var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import BaseTheme from './baseTheme';
import ColorTheme from './colorTheme';
import light from './light';
import dark from './dark';

var themes = [BaseTheme, ColorTheme];

var vars = {
  light: light,
  dark: dark
};

function getThemeStyle() {
  var themeId = 'muse-theme';
  var styleEl = document.getElementById(themeId);
  if (styleEl) return styleEl;
  styleEl = document.createElement('style');
  styleEl.id = themeId;
  document.body.appendChild(styleEl);
  return styleEl;
}

export default {
  addCreateTheme: function addCreateTheme(theme) {
    var length = themes.length;
    themes.splice(length - 1, 0, theme);
    return this;
  },
  add: function add(name) {
    var varObj = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var extendName = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'light';

    var theme = _extends({
      name: name
    }, vars[extendName], varObj);
    vars[name] = theme;
    return this;
  },
  use: function use(name) {
    var themeEl = getThemeStyle();
    themeEl.innerHTML = themes.map(function (theme) {
      return theme(vars[name], vars[name].type, name);
    }).join(' ');
    return this;
  },
  generate: function generate(name) {
    return themes.map(function (theme) {
      return theme(vars[name], vars[name].type, name);
    }).join(' ');
  }
};