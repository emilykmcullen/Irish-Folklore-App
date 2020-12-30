<template>

    <div class="top-trumps-game">
        <b-container>
        <b-row>
        <b-col>
        <div id=player-one-card>
        <b-card class="player-one"
            >
            <h5>Player</h5>
            <p><img class="image" :src="playerOneCurrentCard.image"></p>
            <h4>{{playerOneCurrentCard.name}}</h4>
        <b-card class="player-one-stats">
            <ul>
                <li v-for="(property, name) in playerOneCurrentCard.top_trumps_properties" :key="name">
                    
                    <button class="stat-name-player-one" :disabled="isDisabled" v-on:click="playerChoice(property, name)">{{name}}</button>
                    <span>{{property}}</span>
                    
                </li>
            </ul>
        </b-card>
        
            <player-one-cards 
            :playerOneDeck="playerOneDeck" />
    

        </b-card>
        </div>
        </b-col>
        <b-col>
        <b-card class="player-two"> 
            <player-two-stats 
            :playerTwoCurrentCard="playerTwoCurrentCard" 
            :userSelectedStat="userSelectedStat" />

            <player-two-cards 
            :playerTwoDeck="playerTwoDeck"/>


        </b-card>
        </b-col>
          </b-row>
        </b-container>

        <p v-if="!userSelectedStat">Your turn!</p>

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

.modal-header {
    margin: 0 auto;
}

.image {
    /* max-width: 300px; */
    max-height: 150px;
    
}

li {
    margin: 5px;
}



.card-body{
    border-radius: 20px;
}



.player-one.card{
    border: solid;
    border-radius: 20px;
    border-color: green;
    background-color: #7EBD5B ;
}

.player-two.card{
    border: solid;
    border-radius: 20px;
    border-color: green;
    background-color: #7EBD5B ;
}

.player-one-stats.card{
    border: solid;
    border-color: green;
    border-radius: 20px;
    background-color: #a5ee7d ;
    margin-bottom: 10px;
    

}

.player-two-stats.card{
    border: solid;
    border-color: green;
    border-radius: 20px;
    background-color: #a5ee7d ;
    margin-bottom: 10px;

}

.stat-name-player-one {
    text-transform: capitalize;
    border-radius: 10px;
    margin-right: 10px;
    margin-bottom: 3px;;
    font-family: 'Press Start 2P', sans-serif;
    background-color: green;
    color: #a5ee7d;
    border-style:solid;
    border-color: green;

    
}

.stat-name-player-one:hover {
    opacity: 0.8;
}

.stat-name-player-two {
    color: green;
    text-transform: capitalize;
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

</style>