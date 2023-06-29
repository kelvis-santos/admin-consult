<template>
    <v-toolbar density="comfortable" title="Lista de Produtos">
        <v-btn color="primary" dark :to="'/home'">Voltar</v-btn>
    </v-toolbar>
    <v-container>
        <v-row>
            <v-col cols="12" md="6">
                <v-text-field label="Buscar" outlined dense></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
                <v-btn color="primary" dark :to="'/product/register'">Novo Produto</v-btn>
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
    <TableList class="table-position" :products="products" />
</template>
<script>
import api from '@/services/RestService.js';
import TableList from '@/components/TableList.vue'

export default {
    data() {
        return {
            products: [],
        }
    },
    components: {
        TableList,
    },
    mounted() {
        this.getProductList()
    },
    methods: {
        getProductList() {
            api.get('/products')
                .then((response) => {
                    this.products = response.data
                })
                .catch((error) => {
                    console.log(error)
                })
        },
    },
}
</script>
<style scoped>
.table-position {
    bottom: 0;
    width: 100%;
}
</style>
