<template>
  <v-app id="app">
    <div>
      <v-app-bar>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

         <v-toolbar-title>Vue Skills</v-toolbar-title>

         <v-spacer></v-spacer>

         <v-btn icon>
           <v-icon>mdi-magnify</v-icon>
         </v-btn>

         <v-btn class="ma-2" outlined color="indigo">Login</v-btn>
       </v-app-bar>
     </div>

     <v-container class="grey lighten-5">
       <v-row>
         <v-col cols="12" >
           <v-row align="center" justify="center" class="grey lighten-5">

                <Skills/>

            </v-row>
          </v-col>
        </v-row>
      </v-container>

  </v-app>
</template>

<script>

import Skills from './components/Skills';

export default {
  name: 'App',

  components: {
    Skills
  },

  data: () => ({
    //
  }),
};
</script>

<style>

</style>
