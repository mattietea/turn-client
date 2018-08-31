import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { SignInAuthPage } from './pages/signIn.authPage'
import { SignUpAuthPage } from './pages/signUp.authPage'

export const AuthContainer = () => (
  <Switch>
    <Route path={'/auth/sign-up'} component={SignUpAuthPage} />
    <Route path={'/auth/sign-in'} component={SignInAuthPage} />
    <Redirect from={'/auth'} to={'/auth/sign-in'} />
  </Switch>
)
