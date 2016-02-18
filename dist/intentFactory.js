'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.intentFactory = undefined;

var _rxjs = require('rxjs');

var intentFactory = exports.intentFactory = {
  collection: {},
  get: function get(name) {
    if (this.collection[name]) {
      return this.collection[name];
    }
    this.collection[name] = new _rxjs.Subject();
    return this.collection[name];
  }
};
//# sourceMappingURL=intentFactory.js.map