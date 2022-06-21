<template>
  <div>
    <h2>Exercício: Lista de filmes</h2>

    <p>Crie um formulário de cadastro de filmes.</p>

    <Form @submit="addMovie">
      <Container>
        <div class="content">
          <Label for="title">Informe o titulo do filme</Label>
          <Input type="text" id="title" v-model="name"/>
        </div>

        <Button>Enviar</Button>
      </Container>
    </Form>

    <Container>
      <table>
        <tr>
          <th></th>
          <th>Nome do Filme</th>
          <th></th>
        </tr>
        <tr v-for="(movie, index) in movies" :key="index">
          <td>{{ index + 1 }}</td>
          <td>{{ movie }}</td>
          <td><Button @click="deleteMovie(index)">Delete</Button></td>
        </tr>
      </table>
    </Container>

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
      movies: [],
      name: ''
    }
  },
  created(){
    this.loadMovies();
  },
  methods: {
    addMovie(e){
      e.preventDefault();
      this.movies.push(this.name);
      this.saveMovies();
    },
    saveMovies(){
      window.localStorage.setItem('movies', JSON.stringify(this.movies));
    },
    loadMovies(){
      const movies = window.localStorage.getItem('movies');
      this.movies = JSON.parse(movies);
    },
    deleteMovie(index){
      this.movies = this.movies.filter((item, i) => i !== index);
      this.saveMovies();
    }
  }
}
</script>

<style lang="scss">
.content {
    margin: 20px 0;
}
</style>