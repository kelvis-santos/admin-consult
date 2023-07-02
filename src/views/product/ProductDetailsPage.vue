<template>
    <v-toolbar density="comfortable" :title="isNewProduct ? 'Novo Produto' : 'Detalhes do Produto'">
        <v-btn color="primary" dark :to="'/products'">Voltar</v-btn>
    </v-toolbar>
    <v-form>
        <v-container>
            <v-row>
                <v-col cols="12" md="6">
                    <v-text-field label="Nome" v-model="product.name" outlined dense></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                    <v-text-field label="Preço" v-model="product.price" outlined dense></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                    <v-text-field label="Descrição" v-model="product.description" outlined dense></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                    <v-text-field label="Imagem" v-model="product.image" outlined dense></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                    <v-text-field label="Quantidade" v-model="product.quantity" outlined dense></v-text-field>
                </v-col>
                <v-row>
                    <v-col cols="12" md="6">
                        <v-switch
                        color="primary"
                        v-model="product.availability"
                        label="Disponibilidade"
                        ></v-switch>
                    </v-col>
                </v-row>
            </v-row>
    
            <v-row>
                <v-col v-if="isNewProduct" cols="12" md="2">
                    <v-btn color="primary" dark @click="saveProduct()">Salvar</v-btn>
                </v-col>
                <v-col v-else cols="12" md="3">
                    <v-btn color="primary" dark @click="updateProduct()">Atualizar</v-btn>
                </v-col>
            </v-row>
        </v-container>
    </v-form>
    <v-snackbar
        v-model="productUpdated"
        :timeout="2000"
        color="success"
        elevation="24"
    >
        Product updated successfully!
    </v-snackbar>
</template>

<script>
import api from "@/services/RestService.js"


export default {
    data() {
        return {
            product: {
                name: '',
                price: '',
                description: '',
                image: '',
                quantity: '',
                availability: false,
            },
            isNewProduct: true,
            productUpdated: false,
        }
    },
    mounted() {
        if (this.$route.params.id !== undefined) {
            this.isNewProduct = false;
            this.getProduct()
        }
    },
    watch: {
      productUpdated() {
        setTimeout(() => {
          this.productUpdated = false
        }, 3000)
      },
    },
    methods: {
        isProductValid() {
            if (this.product.name === '') {
                return false
            }
            if (this.product.price === '') {
                return false
            }
            if (this.product.description === '') {
                return false
            }
            if (this.product.image === '') {
                return false
            }
            if (this.product.quantity === '') {
                return false
            }
            return true
        },
        saveProduct() {
            if(this.isProductValid()) {
                api.post('/products', this.product)
                    .then((response) => {
                        if (response.status === 201) {
                            this.product = response.data
                            this.$router.push('/products')
                        }
                    })
                    .catch((error) => {
                        console.log(error)
                    })
            }
        },
        updateProduct() {
            if(this.isProductValid()) {
                api.put(`/products/${this.product.id}`, this.product)
                    .then((response) => {
                        if (response.status === 200) {
                            this.productUpdated = true
                            this.product = response.data
                            setTimeout(() => {
                                this.$router.push('/products')
                            }, 3000)
                        }
                    })
                    .catch((error) => {
                        this.productUpdated = false
                        console.log(error)
                    })
            }
        },
        getProduct() {
            const id = this.$route.params.id
            if (id === undefined) {
                return
            }
            api.get(`/products/${id}`)
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