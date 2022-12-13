<template>
  <div
    :class="store.state.openModalModule.modal ? 'block' : 'hidden'"
    class="quiz-modal relative z-10"
  >
    <div
      class="overlay fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
    ></div>
    <div class="modal fixed inset-0 z-10 overflow-y-auto">
      <div
        class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"
      >
        <div
        :class="test_has_started === true && test_has_ended === false ? 'block' : 'hidden' "
          class="bg-white w-[500px] rounded break-words h-auto px-4 py-8 relative overflow-hidden"
        >
          <div
            class="absolute -top-10 -right-10 h-24 w-24 rounded-full"
            :style="{ background: store.state.randomColorModule.color }"
          ></div>
          <div
            class="w-full h-full p-2 flex justify-start flex-col items-start"
          >
           <div class="flex w-full justify-start gap-x-4 items-center">
            <div
              class="h-10 min-w-10 flex items-center justify-center ring-1 bg-rose-600 ring-rose-600 px-4 text-white rounded-full"
            >
              <p>
                <span class="">Q{{ currentQ  }}</span> / Q{{
                  store.state.openModalModule.data.length - 1
                }}
              </p>
            
            </div>
            <div class="mr-32 ring-1 px-4 py-2  w-20 rounded-full" :class="timer < 10 ? 'ring-1 ring-rose-500 bg-rose-500 text-white' : 'ring-rose-600 ring-1 text-rose-600'" style="z-index:1000000;">  <p>{{timer}}</p></div>
           </div>
            <div class="mt-4 text-start">
              <h1>
                {{ store?.state?.openModalModule?.data[currentQ]?.question }}
              </h1>
            </div>
            <div class="h-auto w-full grid grid-cols-2 gap-4 mt-4">
              <div
                v-for="option in store?.state?.openModalModule?.data[currentQ]
                  ?.options"
                :key="option.id"
                @click="nextQuestion"
                class=" hover:text-white hover:bg-rose-600 cursor-pointer text-rose-600 ring-1 ring-rose-600 rounded px-2 py-1"
              >
                <h1
                  class="text-[12px] py-1 cursor-pointer transition-all	"
                  @click="
                    checkAnswer(
                      option?.option,
                      store?.state?.openModalModule?.data[currentQ]?.answer
                    )
                  "
                >
                  {{ option?.option }}
                </h1>
              </div>
            </div>
            
            <div
            @click="nextQuestion()"
              class="mt-6 px-3 py-1   ml-auto   transition-all text-right	 rounded   text-rose-500 hover:text-rode-600  cursor-pointer"
            >
             <span class="ring-1 ring-rose-500 px-2 py-1 rounded bg-white hover:bg-rose-500 hover:text-white"> Skip <i class="fa fa-angle-double-right"></i></span>
              <br>
              <span class="text-[10px]">Note: You will get 0 score if skip question</span>
            </div>
          </div>
        </div>
        <!--  -->
        <!--  -->
        <!--  -->
        <!--  -->
         <div
        :class="test_has_started ? 'hidden' : 'block transition-all' "
          class="bg-white w-[500px] rounded break-words h-auto px-4 py-8 relative overflow-hidden"
        >
          <div
            class="absolute -top-10 -right-10 h-24 w-24 rounded-full"
            :style="{ background: store.state.randomColorModule.color }"
          ></div>
          <div
            class="w-full h-full p-2 flex justify-start flex-col items-start"
          >
            
            <div class="mt-4 text-start">
              <h1>
                Your test will be {{(store.state.openModalModule.data.length * 15) /120}} Mins long, every question will take 15 seconds. <span class="text-green-500 border-b-[1px] border-green-500">Good Luck</span>
              </h1>
            </div>
             
             
            <div
            @click="startTest()"
            :class="store.state.openModalModule.data.length <= 0 ? 'hidden' : 'block'"
              class="mt-6 px-3 py-1 ring-1 ml-auto ring-rose-600 rounded bg-white text-rose-600 transition-all	 hover:text-white hover:bg-rose-600 cursor-pointer"
            >
              Start Test <i class="fa fa-angle-double-right"></i>
            </div>
            <div
            @click="endTest()"
            :class="store.state.openModalModule.data.length <= 0 ? 'block' : 'hidden'"
              class="mt-6 px-3 py-1 ring-1 ml-auto ring-rose-600 rounded bg-red-100 text-rose-600 transition-all	 hover:text-white hover:bg-rose-600 cursor-pointer"
            >
              close Modal <i class="fa fa-angle-double-right"></i>
            </div>
          </div>
        </div>
        <!--  -->
        <!--  -->
        <!--  -->
         <!--  -->
        <!--  -->
        <!--  -->
         <div
        :class="test_has_ended ? 'block' : 'hidden' "
          class="bg-white w-[500px] rounded break-words h-auto px-4 py-8 relative overflow-hidden"
        >
          <div
            class="absolute -top-10 -right-10 h-24 w-24 rounded-full"
            :style="{ background: store.state.randomColorModule.color }"
          ></div>
          <div
            class="w-full h-full p-2 flex justify-start flex-col items-start"
          >
            
            <div class="mt-4 text-start">
              <h1>
              You have  {{score }} correct  out of {{store.state.openModalModule.data.length}} Questions... 
              
              <br />
              <span :class="((score/store.state.openModalModule.data.length) * 100) >= 70 ? 'bg-rose-500 px-1 py-1 text-white' : 'bg-gray-400 text-rose-600 px-1 py-1'">Results <i  class="fa fa-angle-double-right"></i> {{((score/store.state.openModalModule.data.length) * 100).toFixed(0)}}/100  %</span>
              <br />
              <span :class="((score/store.state.openModalModule.data.length) * 100) >= 50 ? 'bg-rose-500 px-1 py-1 text-white' : 'bg-gray-400 text-rose-600 px-1 py-1'">{{((score/store.state.openModalModule.data.length) * 100) > 50 ? 'Passed Congrats' : 'Failed'}}</span>
              </h1>
            </div>
             
             
            <div class="flex ml-auto gap-x-2 ">
            <div
            @click="endTest(score,store.state.openModalModule.data.length,store.state.openModalModule.data[0])"
              class="mt-6 px-3 py-1 ring-1 ml-auto ring-rose-600 rounded bg-white text-rose-600 transition-all	 hover:text-white hover:bg-rose-600 cursor-pointer"
            >
              Give another shot <i class="fa fa-angle-double-right"></i>
            </div>
            
            
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
let currentQ = $ref(1);
import { useStore } from "vuex";
let test_has_started = $ref(false);
let test_has_ended = $ref(false);
let score = $ref(0); 
let timer = $ref();
let store = useStore();
 

