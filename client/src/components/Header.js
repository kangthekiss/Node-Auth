import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Header extends Component {
  render() {
    return (
      <header style={styles.header}>
        <Link to="/" style={styles.link}>
          Home
        </Link>
        <Link to="/profile" style={styles.link}>
          Profile
        </Link>
        <Link to="/signIn" style={styles.link}>
          Sign In
        </Link>
        <Link to="/signUp" style={styles.link}>
          Sign Up
        </Link>
      </header>
    )
  }
}

let styles = {
  header: {
    display: 'flex',
    height: '80px',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  link: {
    marginLeft: '40px'
  }
}

export default Header
