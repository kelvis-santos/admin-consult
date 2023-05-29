<script>
export default {
  name: 'UserPage',
  data() {
    return {
      name: '',
      email: '',
      phone: '',
      error: '',
    };
  },
  methods: {
    save: () => {
      // Lógica para salvar o usuário
      if (this.name === 'admin' && this.email !== '') {
        // Autenticação bem-sucedida
        this.$router.push('/home');
      } else {
        // Autenticação falhou
        this.error = 'Invalid username or password';
      }
    },
    // create a method to clear the error message after 3 seconds
    clearError() {
      setTimeout(() => {
        this.error = '';
      }, 3000);
    },
  },
};
</script>
<template>
  <div>
    User Page
  </div>
  <!-- Create a form with a user data inputs and save methods -->
  <div class="container">
    <h2>User</h2>
    <form @submit.prevent="save">
      <input type="text" v-model="email" placeholder="Email" />
      <input type="text" v-model="password" placeholder="Password" />
      <button type="submit">Save</button>
    </form>
    <router-link to="/home">Voltar</router-link>
    <p v-if="error" class="error">{{ error }}</p>
  </div>
</template>
<style>
div {
  justify-content: center;
  text-align: center;
}
</style>