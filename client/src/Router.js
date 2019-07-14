import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Home from './views/Home'
import Profile from './views/Profile'
import SignIn from './views/SignIn'
import SignUp from './views/SignUp'
import PrivateRoute from './middleware/PrivateRoute'

class Router extends Component {
  render() {
    return (
      <div>
        <Route path="/" exact component={Home} />
        <PrivateRoute path="/profile" component={Profile} />
        <Route path="/signIn" component={SignIn} />
        <Route path="/signUp" component={SignUp} />
      </div>
    )
  }
}

export default Router
