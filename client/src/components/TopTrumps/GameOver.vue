<template>
<div id="game-over">
    GAME OVER!
    <p v-if="winner==='one'">You beat the computer, nice one!</p>
    <p v-if="winner==='two'">The computer beat you, whoops!</p>
    <button v-on:click="playAgain()">Play Again</button>
</div>
  
</template>

<script>
import { eventBus } from '../../main.js'

export default {
    name: 'game-over',
    props: ['winner'],
    methods: {
        playAgain(){
            eventBus.$emit('play-again')
        }
    }

}
</script>

<style>

</style>