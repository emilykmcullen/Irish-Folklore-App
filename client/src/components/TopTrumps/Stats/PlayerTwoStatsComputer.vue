<template>
  <div>
      <h5>Opponent</h5>
      <p><img class="image" :src="playerTwoCurrentCard.image"></p>
          <h5>{{playerTwoCurrentCard.name}}</h5>
          <b-card class="player-two-stats">
          <ul>
                <li v-for="(property, name) in playerTwoCurrentCard.top_trumps_properties" :key="name" >
                    <p class="stat-name-player-two">{{name}}
                    <span>{{property}}</span>
                    </p>
                </li>
          </ul>
          </b-card>
          
       


          
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

.stat-name-player-two {
    text-transform: capitalize;
}

button {
    margin: 5px;
}
</style>