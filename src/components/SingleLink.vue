<template>
  <ul  class="w-full h-full relative">
    <li
      @click="openLink"
      :class="links ? 'bg-rose-100 text-custom-primary' : ''"
      class="flex items-center hover:bg-rose-100 rounded-none py-1 px-2 cursor-pointer hover:text-custom-primary justify-start"
    >
      <i :class="icon"></i>
      <span class="ml-4 text-sm font-light">
        {{ title }}
        <span> </span>
      </span>
      <i
        :class="links ? 'fa fa-angle-down' : 'fa fa-angle-right'"
        class="ml-auto"
      ></i>
    </li>
    <span
    
      :class="
        links
          ? ' font-light text-sm px-10 cursor-pointer flex hover:bg-rose-100 hover:text-custom-primary  py-1 rounded-none'
          : 'hidden'
      "
      v-for="link in sub_links"
      :key="link.id"
      @click="showme(link.questionList)"
    >
      <span><i class="fa fa-hand-o-right"></i></span>
      <span class="ml-2"> {{ link.title }}</span>
    </span>
  </ul>
</template>

<script setup>
let links = $ref(false);
import { defineProps } from "vue";
import {useStore} from 'vuex';

let store = useStore();

let props = defineProps({
  title: String,
  id: Number,
  icon: String,
  sub_links: Object,
  dropdown : Boolean
});


function showme(data){ 
  links = !links; 
  store.commit('dropdownModule/setDropdown');
  store.commit('openModalModule/setModal', data);
 


}


function openLink() {
  links = !links;
 
}
</script>

<style scoped></style>
