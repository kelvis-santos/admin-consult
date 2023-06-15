<template>
    <v-toolbar density="comfortable" title="Lista de Usuarios"></v-toolbar>
    <v-container>
        <v-row>
            <v-col cols="12">
                <TableList :users="users" />
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
import axios from 'axios'
import TableList from './TableList.vue'

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