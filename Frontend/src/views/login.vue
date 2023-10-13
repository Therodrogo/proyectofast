<template>
    <div class="login-container">
        <h1>Login</h1>
        <form @submit.prevent="login" class="login-form">
            <div class="input-group">
                <label for="rut">Rut:</label>
                <input type="text" id="rut" v-model="rut" placeholder="Ingresa tu rut" />
            </div>
            <div class="input-group">
                <label for="contrasena">Contraseña:</label>
                <input type="password" id="contrasena" v-model="contrasena" placeholder="Ingresa tu contraseña" />
            </div>
            <button type="submit" class="login-button">Login</button>
        </form>
    </div>
</template>

<script>
import API from "@/api";

export default {
    data() {
        return {
            rut: "",
            contrasena: ""
        };
    },
    methods: {
        async login() {
            const data = {
                rut: this.rut,
                contrasena: this.contrasena
            };
            const resp = await API.login(data);

            if (resp == null) {
                alert("Error de conexión")
            }
            else if (resp == false) {
                alert("Usuario o contraseña incorrectos")

            } else {
                alert("Bienvenido")
                localStorage.setItem("token", resp.token);
                this.$router.push("/cliente");
            }
        }
    }
};
</script>

<style scoped>
.login-container {
    max-width: 400px;
    margin: 0 auto;
    padding: 50px;
    background-color: #f9f9f9;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    text-align: left;
}

h1 {
    text-align: center;
}

.login-form .input-group {
    margin-bottom: 20px;
}

.login-form .input-group label {
    display: block;
    font-weight: bold;
    margin-bottom: 5px;
}

.login-form .input-group input {
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
}

.login-button {
    width: 100%;
    padding: 10px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
}

.login-button:hover {
    background-color: #45a049;
}
</style>