webpackHotUpdate(0,{

/***/ 1121:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(266);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _src = __webpack_require__(423);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Hello = function (_React$Component) {
	  _inherits(Hello, _React$Component);
	
	  function Hello() {
	    _classCallCheck(this, Hello);
	
	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Hello).apply(this, arguments));
	  }
	
	  _createClass(Hello, [{
	    key: 'render',
	    value: function render() {
	      var _this2 = this;
	
	      console.log(this.props);
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          'div',
	          null,
	          'Here you are'
	        ),
	        _react2.default.createElement(
	          'div',
	          null,
	          this.props.hello,
	          ' ',
	          this.props.name
	        ),
	        _react2.default.createElement(
	          'div',
	          null,
	          _react2.default.createElement('input', { onChange: function onChange(e) {
	              return _this2.props.intents.updateName$.next(e.target.value);
	            } })
	        )
	      );
	    } // a little worker
	
	  }]);
	
	  return Hello;
	}(_react2.default.Component);
	
	Hello.propTypes = {
	  hello: _react2.default.PropTypes.string,
	  name: _react2.default.PropTypes.string,
	  intents: _react2.default.PropTypes.object
	};
	exports.default = (0, _src.createContainer)(Hello, function (intents, model) {
	  // just like a manager
	  var fragments = {
	    hello: null,
	    name: null
	  };
	  var updateName$ = intents.get('updateName');
	  updateName$.subscribe(function (name) {
	    return model.update({ name: name });
	  });
	
	  return {
	    fragments: fragments,
	    updateName$: updateName$
	  };
	});

/***/ }

})
//# sourceMappingURL=0.114c045b781ec2b46c19.hot-update.js.map