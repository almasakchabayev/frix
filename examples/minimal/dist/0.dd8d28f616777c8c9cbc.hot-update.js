webpackHotUpdate(0,{

/***/ 980:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Provider = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(425);
	
	var _falcor = __webpack_require__(581);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Provider = exports.Provider = function (_Component) {
	  _inherits(Provider, _Component);
	
	  _createClass(Provider, [{
	    key: 'getChildContext',
	    value: function getChildContext() {
	      return { store: this.props.store };
	    }
	  }]);
	
	  function Provider(props, context) {
	    _classCallCheck(this, Provider);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Provider).call(this, props, context));
	
	    _this.store = props.store;
	    return _this;
	  }
	
	  _createClass(Provider, [{
	    key: 'render',
	    value: function render() {
	      var children = this.props.children;
	
	      console.log('here');
	      return _react.Children.only(children);
	    }
	  }]);
	
	  return Provider;
	}(_react.Component);
	
	Provider.propTypes = {
	  store: _react.PropTypes.any,
	  children: _react.PropTypes.element.isRequired
	};
	Provider.childContextTypes = {
	  store: _react.PropTypes.any
	};

/***/ }

})
//# sourceMappingURL=0.dd8d28f616777c8c9cbc.hot-update.js.map