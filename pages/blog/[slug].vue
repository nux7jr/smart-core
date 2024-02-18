<template>
    <div class="bg-wood-100">
        <section>
            <div class="mx-auto 2xl:max-w-screen-2xl md:px-12 px-8 grid py-12 space-y-6">
                <img class="w-full aspect-video h-full object-cover" src="/images/home/1.jpg" alt="ImageAlt.">
            </div>
        </section>
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl px-8 md:px-12 mx-auto pb-24">
            <div class="lg:col-span-3 hidden lg:block">
                <div id="table-of-contents" class="sticky top-48">
                    <ul class="space-y-3 text-xs">
                        <li><a href="#choose-your-fonts" class="text-black hover:underline">Выберите свои шрифты</a></li>
                        <li><a href="#define-custom-font-family" class="text-black hover:underline">Определите пользовательский шрифт</a></li>
                        <li><a href="#define-custom-styles" class="text-black hover:underline">Определите пользовательские стили</a></li>
                        <li><a href="#apply-custom-styles" class="text-black hover:underline">Примените пользовательские стили</a></li>
                        <li><a href="#conclusion" class="text-black hover:underline">Заключение</a></li>
                    </ul>
                </div>
            </div>
            <section class="relative bg-wood-100 lg:-mt-96 lg:p-8 overflow-hidden lg:col-span-9 ">
                <div class="grid grid-cols-1 gap-10 xl:gap-24">
                    <div class="mx-auto bg-wood-100">
                        <div>
                            <h1 class="text-black font-serif font-bold lg:text-4xl text-xl uppercase">Призрак Willow Creek</h1>
                        </div>
                        <div class="items-center inline-flex mt-10">
                            <div class="items-center inline-flex space-x-1">
                                <p class="font-medium text-gray-900 text-sm">Акира Накамура</p>
                                <span aria-hidden="true">·</span>
                                <div class="flex text-gray-500 text-sm"><time datetime="Tue Jul 18">Вт, 18 июля</time></div>
                            </div>
                        </div>
                        <div class="flex flex-wrap gap-3 mt-6">
                            <TagDefault></TagDefault>
                            <TagDefault></TagDefault>
                            <TagDefault></TagDefault>
                            <TagDefault></TagDefault>
                        </div>
                    </div>
                    <div>
                        <p>
                            <em class="font-medium text-black font-serif text-2xl uppercase">Странные явления и видения призрачной фигуры в небольшом городе Willow Creek приводят группу подростков в захватывающее приключение для раскрытия правды.</em>
                        </p>
                    </div>
                    <div>
                        <div class="prose-styles">
                            <!-- Ваш текст -->
                        </div>
                    </div>
                </div>
            </section>
        </div>
        <NewsletterDefault></NewsletterDefault>

    </div>
</template>
