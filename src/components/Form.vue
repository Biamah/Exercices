<template>
  <form @submit="handleSubmit">
      <slot /> 
  </form>
</template>

<script>
export default {
    methods: {
        handleSubmit(e) {
            this.$emit('submit', e)
        }
    }
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