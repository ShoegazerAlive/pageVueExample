<template>
    <header id="header">
            <div class="center">
                <!-- LOGO -->
                <div id="logo">
                    <img src="https://vuejs.org/images/logo.png" class="app-logo" alt="Logotipo" />
                    <span id="brand">
                        <strong>Proyecto</strong>Vue
                    </span>
                </div>
                
                <!-- MENU -->
                <nav id="menu">
                    <ul>
                        <li>
                            <router-link to="/" active-class="active">Inicio</router-link>
                        </li>
                        <li>
                            <router-link to="/blog" active-class="active">Blog</router-link>
                        </li>
                        <li>
                            <router-link to="/formulario" active-class="active">Formulario</router-link>
                        </li>
                        <li>
                            <router-link to="/pagina" active-class="active">Página 1</router-link>
                        </li>
                        <!-- <li>
                            <router-link to="/pagina2" active-class="active">Página 2</router-link>
                        </li>    -->
                        <li>
                            <router-link to="/movies" active-class="active">Películas</router-link>
                        </li>                           
                    </ul>
                </nav>

                <!--LIMPIAR FLOTADOS-->
                <div class="clearfix"></div>
            </div>
        </header>
</template>

<script>

export default {
    name:'Header',
    
}
</script>
