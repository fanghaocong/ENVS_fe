<template>
  <div id="app">
    <SideMenuVue />
    <main id="page-wrap">
      <header></header>
      <router-view />
    </main>
    
  </div>
</template>


<script>
import SideMenuVue from "./components/SideMenu.vue";

export default {
  components: {
    SideMenuVue,
  },
};
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

header {
  height: 50px;
  border: solid;
  border-color: white;
}

#page-wrap {
  margin-right: 300px;
}

</style>
