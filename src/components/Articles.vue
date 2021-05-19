<template>
<section id="articles-component">
    <div v-if="!articles">Cargando...</div>

    <div id="articles-list" v-if="articles && articles.length >= 1">
    <article class="article-item" v-for="article in articles" :key="article._id">
                        <div class="image-wrap">
                            <img :src="url+'/get-image/'+ article.image" alt="article.title" v-if="article.image" />
                            <img src="../assets/images/default.svg" alt="article.title" v-if="!article.image" />
                        </div>
                        <h2>
                        <router-link :to="{name: 'Article', params:{id: article._id}}">
                            {{article.title}}
                        </router-link>
                        </h2>
                        <span class="date">
                            {{article.date}}
                        </span>
                        <router-link :to="{name: 'Article', params:{id: article._id}}">Leer más</router-link>

                        <div class="clearfix"></div>
    </article>
    </div>
    <div v-else>Cargando...</div>

</section>
</template>

<script>
import Global from '../Global';
export default{
    name: 'Articles',
    props:['articles'],
    data(){
        return {
            url: Global.url,
        }
    },
}
</script>