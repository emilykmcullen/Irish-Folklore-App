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
    
    <b-button-group>
    <b-button variant="outline-dark" v-on:click="showAnswer(currentAnswer)">Show Answer</b-button>
    <b-button variant="outline-dark" v-if="playAnagram" v-on:click="playAnagramGame()">Play again</b-button>
    </b-button-group>
    
    
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
        showAnswer(answer){
            eventBus.$emit('answer-show', answer)
        }
    }

}
</script>

<style>

</style>