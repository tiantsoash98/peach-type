<template>
    <div class="h-dvh" id="draggable">
        <div class="h-full w-full max-w-4xl mx-auto flex flex-col justify-center">
            <div class="w-full relative">
                <div class="star absolute z-10 w-[20rem] h-[20rem] top-[7%] right-0 flex justify-center items-center translate-x-1/2">
                    <canvas ref="canvas" class=" hover:scale-110 transition-transform duration-300 ease-out"/>
                </div>
                <div class="text-4xl peach" id="peach">Peach</div>
                <div class="flex justify-between w-[81%]">
                    <div class="uppercase pl-3 color overflow-hidden">Color of the year 2024</div>
                    <div class="uppercase nature overflow-hidden">Nature's soft touch</div>
                </div>
                <div class="text-4xl text-end fuzz" id="fuzz">fuzz</div>
                <Tag text="#ffbe98" containerId="draggable" class="tag absolute top-12 -left-5 -rotate-6 "/>
                <Tag text="peach" containerId="draggable" class="tag absolute bottom-[4rem] right-[7rem] rotate-6"/>
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

onBeforeUnmount(() => {
    animateExit()
})

const animateEnter = () => {
    SplitType.create('.peach', 
    {
        types: 'word, char', 
        charClass: 'peach--wrapper'
    })
    SplitType.create('.fuzz', 
    {
        types: 'word, char', 
        charClass: 'fuzz--wrapper'
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
    
    let index = 0;
    document.querySelectorAll('.peach--wrapper')
        .forEach(function(item){
            var wrapperDiv = document.createElement('div');
            wrapperDiv.classList.add('peach-char')
            wrapperDiv.classList.add('text-4xl')
            wrapperDiv.classList.add('origin-bottom')
            wrapperDiv.setAttribute('data-index', index)
            wrapperDiv.setAttribute('data-text', item.innerHTML)
            wrapperDiv.innerHTML = item.innerHTML
            item.innerHTML = ""
            item.appendChild(wrapperDiv)

            index++;
        })

    index = 0
    document.querySelectorAll('.fuzz--wrapper')
        .forEach(function(item){
            var wrapperDiv = document.createElement('div');
            wrapperDiv.classList.add('fuzz-char')
            wrapperDiv.classList.add('text-4xl')
            wrapperDiv.classList.add('origin-bottom')
            wrapperDiv.setAttribute('data-index', index)
            wrapperDiv.setAttribute('data-text', item.innerHTML)
            wrapperDiv.innerHTML = item.innerHTML
            item.innerHTML = ""
            item.appendChild(wrapperDiv)

            index++;
        })

    var tL = gsap.timeline({
        defaults: {
            duration: 1.5,
            ease: "power4.out"
        },
    })

    let delay = 1.5

    tL.from('.hashtags', { opacity: 0, yPercent: 150, duration: 1 }, delay)
    tL.from('.project', { opacity: 0, yPercent: 150, duration: 1 }, delay)
    
    let duration = 2
    let stagger = 0.05
    let yPercent = 5
    let yPercentIncrement = 10
    document.querySelectorAll('.peach-char')
        .forEach(function(item){
            tL.from(item, { rotateX: '90deg', opacity: 0, yPercent: yPercent, duration: duration, delay: delay}, 0)
            delay += item.dataset.index * stagger
            yPercent += item.dataset.index * yPercentIncrement
        })

    delay = 2
    yPercent = 5
    document.querySelectorAll('.fuzz-char')
        .forEach(function(item){
            tL.from(item, { rotateX: '90deg', opacity: 0, yPercent: yPercent, duration: duration, delay: delay}, 0)
            delay += item.dataset.index * stagger
            yPercent += item.dataset.index * yPercentIncrement
        })
    
    tL.from('.color-char--wrapper', { opacity: 0, yPercent: 100, stagger: 0.08, duration: 1 }, delay + 1)
    tL.from('.nature-char--wrapper', { opacity: 0, yPercent: 100, stagger: 0.08, duration: 1 }, '<+1s')
    tL.from('.star', { opacity: 0, scale: 0.5, ease: "elastic.out", duration: 3 }, '+=0.6s')
    tL.fromTo('.tag', { 
        clipPath: 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)' 
    }, { 
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)', 
        duration: 0.8, 
        ease: "power4.inOut",
        stagger: 0.5
    },'<+1s')

    return tL
}

const animateExit = () => {
    var tL = gsap.timeline({
        defaults: {
            duration: 1.5,
            ease: "elastic.out"
        },
    })
    tL.to('.star', { opacity: 0, scale: 0, ease: "elastic.out" })
}
</script>

<style lang="scss">
.peach-char {
    &[data-text="e"]{
        animation: swing 10s infinite 10s;
        animation-fill-mode: both;
    }
}
// https://www.tutorialspoint.com/css/css_animation_swing.htm
@keyframes swing { 
    20% { transform: rotate(10deg); } 
    40% { transform: rotate(-10deg); } 
    60% { transform: rotate(5deg); } 
    80% { transform: rotate(-5deg); } 
    100% { transform: rotate(0deg); } 
}
</style>