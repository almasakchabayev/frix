'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createStore = createStore;
exports.getModel = getModel;

var _ReplaySubject = require('rxjs/subject/ReplaySubject');

var _falcor = require('falcor');

var _falcor2 = _interopRequireDefault(_falcor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var store = {
  model: null,
  getModel: function getModel() {
    return this.model;
  },
  createStore: function createStore(model) {
    this.model = model;
    this.model.$ = new RaplaySubject(1);
    var previousOnChange = this.model._root.onChange;
    model._root.onChange = function () {
      previousOnChange();
      this.model.$.next(1);
    };
  }
};

function createStore(model) {
  store.createStore(model);
}
function getModel() {
  return store.getModel();
}
//# sourceMappingURL=createStore.js.map