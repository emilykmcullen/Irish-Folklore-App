<template>
<div id="b-buttons">
    
        <!-- <b-col><b-button v-on:click="closeCharacterModal()">Close</b-button></b-col> -->
        <b-button-group id="character-button-group">
        <b-button variant="outline-success" v-if="currentDescriptionPage > 0" v-on:click="updateDescriptionPage('previous')">Previous</b-button>
        <b-button variant="success" v-if="currentDescriptionPage < character.description.length -1 " v-on:click="updateDescriptionPage('next')">Next</b-button>
        </b-button-group>
        <p v-if="character.description.length>1" id="page-number">Page {{currentDescriptionPage + 1}}/{{character.description.length}}</p>
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

p#page-number {
    font-family: 'Oxygen', sans-serif;
    margin-bottom: 0;
}

#character-button-group {
    margin: 10px;
}

</style>