<template>
<div class="general">
        <Slider texto="Formulario"/>
    <div class="center">
    <section id="content">
        <h2 class="subheader">Formulario</h2>

        <form class="mid-form" @submit.prevent="submitForm">
                        <div class="form-group">
                            <label for="nombre">Nombre</label>
                            <input type="text" name="nombre" v-model="state.nombre" />
                            <div v-if="v$.nombre.$error">El nombre debe tener 2 o más carácteres</div>
                        </div>

                        <div class="form-group">
                            <label for="apellidos">Apellidos</label>
                            <input type="text" name="apellidos" v-model="state.apellidos" />
                            <div v-if="v$.apellidos.$error">El apellido debe tener 2 o más caractéres</div>
                        </div>

                        <div class="form-group">
                            <label for="bio">Biografia</label>
                            <textarea name="bio" v-model="state.bio"></textarea>
                            <div v-if="v$.bio.$error">La Biografía debe tener 10 o más caractéres</div>
                        </div>

                        <div class="form-group radibuttons">
                            <input type="radio" name="genero" value="hombre" v-model="state.genero" /> Hombre 
                            <input type="radio" name="genero" value="mujer" v-model="state.genero" /> Mujer 
                            <input type="radio" name="genero" value="otro" v-model="state.genero" /> Otro
                        </div>

                        <div class="clearfix"></div>

                        <input type="submit" value="Enviar" class="btn btn-success" />

                </form>
    </section>
        <Sidebar/>
            <div class="clearfix"></div>
            </div>
        </div>
</template>

<script>
import useValidate from '@vuelidate/core';
import { required, minLength } from '@vuelidate/validators';
import Slider from "./Slider";
import Sidebar from "./Sidebar";
import { reactive, computed } from 'vue';

export default {
        name: "Formulario",
        components: {
        Slider,
        Sidebar
    },
    setup() {
    const state = reactive({
            nombre: '',
            apellidos: '',
            bio: '',
            genero: '',
    })
    const rules = computed(() => {
        return{
            nombre: { required, minLength: minLength(2) },
            apellidos: { required, minLength: minLength(2) },
            bio: { required, minLength: minLength(10) },
        }
        })

    const v$ = useValidate(rules, state)

        return {
            state,
            v$
        }

    },
    methods:{
        submitForm(){
            this.v$.$validate()
            if(!this.v$.$error){
                alert('Formulario enviado exitosamente')
            }else {
            }
            
        }
    }
}
</script>

