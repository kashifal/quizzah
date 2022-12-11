<template>
  <div>
    
  </div>
</template>

<script setup>
import {useStore} from 'vuex';


let store = useStore(); 

function generateRandomColor(){ 
      store.commit('randomColorModule/setColor');  
}

 


</script>

<style scoped>

</style>