<template>
  <div class="principal">
    <div style="display: flex; width:100vw; justify-content: space-around;">
      <vs-button flat @click="inicio" :active="$store.state.activeMenu == 0">
        Inicio
      </vs-button>
      <div style="display: flex;">

        <vs-button @click="inicioSesion" flat square :active="$store.state.activeMenu == 1">
          Iniciar Sesión
        </vs-button>
        <vs-button flat @click="Registrarse" square :active="$store.state.activeMenu == 2">
          Registrarse
        </vs-button>
      </div>
    </div>

    <h1>Bienvenidos al nuestro sistema de votaciones</h1>
    <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam voluptate ullam id illum sunt mollitia, aspernatur
      maxime voluptatum. Commodi, consectetur voluptatem est iusto voluptate maxime necessitatibus neque sed saepe ad?
    </h2>

  </div>
</template>
<script>
export default {
  data() {
    return {

    }
  },
  methods: {
    inicio() {
      this.$store.state.activeMenu = 0
      this.$router.push('/').catch(err => {
        if (err.name !== 'NavigationDuplicated') throw err;
      });
    },
    inicioSesion() {

      this.$store.state.activeMenu = 1
      this.$router.push('/login').catch(err => {
        if (err.name !== 'NavigationDuplicated') throw err;
      });


    },
    Registrarse() {
      this.$store.state.activeMenu = 2
      this.$router.push('/register').catch(err => {
        if (err.name !== 'NavigationDuplicated') throw err;
      });
    }
  }


}

</script>

<style scoped></style>
