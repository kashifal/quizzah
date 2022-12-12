<template>
    <div>
<li @click="tab(id)"  :class="currentTab === id ? 'bg-custom-primary text-white' : 'bg-gray-100'"  class="text-sm text-custom-text px-2 py-3 text-center hover:bg-custom-primary hover:text-white rounded-full  cursor-pointer">
     {{title}}
     </li>

     <p>{{paragraph}}</p>
    </div>
</template>

<script setup>
import { defineProps } from "vue";
let currentTab = $ref(1);


const props = defineProps({
    id:Number,
    title:String,
    paragraph:String,
    data:Object
});



function tab(id){
   currentTab = id;
    console.log(currentTab, id);
}

</script>

<style scoped>

</style>