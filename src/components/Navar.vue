<template>
  <div class="w-full bg-white shadow-sm sticky top-0 z-50">
    <div class="h-16 max-w-5xl mx-auto flex items-center justify-between">
      <div class="" >
        <router-link to="/">
          CodeCuest <span class="text-sm text-rose-600">.com</span>
        </router-link>
      </div>
      <div class="flex items-center gap-x-4">
        <ul class="flex gap-x-4">
          <router-link to="/dashboard">
            <li
              class="text-sm text-custom-text font-light px-2 py-2 hover:bg-rose-600 hover:text-white rounded-none cursor-pointer shadow"
            >
              <i class="fa fa-bar-chart"></i>

              My Stats
            </li>
          </router-link>
          <router-link to="/leaders">
            <li
              class="text-sm text-custom-text font-light px-2 py-2 hover:bg-rose-600 hover:text-white rounded-none cursor-pointer shadow"
            >
              <i class="fa fa-trophy"></i>

              Leadersboard
            </li>
          </router-link>
        </ul>

        <a
          href="https://github.com/kashifal/quizzah"
          target="_blank"
          class="px-3 py-1 text-custom-text hover:text-white hover:bg-custom-primary rounded-none shadow cursor-pointer"
          ><i class="fa fa-github text-lg t"></i
        ></a>
        <router-link
          to="/auth"
          :class="store.state.AuthModule.Auth ? 'hidden' : 'block'"

          class="px-3 py-1 text-custom-text hover:text-white hover:bg-custom-primary rounded-none shadow cursor-pointer"
          ><i class="fa fa-user text-lg t"></i
        ></router-link>
        <div class="relative">
          <button
            :class="
              store.state.dropdownModule.dropdown
                ? 'bg-rose-600 transition-all	 text-white'
                : 'bg-rose-600 transition-all	 text-white'
            "
            @click="openDrop"
            class="px-3 py-2 rounded-none text-sm transition-all bg-rose-600"
          >
            Select Your Language
            <span
              :class="
                store.state.dropdownModule.dropdown
                  ? 'fa fa-angle-up transition-all	'
                  : 'transition-all	 fa fa-angle-down'
              "
              class="ml-2"
              ><i class=""></i
            ></span>
          </button>
          <div
            :class="
              store.state.dropdownModule.dropdown ? 'block animate' : 'hidden'
            "
            style="z-index: 10000 !important"
            class="w-full cool py-2 transition-all px-2 min-h-24 z-50 bg-white shadow ring-1 bloc ring-rose-100 absolute top-[102%] mt-1 left-0 rounded-none"
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
      </div>
    </div>
  </div>
</template>

<script setup>
import SingleLink from "./SingleLink.vue";
let dropdown = $ref(false);
import { useStore } from "vuex";

let store = useStore();

function openDrop() {
  store.commit("dropdownModule/setDropdown");
  dropdown = !dropdown;
}

