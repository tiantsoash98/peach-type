<template>
    <div class="relative overflow-hidden">
        <div class="hashtag__wrapper">
            <span class="mr-12">#peachtype</span>
            <span class="mr-12">#72dpichallenge</span>
            <span class="mr-12">#typographywebsite</span>
        </div>
        <div class="absolute start-full top-0 hashtag__wrapper">
            <span class="mr-12">#peachtype</span>
            <span class="mr-12">#72dpichallenge</span>
            <span class="mr-12">#typographywebsite</span>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.hashtag {
    &__wrapper {
        animation: hashtag-loop 7s  linear infinite;
    }

    @keyframes hashtag-loop {
        0% {
            transform: translateX(0%);
        }
        100% {
            transform: translateX(-100%);
        }
    }
}
</style>