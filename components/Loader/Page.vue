<template>
    <div class="loader bg-wood-500" ref="$loader"></div>
</template>
<script setup>
import { gsap, CSSPlugin } from 'gsap/all'
gsap.registerPlugin(CSSPlugin);

const $loader = ref(null);
const route = useRoute();
watch(() => route.path, async () => {
    document.querySelector('html').classList.add('is-transitioning');
    await loaderIn();
    loaderAway();
    document.querySelector('html').classList.remove('is-transitioning');
});
onMounted(() => {
    gsap.set($loader.value, {
        scaleX: 0,
        rotation: 10,
        xPercent: -5,
        yPercent: -50,
        transformOrigin: 'left center',
        autoAlpha: 1
    });
})

function loaderAway() {
    return gsap.to($loader.value, {
        duration: 0.6,
        scaleX: 0,
        xPercent: 5,
        rotation: -10,
        transformOrigin: 'right center',
        ease: 'power4.inOut'
    });
}
function loaderIn() {
    return gsap.fromTo($loader.value,
        {
            rotation: 10,
            scaleX: 0,
            xPercent: -5
        },
        {
            duration: 0.6,
            xPercent: 0,
            scaleX: 1,
            rotation: 0,
            ease: 'power4.inOut',
            transformOrigin: 'left center'
        });
}
</script>
