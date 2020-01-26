<template>
  <v-app id="app">
    <nav>
      <v-app-bar>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="hidden-md-and-up"></v-app-bar-nav-icon>
        <v-toolbar-title class="test-uppercase grey--text">
          <span class="font-weight-light">Vue</span>
          <span class="font-weight-black">Skills</span>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <div class="hidden-sm-and-down">
          <v-btn flat ><router-link to="/">Home</router-link></v-btn>
          <v-btn flat class="ma-2"><router-link to="/about">About</router-link></v-btn>
          <v-btn class="ma-2" outlined color="indigo">Login</v-btn>
        </div>
      </v-app-bar>

      <v-navigation-drawer app temporary v-model="drawer">
        <v-btn flat><router-link to="/">Home</router-link></v-btn>
        <v-btn flat><router-link to="/about">About</router-link></v-btn>

      </v-navigation-drawer>

    </nav>
    
    <v-container fluid>
      <v-row>
        <v-col class="pa-md-4 mx-lg-auto">
          <router-view />
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
//import Skills from "./components/Skills";
//import Login from './components/Login';
export default {
  name: "App",
  components: {
    //Skills
    //Login
  },
  data: () => ({
    drawer: false
  })
};
</script>

<style>
</style>