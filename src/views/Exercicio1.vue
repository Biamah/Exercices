<template>
  <div class="page">
        <h2>Exercício: Soma dos números</h2>

        <p>Faça um programa que peça dois números inteiros e imprima a soma desses dois números.</p>

        <form class="form" @submit="calculo">
            <Container>
                <div class="content">
                    <label for="number1" class="label">Primeiro número: </label>
                    <input type="text" class="inputs" id="number1" v-model="number1" pattern="[\d+]" @keypress="setNumberMask">
                </div>

                <div class="content">
                    <label for="number2" class="label">Segundo número: </label>
                    <input type="text" class="inputs" id="number2" v-model="number2" pattern="[\d+]" @keypress="setNumberMask"> 
                </div>

                <button class="button">Descubra</button>

                <span class="result">{{ result }}</span>
            </Container>
        </form>

        <button class="button__outline"><router-link to="/">Voltar</router-link></button>
  </div>
</template>

<script>
import Container from '../components/Container'

export default {
    components: {
        Container
    },
    data: function(){
        return {
            number1: '',
            number2: '',
            result: ''
        }
    },
    methods: {
        setNumberMask(e){
            const charCode = e.which ? e.which : e.keyCode;
            const charStr = String.fromCharCode(charCode);
            const isValidChar = /[\d+]/.test(charStr);

            if(isValidChar === false) {
                e.preventDefault();
            }
        },
        calculo(){
            this.result = Number(this.number1) + Number(this.number2);
        }
    }
}
</script>

<style lang="scss">
.page {
    height: 100vh;
}

.form {
    height: 50vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.label {
    font-size: 20px;
    color: #000;
    margin-right: 10px;
}

.content {
    margin: 20px 0;
}

.inputs {
    border: none;
    background-color: initial;
    border-bottom: 1px solid darkgray;
}

.button {
  background-color: #0083FF;
  border: none;
  border-radius: 5px;
  padding: 10px;
  color: #fff;
  font-family: 'Exo', sans-serif;
  width: 30%;
  align-self: center;
  margin: 40px auto;

  &__outline {
      border: none;
      background-color: initial;
      font-size: 16px;
      > a {
        color: #000;
        text-decoration: none;
      }
  }
}
</style>