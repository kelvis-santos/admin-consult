<template>
  <div class="container">
    <h2>Login</h2>
    <form @submit.prevent="login">
      <input type="email" v-model="email" placeholder="E-mail" required>
      <input type="password" v-model="password" placeholder="Password" required>
      <button type="submit">Login</button>
    </form>
    <p v-if="error" class="error">{{ error }}</p>
    <router-link to="/forgot-password">Forgot Password?</router-link>
  </div>
</template>

<script>
import api from '../services/RestService.js';

export default {
  name: 'LoginPage',
  data() {
    return {
      email: '',
      password: '',
      error: '',
    };
  },
  methods: {
    login() {
      api.post('/auth/login', {
        email: this.email,
        password: this.password
      })
      .then(response => {
        sessionStorage.setItem('token', response.data.token)
        this.$router.push('/home');
      })
      .catch(error => {
        if (error.response && error.response.status === 404) {
          this.error = 'Usuário não encontrado.';
        } else {
          this.error = error.message;
        }
      })
    } 
  },
};
</script>
<style>
.container {
  max-width: 400px;
  margin: 0 auto;
  padding: 40px;
}

h2 {
  font-size: 24px;
  text-align: center;
  margin-bottom: 20px;
}

input {
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  background-color: #333;
  border: none;
  color: #fff;
}

button {
  width: 100%;
  padding: 10px;
  background-color: var(--oxford-blue);
  border: none;
  color: #fff;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}

a {
  color: var(--lavender-web);
  text-decoration: none;
}

/* Estilos dark mode */
body.dark-mode {
  background-color: #333;
}

body.dark-mode h1,
body.dark-mode input,
body.dark-mode button {
  background-color: #555;
}

body.dark-mode a {
  color: var(--lavender-web);
}
</style>
