<template>
  <div>
    <router-view />  
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
    
  }
}
</script>

<style>
:root {
  --primary-color: #E14E54;
  --second-color: #e7e7e7;
  --blue: #0083FF;
  --white: #fff;
  --black: #000;

  --family-primary: 'Exo', sans-serif;
}

body {
  background-image: linear-gradient(to bottom right, var(--primary-color), var(--second-color));
  background-repeat: no-repeat;
  overflow: hidden;
  margin: 0;
  min-height: 100vh;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
