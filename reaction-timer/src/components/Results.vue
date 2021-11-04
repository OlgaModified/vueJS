<template>
  <div class="block">
   Reaction time: {{ score }} ms

   <p class="rank">{{ rank }}</p>
  </div>
</template>

<script>
export default {
    props: ['score'],
    data () {
        return {
            rank: null
        }
    },
    mounted(){
        if(this.score < 250) {
            this.rank = 'Ninja Fingers'
        } 
        else if (this.score < 400) {
            this.rank = 'Rapid Reflexes'
        }
        else {
            this.rank = 'Turbo snail'
        }
    }
}
</script>

<style>
    .block {
        width: 200px;
        border-radius: 20px;
        border:  2px solid #ee0b0b;
        background:  rgb(240, 212, 203);
        color: #000;
        text-align: center;
        padding: 50px;
        margin: 40px auto;
        font-size: 24px;
        font-weight: 800;
    }
    .rank {
        font-size: 1.4em;
        color: blue;
        font-weight: 800;
    }
</style>