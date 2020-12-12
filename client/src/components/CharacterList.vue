<template>
  <div id="select-character-form">
      <form v-on:submit.prevent>
          <select v-on:change="handleSelect" v-model="selectedCharacter" class="select-form" id="character-select">
              <option disabled value="">Select a character</option>
              <option v-for="character in characters" :value="character" :key="character._id">
                  <option v-if="character.name">{{character.name}}</option>
                  <option v-if="!character.name">{{character.species}}</option>
              </option>
              <!-- <option v-for="(character) in namedCharacters" :value="character" :key="character._id">{{character.name}}</option>
              <option v-for="(character) in species" :value="character" :key="character._id">{{character.species}}</option>
               -->
              

          </select>

      </form>
  </div>
</template>

<script>
import { eventBus } from '../main.js'

export default {
    name: 'character-list',
    props: ['characters'],
    data() {
        return {
            selectedCharacter: {}
        }
    },
    methods: {
        handleSelect(){
            eventBus.$emit('character-selected', this.selectedCharacter)
        }
    }
}
</script>

<style>

</style>