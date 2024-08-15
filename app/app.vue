<script setup lang="ts">
import { appName } from "~/constants";

useHead({
  title: appName,
  titleTemplate: (title) => (title !== appName ? `${appName} | ${title}` : title),
  htmlAttrs: {
    lang: "en",
  },
});
</script>

<template>
  <VitePwaManifest />
  <NuxtLayout>
    <NuxtLoadingIndicator />
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
