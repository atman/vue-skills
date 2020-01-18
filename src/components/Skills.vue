<template>
<div class="hello">
  {{ name }}
  {{ btnState ? "Button is disabled" : "button is active"}}

  <button v-on:click="changeName" v-bind:disabled="btnState"> Change Name </button>
  <br><br>

  <li v-for="(data, index) in skills" :key='index'> {{ index }}.{{ data.skill }}</li>

  <br><br>
  <div v-if="skills.length > 1"> You have more than 1 skills </div>
  <div v-else> You have less than or equal to 1 skills </div>
</div>
</template>

<script>
export default {
  name: 'Skills',
  data() {
    return {
      name: "Vue Skills",
      btnState: true,
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
