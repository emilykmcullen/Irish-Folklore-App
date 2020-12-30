<template>
<div id="b-buttons">
    
        <!-- <b-col><b-button v-on:click="closeCharacterModal()">Close</b-button></b-col> -->
        <b-button-group>
        <b-button v-if="currentDescriptionPage > 0" v-on:click="updateDescriptionPage('previous')">Previous</b-button>
        <b-button v-if="currentDescriptionPage < character.description.length -1 " v-on:click="updateDescriptionPage('next')">Next</b-button>
        </b-button-group>
</div>
  
</template>

<script>
import { eventBus } from '../../main.js'

export default {
    name: 'description-page-navigation',
    props: ['currentDescriptionPage', 'character'],
    methods: {
        updateDescriptionPage(direction) {
            eventBus.$emit('update-description-page', direction)
        },
        // closeCharacterModal(){
        //     eventBus.$emit('close-character-modal')
        // }
    }

}
</script>

<style>



</style>