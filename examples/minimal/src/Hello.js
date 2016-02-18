import React from 'react'
import { createContainer } from '../../../src'

class Hello extends React.Component { // a little worker
  static propTypes = {
    hello: React.PropTypes.string,
    name: React.PropTypes.string,
    updateName$: React.PropTypes.any
  };
  render() {
    console.log(this.props)
    return (
      <div>
        <div>Here you are</div>
        <div>{this.props.hello} {this.props.name}</div>
        <div><input onChange={e => this.props.updateName$.next(e.target.value)} /></div>
      </div>
    )
  }
}

export default createContainer(Hello, (intents, getModel) => { // just like a manager
  const fragments = {
    hello: null,
    name: null
  }
  const updateName$ = intents.get('updateName')
  updateName$.
    subscribe(name => getModel().update({ name: name }))

  return {
    fragments,
    updateName$
  }
})
