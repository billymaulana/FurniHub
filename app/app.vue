<script setup lang="ts">
import { appName } from '~/constants'

useHead({
  title: appName,
  titleTemplate: title => (title !== appName ? `${appName} | ${title}` : title),
  htmlAttrs: {
    lang: 'en',
  },
})
</script>

<template>
  <VitePwaManifest />
  <NuxtLayout>
    <NuxtLoadingIndicator
      style="background: repeating-linear-gradient(to right, rgb(45 128 126) 0%, rgb(122 126 127) 50%, rgb(45 128 126) 100%);"
    />
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
html,
body,
#__nuxt {
  height: 100vh;
  margin: 0;
  padding: 0;
}
</style>
