<template>
  <div class="hello" v-on:keyup.esc="clear">
    <v-card elevation="1">
      <ValidationObserver ref="obs" v-slot="{ invalid, validated, passes, passed, validate }">
        <form @submit.prevent="passes(submit)">
          <ValidationProvider mode="lazy" name="skill" rules="required|min:4|max:30" v-slot="{ errors, valid }">
            <v-text-field
              :counter="30"
              :error-messages="errors"
              :success="valid"
              placeholder="Enter New Skill"
              required
              label="Enter New Skill"
              clearable
              prepend-inner-icon="mdi-text-shadow"
              solo
              v-model.trim="skill"
            ></v-text-field>
            </ValidationProvider>
            <v-card-actions>
              <v-btn
                v-on:click="passes(submit)"
                color="primary"
              >Add Skills</v-btn>
            </v-card-actions>
          
        </form>


        
      </ValidationObserver>
      <v-list subheader flat>
        <v-list-item-group v-model="data">
          <v-subheader>Skills</v-subheader>
          <v-slide-y-transition class="py-0" group tag="v-list">
            <template v-for="(data, index) in skills">
              <v-list-item :key="index">
                <v-list-item-content>
                  <v-list-item-title>{{ data.skill }}</v-list-item-title>
                </v-list-item-content>
                <v-icon @click="removeSkill(index)">mdi-delete</v-icon>
              </v-list-item>
              <v-divider :key="index"></v-divider>
            </template>
          </v-slide-y-transition>
        </v-list-item-group>
      </v-list>
      <br />
      <br />
      <v-list-item>
        <v-list-item-subtitle v-if="skills.length > 1">You have {{skills.length}} skills</v-list-item-subtitle>
      </v-list-item>
    </v-card>

    <br />
    <br />
  </div>
</template>

<script>
import {
  ValidationObserver,
  ValidationProvider
} from "vee-validate/dist/vee-validate.full.esm";
import { setInteractionMode } from 'vee-validate';
import { extend } from 'vee-validate';

setInteractionMode('lazy');

extend('required', {
  validate (value) {
    return {
      required: true,
      valid: ['', null, undefined].indexOf(value) === -1
    };
  },
  computesRequired: true
});

export default {
  components: {
    ValidationProvider,
    ValidationObserver
  },
  name: "Skills",
  data() {
    return {
      name: "Vue Skills",
      btnState: false,
      skill: "",
      skills: []
    };
  },
  methods: {
    async clear() {
      this.skill = this.email = this.select = this.checkbox = "";
      requestAnimationFrame(() => {
        this.$refs.obs.reset();
      });
    },
    async submit() {
      this.addSkill();
      this.clear();
    },
    addSkill() {
      this.skills.push({ skill: this.skill });
      this.skill = "";
    },
    removeSkill(index) {
      this.skills.splice(index, 1);
      this.skill = "";
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!--<style src="../styles/skills.css" scoped>-->
<style scope>
.alert {
  background-color: red;
  width: 100%;
  height: 30px;
}
.v-list-item {
  padding: 20px;
  font-size: 1.3em;

  border-left: 5px solid #3eb3f6;
  margin-bottom: 2px;
  color: #3e5252;
}
</style>