function nextQuestion() {
  if (currentQ < store.state.openModalModule.data.length - 1) {
    currentQ = currentQ + 1;
    store.commit("randomColorModule/setColor");
   timer = 15;
    
  }else{ 
 test_has_ended = true;   
 
  }
}

    setInterval(function() { 
   timer = timer - 1;
 
  if (timer === 0 && test_has_started === true) {
    if (currentQ < store.state.openModalModule.data.length - 1) {
    currentQ = currentQ + 1;
    store.commit("randomColorModule/setColor");
   
    
  } else{     
    //comment are fine 
 test_has_ended = true;   
 
  }
    timer = 15;
    console.log(timer);
  }
}, 1000); 

function startTest(){
  test_has_started = true;
 timer = 15;
} 

function checkAnswer(chosed, answer) {
  if (chosed === answer) {
    score = score + 1;
  } else {
    score = score ;
  }
  console.log({ score });
}


console.log('quizHistoryModule/setHistory');

function endTest(score,total,lang){
  store.commit('openModalModule/setModal',[]);
  store.commit('quizHistoryModule/setHistory',{score: score, total:total, percentage: score/total * 100, language:lang});
  test_has_ended = false;
 currentQ = 1;
test_has_started = false;
timer = 15;
 score = 0;  


}


 
</script>

<style scoped></style>
