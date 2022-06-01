<template>
  <component :is="componentTag" :to="link" class="button" :class="{'outline': outline}">
      <slot />
  </component>
</template>

<script>
export default {
    props: {
        outline: Boolean,
        link: String
    },
    data() {
        return {componentTag: 'button'}
    },
    created() {
        if(this.link) {
            this.componentTag = 'router-link'
        }
    }
}
</script>

<style lang="scss">
.button {
  background-color: var(--blue);
  border: none;
  border-radius: 5px;
  padding: 10px;
  color: var(--white);
  font-family: var(--family-primary);
  width: 30%;
  align-self: center;
  margin: 40px auto;

  &.outline {
      border: none;
      background-color: initial;
      font-size: 16px;
      color: var(--black);
      text-decoration: none;
  }
}
</style>