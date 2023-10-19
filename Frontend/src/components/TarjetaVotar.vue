<template>
    <div>
        <vs-button shadow :active="1==1" >
            <div class="contenedorTarjeta">

                <h3 style="margin:0;">Presidencia del centro de alumno</h3>
                <vs-button @click="itemSelecionado" >Entrar</vs-button>
            </div>
        </vs-button>
    </div>
</template>


<script>

export default {

    data() {

        return{

        }
    },
    props: {

    },
    methods:{
        itemSelecionado(){
            this.$store.state.item = true
        }
    }


}
</script>

<style scoped>
.contenedorTarjeta {
    display: flex;
    flex-direction: column;
    width: 200px;
    padding: 5px;


}
</style>