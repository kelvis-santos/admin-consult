<!-- <template>
    <div>
        <TopHomeMenu />
        <Sidebar
            :isActive="false"
        />
    </div>
    <div class="menu-dashboard">
        <h2>Welcome to the Home Page!</h2>
        <div class="icons-menu-dashboard">
            <router-link to="/user">Usuarios</router-link>
            <router-link to="/plans">Planos</router-link>
            <router-link to="/orders">Solicitações</router-link>
            <router-link to="/settings">Configurações</router-link>
            <router-link to="/profile">Perfis</router-link>
            <router-link to="/dashboard">Dashboard</router-link>
        </div>
    </div>
</template> -->

<template>
    <v-app id="inspire">
      <v-app-bar>
        <v-btn class="blue-grey-darken-3" @click="drawer = !drawer">MENU</v-btn>
  
        <v-toolbar-title>Application</v-toolbar-title>

        <v-btn class="blue-grey-darken-3" @click="profile">Profile</v-btn>
        <v-btn class="blue-grey-darken-3" @click="logout">Logout</v-btn>
      </v-app-bar>
  
      <v-navigation-drawer
        v-model="drawer"
        temporary
      >
        <!--  -->
      </v-navigation-drawer>
  
      <v-main class="bg-grey-lighten-2">
        <v-container>
          <v-row>
            <template v-for="n in 1" :key="n">
              <v-col
                class="mt-2"
                cols="12"
              >
              </v-col>
  
              <v-col
                v-for="j in 6"
                :key="`${n}${j}`"
                cols="3"
                md="2"
              >
                <v-sheet height="150"></v-sheet>
              </v-col>
            </template>
          </v-row>
        </v-container>
      </v-main>
    </v-app>
  </template>

<script>

export default {
    name: 'HomePage',
    data() {
        return {
            drawer: null,
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

body {
    height: 100vh;
    align-items: center;
    justify-content: center;
    overflow: hidden;
}

.menu-dashboard {
    margin: 20px 0;
    justify-content: center;
    color: #fff;
    width: 100%;
    height: 100vh;
}

.menu-dashboard h2 {
    margin-right: 20px;
}

.menu-dashboard .icons-menu-dashboard {
    display: flex;
    justify-content: space-evenly;
}

.menu-dashboard .icons-menu-dashboard a {
    color: #fff;
    text-decoration: none;
    margin: 20px 0;
    padding: 10px 20px;
    border: 1px solid #fff;
    border-radius: 5px;
}

.menu-dashboard .icons-menu-dashboard a:hover {
    text-decoration: underline;
}

/* sidebar */
.sidebar-open {
    margin-left: 250px;
}

.toggle-sidebar {
    position: fixed;
    top: 20px;
    left: 20px;
    background-color: #f0f0f0;
    border: none;
    border-radius: 50%;
    padding: 10px;
    cursor: pointer;
    z-index: 999;
}

.fa {
    font-size: 20px;
    color: #333;
}
</style>

  