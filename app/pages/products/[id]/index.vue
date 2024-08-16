<script setup lang="ts">
definePageMeta({
  layout: 'default',
  title: 'products',
})

const router = useRouter()
const routesParams = (router?.currentRoute?.value?.params as { id?: string })?.id
const totalCart = defineModel({ default: 1 })

const breadcrumbsItems = ref([
  { pathName: 'Home', pathLink: '/' },
  { pathName: 'Products', pathLink: '/products' },
  { pathName: 'Detail', pathLink: `/products/${routesParams}` },
])

function decTotalCart() {
  if (totalCart.value <= 1)
    return
  totalCart.value -= 1
}

function incTotalCart() {
  totalCart.value += 1
}

function addToCart() {
  console.log('add', totalCart.value)
}

function continuePayment() {
  console.log('go to payment')
}
</script>

<template>
  <section class="products-details">
    <div class="container">
      <div class="row justify-between">
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
                    Meryl Lounge Chair
                  </h1>
                </div>
                <div class="product-details-info">
                  <p class="text-title-medium">
                    $145
                  </p>
                  <div class="rating">
                    <div>
                      <i data-star="4.6" />
                    </div>
                    <p> 4.6 / 5.0 </p>
                  </div>
                </div>
              </div>

              <div class="py-2">
                <p class="product-details-desc">
                  The gently curved lines accentuated by sewn details are kind to your body and pleasant to look at.
                  Also,
                  there’s a tilt and height-adjusting mechanism that’s built to outlast years of ups and downs.
                </p>

                <div class="variant-wrapper">
                  <span class="variant" style="background-color:#545454;" />
                  <span class="variant" style="background-color:#C1BDB3;" />
                  <span class="variant" style="background-color:#C1BDB3;" />
                  <span class="variant" style="background-color:#C1BDB3;" />
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
                      <button class="btn btn-secondary flex items-center" @click="addToCart">
                        <NuxtIcon name="mynaui:cart-plus" size="1.5em" class="mr-1" />
                        Add to Cart
                      </button>
                    </div>
                  </div>
                  <div>
                    <button class="btn btn-primary flex items-center" @click="continuePayment">
                      Checkout
                      <NuxtIcon name="mynaui:arrow-long-right" size="1.5em" class="text-white ml-1" />
                    </button>
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
              <button class="btn-add-wishlist">
                <NuxtIcon name="mynaui:heart" size="1.5em" class="icon-wishlist" />
                Add to Wishlist
              </button>
              <button class="btn-share">
                <NuxtIcon name="mynaui:share" size="1.5em" class="icon-wishlist" />
                Share this url
              </button>
            </div>
          </div>
        </div>

        <div class="col-sm-12 col-md-7">
          <div class="product-details-right">
            <div class="sliders-wrapper">
              <div class="slider-pagination-wrapper">
                <div class="slider-pagination">
                  <div class="slider-pagination-current">
                    01
                  </div>
                  <div class="slider-pagination-separator">
                    /
                  </div>
                  <div class="slider-pagination-total">
                    05
                  </div>
                </div>
                <div class="slider-action">
                  <button>
                    <NuxtIcon name="mynaui:chevron-left" size="2rem" />
                  </button>
                  <button>
                    <NuxtIcon name="mynaui:chevron-right" size="2rem" />
                  </button>
                </div>
              </div>
            </div>

            <div class="product-images-wrapper">
              <NuxtImg src="/images/product/chair-4.png" alt="FurniHub Product" class="product-images-main" />
            </div>

            <div class="product-img-thumbnail-wrapper">
              <div class="product-img-thumbnail active">
                <NuxtImg class="product-img-thumbnail-item" src="/images/product/chair-4.png" alt="product-images-thumbnail" />
              </div>
              <div class="product-img-thumbnail">
                <NuxtImg class="product-img-thumbnail-item" src="/images/product/chair-4.png" alt="product-images-thumbnail" />
              </div>
              <div class="product-img-thumbnail">
                <NuxtImg class="product-img-thumbnail-item" src="/images/product/chair-4.png" alt="product-images-thumbnail" />
              </div>
              <div class="product-img-thumbnail">
                <NuxtImg class="product-img-thumbnail-item" src="/images/product/chair-4.png" alt="product-images-thumbnail" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
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
          .slider-pagination-total {
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
    .product-images-wrapper {
      position: relative;
      width: 100%;
      height: 25rem;
      display: flex;
      overflow: hidden;
      .product-images-main {
        width: 100%;
        height: 100%;
        z-index: 2;
        object-fit: cover;
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
      margin-top: 10px;
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
          border: 1px solid $green-verdigris;
        }
      }
    }
  }
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
  margin-bottom: 20px;
  .variant {
    width: 28px;
    height: 28px;
    border: 3px solid white;
    border-radius: 50%;
    display: block;
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
