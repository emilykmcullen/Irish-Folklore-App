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
        chartOptions: {
            chart: {
            map: ireland
            },
            title: {
            text: 'Map of Ireland'
            },
            subtitle: {
            text: 'Source: <a href="https://en.wikipedia.org/wiki/Flags_of_the_U.S._states_and_territories">Wikipedia</a>'
        },
        // chart: {
        //     height: 500,
        // },

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
            data: [
                    ['2345255', 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Alabama.svg'],
                    ['2345264', 'https://upload.wikimedia.org/wikipedia/commons/e/e6/Flag_of_Alaska.svg', 1, 10, -10],
                    ['2345256', 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Flag_of_Arizona.svg'],
                    ['2345253', 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Flag_of_Arkansas.svg'],
                    ['2345252', 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Flag_of_California.svg/640px-Flag_of_California.svg.png', 1, null, null],
                    ['2345251', 'https://upload.wikimedia.org/wikipedia/commons/4/46/Flag_of_Colorado.svg'],
                    ['1', 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Flag_of_Connecticut.svg/621px-Flag_of_Connecticut.svg.png', 1],
                    ['2', 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Flag_of_Delaware.svg/640px-Flag_of_Delaware.svg.png', 1],
                    ['2345250', 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Flag_of_Florida.svg/640px-Flag_of_Florida.svg.png', 1, null, null],
                    ['2345271', 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Flag_of_Georgia_%28U.S._state%29.svg/640px-Flag_of_Georgia_%28U.S._state%29.svg.png'],
                    ['2345266', 'https://upload.wikimedia.org/wikipedia/commons/e/ef/Flag_of_Hawaii.svg', 1, null, null],
                    ['2345255', 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_Idaho.svg/609px-Flag_of_Idaho.svg.png'],
                    ['3', 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Flag_of_Illinois.svg/800px-Flag_of_Illinois.svg.png'],
                    ['4', 'https://upload.wikimedia.org/wikipedia/commons/a/ac/Flag_of_Indiana.svg'],
                    ['5', 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Flag_of_Iowa.svg/640px-Flag_of_Iowa.svg.png'],
                    ['6', 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Flag_of_Kansas.svg/800px-Flag_of_Kansas.svg.png'],
                    ['7', 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Flag_of_Kentucky.svg/640px-Flag_of_Kentucky.svg.png'],
                    ['2345263', 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Flag_of_Louisiana.svg/640px-Flag_of_Louisiana.svg.png', 3],
                    ['2345265', 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Flag_of_Maine.svg/640px-Flag_of_Maine.svg.png', 2],
                    ['2345267', 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Flag_of_Maryland.svg', 1, null, null],
                    ['2345272', 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Flag_of_Massachusetts.svg/800px-Flag_of_Massachusetts.svg.png', 1, null, null],
                    ['2345273', 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Flag_of_Michigan.svg/640px-Flag_of_Michigan.svg.png', 2],
                    ['2345249', 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Flag_of_Minnesota.svg/640px-Flag_of_Minnesota.svg.png'],
                    ['2345274', 'https://upload.wikimedia.org/wikipedia/commons/4/42/Flag_of_Mississippi.svg'],
                    ['2345257', 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Flag_of_Missouri.svg/640px-Flag_of_Missouri.svg.png'],
                    ['2345258', 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Flag_of_Montana.svg/640px-Flag_of_Montana.svg.png'],
                    ['2345260', 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Flag_of_Nebraska.svg/640px-Flag_of_Nebraska.svg.png'],
                    ['2345261', 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Flag_of_Nevada.svg/640px-Flag_of_Nevada.svg.png', null, 40],
                    ['9', 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Flag_of_New_Hampshire.svg/640px-Flag_of_New_Hampshire.svg.png', 2],
                    ['2345268', 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Flag_of_New_Jersey.svg/640px-Flag_of_New_Jersey.svg.png', 2],
                    ['2345269', 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Flag_of_New_Mexico.svg'],
                    ['2345259', 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_New_York.svg/640px-Flag_of_New_York.svg.png', 2],
                    ['2345262', 'https://upload.wikimedia.org/wikipedia/commons/b/bb/Flag_of_North_Carolina.svg'],
                    ['15', 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Flag_of_North_Dakota.svg/613px-Flag_of_North_Dakota.svg.png'],
                    ['2345270', 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Flag_of_Ohio.svg'],
                    ],
            borderColor: '#fff',
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
                borderColor: '#b44',
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

#container {
    padding: 40px;

}

/* #map-of-ireland {
    height: 800px; 
    min-width: 800px; 
    max-width: 800px; 
    margin: 0 auto; 
} */
</style>