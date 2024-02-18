<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
<style>
.page-enter-active,
.page-leave-active {
  transform: translateX(0px);
  transition: all 0.6s;
}
.page-enter-from,
.page-leave-to {
  transform: translateX(-1000px);
}
</style>