let langs = [
  {
    id: 9,
    title: "HTML",
    icon: "fa fa-hand-o-right",
    sub_links: [
      {
        title: "HTML5",
        id: 1,  
        questionList: [
          {
            language: "HTML",
          },
          {
            id: 1,
            question: "What is an HTML tag?",
            answer: 2,
            options: [
              { id: 1, option: "A type of CSS style" },
              { id: 2, option: "A container for content in a webpage" },
              { id: 3, option: "A way to add comments to a webpage" },
              { id: 4, option: "A method for linking to external resources" },
            ],
          },
          {
            id: 2,
            question:
              "Which HTML attribute is used to specify the URL of a link?",
            answer: 1,
            options: [
              { id: 1, option: "href" },
              { id: 2, option: "src" },
              { id: 3, option: "link" },
              { id: 4, option: "rel" },
            ],
          },
          {
            id: 3,
            question: "Which HTML element is used to create a table?",
            answer: 1,
            options: [
              { id: 1, option: "table" },
              { id: 2, option: "tbl" },
              { id: 3, option: "tab" },
              { id: 4, option: "data" },
            ],
          },
          {
            id: 4,
            question: "Which HTML element is used to create a list of items?",
            answer: 3,
            options: [
              { id: 1, option: "dl" },
              { id: 2, option: "ol" },
              { id: 3, option: "ul" },
              { id: 4, option: "li" },
            ],
          },
          {
            id: 5,
            question: "Which HTML element is used to create a form?",
            answer: 1,
            options: [
              { id: 1, option: "form" },
              { id: 2, option: "input" },
              { id: 3, option: "select" },
              { id: 4, option: "button" },
            ],
          },
          {
            id: 6,
            question: "Which HTML element is used to add a video to a webpage?",
            answer: 1,
            options: [
              { id: 1, option: "video" },
              { id: 2, option: "movie" },
              { id: 3, option: "media" },
              { id: 4, option: "clip" },
            ],
          },
          {
            id: 7,
            question: "Which HTML element is used to create a hyperlink?",
            answer: 1,
            options: [
              { id: 1, option: "a" },
              { id: 2, option: "link" },
              { id: 3, option: "href" },
              { id: 4, option: "url" },
            ],
          },
        ],
      },
    ],
  },
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
            language: "JS/REACT",
          },
          {
            id: 1,
            question: "What is ReactJS?",
            answer: 3,
            options: [
              { id: 1, option: "A programming language" },
              { id: 2, option: "A framework for web development" },
              {
                id: 3,
                option: "A JavaScript library for building user interfaces",
              },
              { id: 4, option: "A database management system" },
            ],
          },
          {
            id: 2,
            question: "What is a component in ReactJS?",
            answer: 1,
            options: [
              { id: 1, option: "A piece of the user interface" },
              {
                id: 2,
                option: "A function or class that returns a React element",
              },
              { id: 3, option: "A file containing CSS styles" },
              { id: 4, option: "A file containing HTML markup" },
            ],
          },
          {
            id: 3,
            question: "What is the virtual DOM in ReactJS?",
            answer: 1,
            options: [
              {
                id: 1,
                option: "A virtual representation of the user interface",
              },
              {
                id: 2,
                option: "A function that handles events in the application",
              },
              { id: 3, option: "A way to store application state" },
              { id: 4, option: "A way to manage server-side rendering" },
            ],
          },
          {
            id: 4,
            question: "What is JSX?",
            answer: 2,
            options: [
              { id: 1, option: "A way to create HTML elements in JavaScript" },
              { id: 2, option: "A syntax extension to JavaScript" },
              { id: 3, option: "A way to manage server-side rendering" },
              { id: 4, option: "A way to handle events in the application" },
            ],
          },
          {
            id: 5,
            question:
              "What is the purpose of the render() method in a React component?",
            answer: 2,
            options: [
              { id: 1, option: "To define the component's styles" },
              {
                id: 2,
                option:
                  "To return a React element representing the component's output",
              },
              { id: 3, option: "To handle events in the component" },
              { id: 4, option: "To define the component's initial state" },
            ],
          },
          {
            id: 6,
            question: "2",
            answer: 2,
            options: [
              { id: 1, option: "4" },
              {
                id: 2,
                option: "22",
              },
              { id: 3, option: "NaN" },
              { id: 4, option: "Undefined" },
            ],
          },
        ],
      },
      {
        title: "Vue",
        id: 2,
        questionList: [
          {
            language: "JS/Vue.js",
          },
          {
            id: 1,
            question: "What is Vue.js?",
            answer: 2,
            options: [
              { id: 1, option: "A database management system" },
              {
                id: 2,
                option: "A JavaScript framework for building web applications",
              },
              { id: 3, option: "A tool for optimizing website performance" },
              { id: 4, option: "A version control system" },
            ],
          },
          {
            id: 2,
            question: "What is the Vue.js template syntax?",
            answer: 3,
            options: [
              { id: 1, option: "HTML" },
              { id: 2, option: "XML" },
              { id: 3, option: "HTML-like syntax with special attributes" },
              { id: 4, option: "JavaScript" },
            ],
          },
          {
            id: 3,
            question: "What is a Vue.js component?",
            answer: 2,
            options: [
              { id: 1, option: "A way to add styles to a webpage" },
              {
                id: 2,
                option:
                  "A reusable piece of code that represents a part of a user interface",
              },
              { id: 3, option: "A method for optimizing website performance" },
              { id: 4, option: "A tool for managing dependencies" },
            ],
          },
          {
            id: 4,
            question: "What is the Vue.js instance?",
            answer: 2,
            options: [
              { id: 1, option: "A library of UI components" },
              {
                id: 2,
                option:
                  "The root Vue object that controls a Vue.js application",
              },
              {
                id: 3,
                option: "A way to organize code in a Vue.js application",
              },
              { id: 4, option: "A method for debugging Vue.js applications" },
            ],
          },
          {
            id: 5,
            question: "What is the Vue.js directive?",
            answer: 3,
            options: [
              { id: 1, option: "A way to add styles to a webpage" },
              {
                id: 2,
                option: "A way to organize code in a Vue.js application",
              },
              {
                id: 3,
                option:
                  "A special attribute that binds a piece of data to a template expression",
              },
              { id: 4, option: "A method for optimizing website performance" },
            ],
          },
          {
            id: 6,
            question: "What is the Vue.js computed property?",
            answer: 2,
            options: [
              { id: 1, option: "A way to add styles to a webpage" },
              {
                id: 2,
                option:
                  "A property that is calculated based on other properties",
              },
              { id: 3, option: "A method for optimizing website performance" },
              { id: 4, option: "A tool for managing dependencies" },
            ],
          },
        ],
      },
      {
        title: "Alpine",
        id: 3,
        questionList: [],
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
        questionList: [],
      },
      {
        title: "Vue",
        id: 2,
      },
      {
        title: "Alpine",
        id: 3,
        questionList: [],
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
        questionList: [
          {
            language: "PHP/Laravel",
          },
          {
            id: 1,
            question: "What is Laravel?",
            answer: 2,
            options: [
              { id: 1, option: "A database management system" },
              {
                id: 2,
                option: "A PHP framework for web application development",
              },
              { id: 3, option: "A tool for optimizing website performance" },
              { id: 4, option: "A version control system" },
            ],
          },
          {
            id: 2,
            question: "What is a route in Laravel?",
            answer: 3,
            options: [
              { id: 1, option: "A way to add styles to a webpage" },
              {
                id: 2,
                option: "A way to organize code in a Laravel application",
              },
              {
                id: 3,
                option:
                  "A URL pattern that maps to a specific action in a Laravel application",
              },
              { id: 4, option: "A method for optimizing website performance" },
            ],
          },
          {
            id: 3,
            question: "What is an Eloquent model in Laravel?",
            answer: 2,
            options: [
              { id: 1, option: "A library of UI components" },
              {
                id: 2,
                option:
                  "A class that represents a database table and provides an interface for interacting with that table",
              },
              {
                id: 3,
                option: "A way to organize code in a Laravel application",
              },
              { id: 4, option: "A method for debugging Laravel applications" },
            ],
          },
          {
            id: 4,
            question: "What is a blade template in Laravel?",
            answer: 2,
            options: [
              { id: 1, option: "A way to add styles to a webpage" },
              {
                id: 2,
                option: "A PHP template engine for Laravel applications",
              },
              {
                id: 3,
                option: "A way to organize code in a Laravel application",
              },
              { id: 4, option: "A method for optimizing website performance" },
            ],
          },
          {
            id: 5,
            question: "What is a controller in Laravel?",
            answer: 3,
            options: [
              { id: 1, option: "A way to add styles to a webpage" },
              {
                id: 2,
                option: "A way to organize code in a Laravel application",
              },
              {
                id: 3,
                option:
                  "A class that contains the logic for handling HTTP requests in a Laravel application",
              },
              { id: 4, option: "A method for optimizing website performance" },
            ],
          },
        ],
      },
      {
        title: "Blade",
        id: 2,
        questionList: [],
      },
      {
        title: "Codeignitor",
        id: 3,
        questionList: [],
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
        questionList: [],
      },
      {
        title: "Vue",
        id: 2,
        questionList: [],
      },
      {
        title: "Alpine",
        id: 3,
        questionList: [],
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
        questionList: [],
      },
      {
        title: "Vue",
        id: 2,
        questionList: [],
      },
      {
        title: "Alpine",
        id: 3,
        questionList: [],
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
        questionList: [],
      },
      {
        title: "Vue",
        id: 2,
        questionList: [],
      },
      {
        title: "Alpine",
        id: 3,
        questionList: [],
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
        questionList: [],
      },
      {
        title: "Vue",
        id: 2,
        questionList: [],
      },
      {
        title: "Alpine",
        id: 3,
        questionList: [],
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
        questionList: [],
      },
      {
        title: "Vue",
        id: 2,
        questionList: [],
      },
      {
        title: "Alpine",
        id: 3,
        questionList: [],
      },
    ],
  },
  {
    id: 10,
    title: "CSS",
    icon: "fa fa-hand-o-right",
    sub_links: [
      {
        title: "CSS3",
        id: 1,
        questionList: [
          {
            language: "CSS3",
          },
          {
            id: 1,
            question: "What is CSS3?",
            answer: 2,
            options: [
              { id: 1, option: "A database management system" },
              {
                id: 2,
                option:
                  "The latest version of the Cascading Style Sheets (CSS) language for describing the look and formatting of a document written in HTML",
              },
              { id: 3, option: "A tool for optimizing website performance" },
              { id: 4, option: "A version control system" },
            ],
          },
          {
            id: 2,
            question: "What is a CSS3 selector?",
            answer: 3,
            options: [
              { id: 1, option: "A way to add styles to a webpage" },
              { id: 2, option: "A way to organize code in a CSS3 stylesheet" },
              {
                id: 3,
                option:
                  "A pattern that matches elements in an HTML document, allowing you to apply styles to those elements",
              },
              { id: 4, option: "A method for optimizing website performance" },
            ],
          },
          {
            id: 3,
            question: "What is a CSS3 pseudo-class?",
            answer: 2,
            options: [
              { id: 1, option: "A library of UI components" },
              {
                id: 2,
                option:
                  "A special class that is used to select elements based on their state or position in the document, rather than their type or attributes",
              },
              { id: 3, option: "A way to organize code in a CSS3 stylesheet" },
              { id: 4, option: "A method for debugging CSS3 stylesheets" },
            ],
          },
          {
            id: 4,
            question: "What is a CSS3 media query?",
            answer: 2,
            options: [
              { id: 1, option: "A way to add styles to a webpage" },
              {
                id: 2,
                option:
                  "A rule that allows you to apply different styles based on the characteristics of the device the webpage is being displayed on",
              },
              { id: 3, option: "A way to organize code in a CSS3 stylesheet" },
              { id: 4, option: "A method for optimizing website performance" },
            ],
          },
          {
            id: 5,
            question: "What is a CSS3 gradient?",
            answer: 3,
            options: [
              { id: 1, option: "A way to add styles to a webpage" },
              { id: 2, option: "A way to organize code in a CSS3 stylesheet" },
              {
                id: 3,
                option: "A smooth transition between two or more colors",
              },
              { id: 4, option: "A method for optimizing website performance" },
            ],
          },
        ],
      },
    ],
  },
];
</script>

<style scoped></style>
