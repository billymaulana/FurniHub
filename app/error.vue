<script setup>
const props = defineProps({
  error: Object,
});

const message = computed(() => String(props.error?.message || ""));
const is404 = computed(
  () => props.error?.statusCode === 404 || message.value?.includes("404")
);
const isDev = import.meta.dev;

function handleError() {
  return clearError({ redirect: "/" });
}
</script>

<template>
  <NuxtLayout>
    <div class="error-pages">
      <div class="error-title">
        {{ is404 ? "Page not found" : "An error occurred" }}
      </div>
      <div>
        Looks like you've followed a broken link or entered a URL that doesn't exist on
        this site.
      </div>
      <div v-if="isDev" class="error-details">
        {{ error }}
      </div>
      <button class="btn btn-primary" @click="handleError">Go Back</button>
    </div>
  </NuxtLayout>
</template>

<style scoped lang="scss">
.error-pages {
  text-align: center;
  width: 100%;
  height: calc(80vh);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column;
  .error-title {
    font-weight: bold;
    font-size: 3rem;
  }
  .error-details {
    width: 33.33%;
    text-wrap: wrap;
    background: #0b101b;
    overflow: hidden;
    white-space: pre-wrap;
    text-align: left;
    padding: 20px 20px;
    color: #2fcfc9;
    border-radius: 20px;
    margin-top: 30px;
    margin-bottom: 30px;
    letter-spacing: 1.5px;
  }
}
</style>
