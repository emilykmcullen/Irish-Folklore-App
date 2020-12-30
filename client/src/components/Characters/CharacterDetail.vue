<template>
<b-modal class="modal" id="character-detail-modal"
        :hide-footer="true"
        :title="character.name"
        >

        
  <div v-if="character" id="character-detail">
      
        <img id="character-image" class="image" :src="character.image">
      
        <b-card class="character-description">
        <div class="character-description">
          <h5 class="character-description">{{character.description[currentDescriptionPage]}}</h5>
        </div>
        </b-card>

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

#character-image.image {
    max-height: 200px;
    width: auto;
    margin: 15px;
}

h5.character-description {
    font-family: 'Oxygen', sans-serif;
}

.modal{
    text-align: center;
}


#character-detail-modal___BV_modal_title_.modal-title {
    font-family: 'Oxygen', sans-serif;
    font-weight: 700;
}

.character-description.card{
    border: solid;
    border-color: green;
    border-radius: 20px;
    background-color: #a5ee7d ;
    margin-bottom: 10px;
    

}




</style>