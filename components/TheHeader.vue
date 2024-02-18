<template>
    <div class="mx-auto w-full justify-center fixed z-50 bg-wood-100 duration-50">
      <div class="mx-auto w-full flex flex-col lg:flex-row lg:items-center lg:justify-between px-8 py-3 md:px-12 max-w-6xl 2xl:max-w-7xl">
        <div class="items-center flex justify-between flex-row">
          <NuxtLink class="items-center font-bold inline-flex text-black font-serif text-2xl" to="/">
            smart core
          </NuxtLink>
          <button class="focus:outline-none focus:shadow-outline md:hidden" @click="open = !open" aria-expanded="open">
            <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path v-if="!open" d="M4 6h16M4 12h16M4 18h16" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
              <path v-else d="M6 18L18 6M6 6l12 12" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
            </svg>
          </button>
        </div>
        <nav :class="{ 'flex': open, 'hidden': !open }" class="flex-col items-center flex-grow lg:flex lg:flex-row gap-3 lg:gap-6 lg:justify-start text-sm text-black" aria-label="Main navigation">
          <LinkPrimary class="hover:text-salmon-600 lg:ml-auto" to="/overview">
            Представление
          </LinkPrimary>
          <LinkPrimary  to="/style">
            Стайлгайд
          </LinkPrimary>
          <LinkSecondary  to="/contact">
            Свяжитесь с нами
          </LinkSecondary>
        </nav>
      </div>
    </div>
  </template>
  
  <script setup>
    const open = ref(false);
  </script>
  
  <style>
  
  </style>
  