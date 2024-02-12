<template>
    <div>
        <PageMobile/>
        <PageLoader/>

        <HeaderMain />

        <main id="page">
            <slot />
        </main>

        <FooterMain/>
    </div>
</template>

<script setup>
</script>
