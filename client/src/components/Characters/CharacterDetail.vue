<template>
<b-modal class="modal" id="character-detail-modal"
        :hide-footer="true"
        :hide-header="true"
        >

        
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
    height: 200px;
}

#character-description{
    font-family: 'Oxygen', sans-serif;
}

.modal{
    text-align: center;
}

</style>