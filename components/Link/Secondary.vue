<template>
    <NuxtLink :to="props.to" class="inline-flex justify-center py-1 px-6 h-10 items-center text-sm font-light tracking-wide focus:outline-none bg-black text-white hover:bg-mist-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mist-600 active:bg-mist-700 active:text-white/80 disabled:opacity-30 disabled:hover:bg-mist-600">
        <slot></slot>
    </NuxtLink>
</template>
<script setup>
const props = defineProps({
    to: {
        type: String,
    }
})
</script>