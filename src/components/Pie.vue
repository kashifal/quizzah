<template>
  <div class="bg-white shadow-lg rounded-none ">
    <div class=" border-b-2 px-2 py-4">
  <h1 class="text-sm font-normal text-gray-600 ">Your Monthly Progress {{props.gotted}}/{{props.total}}</h1>
  </div> 
<canvas id="myChart"></canvas>
  </div>
</template>

<script setup>

import {onMounted, watch, defineProps} from 'vue';
import Chart from 'chart.js/auto'


const props = defineProps({
  total:Number,
  gotted: Number
})

onMounted(() => {
  const ctx = document.getElementById('myChart');

  new Chart(ctx, {
    type: 'pie',  
    data: {
      labels: ['Total Questions', 'Total Answers'],
      datasets: [{
        label: props.Number, 
        data: [props.total, props.gotted],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
})
</script>

<style lang="scss" scoped>

</style>