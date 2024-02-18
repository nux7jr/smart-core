<template>
    <section>
        <div class="mx-auto 2xl:max-w-7xl max-w-6xl md:px-12 px-8 py-24">
            <ol class="mt-16 sm:space-y-16 space-y-10" role="list">
                <li>
                    <div class="flex justify-left align-center items-center gap-2">
                        <h3 class="text-black font-bold font-serif text-3xl inline">
                            Поиск по тегу: 
                        </h3>
                        <TagDefault to="mikhail-tretyakov" class="mt-2">
                            Михаил Третьяков
                        </TagDefault>
                    </div>
                    <ol class="mt-8 text-base" role="list">
                        <li v-for="item in posts" class="flex justify-between py-3" :aria-label="item.title">
                            <NuxtLink class="flex flex-col lg:flex-row w-full justify-between py-3 group font-serif"
                                :to="'/blog/' + item.slug" :title="item.title">
                                <span class="font-semibold text-black group-hover:text-salmon-600" aria-hidden="true">
                                    {{ item.title }}
                                </span>
                                <span class="text-black group-hover:text-salmon-600" aria-hidden="true">
                                    {{ item.date }}    
                                </span>
                            </NuxtLink>
                        </li>
                    </ol>
                </li>
            </ol>
        </div>
    </section>
</template>
<script setup>
const route = useRoute();
// <span>{{ route.params.tag }}</span>
const { data: posts } = await useApiFetch('/API/blog.json');
</script>