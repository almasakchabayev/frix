require('babel-core/register')
require('babel-polyfill')
import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, Provider } from '../../../src'
import { Model } from 'falcor'
import Hello from './Hello'

const model = new Model({
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
})

const store = createStore(model)

ReactDOM.render(
  <Provider store={store}>
    <Hello />
  </Provider>,
  document.getElementById('root')
)
