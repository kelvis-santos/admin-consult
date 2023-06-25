<template>
    <v-container class="container">
        <v-card
            class="mx-auto mt-10 pa-5 text-center shadow-2 rounded-2 mb-5 mt-5"
        >
            <v-card-title>
                <span class="headline">Forgot Password</span>
            </v-card-title>
            <v-card-text>
                <v-form>
                    <v-text-field
                        v-model="email"
                        label="Email"
                        required
                    ></v-text-field>
                    <v-btn
                        color="primary"
                        @click="resetPassword"
                    >
                        Reset Password
                    </v-btn>
                    <v-alert
                        v-if="success"
                        type="success"
                        dismissible
                    >
                        {{ success }}
                    </v-alert>
                    <v-alert
                        v-if="error"
                        type="error"
                        dismissible
                        class="ma-2"
                    >
                        {{ error }}
                    </v-alert>
                </v-form>
            </v-card-text>
            <router-link to="/login">Back to Login</router-link>
        </v-card>
    </v-container>
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
    watch: {
        error(message) {
            if(message) {
                setTimeout(() => {
                    this.error = '';
                }, 5000);
            }
        }
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
<style scoped>
.container {
    max-width: 600px;
    height: 100vh;
}
</style>
  