import { createStore } from "vuex"; 
import dropdownModule from "./dropdown.module.js";  
import openModalModule from "./openModal.module.js";
import randomColorModule from "./randomColor.module.js";
import quizHistoryModule from "./quizHistory.module.js";

export default createStore({
  modules: {
    dropdownModule: dropdownModule,
    openModalModule: openModalModule,
    randomColorModule: randomColorModule,
    quizHistoryModule: quizHistoryModule,
  },
});


 
