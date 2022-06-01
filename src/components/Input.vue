<template>
  <input :value="modelValue" @input="handleInput" />
</template>

<script>
export default {
    emits: [
        'update:modelValue'
    ],
    props: {
        modelValue: String
    },

    methods: {
        handleInput(e) {
            this.$emit('update:modelValue', e.target.value)
        }
    }
}
</script>

<style lang="scss" scoped>
input {
    border: none;
    background-color: initial;
    border-bottom: 1px solid darkgray;
}
</style>