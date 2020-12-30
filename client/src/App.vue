<template>
<div id="app">
  <h2 id="header">Mythical Creatures and Characters of Irish Folklore</h2>

  <nav-bar :characters="characters"></nav-bar>

  <!-- components for drop down, selecting, showing characters  -->
  <character-detail :character="selectedCharacter" :currentDescriptionPage="currentDescriptionPage"></character-detail>


  <!-- components for playing the anagram game -->
  <anagram-game-start 
  :playAnagram="playAnagram" 
  :currentAnagram="currentAnagram"
  :currentAnswer="currentAnswer"
  :isCorrect="isCorrect"
  :userAnswer="userAnswer"
  :answerToShow="answerToShow"/>


  <!-- components for playing top trumps -->
  <top-trumps-game-start
  :playTopTrumps="playTopTrumps"
  :currentPlayer="currentPlayer"
  :playerOneDeck="playerOneDeck"
  :playerTwoDeck="playerTwoDeck"
  :playerOneCurrentCard="playerOneCurrentCard"
  :playerTwoCurrentCard="playerTwoCurrentCard"
  :userSelectedStat="userSelectedStat"
  :computerSelectedStat="computerSelectedStat"
  :playerOneStat="playerOneStat"
  :playerTwoStat="playerTwoStat"
  :currentStat="currentStat"
  :userIsWinner="userIsWinner"
  :isDraw="isDraw"
  :isGameOver="isGameOver"
  :winner="winner"

  />


  <!-- map components -->
  <map-of-ireland/>
  <!-- <map-two/> -->
  <!-- <ireland-map></ireland-map> -->

</div>
  
</template>

<script>
import MapOfIreland from './components/IrelandMap/MapOfIreland'
import MapTwo from './components/IrelandMap/Map'
import NavBar from './components/NavBar'
import AnagramGameStart from './components/Anagram/AnagramGameStart'
import TopTrumpsGameStart from './components/TopTrumps/TopTrumpsGameStart'
import IrelandMap from './components/IrelandMap/IrelandMap'
import CharacterDetail from './components/Characters/CharacterDetail'
import CharacterService from './services/CharacterService.js'
import { eventBus } from './main.js'


