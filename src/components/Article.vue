<template>
    <div class="general">
        <Slider texto="Blog" />
        <div class="center">
        <section id="content">
            <article class="article-item article-detail">
            <div class="image-wrap" v-if="article.image">
                <img
                :src="url + 'get-image/' + article.image"
                :alt="article.title"
                />
            </div>

            <h1 class="subheader">{{ article.title }}</h1>
            <span class="date">
                {{ article.date }}
            </span>
            <p>
                {{ article.content }}
            </p>

            <div class="clearfix"></div>

            <router-link :to="'/editar/' + article._id" class="btn btn-warning"
                >Editar</router-link
            >
            <a @click="deleteArticle(article._id)" class="btn btn-danger"
                >Eliminar</a
            >
            </article>
        </section>
        <Sidebar />
        <div class="clearfix"></div>
        </div>
    </div>
</template>

<script>
import Slider from "./Slider";
import Sidebar from "./Sidebar";
import Global from "../Global";
import axios from "axios";
import swal from "sweetalert";

export default {
    name: "Article",
    components: {
        Slider,
        Sidebar,
    },
    data() {
    return {
        url: Global.url,
        article: [],
        };
    },
    mounted() {
        var articleId = this.$route.params.id;
        this.getArticle(articleId);
    },
    methods: {
    getArticle(articleId) {
        axios.get(this.url + "/article/" + articleId).then((res) => {
        if (res.data.status == "success") {
            this.article = res.data.article;
        }
        });
    },
    deleteArticle(articleId) {
    swal({
        title: "¿Estás seguro de querer borrarlo?",
        text:
        "Una vez que se borre el archivo, no se podrá recuperar",
        icon: "warning",
        buttons: true,
        dangerMode: true,
    }).then((willDelete) => {
        if (willDelete) {
            axios.delete(this.url + "article/" + articleId).then((res) => {
            swal("Artículo borrado", "El artículo ha sido borrado", "success");
            this.$router.push("/blog");
            });
            } else {
            swal("¡Casi! no se ha borrado nada");
            }
        });
    },
    },
};
</script>
