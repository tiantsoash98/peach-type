<template>
    <div class="h-screen">
        <div class="h-full w-full max-w-4xl mx-auto flex flex-col justify-center">
            <div class="w-full relative">
                <div class="text-4xl">Peach</div>
                <div class="flex justify-between w-[81%]">
                    <div class="uppercase pl-3">Color of the year 2024</div>
                    <div class="uppercase">Nature's soft touch</div>
                </div>
                <div class="text-4xl text-end">fuzz</div>
                <div class="absolute h-full top-0 right-0 flex justify-center items-center translate-x-1/2 pointer-events-none">
                    <canvas ref="canvas" class="scale-[.4]"/>
                </div>
                <Tag text="#ffbe98" class="absolute top-12 -left-5 -rotate-6"/>
                <Tag text="peach" class="absolute bottom-[4rem] right-[7rem] rotate-6"/>
            </div>
        </div>
    </div>
</template>


<script setup>
// https://stackoverflow.com/questions/76634078/how-to-use-spline3d-with-vue-or-nuxt
import { Application } from '@splinetool/runtime';

// template ref
const canvas = ref(null)

// spline state
const state = reactive({
    spline: {
        scene: "https://prod.spline.design/tVOhyNDmtFn-BYXr/scene.splinecode",
        app: null,
        isLoaded: false,
    },
})

onMounted(async () =>{
    const app = new Application(canvas.value);
    await app.load(state.spline.scene)
    state.spline.app = app;
    state.spline.isLoaded = true;
})
</script>

<style lang="scss" scoped>

</style>