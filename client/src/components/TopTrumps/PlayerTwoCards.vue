<template>
 <div class="player-two-cards">
      <p class="player-two-cards">Cards: {{playerTwoDeck.length}}</p>
  </div>
  
</template>

<script>
export default {
    name: 'player-two-cards',
    props: ['playerTwoDeck']

}
</script>

<style>

.player-two-cards{
    margin-bottom: 0px;
}

</style>