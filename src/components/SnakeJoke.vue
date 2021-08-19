<template>
    <div v-if="isActive">
        <button @click="getSnakeJoke">Snake Joke</button>
        <p>{{ myJoke.split(' ').join('_') }}</p>
 
    </div>
</template>

<script>
    export default {
        name : 'SnakeJoke',
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
            getSnakeJoke() {
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