import React, { Component } from 'react'

class SignUp extends Component {
  state = {
    email: '',
    password: '',
    rePassword: ''
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  onSubmit = event => {
    event.preventDefault()
  }

  render() {
    return (
      <div>
        <h1>Sign Up</h1>

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
            <input
              type="password"
              name="rePassword"
              placeholder="Re-Password"
              value={this.state.rePassword}
              onChange={this.handleChange}
              minLength={8}
              required
            />
          </p>
          <p>
            <input type="submit" value="Sign Up" />
          </p>
        </form>
      </div>
    )
  }
}

export default SignUp
