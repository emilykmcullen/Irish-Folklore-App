<template>
<div id="top-trumps-results">
    <div>
        <p> You chose {{currentStat}} </p>
        <p> Your stat: {{playerOneStat}}</p>
        <p> Opponent stat: {{playerTwoStat}}</p>
        <p v-if="userIsWinner">You win! You take your opponent's card and put it to the bottom of your deck.</p>
        <p v-if="userIsWinner===false">You lose! Your opponent takes your card.</p>
        <p v-if="isDraw">It's a draw! You both put your cards to the bottom of your deck.</p>
    </div>
    <button :disabled="isDisabled" v-on:click="playNextCard(userIsWinner, isDraw)">Play next round</button>

    <game-over v-if="isGameOver===true"
     :winner="winner"/>

</div>
  
</template>

<script>
import { eventBus } from '../../main.js'
import GameOver from './GameOver'

export default {
    name: 'top-trumps-results',
    props: ['playerOneStat', 'playerTwoStat', 'currentStat',
            'userIsWinner', 'isDraw', 'winner', 'isGameOver'],
    components: {
        'game-over': GameOver
    },
    methods: {
        playNextCard(userIsWinner, isDraw){
            eventBus.$emit('play-next-card', this.userIsWinner, this.isDraw)
        }
    },
    computed: {
        isDisabled() {
            return this.isGameOver===true 
        }
    }

}
</script>

<style>

</style>