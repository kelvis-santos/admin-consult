<template>
    <v-app id="inspire">
        <v-app-bar>
            <v-btn class="blue-grey-darken-3" @click="drawer = !drawer">MENU</v-btn>

            <v-toolbar-title>Application</v-toolbar-title>

            <v-btn class="blue-grey-darken-3" @click="profile">Profile</v-btn>
            <v-btn class="blue-grey-darken-3" @click="logout">Logout</v-btn>
        </v-app-bar>

        <v-navigation-drawer v-model="drawer" temporary>
            <v-list v-for="item, index in menuDefault" :key="index">
                <v-list-item :to="item.path">
                    <v-list-item-content>
                        <v-list-item-title>{{ item.name }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>

        <v-main class="bg-grey-lighten-2">
            <v-item-group mandatory>
                <v-container>
                    <v-row>
                        <v-hover>
                            <v-col v-for="option, index in menuDefault" :key="index" cols="12" md="3">
                                <v-item>
                                    <v-card
                                        class="d-flex align-center teste" dark height="100" :to="option.path">
                                        <v-scroll-y-transition>
                                            <div class="text flex-grow-1 text-center">
                                                {{ option.name }} 
                                            </div>
                                        </v-scroll-y-transition>
                                    </v-card>
                                </v-item>
                            </v-col>
                        </v-hover>
                    </v-row>
                </v-container>
            </v-item-group>
        </v-main>
    </v-app>
</template>

<script>

export default {
    name: 'HomePage',
    data() {
        return {
            drawer: null,
            menuDefault: [
                {
                    path: '/home',
                    name: 'Home',
                },
                {
                    path: '/user',
                    name: 'Usuarios',
                },
                {
                    path: '/plans',
                    name: 'Planos',
                },
                {
                    path: '/orders',
                    name: 'Solicitações',
                },
                {
                    path: '/settings',
                    name: 'Configurações',
                },
                // {
                //     path: '/profile',
                //     name: 'Perfis',
                // },
                {
                    path: '/dashboard',
                    name: 'Dashboard',
                },
                {
                    path: '/products',
                    name: 'Produtos',
                },
                {
                    path: '/customers',
                    name: 'Clientes',
                }
            ]
        };
    },
    methods: {
        logout() {
            // Lógica para deslogar o usuário
            this.$router.push('/login');
        },
        profile() {
            // Lógica para ir para a página de perfil
            this.$router.push('/profile');
        },
    },
};
</script>

<style scoped>
.teste:hover {
    background-color: #37474F;
}

body {
    height: 100vh;
    align-items: center;
    justify-content: center;
    overflow: hidden;
}
</style>

  