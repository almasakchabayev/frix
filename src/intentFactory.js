import { Subject } from 'rxjs';

export const intentFactory = {
  collection: {},
  get(name) {
    console.log(name)
    if (this.collection[name]) {
      return this.collection[name]
    }
    this.collection[name] = new Subject()
    return this.collection[name]
  }
}
