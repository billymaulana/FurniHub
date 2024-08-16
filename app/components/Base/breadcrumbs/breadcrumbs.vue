<script setup lang="ts">
const props = defineProps({
  items: {
    type: Array as PropType<Array<{ pathName: string, pathLink?: string }>>,
    default: () => [],
  },
  separator: {
    type: String,
    default: '/',
  },
})
</script>

<template>
  <div v-if="props.items.length > 0" class="breadcrumb">
    <template v-for="(item, index) in props.items" :key="index">
      <NuxtLink
        :to="{ path: item.pathLink }" class="breadcrumb-item"
        :class="{ 'last-crumb': index === props.items.length - 1 }"
      >
        {{ item.pathName }}
      </NuxtLink>
      <span v-if="index !== props.items.length - 1" class="separator">
        {{ separator }}
      </span>
    </template>
  </div>
</template>

<style scoped lang="scss">
.breadcrumb {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.5rem;
  font-weight: 600;
  font-size: 0.875rem;
  .breadcrumb-item {
    color: $grey-french;
    text-decoration: none;
    &:hover {
      color: $grey-space;
    }
  }

  .last-crumb {
    color: $grey-space;
  }

  .separator {
    font-size: 0.875rem;
    color: $grey-french;
  }
}
</style>
