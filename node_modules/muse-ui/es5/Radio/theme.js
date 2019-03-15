export default (function (theme) {
  return "\n  .mu-radio.disabled  {\n    color: " + theme.text.disabled + ";\n  }\n  .mu-radio-checked {\n    color: " + theme.primary + ";\n  }\n  .mu-radio-label {\n    color: " + theme.text.primary + ";\n  }\n  .mu-radio.disabled .mu-radio-label {\n    color: " + theme.text.disabled + ";\n  }\n  ";
});