<template>
    <v-toolbar density="comfortable" title="Detalhes do Produto">
        <v-btn color="primary" dark :to="'/products'">Voltar</v-btn>
    </v-toolbar>

    <v-container>
        <v-row>
            <v-col cols="12" md="6">
                <v-text-field label="Nome" v-model="product.name" outlined dense></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
                <v-text-field label="Preço" v-model="product.price" outlined dense></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
                <v-text-field label="Quantidade" v-model="product.quantity" outlined dense></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
                <v-text-field label="Descrição" v-model="product.description" outlined dense></v-text-field>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            product: {
                name: '',
                price: '',
                quantity: '',
                description: '',
            },
        }
    },
    mounted() {
        this.getProduct()
    },
    methods: {
        getProduct() {
            const id = this.$route.params.id
            if (id === undefined) {
                return
            }
            this.$api.get(`/products/${id}`)
                .then((response) => {
                    this.product = response.data
                })
                .catch((error) => {
                    console.log(error)
                })
        },
    },
}
</script>