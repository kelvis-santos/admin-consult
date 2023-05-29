<!-- Create a vuejs3 page with a user profile form and save method -->
<template>
    <div class="container">
        <h2>Profile</h2>
        <form @submit.prevent="save">
            <input type="text" v-model="name" placeholder="Name" />
            <input type="text" v-model="email" placeholder="Email" />
            <input type="text" v-model="phone" placeholder="Phone" />
            <button type="submit">Save</button>
        </form>
            <router-link to="/home">Voltar</router-link>
        <p v-if="error" class="error">{{ error }}</p>
    </div>
</template>
<script>
export default {
    name: 'ProfilePage',
    data() {
        return {
            name: '',
            email: '',
            phone: '',
        };
    },
    methods: {
        save() {
            // Lógica para salvar o usuário
            if (this.name === 'admin' && this.email !== '' && this.phone !== '') {
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