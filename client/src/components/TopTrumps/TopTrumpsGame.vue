<template>
  <div class="top-trumps-game">
        <div class="player-one">
            <p><img class="image" :src="playerOneCurrentCard.image"></p>
            <p>{{playerOneCurrentCard.name}}</p>
            <ul>
                <li v-for="(property, name) in playerOneCurrentCard.top_trumps_properties" :key="name" >
                    <button :disabled="isDisabled" v-on:click="playerChoice(property, name)">{{name}}</button>
                    <span>{{property}}</span>
                </li>
            </ul>
            <player-one-cards 
            :playerOneDeck="playerOneDeck" />


        </div>
        <div id="player-two"> 
            <player-two-stats 
            :playerTwoCurrentCard="playerTwoCurrentCard" 
            :userSelectedStat="userSelectedStat" />

            <player-two-cards 
            :playerTwoDeck="playerTwoDeck"/>


        </div>

        <div>
            <top-trumps-results v-if="playerOneStat && playerTwoStat && currentPlayer ==='one'" 
            :currentPlayer="currentPlayer"
            :playerOneStat="playerOneStat" 
            :playerTwoStat="playerTwoStat" 
            :currentStat="currentStat" 
            :userIsWinner="userIsWinner" 
            :isDraw="isDraw" 
            :winner="winner"
            :isGameOver="isGameOver"
            />
        </div>


  </div>
</template>

<script>
import {eventBus} from '../../main.js'

import TopTrumpsResults from './TopTrumpsResults'
import PlayerOneCards  from './PlayerOneCards.vue'
import PlayerTwoCards from './PlayerTwoCards.vue'
import PlayerTwoStats from './PlayerTwoStats.vue'

export default {
    name: 'top-trumps-game',
    props: ['playerOneCurrentCard', 'playerTwoCurrentCard', 'playerOneDeck', 'playerTwoDeck',
         'userSelectedStat', 'playerOneStat', 'playerTwoStat', 'currentStat', 'userIsWinner',
          'isDraw', 'winner', 'isGameOver', 'currentPlayer'],
    methods: {
        playerChoice(playerOneStat, statName){
            eventBus.$emit('player-stat', playerOneStat, statName)
        }
    },
    components: {
        'player-one-cards': PlayerOneCards,
        'player-two-cards': PlayerTwoCards,
        'player-two-stats': PlayerTwoStats,
        'top-trumps-results': TopTrumpsResults
    },
    computed: {
        isDisabled() {
            return this.userSelectedStat 
        }
    }

}
</script>

<style>

</style>