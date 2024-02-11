<template>
    <div class="fixed z-50 inset-0 w-dvw h-dvh loader" ref="loader">
        <div class="absolute inset-0  w-dvw h-dvh bg-peach loader-frame"></div>
    </div>
</template>

<script setup>
import { gsap } from "gsap";

const loaded = useLoaded()
const loader = ref(null)

watch(loaded, (newVal) => {
    if(newVal == true){
        close();
    }
})

const close = () => {
    return new Promise((resolve) => {
        gsap.timeline({
            onComplete: () => {
                loader.value.classList.add('loaded')
                resolve()
            },
            defaults: {
                duration: 1,
                ease: "power2.inOut"
            },
        })
        .to('.loader-frame', { opacity:0 })
    })
}
</script>

<style lang="scss" scoped>

</style>