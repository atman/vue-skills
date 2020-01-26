<template>
  <v-app id="app">
    
    <NavBar/>
    <v-content>
      <v-container fluid>
          <router-view></router-view>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
//import Skills from "./components/Skills";
//import Login from './components/Login';
import NavBar from './components/NavBar';

export default {
  name: "App",
  components: {
    //Skills
    NavBar
    //Login
  },
  data: () => ({
    drawer: false
  })
};
</script>

<style>
</style>