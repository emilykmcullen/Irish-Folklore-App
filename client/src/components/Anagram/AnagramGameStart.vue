<template> 

<div>
  <button v-on:click="playAnagramGame()">Play Anagram Game</button>
  

<modal class="modal" name="anagram-modal"
        :min-height="200"
        :scrollable="true"
        :reset="true"
        width="40%"
        height="auto">
    
    <anagram-game v-if="playAnagram" 
    :currentAnagram="currentAnagram"
    :currentAnswer="currentAnswer" 
    :isCorrect="isCorrect" 
    :userAnswer="userAnswer"
    :answerToShow="answerToShow"
    />

    <button v-if="playAnagram" v-on:click="playAnagramGame()">Play again</button>
    <button v-if="playAnagram" v-on:click="endAnagramGame()">End game</button>
</modal>
</div>



</template>

<script>
import { eventBus } from '../../main.js'
import AnagramGame from './AnagramGame'


export default {
    name: 'anagram-game-start',
    props: ['playAnagram', 'currentAnagram', 'currentAnswer', 'isCorrect', 'userAnswer', 'answerToShow'],
    components: {
        'anagram-game': AnagramGame
    },
    methods: {
        playAnagramGame(){
            eventBus.$emit('play-anagram')
        },
        endAnagramGame(){
            eventBus.$emit('end-anagram-game')
        }
    }

}
</script>

<style>

</style>