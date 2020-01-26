<template>
<nav>
      <v-app-bar app clipped-left>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer" ></v-app-bar-nav-icon>
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

      <v-navigation-drawer app clipped v-model="drawer" >
        <v-btn><router-link to="/">Home</router-link></v-btn>
        <v-btn><router-link to="/about">About</router-link></v-btn>

      </v-navigation-drawer>

    </nav>
</template>

<script>
export default {
  data() {
    return {
      drawer: false
    }
  }
}
</script>

<style>
</style>