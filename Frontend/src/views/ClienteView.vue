<template>
    <div class="contenedor">
        <div style="display: flex; justify-content: space-between; width:100%">
            <p>Pablo Gonzalez Jara</p>
            <vs-button color="#000">Cerrar Sesion</vs-button>
        </div>

        <div class="contenido">
            <div v-if="$store.state.item==false" v-for="(item, index) in 10" :key="index">

                <TarjetaVotar />

            </div>
            <div v-if="$store.state.item==true" >
                <Votar/>
            </div>

            
        </div>

    </div>
</template>


<script>

import TarjetaVotar from "../components/TarjetaVotar.vue"
import Votar from "../components/Votar.vue"
export default {

    data() {
        items: []
    },
    components: {
        TarjetaVotar,
        Votar
    }

}

</script>

<style scoped>
.contenedor {

    display: flex;
    flex-direction: column;
    justify-self: center;
    text-align: center;
    padding-left: 5%;
    padding-right: 5%;

}

.contenido {
    display: flex;
    justify-content: center;
    flex-direction: row;
    height: 100%;
    width: 100%;
    flex-wrap: wrap;

}
</style>