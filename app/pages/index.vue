<script setup lang="ts">
definePageMeta({
  layout: "home",
  title: "Home",
});
</script>

<template>
  <section class="hero">
    <div class="container">Hero</div>
  </section>
</template>

<style scoped lang="scss">
.hero {
  position: relative;
  min-height: calc(100vh - $navbar-height);
  height: 100%;
  width: 100%;
  background-color: $grey;
  padding: 2rem auto;
}
</style>
