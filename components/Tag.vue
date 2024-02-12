<template>
    <div class="rounded-full border-2 border-white bg-peach px-4 py-1 text-white text-lg  transition-transform duration-200 ease-out hover:rotate-0 hover:scale-105">
        {{ text }}
    </div>
</template>

<script setup>
const props = defineProps({
    text: String
})

</script>

<style lang="scss" scoped>

</style>