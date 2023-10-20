<template>
    <div>
        <div style="text-align: left;">
            <vs-button @click="volver">Volver</vs-button>
        </div>

        <div class="caja">
            <h3 style="margin-bottom: 0; color:#070609;">{{ votacion.nombre }}</h3>
            <div style="display: flex; justify-content: center;">
                <div style="list">
                    <h4>Hombres</h4>
                    <div v-for="(item, index) in hombres" :key="index">
                        <vs-button flat :active="active1 == index" @click="votoHombre(index)">
                            {{ item.nombre }}
                        </vs-button>
                    </div>
                </div>

                <div style="list">
                    <h4>Mujeres</h4>
                    <div v-for="(item, index) in mujeres" :key="index">
                        <vs-button flat :active="active2 == index" @click="votoMujer(index)">{{
                            item.nombre }}</vs-button>
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
import API from "@/api"
import Swal from "sweetalert2"
export default {
    data() {
        return {
            active1: -1,
            active2: -2,
            hombres: [],
            mujeres: [],
            tipo: null,
            votacion:  this.$store.state.votacion
        }
    },
    async mounted() {

        const personas = await API.getUsuarios()

        personas.forEach(e => {

            if (e.tipo === this.votacion.tipo) {
                if (e.sexo) {
                    this.hombres.push(e)
                }
                else {
                    this.mujeres.push(e)
                }
            }

        });
    

    },

    methods: {
        iniciarNombres() {

        },
        votoHombre(index) {
            this.active1 = index

        },
        votoMujer(index) {
            this.active2 = index

        },
        volver() {
            this.$store.state.item = false
        },
        async confirmarVoto() {
            const persona1 = this.hombres[this.active1]
            const persona2 = this.mujeres[this.active2]
            
            if (persona1 != undefined && persona2 != undefined) {


                Swal.fire({
                    title: '¿Estás seguro que deseas votar por:',
                    text: persona1.nombre + " y " + persona2.nombre + "?",
                    showDenyButton: true,
                    confirmButtonText: 'Si',
                    denyButtonText: `No`,
                }).then(async (result) => {

                    if (result.isConfirmed) {
                        Swal.fire({ title: 'Se ha enviado su elección', icon: 'success', toast: true, position: "top" })
                        this.$store.state.item = false
                        const token = localStorage.getItem('token');
                        const user =  JSON.parse(token)

                        try {
                            await API.enviarVotoM(this.votacion._id, user._id,persona2._id )
                            await API.enviarVotoH(this.votacion._id, user._id,persona1._id )

                            this.$router.push("/login")
                        } catch (error) {
                            
                        }




                    }
                })
            }
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