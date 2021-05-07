<template>
    <section id="content">
        <h2 class="subheader">Página 2</h2>
    
        <h2>Reactividad</h2>
        <input type="text" v-model="nombre"/>
        nombre: <strong>{{nombre}}</strong>

        <h2>Directiva condicionales</h2>
        <input type="number" v-model="edad"/>
        edad: <strong>{{edad}}</strong>

        <p v-if="edad && edad >= 18 && edad < 65">
            Eres mayor de edad
        </p>

        <p v-else-if="edad && edad >=65">
            Eres de avanzada edad
        </p>

        <p v-else>
            Eres menor de edad
        </p>

        <h2>Directuva iterativa</h2>
        <ol>
            <li v-for="pelicula in peliculas" :key="pelicula">{{pelicula}}</li>
        </ol>
    
    </section>
</template>

<script>


export default ({
    name: "Pagina2",
    data(){
        return{
            nombre:"",
            edad:"",
            peliculas: ['Snatch', 'Lock, Stock and Two...', 'Rockanrolla', 'The Gentleman'],
        }
    }
})
</script>