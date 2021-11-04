<template>
  <div class="block">
   Reaction time: {{ score }} ms
  </div>
</template>

<script>
export default {
    props: ['score']
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
</style>