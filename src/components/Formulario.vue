<template>
<div class="general">
        <Slider texto="Formulario"/>
    <div class="center">
    <section id="content">
        <h2 class="subheader">Formulario</h2>
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
    name: "Formulario",
    components: {
        Slider,
        Sidebar,
    }
})
</script>