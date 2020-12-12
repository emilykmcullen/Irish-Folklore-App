<template>
  <div id="favourites-list">
      <h2>Favourites</h2>
      <ul>
          <li id="favourites" v-for="favourite in favourites" :key="favourite._id">
              <p v-if="favourite.name">{{favourite.name}}</p>
              <p v-if="!favourite.name">{{favourite.species}}</p>
              <button v-on:click="removeFromFavourites(favourite._id)">Remove</button>
          </li>
      </ul>

  </div>
</template>

<script>
import { eventBus } from '../main.js'

export default {
    name: 'favourites-list',
    props: ['favourites'],
    methods: {
        removeFromFavourites(id){
            eventBus.$emit('favourite-to-remove', id)
        }
    }

}
</script>

<style>

</style>