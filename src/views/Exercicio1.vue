<template>
  <div>
      <h2>Exercício: Soma dos números</h2>

      <p>Faça um programa que peça dois números inteiros e imprima a soma desses dois números.</p>

      <div class="container">
          <form class="form" @submit="handleSubmit">
              <label for="number1" class="label">Primeiro número: </label>
              <input type="text" class="inputs" id="number1" v-model="number1">

              <label for="number2" class="label">Segundo número: </label>
              <input type="text" class="inputs" id="number2" v-model="number2">

              <button class="button">Descubra</button>

              <span class="result">{{ result }}</span>
          </form>
      </div>
  </div>
</template>

<script>
export default {
    data: function(){
        return {
            number1: '',
            number2: '',
            result: ''
        }
    },
    methods: {
        handleSubmit(e){
            e.preventDefault();
            this.result = Number(this.number1) + Number(this.number2);
        }
    }
}
</script>

<style>

</style>