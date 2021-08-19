<template>
  <div v-if="isActive">
    <button @click="getNormalJoke">Normal Joke</button>
    <p>{{ myJoke }}</p>
  </div>
</template>

<script>

  export default {
    name : 'NormalJoke',
    data:() => {
          return {
              myJoke : "",
              jokeState : false
          }
    },
    props : {
        isActive : String,
    },
    computed : {
      getJokefromStore: function() {
        return this.$store.state.apiJoke;
      }
    },
    methods : {
          getNormalJoke() {
              this.myJoke = this.getJokefromStore;
          }
      },
      updateState() {
          this.jokeState = true;
      }
  }
</script>

<style scoped>
  .buttonVisible {
      display: none;
  }
</style>