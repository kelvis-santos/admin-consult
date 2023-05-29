<template>
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
</template>
  
<script>
import TopHomeMenu from './TopHomeMenu.vue';
import Sidebar from './SideMenu.vue';

export default {
    name: 'HomePage',
    components: {
        TopHomeMenu,
        Sidebar
    },
    data() {
        return {
        };
    },
    methods: {
        logout() {
            // Lógica para deslogar o usuário
            this.$router.push('/login');
        },
    },
};
</script>

<style scoped>
.menu-dashboard {
    margin: 20px 0;
    /* display: flex; */
    justify-content: center;
    /* align-items: center; */
    /* padding: 20px; */
    /* background-color: ; */
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
    /* align-items: center; */
    /* flex-direction: column; */
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

  