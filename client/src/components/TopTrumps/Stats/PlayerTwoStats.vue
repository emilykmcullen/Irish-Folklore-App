<template>
<div>

  <!-- this file is so that the computer stats are shown as ??? before the user chooses a stat, then the computers stats are revealed after -->
    <h5>Opponent</h5>
    <p><img class="image" :src="playerTwoCurrentCard.image"></p>
          <h5>{{playerTwoCurrentCard.name}}</h5>
          <b-card class="player-two-stats">
          <ul v-if="userSelectedStat">
                <li v-for="(property, name) in playerTwoCurrentCard.top_trumps_properties" :key="name" >
                    <p class="stat-name-player-two">{{name}}
                    <span>{{property}}</span>
                    </p>
                </li>
          </ul>
          <ul v-else>
                <li v-for="(property, name) in playerTwoCurrentCard.top_trumps_properties" :key="name" >
                    <p class="stat-name-player-two">{{name}}
                    <span>???</span>
                    </p>
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

.stat-name-player-two {
    text-transform: capitalize;
}


</style>