<template>
    <section>
        <div class="px-8 md:px-12 mx-auto py-36 2xl:max-w-7xl">
            <div class="relative w-full lg:pt-36">
                <div class="absolute inset-0 w-full">
                    <img class="object-cover w-full h-full aspect-video" src="/images/error/error.jpg" alt="error">
                </div>
                <div class="max-w-6xl p-4 md:p-10 mx-auto 2xl:max-w-7xl relative lg:mt-24">
                    <div class="max-w-xl p-4 sm:p-8 lg:p-10 lg:-mb-[4.5rem] bg-wood-100 text-balance">
                        <div class="w-full">
                            <h1 class="font-serif text-4xl font-bold uppercase lg:text-5xl text-black">
                                404 Мы потеряли эту страницу...
                            </h1>
                            <p class="mt-4 text-lg text-black">
                                К сожалению, страница, которую вы ищете, не существует или переехала.
                            </p>
                        </div>
                        <div class="flex gap-3 mt-6">
                            <NuxtLink
                                class="inline-flex justify-center py-1 px-6 h-10 items-center text-sm font-medium tracking-wide focus:outline-none bg-black text-white hover:bg-mist-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mist-600 active:bg-mist-700 active:text-white/80 disabled:opacity-30 disabled:hover:bg-mist-600"
                                to="/"> <span>Домой</span>
                            </NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>