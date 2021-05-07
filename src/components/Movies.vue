<template>
    <section id="content">
                <!--Listado peliculas-->
                <h2 class="subheader">Películas</h2>

                <div class="favorita" v-if="favorita">
                    <h2>La película favorita es {{favorita.title}}</h2>
                </div>

                <div v-for="pelicula in peliculas" v-bind:key="pelicula.title">
                    <Movie 
                    :pelicula="pelicula"
                    @favorita="peliculaFavorita"
                    >
                    </Movie>
                </div>                
                
                
    </section>
</template>

<script>
import Movie from './Movie';

export default {
    name: "Movies",
    components:{
        Movie
    },
    methods:{
        peliculaFavorita(favorita){
            this.favorita = favorita;
        }
    },
    data(){
        return{
            favorita:null,
            peliculas:[
            {title: 'Rockanrolla', year:2008, image: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwallpoper.com%2Fimages%2F00%2F14%2F36%2F13%2Frocknrolla_00143613.jpg&f=1&nofb=1'},
            {title: 'Snatch', year:2000, image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapercave.com%2Fwp%2Fwp1967466.jpg&f=1&nofb=1'},
            {title: 'Lock, stock and two smocking barrels', year: 1998, image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi1.wp.com%2Fthepopbreak.com%2Fwp-content%2Fuploads%2F2019%2F03%2Flock-stock-two-smoking-barrels.jpg%3Ffit%3D1280%252C720%26ssl%3D1&f=1&nofb=1'},
            {title: 'The Gentlemen', year:2019, image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fposterspy.com%2Fwp-content%2Fuploads%2F2019%2F12%2FNYC_The_Gentlemen_Eliud_Rivera.jpg&f=1&nofb=1'},
            ]
        }
    }
}
</script>