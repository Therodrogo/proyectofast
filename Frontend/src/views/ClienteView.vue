<template>
    <div class="contenedor">
        <div style="display: flex; justify-content: space-between; width:100%">
            <p>{{ nombre }}</p>
            <vs-button color="#000" to="/login">Cerrar Sesion</vs-button>
        </div>

        <div class="contenido">
            <div v-if="$store.state.item == false && votacion != null">
                <div v-for="(item, index) in arrayVotaciones" :key="index">
                    <TarjetaVotar :votacion="item" />
                </div>

            </div>
            <div v-if="$store.state.item == true">
                <Votar />
            </div>
        </div>

    </div>
</template>


<script>
import API from "@/api"
import TarjetaVotar from "../components/TarjetaVotar.vue"
import Votar from "../components/Votar.vue"
export default {

    data() {
        return {
            items: [],
            votacion: null,
            nombre: null,
            votacionNombre: "",
            arrayVotaciones: []
        };
    },
    async mounted() {
        const votaciones = await API.getVotaciones();
        // Obtenemos tipo de usuario con el localStorage
        const token = localStorage.getItem('token');

        try {
            const user_token = JSON.parse(token);
            this.nombre = user_token.nombre

            votaciones.forEach(votacion => {
                console.log(votacion.tipo, user_token.tipo)
                if (votacion.tipo == user_token.tipo && votacion.estado == true) {
                    this.votacion = votacion

                    this.votacionNombre = votacion.tipo
                    this.arrayVotaciones.push(votacion)

                }
            });
        } catch (error) {
            console.error('JSON parsing error:', error);
        }
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