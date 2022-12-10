<script setup>
import HelloWorld from "./components/HelloWorld.vue";
import Overlay from './components/Overlay.vue'; 
import Navar from './components/Navar.vue'
import Footer from './components/Footer.vue';
import Modal from './components/Modal.vue';
const name = $ref('kashif');



setTimeout(() => {
  name = "ali haider"
}, 3000)
</script>

<template> 
<div >
<Navar />
<Modal />
<router-view></router-view>
 
</div>
</template>

<style scoped>

</style>
