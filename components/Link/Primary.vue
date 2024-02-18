<template>
    <NuxtLink :to="props.to" class="hover:text-salmon-600 duration-300">
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