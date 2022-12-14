<template>
   <div class="w-full h-full " style="height:100% !important;">
   <div class="max-w-5xl mx-auto h-full flex items-center pt-12 pb-12 justify-between">
    
   <div class="flex gap-x-4 ">
    <div class="h-12 object-cover ring-1 ring-rose-600	 w-12 rounded-full overflow-hidden ">
    <img class="object-cover" src="https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODl8fG1hbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="">
</div>
<div class="">
<h1 class="text-2xl font-bold">Your Dashboard</h1>
<p class="text-sm font-light">Hello, Kashif Sulehria 👋</p>
</div>
   </div>
    
    
    <div class="w-auto h-auto gap-x-4">
    <button class="py-1.5 px-3 text-rose-600 rounded     hover:text-rose-600 transition-all   text-sm font-normal">
    <i class="fa fa-angle-double-up animate-pulse  text-sm "></i> 
     <span class="ml-1">Your Ranking </span></button>
      <button class="py-1.5 px-3 text-rose-600 rounded     hover:text-rose-600 transition-all   text-sm font-normal">
    <i class="fa fa-download  text-sm "></i> 
     <span class="ml-1">Get Report / Certificate </span></button>
    </div>
   </div>
   <div class="max-w-5xl h-auto grid grid-cols-1 mx-auto ">
   <div class="w-full h-48 bg-rose-600 gradient__bg rounded"></div>
   </div>
   <div class="max-w-5xl h-auto grid grid-cols-1 mt-24 mx-auto " :class="store.state.quizHistoryModule.quiz_history.length === 0 ? 'hidden' : 'block' ">
     <div class="px-4 sm:px-6 lg:px-8">
    <div class="sm:flex sm:items-center">
      <div class="sm:flex-auto">
        <h1 class="text-xl font-semibold text-gray-900">History</h1>
        <p class="mt-2 text-sm text-gray-700">A list of all Quiz, You have taken.</p>
      </div>
      
    </div>
    <div class="mt-8 flex flex-col">
      <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="inline-block min-w-full py-2 align-middle">
          <div class="overflow-hidden shadow-sm ring-1 ring-black ring-opacity-5">
            <table class="min-w-full divide-y divide-gray-300">
              <thead class="bg-gray-50">
                <tr>
                  <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6 lg:pl-8">Language / Framework</th>
                  <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Result</th>
                  <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Percentage</th>
                  <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Progress</th>
                  <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Download Certificate</th>
                   
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200 bg-white">
                <tr v-for="history in store.state.quizHistoryModule.quiz_history" :key="history.score">
                  <td class="whitespace-nowrap py-4 pl-4 pr-3 text-left text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8">{{history.language.language}}</td>
                  <td class="whitespace-nowrap px-3 py-4 text-left text-sm text-gray-500">{{history.score/history.total * 100 >= 60 ? 'Passed' : 'Failed'}}</td>
                  <td class="whitespace-nowrap text-left px-3 py-4 text-sm text-gray-500">{{history.score/history.total * 100}}%</td>
                  <td class="whitespace-nowrap text-left px-3 py-4 text-sm text-gray-500"><i :class="history.score/history.total * 100 >= 60 ? 'fa text-sm fa-angle-double-up text-green-600' : 'fa text-sm fa-angle-double-down text-rose-600'"></i></td>
                  <td class="whitespace-nowrap text-left px-3 py-4 text-sm cursor-pointer text-gray-500">
                  <i :class="history.score/history.total * 100 >= 60 ? 'fa text-sm fa-download text-green-600' : 'fa text-sm fa-refresh text-rose-600'"></i>
                  <i class="ml-4" :class="history.score/history.total * 100 >= 60 ? 'fa text-sm fa-linkedin text-blue-600' : 'fa text-sm fa-info text-rose-600'"></i>
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
   <div class="mt-24 max-w-5xl gap-8 mx-auto grid grid-cols-2 md:grid-cols-2">
   
 
   
   
   </div>
   </div>
</template>

<script setup>  
import { useStore } from "vuex"; 



const store = useStore();
const HistoryOfQuiz = store.state.quizHistoryModule.quiz_history;


function openDailog(){
  store.commit('dropdownModule/setDropdown');
}
 
 
</script>

<style scoped>

</style> 