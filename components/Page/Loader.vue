<template>
    <div class="fixed z-50 inset-0 w-dvw h-dvh loader" ref="loader">
        <div class="absolute inset-0  w-dvw h-dvh bg-peach loader-frame"></div>
        <div class="absolute inset-0  w-dvw h-dvh flex justify-center items-center text-peach-light">
            <div class="w-20 h-20 loader-spin">
                <svg class="animate-spin-slow" viewBox="0 0 182 190" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M91 0L102.156 60.6669L146.84 18.1434L120.206 73.781L181.35 65.6434L127.1 95L181.35 124.357L120.206 116.219L146.84 171.857L102.156 129.333L91 190L79.8445 129.333L35.1604 171.857L61.7945 116.219L0.649628 124.357L54.9 95L0.649628 65.6434L61.7945 73.781L35.1604 18.1434L79.8445 60.6669L91 0Z"/>
                </svg>
            </div>
            
        </div>
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
                duration: 3,
                ease: "power3.inOut"
            },
        })
        .to('.loader-spin', { scale:100 })
        .to('.loader-spin', { opacity:0, duration: 1 }, 1)
        .to('.loader-frame', { opacity:0, duration: 1 }, 1)
        .set(loader.value, { display: 'none', pointerEvents: 'none'})
    })
}
</script>

<style lang="scss" scoped>

</style>