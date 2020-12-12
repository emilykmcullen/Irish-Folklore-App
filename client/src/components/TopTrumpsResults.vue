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

</div>
  
</template>

<script>
import { eventBus } from '../main.js'

export default {
    name: 'top-trumps-results',
    props: ['playerOneStat', 'playerTwoStat', 'currentStat', 'playerOneCurrentCard', 'playerTwoCurrentCard', 
            'userIsWinner', 'isDraw', 'isGameOver'],
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