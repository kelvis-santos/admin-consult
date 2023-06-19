<template>
    <v-toolbar density="comfortable" title="Lista de Usuarios">
        <v-btn color="primary" dark :to="'/home'">Voltar</v-btn>
    </v-toolbar>
    <v-container class="">
        <v-row>
            <v-col cols="12" md="6">
                <v-text-field label="Buscar" outlined dense></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
                <v-btn color="primary" dark :to="'/user/register'">Novo Usuario</v-btn>
            </v-col>
        </v-row>
    </v-container>
    <TableList class="table-position" :users="users" />
</template>
<script>
import axios from 'axios'
import TableList from '@/components/TableList.vue'

export default {
    data() {
        return {
            users: [],
        }
    },
    components: {
        TableList,
    },
    mounted() {
        this.getUsers()
    },
    methods: {
        getUsers() {
            axios.get('https://jsonplaceholder.typicode.com/users')
                .then(response => {
                    this.users = response.data
                })
                .catch(error => {
                    console.log(error)
                })
        },
    },
}
</script>
<style scoped>
.table-position {
    position: absolute;
    bottom: 0;
    width: 100%;
}
</style>
