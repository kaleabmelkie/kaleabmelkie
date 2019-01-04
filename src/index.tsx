import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import AOS from 'aos'
import initReactFastclick from 'react-fastclick'
import './index.scss'
import { fontawesomeLibrary } from './fontawesome-library'
import { App } from './_app'
import * as serviceWorker from './serviceWorker'

// fontawesome icons
fontawesomeLibrary()

// animation on scroll
AOS.init({
  once: true,
})

// touch events
initReactFastclick()

// react
setTimeout(() => {
  document.body.style.transitionProperty = 'filter, transform'
  document.body.style.transitionDuration = '3s'
  document.body.style.transitionTimingFunction = 'ease-out'
  document.body.style.filter = 'none'
  document.body.style.transform = 'scale3d(1, 1, 1)'
}, 0)
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root'),
)

// SPA
serviceWorker.register()
