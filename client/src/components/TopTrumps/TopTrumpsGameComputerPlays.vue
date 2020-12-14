<template>
  <div class='top-trumps-game'>
      <div class="player-one">
          <p><img class="image" :src="playerOneCurrentCard.image"></p>
            <p>{{playerOneCurrentCard.name}}</p>
            <ul>
                <li v-for="(property, name) in playerOneCurrentCard.top_trumps_properties" :key="name" >
                    <button>{{name}}</button>
                    <span>{{property}}</span>
                </li>
          </ul>
            <player-one-cards 
            :playerOneDeck="playerOneDeck" />
        </div>
        <div id="player-two"> 
            <player-two-stats-computer 
            :playerTwoCurrentCard="playerTwoCurrentCard" 
            :playerOneCurrentCard="playerOneCurrentCard" 
            :computerSelectedStat="computerSelectedStat" />

            <player-two-cards 
            :playerTwoDeck="playerTwoDeck"/>

            <top-trumps-against-computer-results v-if="currentPlayer==='two'" 
            :currentPlayer="currentPlayer" 
            :computerSelectedStat="computerSelectedStat" 
            :playerOneCurrentCard="playerOneCurrentCard" 
            :playerTwoCurrentCard="playerTwoCurrentCard" 
            :userIsWinner="userIsWinner" 
            :isDraw="isDraw" 
            :isGameOver="isGameOver"
            :winner="winner"
            />


        
        </div>

  </div>
</template>

<script>
import PlayerTwoStatsComputer from './PlayerTwoStatsComputer.vue'
import PlayerOneCards from './PlayerOneCards.vue'
import PlayerTwoCards from './PlayerTwoCards.vue'
import TopTrumpsAgainstComputerResults from './TopTrumpsAgainstComputerResults'

export default {
    name: 'top-trumps-game-computer-plays',
    props: ['playerOneCurrentCard', 'playerTwoCurrentCard', 'playerOneDeck', 'playerTwoDeck', 'computerSelectedStat',
            'currentPlayer', 'userIsWinner', 'isDraw', 'isGameOver', 'winner'],
    components: {
        'player-two-stats-computer': PlayerTwoStatsComputer,
        'player-one-cards': PlayerOneCards,
        'player-two-cards': PlayerTwoCards,
        'top-trumps-against-computer-results': TopTrumpsAgainstComputerResults
    }

}
</script>

<style>

</style>