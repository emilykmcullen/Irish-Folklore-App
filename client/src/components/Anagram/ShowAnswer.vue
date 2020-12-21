<template>
<div id="show-answer">
    The answer is {{answerToShow}}

</div>
  
</template>

<script>
export default {
    name: 'show-answer',
    props: ['answerToShow']
}
</script>

<style>
#show-answer{
    padding: 15px;
}

</style>