<template>
    <div class="rounded-full border-2 border-white bg-peach px-4 py-1 text-white text-lg">
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