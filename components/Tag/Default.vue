<template>
    <span class="bg-wood-500 px-3 py-1.5 text-xs h-8 text-black items-center flex">
        <NuxtLink :to="'/tags/' + props.to">
            <slot></slot>
        </NuxtLink>
    </span>
</template>
<script setup>
const props = defineProps({
    to: {
        type: String,
    }
})
</script>