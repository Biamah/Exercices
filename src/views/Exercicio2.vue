<template>
  <div>
      <h2>Exercício: Metros para milimetros</h2>

      <p>Escreva um programa que leia um valor em metros e o exiba convertido em milímetros</p>

      <Form @submit="calculo">
            <Container>
                <div class="content">
                    <div class="content">
                        <Label for="metros">Digite o valor em metros</Label>

                        <Input type="text" id="metros" />
                    </div>

                    <Button>Descubra</Button>

                    <span class="result">{{ result }}</span>
                </div>
            </Container>
      </Form>

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
    }
}
</script>

<style lang="scss">

.content {
    margin: 20px 0;
}
</style>