<template>
  <div id="anagram-game">
      <p>Anagram:</p>
      <p>{{currentAnagram}}</p>
      <form v-on:submit.prevent="answerAnagram">
          <label for="answer"></label>
          <input type="text" id="answer" v-model="answer">
          <input type="submit" value="enter" id="answer">
      </form>
      <button v-on:click="showAnswer(currentAnswer)">Show Answer</button>
      

      <anagram-results v-if="isCorrect !== null" 
      :isCorrect="isCorrect" 
      :currentAnswer="currentAnswer" 
      :userAnswer="userAnswer"
      :answerToShow="answerToShow"
      ></anagram-results>

      <show-answer v-if="answerToShow" :answerToShow="answerToShow"/>

  </div>
</template>

<script>
import { eventBus } from '../../main.js'
import AnagramResults from './AnagramResults'
import ShowAnswer from './ShowAnswer'

export default {
    name: 'anagram-game',
    props: ['currentAnagram', 'currentAnswer', 'isCorrect', 'userAnswer', 'answerToShow'],
    components: {
        'anagram-results': AnagramResults,
        'show-answer': ShowAnswer
    },
    data() { 
        return {
            answer: ''
        }
    },
    methods: {
        answerAnagram(){
            eventBus.$emit('anagram-answered', this.answer)
            this.answer = ''
        },
        showAnswer(answer){
            eventBus.$emit('answer-show', answer)
        }
    }
    

}
</script>

<style>

</style>