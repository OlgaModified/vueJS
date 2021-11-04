<template>
  <h1>{{title}}</h1>
 
  <teleport to=".modals" v-if="showModal">
     <Modal theme="sale" @close="toggleModal">
        <template v-slot:links>
            <a href="#" style="color:red">Red pill</a>
            <a href="#" style="color:blue">Blue pill</a>
        </template>

        <h1> {{ modal1.title }} </h1>
        <p> {{ modal1.text }} </p>
     </Modal>
  </teleport>

  <div v-if="showModal2">
     <Modal @close="toggleModal2">
        <template v-slot:links>
            <a href="#" style="color:red" class="btn">Yes</a>
            <a href="#" style="color:yellow" class="btn">Maybe</a>
            <a href="#" style="color:green" class="btn">No</a>
        </template>

        <h1> {{ modal2.title }} </h1>
        <p> {{ modal2.text }} </p>

     </Modal>
  </div>
    <div>
        <button @click ="toggleModal" class="btn">Show Modal </button>
    </div>
    <div>
        <button @click ="toggleModal2" class="btn">Show Modal2 </button>
    </div>
</template>

<script>
import Modal from './components/Modal.vue'

export default {
  name: 'App',
  components: { Modal },
  data(){
    return {
      title: ' Hi NEO!',
      
      showModal: false,
      showModal2: false,

      modal1:{
        title: 'Make your choice',
        text: 'Red pill - enter MATRIX, blue pill - FORGET ALL'
      },
      
      modal2: {
        title: 'Attention!', 
        text:'Do u realy wanna delete this record'
       }
                    
               
    }
  },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal
    },

    toggleModal2() {
      this.showModal2 = !this.showModal2
    }
  }

}
</script>

<style>
  #app, .modals {
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

  .btn {
    background-color: #ffffff; /* Green */
    border: 2px solid #4CAF50;
    border-radius: 12px;
    margin: 5px;
    width: 100px;
    padding: 15px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;

  }
  
</style>
