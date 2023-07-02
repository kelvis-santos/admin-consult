<template>
    <v-toolbar density="comfortable" title="Lista de Clientes">
        <v-btn color="primary" dark :to="'/home'">Voltar</v-btn>
    </v-toolbar>
    <v-container>
        <v-row>
            <v-col cols="12" md="6">
                <v-text-field label="Buscar" outlined dense></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
                <v-btn color="primary" dark :to="'/customer/register'">Novo Cliente</v-btn>
            </v-col>
        </v-row>
    </v-container>
    <!-- <v-container v-if="users.length === 0">
        <v-row>
            <v-col cols="12">
                <v-alert type="warning" outlined>
                    Nenhum registro encontrado.
                </v-alert>
            </v-col>
        </v-row>
    </v-container> -->
    <TableList class="table-position" :customers="customers" />
</template>
<script>

import api from '@/services/RestService.js';
import TableList from '@/components/TableList.vue'

export default {
    data() {
        return {
            customers: [],
        }
    },
    components: {
        TableList,
    },
    mounted() {
        this.getCustomerList()
    },
    methods: {
        getCustomerList() {
            api.get('/customer')
                .then((response) => {
                    this.customers = response.data
                })
                .catch((error) => {
                    console.log(error)
                })
        },
    },
}

</script>