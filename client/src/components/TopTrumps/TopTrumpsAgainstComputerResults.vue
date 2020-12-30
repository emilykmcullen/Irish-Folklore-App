<template>
<div class="top-trumps-results">
        <p> You opponent chose {{computerSelectedStat}} </p>
        <p> Opponent stat: {{playerTwoCurrentCard.top_trumps_properties[computerSelectedStat]}}</p>
        <p> Your stat: {{playerOneCurrentCard.top_trumps_properties[computerSelectedStat]}}</p>
        <p class="you-win" v-if="userIsWinner">You win! You take your opponent's card and put it to the bottom of your deck.</p>
        <p class="you-lose" v-if="userIsWinner !==true && !isDraw">You lose! Your opponent takes your card.</p>
        <p class="you-draw" v-if="isDraw">It's a draw! You both put your cards to the bottom of your deck.</p>
    <button class="play-next-round" :disabled="isDisabled" v-on:click="playNextCard(userIsWinner, isDraw)">Play next round</button>


    <game-over v-if="isGameOver===true" :winner="winner"></game-over>
    </div>
    
    
  
</template>

<script>
import {eventBus} from '../../main.js'
import GameOver from './GameOver'

export default {
    name: 'top-trumps-against-computer-results',
    props: ['computerSelectedStat', 'playerOneCurrentCard', 'playerTwoCurrentCard',
             'userIsWinner', 'isDraw', 'isGameOver', 'winner'],
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