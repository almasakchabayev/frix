webpackHotUpdate(0,{

/***/ 424:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	exports.createContainer = createContainer;
	
	var _react = __webpack_require__(425);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Observable = __webpack_require__(724);
	
	var _falcor = __webpack_require__(581);
	
	var _intentFactory = __webpack_require__(721);
	
	var _createStore = __webpack_require__(976);
	
	var _utils = __webpack_require__(977);
	
	var _hoistNonReactStatics = __webpack_require__(978);
	
	var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);
	
	var _invariant = __webpack_require__(979);
	
	var _invariant2 = _interopRequireDefault(_invariant);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function createContainer(WrappedComponent, optFn) {
	  if (optFn.constructor !== Function) {
	    return new Error('second argument passed to\n      ' + (WrappedComponent.displayName || WrappedComponent.name) + '\n      must be a function, which returns fragments as a first argument,\n      following with intents');
	  }
	
	  var _optFn = optFn(_intentFactory.intentFactory, _createStore.getModel);
	
	  var fragments = _optFn.fragments;
	
	  var intents = _objectWithoutProperties(_optFn, ['fragments']);
	
	  var Container = function (_React$Component) {
	    _inherits(Container, _React$Component);
	
	    function Container(props, context) {
	      _classCallCheck(this, Container);
	
	      var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Container).call(this, props, context));
	
	      _this.store = props.store || context.store;
	      (0, _invariant2.default)(_this.store, 'Could not find "store" in either the context or\n        props of "' + _this.constructor.displayName + '".\n        Either wrap the root component in a <Provider>,\n        or explicitly pass "store" as a prop to "' + _this.constructor.displayName + '".');
	      _this.model = _this.store.getModel();
	      // TODO consider using versions with getFragment
	      _this.componentHasMounted = false;
	
	      _this.subscription = _this.model.$.flatMap(function (_) {
	        var _this$model;
	
	        return _Observable.Observable.fromPromise((_this$model = _this.model).get.apply(_this$model, _toConsumableArray((0, _utils.toPaths)(fragments))));
	      }).subscribe(function (data) {
	        if (!data) {
	          return;
	        }
	        if (!componentHasMounted) {
	          return _this.state = data.json;
	        }
	        _this.setState(data.json);
	      });
	      return _this;
	    }
	
	    _createClass(Container, [{
	      key: 'componentDidMount',
	      value: function componentDidMount() {
	        this.componentHasMounted = true;
	      }
	    }, {
	      key: 'componentWillUnmount',
	      value: function componentWillUnmount() {
	        // Clean-up subscription before un-mounting
	        this.subscription.unsubscribe();
	      }
	    }, {
	      key: 'render',
	      value: function render() {
	        console.log(this.state);
	        return (0, _react.createElement)(WrappedComponent, _extends({}, this.state, intents));
	      }
	    }]);
	
	    return Container;
	  }(_react2.default.Component);
	
	  Container.displayName = (WrappedComponent.displayName || WrappedComponent.name) + 'Container';
	  Container.contextTypes = {
	    store: _react.PropTypes.any
	  };
	
	
	  return (0, _hoistNonReactStatics2.default)(Container, WrappedComponent);
	}

/***/ }

})
//# sourceMappingURL=0.26b22876b9febf0e07dc.hot-update.js.map