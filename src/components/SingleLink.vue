<template>
  <ul  class="w-full h-full relative">
    <li
      @click="openLink"
      :class="links ? 'bg-blue-100 text-blue-500' : ''"
      class="flex items-center hover:bg-blue-100 rounded py-1 px-2 cursor-pointer hover:text-blue-500 justify-start"
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
          ? ' font-light text-sm px-10 cursor-pointer flex hover:bg-blue-100 hover:text-blue-500  py-1 rounded'
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
const links = $ref(false);
import { defineProps } from "vue";
import {useStore} from 'vuex';

const store = useStore();

const props = defineProps({
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

  console.log(data && data);
  console.log(store.state.openModalModule);

}


function openLink() {
  links = !links;
 
}
</script>

<style scoped></style>
