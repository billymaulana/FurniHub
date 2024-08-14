<script setup lang="ts">
useHead({
  htmlAttrs: {
    lang: 'en',
  },
  title: 'FurniHub',
  titleTemplate: title => title !== 'FurniHub' ? `${title} · FurniHub` : title,
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'description', content: 'Discover premium furniture for every room at FurniHub. Shop stylish, affordable, and high-quality pieces to elevate your home décor. Transform your space with our curated collection, designed to blend comfort with elegance.' },
    { name: 'msapplication-TileColor', content: '#3aa39f' },
    { name: 'theme-color', content: '3aa39f' },
  ],
  link: [
    { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
    { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
    { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
    { rel: 'manifest', href: '/site.webmanifest' },
    { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#3aa39f' },
    { rel: 'icon', href: '/favicon.ico', sizes: 'any' },
  ],
  noscript: [
    { children: 'JavaScript is required' },
  ],

})
</script>

<template>
  <div>
    <NuxtPage />
  </div>
</template>

<style>
html,
body,
#__nuxt {
  height: 100vh;
  margin: 0;
  padding: 0;
  background: #fff;
  color: #17183B;
  color-scheme: light;
}
</style>
