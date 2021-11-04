<template>
  <div class="block" 
       v-if="showBlock" 
       @click="stopTimer">
       click me
    </div>
</template>

<script>
export default {
    props: ['delay'],
    data() {
        return {
            showBlock: false,
            timer: null, //stores set of the interval
            reactionTime: 0 //tracking the time it takes the user to click the block
        }
    },
    mounted () {
        //console.log('mount component')
        setTimeout(() => {
            this.showBlock = true
            this.startTimer()       
        }, this.delay)

    },
   methods: {
       //start the timer, tick every 10 ms
       startTimer() {
           this.timer = setInterval(() => {
               this.reactionTime += 10
           }, 10)
       },
       stopTimer() {
           clearInterval(this.timer)
           //console.log(this.reactionTime)
           this.$emit('end', this.reactionTime)
       }
   }

}
</script>

<style>
    .block {
        width: 400px;
        border-radius: 20px;
        background:  #0faf87;;
        color: white;
        text-align: center;
        padding: 100px 0;
        margin: 40px auto;
    }
</style>