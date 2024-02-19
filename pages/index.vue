<template>
    <div class="bg-wood-100">
        <section>
            <div class="items-center 2xl:max-w-7xl max-w-6xl md:px-12 mx-auto px-8 pt-32">
                <div class="border-b pb-5 text-balance">
                    <UiH1>
                        Привет от smart core!
                    </UiH1>
                    <p class="text-slate-600 mt-4 text-lg">
                        Ваша веб-студия, созданная с интеллектом и стилем
                    </p>
                </div>
            </div>
        </section>
        <section>
            <ArticleBig :post="posts[0]"></ArticleBig>
        </section>
        <section>
            <div class="2xl:max-w-7xl max-w-6xl md:px-12 mx-auto px-8 py-12">
                <div class="grid gap-4 grid-cols-1 lg:gap-y-24 sm:grid-cols-2 lg:grid-cols-3">
                    <template v-for="item in posts">
                        <ArticleSmall :post="item"></ArticleSmall>
                    </template>
                </div>
            </div>
        </section>
        <NewsletterDefault></NewsletterDefault>
    </div>
</template>

<script setup>
const { data: posts } = await usePromoFetch();
</script>
  