<template>
    <div class="general">
        <Slider home="true" texto="Bienvenido, da clic en lo que te interese"/>
        <div class="center">
            <section id="content">
                        <h2 class="subheader">Últimos artículos</h2>

                    <!--Listado articulos-->
                    <div id="articles">

                        <!--AÑADIR ARTICULOS VIA JS-->

                        <Articles v-bind:articles="articles"/>

                    </div>
                    
                </section>
                    <Sidebar/>
                <div class="clearfix"></div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import Slider from './Slider';
import Sidebar from './Sidebar';
import Articles from './Articles';
import Global from '../Global';

export default {
    name: "LastArticles",
    components: {
        Slider,
        Sidebar,
        Articles
    },
    mounted(){
        this.getArticles();
    },
    data(){
        return{
            url: Global.url,
            articles: []
        }
    },
    methods:{
        getArticles(){
            axios.get(this.url+'/articles/true')
            .then(res => {
                if(res.data.status === 'success'){
                    this.articles = res.data.articles;

                    console.log(this.articles);
                }
            })
        }
    }
}
</script>