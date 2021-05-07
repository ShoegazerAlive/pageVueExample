<template>
            <div id="slider" :class="{
                'slider-big':home,
                'slider-small':!home,
            }">
            <h1>{{texto}}</h1>
            <a href="#" @click="redirigirBlog" class="btn-white" v-if="home">Ir al blog</a>
        </div>
</template>

<script>
export default {
    name: "Slider",
    props:["texto", "home"],

    methods: {
        redirigirBlog(){
            this.$router.push('/blog')
        }
    }
}
</script>
