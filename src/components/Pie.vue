<template>
 <div class="bg-white p-6 rounded">
  <h2>Most Quiz's</h2>
  <div style="" class="mt-12 ">
    <vue3-chart-js v-bind="{ ...pieChart }" />
  </div>
 </div>
</template>

<script>
import Vue3ChartJs from "@j-t-mcc/vue3-chartjs";

export default {
  name: "App",
  components: {
    Vue3ChartJs,
  },
  setup() {
    const pieChart = {
      type: "pie",
      options: {
        min: 0,
        max: 100,
        responsive: true,
        plugins: {
          legend: {
            position: "bottom",
          },
        },
        
      },
      data: {
        labels: ["VueJs", "EmberJs", "ReactJs", "AngularJs"],
        datasets: [
          {
            backgroundColor: ["#10b981", "#3b82f6", "#6366f1", "#f43f5e"],
            data: [40, 20, 80, 10],
          },
        ],
      },
    };

    return {
      pieChart,
    };
  },
};
</script>
