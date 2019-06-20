<template>
    <div class="container">
      <form @submit="signIn" >
        <h1>Sign In</h1>
        <input type="email" required placeholder="Email" v-model="email">
        <input type="password" required placeholder="Password" v-model="password">
        <button type="submit">Sign In</button>
      </form>
      {{error.length > 0 ? error: ''}}
    </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'SignIn',
  data() {
    return {
      email: '',
      password: '',
      error: []
    }
  },
  methods: {
    signIn(e) {
      e.preventDefault()
      this.error = []

      axios({
        method: 'POST',
        url: 'http://localhost:3002/auth/signup',
        data: {
          email: this.email,
          password: this.password
        }
      })
      .then(res => {
        
      })
      .catch(err => {
        console.error(err)
        this.error.push(err)
      })

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
form > input {
  padding: 5px;
  margin: 10px;
}
form > button {
  padding: 5px;
}
</style>
