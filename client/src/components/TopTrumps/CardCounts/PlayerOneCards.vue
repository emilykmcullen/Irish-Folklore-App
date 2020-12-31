<template>
  <div class="player-one-cards">
      <p class="player-one-cards">Cards: {{playerOneDeck.length}}</p>
  </div>
</template>

<script>
export default {
    name: 'player-one-cards',
    props: ['playerOneDeck']

}
</script>

<style>

.player-one-cards{
  margin-bottom: 0px;
}

</style>