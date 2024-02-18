<template>
    <section>
        <div class="mx-auto 2xl:max-w-7xl max-w-6xl md:px-12 px-8 py-24">
            <ol class="mt-16 sm:space-y-16 space-y-10" role="list">
                <li>
                    <div class="inline">
                        <h3 class="text-black font-bold font-serif text-3xl inline">
                            Поиск по тегу: 
                        </h3>
                    </div>
                    <span>{{ route.params.tag }}</span>
                    <TagDefault></TagDefault>
                    <ol class="mt-8 text-base" role="list">
                        <li class="flex justify-between py-3" aria-label="Strokes and fills on page 21">
                            <NuxtLink class="flex flex-col lg:flex-row w-full justify-between py-3 group font-serif"
                                to="/blog/1" title="The Secret Garden of Elsie">
                                <span class="font-semibold text-black group-hover:text-salmon-600" aria-hidden="true">The
                                    Secret Garden of Elsie
                                </span>
                                <span class="text-black group-hover:text-salmon-600" aria-hidden="true">Sat Jul 01 </span>
                            </NuxtLink>
                        </li>
                    </ol>
                </li>
            </ol>
        </div>
    </section>
</template>
<script setup>
const route = useRoute()


</script>