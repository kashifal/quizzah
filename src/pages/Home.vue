<template>
<div class="">
<PopMessage />
  <div class="overflow-x-hidden bg-gray-100 w-full pt-20 relative">
    <div class="max-w-5xl mx-auto w-full h-auto pb-16 grid grid-cols-1">
      <div class="relative">
        <div class="absolute animate-rotate-half right-0">
          <img class="w-24" :src="gift" alt="" />
        </div>
        <h1
          class="text-5xl font-semibold text-center leading-snug text-gray-700 mt-16"
        >
          We make coding
          <span class="bg-custom-primary text-white px-1"
            >interviews Easy
          </span>
          <br />
          for you
        </h1>
        <div class="">
          <p
            class="font-light text-lg text-gray-600 max-w-2xl mx-auto mt-8 text-center"
          >
            Welcome to Programming Interview Quizzet! Test your coding knowledge
            and skills with our challenging questions.
          </p>
        </div>
        <div
          class="mt-8 w-full h-auto flex items-center justify-center gap-x-4"
        >
          <button
            @click="openQuiz()"
            class="inline-flex w-full justify-center  border border-transparent bg-rose-500 px-4 py-2 text-base font-medium text-white shadow  hover:bg-rose-600 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
          >
            <i class="fa fa-play"></i> <span class="ml-2">Start Quiz</span>
          </button>
          <!-- <router-link to="/home">Home</router-link> -->

          <router-link
            to="/dashboard"
            class="hover:bg-rose-600 hover:text-white bg-white px-4 shadow rounded-none text-custom-text py-2"
          >
            <i class="fa fa-dashboard"></i><span class="ml-2">My Stats</span>
          </router-link>
        </div>
      </div>
    </div>
    <div class="max-w-5xl mx-auto mt-24 h-auto">
      <div class="">
        <h1 class="font-semibold text-[#0d2234] text-2xl">
          Reviews From Students
        </h1>
      </div>
    </div>

    <Scroller />

    <!--  -->
    <!--  -->
    <div class="w-full h-auto mt-24">
      <div class="max-w-5xl mx-auto h-auto">
        <div class="max-w-full mx-auto">
          <h1
            class="font-semibold text-2xl text-left leading-snug text-[#0d2234]"
          >
            Your private dashboard
          </h1>
        </div>
        <ul
          class="grid grid-cols-1 max-w-5xl ml-auto md:grid-cols-3 mt-10 gap-x-4"
        >
          <li
            class="h-auto w-auto shadow-sm bg-white rounded-none px-2 font-light text-sm py-2 flex items-center"
          >
            <span><i class="fa fa-dashboard text-green-600"></i></span>
            <span class="ml-2"> Test Clear Rate</span>
            <span class="text-rose-600 ml-auto"
              ><i class="fa fa-angle-down"></i> 45/100 %</span
            >
          </li>
          <li
            class="h-auto w-auto shadow-sm bg-white rounded-none px-2 font-light text-sm py-2 flex items-center"
          >
            <span><i class="fa fa-globe text-rose-600"></i></span>
            <span class="ml-2"> Your Ranking</span>
            <span class="text-green-500 ml-auto"
              ><i class="fa fa-angle-up"></i> 767</span
            >
          </li>
          <li
            class="h-auto shadow-sm w-auto bg-white rounded-none px-2 font-light text-sm py-2 flex items-center"
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
    <div class="w-full h-auto relative mt-24 pb-12">
      <div class="max-w-5xl h-auto pt-10 mx-auto">
        <div class="max-w-5xl mx-auto">
          <h1
            class="font-semibold text-left leading-snug text-2xl text-[#0d2234]"
          >
            Why you should take quiz ?
          </h1>
        </div>
        <div
          class="max-w-full h-auto mx-auto grid grid-cols-2 gap-x-4 sm:grid-cols-3 lg:grid-cols-4 pt-8"
        >
          <div
            class="card__quiz px-3 relative py-4 transition-all hover:scale-90 cursor-pointer gradient__bg bg-rose-600 rounded-none"
          >
            <p
              class="absolute text-5xl text-outline text-white shadow-sm one right-2"
            >
              01
            </p>
            <div class="w-full h-auto flex items-center justify-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-8 h-8 text-white"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
                />
              </svg>
            </div>
            <div class="">
              <p class="text-sm font-light pt-4 text-start text-white">
                Take the quiz to assess and improve your knowledge of
                programming concepts and principles.
              </p>
            </div>
          </div>
          <div
            class="card__quiz px-3 relative py-4 transition-all hover:scale-90 cursor-pointer bg-rose-600 gradient__bg rounded-none"
          >
            <p
              class="absolute text-5xl text-outline text-white shadow-sm one border-white right-2"
            >
              02
            </p>

            <div class="w-full h-auto flex items-center justify-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-8 text-white h-8"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3"
                />
              </svg>
            </div>
            <div class="">
              <p class="text-sm font-light pt-4 text-start text-white">
                Challenge yourself and see how you compare to other programmers.
              </p>
            </div>
          </div>
          <div
            class="card__quiz px-3 relative py-4 transition-all hover:scale-90 cursor-pointer bg-rose-600 gradient__bg rounded-none"
          >
            <p
              class="absolute text-5xl text-outline text-white shadow-sm one border-white right-2"
            >
              03
            </p>

            <div class="w-full h-auto flex items-center justify-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-8 h-8 text-white"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0"
                />
              </svg>
            </div>
            <div class="">
              <p class="text-sm font-light pt-4 text-start text-white">
                Sharpen your problem-solving abilities and coding skills.
              </p>
            </div>
          </div>
          <div
            class="card__quiz px-3 py-4 bg-rose-600 transition-all hover:scale-90 cursor-pointer gradient__bg relative rounded-none"
          >
            <p
              class="absolute text-5xl text-outline text-white shadow-sm one border-white right-2"
            >
              04
            </p>

            <div class="w-full h-auto flex items-center justify-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-8 text-white h-8"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z"
                />
              </svg>
            </div>
            <div class="">
              <p class="text-sm font-light pt-4 text-start text-white">
                Prepare for programming interviews and stand out to potential
                employers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="max-w-5xl mx-auto mt-24 py-4">
      <div class="mt-8 grid grid-cols-1 md:grid-cols-2 gap-x-4 h-full">
        <div class=" ">
          <h1
            class="font-semibold text-left leading-snug text-4xl text-[#0d2234]"
          >
            Get certificate after passing quiz
          </h1>
          <p class="text-lg mt-8 text-gray-700 font-light">
            We have allotted
            <span class="underline font-bold text-custom-primary">10,000</span>
            certificates to those , who passed thier test's. Also, you can share
            certificate on
            <a href="#" class="text-blue-500 font-semibold underline"
              >Linkedin </a
            >and other social media.
          </p>
          <!-- tags -->
          <div class="mt-8 w-full h-auto grid grid-cols-5 gap-x-2">
            <div
              class="px-3 py-2 cursor-pointer bg-white text-custom-text transition-all hover:bg-custom-primary hover:text-white shadow rounded-none text-sm flex items-center justify-center"
            >
              React
            </div>
            <div
              class="px-3 py-2 cursor-pointer bg-white text-custom-text transition-all hover:bg-custom-primary hover:text-white shadow rounded-none text-sm flex items-center justify-center"
            >
              CSS
            </div>
            <div
              class="px-3 py-2 cursor-pointer bg-white text-custom-text transition-all hover:bg-custom-primary hover:text-white shadow rounded-none text-sm flex items-center justify-center"
            >
              Laravel
            </div>
            <div
              class="px-3 py-2 cursor-pointer bg-white text-custom-text transition-all hover:bg-custom-primary hover:text-white shadow rounded-none text-sm flex items-center justify-center"
            >
              HTML
            </div>
          </div>
          <div class="">
            <button
              @click="openQuiz()"
              class="text-white px-4 mt-8 shadow rounded-none bg-custom-primary hover:text-white hover:bg-custom-primary py-2"
            >
              <i class="fa fa-download"></i>
              <span class="ml-2">Download</span>
            </button>
          </div>
        </div>

        <div class="relative py-">
          <div
            class="absolute h-16 w-16 flex items-center cursor-pointer justify-center bg-rose-100/50 hover:bg-rose-200/50 z-10 bottom-2 rounded-full left-2"
          >
            <i class="fa fa-download text-custom-primary animate-pulse"></i>
          </div>
          <img
            :src="certificate"
            class="rounded-none rotat-90 z-50 shadow-md"
            style="z-index: 1000000"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script setup>
import {onMounted} from 'vue';
import Scroller from "../components/Scroller.vue";
import Footer from "../components/Footer.vue";
import header_img from "../assets/header_image-5.png";
import gift from "../assets/gift.png";
import { useStore } from "vuex";
import Tab from "../components/Tab.vue";
import certificate from "../assets/certificate.png"; 
import axios from 'axios';
import PopMessage from '../components/PopMessage.vue';
let store = useStore();

function openQuiz() {
  store.commit("dropdownModule/setDropdown");
}

 
 



 
//hohw node works
 
</script>

<style scoped></style>


