<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

export default {

  mounted(){
    this.$router.push('/login')
  }

}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  height: 100vh;

}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;

}
.principal{
  
  height: 40px;
}

nav a.router-link-exact-active {
  
}

.boton{

background-color: #53f939;
padding: 10px;
border-radius: 12px;
cursor: pointer;

}
</style>
