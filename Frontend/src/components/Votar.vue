<template>
    <div>
        <div style="text-align: left;">
            <button>volver</button>
        </div>

        <div class="caja">
            <button>Iniciar votacion</button>
            <h3 style="margin-bottom: 0; border:2px solid #d4fdce;padding:10px">Presidencia del centro de alumnos de Icc
            </h3>
            <div style="display: flex; justify-content: center;">
                <div style="list">
                    <h4>Hombres</h4>
                    <div v-for="(item, index) in 5" :key="index">
                        <button>Nombre del participante plis {{ item }}</button>
                    </div>
                </div>

                <div style="list">
                    <h4>Mujeres</h4>
                    <div v-for="(item, index) in 5" :key="index">
                        <button>Nombre del participante plis {{ item }}</button>
                    </div>
                </div>

            </div>
            <div>
                <button style="background-color: #041901; color:white; font-size:1em;">Votar</button>
            </div>
        </div>

    </div>
</template>


<script>
export default {

}
</script>



<style scoped>
.caja {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 5%;
    background-color: #53f939;
    color: #041901;
    border-radius: 12px;


}

.list {
    display: flex;
    flex-direction: column;
}

button {
    font-size: 0.8em;
    border: none;
    padding: 10px;
    border-radius: 15px;
    margin: 5px;
    background: #b1fca6;
    color: #041901;
    cursor: pointer;

}
</style>