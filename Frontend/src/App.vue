<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #041901;
  background: #d4fdce;
  height: 100vh;
  
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;

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
