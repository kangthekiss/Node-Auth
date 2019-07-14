import React, { Component } from 'react'
import { fakeAuth } from '../action/fakeAuth'
import { withRouter } from 'react-router-dom'

class Profile extends Component {
  render() {
    return (
      <div>
        <h1>Profile</h1>
        <SignOutButton />
      </div>
    )
  }
}

const SignOutButton = withRouter(({ history }) => {
  if (fakeAuth.isAuthenticated) {
    return (
      <button
        onClick={() => {
          fakeAuth.signout(() => history.push('/'))
        }}
      >
        Sign out
      </button>
    )
  }
})

export default Profile
