<template>
  <div>
      <p><img class="image" :src="playerTwoCurrentCard.image"></p>
          <p>{{playerTwoCurrentCard.name}}</p>
          <ul>
                <li v-for="(property, name) in playerTwoCurrentCard.top_trumps_properties" :key="name" >
                    <b-button class="stat-name">{{name}}</b-button>
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
ul {
    list-style: none;
}

.stat-name {
    text-transform: capitalize;
}

button {
    margin: 5px;
}
</style>