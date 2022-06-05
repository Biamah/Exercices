<template>
  <div>
        <h2>Exercício: Soma dos números</h2>

        <p>Faça um programa que peça dois números inteiros e imprima a soma desses dois números.</p>

        <Form @submit.prevent="calculo">
            <Container>
                <div class="content">
                    <Label for="number1">Primeiro número: </Label>
                    <Input type="text" id="number1" v-model="number1" pattern="[\d+]" @keypress="setNumberMask" />
                </div>

                <div class="content">
                    <Label for="number2">Segundo número: </Label>
                    <Input type="text" id="number2" v-model="number2" pattern="[\d+]" @keypress="setNumberMask" /> 
                </div>

                <Button>Descubra</Button>

                <span class="result">{{ result }}</span>
            </Container>
        </form>

        <Button link="/" :outline="true">Voltar</Button>
 </div>
</template>

<script>
import Container from '../components/Container'
import Form from '../components/Form'
import Label from '../components/Label'
import Input from '../components/Input'
import Button from '../components/Button'

export default {
    components: {
        Container,
        Form,
        Label,
        Input,
        Button
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
.content {
    margin: 20px 0;
}
</style>