<template>
  <TransitionRoot as="template" :show="open">
    <Dialog as="div" class="relative z-10" style="z-index:100000 !important;" @close="open = false">
      <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
      </TransitionChild>

      <div class="fixed inset-0 z-10 overflow-y-auto" style="">
        <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200" leave-from="opacity-100 translate-y-0 sm:scale-100" leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
            <DialogPanel class="relative transform overflow-hidden  bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
              <div class="sm:flex sm:items-start">
                <div class="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gray-100 sm:mx-0 sm:h-10 sm:w-10">
                  <BellAlertIcon class="h-6 w-6 text-gray-600" aria-hidden="true" />
                </div>
                <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                  <DialogTitle as="h3" class="text-lg font-medium leading-6 text-gray-900">Login and Earn Certificate</DialogTitle>
                  <div class="mt-2">
                    <p class="text-sm text-gray-500">Are you sure you want to deactivate your account? All of your data will be permanently removed from our servers forever. This action cannot be undone.</p>
                  </div>
                </div>
              </div>
              <div class="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                <router-link to="/dashboard" class="inline-flex w-full justify-center  border border-transparent bg-rose-500 px-4 py-2 text-base font-medium text-white shadow  hover:bg-rose-600 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm" @click="open = false">Go to Dashboard</router-link> 
                <button type="button" class="mt-3 inline-flex w-full justify-center shadow    bg-white px-4 py-2 text-base font-medium text-custom-text hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-rose-600 focus:ring-offset-2 sm:mt-0 sm:w-auto sm:text-sm" @click="open = false" ref="cancelButtonRef">Later</button>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup>
import { ref } from 'vue'
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { BellAlertIcon } from '@heroicons/vue/24/outline'
import {useStore} from 'vuex';

const store = useStore();
const open = $ref(false)


// setInterval(() => {
//     console.log(store.state.openModalModule.modal);
//     console.log(open,'...');
// }, 3000) 
setTimeout(() => {
 store.state.openModalModule.modal === false ? open = true : open = false ;
}, 4000)

</script>