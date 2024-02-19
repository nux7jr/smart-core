<template>
    <section>
        <div class="mx-auto 2xl:max-w-7xl max-w-6xl md:px-12 px-8 py-24">
            <ol class="mt-16 sm:space-y-16 space-y-10" role="list">
                <li>
                    <h3 class="text-black font-bold font-serif text-3xl">
                        Все теги
                    </h3>
                    <ol class="mt-8 text-base" role="list">
                        <tempalte v-for="item in tags">
                            <li v-for="elem in item.tags" class="flex justify-between py-3">
                                <span class="hover:text-salmon-600 text-black capitalize duration-200 font-semibold">
                                    <NuxtLink :href="'/tags/' + elem.tag">{{ elem.text }}</NuxtLink>
                                </span>
                            </li>
                        </tempalte>
                    </ol>
                </li>
            </ol>
        </div>
    </section>
</template>
<script setup>
// const { data: tags } = await useApiFetch('/API/blog.json')
const { data: tags } = await useLocalFetch();
tags.value = tags.value.body;
</script>