<template>
  <div>
    <b-modal id="top-trumps-modal" class="modal"
        size="lg"
        title="TopTrumps"
        :hide-footer="true"
        >
    
    
    
    <top-trumps-game v-if="playTopTrumps && currentPlayer==='one'" 
    :currentPlayer="currentPlayer"
    :playerOneDeck="playerOneDeck" 
    :playerTwoDeck="playerTwoDeck" 
    :playerOneCurrentCard="playerOneCurrentCard" 
    :playerTwoCurrentCard="playerTwoCurrentCard" 
    :userSelectedStat="userSelectedStat"
    :playerOneStat="playerOneStat"
    :playerTwoStat="playerTwoStat"
    :currentStat="currentStat"
    :userIsWinner="userIsWinner"
    :isDraw="isDraw"
    :isGameOver="isGameOver"
    :winner="winner"/>

    <top-trumps-game-computer-plays v-if="playTopTrumps && currentPlayer==='two'" 
    :currentPlayer="currentPlayer" 
    :playerOneDeck="playerOneDeck" 
    :playerTwoDeck="playerTwoDeck" 
    :playerOneCurrentCard="playerOneCurrentCard" 
    :playerTwoCurrentCard="playerTwoCurrentCard" 
    :computerSelectedStat="computerSelectedStat"
    :userIsWinner="userIsWinner"
    :isDraw="isDraw"
    :isGameOver="isGameOver"
    :winner="winner"
    />
    
    <!-- <button v-if="playTopTrumps" v-on:click="endTopTrumpsGame()">End Game</button> -->
    
    </b-modal>
  </div>
</template>

<script>
import { eventBus } from '../../main.js'
import TopTrumpsGame from './TopTrumpsGame'
import TopTrumpsGameComputerPlays from './TopTrumpsGameComputerPlays'

export default {
    name: 'top-trumps-game-start',
    props: ['playTopTrumps', 'currentPlayer', 'playerOneDeck', 'playerTwoDeck', 'playerOneCurrentCard',
             'playerTwoCurrentCard', 'userSelectedStat', 'playerOneStat', 'playerTwoStat', 'currentStat',
              'userIsWinner', 'isDraw', 'isGameOver', 'winner', 'computerSelectedStat'],
    components: {
        'top-trumps-game': TopTrumpsGame,
        'top-trumps-game-computer-plays': TopTrumpsGameComputerPlays
    },
    methods: {
        playTopTrumpsGame(){
            eventBus.$emit('play-top-trumps-game')
        },
        // endTopTrumpsGame(){
        //     eventBus.$emit('end-top-trumps-game')
        // }
    }

}
</script>

<style>

#top-trumps-modal___BV_modal_header_.modal-header{
    text-align: center;
}

.modal-header{
    justify-content: center;
}


ul {
    list-style-type: none;
    padding: 0;
}


h4 {
    font-family: 'Press Start 2P', sans-serif;
}
h5 {
    font-family: 'Press Start 2P', sans-serif;
}

p {
    font-family: 'Press Start 2P', sans-serif;
}

</style>