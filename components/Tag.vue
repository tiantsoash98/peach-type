<template>
    <div ref="tag" class="rounded-full border-2 border-white bg-peach px-4 py-1 text-white text-lg  transition-transform duration-200 ease-out hover:rotate-0 hover:scale-105">
        {{ text }}
    </div>
</template>

<script setup>
const tag = ref(null)
import { Draggable } from 'gsap/Draggable';

const props = defineProps({
    text: String,
    containerId: String
})

onMounted(() => {
    if(props.containerId) {
        Draggable.create(tag.value, {
            bounds: `#${props.containerId}`,
            inertia: false
        })
    }
})

</script>

<style lang="scss" scoped>

</style>