import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { fakeAuth } from '../action/fakeAuth'

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        fakeAuth.isAuthenticated === true ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: 'signIn', state: { from: props.location } }}
          />
        )
      }
    />
  )
}

export default PrivateRoute
