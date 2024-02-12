<template>
    <div class="h-dvh">
        <div class="h-full w-full max-w-4xl mx-auto flex flex-col justify-center">
            <div class="w-full relative">
                <div class="star absolute z-10 w-[20rem] h-[20rem] top-[7%] right-0 flex justify-center items-center translate-x-1/2">
                    <canvas ref="canvas" class=" hover:scale-110 transition-transform duration-300 ease-out"/>
                </div>
                <div class="text-4xl peach">Peach</div>
                <div class="flex justify-between w-[81%]">
                    <div class="uppercase pl-3 color overflow-hidden">Color of the year 2024</div>
                    <div class="uppercase nature overflow-hidden">Nature's soft touch</div>
                </div>
                <div class="text-4xl text-end fuzz">fuzz</div>
                <Tag text="#ffbe98" class="tag absolute top-12 -left-5 -rotate-6"/>
                <Tag text="peach" class="tag absolute bottom-[4rem] right-[7rem] rotate-6"/>
            </div>
        </div>
    </div>
</template>


<script setup>
// https://stackoverflow.com/questions/76634078/how-to-use-spline3d-with-vue-or-nuxt
import { Application } from '@splinetool/runtime';
import { gsap } from "gsap";
import SplitType from 'split-type';

// template ref
const canvas = ref(null)
const loaded = useLoaded()

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
    canvas.value.style="width:100%; height:100%;"
    loaded.value = true
    animateEnter()
    
})

const animateEnter = () => {
    SplitType.create('.peach', 
    {
        types: 'char', 
        charClass: 'char--wrapper'
    })
    SplitType.create('.fuzz', 
    {
        types: 'char', 
        charClass: 'char--wrapper'
    })
    SplitType.create('.color', 
    {
        types: 'word', 
        wordClass: 'color-char--wrapper'
    })
    SplitType.create('.nature', 
    {
        types: 'word', 
        wordClass: 'nature-char--wrapper'
    })
    
    document.querySelectorAll('.char--wrapper')
        .forEach(function(line){
            var wrapperDiv = document.createElement('div');
            wrapperDiv.classList.add('char')
            wrapperDiv.classList.add('text-4xl')
            wrapperDiv.innerHTML = line.innerHTML
            line.innerHTML = ""
            line.appendChild(wrapperDiv)
        })

    gsap.timeline({
        defaults: {
            duration: 2,
            ease: "bounce.out"
        },
    })
    .from('.char', { scaleY: 0, opacity: 0, stagger: 0.1, delay: 1.5 })
    .from('.color-char--wrapper', { opacity: 0, stagger: 0.1, duration: 1 }, 3.5)
    .from('.nature-char--wrapper', { opacity: 0, stagger: 0.1, duration: 1 }, 4.5)
    .fromTo('.tag', { 
        clipPath: 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)' 
    }, { 
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)', 
        duration: 0.6, 
        ease: "power3.inOut",
        stagger: 0.5
    }, '<+0.6s')
    .from('.star', { opacity: 0, scale: 0.5, ease: "elastic.out", duration: 3 }, '+=0.6s')
    .from('.project', { opacity: 0, duration: 1,  ease: "power4.out" })
}
</script>

<style lang="scss" scoped>

</style>