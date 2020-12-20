<template>
  <div id="anagram-game">
      <p>Anagram:</p>
      <h2>{{currentAnagram}}</h2>
      
      <b-form v-on:submit.prevent="answerAnagram" class="form-container">
         <b-row>
          <label for="answer"></label>
          <b-col cols="9" class="d-flex justify-content-center"><b-form-input type="text" id="answer" v-model="answer"></b-form-input></b-col>
          <b-col class="d-flex justify-content-center"><b-button type="submit" id="answer">Enter</b-button></b-col>
          </b-row>
      </b-form>
      
      

      <anagram-results v-if="isCorrect !== null" 
      :isCorrect="isCorrect" 
      :userAnswer="userAnswer"
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
        }
    }
    

}
</script>

<style>

.form-container{
    padding: 50px
}

</style>