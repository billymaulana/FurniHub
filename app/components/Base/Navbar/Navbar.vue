<script setup lang="ts">
import { navMenu } from '~/constants'

const router = useRouter()
const cartStore = useCartStore()
const { totalItems } = storeToRefs(cartStore)

function checkPaths(path1: string, segment: string): boolean {
  const normalizedPath1: string = path1.replace(/\/+$/, '').toLowerCase()
  const normalizedSegment: string = segment.toLowerCase()

  const parts1: string[] = normalizedPath1.split('/').filter(Boolean)

  return parts1.includes(normalizedSegment)
}
</script>

<template>
  <header class="header">
    <div class="container">
      <nav class="navbar">
        <NuxtLink class="navbar-brand" to="/">
          <NuxtImg class="navbar-brand-logo" src="/images/logo-furnihub.svg" alt="Logo FurniHub" />
        </NuxtLink>

        <ul v-if="navMenu.length > 0" class="navbar-nav">
          <li v-for="(item, index) in navMenu" :key="index" class="navbar-item">
            <NuxtLink
              :to="{ path: item.pathLink }" class="navbar-item-link"
              :active="checkPaths(router.currentRoute.value.fullPath, item.pathName)"
            >
              {{ item.pathName }}
            </NuxtLink>
          </li>

          <div class="navbar-action">
            <button class="btn-wishlist cursor-pointer">
              <NuxtIcon name="mynaui:search" size="1.75em" />
            </button>
            <button class="btn-wishlist cursor-pointer">
              <NuxtIcon name="mynaui:heart" size="1.75em" />
            </button>
            <button class="btn-cart cursor-pointer">
              <NuxtIcon name="mynaui:cart" size="1.75em" class="icon-cart" />
              <span class="total-cart">{{ totalItems }}</span>
            </button>
            <button class="btn-profile cursor-pointer">
              <NuxtIcon name="mynaui:user" size="1.75em" />
            </button>
          </div>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style scoped lang="scss">
.header {
  position: relative;
  width: 100%;
  border-bottom: 1px solid $grey;
  .navbar {
    background-color: $white;
    width: 100%;
    position: sticky;
    top: 0;
    z-index: 50;
    backdrop-filter: blur(8px);
    margin-bottom: 0;
    height: $navbar-height;
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 80rem;
    margin: 0 auto;

    .navbar-brand {
      gap: 0.375rem;
      display: flex;
      align-items: center;
      .navbar-brand-logo {
        height: 20px;
      }
    }

    .navbar-nav {
      display: flex;
      width: 100%;
      align-items: center;
      height: 100%;
      column-gap: 2rem;
      white-space: nowrap;
      .navbar-item {
        list-style: none;
        margin: 0;
        padding: 0;
        .navbar-item-link {
          font-size: 14px;
          line-height: 16px;
          text-decoration: none;
          color: $grey-space;
          font-weight: 600;
          &:hover,
          &:focus {
            color: $green-celadon;
            transition: color 0.35s ease-in-out;
          }

          &[active='true'],
          &.router-link-active {
            color: $green-celadon;
          }

          &[disabled] {
            color: $grey-french !important;
          }
        }
      }
    }

    .navbar-action {
      justify-content: flex-end;
      display: flex;
      align-items: center;
      gap: 0.75rem;

      .btn-cart {
        position: relative;
        .icon-cart {
          position: relative;
          transform: scaleX(-1);
        }
        .total-cart {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background-color: $red-imperial;
          color: $white;
          font-size: 8px;
          position: absolute;
          top: 0px;
          right: 6px;
          display: flex;
          justify-content: center;
          align-items: center;
          text-align: center;
          letter-spacing: -0.5px;
        }
      }

      .btn-profile {
        border-left: 1px solid $grey-french;
        padding-left: 6px;
        margin-left: 6px;
      }
    }

    @media (max-width: 768px) {
      .navbar-action {
        display: none;
      }
    }
    @media (max-width: 1024px) {
      .navbar-nav {
        display: none;
      }
    }
    @media (min-width: 1024px) {
      .navbar-brand,
      .navbar-nav,
      .navbar-action {
        flex: 1 1 0%;
      }
    }
  }
}
</style>
