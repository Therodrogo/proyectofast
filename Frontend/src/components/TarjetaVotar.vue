<template>
    <div class="contenedorTarjeta">
        <h3 style="margin:0;">Presidencia del centro de alumno</h3>
        <button>Entrar</button>
    
    </div>


</template>


<script>

export default {

    data(){


    },
    props:{
        
    }


}
</script>

<style scoped>

.contenedorTarjeta{
    display: flex;
    flex-direction: column;
    width: 200px;
    background-color: #53f939;
    border-radius: 15px;
    color: #041901;
    
    padding: 20px;
    margin: 10px;


}
.contenedorTarjeta button{

    border-radius: 12px;
    border: none;
    margin-top: 10px;
    padding: 5px;
    background-color: #b1fca6;
    color: #041901;
    cursor: pointer;

}

</style>