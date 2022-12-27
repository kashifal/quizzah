<template>
<div class="">
  <div :class="store.state.AuthModule.Auth ? 'hidden' : 'block'" class="flex min-h-full flex-col  justify-center py-12 sm:px-6 lg:px-8">
    <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md  ">
      <div
        class="bg-white py-8 px-4 shadow-sm ring-1 ring-gray-200 sm:rounded-none-lg sm:px-10"
      >
        <div class="">
          <div class="relative">
            <div class="absolute inset-0 flex items-center">
              <div class="w-full border-t border-gray-300" />
            </div>
            <div class="relative flex justify-center text-sm">
              <span class="bg-white px-2 text-gray-500">Sign up with </span>
            </div>
          </div>

          <div class="mt-6 grid grid-cols-1 gap-3">
            <div>
              <a
                href="#"
                class="inline-flex w-full justify-center rounded-none-md bg-blue-600 py-2 px-4 text-sm font-medium text-gray-500 shadow-sm hover:bg-blue-700"
              >
                <span class="sr-only">Sign in with Facebook</span>
                <svg
                  class="h-5 w-5 text-white"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>
            </div>

            <div>
              <a
                href="#"
                class="inline-flex w-full justify-center rounded-none-md bg-sky-500 py-2 px-4 text-sm font-medium text-gray-500 shadow-sm hover:bg-sky-600"
              >
                <span class="sr-only">Sign in with Twitter</span>
                <svg
                  class="h-5 w-5 text-white"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"
                  />
                </svg>
              </a>
            </div>

            <div>
              <a
              @click="login()"
                href="#"
                class="inline-flex w-full justify-center rounded-none-md bg-gray-700 py-2 px-4 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-800"
              >
                <span  class="sr-only">Sign in with GitHub</span>
                <svg
                  class="h-5 w-5 text-white"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- If Logged in then this page will be shown -->
  <div :class="store.state.AuthModule.Auth ? 'block' : 'hidden'" class="w-full h-full" style="height: 100% !important">
    <div
      class="max-w-5xl mx-auto h-full flex items-center pt-12 pb-12 justify-between"
    >
      <div class="flex gap-x-4">
        <div
          class="h-12 object-contain ring-1 ring-rose-500 w-12 rounded-full overflow-hidden"
        >
          <img
            class="object-contain"
            :src="kashif"
            alt=""
          />
        </div>
        <div class="">
          <h1 class="text-2xl font-semibold">Your Dashboard</h1>
          <p class="text-sm font-light">
            <i class="fa fa-trophy text-yellow-500"></i>
            <span class="mx-2 underline">Kashif Sulehria</span> -
            <span class="ml-2 text-sm font-light text-green-500"
              ><i class="fa fa-angle-double-up"></i> 1</span
            >
          </p>
        </div>
      </div>

      <div class="w-auto h-auto gap-x-4">
        <button
          class="py-1.5 px-3 text-custom-text font-light transition-all text-sm"
        >
          <i class="fa fa-angle-double-up animate-pulse text-sm"></i>
          <span class="ml-1"
            >Your Score:
            {{
              (
                (store.state.quizHistoryModule.total_quiz_answers /
                  store.state.quizHistoryModule.total_quiz_quetions) *
                100
              ).toFixed(1)
            }} 
          </span>
        </button>
        <button
          class="py-1.5 px-3 text-custom-text transition-all text-sm font-light"
        >
          <i class="fa fa-download text-sm"></i>
          <span class="ml-1"> Certificate </span>
        </button>
         <button
         @click="logout()"
          class="py-1.5 px-3 text-custom-text transition-all text-sm font-light"
        >
          <i class="fa fa-sign-out text-sm"></i>
          <span class="ml-1">Logout </span>
        </button>
      </div>
    </div>
    <div class="max-w-5xl h-auto grid grid-cols-1 mx-auto">
      <div class="w-full h-48 gradient__bg rounded-none"></div>
    </div>
    <div
      class="max-w-5xl h-auto mt-24 mx-auto"
      :class="
        store.state.quizHistoryModule.quiz_history.length === 0
          ? 'hidden'
          : 'block'
      "
    >
      <div class="px-4 sm:px-6 lg:px-8">
        <div class="sm:flex sm:items-center">
          <div class="sm:flex-auto">
            <h1 class="text-xl font-semibold text-gray-900">History</h1>
            <p class="mt-2 text-sm text-gray-700">
              A list of all Quiz, You have taken.
            </p>
          </div>
        </div>
        <div class="mt-8 flex flex-col">
          <div class="sm:-mx-6 lg:-mx-8">
            <div class="inline-block min-w-full py-2 align-middle">
              <div class="overflow-hidden shadow-sm">
                <table class="min-w-full divide-y divide-gray-200">
                  <thead class="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6 lg:pl-8"
                      >
                        Language / Framework
                      </th>
                      <th
                        scope="col"
                        class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        Result
                      </th>
                      <th
                        scope="col"
                        class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        Percentage
                      </th>
                      <th
                        scope="col"
                        class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        Progress
                      </th>
                      <th
                        scope="col"
                        class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        Share Certificate
                      </th>
                      <th
                        scope="col"
                        class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                      >
                        Date
                      </th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-gray-200 bg-white">
                    <tr
                      v-for="history in store.state.quizHistoryModule
                        .quiz_history"
                      :key="history.score"
                    >
                      <td
                        class="whitespace-nowrap py-4 pl-4 pr-3 text-left text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8"
                      >
                        {{ history.language.language }}
                      </td>
                      <td
                        class="whitespace-nowrap px-3 py-4 text-left text-sm text-gray-500 pl-6"
                      >
                        {{
                          (history.score / history.total) * 100 >= 60
                            ? "Passed"
                            : "Failed"
                        }}
                      </td>
                      <td
                        class="whitespace-nowrap text-left px-3 py-4 text-sm text-gray-500 pl-6"
                      >
                        {{
                          ((history.score / history.total) * 100).toFixed(1)
                        }}%
                      </td>
                      <td
                        class="whitespace-nowrap text-left px-3 py-4 text-sm text-gray-500 pl-6"
                      >
                        <i
                          :class="
                            (history.score / history.total) * 100 >= 60
                              ? 'fa text-sm fa-angle-double-up text-green-600'
                              : 'fa text-sm fa-angle-double-down text-rose-600'
                          "
                        ></i>
                      </td>
                      <td
                        class="whitespace-nowrap text-left px-3 py-4 text-sm cursor-pointer text-gray-500 pl-6"
                      >
                        <i
                          :class="
                            (history.score / history.total) * 100 >= 60
                              ? ''
                              : 'fa text-sm fa-refresh text-rose-600'
                          "
                        ></i>
                        <i
                          class="ml-4"
                          :class="
                            (history.score / history.total) * 100 >= 60
                              ? 'fa text-sm fa-linkedin text-blue-600'
                              : 'fa text-sm fa-info text-rose-600'
                          "
                        ></i>
                      </td>
                      <td>
                        <span class="text-sm text-custom-text">{{
                          history.date
                        }}</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-24 max-w-5xl gap-8 mx-auto grid grid-cols-1 md:grid-cols-2">
      <div class="bg-white px-8 py-4 flex shadow rounded-none">
        <div class="flex">
          <!-- <i class="fa fa-dashboard text-green-500  "></i> -->
          <h1 class="text-sm font-light">Most Score in Lang / Fram / Lib</h1>
        </div>
        <h1 class="text-sm font-light ml-auto">
          <i class="fa fa-angle-double-up mr-2 text-green-500"></i> Javascript /
          React
        </h1>
      </div>
      <div class="bg-white px-8 py-4 flex shadow rounded-none">
        <div class="flex">
          <!-- <i class="fa fa-dashboard text-green-500  "></i> -->
          <h1 class="text-sm font-light">Less Score in Lang / Fram / Lib</h1>
        </div>
        <h1 class="text-sm font-light ml-auto">
          <i class="fa fa-angle-double-down mr-2 text-red-500"></i> C++
        </h1>
      </div>
    </div>
  </div>
</div>

</template>

<script setup>
import { useStore } from "vuex";
import kashif from '../assets/kashifs.jpeg';
// import Pie from '../components/Pie.vue';
// import Bar from '../components/Bar.vue';

const store = useStore();

// setInterval(() => {
//   console.log(store.state.quizHistoryModule);
// }, 1000);

function openDailog() {
  store.commit("dropdownModule/setDropdown");
}

function login(){ 
   store.commit("AuthModule/setAuth"); 

}

function logout(){ 
     store.commit("AuthModule/setAuth"); 
}
</script>

<style scoped></style>
