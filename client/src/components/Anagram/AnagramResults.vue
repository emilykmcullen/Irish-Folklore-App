<template>
  <div id='anagram-results'>
        <div v-if="isCorrect">
          <p> You said: {{userAnswer}}</p>
          <p> Correct! </p>
        </div>
      <div v-if="isCorrect ===false"> 
          <p>You said: {{userAnswer}}</p>
          <p>Incorrect!</p>
          
      </div>

      
  </div>
</template>

<script>
import ShowAnswer from './ShowAnswer'

export default {
    name: 'anagram-results',
    props: ['isCorrect', 'currentAnswer', 'userAnswer', 'answerToShow'],
    components: {
      'show-answer': ShowAnswer
    }

}
</script>

<style>

</style>