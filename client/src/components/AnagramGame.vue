<template>
  <div id="anagram-game">
      <p>Anagram:</p>
      <p>{{currentAnagram}}</p>
      <form v-on:submit.prevent="answerAnagram">
          <label for="answer"></label>
          <input type="text" id="answer" v-model="answer">
          <input type="submit" value="enter" id="answer">
      </form>
      

  </div>
</template>

<script>
import { eventBus } from '../main.js'

export default {
    name: 'anagram-game',
    props: ['currentAnagram', 'currentAnswer'],
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

</style>