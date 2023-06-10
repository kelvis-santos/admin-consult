<template>
  <div class="container">
    <v-card
    class="mx-auto mt-10 pa-5 text-center shadow-2 rounded-2 mb-5 mt-5"
    max-width="400"
    outlined
    >
      <v-card-title>Login</v-card-title>
      <v-text-field
        type="email"
        label="E-mail"
        :rules="rulesEmail"
        v-model="email"
        hide-details="auto"
      ></v-text-field>
      <v-text-field
        type="password"
        label="Password"
        :rules="rulesPassword"
        v-model="password"
      ></v-text-field>

      
      <v-btn
        color="deep-purple-lighten-2"
        :loading="loading"
        @click="login"
      >
        Login

        <template v-slot:loader>
          <v-progress-linear indeterminate></v-progress-linear>
        </template>
      </v-btn>
    </v-card>
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
      loading: false,
      rulesEmail: [
        value => !!value || 'Required.',
        value => (value || '').length <= 20 || 'Max 20 characters',
        value => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          return pattern.test(value) || 'Invalid e-mail.'
        },
      ],
      rulesPassword: [
        value => !!value || 'Required.',
        value => (value || '').length <= 20 || 'Max 20 characters',
        value => (value || '').length >= 6 || 'Min 6 characters',
      ],
    };
  },
  watch: {
    loading (val) {
      if (!val) return
    },
  },
  methods: {
    login() {
      this.loading = true;
      api.post('/auth/login', {
        email: this.email,
        password: this.password
      })
      .then(response => {
        sessionStorage.setItem('token', response.data.token)
        this.loading = false;
        this.$router.push('/home');
      })
      .catch(error => {
        if (error.response && error.response.status === 404) {
          this.error = 'Usuário não encontrado.';
        } else {
          this.error = error.message;
        }
        this.loading = false;
      })
    } 
  },
};
</script>
<style scoped>
.container {
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin-top: 30vh;
}
</style>
