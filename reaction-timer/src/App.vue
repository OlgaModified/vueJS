<template>
  <h1>Reaction Timer</h1>
  <button class="btn" 
          @click="start" 
          :disabled="isPlaying"
          >Play</button>

  <Block v-if="isPlaying" :delay="delay" @end="endGame"/>
  <Results v-if="showResults" :score='score'/>
</template>

<script>
import Block from './components/Block.vue'
import Results from './components/Results.vue'

export default {
  name: 'App',
  components: {  
    Block, Results
  },
  data(){
    return {
      isPlaying: false,
      delay: null,
      score: null,
      showResults: false
    }
  },
  methods: {
    start() {
      //set the time amount ms
      this.delay = 2000 + Math.random() * 5000
      this.isPlaying = true
      this.showResults = false
      //console.log(this.delay)
    },
    endGame(reactionTime) {

      console.log('end of the game')
      this.score = reactionTime
      this.isPlaying = false
      this.showResults = true
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
