import { Component, PropTypes, Children } from 'react';
import { Model } from 'falcor';

export class Provider extends Component {
  static propTypes = {
    store: PropTypes.any,
    children: PropTypes.element.isRequired
  };
  static childContextTypes = {
    store: PropTypes.any
  };
  getChildContext() {
    return { store: this.props.store }
  }
  constructor(props, context) {
    super(props, context)
    this.store = props.store
  }
  render() {
    let { children } = this.props
    return Children.only(children)
  }
}
