<template>
   <section>
      <div class="px-8 md:px-12 max-w-6xl mx-auto py-32 2xl:max-w-7xl items-center">
         <div class="max-w-xl mx-auto text-center">
            <UiH1>СВЯЗАТЬСЯ</UiH1>
         </div>
         <div class="max-w-xl mx-auto mt-12">
            <div class="mt-12 md:mt-0 md:flex-1">
               <form class="flex flex-col w-full">
                  <div class="space-y-2">
                     <div>
                        <label for="email-address" class="sr-only">Ваше имя</label> 
                        <input id="name" name="name"
                           required
                           type="text" autocomplete="text"
                           class="block w-full appearance-none border border-transparent h-10 bg-wood-500 px-3 py-2 placeholder-mist-900 text-black focus:border-salmon-500 focus:outline-none focus:ring-salmon-500 sm:text-sm"
                           placeholder="Ваше имя">
                     </div>
                     <div>
                        <label for="Your name" class="sr-only">Название компании</label> 
                        <input id="companyname"
                           name="companyname" type="text"
                           class="block w-full appearance-none border border-transparent h-10 bg-wood-500 px-3 py-2 placeholder-mist-900 text-black focus:border-salmon-500 focus:outline-none focus:ring-salmon-500 sm:text-sm"
                           placeholder="Название компании">
                     </div>
                     <div>
                        <label for="phone" class="sr-only">Номер телефона</label> 
                        <input id="phone" name="phone" type="text"
                           required
                           class="block w-full appearance-none border border-transparent h-10 bg-wood-500 px-3 py-2 placeholder-mist-900 text-black focus:border-salmon-500 focus:outline-none focus:ring-salmon-500 sm:text-sm"
                           placeholder="Номер телефона">
                     </div>
                     <div>
                        <label for="email-address" class="sr-only">Адрес электронной почты</label> 
                        <input id="email-address"
                           name="email-address" type="email" autocomplete="email" required
                           class="block w-full appearance-none border border-transparent h-10 bg-wood-500 px-3 py-2 placeholder-mist-900 text-black focus:border-salmon-500 focus:outline-none focus:ring-salmon-500 sm:text-sm"
                           placeholder="bestemail@gmail.com">
                     </div>
                     <div>
                        <label for="email-address" class="sr-only">Ваше сообщение</label> 
                        <textarea id="email-address"
                           name="email-address" autocomplete="email"
                           class="block w-full appearance-none border border-transparent  bg-wood-500 px-3 py-2 placeholder-mist-900 text-black focus:border-salmon-500 focus:outline-none focus:ring-salmon-500 sm:text-sm"
                           placeholder="Ваше сообщение (необязательно)"></textarea>
                     </div>
                  </div>
                  <div class="mt-3">
                     <button type="submit"
                        class="inline-flex justify-center py-1 px-6 h-10 items-center text-sm font-medium tracking-wide focus:outline-none bg-black text-white hover:bg-mist-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mist-600 active:bg-mist-700 active:text-white/80 disabled:opacity-30 disabled:hover:bg-mist-600 w-full">
                        связаться
                     </button>
                  </div>
               </form>
            </div>
         </div>
      </div>
   </section></template>
<script setup>
</script>
