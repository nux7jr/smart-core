<template>
    <NuxtLink :to="'/blog/' + post.slug" :title="post.title" class="group">
        <article class="h-full flex-1">
            <div class="w-full block lg:col-span-2">
                <img class="h-full object-cover aspect-[384/246] bg-center" :src="'/images/home/' + post.preview" :alt="post.title">
            </div>
            <div class="w-full flex flex-col items-start justify-between -mt-20 p-4">
                <div class="w-full p-4 lg:p-8 bg-wood-100 h-full flex flex-col justify-between text-balance">
                    <div>
                        <p class="font-medium text-black uppercase text-xl font-serif">{{ post.title }}</p>
                        <p class="text-slate-600 line-clamp-2 mt-12 text-sm">{{ post.desc }}</p>
                    </div>
                    <div class="items-center inline-flex mt-1 space-x-1">
                        <p class="font-medium text-gray-900 text-xs">{{ post.author }}</p>
                        <span aria-hidden="true">·</span>
                        <div class="flex text-gray-500 text-xs">
                            <time :datetime="post.date">{{ post.date }}</time>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    </NuxtLink>
</template>
<script setup>
const props = defineProps({
    post: {
        type: Object,
    }
})
</script>