<template>
<div class="general">
        <Slider texto="Página 1"/>
    <div class="center">
    <section id="content">
        <h2 class="subheader">Página</h2>
        <h3>{{id_desde_url}}</h3>
    </section>
        <Sidebar/>

    <div class="clearfix"></div>

    </div>
</div>
</template>

<script>
import Slider from "./Slider";
import Sidebar from "./Sidebar";

export default ({
    name: "Página",
    components: {
        Slider,
        Sidebar,
    },
    created (){
        console.log('Componente creado');
    },
    mounted(){
        this.id_desde_url - this.$route.params.id;
        console.log('Componente montado');
    },
    updated(){
        console.log('Componente actualizado');
    },
    unmounted(){
        console.log('Componente eliminado');
    },

    data(){
        return {
            id_desde_url: null
        };
    }
})
</script> 