<template>
    <div>
        <PageLoader :loaded="loaded" ></PageLoader>
        
        <HeaderMain/>

        <main>
            <slot />
        </main>

        <FooterMain/>
    </div>
</template>

<script setup>
const loaded = ref(false)

onMounted(() => {
    loaded.value = true
})
</script>
