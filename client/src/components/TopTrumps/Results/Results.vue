<template>
<div class="top-trumps-results">
    <div>
        <p> You chose '{{currentStat}}' </p>
        <p> Your stat: {{playerOneStat}}</p>
        <p> Opponent stat: {{playerTwoStat}}</p>
        <p class="you-win" v-if="userIsWinner">You win! You take your opponent's card and put it to the bottom of your deck.</p>
        <p class="you-lose" v-if="userIsWinner===false">You lose! Your opponent takes your card.</p>
        <p class="you-draw" v-if="isDraw">It's a draw! You both put your cards to the bottom of your deck.</p>
    </div>
    <button class="play-next-round" :disabled="isDisabled" v-on:click="playNextCard(userIsWinner, isDraw)">Play next round</button>

    <game-over v-if="isGameOver===true"
     :winner="winner"/>

</div>
  
</template>

<script>
import { eventBus } from '../../../main.js'
import GameOver from '../GameOver/GameOver'

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
    // if game is over, this button is disabled
    computed: {
        isDisabled() {
            return this.isGameOver===true 
        }
    }
}
</script>

<style>

.you-lose {
    color: red;
}

.you-win {
    color: green;
}

.you-draw {
    color: rgb(216, 148, 1);
}

.play-next-round{
    border-radius: 10px;
    margin-right: 10px;
    margin-bottom: 3px;;
    font-family: 'Press Start 2P', sans-serif;
    background-color: #a5ee7d;
    color: green;
    border-style:solid;
    border-color: green;
}

.play-next-round:hover{
    opacity: 0.8;
}

.play-next-round:disabled{
    opacity: 1;
}

</style>