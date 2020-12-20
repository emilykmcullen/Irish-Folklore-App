<template>
<div id="nav-bar">
    <b-container class="nav-container" fluid="md">
    <b-row align-h="start" >
        <b-col class="d-flex justify-content-end nav-button" >
        <b-form v-on:submit.prevent>
          <b-form-select v-on:change="handleSelect" v-model="selectedCharacter" class="select-form" id="character-select">
              <b-form-select-option selected disabled :value="null">Select a character</b-form-select-option>
              <b-form-select-option v-for="character in characters" :value="character" :key="character._id">
                  <b-form-select-option v-if="character.name">{{character.name}}</b-form-select-option>
              </b-form-select-option>
          </b-form-select>
        </b-form>
        </b-col>

        <b-col class="d-flex justify-content-center nav-button">
            <b-button v-on:click="playAnagramGame()">Play Anagram Game</b-button>
        </b-col>
        <b-col class="nav-button">
            <b-button v-on:click="playTopTrumpsGame()">Play Top Trumps Game</b-button>
        </b-col>

    </b-row>
    </b-container>

    

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
        }
    }
}
</script>

<style>

.nav-button {
    margin: 0;
    padding: 0;
    font-family: 'Oxygen', sans-serif;
}

.nav-container {
    padding: 15px;
}

</style>