<template>
<div>

  <!-- this file is so that the computer stats are shown as ??? before the user chooses a stat, then the computers stats are revealed after -->
    <h3>Opponent</h3>
    <p><img class="image" :src="playerTwoCurrentCard.image"></p>
          <h4>{{playerTwoCurrentCard.name}}</h4>
          <b-card class="player-two-stats">
          <ul v-if="userSelectedStat">
                <li v-for="(property, name) in playerTwoCurrentCard.top_trumps_properties" :key="name" >
                    <button class="stat-name">{{name}}</button>
                    <span>{{property}}</span>
                </li>
          </ul>
          <ul v-else>
                <li v-for="(property, name) in playerTwoCurrentCard.top_trumps_properties" :key="name" >
                    <button class="stat-name">{{name}}</button>
                    <span>???</span>
                </li>
          </ul>
          </b-card>

  </div>
</template>

<script>
export default {
    name: 'player-two-stats',
    props: ['playerTwoCurrentCard', 'userSelectedStat']

}
</script>

<style>

ul {
    list-style: none;
}

button {
    margin: 5px;
}

.stat-name {
    text-transform: capitalize;
}


</style>