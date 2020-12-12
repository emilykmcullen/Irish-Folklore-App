<template>
<div>
        <p> You opponent chose {{computerSelectedStat}} </p>
        <p> Opponent stat: {{playerTwoCurrentCard.top_trumps_properties[computerSelectedStat]}}</p>
        <p> Your stat: {{playerOneCurrentCard.top_trumps_properties[computerSelectedStat]}}</p>
        <p v-if="userIsWinner">You win! You take your opponent's card and put it to the bottom of your deck.</p>
        <p v-if="userIsWinner !==true && !isDraw">You lose! Your opponent takes your card.</p>
        <p v-if="isDraw">It's a draw! You both put your cards to the bottom of your deck.</p>
    <button :disabled="isDisabled" v-on:click="playNextCard(userIsWinner, isDraw)">Play next round</button>
    </div>
    <!-- sort out vifs above -->
  
</template>

<script>
import {eventBus} from '../main.js'

export default {
    name: 'top-trumps-against-computer-results',
    props: ['computerSelectedStat', 'playerOneCurrentCard', 'playerTwoCurrentCard', 'userIsWinner', 'isDraw', 'isGameOver'],
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