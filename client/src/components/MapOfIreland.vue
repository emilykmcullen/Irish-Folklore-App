<template>
<div>
    <radio-svg-map :map="Australia"></radio-svg-map>
</div>
  
</template>

<script>
import { RadioSvgMap } from 'vue-svg-map'
import { eventBus } from '../main.js'
import Australia from '@svg-maps/australia'


export default {
    name: 'map-of-ireland',
    components: {
        RadioSvgMap
    },
    data() {
        return {
            Australia,
            selectedLocation: null
        }
    }

}
</script>

<style src="vue-svg-map/dist/index.css">

</style>