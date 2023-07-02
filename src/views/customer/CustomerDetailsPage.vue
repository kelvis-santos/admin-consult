<template>
    <v-toolbar density="comfortable" title="Detalhes do Cliente">
        <v-btn color="primary" dark :to="'/customer'">Voltar</v-btn>
    </v-toolbar>
    <v-container>
        <v-row>
            <v-col cols="12" md="6">
                <v-text-field label="Nome" v-model="customer.name"></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
                <v-text-field label="E-mail" v-model="customer.email"></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
                <v-text-field label="Telefone" v-model="customer.phone"></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
                <v-text-field label="CPF" v-model="customer.cpf"></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
                <v-text-field label="Data de Nascimento" v-model="customer.birthdate"></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
                <v-text-field label="CEP" v-model="customer.cep"></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
                <v-text-field label="Endereço" v-model="customer.address"></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
                <v-text-field label="Número" v-model="customer.number"></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
                <v-text-field label="Complemento" v-model="customer.complement"></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
                <v-text-field label="Bairro" v-model="customer.neighborhood"></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
                <v-text-field label="Cidade" v-model="customer.city"></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
                <v-text-field label="Estado" v-model="customer.state"></v-text-field>
            </v-col>
        </v-row>
        <v-row>
            <v-col v-if="isNewCustomer" cols="12" md="2">
                <v-btn color="primary" dark @click="saveCustomer()">Salvar</v-btn>
            </v-col>
            <v-col v-else cols="12" md="3">
                <v-btn color="primary" dark @click="updateCustomer()">Atualizar</v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
import api from '@/services/RestService.js';

export default {
    data() {
        return {
            customer: {},
            isNewCustomer: true,
        }
    },
    mounted() {
        if (this.$route.params.id !== undefined) {
            this.getCustomer()
        }
    },
    methods: {
        getCustomer() {
            api.get(`/customer/${this.$route.params.id}`)
                .then((response) => {
                    this.customer = response.data
                })
                .catch((error) => {
                    console.log(error)
                })
        },
        saveCustomer() {
            api.post('/customer', this.customer)
                .then((response) => {
                    if (response.status === 201) {
                        this.$router.push('/customer')
                    }
                })
                .catch((error) => {
                    console.log(error)
                })
        },
        updateCustomer() {
            api.put(`/customer/${this.$route.params.id}`, this.customer)
                .then((response) => {
                    if (response.status === 200) {
                        this.$router.push('/customer')
                    }
                })
                .catch((error) => {
                    console.log(error)
                })
        },
        validateCustomer() {
            if (this.customer.name === '') {
                return false
            }
            if (this.customer.email === '') {
                return false
            }
            if (this.customer.phone === '') {
                return false
            }
            if (this.customer.cpf === '') {
                return false
            }
            if (this.customer.birthdate === '') {
                return false
            }
            if (this.customer.cep === '') {
                return false
            }
            if (this.customer.address === '') {
                return false
            }
            if (this.customer.number === '') {
                return false
            }
            if (this.customer.complement === '') {
                return false
            }
            if (this.customer.neighborhood === '') {
                return false
            }
            if (this.customer.city === '') {
                return false
            }
            if (this.customer.state === '') {
                return false
            }
            return true
        },
    },
}


</script>