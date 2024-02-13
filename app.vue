<template>
  <div>
    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>
  </div>
</template>

<script setup>
 useHead({
      title: 'Peach type challenge by Tiantsoa',
      meta: [
          { name: 'description', content: 'Peach type challenge by Tiantsoa' }
      ]
  })

  useSeoMeta({
      description: 'Peach type challenge by Tiantsoa',
      ogTitle: 'Peach Fuzz',
      ogDescription: 'Peach type challenge by Tiantsoa',
      ogImage: '/peach-type.jpg',
      ogImageWidth: 540,
      ogImageHeight: 303,
      ogUrl: 'https://peach-type.com/',
      twitterTitle: 'Peach Fuzz',
      twitterDescription: 'Peach type challenge by Tiantsoa',
      twitterImage: '/peach-type.jpg',
      twitterCard: 'summary'
  })


</script>