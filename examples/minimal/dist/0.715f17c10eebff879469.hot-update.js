webpackHotUpdate(0,{

/***/ 976:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.createStore = createStore;
	exports.getModel = getModel;
	
	var _ReplaySubject = __webpack_require__(816);
	
	var _falcor = __webpack_require__(581);
	
	var _falcor2 = _interopRequireDefault(_falcor);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var store = {
	  model: null,
	  getModel: function getModel() {
	    return this.model;
	  },
	  createStore: function createStore(model) {
	    this.model = model;
	    this.model.$ = new _ReplaySubject.ReplaySubject(1);
	    var previousOnChange = this.model._root.onChange;
	    model._root.onChange = function () {
	      if (previousOnChange) {
	        previousOnChange();
	      }
	      this.model.$.next(1);
	    };
	    model.update = function (obj) {
	      model.setCache(Object.assign(model.getCache(), obj));
	    };
	  }
	};
	
	function createStore(model) {
	  store.createStore(model);
	  return store;
	}
	function getModel() {
	  return store.getModel();
	}

/***/ }

})
//# sourceMappingURL=0.715f17c10eebff879469.hot-update.js.map