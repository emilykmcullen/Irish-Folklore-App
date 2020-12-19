<template>
<div id="nav-bar">
    <b-button-toolbar aria-label="Toolbar with button groups and dropdown menu">
    
      <b-form v-on:submit.prevent>
          <b-form-select v-on:change="handleSelect" v-model="selectedCharacter" class="select-form" id="character-select">
              <b-form-select-option selected disabled :value="null">Select a character</b-form-select-option>
              <b-form-select-option v-for="character in characters" :value="character" :key="character._id">
                  <b-form-select-option v-if="character.name">{{character.name}}</b-form-select-option>
              </b-form-select-option>
          </b-form-select>
      </b-form>

        <b-button-group class="mx-1">
            <b-button v-on:click="playAnagramGame()">Play Anagram Game</b-button>
            <b-button v-on:click="playTopTrumpsGame()">Play Top Trumps Game</b-button>
        </b-button-group>

    </b-button-toolbar>

    

</div>
  
</template>

<script>
import { eventBus } from '../main.js'

export default {
    name: 'nav-bar',
    props: ['characters'],
    data() {
        return {
            selectedCharacter: null
        }
    },
    methods: {
        handleSelect(){
            eventBus.$emit('character-selected', this.selectedCharacter)
            this.selectedCharacter = null
        },
        playAnagramGame(){
            eventBus.$emit('play-anagram')
        },
        playTopTrumpsGame(){
            eventBus.$emit('play-top-trumps-game')
        },
    }
}
</script>

<style>

</style>