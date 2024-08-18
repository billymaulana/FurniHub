<script setup lang="ts">
import type { Product } from '~/types'

definePageMeta({
  layout: 'default',
  title: 'Products Details',
  key: route => route.fullPath,

})
const route = useRoute()
const { addToCart, updateQuantity } = useCartStore()
const { addToWishlist, isInWishlist, removeFromWishlist } = useWishlistStore()
const productId = computed(() => (route.params as { id: string }).id)
const { data: productItem } = await getProductDetail(productId.value)
const { formatMoney } = useMoneyMask()

const totalCart = defineModel({ default: 1 })
const isLoadingImages = ref<boolean>(false)
const variantActiveIndex = ref<number>(0)
const sliderActiveIndex = ref<number>(0)
const selectedImagesActive = computed(() =>
  productItem.products?.variants?.[variantActiveIndex.value]?.images?.[sliderActiveIndex.value] || '',
)

const breadcrumbsItems = ref([
  { pathName: 'Home', pathLink: '/' },
  { pathName: 'Products', pathLink: '/products' },
  { pathName: 'Detail', pathLink: `/products/${productId.value}` },
])

function decTotalCart() {
  if (totalCart.value <= 1)
    return
  totalCart.value -= 1
}

function incTotalCart() {
  totalCart.value += 1
}

function changeVariants(index: number) {
  if (index === variantActiveIndex.value)
    return
  variantActiveIndex.value = index
  isLoadingImages.value = true
}

function imageHasLoaded() {
  isLoadingImages.value = false
}

function changeSlider(index: number) {
  if (index > productItem.products.totalSlider - 1 || index < 0) {
    return
  }
  sliderActiveIndex.value = index
  isLoadingImages.value = true
}
function nextSlider() {
  changeSlider(sliderActiveIndex.value + 1)
}
function prevSlider() {
  changeSlider(sliderActiveIndex.value - 1)
}
function handlingAddToCart(data: Product) {
  addToCart(data)
  updateQuantity(data.productId, totalCart.value)
}
</script>

