<template>
    <div class="border-t bg-wood-500">
        <div class="px-8 md:px-12 max-w-6xl mx-auto py-6 2xl:max-w-7xl">
            <div class="flex-col  lg:pt-16 pb-2 gap-y-12 ">
                <p class="font-bold font-serif text-black lg:text-9xl text-2xl">
                    smart core.
                </p>
                <nav class="flex-col flex lg:flex-row justify-between gap-2 mt-12 lg:mt-24 text-sm text-black"> 
                    <LinkPrimary to="/overview">Представление</LinkPrimary>
                    <LinkPrimary to="/about">О нас</LinkPrimary>
                    <LinkPrimary to="/blog">Блог</LinkPrimary>
                    <LinkPrimary to="/team">Команда</LinkPrimary>
                    <LinkPrimary to="/contact">Свяжитесь с нами</LinkPrimary>
                </nav>
            </div>
            <div class="flex-col flex border-t md:pt-6 pb-12 pt-8">
                <p class="text-slate-500 md:mt-0 mt-6 text-sm font-medium">
                    © {{ currentDate.getFullYear() }} TIKSAN GROUP
                </p>
            </div>
        </div>
    </div>
</template>

<script setup>
const currentDate = new Date
</script>