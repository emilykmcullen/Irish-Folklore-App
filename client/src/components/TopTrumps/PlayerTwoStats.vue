<template>
<div>

  <!-- this file is so that the computer stats are shown as ??? before the user chooses a stat, then the computers stats are revealed after -->

  <p><img class="image" :src="playerTwoCurrentCard.image"></p>
          <p>{{playerTwoCurrentCard.name}}</p>
          <ul v-if="userSelectedStat">
                <li v-for="(property, name) in playerTwoCurrentCard.top_trumps_properties" :key="name" >
                    <b-button class="stat-name">{{name}}</b-button>
                    <span>{{property}}</span>
                </li>
          </ul>
          <ul v-else>
                <li v-for="(property, name) in playerTwoCurrentCard.top_trumps_properties" :key="name" >
                    <b-button class="stat-name">{{name}}</b-button>
                    <span>???</span>
                </li>
          </ul>

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