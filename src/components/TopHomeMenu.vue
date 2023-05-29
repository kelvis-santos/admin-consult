<!-- create a header menu with logou button -->
<script setup>
defineProps([
  'sidebarOpen',
])
</script>
<template>
  <div class="top-menu">
    <div class="top-menu__logo">
      <router-link to="/home">
        <img src="../assets/logo.png" alt="logo" />
      </router-link>
    </div>
    
    <div class="top-menu__links">
      <router-link to="/login">Logout</router-link>
    </div>
  </div>
</template>
<!-- create a css style based on HomePage.vue colors -->
<style scoped>
.top-menu {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: var(--oxford-blue);
  color: var(--lavender-web);
  height: 8vh;
}
.top-menu__logo img {
  width: 100px;
}
.top-menu__links a {
  color: var(--lavender-web);
  text-decoration: none;
  margin-left: 20px;
}
.top-menu__links a:hover {
  text-decoration: underline;
}

</style>
