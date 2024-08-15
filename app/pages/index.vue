<script setup lang="ts">
definePageMeta({
  title: 'Home',
})
</script>

<template>
  <section class="hero">
    <div class="container">
      <div class="hero-accent">
        <NuxtImg class="hero-accent-img" src="/illustrator/hero-product-accent.svg" alt="FurniHub New Product" />
      </div>
      <div class="hero-img-wrapper">
        <NuxtImg class="hero-img" src="/product/chair-2.svg" alt="FurniHub New Product" />
      </div>
      <div class="row justify-between">
        <div class="col-6">
          <h1 class="hero-title">
            Design Your Perfect Space
          </h1>
          <h2 class="hero-description">
            Find the furniture that defines you. FurniHub offers a curated selection for
            every room in your home.
          </h2>
          <NuxtLink to="/shop" class="btn btn-primary">
            Shop Now
          </NuxtLink>
        </div>

        <div class="col-6">
          <div class="hero-product">
            <h3 class="hero-product-text">
              Fresh Designs, <span class="text-primary">Just Arrived</span>
            </h3>
            <div class="vertical-arrow">
              <NuxtImg class="vertical-arrow-img" src="/illustrator/long-arrow.svg" alt="FurniHub Arrow" />
            </div>
            <div class="new-product">
              <NuxtImg class="new-product-img" src="/product/chair-1.svg" alt="FurniHub New Product" />
            </div>
            <p class="new-product-desc">
              "Unveil the latest trends in home decor with our newest furniture collection. Only at FurniHub."
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.hero {
  position: relative;
  min-height: calc(100vh - $navbar-height);
  height: 100%;
  width: 100%;
  background-color: $grey;
  padding: 3rem 0;
  overflow: hidden;
  .hero-title {
    font-family: 'Darker Grotesque', sans-serif;
    font-size: 5.375rem;
    line-height: 5.75rem;
    color: $black-chinese;
    letter-spacing: 0.0156rem;
    margin: 0;
    padding: 6rem 0 0 0;
    font-weight: 700;
  }
  .hero-description {
    font-family: 'Darker Grotesque', sans-serif;
    color: $grey-jet;
    font-size: 18px;
    line-height: 35px;
    letter-spacing: 0.5px;
    font-weight: 400;
    margin-bottom: 2.5rem;
    max-width: 28rem;
  }
  .hero-product {
    position: relative;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    height: 100%;
    flex-flow: column;
    margin-top: 3rem;
  }
  .hero-product-text,
  .hero-product-text > * {
    font-family: 'Darker Grotesque', sans-serif;
    display: flex;
    flex-flow: column;
    line-height: 30px;
    text-align: right;
    align-items: end;
    justify-content: center;
    font-size: 20px;
    text-transform: uppercase;
    letter-spacing: 1.5008px;
  }

  .vertical-arrow {
    text-align: right;
  }

  .new-product {
    text-align: right;
    .new-product-img {
      width: 230px;
      margin-right: -2rem;
    }
  }

  .new-product-desc {
    font-weight: 600;
    padding: 0;
    font-size: 16px;
    line-height: 20px;
    font-style: italic;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    max-width: 350px;
    letter-spacing: 0.5px;
    width: 100%;
    margin: 0 0 0 auto;
  }

  .hero-img-wrapper {
    position: absolute;
    top: 10rem;
    left: 36rem;

    .hero-img {
      width: 25rem;
    }
  }

  .hero-accent {
    position: absolute;
    top: 0;
    right: 0;

    .hero-accent-img {
      width: 60rem;
    }
  }
}
</style>
