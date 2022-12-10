<template>
  <div class="overflow-x-hidden w-full pt-16">
    <div class="max-w-5xl mx-auto w-full h-auto pb-16 grid grid-cols-2"> 
   
      <div class="">
      <h1
        class="text-5xl font-semibold text-left leading-snug text-gray-700 mt-16"
      >
        We make coding
        <span class="text-blue-500 ">interviews Easy </span> <br />
        for you
        <span class="text-sm font-light px-2 py-1 bg-blue-100 text-blue-500 rounded-full"
          >100%</span
        >
      </h1>
      <div class="">
        <p
          class="font-light text-lg text-gray-700 max-w-2xl mx-auto mt-8 text-left"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
          cupiditate fugit fuga ex, exercitationem eaque nihil dolore rem .
        </p>
      </div>
      <div class="mt-8 w-full h-auto flex items-center justify-start gap-x-4">
        <button
          class="bg-blue-500 text-white px-4 rounded hover:text-white py-2"
        >
          <i class="fa fa-play"></i> <span class="ml-2">Start Quiz</span>
        </button>
        <button
          class="bg-blue-100 hover:bg-blue-500 hover:text-white px-4 rounded ring-1 ring-blue-500 text-blue-500 py-2"
        >
          <i class="fa fa-dashboard"></i><span class="ml-2">My Stats</span>
        </button>
      </div></div>
       <div class="w-full h-full flex items-center justify-center"><img :src="header_img" class="w-[60%] mx-auto" alt=""></div>
    </div>
    <div class="max-w-5xl mx-auto mt-12 h-auto">
      <div class="">
        <h1 class="font-bold text-blue-500">Reviews From Students</h1>
      </div>
    </div>

    <Scroller />

    <!--  -->
    <!--  -->
    <div class="w-full h-auto bg-blue-500 mt-24">
      <div class="max-w-5xl mx-auto h-auto pt-16 pb-16">
        <div class="max-w-2xl mx-auto">
          <h1
            class="text-5xl font-semibold text-center leading-snug text-white"
          >
            Your private dashboard
          </h1>
        </div>
        <ul
          class="grid grid-cols-1 max-w-5xl ml-auto md:grid-cols-3 mt-10 gap-x-4"
        >
          <li
            class="h-auto w-auto bg-white rounded px-2 font-light text-sm py-2 flex items-center"
          >
            <span><i class="fa fa-dashboard text-green-600"></i></span>
            <span class="ml-2"> Test Clear Rate</span>
            <span class="text-red-500 ml-auto"
              ><i class="fa fa-angle-down"></i> 45/100 %</span
            >
          </li>
          <li
            class="h-auto w-auto bg-white rounded px-2 font-light text-sm py-2 flex items-center"
          >
            <span><i class="fa fa-globe text-blue-600"></i></span>
            <span class="ml-2"> Your Ranking</span>
            <span class="text-green-500 ml-auto"
              ><i class="fa fa-angle-up"></i> 767</span
            >
          </li>
          <li
            class="h-auto w-auto bg-white rounded px-2 font-light text-sm py-2 flex items-center"
          >
            <span><i class="fa fa-dashboard text-green-600"></i></span>
            <span class="ml-2"> Javascript</span>
            <span class="text-green-700 ml-auto"
              ><i class="fa fa-angle-up"></i> 90/100 %</span
            >
          </li>
        </ul>
      </div>
    </div>
  
  </div>
</template>

<script setup>
import Scroller from "../components/Scroller.vue";
import Footer from '../components/Footer.vue';
import header_img from '../assets/header_image-5.png'

</script>

<style scoped></style>
