(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function() {
  require('./preload');

  module.exports.viewport = require('./viewport');

}).call(this);

},{"./preload":2,"./viewport":3}],2:[function(require,module,exports){
(function() {
  console.log('change');

}).call(this);

},{}],3:[function(require,module,exports){
(function() {
  var viewport;

  module.exports = viewport = {};

  viewport.center = {
    x: 0,
    y: 0
  };

  viewport.size = {
    width: 3,
    height: 3
  };

  viewport.setCenter = function(x, y) {
    viewport.center.x = x;
    return viewport.center.y = y;
  };

  viewport.setCorner = function(x, y) {
    viewport.center.x = x + (viewport.size.width - 1) / 2;
    return viewport.center.y = y + (viewport.size.height - 1) / 2;
  };

  viewport.setSize = function(w, h) {
    if (!(w % 2) || !(h % 2)) {
      throw new Error('Bad Size');
    }
    viewport.size.width = w;
    return viewport.size.height = h;
  };

}).call(this);

},{}]},{},[1])