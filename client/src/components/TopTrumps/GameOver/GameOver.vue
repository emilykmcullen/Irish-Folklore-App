<template>
<div id="game-over">
    <p id="game-over">GAME OVER!</p>
    <p v-if="winner==='one'">You beat the computer, nice one!</p>
    <p v-if="winner==='two'">The computer beat you, whoops!</p>
    <button class="play-again" v-on:click="playAgain()">Play Again</button>
</div>
  
</template>

<script>
import { eventBus } from '../../../main.js'

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
.play-again{
    border-radius: 10px;
    margin-right: 10px;
    margin-bottom: 3px;;
    font-family: 'Press Start 2P', sans-serif;
    background-color: #6e81e9;
    color: darkblue;
    border-style:solid;
    border-color: darkblue;
}

.play-again:hover{
    opacity: 0.8;
}

#game-over {
    margin-top: 10px;
}

</style>