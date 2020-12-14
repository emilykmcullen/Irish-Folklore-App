<template>
<b-modal class="modal" id="character-detail-modal"
        :min-height="200"
        :scrollable="true"
        :reset="true"
        width="40%"
        height="auto">

        
  <div v-if="character" id="character-detail">
      <div v-if="character.name">
          <h2>{{character.name}}</h2>
          <img class="image" :src="character.image">
      </div>
      <div id="character-description">
          <h3>{{character.description[currentDescriptionPage]}}</h3>
      </div>
      <div>
          <description-page-navigation :currentDescriptionPage="currentDescriptionPage" :character="character"></description-page-navigation>
      </div>


  </div>
</b-modal>
</template>


<script>
import DescriptionPageNavigation from './DescriptionPageNavigation.vue'

export default {
    name: 'character-detail',
    props: ['character', 'currentDescriptionPage'],
    components: {
        'description-page-navigation': DescriptionPageNavigation
    }


}
</script>

<style>
.image {
    height: 100px;
}
</style>