<template>
    <div id="articles">
                    <article class="article-item">
                        <div style="height" class="image-wrap">
                            <img :src="pelicula.image"
                                :title="pelicula.title"
                            />
                        </div>
    
                        <h2>{{pelicula.title}}</h2>
                        <span class="date" v-bind:class="{
                            yearblack: pelicula.year >= 2002,
                            yearred: pelicula.year < 2001,
                        }">
                            {{pelicula.year}}
                        </span>
                        <a href="#">{{pelicula.sinopsis}}</a>


                        <input type="button" value="marcar como favorita"
                            @click="enviarFavorita(pelicula)"
                        />


                        <div class="clearfix"></div>
                    </article>

                    <!--AÑADIR ARTICULOS VIA JS-->

                </div>
</template>

<script>
export default {
    name: 'Movie',
    props: ['pelicula'],

    methods: {
        enviarFavorita(pelicula){
            this.$emit('favorita', pelicula);
            alert("Se ha agregado a favoritas");
        }
    }
}
</script>