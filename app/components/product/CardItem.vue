<script setup lang="ts">
import type { Product } from '~/types'

const props = defineProps({
  items: {
    type: Object as PropType<Product>,
    default: null,
  },
})
const { items } = toRefs(props)
const { formatMoney } = useMoneyMask()
const { addToCart } = useCartStore()
const { addToWishlist, isInWishlist } = useWishlistStore()
function navigateToDetails(items: Product) {
  navigateTo({ name: 'products-id', params: { id: items.productId } })
}
</script>

<template v-if="items">
  <div class="card-product-wrapper text-decoration-none">
    <div class="card-product">
      <div class="product-bg">
        <NuxtImg class="product-bg-img" :src="items.defaultImage" alt="furnihub product" />
        <button class="btn-add-wishlist" :class="{ 'is-wishlist': isInWishlist(items.productId) }" @click="addToWishlist(items)">
          <NuxtIcon name="mynaui:heart" size="1.5em" class="icon-wishlist" mode="svg" />
        </button>
        <div class="overlay" />
        <button class="btn-details" @click="navigateToDetails(items)">
          Details Product
        </button>
      </div>
      <div class="product-content">
        <div>
          <p class="product-content-title">
            {{ items.productName }}
          </p>
          <p class="product-content-category">
            {{ items.categoryName }}
          </p>
        </div>
        <div class="product-content-footer">
          <p class="product-content-price">
            Rp.{{ formatMoney(items.price) }}
          </p>
          <div class="action-wrapper">
            <button class="btn-add-cart" @click="addToCart(items)">
              <NuxtIcon name="mynaui:plus" size="1.75em" class="icon-cart" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.card-product-wrapper {
  position: relative;
  display: block;
  z-index: 1;
  .card-product {
    position: relative;
    max-width: 280px;
    width: 100%;
    border-radius: 18px;
    background: $white;
    border: 1px solid $grey;
    padding: 10px 10px;
    overflow: hidden;
    box-sizing: border-box;
    font-size: 18px;
    display: flex;
    flex-flow: column;
    align-items: stretch;
    margin: 0 auto 30px auto;
    .product-bg {
      position: relative;
      width: 100%;
      height: 260px;
      border-radius: 18px;
      background-color: $grey;
      z-index: 1;
      overflow: hidden;
      padding: 10px;
      &:hover {
        .btn-details {
          opacity: 1;
          cursor: pointer;
        }
        .overlay {
          opacity: 1;
          cursor: pointer;
        }
      }
      .overlay {
        width: 100%;
        height: 100%;
        position: absolute;
        background: #1b999b4f;
        top: 0;
        left: 0;
        opacity: 0;
        backdrop-filter: blur(3px);
        transition: all 0.5s ease-in;
        -webkit-backdrop-filter: blur(3px);
      }
      .btn-details {
        width: 125px;
        transition: all 0.5s ease-in;
        height: 35px;
        display: flex;
        opacity: 0;
        align-items: center;
        justify-content: center;
        vertical-align: middle;
        position: absolute;
        top: 45%;
        background: rgb(241 244 244 / 90%);
        backdrop-filter: blur(0.5px);
        -webkit-backdrop-filter: blur(0.5px);
        left: 0;
        margin: 0 auto;
        text-align: center;
        right: 0;
        font-weight: 600;
        border: 1px solid rgb(255 255 255);
        border-radius: 4px;
        letter-spacing: 0.2px;
        color: #111111;
        box-shadow: 0 8px 32px 0 rgb(93 164 166);
        &:hover,
        &:focus {
          cursor: pointer;
          transition: all 0.5s ease-in;
        }
      }
      .product-bg-img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        border-radius: 18px;
      }

      .btn-add-wishlist {
        position: absolute;
        right: 7px;
        top: 7px;
        width: 30px;
        height: 30px;
        background: $white;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        vertical-align: middle;
        overflow: hidden;
        border-radius: 50%;
        padding: 5px;
        margin: 0 auto;
        z-index: 99;
        &:hover {
          cursor: pointer;
          transition: all 0.5s ease-in;
          background-color: darken($white, 10%);
        }
        &.is-wishlist {
          background-color: #f34a4a;
          svg,
          .icon-wishlist {
            * {
              color: #fff !important;
              fill: #fff !important;
            }
          }
        }
      }
    }

    .product-content {
      padding: 10px;
      border-radius: 18px;
      overflow: hidden;
      height: 100%;
      max-height: 150px;

      .product-content-title {
        font-size: 18px;
        line-height: 22px;
        font-weight: 600;
        color: $grey-space;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
      }

      .product-content-category {
        font-size: 14px;
        line-height: 18px;
        font-weight: 400;
        color: $grey-cool;
        text-transform: capitalize;
      }

      .product-content-footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-top: 5px;
        position: relative;
      }

      .product-content-price {
        font-size: 18px;
        line-height: 22px;
        font-weight: 600;
        color: $green-celadon;
      }

      .btn-add-cart {
        background: $green-celadon;
        border-radius: 50%;
        width: 2rem;
        height: 2rem;
        display: flex;
        align-items: center;
        justify-content: center;
        vertical-align: middle;
        z-index: 999;
        .icon-cart {
          color: $white;
        }

        &:hover,
        &:focus {
          cursor: pointer;
          transition: all 0.5s ease-in;
          background-color: darken($green-celadon, 10%);
        }
      }
    }
  }
}

.action-wrapper {
  position: relative;
  display: flex;
}
</style>
