<template>
    <div :class="isActive ? 'sidebar-active' : 'sidebar-inactive'">
        <li>
            <a @click="toggleSidebar">|||</a>
        </li>
        <ul v-if="isActive">
            <li v-for="item in menuItems" :key="item.id">
                <router-link :to="item.route" active-class="active">{{ item.title }}</router-link>
            </li>
        </ul>
    </div>
</template>
  
<script>
export default {
    name: 'SidebarMenu',
    data() {
        return {
            menuItems: [
                { id: 1, title: 'Home', route: '/home' },
                { id: 2, title: 'Customers', route: '/customers' },
                { id: 3, title: 'Plans', route: '/plans' },
                { id: 4, title: 'Settings', route: '/settings' },
            ],
            isActive: true
        };
    },
    methods: {
        toggleSidebar() {
            this.isActive = !this.isActive;
        },
    }
};
</script>
  
<style>
.sidebar-active {
    float: left;
    width: 150px;
    background-color: var(--oxford-blue);;
    padding: 20px;
    height: 100vh;
}

.sidebar-inactive {
    float: left;
    width: 15px;
    background-color: var(--oxford-blue);;
    padding: 20px;
    height: 100vh;
}

ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
}

li {
    margin-bottom: 10px;
}
/* crie uma classe que remova as definicoes padrao da tag html li */
li {
    list-style-type: none;
}
a {
    text-decoration: none;
    color: var(--lavender-web);
}

a {
    text-decoration: none;
    color: var(--lavender-web);
}

a.active {
    font-weight: bold;
    color: var(--lavender-web);
}
</style>
  