<template> 

<div>
<b-modal class="modal" id="anagram-modal"
        :hide-footer="true"
        >
    
    <anagram-game v-if="playAnagram" 
    :currentAnagram="currentAnagram"
    :currentAnswer="currentAnswer" 
    :isCorrect="isCorrect" 
    :userAnswer="userAnswer"
    :answerToShow="answerToShow"
    />
    
    <b-row>
    <b-col><b-button v-on:click="showAnswer(currentAnswer)">Show Answer</b-button></b-col>
    <b-col><b-button v-if="playAnagram" v-on:click="playAnagramGame()">Play again</b-button></b-col>
    <!-- <b-col><b-button v-if="playAnagram" v-on:click="endAnagramGame()">End game</b-button></b-col> -->
    </b-row>
    
</b-modal>
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
        // endAnagramGame(){
        //     eventBus.$emit('end-anagram-game')
        // },
        showAnswer(answer){
            eventBus.$emit('answer-show', answer)
        }
    }

}
</script>

<style>

</style>