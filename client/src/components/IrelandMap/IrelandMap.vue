<template>
  <div>
    <highcharts id="ireland-map" :constructorType="'mapChart'" class="hc" :options="chartOptions" ref="chart"></highcharts>
  </div>
</template>

<script>
import { eventBus } from '../../main.js'
import ireland from './ie-all.geo.json'

// '@highcharts/map-collection/countries/ie/ie-all.geo.json'

export default {
    name: 'ireland-map',
    data() {
        return {
            selectedId: '',
        chartOptions: {
            chart: {
            map: ireland
            },
            title: {
            text: ''
            },
            subtitle: {
            // text: ' <a href="http://code.highcharts.com/mapdata/countries/ie/ie-all.js">Mythical Creatures of Irish Folklore</a>'
            },
            mapNavigation: {
            enabled: true,
            buttonOptions: {
                alignTo: 'spacingBox'
            }
            },
            legend: {
                enabled: false
            },
            colorAxis: {
            min: 0,
            minColor: '#8ad498',
            maxColor: '#1f8032',
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
            series: [{
            name: 'Character',
            states: {
                hover: {
                color: '#BADA55'
                }
            },
            dataLabels: {
                enabled: true,
                format: '{point.name}'
            },
            allAreas: false,
            data: [
                ['ie-5551', 0],
                ['ie-1510', 1],
                ['ie-mo', 2],
                ['ie-ky', 3],
                ['ie-dl', 4],
                ['ie-491', 5],
                ['ie-ce', 6],
                ['ie-7034', 7],
                ['ie-7035', 8],
                ['ie-ld', 9],
                ['ie-cn', 10],
                ['ie-2363', 11],
                ['ie-mn', 12],
                ['ie-gy', 13],
                ['ie-ck', 14],
                ['ie-wd', 15],
                ['ie-7033', 16],
                ['ie-1528', 17],
                ['ie-dn', 18],
                ['ie-lh', 19],
                ['ie-mh', 20],
                ['ie-oy', 21],
                ['ie-wh', 22],
                ['ie-wx', 23],
                ['ie-cw', 24],
                ['ie-ww', 25],
                ['ie-ke', 26],
                ['ie-kk', 27],
                ['ie-ls', 28],
                ['ie-ty', 29],
                ['ie-1533', 30],
                ['ie-lk', 31],
                ['ie-rn', 32],
                ['ie-so', 33],
                ['ie-lm', 34]
            ]
            }]
        }
        };
    }
    };
    </script>

<style>

#ireland-map {
    height: 800px; 
    min-width: 800px; 
    max-width: 800px; 
    margin: 0 auto; 
}

</style>