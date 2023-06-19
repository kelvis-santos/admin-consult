<template>
    <div>
        <h2>Forgot Password</h2>
        <form @submit.prevent="resetPassword">
            <input type="email" v-model="email" placeholder="Email" required>
            <button type="submit">Reset Password</button>
            <router-link class="button-btn" to="/login">Back to Login</router-link>
        </form>
        <p v-if="success" class="success">{{ success }}</p>
        <p v-if="error" class="error">{{ error }}</p>
    </div>
</template>
  
<script>
export default {
    name: 'ForgotPassword',
    data() {
        return {
            email: '',
            success: '',
            error: '',
        };
    },
    methods: {
        resetPassword() {
            // Lógica para redefinir a senha do usuário
            if (this.email === 'user@example.com') {
                // Email válido, envie instruções de redefinição de senha
                this.success = 'Password reset instructions sent to your email.';
            } else {
                // Email inválido
                this.error = 'Invalid email address.';
            }
        },
    },
};
</script>
  