<template>
<div>
    <div id="next">
        <button v-if="currentDescriptionPage < character.description.length -1 " v-on:click="updateDescriptionPage('next')">Next</button>
    </div>
    <div id="previous">
        <button v-if="currentDescriptionPage > 0" v-on:click="updateDescriptionPage('previous')">Previous</button>

    </div>
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
        }
    }

}
</script>

<style>

</style>