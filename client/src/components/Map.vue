<template>
  <div id="mapContainer">
      
  </div>


</template>

<script>

import L from "leaflet";
import { LMap, LTileLayer, LMarker } from 'vue2-leaflet'

export default {
    name:'map',
    components: {
        LMap,
        LTileLayer,
        LMarker
    },
    mounted () {
        this.setupLeafletMap()
        this.initLayers()

    },
    data(){
        return {
           center: [ 37, 7749, -122, 4194]
    
        }
    },
    methods: {
        setupLeafletMap: function () {
            const mapDiv = L.map("mapContainer").setView(this.center, 13);
            L.tileLayer(
                "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}"
            )
        }
    }

}
</script>

<style>
#mapid { height: 180px; }

</style>