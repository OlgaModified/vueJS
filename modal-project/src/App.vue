<template>
  <h1>{{title}}</h1>
  <div v-if="showModal">
     <Modal theme="sale" @close="toggleModal">
        <template v-slot:links>
            <a href="#" style="color:red">Red pill</a>
            <a href="#" style="color:blue">Blue pill</a>
        </template>

        <h1> {{ header }} </h1>
        <p> {{text}} </p>
     </Modal>
  </div>
 
   <button @click ="toggleModal">Show Modal </button>
</template>

<script>
import Modal from './components/Modal.vue'

export default {
  name: 'App',
  components: { Modal },
  data(){
    return {
      title: ' Hi NEO!',
      header: 'Make your choice',
      text: 'Red pill - enter MATRIX, blue pill - FORGET ALL',
      showModal: false
    }
  },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal
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
    color: #28dd10;
    margin-top: 60px;
  }
  p {
    color: black;
    font-weight: 800;
  }
  
</style>
