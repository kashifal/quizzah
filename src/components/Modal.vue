<template>
  <div
    :class="store.state.openModalModule.modal ? 'block' : 'hidden'"
    class="quiz-modal relative z-50"
  >
    <div
      class="overlay fixed inset-0 bg-gray-500 bg-opacity-75 backdrop-blur-sm   transition-opacity"
    ></div>
    <div class="modal fixed inset-0 z-10 overflow-y-auto">
      <div
        class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"
      >
        <div
          :class="
            test_has_started === true && test_has_ended === false
              ? 'block'
              : 'hidden'
          "
          class="bg-white max-w-4xl rounded-none-md modal__window break-words h-auto px-4 py-8 relative overflow-hidden"
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
                class="h-10 min-w-10 flex items-center justify-center ring-1 bg-rose-500 ring-custom-primary px-4 text-white rounded-full"
              >
                <p>
                  <span class="">Q{{ currentQ }}</span> / Q{{
                    store.state.openModalModule.data.length - 1
                  }}
                </p>
              </div>
              <div
                class="mr-32 ring-1 px-4 py-2 w-20 rounded-full"
                :class="
                  timer < 10
                    ? 'ring-1 ring-rose-500 bg-rose-500 text-white'
                    : 'ring-custom-primary ring-1 text-custom-primary'
                "
                style="z-index: 1000000"
              >
                <p>{{ timer }}</p>
              </div>
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
                @click="
                  checkAnswer(
                    option?.id,
                    store?.state?.openModalModule?.data[currentQ]?.answer
                  )
                "
                class="hover:text-white hover:bg-custom-primary cursor-pointer text-custom-primary ring-1 ring-custom-primary rounded-none px-2 py-1"
              >
                <button class="text-[12px] py-1 cursor-pointer transition-all">
                  {{ option?.option }}
                </button>
              </div>
            </div>

            <div
              @click="nextQuestion()"
              class="mt-6 px-3 py-1 ml-auto transition-all text-right rounded-none text-rose-400 hover:text-rode-600 cursor-pointer"
            >
              <span
                class="px-2 py-1 rounded-none bg-white hover:bg-rose-500 hover:text-white"
              >
                Skip <i class="fa fa-angle-double-right"></i
              ></span>
              <br />
              <span class="text-[10px]"
                >Note: You will get 0 score if skip question</span
              >
            </div>
          </div>
        </div>
        <!--  -->
        <!--  -->
        <!--  -->
        <!--  -->
        <div
          :class="test_has_started ? 'hidden' : 'block transition-all'"
          class="bg-white w-[500px] rounded-none break-words h-auto px-4 py-8 relative overflow-hidden"
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
                Your test will be
                <span class="text-rose-500 text-sm font-light underline">
                  {{
                    ((store.state.openModalModule.data.length - 1) * 15) / 60
                  }}
                  ({{
                    ((store.state.openModalModule.data.length - 1) * 15) / 100
                  }}
                  )</span
                >
                Mins long, every question will take 15 seconds.
                <span class="text-green-500 underline font-light text-sm"
                  >Good Luck</span
                >
              </h1>
            </div>

            <div
              @click="startTest()"
              :class="
                store.state.openModalModule.data.length <= 0
                  ? 'hidden'
                  : 'block'
              "
              class="mt-6 px-3 py-1 ring-1 ml-auto ring-custom-primary rounded-none bg-white text-custom-primary transition-all hover:text-white hover:bg-custom-primary cursor-pointer"
            >
              Start Test <i class="fa fa-angle-double-right"></i>
            </div>
            <div
              @click="endTest()"
              :class="
                store.state.openModalModule.data.length <= 0
                  ? 'block'
                  : 'hidden'
              "
              class="mt-6 px-3 py-1 ring-1 ml-auto ring-custom-primary rounded-none bg-red-100 text-custom-primary transition-all hover:text-white hover:bg-custom-primary cursor-pointer"
            >
              close Modal <i class="fa fa-angle-double-right"></i>
            </div>
          </div>
        </div>
        <!--  -->
        <div
          :class="test_has_ended ? 'block' : 'hidden'"
          class="bg-white w-[500px] rounded-none break-words h-auto px-4 py-8 relative overflow-hidden"
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
                You have {{ score }} correct out of
                {{ store.state.openModalModule.data.length - 1 }} Questions...
                {{
                  (score / (store.state.openModalModule.data.length - 1)) *
                    100 >=
                  40
                    ? "cool"
                    : "no"
                }}
                <br />
                <span
                  :class="
                    (score / (store.state.openModalModule.data.length - 1)) *
                      100 >=
                    70
                      ? 'bg-rose-500 px-1 py-1 text-white'
                      : 'bg-gray-400 text-custom-primary px-1 py-1'
                  "
                  >Results <i class="fa fa-angle-double-right"></i>
                  {{
                    (
                      (score / (store.state.openModalModule.data.length - 1)) *
                      100
                    ).toFixed(0)
                  }}/100 %</span
                >
                <br />
                <span
                  :class="
                    (score / (store.state.openModalModule.data.length - 1)) *
                      100 >=
                    50
                      ? 'bg-rose-500 px-1 py-1 text-white'
                      : 'bg-gray-400 text-custom-primary px-1 py-1'
                  "
                  >{{
                    (score / (store.state.openModalModule.data.length - 1)) *
                      100 >
                    50
                      ? "Passed Congrats"
                      : "Failed"
                  }}</span
                >
              </h1>
            </div>

            <div class="flex ml-auto gap-x-2">
              <div
                @click="
                  endTest(
                    score,
                    store.state.openModalModule.data.length,
                    store.state.openModalModule.data[0]
                  )
                "
                class="mt-6 px-3 py-1 ring-1 ml-auto ring-custom-primary rounded-none bg-white text-custom-primary transition-all hover:text-white hover:bg-custom-primary cursor-pointer"
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
let currentTime = $ref(new Date().toLocaleTimeString());

function nextQuestion() {
  if (currentQ < store.state.openModalModule.data.length - 1) {
    currentQ = currentQ + 1;
    store.commit("randomColorModule/setColor");
    timer = 15;
  } else {
    test_has_ended = true;
  }
}

setInterval(function () {
  timer = timer - 1;

  if (timer === 0 && test_has_started === true) {
    if (currentQ < store.state.openModalModule.data.length - 1) {
      currentQ = currentQ + 1;
      store.commit("randomColorModule/setColor");
    } else {
      test_has_ended = true;
    }
    timer = 15;
  }
}, 1000);

function startTest() {
  test_has_started = true;
  timer = 15;
  score = 0;
}

function checkAnswer(chosed, answer) { 
  if (chosed === answer) {
    score = score + 1;
  } else {
    score = score;
  }
  nextQuestion();
}
 

function endTest(score, total, lang) {
  store.commit("openModalModule/setModal", []);
  store.commit("quizHistoryModule/setHistory", {
    score: score,
    total: total - 1,
    percentage: score,
    language: lang,
    date: new Date().toLocaleString(),
  });
  test_has_ended = false;
  currentQ = 1;
  test_has_started = false;
  timer = 15;
  score = 0;
}
</script>

<style scoped></style>
