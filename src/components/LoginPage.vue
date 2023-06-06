<template>
  <div class="container">
    <h2>Login</h2>
    <h5>Teste</h5>
    <form @submit.prevent="login">
      <input type="text" v-model="username" placeholder="Username" required>
      <input type="password" v-model="password" placeholder="Password" required>
      <button type="submit">Login</button>
    </form>
    <p v-if="error" class="error">{{ error }}</p>
    <router-link to="/forgot-password">Forgot Password?</router-link>
  </div>
</template>

<script>
export default {
  name: 'LoginPage',
  data() {
    return {
      username: '',
      password: '',
      error: '',
    };
  },
  methods: {
    login() {
      // Lógica para autenticar o usuário
      if (this.username === 'admin' && this.password === 'password') {
        // Autenticação bem-sucedida
        this.$router.push('/home');
      } else {
        // Autenticação falhou
        this.error = 'Invalid username or password';
      }
    },
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
