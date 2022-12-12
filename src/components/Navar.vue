<template>
  <div class="w-full bg-white shadow-sm sticky top-0">
    <div class="h-16 max-w-6xl mx-auto flex items-center justify-between">
      <div class="">
        <a href="/"
          > CodeQuest <span class="text-sm text-rose-600">.io</span></a
        >
      </div>
      <div class="flex items-center gap-x-4">
      <ul>
      <li class="text-sm text-custom-text font-light px-2 py-2 hover:bg-rose-600 hover:text-white rounded cursor-pointer shadow"><i class="fa fa-trophy"></i> Leadersboard </li>
      </ul>
      <div class="relative">
        <button
          :class="
            store.state.dropdownModule.dropdown ? 'bg-rose-600 transition-all	 text-white' : 'bg-rose-600 transition-all	 text-white'
          "
          @click="openDrop"
          class="px-3 py-2 rounded text-sm  transition-all	     bg-rose-600"
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
          class="w-full cool py-2 px-2 min-h-24 z-50 bg-white shadow ring-1 bloc ring-rose-100 absolute top-[102%] mt-1 left-0 rounded"
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
      <a href="https://github.com/kashifal" target="_blank" class="px-3 py-1 text-rose-600 hover:bg-rose-600  hover:text-white rounded   ring-1 ring-rose-600 cursor-pointer"><i class="fa fa-github text-lg t "></i></a ></div>
    </div>
  </div> 
</template>

<script setup>
import SingleLink from "./SingleLink.vue";
let dropdown = $ref(false);
import {useStore} from 'vuex';


let store = useStore(); 


function openDrop() {
 
  store.commit('dropdownModule/setDropdown'); 
  dropdown = !dropdown;
}


 
let langs = [
  {
    id: 1,
    title: "Javascript",
    icon: "fa fa-hand-o-right",
    sub_links: [
      {
        title: "React",
        id: 1,
        questionList : [
  {
    id: 1,
    question: "What is ReactJS?",
    answer: "A JavaScript library for building user interfaces",
    options: [
      { id: 1, option: "A programming language" },
      { id: 2, option: "A framework for web development" },
      { id: 3, option: "A JavaScript library for building user interfaces" },
      { id: 4, option: "A database management system" }
    ]
  },
  {
    id: 2,
    question: "What is a component in ReactJS?",
    answer: "A piece of the user interface",
    options: [
      { id: 1, option: "A piece of the user interface" },
      { id: 2, option: "A function or class that returns a React element" },
      { id: 3, option: "A file containing CSS styles" },
      { id: 4, option: "A file containing HTML markup" }
    ]
  },
  {
    id: 3,
    question: "What is the virtual DOM in ReactJS?",
    answer: "A virtual representation of the user interface",
    options: [
      { id: 1, option: "A virtual representation of the user interface" },
      { id: 2, option: "A function that handles events in the application" },
      { id: 3, option: "A way to store application state" },
      { id: 4, option: "A way to manage server-side rendering" }
    ]
  },
  {
    id: 4,
    question: "What is JSX?",
    answer: "A syntax extension to JavaScript",
    options: [
      { id: 1, option: "A way to create HTML elements in JavaScript" },
      { id: 2, option: "A syntax extension to JavaScript" },
      { id: 3, option: "A way to manage server-side rendering" },
      { id: 4, option: "A way to handle events in the application" }
    ]
  },
  {
    id: 5,
    question: "What is the purpose of the render() method in a React component?",
    answer: "To return a React element representing the component's output",
    options: [
      { id: 1, option: "To define the component's styles" },
      { id: 2, option: "To return a React element representing the component's output" },
      { id: 3, option: "To handle events in the component" },
      { id: 4, option: "To define the component's initial state" }
    ]
  },
        ],
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
