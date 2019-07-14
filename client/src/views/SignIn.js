import React, { Component } from 'react'
import { fakeAuth } from '../action/fakeAuth'
import { Redirect } from 'react-router-dom'

class SignIn extends Component {
  state = {
    email: '',
    password: '',
    redirectToReferrer: false
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  onSubmit = event => {
    event.preventDefault()

    fakeAuth.authenticate(() => {
      this.setState({ redirectToReferrer: true })
    })
  }

  render() {
    const { from } = this.props.location.state || {
      from: { pathname: '/profile' }
    }

    if (this.state.redirectToReferrer === true) {
      return <Redirect to={from} />
    }

    return (
      <div>
        <h1>Sign In</h1>

        <form onSubmit={this.onSubmit}>
          <p>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={this.state.email}
              onChange={this.handleChange}
              required
            />
          </p>
          <p>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.handleChange}
              minLength={8}
              required
            />
          </p>
          <p>
            <input type="submit" value="Sign In" />
          </p>
        </form>
      </div>
    )
  }
}

export default SignIn
