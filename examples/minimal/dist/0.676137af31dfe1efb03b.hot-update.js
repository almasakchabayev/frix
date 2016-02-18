webpackHotUpdate(0,{

/***/ 265:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _react = __webpack_require__(266);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(422);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _src = __webpack_require__(423);
	
	var _falcor = __webpack_require__(979);
	
	var _Hello = __webpack_require__(1119);
	
	var _Hello2 = _interopRequireDefault(_Hello);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	__webpack_require__(1120);
	__webpack_require__(76);
	
	
	var model = new _falcor.Model({
	  cache: {
	    hello: 'Hello',
	    todos: {
	      0: {
	        text: 'learn react',
	        completed: false
	      },
	      1: {
	        text: 'learn rxjs',
	        completed: false
	      },
	      2: {
	        text: 'learn falcor',
	        completed: false
	      },
	      3: {
	        text: 'use frix with no problem',
	        complete: false
	      }
	    }
	  }
	});
	
	var store = (0, _src.createStore)(model);
	
	_reactDom2.default.render(_react2.default.createElement(
	  _src.Provider,
	  { store: store },
	  _react2.default.createElement(_Hello2.default, null)
	), document.getElementById('root'));

/***/ }

})
//# sourceMappingURL=0.676137af31dfe1efb03b.hot-update.js.map