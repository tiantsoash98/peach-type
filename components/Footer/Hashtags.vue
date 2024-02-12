<template>
    <div class="hashtags relative overflow-hidden">
        <a href="https://www.facebook.com/photo/?fbid=760118536170062&set=a.553403420174909" target="_blank">
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
        </a>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.hashtag {
    &__wrapper {
        animation: hashtag-loop 7s linear infinite;
        -webkit-animation: hashtag-loop 7s linear infinite; 
    }

    @-webkit-keyframes hashtag-loop { 
        0% {
            transform: translateX(0%);
        }
        100% {
            transform: translateX(-100%);
        }
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