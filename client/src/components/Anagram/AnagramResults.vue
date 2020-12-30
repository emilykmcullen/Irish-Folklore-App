<template>
  <div>
        <div class="anagram-results" v-if="isCorrect">
          <p class="anagram-results"> You said: "{{userAnswer}}"</p>
          <p id="correct-anagram"> Correct! </p>
        </div>
      <div class="anagram-results" v-if="isCorrect ===false"> 
          <p class="anagram-results">You said: "{{userAnswer}}"</p>
          <p id="incorrect-anagram">Incorrect!</p>
          
      </div>

      
  </div>
</template>

<script>

export default {
    name: 'anagram-results',
    props: ['isCorrect', 'userAnswer']

}
</script>

<style>

p.anagram-results {
  font-family: 'Oxygen', sans-serif;
}

p#correct-anagram {
  font-family: 'Oxygen', sans-serif;
  color: green;
}

p#incorrect-anagram {
  font-family: 'Oxygen', sans-serif;
  color: red;
}

</style>