<template>
  <section class="products-details">
    <div class="container">
      <div v-if="productItem" class="row justify-between">
        <div class="col-sm-12 col-md-5">
          <div class="product-details-left">
            <div class="product-details-head">
              <NuxtLink to="/products">
                <NuxtIcon name="mynaui:arrow-long-left" size="1.5rem" />
              </NuxtLink>
              <BaseBreadcrumbs :items="breadcrumbsItems" class="mt-3" />
            </div>

            <div class="product-details-body">
              <div class="py-2">
                <div>
                  <h1 class="product-details-title">
                    {{ productItem.products.productName }}
                  </h1>
                </div>
                <div class="product-details-info">
                  <p class="text-title-medium">
                    Rp.{{ formatMoney(productItem?.products.price) }}
                  </p>
                  <div class="rating">
                    <div>
                      <i :data-star="productItem?.products.rating" />
                    </div>
                    <p> {{ productItem?.products.rating }} / 5.0 </p>
                  </div>
                </div>
              </div>

              <div class="py-2">
                <p class="product-details-desc">
                  {{ productItem?.products.description }}
                </p>

                <div v-if="productItem?.products.variants" class="variant-wrapper my-4">
                  <template v-for="(variantItems, index) in productItem?.products.variants" :key="index">
                    <button
                      class="variant" :style="`background-color:${variantItems.colorHex};`"
                      :class="{ 'active-variant': index === variantActiveIndex }" @click="changeVariants(index)"
                    />
                  </template>
                </div>

                <div class="flex justify-between">
                  <div class="cart-wrapper">
                    <div class="input-cart-box">
                      <button :disabled="totalCart === 1" @click="decTotalCart()">
                        <NuxtIcon name="mynaui:minus" size="1.5em" />
                      </button>
                      <input v-model="totalCart" type="number" placeholder="0" class="input-cart">
                      <button @click="incTotalCart()">
                        <NuxtIcon name="mynaui:plus" size="1.5em" />
                      </button>
                    </div>

                    <div>
                      <button class="btn btn-primary flex items-center" @click="handlingAddToCart(productItem.products)">
                        <NuxtIcon name="mynaui:cart-plus" size="1.5em" class="mr-1" />
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div class="py-2">
                <p class="mt-2">
                  Free 3-5 day shipping • Tool-free assembly • 30-day trial
                </p>
              </div>
            </div>

            <div class="product-details-footer">
              <button
                class="btn-add-wishlist" :class="{ 'is-wishlist': isInWishlist(productItem.products.productId) }"
                @click="isInWishlist(productItem.products.productId) ? removeFromWishlist(productItem.products.productId) : addToWishlist(productItem.products)"
              >
                <NuxtIcon name="mynaui:heart" size="1.5em" class="icon-wishlist" mode="svg" />
                <span v-if="isInWishlist(productItem.products.productId)">Remove to Wishlist</span>
                <span v-else>Add to Wishlist</span>
              </button>
              <button class="btn-share">
                <NuxtIcon name="mynaui:share" size="1.5em" class="icon-wishlist" />
                Share this url
              </button>
            </div>
          </div>
        </div>
        <ClientOnly>
          <div class="col-sm-12 col-md-7">
            <div class="product-details-right">
              <div class="sliders-wrapper">
                <div class="slider-pagination-wrapper">
                  <div class="slider-pagination">
                    <div class="slider-pagination-current">
                      <span v-if="sliderActiveIndex < 10">0</span>
                      {{ sliderActiveIndex + 1 }}
                    </div>
                    <div class="slider-pagination-separator">
                      /
                    </div>
                    <div class="slider-pagination-total">
                      <span v-if="((productItem?.products.totalSlider - 1) < 10)">0</span>
                      {{ productItem?.products.totalSlider }}
                    </div>
                  </div>
                  <div class="slider-action">
                    <button :disabled="sliderActiveIndex === 0" @click="prevSlider()">
                      <NuxtIcon name="mynaui:chevron-left" size=" 2rem" />
                    </button>
                    <button
                      :disabled="sliderActiveIndex === productItem?.products.totalSlider - 1"
                      @click="nextSlider()"
                    >
                      <NuxtIcon name="mynaui:chevron-right" size="2rem" />
                    </button>
                  </div>
                </div>
              </div>
              <div class="product-img-wrapper">
                <NuxtImg
                  preload :src="selectedImagesActive" alt="FurniHub Product" class="product-img-main"
                  fit="outside" quality="60" @load="imageHasLoaded() "
                />
                <div v-if="isLoadingImages" class="spinner-main-products">
                  <BaseSpinner />
                </div>
              </div>

              <div
                v-if="productItem?.products.variants && productItem?.products?.totalSlider"
                class="product-img-thumbnail-wrapper"
              >
                <template v-for="(thumbnail, id) in (productItem.products.totalSlider)" :key="id">
                  <button
                    class="product-img-thumbnail" :class="{ active: id === sliderActiveIndex }"
                    @click="changeSlider(id)"
                  >
                    <NuxtImg
                      preload class="product-img-thumbnail-item"
                      :src="productItem.products?.variants?.[variantActiveIndex]?.images?.[id] || ''"
                      alt="product-images-thumbnail"
                    />
                  </button>
                </template>
              </div>
            </div>
          </div>
        </ClientOnly>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.products-details {
  position: relative;
  min-height: calc(100vh - 6rem);
  height: 100%;
  width: 100%;
  padding: 2.5rem 2rem;

  .product-details-left {
    display: flex;
    flex-flow: column;
    align-items: flex-start;
    height: 100%;
    position: relative;
    width: 100%;
    justify-content: space-between;
    gap: 3rem;

    .product-details-head {
      width: 100%;
      height: 60%;
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      flex-flow: column;
    }

    .product-details-body {
      display: flex;
      flex-flow: column;
      justify-content: space-between;
      height: 100%;
      gap: 0.5rem;

      .product-details-title {
        font-size: 48px;
        font-weight: 600;
      }

      .product-details-desc {
        font-size: 16px;
        color: #393737;
        line-height: 24px;
        letter-spacing: 0.5px;
        margin-bottom: 20px;
      }

      .product-details-info {
        display: flex;
        width: 100%;
        justify-content: space-between;
        padding: 1rem 0;
        align-items: center;
      }
    }

    .product-details-footer {
      display: flex;
      justify-content: space-between;
      width: 100%;
      height: 100%;

      .btn-add-wishlist {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        &.is-wishlist {
          svg {
            * {
              color: #f44a4a !important;
              fill: #f44a4a !important;
            }
          }
        }
      }

      .btn-share {
        display: flex;
        align-items: center;
        gap: 0.5rem;
      }
    }
  }

  .product-details-right {
    display: flex;
    flex-flow: column;
    // justify-content: space-between;
    align-items: flex-start;
    height: 100%;
    position: relative;
    width: 100%;

    .sliders-wrapper {
      width: 100%;

      .slider-pagination-wrapper {
        display: flex;
        justify-content: flex-end;
        flex-flow: column;
        align-items: flex-end;
        width: 100%;

        .slider-pagination {
          display: flex;
          align-items: baseline;
          gap: 0.5rem;
          justify-content: flex-end;

          .slider-pagination-current {
            font-size: 2rem;
            font-weight: 600;
          }

          .slider-pagination-separator,
          .slider-pagination-total,
          .slider-pagination-total span {
            color: $grey-cool;
            font-size: 1.75rem;
          }
        }

        .slider-action {
          padding-top: 2rem;
          width: 110px;
          display: flex;
          justify-content: space-between;
        }
      }
    }

    .product-img-wrapper {
      position: relative;
      width: 100%;
      height: 25rem;
      display: flex;
      overflow: hidden;

      .product-img-main {
        width: 100%;
        height: 100%;
        z-index: 2;
        object-fit: scale-down;
        transition: all 1s ease-in;
      }

      &:before {
        content: '';
        position: absolute;
        top: 20%;
        height: 250px;
        background: linear-gradient(280deg, #edf3f3 54%, rgb(58 163 159 / 0%) 100%);
        z-index: 1;
        right: 0;
        width: 60%;
      }
    }

    .product-img-thumbnail-wrapper {
      display: flex;
      justify-content: center;
      margin-top: 30px;
      align-self: flex-end;
      width: 100%;
      max-width: 40rem;

      .product-img-thumbnail {
        width: 90px;
        height: 90px;
        margin: 0 10px;
        border: 1px solid #f5f5f5;
        cursor: pointer;
        border-radius: 8px;
        background: #f5f5f5;

        .product-img-thumbnail-item {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 8px;
        }

        &.active {
          border: 2px solid #e0e0e0;
        }
      }
    }
  }
}

.spinner-main-products {
  width: 90%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 1;
  // background: #edf2f3;
  margin-left: auto;
}

.rating {
  display: flex;
  gap: 0.75rem;
}

[data-star] {
  text-align: left;
  font-style: normal;
  display: inline-block;
  position: relative;
  unicode-bidi: bidi-override;
  letter-spacing: 3px;

  &::before {
    display: block;
    content: '★★★★★';
    color: #eee;
  }

  &::after {
    white-space: nowrap;
    position: absolute;
    top: 0;
    left: 0;
    content: '★★★★★';
    color: #ffc41f;
    overflow: hidden;
    height: 100%;
  }

  @for $i from 0 through 50 {
    $value: $i * 0.1;
    $width: $i * 2%;

    &[data-star^='#{$value}']::after {
      width: #{$width};
    }
  }
}

.variant-wrapper {
  display: flex;
  flex-flow: row;
  gap: 0.5rem;
  .variant {
    width: 28px;
    height: 28px;
    border: 3px solid white;
    border-radius: 50%;
    display: block;
    box-shadow: rgb(149 157 165 / 18%) 0px 5px 10px 3px;

    &:hover {
      cursor: pointer;
    }
  }
}

.cart-wrapper {
  display: flex;
  gap: 1.5rem;
  width: 100%;
  align-items: center;
}

.input-cart-box {
  font-size: 1rem;
  font-weight: 600;
  border-radius: 6px;
  padding: 0px 6px;
  letter-spacing: 0.2px;
  line-height: 24px;
  box-shadow: none;
  outline: none;
  border: 1px solid #e7e7e7;
  justify-content: stretch;
  display: flex;
  align-items: center;
  max-width: 130px;
  width: 100%;

  button {
    padding: 10px 10px;

    &:hover {
      cursor: pointer;
    }

    &:disabled {
      .iconify {
        color: $grey-french;
      }
    }
  }

  .input-cart {
    border: 0;
    outline: 0;
    -moz-appearance: textfield;
    appearance: textfield;
    border: 0;
    width: 40px;
    height: 100%;
    display: block;
    padding: 8px 0;
    text-align: center;
    font-size: 1rem;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
}
</style>
