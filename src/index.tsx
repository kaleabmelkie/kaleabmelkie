import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import initReactFastclick from 'react-fastclick'
import { App } from './_app'
import * as serviceWorker from './serviceWorker'

initReactFastclick()

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root'),
)

setTimeout(() => {
  document.body.style.transition = 'all 3000ms ease-out'
  document.body.style.opacity = '1'
  document.body.style.filter = 'opacity(1)'
  document.body.style.transform = 'scale3d(1,1,1)'
}, 0)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register()
