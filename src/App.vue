<template>
  <div id="app">
    <h1>FUNNY JOKES</h1>
    <button @click="makeAxiosCall">GENERATE JOKE</button>
    <p> {{ apiJoke }} </p>
    <NormalJoke v-if="apiCalled == true" isActive='true'/>
    <LoudJoke v-if="apiCalled == true" isActive='true'/>
    <SnakeJoke v-if="apiCalled == true" isActive='true'/>

  </div>
</template>

<script>
import axios from "axios"
import NormalJoke from "./components/NormalJoke.vue";
import LoudJoke from "./components/LoudJoke.vue";
import SnakeJoke from "./components/SnakeJoke.vue";


export default {
  name: "App",
  components: {
    NormalJoke,
    LoudJoke,
    SnakeJoke,

  },
  data() {
    return {
      apiCalled : false,
      apiJoke : ""
    }
  },
  methods: {
    makeAxiosCall() {
      axios.request({
        method : 'GET',
        url : 'https://geek-jokes.sameerkumar.website/api?format=json'
      }).then((response) => {
        console.log(response.data.joke);
        this.apiJoke = response.data.joke;
        this.$store.commit('storeJoke', this.apiJoke)
        this.apiCalled = true;
      }).catch((error) => {
         console.error("There was an error: " +error);
      })
    }

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
    margin-top: 60px;
    border: 1px black solid;
    height: 70vh;
  }
  button {
    display: block;
    box-shadow:inset 0px 39px 0px -24px #e67a73;
    background-color:#e4685d;
    border-radius:4px;
    border:1px solid #ffffff;
    display:inline-block;
    cursor:pointer;
    color:#ffffff;
    padding:6px 15px;
    text-decoration:none;
    text-shadow:0px 1px 0px #b23e35;
  }
</style>
