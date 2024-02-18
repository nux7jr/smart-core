<template>
   <section>
      <div class="px-8 md:px-12 max-w-6xl mx-auto py-24 2xl:max-w-7xl">
         <div class="max-w-5xl">
            <UiH1>Обзор</UiH1>
         </div>
         <ol role="list" class="mt-16 flex flex-col gap-12 lg:gap-24">
            <li>
               <h3 class="font-serif text-2xl font-bold text-black uppercase">Главные страницы</h3>
               <ol role="list" class="mt-4 gap-2 lg:gap-6 text-sm flex flex-col lg:flex-row items-center">
                  <li> 
                     <LinkPrimary class="hover:text-salmon-600 duration-300" to="/"> Главная </LinkPrimary> 
                  </li>
                  <li> 
                     <LinkPrimary class="hover:text-salmon-600 duration-300" to="/about">
                        О нас
                     </LinkPrimary>
                  </li>
                  <li> <LinkPrimary class="hover:text-salmon-600 duration-300" to="/contact">
                        Контакты
                     </LinkPrimary>
                  </li>
                  <li> <LinkPrimary class="hover:text-salmon-600 duration-300" to="/author">
                        Автор
                     </LinkPrimary>
                  </li>
                  <li> <LinkPrimary class="hover:text-salmon-600 duration-300" to="/team">
                        Команда
                     </LinkPrimary>
                  </li>
               </ol>
            </li>
            <li>
               <h3 class="font-serif text-2xl font-bold text-black uppercase">
                  Страницы блога
               </h3>
               <ol role="list" class="mt-4 gap-2 lg:gap-6 text-sm flex flex-col lg:flex-row items-center">
                  <li> 
                     <LinkPrimary class="hover:text-salmon-600 duration-300" to="/blog">
                        Блог
                     </LinkPrimary>
                  </li>
                  
                  <li> 
                     <LinkPrimary class="hover:text-salmon-600 duration-300" to="/blog/1">
                        Пост блога
                     </LinkPrimary>
                  </li>
                  <li> 
                     <LinkPrimary class="hover:text-salmon-600 duration-300" to="/tags">
                        Индекс тегов
                     </LinkPrimary>
                  </li>
                  <li> 
                     <LinkPrimary class="hover:text-salmon-600 duration-300" to="/tags/HTML">
                        Категория тегов
                     </LinkPrimary>
                  </li>
               </ol>
            </li>
            <li>
               <h3 class="font-serif text-2xl font-bold text-black uppercase">
                  Вспомогательные страницы
               </h3>
               <ol role="list" class="mt-4 gap-2 lg:gap-6 text-sm flex flex-col lg:flex-row items-center">

                  <li> 
                     <LinkPrimary class="hover:text-salmon-600 duration-300" to="/privacy">
                        Политика конфиденциальности
                     </LinkPrimary>
                  </li>
                  <li> 
                     <LinkPrimary class="hover:text-salmon-600 duration-300" to="/404">
                        404
                     </LinkPrimary>
                  </li>
               </ol>
            </li>
         </ol>
      </div>
   </section>
</template>
<script setup>
</script>
 