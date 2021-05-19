<template>
    <section id="content">
                <!--Listado peliculas-->
                <h2 class="subheader">Películas</h2>

                <div class="favorita" v-if="favorita">
                    <h2>La película favorita es {{favorita.title}}</h2>
                </div>

                <div v-for="pelicula in peliculasMayusculas" v-bind:key="pelicula.title">
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
    computed: {
        peliculasMayusculas(){
            var peliculasMod = this.peliculas;
            for(var i = 0; i < this.peliculas.length; i++){
                peliculasMod[i].title = peliculasMod[i].title.toUpperCase();
            }
            return peliculasMod;
        }
    },
    misDatos(){
        return this.nombre + ' ' + this.apellidos
    },
    data(){
        return{
            favorita:null,
            peliculas:[
            {title: 'Rockanrolla', 
            year:2008, 
            image:'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwallpoper.com%2Fimages%2F00%2F14%2F36%2F13%2Frocknrolla_00143613.jpg&f=1&nofb=1',
            sinopsis: "La noticia de que Uri Omovich (Karel Roden), un rico mafioso ruso, está montando un negocio multimillonario de compraventa ilegal de terrenos en Londres, hará que todos los delincuentes de la ciudad quieran participar en la operación. Uri le pide a Lenny Cole (Tom Wilkinson), un pez gordo de la mafia londinense, que se ocupe de todos los trámites burocráticos y compré a un concejal (Jimi Mistry). Lenny confía la operación a su lugarteniente Archy (Mark Strong). Por su parte, la contable de Uri, Stella (Thandie Newton), decide llevarse parte del botín; para ello, contrata a dos mafiosos, que tienen cuentas pendientes con Lenny",
            },
            {title: 'Snatch', 
            year:2000,
            image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapercave.com%2Fwp%2Fwp1967466.jpg&f=1&nofb=1',
            sinopsis: 'Franky es un ladrón de diamantes que tiene que entregar un valioso ejemplar a su jefe Avi, pero, antes de hacerlo, se deja convencer por un tal Boris para apostar en un combate ilegal de boxeo. En realidad, se trata de una trampa para arrebatarle el diamante. Cuando Avi se entera, contrata a Tony para encontrar a Franky y al diamante. Descubierto el triste destino de Franky, la recuperación de la gema desaparecida provoca una situación caótica, donde el engaño, el chantaje y el fraude se mezclan de forma sangrienta con perros, diamantes, boxeadores y gran variedad de armas.',
            },
            {title: 'Lock, stock and two smocking barrels',
            year: 1998, 
            image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi1.wp.com%2Fthepopbreak.com%2Fwp-content%2Fuploads%2F2019%2F03%2Flock-stock-two-smoking-barrels.jpg%3Ffit%3D1280%252C720%26ssl%3D1&f=1&nofb=1',
            sinopsis: 'Eddie convence a tres amigos para jugarse sus ahorros en una partida de cartas contra Harry el Hacha, un mafioso del barrio. La partida está amañada, y Eddie no sólo pierde todo el dinero sino que contrae una deuda de medio millón de libras, que debe pagar en el plazo de una semana. El mafioso pretende quedarse con el local de su padre para resarcirse de la deuda, pero los cuatro amigos planean saldarla de una forma mucho más arriesgada.',
            },
            {title: 'The Gentlemen', 
            year:2019, 
            image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fposterspy.com%2Fwp-content%2Fuploads%2F2019%2F12%2FNYC_The_Gentlemen_Eliud_Rivera.jpg&f=1&nofb=1',
            sinopsis: 'Un capo de la droga con un marcado estilo británico intenta vender su imperio a una dinastía de multimillonarios procedentes de Oklahoma. '
            },
            ]
        }
    }
}
</script>