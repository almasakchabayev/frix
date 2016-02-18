import { ReplaySubject } from 'rxjs/subject/ReplaySubject';
import falcor from 'falcor'

const store = {
  model: null,
  getModel() {
    return this.model
  },
  createStore(model) {
    this.model = model
    this.model.$ = new ReplaySubject(1)
    const previousOnChange = this.model._root.onChange
    this.model._root.onChange = () => {
      if (previousOnChange) {
        previousOnChange()
      }
      this.model.$.next(1)
    }
    this.model.update = obj => {
    this.model.setCache(Object.assign(this.model.getCache(), obj));
  };
  }
}

export function createStore(model) {
  store.createStore(model)
  return store
}
export function getModel() {
  return store.getModel()
}
