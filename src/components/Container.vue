<template>
  <div class="container">
      <slot />
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: max-content;
    flex-direction: column;
    background-color: var(--second-color);
    margin: 0 auto;
    padding: 60px 120px;
    opacity: 0.7;
    border-radius: 15px;
    box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.47);
}
</style>