export default {
  name: 'app',
  data () {
    return {
      characters: [],
      charactersToShuffle: [],
      selectedCharacter: null,
      currentDescriptionPage: 0,
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
  
  components: {
    'anagram-game-start': AnagramGameStart,
    'top-trumps-game-start': TopTrumpsGameStart,
    'character-detail': CharacterDetail,
    'ireland-map': IrelandMap,
    'nav-bar': NavBar,
    'map-two': MapTwo,
    'map-of-ireland': MapOfIreland
    
    
    
  },
  mounted() {

    this.fetchCharacters();

    this.fetchCharactersToShuffle();

    eventBus.$on('character-selected', (character) => {
      this.currentDescriptionPage = 0
      this.selectedCharacter = character;
      this.$bvModal.show('character-detail-modal')
    })

    // eventBus.$on('close-character-modal', () => {
    //   this.selectedCharacter = null
    //   this.$bvModal.hide('character-detail-modal')
    // })

    eventBus.$on('update-description-page', (direction) => {
      if (direction === 'next') {
        this.currentDescriptionPage++;
      }
      else {
        this.currentDescriptionPage--;
      }
      })

    eventBus.$on('play-anagram', () => {
      this.endAnagramGame()
      this.playAnagramGame()
      this.$bvModal.show('anagram-modal')
    })

    // eventBus.$on('end-anagram-game', () => {
    //   this.endAnagramGame()
    //   this.$bvModal.hide('anagram-modal')
    // })

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
      this.currentDescriptionPage = 0
      this.$bvModal.show('character-detail-modal')
    })

    eventBus.$on('play-top-trumps-game', () => {
      this.playTopTrumpsGame()
      this.$bvModal.show('top-trumps-modal')
    })

    // eventBus.$on('end-top-trumps-game', () => {
    //   this.endTopTrumpsGame()
    //   this.$bvModal.hide('top-trumps-modal')
    // })

    //this is an event bus from when the USER (not computer as this is not possible)
    // selects a stat, it evaluates win/lose/draw and removes/adds cards to decks
    //it assigns a this.playerOneStat and this.playerTwoStat which then means the results
    // component will display, where the user sees results and then clicks 'play next round'
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

    //this is an event bus from when the user selects 'play next round' 
    // (after any set of results eg. computer wins, user wins, draw etc)
    eventBus.$on('play-next-card', (userIsWinner, isDraw) => { 
      //this first if statement determines if there was a winner
      //if the userisWinner, the cards have already been taken and added to the decks so this is not necessary to do
      //so the appropriate data is just reset
      //if the computer is the winner, the else if statement uses testwhoiswinner() to set the player
      //and computer stats and test them against each other then take/add cards to decks appropriately
      //then depending on the current player it sets the data so that the appropriate components will show
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
        //this else statement is for if the match was a draw
        //then depending on the current player it sets the data so that the appropriate components will show
        // if user is current the data just needs to be reset and new current cards got
        // if computer is current then the testwhoiswinner needs to be called to play the next round immediately  
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
      this.endTopTrumpsGame()
      this.playTopTrumpsGame()

    })

    // $("top-trumps-modal").on("hidden.bs.modal", function () {
    //     console.log('Modal closed');
    //   });

  },
  methods: {
    fetchCharacters() {
      CharacterService.getCharacters()
      .then(characters => this.characters = characters)
    },
    fetchCharactersToShuffle() {
      CharacterService.getCharacters()
      .then(characters => this.charactersToShuffle = characters)
    },

    playAnagramGame() {
      this.isCorrect = null
      this.answerToShow = ''
      this.currentAnagram=''
      this.currentAnswer=''
      // anagram game component will show
      this.playAnagram = true
      this.randomNumber = this.getRandomInt(this.characters)
      this.randomCharacter = this.characters[this.randomNumber]
      if (/\s/.test(this.randomCharacter.name)) {
        //the name is then split into an array of separate words depending on the spaces
        let words = this.splitStringIntoWords(this.randomCharacter.name)
        //for every word in 'words' array the letters are shuffled using shuffleword()
        //and saved as array shuffledNameMultiple
        let shuffledNameMultiple = words.map(word => this.shuffleWord(word))
        //the items in the array are then joined together with spaces between them 
        this.currentAnagram = shuffledNameMultiple.join(' ')
        //sets the current answer as the random characters name
        this.currentAnswer = this.randomCharacter.name
        }
      else {
        let shuffledNameSingle = this.shuffleWord(this.randomCharacter.name)
        this.currentAnagram = shuffledNameSingle
        this.currentAnswer = this.randomCharacter.name
      }
      
    },
    getRandomInt(array){
      let number = Math.floor(Math.random() * Math.floor(array.length))
      return number
    },
    //string with spaces is split into an array of separate words depending on the spaces 
    splitStringIntoWords(string) {
      let arrayOfWords = string.split(" ")
      return arrayOfWords
    },

    //a string is split into an array of its letters
    //the order of these letters is then swapped around using the for loop
    //they are then joined back together into one string
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

    //TOP TRUMPS FUNCTIONS

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

    getCurrentCards(){
        this.playerOneCurrentCard = this.playerOneDeck[0]
        this.playerTwoCurrentCard = this.playerTwoDeck[0]

    },

    playTopTrumpsGame(){
      this.endTopTrumpsGame()
      this.shuffleArray(this.charactersToShuffle)
      this.splitDeck(this.charactersToShuffle)
      this.playTopTrumps = true
      this.getCurrentCards()
    
    },


    //this is used for the computer selection when the computer is current player
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
#header{
  text-align: center;
  padding: 25px 15px 5px;
  font-family: 'Vollkorn', sans-serif;

}

/* #app{
  font-family: 'Vollkorn', cursive;
  font-weight: 700;
} */
</style>