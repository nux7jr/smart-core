<template>
    <section class="bg-wood-500">
        <div class="px-8 md:px-12 max-w-6xl mx-auto 2xl:max-w-7xl items-center py-24">
            <div class="grid grid-grid-cols-1 lg:grid-cols-2 justify-between lg:items-end text-balance">
                <div class="text-center lg:text-left">
                    <h2 class="text-black font-serif text-2xl uppercase font-semibold md:text-4xl">
                        ПОДПИШИТЕСЬ НА РАССЫЛКУ НОВОСТЕЙ
                    </h2>
                    <p class="mt-4 text-lg text-slate-600">
                        Станьте первыми, кто узнает о всех новостях
                    </p>
                </div>
                <div class="mt-12 lg:ml-auto">
                    <form class="flex flex-col lg:flex-row border-2 border-black overflow-hidden">
                        <label for="email-address" class="sr-only">Ваш емайл</label>
                        <input id="email-address" name="email-address" type="email" autocomplete="email" required
                            class="w-full border-white px-5 py-3 h-14 ring-inset placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-mist-700"
                            placeholder="bestemail@gmail.com">
                        <button type="submit"
                            class="inline-flex justify-center w-full lg:w-auto py-1 px-6 h-14 shrink-0 items-center text-sm font-medium tracking-wide focus:outline-none bg-black text-white hover:bg-mist-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mist-600 active:bg-mist-700 active:text-white/80 disabled:opacity-30 disabled:hover:bg-mist-600">
                            Подписаться
                        </button>
                    </form>
                    <p class="mt-3 text-sm text-black text-center lg:text-left">
                        Мы заботимся о защите ваших данных. Прочтите нашу
                        <NuxtLink to="/privacy" class="font-medium text-salmon-600 hover:text-black underline">Политику
                            конфиденциальности.
                        </NuxtLink>
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>