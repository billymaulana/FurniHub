<script setup lang="ts"></script>

<template>
  <header class="header">
    <nav class="navbar">
      <NuxtLink class="navbar-brand" to="/">
        <NuxtImg class="navbar-brand-logo" src="/logo-furnihub.svg" alt="Logo FurniHub" />
      </NuxtLink>

      <ul class="navbar-nav">
        <li class="navbar-item">
          <NuxtLink to="/shop" class="navbar-item-link"> SHOP </NuxtLink>
        </li>
        <li class="navbar-item">
          <NuxtLink to="/collective" class="navbar-item-link" disabled>
            COLLECTIVE
          </NuxtLink>
        </li>
        <li class="navbar-item">
          <NuxtLink to="/about" class="navbar-item-link" disabled> ABOUT US </NuxtLink>
        </li>
        <li class="navbar-item">
          <NuxtLink to="/contact" class="navbar-item-link" disabled> CONTACT </NuxtLink>
        </li>
        <li class="navbar-item">
          <NuxtLink to="/faq" class="navbar-item-link" disabled> FAQ'S </NuxtLink>
        </li>
      </ul>

      <div class="navbar-action">
        <button class="btn-search cursor-pointer">
          <NuxtIcon name="mynaui:search" size="1.75em" />
        </button>
        <button class="btn-wishlist cursor-pointer">
          <NuxtIcon name="mynaui:heart" size="1.75em" />
        </button>
        <button class="btn-cart cursor-pointer">
          <NuxtIcon name="mynaui:cart" size="1.75em" class="icon-cart" />
          <span class="total-cart">0</span>
        </button>
        <button class="btn-profile cursor-pointer">
          <NuxtIcon name="mynaui:user" size="1.75em" />
        </button>
      </div>
    </nav>
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
    padding: $navbar-padding;
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
        .navbar-item-link {
          font-size: 14px;
          line-height: 16px;
          text-decoration: none;
          color: $grey-space;
          font-weight: 600;
          &:hover,
          &:focus {
            color: $green-verdigris;
            transition: color 0.35s ease-in-out;
          }

          &.router-link-active,
          &.router-link-exact-active {
            color: $green-verdigris;
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
      gap: 0.375rem;

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
          right: 11px;
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
