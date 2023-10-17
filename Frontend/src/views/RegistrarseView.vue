<template>
    <div>

        <div style="display: flex; width:100vw; justify-content: space-around;">
            <router-link to="/" class="boton">
                Inicio
            </router-link>
            <router-link to="/login" class="boton">
                Iniciar Sesión
            </router-link>
            <router-link to="/register" class="boton">
                Registrarse
            </router-link>
        </div>

        <div class="contenedor">
            <h1>Registro</h1>
        </div>
    </div>
</template>


<style scoped>
.contenedor {

    display: flex;
    justify-self: center;
    text-align: center;
    background-color: rgba(183, 183, 183, 0.144);
    width: 100vw;
    height: 100vh;
    padding: 10%;

}
</style>