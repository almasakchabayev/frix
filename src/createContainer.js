import React, { Component, PropTypes, createElement } from 'react'
import { Observable } from 'rxjs/Observable'
import { Model } from 'falcor'
import { intentFactory } from './intentFactory'
import { getModel } from './createStore'
import { toPaths } from './utils'
import hoistStatics from 'hoist-non-react-statics'
import invariant from 'invariant'

export function createContainer(WrappedComponent, optFn) {
  if (optFn.constructor !== Function) {
    return new Error(`second argument passed to
      ${WrappedComponent.displayName || WrappedComponent.name}
      must be a function, which returns fragments as a first argument,
      following with intents`)
  }
  const { fragments, ...intents } = optFn(intentFactory, getModel)
  class Container extends React.Component {
    static displayName = `${WrappedComponent.displayName || WrappedComponent.name}Container`;
    static contextTypes = {
      store: PropTypes.any
    };
    constructor(props, context) {
      super(props, context);
      this.store = props.store || context.store
      invariant(this.store,
        `Could not find "store" in either the context or
        props of "${this.constructor.displayName}".
        Either wrap the root component in a <Provider>,
        or explicitly pass "store" as a prop to "${this.constructor.displayName}".`
      )
      this.model = this.store.getModel()
      // TODO consider using versions with getFragment
      this.componentHasMounted = false

      this.subscription = this.model.$.
        flatMap(_ => Observable.fromPromise(this.model.get(...toPaths(fragments)))).
        subscribe(data => {
          if (!data) {
            return;
          }
          if (!this.componentHasMounted) {
            return this.state = data.json
          }
          this.setState(data.json)
        })
    }
    componentDidMount() {
      this.componentHasMounted = true;
    }
    componentWillUnmount() {
      // Clean-up subscription before un-mounting
      this.subscription.unsubscribe();
    }
    render() {
      console.log(this.state, 'state')
      return createElement(WrappedComponent, { ...this.state, ...intents })
    }
  }

  return hoistStatics(Container, WrappedComponent)
}
