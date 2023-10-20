<template>
    <div>
        <h1>Vista Admin - Crear votacion</h1>

        <!-- Boton para abrir el modal -->
        <button @click="showModal = true" class="open-modal-btn" :disabled="voteInProgress" v-if="votes.length == 0">Crear
            votacion</button>

        <!-- Modal -->
        <div v-if="showModal" class="modal">
            <div class="modal-content">
                <span @click="showModal = false" class="close">&times;</span>
                <h2>Crear votacion</h2>
                <form @submit.prevent="handleSubmit" class="admin-form">
                    <div>
                        <label for="name">Nombre:</label>
                        <input type="text" id="name" v-model="formData.name" required class="input-field">
                    </div>
                    <button type="submit" class="submit-btn">Crear</button>
                </form>
            </div>
        </div>

        <!-- Lista de votaciones -->
        <table class="votes-table">
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="vote in votes" :key="vote.id">
                    <td>{{ vote.name }}</td>
                    <td>
                        <button @click="startVote(vote)" :disabled="vote.started || vote.ended"
                            class="action-btn start-btn">Inicio</button>
                        <button @click="endVote(vote)" :disabled="!vote.started || vote.ended"
                            class="action-btn end-btn">Termino</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>

import API from '@/api';
export default {
    data() {
        return {
            showModal: false,
            voteInProgress: false,
            formData: {
                name: ''
            },
            votes: []
        };
    },
    async mounted() {
      var votaciones = await API.getVotaciones();
      if(votaciones.length != 0){
        if(votaciones[0].estado==true){
            var isStarted = true;
            var isEnded = false;
        }else if(votaciones[0].estado==false){
            var isStarted = false;
            var isEnded = true;
        }else{
            var isStarted = false;
            var isEnded = false;
        }
        var isStarted = votaciones[0].estado;
        this.votes.push({
                id: this.votes.length + 1,
                name: votaciones[0].nombre,
                started: isStarted,
                ended: isEnded,
            });

            this.formData.name = '';
            this.showModal = false; 
      }
    },
    methods: {
        async handleSubmit() {
            // Agregar la votacion a la lista
            var votacionEstudiantes = {
                nombre: this.formData.name,
                tipo: "Estudiante",
                votosM: [],
                votosH: [],
                estado: null,
            };

            var votacionProfesores = {
                nombre: this.formData.name,
                tipo: "Profesor",
                votosM: [],
                votosH: [],
                estado: null,
            };

            const resp1 = await API.agregarVotacion(votacionEstudiantes)
            const resp2 = await API.agregarVotacion(votacionProfesores)

            this.votes.push({
                id: this.votes.length + 1,
                name: this.formData.name,
                started: false,
                ended: false,
            });

            this.formData.name = '';
            this.showModal = false; // cerrar el modal
        },
        async startVote(vote) {
            var votaciones = await API.getVotaciones();
            console.log(votaciones);
            votaciones.forEach(async votacion => {
                votacion.estado = true; // cambiar el estado de todas las votaciones
                await API.cambiarEstadoVotacion(votacion);
            });
            vote.started = true;
        },
        async endVote(vote) {
            var votaciones = await API.getVotaciones();
            votaciones.forEach(async votacion => {
                votacion.estado = false; // cambiar el estado de todas las votaciones
                await API.cambiarEstadoVotacion(votacion);
            });
            vote.started = false;
            vote.ended = true;
        },
    }
};
</script>
<style>
.modal {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.4);
}

.modal-content {
    background-color: #fefefe;
    margin: 15% auto;
    padding: 40px;
    border: 1px solid #888;
    border-radius: 10px;
    width: 50%;
}

.close {
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
}

.close:hover,
.close:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
}

.admin-form .input-field {
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-sizing: border-box;
}

.open-modal-btn {
    padding: 10px 20px;
    border: none;
    background-color: #4CAF50;
    color: white;
    cursor: pointer;
    border-radius: 5px;
}

.open-modal-btn:hover {
    background-color: #45a049;
}

.submit-btn {
    padding: 10px 20px;
    margin-top: 20px;
    background-color: #4CAF50;
    color: white;
    border: none;
    cursor: pointer;
    border-radius: 5px;
    width: 100%;
}

.submit-btn:hover {
    background-color: #45a049;
}

.votes-table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
}

.votes-table thead {
    background-color: #f2f2f2;
}

.votes-table th,
.votes-table td {
    padding: 10px;
    text-align: left;
    border-bottom: 1px solid #ddd;
}

/* Estilos para los botones de acción */
.action-btn {
    padding: 5px 10px;
    margin-right: 5px;
    border: none;
    cursor: pointer;
    border-radius: 5px;
}

.start-btn {
    background-color: #4CAF50;
    color: white;
}

.start-btn:disabled {
    background-color: #ddd;
    cursor: not-allowed;
}

.end-btn {
    background-color: #f44336;
    color: white;
}

.end-btn:disabled {
    background-color: #ddd;
    cursor: not-allowed;
}
</style>
