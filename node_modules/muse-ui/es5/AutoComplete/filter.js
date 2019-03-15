export default (function () {
  var query = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var maxSearchResults = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

  var results = [];
  for (var i = 0; i < data.length; i++) {
    var value = getValueByItem(data[i]);
    var index = value.toLowerCase().indexOf(query.toLowerCase());
    if (index === -1) continue;
    var before = value.substring(0, index);
    var highlight = value.substring(index, index + query.length);
    var after = value.substring(index + query.length);
    results.push({
      value: value,
      item: data[i],
      highlight: [before, '<span class="mu-secondary-text-color">' + highlight + '</span>', after].join('')
    });
    if (maxSearchResults > 0 && maxSearchResults === results.length) break;
  }
  return results;
});

function getValueByItem(item) {
  if (!item) return '';
  return typeof item === 'string' ? item : item.value;
}