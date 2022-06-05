<template>
  <div>
        <h2>Exercício: Converter para segundos</h2>

        <p>Escreva um programa que leia a quantidade de dias, horas,
minutos e segundos do usuário. Calcule o total em segundos.</p>

        <Form>
            <Container>
                <div class="content">
                    <Label for="days">Dias</Label>
                    <Input type="number" id="days" v-model="days" />
                </div>

                <div class="content">
                    <Label for="hours">Horas</Label>
                    <Input type="number" id="hours" v-model="hours" />
                </div>

                <div class="content">
                    <Label for="minutes">Minutos</Label>
                    <Input type="number" id="minutes" v-model="minutes" />
                </div>

                <div class="content">
                    <Label for="seconds">Segundos</Label>
                    <Input type="number" id="seconds" v-model="seconds" />
                </div>

                <Button>Descubra</Button>

                <span v-if="result">{{ result }}</span>
            </Container>
        </Form>

        <Button link="/" :outline="true">Voltar</Button>
  </div>
</template>

<script>
import Form from '../components/Form.vue'
import Container from '../components/Container.vue'
import Label from '../components/Label.vue'
import Input from '../components/Input.vue'
import Button from '../components/Button.vue'

export default {
    components: {
        Form,
        Container,
        Label,
        Input,
        Button
    }
}
</script>

<style lang="scss">
.content {
    margin: 20px 0;
}
</style>