<template>
    <div class="bg-wood-100">
        <section>
            <div class="mx-auto 2xl:max-w-screen-2xl md:px-12 px-8 grid py-12 space-y-6">
                <img class="w-full aspect-video h-full object-cover" :src="'/images/home/' + currentPost.preview"
                    :alt="currentPost.title">
            </div>
        </section>
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl px-8 md:px-12 mx-auto pb-24">
            <div class="lg:col-span-3 hidden lg:block">
                <div id="table-of-contents" class="sticky top-48">
                    <ul class="space-y-3 text-xs">
                        <li>
                            <a href="#todo" class="text-black hover:underline">todo доделать поиск по h2</a>
                        </li>
                    </ul>
                </div>
            </div>
            
            <section class="relative bg-wood-100 lg:-mt-96 lg:p-8 overflow-hidden lg:col-span-9 ">
                <div class="grid grid-cols-1 gap-10 xl:gap-24">
                    <div class="mx-auto bg-wood-100">
                        <div>
                            <h1 class="text-black font-serif font-bold lg:text-4xl text-xl uppercase">{{ currentPost.title
                            }}</h1>
                        </div>
                        <div class="items-center inline-flex mt-10">
                            <div class="items-center inline-flex space-x-1">
                                <p class="font-medium text-gray-900 text-sm">{{ currentPost.author }}</p>
                                <span aria-hidden="true">·</span>
                                <div class="flex text-gray-500 text-sm">
                                    <time :datetime="currentPost.date">{{ currentPost.date }}</time>
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-wrap gap-3 mt-6">
                            <template v-for="item in currentPost.tags">
                                <TagDefault :to="item.tag">{{ item.text }}</TagDefault>
                            </template>
                        </div>
                    </div>
                    <div>
                        <p>
                            <em class="font-medium text-black font-serif text-2xl uppercase">{{ currentPost.desc }}</em>
                        </p>
                    </div>
                    <div>
                        <div class="prose-styles" v-html="currentPost.body">
                        </div>
                </div>
            </div>
        </section>
    </div>
    <NewsletterDefault></NewsletterDefault>
</div></template>
<script setup>
// const { data: posts } = await useApiFetch('/API/blog.json');
// const currentPost = posts.value[0];
const { data: posts } = await usePromoFetch();
const currentPost = posts.value[0];
</script>
  