<template>
    <div v-if="isActive">
        <button @click="getLoudJoke">Loud Joke</button>
        <p>{{ loudJoke.toUpperCase() }}</p>
    </div>
</template>

<script>
    export default {
        name : 'LoudJoke',
        data:() => {
            return {
                loudJoke : "",
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
            getLoudJoke() {
               this.loudJoke = this.getJokefromStore;
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