import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { AuthContainer } from '../auth/auth.container'

export const AppContainer = () => (
  <Switch>
    <Route path={'/auth'} component={AuthContainer} />
    <Redirect from={'/'} to={'/auth'} />
  </Switch>
)
