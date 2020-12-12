<template>
  <div vif v-if="character" id="character-detail">
      <div v-if="character.name">
          <h2>{{character.name}}</h2>
          <img class="image" :src="character.image">
      </div>
      <div v-if="!character.name">
          <h2>{{character.species}}</h2>
          <img class="image" :src="character.image">
      </div>


  </div>
</template>

<script>
export default {
    name: 'character-detail',
    props: ['character']


}
</script>

<style>
.image {
    height: 100px;
}
</style>