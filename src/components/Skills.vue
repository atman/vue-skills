<template>
<div class="hello">
  <v-card elevation="1" >
    <ValidationObserver ref="obs" v-slot="{ invalid, validated, passes, validate }">
    <form @submit.prevent="passes(submit)">
      <ValidationProvider name="Name" rules="required|max:10" v-slot="{ errors, valid }">
            <v-text-field

              :counter="10"
              :error-messages="errors"
              :success="valid"

              required
              label="Enter New Skill"
              clearable="true"
              prepend-inner-icon="mdi-text-shadow"
              solo
              v-model="skill"

            ></v-text-field>
          </ValidationProvider>

    </form>


          <v-card-title class="headline">{{ name }}</v-card-title>

           <v-card-subtitle>{{ btnState ? "Button is disabled" : "button is active"}}</v-card-subtitle>

           <v-card-actions>
             <v-btn v-on:click="changeName" @click="passes(submit)" :disabled="invalid || !validated" color="primary">Add Skill</v-btn>
           </v-card-actions>
</ValidationObserver>
           <v-list subheader flat>
           <v-list-item-group v-model="data" flat>
              <v-subheader>Skills</v-subheader>
              <template v-for="(data, index) in skills">
               <v-list-item :key="index" >
                 <v-list-item-content>
                   <v-list-item-title>{{ data.skill }}</v-list-item-title>
                 </v-list-item-content>
                 <v-icon @click="removeSkill(index)">mdi-delete</v-icon>
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
        <div v-bind:class="{alert: showAlert}"></div>
  <br><br>

</div>
</template>

<script>
import { ValidationObserver, ValidationProvider } from 'vee-validate/dist/vee-validate.full.esm';


export default {
  components: {
    ValidationProvider,
    ValidationObserver
  },
  name: 'Skills',
  data() {
    return {
      name: "Vue Skills",
      btnState: false,
      skill:'',
      skills:[
        {"skill": "Vue JS"},
        {"skill": "Frontend Development"}

      ],

    }
  },
  methods:{
    async clear() {
          this.name = this.email = this.select = this.checkbox = "";
          requestAnimationFrame(() => {
            this.$refs.obs.reset();
          });
        },
    async submit() {
        this.addSkill();
    },
    addSkill(){
      this.skills.push({skill: this.skill});
      this.skill = "";
    },
    removeSkill(index){
      this.skills.splice(index, 1);
      this.skill = "";
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!--<style src="../styles/skills.css" scoped>-->
<style scope>
.alert{
  background-color: red;
  width: 100%;
  height: 30px
}
.v-list-item {
   padding: 20px;
   font-size: 1.3em;

   border-left: 5px solid #3EB3F6;
   margin-bottom: 2px;
   color: #3E5252;
 }
</style>
