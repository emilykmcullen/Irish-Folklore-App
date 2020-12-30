<template>
  <div class='top-trumps-game'>

    <b-container>
    <b-row>
        <b-col>
        <b-card class="player-one">
        <h5>Player</h5>
          <p><img class="image" :src="playerOneCurrentCard.image"></p>
            <h5>{{playerOneCurrentCard.name}}</h5>
        <b-card class="player-one-stats">
            <ul>
                <li v-for="(property, name) in playerOneCurrentCard.top_trumps_properties" :key="name" >
                    <button class="stat-name-player-one">{{name}}</button>
                    <span>{{property}}</span>
                </li>
            </ul>
        </b-card>
            <player-one-cards 
            :playerOneDeck="playerOneDeck" />
        </b-card>
        </b-col>

        <b-col>
        <b-card class="player-two"> 
            <player-two-stats-computer 
            :playerTwoCurrentCard="playerTwoCurrentCard" 
            :playerOneCurrentCard="playerOneCurrentCard" 
            :computerSelectedStat="computerSelectedStat" />

            <player-two-cards 
            :playerTwoDeck="playerTwoDeck"/>
        </b-card>
        </b-col>
    </b-row>
    </b-container>
        

    <div>
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
ul {
    list-style: none;
}

button {
    margin: 5px;
}

.stat-name {
    text-transform: capitalize;
}


</style>