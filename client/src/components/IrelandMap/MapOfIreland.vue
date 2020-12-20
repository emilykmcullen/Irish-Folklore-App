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
            data: [ ['2345255', 'https://emilyspictures.s3-us-west-2.amazonaws.com/Leprechaun_ill_artlibre_jnl.png'],
                    ['2345264', 'https://emilyspictures.s3-us-west-2.amazonaws.com/finvarra.png'],
                    ['2345256', 'https://emilyspictures.s3-us-west-2.amazonaws.com/fin_maccool.jpg'],
                    ['2345253', 'https://www.connollycove.com/wp-content/uploads/2017/10/Myths_2.jpg'],
                    ['2345252', 'https://www.celtic-weddingrings.com/img/cms/irish-fairies.jpg'],
                    ['2345251', 'https://storage.ning.com/topology/rest/1.0/file/get/84707175?profile=RESIZE_1024x1024'],
                    ['1', 'https://media.mythopedia.com/assets/images/celtic-mythology/gods/dagda/the-dagda-playing-his-harp.png?q=50&w=320&auto=format'],
                    ['2', 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/83_b_bartol_2_wick.JPG/800px-83_b_bartol_2_wick.JPG'],
                    ['2345250', 'https://vignette.wikia.nocookie.net/gods-goddess/images/5/59/Phooka.jpg/revision/latest?cb=20141220195722'],
                    ['2345271', 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Macha.jpg/220px-Macha.jpg'],
                    ['2345266', 'https://www.irelandbeforeyoudie.com/wp-content/uploads/2019/09/fairy-queen-irish-mythological-creatures.jpg'],
                    ['3', 'https://www.ancient-origins.net/sites/default/files/field/image/irish-Legend-of-Cu-Chulainn.jpg'],
                    ['4', 'https://www.ringsfromireland.com/uploads/images/Blog/2014/10/Diarmuid%20and%20Grainne.jpg'],
                    ['5', 'https://i.pinimg.com/originals/b7/a0/f8/b7a0f8aa1c40a180d6fa10c3a6f03f59.jpg'],
                    ['6', 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/15_They_rode_up_to_a_stately_palace.jpg/220px-15_They_rode_up_to_a_stately_palace.jpg'],
                    ['7', 'https://i.pinimg.com/originals/f5/9f/67/f59f67d827d5e24570ea6240c623e707.jpg'],
                    ['2345263', 'https://4.bp.blogspot.com/-7_4fMlRrDAU/UhKEi_B-Y9I/AAAAAAAAAQc/6NL5uk1cjd4/s1600/Abhartach.jpg'],
                    ['2345265', 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Cuchulainn%27s_death%2C_illustration_by_Stephen_Reid_1904.jpg/170px-Cuchulainn%27s_death%2C_illustration_by_Stephen_Reid_1904.jpg'],
                    ['2345267', 'https://www.irishcentral.com/uploads/article/11785/_The_Riders_of_the_Sidhe__John_Duncan_1911_McManus_Galleries__Dundee__Sevenseaocean_Creative_Commmons.jpg?t=1601205609'],
                    ['2345272', 'https://i.pinimg.com/originals/05/2a/1b/052a1bf928430cd426895a329c6144bb.jpg'],
                    ['2345273', 'https://ferrebeekeeper.files.wordpress.com/2014/02/sluagh.jpg'],
                    ['2345249', 'https://emeraldisle.ie/upload/three-sons-header3240.jpg'],
                    ['2345274', 'https://www.celtic-weddingrings.com/img/cms/oisin-niamh.jpg'],
                    ['2345257', 'https://catholicsaintmedals.com/wp-content/uploads/patrick-snakes.jpg'],
                    ['2345258', 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Cuinbattle.jpg/200px-Cuinbattle.jpg'],
                    ['2345260', 'https://www.irishtimes.com/polopoly_fs/1.3181258.1502289966!/image/image.jpg_gen/derivatives/box_620_330/image.jpg'],
                    ['2345261', 'https://static.wixstatic.com/media/a27d24_27f9ce5baf0d41c9aae8a58836472783~mv2.jpg/v1/fill/w_600,h_299,al_c,q_90/a27d24_27f9ce5baf0d41c9aae8a58836472783~mv2.jpg'],
                    ['9', 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Carrick.JPG/1024px-Carrick.JPG'],
                    ['2345268', 'https://widgetworld3.files.wordpress.com/2013/11/she-heard-her-name-called-again-and-again.jpg'],
                    ['2345269', 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Heroes_of_the_dawn_%281914%29_%2814566173909%29.jpg/220px-Heroes_of_the_dawn_%281914%29_%2814566173909%29.jpg'],
                    ['2345259', 'https://emeraldisle.ie/upload/mesegdra-header3322.jpg'],
                    ['2345262', 'https://1.bp.blogspot.com/_NMdhBDpOTaQ/Ssio0BQKnVI/AAAAAAAAAZg/99Jyn26fubs/s400/Balor+to+post.jpg'],
                    ['15', 'https://i961.photobucket.com/albums/ae98/sharmcdaniel/conchobar-1.jpg'],
                    ['2345270', 'https://www.libraryireland.com/fairylegends/images/rockcandle.png'],
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
                borderColor: '#25A539',
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
}
</style>