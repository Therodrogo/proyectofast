<template>
    <div>
        <div style="text-align: left;">
            <vs-button @click="volver">Volver</vs-button>
        </div>

        <div class="caja">
            <h3 style="margin-bottom: 0; color:#070609;">Presidencia del centro de alumnos de Icc
            </h3>
            <div style="display: flex; justify-content: center;">
                <div style="list">
                    <h4>Hombres</h4>
                    <div v-for="(item, index) in 5" :key="index">
                        <vs-button flat :active="active1 == index" @click="votoHombre(index)">Nombre del participante plis
                            {{
                                item }}</vs-button>
                    </div>
                </div>

                <div style="list">
                    <h4>Mujeres</h4>
                    <div v-for="(item, index) in 5" :key="index">
                        <vs-button flat :active="active2 == index" @click="votoMujer(index)">Nombre del participante plis {{
                            item }}</vs-button>
                    </div>
                </div>

            </div>
            <div style="display:flex; width:100%; justify-content:center;">
                <vs-button @click="confirmarVoto">Votar</vs-button>
            </div>
        </div>

    </div>
</template>


<script>
import Swal from 'sweetalert2'
export default {
    data() {
        return {
            active1: -1,
            active2: -2
        }
    },
    methods: {
        votoHombre(index) {
            this.active1 = index

        },
        votoMujer(index) {
            this.active2 = index

        },
        volver() {
            this.$store.state.item = false
        },
        confirmarVoto() {

            Swal.fire({
                title: 'Estas seguro que deseas votar por:',
                text: 'Persona 1   -   Persona 2',
                showDenyButton: true,
                confirmButtonText: 'Si',
                denyButtonText: `No`,
            }).then((result) => {
                
                if (result.isConfirmed) {
                    Swal.fire({title:'Se ha eviado su elección', icon:'success',toast:true,position:"top"})
                    this.$store.state.item = false
                }
            })
        }
    }

}
</script>



<style scoped>
.caja {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 5%;
    background-color: #ebe0e9;
    color: #041901;
    border-radius: 12px;


}

.list {
    display: flex;
    flex-direction: column;
}
</style>