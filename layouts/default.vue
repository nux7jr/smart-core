<template>
    <div class="layout">
      <LoaderPage></LoaderPage>
      <header>  
        <TheHeader></TheHeader>
      </header>
      <main>
        <slot />
      </main>
        <footer>
        <TheFooter></TheFooter>
      </footer>
    </div>
</template>
<style scoped>
.layout {
  overflow-x: hidden;
}
</style>