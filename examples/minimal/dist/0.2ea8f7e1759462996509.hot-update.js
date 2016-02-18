webpackHotUpdate(0,{

/***/ 721:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.intentFactory = undefined;
	
	var _rxjs = __webpack_require__(722);
	
	var intentFactory = exports.intentFactory = {
	  collection: {},
	  get: function get(name) {
	    console.log(this.collection);
	    if (this.collection[name]) {
	      return this.collection[name];
	    }
	    this.collection[name] = new _rxjs.Subject();
	    return this.collection[name];
	  }
	};

/***/ }

})
//# sourceMappingURL=0.2ea8f7e1759462996509.hot-update.js.map