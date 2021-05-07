<template>
  <div id="app">
      <Header/>
      <router-view/>
      <Footer/>
  </div>
</template>

<script>
import Header from "./components/Header";

import LastArticles from "./components/LastArticles";
import Footer from './components/Footer';


export default {
  name: "app",
  components: {
    Header,
    LastArticles,
    Footer,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

@import './assets/css/styles.css';
</style>
