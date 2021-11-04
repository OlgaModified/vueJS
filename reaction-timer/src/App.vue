<template>
  <h1>Reaction Timer</h1>
  <button class="btn" @click="start" :disabled="isPlaying">Play</button>
  <Block v-if="isPlaying" :delay="delay"/>
</template>

<script>
import Block from './components/Block.vue'

export default {
  name: 'App',
  components: {  
    Block
  },
  data(){
    return {
      isPlaying: false,
      delay: null
    }
  },
  methods: {
    start() {
      this.delay = 2000 + Math.random() * 5000
      this.isPlaying = true
      //console.log(this.delay)
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  padding: 60px 0;
  background-color: #c4e9c5;
}

.btn {
  background-color: white;
  color: black;
  font-weight: 800;
  border: 2px solid #4CAF50; /* Green */
  border-radius: 12px;
  width: 100px;
  padding: 15px;
}

button:disabled,
button[disabled]{
  border: 1px solid #999999;
  background-color: #cccccc;
  color: #666666;
}

</style>
