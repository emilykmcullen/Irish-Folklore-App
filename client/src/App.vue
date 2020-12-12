<template>
<div id="app">
  <h2>Irish Folklore</h2>
  <character-list :characters="characters"></character-list>
  <character-detail :character="selectedCharacter"></character-detail>
  <button v-if="selectedCharacter && !favouriteCharacters.includes(selectedCharacter)" v-on:click="addToFavourites">Add to faves</button>
  <favourites-list :favourites="favouriteCharacters"></favourites-list>
  <button v-if="!playAnagram" v-on:click="playAnagramGame">Play Anagram Game</button>
  <button v-if="playAnagram" v-on:click="playAnagramGame">Play again</button>
  <button v-if="playAnagram" v-on:click="endAnagramGame">End game</button>
  <anagram-game v-if="playAnagram" :currentAnagram="currentAnagram" :currentAnswer="currentAnswer"></anagram-game>
  <anagram-results :isCorrect="isCorrect" :currentAnswer="currentAnswer" :userAnswer="userAnswer"></anagram-results>
  <show-answer v-if="answerToShow" :answerToShow="answerToShow"></show-answer>
  <button v-if="!playTopTrumps" v-on:click="playTopTrumpsGame">Play Top Trumps Game</button>
  <top-trumps-game v-if="playTopTrumps && currentPlayer==='one'" :playerOneDeck="playerOneDeck" :playerTwoDeck="playerTwoDeck" :playerOneCurrentCard="playerOneCurrentCard" :playerTwoCurrentCard="playerTwoCurrentCard" :userSelectedStat="userSelectedStat"></top-trumps-game>
  <top-trumps-game-computer-plays v-if="playTopTrumps && currentPlayer==='two'"  :playerOneDeck="playerOneDeck" :playerTwoDeck="playerTwoDeck" :playerOneCurrentCard="playerOneCurrentCard" :playerTwoCurrentCard="playerTwoCurrentCard" :computerSelectedStat="computerSelectedStat"></top-trumps-game-computer-plays>
  <top-trumps-results v-if="playerOneStat && playerTwoStat && currentPlayer ==='one'" :playerOneStat="playerOneStat" :playerTwoStat="playerTwoStat" :currentStat="currentStat" :playerOneCurrentCard="playerOneCurrentCard" :playerTwoCurrentCard="playerTwoCurrentCard" :userIsWinner="userIsWinner" :isDraw="isDraw" :isGameOver="isGameOver" ></top-trumps-results>
  <top-trumps-against-computer-results v-if="currentPlayer==='two'" :currentPlayer="currentPlayer" :computerSelectedStat="computerSelectedStat" :playerOneCurrentCard="playerOneCurrentCard" :playerTwoCurrentCard="playerTwoCurrentCard" :userIsWinner="userIsWinner" :isDraw="isDraw" :isGameOver="isGameOver"></top-trumps-against-computer-results>
  <game-over v-if="isGameOver===true" :winner="winner"></game-over>
  <button v-if="playTopTrumps" v-on:click="endTopTrumpsGame">End Game</button>
  <ireland-map></ireland-map>
  <!-- <map-of-ireland></map-of-ireland> -->

</div>
  
</template>

<script>
import GameOver from './components/GameOver.vue'
import TopTrumpsAgainstComputerResults from './components/TopTrumpsAgainstComputerResults.vue'
import TopTrumpsGameComputerPlays from './components/TopTrumpsGameComputerPlays.vue'
import TopTrumpsResults from './components/TopTrumpsResults.vue'
import TopTrumpsGame from './components/TopTrumpsGame.vue'
import MapOfIreland from './components/MapOfIreland.vue'
import IrelandMap from './components/IrelandMap.vue'
import CharacterList from './components/CharacterList.vue'
import CharacterDetail from './components/CharacterDetail.vue'
import FavouritesList from './components/FavouritesList.vue'
import CharacterService from './services/CharacterService.js'
import AnagramGame from './components/AnagramGame.vue'
import AnagramResults from './components/AnagramResults.vue'
import ShowAnswer from './components/ShowAnswer.vue'
import { eventBus } from './main.js'

// have just done the eventbus on for player stat and now need to compare results and show in top-trumps-results

