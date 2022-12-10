<template>
  <div class="w-full bg-white ">
    <div class="h-24 max-w-5xl mx-auto flex items-center justify-between">
      <div class="">
        <a href="/"
          > Quizzet <span class="text-sm text-blue-500">.com</span></a
        >
      </div>
      <div class="flex items-center gap-x-4">
      <div class="relative">
        <button
          :class="
            store.state.dropdownModule.dropdown ? 'bg-blue-600 transition-all	 text-white' : 'bg-blue-100 transition-all	 text-blue-500'
          "
          @click="openDrop"
          class="px-3 py-2 rounded text-sm  transition-all	 text-blue-500 hover:text-white"
        >
          Select Your Language
          <span
            :class="store.state.dropdownModule.dropdown ? 'fa fa-angle-up transition-all	' : 'transition-all	 fa fa-angle-down'"
            class="ml-2"
            ><i class=""></i
          ></span>
        </button>
        <div
          :class="store.state.dropdownModule.dropdown ? 'block animate' : 'hidden'"
         style="z-index:10000 !important;"
          class="w-full cool py-2 px-2 min-h-24 z-50 bg-white shadow ring-1 bloc ring-blue-100 absolute top-[102%] mt-1 left-0 rounded"
        >
          <div v-for="lang in langs" :key="lang.id">
            <SingleLink
              :title="lang.title"
              :id="lang.id"
              :icon="lang.icon"
              :sub_links="lang.sub_links"
              :dropdown="dropdown"
            />
          </div>
        </div>
      </div>
      <a href="https://github.com/kashifal" target="_blank" class="px-3 py-1 text-blue-500 hover:bg-blue-500 hover:text-white rounded bg-blue-100 cursor-pointer"><i class="fa fa-github text-lg t "></i></a ></div>
    </div>
  </div>
</template>

<script setup>
import SingleLink from "./SingleLink.vue";
const dropdown = $ref(false);
import {useStore} from 'vuex';


const store = useStore(); 


function openDrop() {
 
  store.commit('dropdownModule/setDropdown'); 
  dropdown = !dropdown;
}


 
const langs = [
  {
    id: 1,
    title: "Javascript",
    icon: "fa fa-hand-o-right",
    sub_links: [
      {
        title: "React",
        id: 1,
        questionList: [
          {
            question:'What is React ?',
            options:[{id:1, option:'Libraray'},{id:2, option:'Framework'},{id:3, option:'Language'},{id:4, option:'Paradiagm'}],
            answer:1,
          },
            {
            question:'Who built React ?',
            options:[{id:1, option:'SPOTIFY'},{id:2, option:'AMAZON'},{id:3, option:'INSTA'},{id:4, option:'FB'}],
            answer:4,
          },
            {
            question:'Choose write option ?',
            options:[{id:1, option:'1+1=2'},{id:2, option:'1+1=11'},{id:3, option:'1+1=20'},{id:4, option:'1+1=1'}],
            answer:2,
          }
        ]
      },
      {
        title: "Vue",
        id: 2,
        questionList:[]
      },
      {
        title: "Alpine",
        id: 3,
        questionList:[]
      },
    ],
  },
  {
    id: 2,
    title: "Python",
    icon: "fa fa-hand-o-right",
    sub_links: [
      {
        title: "React",
        id: 1,
        questionList:[]
      },
      {
        title: "Vue",
        id: 2,
      },
      {
        title: "Alpine",
        id: 3,
        questionList:[]
      },
    ],
  },
  {
    id: 3,
    title: "Php",
    icon: "fa fa-hand-o-right",
    sub_links: [
      {
        title: "Laravel",
        id: 1,
        questionList:[]
      },
      {
        title: "Blade",
        id: 2,
        questionList:[]
      },
      {
        title: "Codeignitor",
        id: 3,
        questionList:[]
      },
    ],
  },
  {
    id: 4,
    title: "Ruby",
    icon: "fa fa-hand-o-right",
    sub_links: [
      {
        title: "React",
        id: 1,
        questionList:[]
      },
      {
        title: "Vue",
        id: 2,
        questionList:[]
      },
      {
        title: "Alpine",
        id: 3,
        questionList:[]
      },
    ],
  },
  {
    id: 5,
    title: "Java",
    icon: "fa fa-hand-o-right",
    sub_links: [
      {
        title: "React",
        id: 1,
        questionList:[]
      },
      {
        title: "Vue",
        id: 2,
        questionList:[]
      },
      {
        title: "Alpine",
        id: 3,
        questionList:[]
      },
    ],
  },
  {
    id: 6,
    title: "C++",
    icon: "fa fa-hand-o-right",
    sub_links: [
      {
        title: "React",
        id: 1,
        questionList:[]
      },
      {
        title: "Vue",
        id: 2,
        questionList:[]
      },
      {
        title: "Alpine",
        id: 3,
        questionList:[]
      },
    ],
  },
  {
    id: 7,
    title: "C",
    icon: "fa fa-hand-o-right",
    sub_links: [
      {
        title: "React",
        id: 1,
        questionList:[]
      },
      {
        title: "Vue",
        id: 2,
        questionList:[]
      },
      {
        title: "Alpine",
        id: 3,
        questionList:[]
      },
    ],
  },
  {
    id: 8,
    title: "Java",
    icon: "fa fa-hand-o-right",
    sub_links: [
      {
        title: "React",
        id: 1,
        questionList:[]
      },
      {
        title: "Vue",
        id: 2,
        questionList:[]
      },
      {
        title: "Alpine",
        id: 3,
        questionList:[]
      },
    ],
  },
];
</script>

<style scoped></style>
