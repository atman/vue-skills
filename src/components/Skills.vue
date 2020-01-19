<template>
<div class="hello">
  <v-card elevation="1" >
          <v-text-field
          label="Enter New Skill"
          clearable="true"
          prepend-inner-icon="mdi-text-shadow"          
          solo
          ></v-text-field>

          <v-card-title class="headline">{{ name }}</v-card-title>

           <v-card-subtitle>{{ btnState ? "Button is disabled" : "button is active"}}</v-card-subtitle>

           <v-card-actions>
             <v-btn text v-on:click="changeName" v-bind:disabled="btnState">Change Name</v-btn>
           </v-card-actions>

           <v-list subheader flat>
           <v-list-item-group v-model="data" flat>
              <v-subheader>Skills</v-subheader>
              <template v-for="(data, index) in skills">
               <v-list-item :key="index" >
                 <v-list-item-content>
                   <v-list-item-title>{{ index }}.{{ data.skill }}</v-list-item-title>
                 </v-list-item-content>
               </v-list-item>
               <v-divider :key="index"></v-divider>
             </template>
            </v-list-item-group>
            </v-list>
            <br><br>
            <v-list-item>
              <v-list-item-subtitle v-if="skills.length > 1"> You have more than 1 skills </v-list-item-subtitle>
              <v-list-item-subtitle v-else> You have less than or equal to 1 skills </v-list-item-subtitle>
            </v-list-item>
         </v-card>






  <li v-for="(data, index) in skills" :key='index'> </li>

  <br><br>

</div>
</template>

<script>
export default {
  name: 'Skills',
  data() {
    return {
      name: "Vue Skills",
      btnState: false,
      skills:[
        {"skill": "Vue JS"},
        {"skill": "Frontend Development"}

      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
