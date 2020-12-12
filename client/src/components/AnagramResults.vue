<template>
  <div id='anagram-results'>
        <div v-if="isCorrect">
          <p> You said: {{userAnswer}}</p>
          <p> Correct! </p>
        </div>
      <div v-if="isCorrect ===false"> 
          <p>You said: {{userAnswer}}</p>
          <p>Incorrect!</p>
          <button v-on:click="showAnswer(currentAnswer)">Show Answer</button>
      </div>
  </div>
</template>

<script>
import { eventBus } from '../main.js'

export default {
    name: 'anagram-results',
    props: ['isCorrect', 'currentAnswer', 'userAnswer'],
    methods: {
        showAnswer(answer){
            eventBus.$emit('answer-show', answer)
        }
    }

}
</script>

<style>

</style>