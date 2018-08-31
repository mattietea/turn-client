import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import './interface/components/reset.component'
import { AppContainer } from './modules/app/app.container'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(
  <BrowserRouter>
    <AppContainer />
  </BrowserRouter>,
  document.getElementById('root')
)
registerServiceWorker()
