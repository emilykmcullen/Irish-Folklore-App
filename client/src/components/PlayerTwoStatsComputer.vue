<template>
  <div>
      <p><img class="image" :src="playerTwoCurrentCard.image"></p>
          <p>{{playerTwoCurrentCard.name}}</p>
          <ul>
                <li v-for="(property, name) in playerTwoCurrentCard.top_trumps_properties" :key="name" >
                    <button>{{name}}</button>
                    <span>{{property}}</span>
                </li>
          </ul>
          
       


          
  </div>
</template>

<script>
export default {
    name: 'player-two-stats-computer',
    props: ['playerTwoCurrentCard']

}
</script>

<style>

</style>