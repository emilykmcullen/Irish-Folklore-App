<template>
<div id="container">
  <highcharts id="map-of-ireland" :constructorType="'mapChart'" class="hc" :options="chartOptions" ref="chart"></highcharts>
</div>
</template>

<script>

// import pattern from 'highcharts/modules/pattern-fill.js'
import ireland from './ie-all.geo.json'
import { eventBus } from '../../main.js'

export default {
    name: 'map-of-ireland',
    data() {
        return {
            selectedId: '',
            styledMode: true,
        chartOptions: {
            chart: {
            map: ireland
            },
            title: {
            text: 'Map of Ireland',
            style: {
                
            }
            },
        // Add zoom/pan
        mapNavigation: {
            enabled: true,
            enableDoubleClickZoomTo: true,
            buttonOptions: {
            verticalAlign: 'bottom'
            }
        },

        // Limit zoom
        xAxis: {
            minRange: 3500
        },

        // We do not want a legend
        legend: {
            enabled: false
        },
        plotOptions:{
        	series:{
            	point:{
                	events:{
                    	click: function(){
                        	eventBus.$emit('map-selected-character', this.properties.woe_id);
                        }
                    }
                }
            }
        },

        // Make tooltip show full image
        tooltip: {
            useHTML: true,
            borderColor: '#aaa',
            headerFormat: '<b>{point.point.name}</b><br>',
            pointFormat: '<img style="width: 150px; height: 100px;" src=\'{point.options.color.pattern.image}\'>'
        },

        // Define the series
        series: [{
            name: 'State flags',
            keys: [
            'woe_id', 'color.pattern.image', 'borderWidth', 'color.pattern.x', 'color.pattern.y', 'borderColor'
            ],
            joinBy: 'woe_id',
            data: [ ['2345255', 'https://ireland-map-pictures.s3.us-east-2.amazonaws.com/lep1.jpg'],
                    ['2345264', 'https://ireland-map-pictures.s3.us-east-2.amazonaws.com/Finvarra.jpg'],
                    ['2345256', 'https://ireland-map-pictures.s3.us-east-2.amazonaws.com/FinMaccool.jpg'],
                    ['2345253', 'https://ireland-map-pictures.s3.us-east-2.amazonaws.com/Banshee.jpg'],
                    ['2345252', 'https://ireland-map-pictures.s3.us-east-2.amazonaws.com/Fairies.jpg'],
                    ['2345251', 'https://ireland-map-pictures.s3.us-east-2.amazonaws.com/ChildrenofLir.jpg'],
                    ['1', 'https://ireland-map-pictures.s3.us-east-2.amazonaws.com/DagdasHarp.jpg'],
                    ['2', 'https://ireland-map-pictures.s3.us-east-2.amazonaws.com/Changeling.jpg'],
                    ['2345250', 'https://ireland-map-pictures.s3.us-east-2.amazonaws.com/Pooka.jpg'],
                    ['2345271', 'https://ireland-map-pictures.s3.us-east-2.amazonaws.com/Macha.jpg'],
                    ['2345266', 'https://ireland-map-pictures.s3.us-east-2.amazonaws.com/PixieInLove.jpg'],
                    ['3', 'https://ireland-map-pictures.s3.us-east-2.amazonaws.com/irish-Legend-of-Cu-Chulainn.jpg'],
                    ['4', 'https://ireland-map-pictures.s3.us-east-2.amazonaws.com/DiarmuidGrainne.jpg'],
                    ['5', 'https://ireland-map-pictures.s3.us-east-2.amazonaws.com/Morrgian.jpg'],
                    ['6', 'https://ireland-map-pictures.s3.us-east-2.amazonaws.com/TirNaOg.jpg'],
                    ['7', 'https://ireland-map-pictures.s3.us-east-2.amazonaws.com/GiantsCauseway.jpg'],
                    ['2345263', 'https://ireland-map-pictures.s3.us-east-2.amazonaws.com/Abhartach.jpg'],
                    ['2345265', 'https://ireland-map-pictures.s3.us-east-2.amazonaws.com/DeathofCuChullain.jpg'],
                    ['2345267', 'https://ireland-map-pictures.s3.us-east-2.amazonaws.com/Tuatha.jpg'],
                    ['2345272', 'https://ireland-map-pictures.s3.us-east-2.amazonaws.com/AmadanDubh.jpg'],
                    ['2345273', 'https://ireland-map-pictures.s3.us-east-2.amazonaws.com/Sluagh.jpg'],
                    ['2345249', 'https://ireland-map-pictures.s3.us-east-2.amazonaws.com/LordofLust.jpg'],
                    ['2345274', 'https://ireland-map-pictures.s3.us-east-2.amazonaws.com/NiamandOisin.jpg'],
                    ['2345257', 'https://ireland-map-pictures.s3.us-east-2.amazonaws.com/StPatrick.jpg'],
                    ['2345258', 'https://ireland-map-pictures.s3.us-east-2.amazonaws.com/CattleRaid.jpg'],
                    ['2345260', 'https://ireland-map-pictures.s3.us-east-2.amazonaws.com/Fairyforts.jpg'],
                    ['2345261', 'https://ireland-map-pictures.s3.us-east-2.amazonaws.com/Quickentrees.jpg'],
                    ['9', 'https://ireland-map-pictures.s3.us-east-2.amazonaws.com/Slieve.jpg'],
                    ['2345268', 'https://ireland-map-pictures.s3.us-east-2.amazonaws.com/EthneLeaves.jpg'],
                    ['2345269', 'https://ireland-map-pictures.s3.us-east-2.amazonaws.com/AngusOg.jpg'],
                    ['2345259', 'https://ireland-map-pictures.s3.us-east-2.amazonaws.com/MadnessofSuibhne.jpg'],
                    ['2345262', 'https://ireland-map-pictures.s3.us-east-2.amazonaws.com/BalorEvilEye.jpg'],
                    ['15', 'https://ireland-map-pictures.s3.us-east-2.amazonaws.com/Conchobar.jpg'],
                    ['2345270', 'https://ireland-map-pictures.s3.us-east-2.amazonaws.com/RockCandle.jpg'],
                    ],
            borderColor: '#fff',
            borderWidth: 6,
            color: {
            pattern: {
                // This is inherited by the individual pattern definitions for
                // each point. As long as a width/height for the pattern is not
                // defined, Highcharts will automatically fill the bounding box
                // while preserving the aspect ratio defined here. Without an
                // aspect ratio defined, Highcharts will simply fill the
                // bounding box with the image, stretching it to fit.
                aspectRatio: 3 / 2
            }
            },
            states: {
            hover: {
                borderColor: '#7EBD5B',
                borderWidth: 2
            }
            }
        }, {
            /* Separator lines */
            type: 'mapline',
            nullColor: '#aaa'
        }]
}}}};

</script>

<style>

/* #container {
    padding: 40px;

} */

#map-of-ireland {
    height: 800px; 
    min-width: 800px; 
    max-width: 800px; 
    margin: 0 auto;
    font-family: 'Oxygen'; 
}

.highcharts-title {
    font-family: 'Oxygen';
}

</style>