export default {
  name: 'app',
  data () {
    return {
      characters: [],
      charactersToShuffle: [],
      selectedCharacter: null,
      favouriteCharacters: [],
      //data for anagram game
      playAnagram: false,
      randomNumber: 0,
      randomCharacter: null,
      currentAnagram: '',
      currentAnswer: '',
      isCorrect: null,
      answerToShow: '',
      userAnswer: '',
      //data for top trumps game
      playerOneDeck: [],
      playerTwoDeck: [],
      playerOneCurrentCard: {},
      playerTwoCurrentCard: {},
      playerOneStat: 0,
      playerTwoStat: 0,
      playTopTrumps: false,
      userSelectedStat: false,
      // once user has selected a stat this updates to true and the opponent's stats are shown
      isGameOver: null,
      currentStat: '',
      userIsWinner: null,
      isDraw: null,
      currentPlayer: 'one',
      computerSelectedStat: '',
      winner: ''

    };
  },
  computed: {
    getFavourites: function() {
      return this.characters.filter(character => character.is_favourite)
    },

    

  },
  components: {
    'character-list': CharacterList,
    'character-detail': CharacterDetail,
    'favourites-list': FavouritesList,
    'anagram-game': AnagramGame,
    'anagram-results': AnagramResults,
    'show-answer': ShowAnswer,
    'ireland-map': IrelandMap,
    'map-of-ireland': MapOfIreland,
    'top-trumps-game': TopTrumpsGame,
    'top-trumps-results': TopTrumpsResults,
    'top-trumps-game-computer-plays': TopTrumpsGameComputerPlays,
    'top-trumps-against-computer-results': TopTrumpsAgainstComputerResults,
    'game-over': GameOver
    
  },
  mounted() {
    this.fetchCharacters();

    this.fetchCharactersToShuffle();

    this.fetchFavourites();

    eventBus.$on('character-selected', (character) => {
      this.selectedCharacter = character;
    })

    eventBus.$on('favourite-to-remove', (favouriteId) => {
      const index = this.favouriteCharacters.findIndex( x => x._id === favouriteId)
      this.favouriteCharacters[index].is_favourite = false
      let character = this.favouriteCharacters[index]
      CharacterService.updateCharacter(character)
      this.favouriteCharacters = this.getFavourites
    })

    eventBus.$on('anagram-answered', (answer) => {
      this.userAnswer = answer
      let newAnswer = answer.toLowerCase()
      let correctAnswer = this.currentAnswer.toLowerCase()
      if (newAnswer === correctAnswer){
        this.isCorrect = true
      }
      else {
        this.isCorrect = false
      }
    })

    eventBus.$on('answer-show', (answer) => {
      this.answerToShow = answer
    })

    eventBus.$on('map-selected-character', (key) => {
      const index = this.characters.findIndex(x => x.region_key === key)
      this.selectedCharacter = this.characters[index]
    }),
    //this is an event bus from when the user selects a stat, evaluates win/lose/draw and removes/adds cards to decks
    eventBus.$on('player-stat', (playerOneStat, statName) => {
      this.playerOneStat = playerOneStat
      this.playerTwoStat = this.playerTwoCurrentCard.top_trumps_properties[statName]
      this.currentStat = statName
      this.userSelectedStat = true
      if (playerOneStat > this.playerTwoStat){
        this.isDraw = false
        this.userIsWinner = true
        let removedPlayerTwoCard = this.playerTwoDeck.shift()
        this.playerOneDeck.push(removedPlayerTwoCard)
        let playerOneCardToBottomOfDeck = this.playerOneDeck.shift()
        this.playerOneDeck.push(playerOneCardToBottomOfDeck)
        if(this.playerTwoDeck.length===0){
          this.isGameOver = true,
          this.winner = 'one'
        }

      }
      else if (playerOneStat < this.playerTwoStat){
        this.isDraw =false
        this.userIsWinner = false
        let removedPlayerOneCard = this.playerOneDeck.shift()
        this.playerTwoDeck.push(removedPlayerOneCard)
        let playerTwoCardToBottomOfDeck = this.playerTwoDeck.shift()
        this.playerTwoDeck.push(playerTwoCardToBottomOfDeck)
        if(this.playerOneDeck.length===0){
          this.isGameOver = true,
          this.winner = 'two'
        }
      }
      else {
        this.isDraw = true
        let playerOneCardToBottomOfDeck = this.playerOneDeck.shift()
        this.playerOneDeck.push(playerOneCardToBottomOfDeck)
        let playerTwoCardToBottomOfDeck = this.playerTwoDeck.shift()
        this.playerTwoDeck.push(playerTwoCardToBottomOfDeck)
      }
    }),

    //there is probably a better way to do this maybe need to change the isDraw function assignment above
    eventBus.$on('play-next-card', (userIsWinner, isDraw) => { 
        if (isDraw !== true){
            if (userIsWinner === true){
              this.currentPlayer = 'one',
              this.userSelectedStat = false,
              this.playerOneStat = 0,
              this.playerTwoStat = 0,
              this.userIsWinner= null,
              this.isDraw= null
              this.getCurrentCards()
            }
            else if (userIsWinner === false) {
              this.currentPlayer = 'two'
              this.getCurrentCards()
              this.getRandomTopTrumpsProperty(this.playerTwoCurrentCard.top_trumps_properties)
              this.testWhoIsWinner(this.playerOneCurrentCard.top_trumps_properties[this.computerSelectedStat], this.playerTwoCurrentCard.top_trumps_properties[this.computerSelectedStat])
            }
        }   
        else {
          if (this.currentPlayer==='one'){
            this.userSelectedStat = false,
            this.currentStat= '',
            this.playerOneStat = 0,
            this.playerTwoStat = 0,
            this.userIsWinner= null,
            this.isDraw= null
            this.userSelectedStat = false,
            this.currentStat= ''
            this.getCurrentCards()
          }
          else {
            this.userSelectedStat = false,
            this.currentStat= '',
            this.userSelectedStat = false,
            this.currentStat= ''
            this.getCurrentCards()
            this.getRandomTopTrumpsProperty(this.playerTwoCurrentCard.top_trumps_properties)
            this.testWhoIsWinner(this.playerOneCurrentCard.top_trumps_properties[this.computerSelectedStat], this.playerTwoCurrentCard.top_trumps_properties[this.computerSelectedStat])
          }
        }    
    }
    )

    eventBus.$on('play-again', () => {
      this.playerOneDeck = [],
      this.playerTwoDeck = [],
      this.playerOneCurrentCard = {},
      this.playerTwoCurrentCard = {},
      this.playerOneStat = 0,
      this.playerTwoStat= 0,
      this.playTopTrumps= false,
      this.userSelectedStat = false,
      this.isGameOver= null,
      this.currentStat= '',
      this.userIsWinner= null,
      this.isDraw= null,
      this.currentPlayer ='one',
      this.computerSelectedStat= '',
      this.winner= ''
      this.playTopTrumpsGame()

    })

  },
  methods: {
    fetchCharacters() {
      CharacterService.getCharacters()
      .then(characters => this.characters = characters)
      .then(this.fetchFavourites)
    },
    fetchCharactersToShuffle() {
      CharacterService.getCharacters()
      .then(characters => this.charactersToShuffle = characters)
    },
    fetchFavourites(){
      this.favouriteCharacters = this.characters.filter(character => character.is_favourite)
    },
    addToFavourites() {
      this.selectedCharacter.is_favourite = true
      CharacterService.updateCharacter(this.selectedCharacter)
      this.favouriteCharacters = this.getFavourites
    },
    playAnagramGame() {
      this.currentAnagram=''
      this.currentAnswer=''
      this.playAnagram = true
      this.randomNumber = this.getRandomInt(this.characters)
      this.randomCharacter = this.characters[this.randomNumber]
      if (this.randomCharacter.name) {
        if (/\s/.test(this.randomCharacter.name)) {
          let words = this.splitStringIntoWords(this.randomCharacter.name)
          let shuffledNameMultiple = words.map(word => this.shuffleWord(word))
          this.currentAnagram = shuffledNameMultiple.join(' ')
          this.currentAnswer = this.randomCharacter.name
          }
        else {
          let shuffledNameSingle = this.shuffleWord(this.randomCharacter.name)
          this.currentAnagram = shuffledNameSingle
          this.currentAnswer = this.randomCharacter.name
        }
      }
      else {
        if (/\s/.test(this.randomCharacter.species)) {
          let words = this.splitStringIntoWords(this.randomCharacter.species)
          let shuffledSpeciesMultiple = words.map(word => this.shuffleWord(word))
          this.currentAnagram = shuffledSpeciesMultiple.join(' ')
          this.currentAnswer = this.randomCharacter.species
          }
        else {
          let shuffledSpeciesSingle = this.shuffleWord(this.randomCharacter.species)
          this.currentAnagram = shuffledSpeciesSingle
          this.currentAnswer = this.randomCharacter.species
        }
      }
    },
    getRandomInt(array){
      let number = Math.floor(Math.random() * Math.floor(array.length))
      return number
    },
    splitStringIntoWords(string) {
      let arrayOfWords = string.toLowerCase().split(" ")
      return arrayOfWords
    },
    shuffleWord(word){
      let newWordArray = word.split('')
      let length = newWordArray.length
      for(let i=0; i<length-1; ++i){
        let j = this.getRandomInt(newWordArray)
        let temp = newWordArray[i];
        newWordArray[i] = newWordArray[j];
        newWordArray[j] = temp
      }
      return newWordArray.join('')
    },
    endAnagramGame(){
      this.playAnagram = false,
      this.randomNumber = 0,
      this.randomCharacter = null,
      this.currentAnagram = '',
      this.currentAnswer = '',
      this.isCorrect = null,
      this.answerToShow = '',
      this.userAnswer = ''
    },
    shuffleArray(array){
      let length = array.length
      for ( let i=0; i<length-1; i++){
        let j = this.getRandomInt(array)
        let temp = array[i]
        array[i] = array[j]
        array[j] = temp
      }
      return array
    },
    //be careful of pop will this change the array forever?
    splitDeck(array){
      if (array.length%2 !== 0){
        let item = array.pop()
        let halfLength = (array.length/2) 
        this.playerOneDeck = array.slice(0, halfLength)
        this.playerTwoDeck = array.slice(halfLength, array.length)
        array.push(item)
      }
      else {
        let halfLength = (array.length/2)
        this.playerOneDeck = array.slice(0, halfLength)
        this.playerTwoDeck = array.slice(halfLength, array.length)
        
      }
    },
    gameOver(deck_one, deck_two){
      if (deck_one.length === 0 || deck_two.length ===0){
        this.isGameOver = true
      }
      else{
        this.isGameOver = false
      }
    },
    getCurrentCards(){
        this.playerOneCurrentCard = this.playerOneDeck[0]
        this.playerTwoCurrentCard = this.playerTwoDeck[0]

    },
    playTopTrumpsGame(){
      this.shuffleArray(this.charactersToShuffle)
      this.splitDeck(this.charactersToShuffle)
      this.playTopTrumps = true
      this.getCurrentCards()
    
    },
    getRandomTopTrumpsProperty(propertiesObject){
      let arrayOfProperties = Object.keys(propertiesObject)
      let length = arrayOfProperties.length
      let randomNumber = Math.floor(Math.random() * Math.floor(length))
      this.computerSelectedStat = arrayOfProperties[randomNumber]
    },    
    testWhoIsWinner(playerOneStat, playerTwoStat){
      this.playerOneStat = playerOneStat
      this.playerTwoStat = playerTwoStat
      if (playerOneStat > playerTwoStat){
        this.isDraw = false
        this.userIsWinner = true
        let removedPlayerTwoCard = this.playerTwoDeck.shift()
        this.playerOneDeck.push(removedPlayerTwoCard)
        let playerOneCardToBottomOfDeck = this.playerOneDeck.shift()
        this.playerOneDeck.push(playerOneCardToBottomOfDeck)
        if(this.playerTwoDeck.length===0){
          this.isGameOver = true,
          this.winner = 'one'
        }
      }
      else if (playerOneStat < playerTwoStat){
        this.isDraw = false
        this.userIsWinner = false
        let removedPlayerOneCard = this.playerOneDeck.shift()
        this.playerTwoDeck.push(removedPlayerOneCard)
        let playerTwoCardToBottomOfDeck = this.playerTwoDeck.shift()
        this.playerTwoDeck.push(playerTwoCardToBottomOfDeck)
        if(this.playerOneDeck.length===0){
          this.isGameOver = true,
          this.winner = 'two'
        }
      }
      else {
        this.isDraw = true
        let playerOneCardToBottomOfDeck = this.playerOneDeck.shift()
        this.playerOneDeck.push(playerOneCardToBottomOfDeck)
        let playerTwoCardToBottomOfDeck = this.playerTwoDeck.shift()
        this.playerTwoDeck.push(playerTwoCardToBottomOfDeck)
      }

    },
    endTopTrumpsGame(){
      this.playerOneDeck = [],
      this.playerTwoDeck = [],
      this.playerOneCurrentCard = {},
      this.playerTwoCurrentCard = {},
      this.playerOneStat = 0,
      this.playerTwoStat= 0,
      this.playTopTrumps= false,
      this.userSelectedStat = false,
      this.isGameOver= null,
      this.currentStat= '',
      this.userIsWinner= null,
      this.isDraw= null,
      this.currentPlayer ='one',
      this.computerSelectedStat= '',
      this.winner= ''
    }

  }

}
</script>

<style>

</style>