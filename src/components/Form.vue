<template>
  <form>
      <slot /> 
  </form>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
form {
    height: 70vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
</style>