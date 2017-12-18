module.exports = function(source) {
  this._src = source;
  return 'module.exports = `' + source + '`';
}
