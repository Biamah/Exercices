<template>
  <div>
        <h2>Exercício: Converter para segundos</h2>

        <p>Escreva um programa que leia a quantidade de dias, horas,
minutos e segundos do usuário. Calcule o total em segundos.</p>

        <Form @submit.prevent="calc">
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
    },
    data: function(){
        return {
            days: '',
            hours: '',
            minutes: '',
            seconds: '',
            result: '',
            timeMinutes: 60,
            timeSeconds: 60
        }
    },
    methods: {
        dayToSeconds(){
            const toHour = Number(this.days) * 24;
            let calcDay = toHour * this.timeMinutes * this.timeSeconds;

            return calcDay;
        },
        hourToSeconds(){
            let calcHour = Number(this.hours) * this.timeMinutes * this.timeSeconds;

            return calcHour;
        },
        minuteToSeconds(){
            let calcMinute = Number(this.minutes) * this.timeSeconds;

            return calcMinute;
        },
        calc(){
            const calcDays = this.dayToSeconds();
            const calcHours = this.hourToSeconds();
            const calcMinutes = this.minuteToSeconds();

            this.result = calcDays + calcHours + calcMinutes + Number(this.seconds);
        }
    }
}
</script>

<style lang="scss">
.content {
    margin: 20px 0;
}
</style>