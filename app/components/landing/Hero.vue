<template>
  <section class="hero">
    <div class="container">
      <div class="row justify-between">
        <div class="hero-leftside">
          <h1 class="hero-title">
            Design Your Perfect Space
          </h1>
          <h2 class="hero-description">
            Find the furniture that defines you. FurniHub offers a curated selection for
            every room in your home.
          </h2>
          <NuxtLink to="/products" class="btn btn-primary hero-btn">
            Shop Now
          </NuxtLink>
        </div>
        <div class="hero-rightside">
          <div class="hero-product">
            <h3 class="hero-product-text">
              Fresh Designs, <span class="text-primary">Just Arrived</span>
            </h3>
            <div class="vertical-arrow">
              <NuxtImg class="vertical-arrow-img" src="/images/illustrator/long-arrow.svg" alt="FurniHub Arrow" />
            </div>
            <div class="new-product">
              <NuxtImg class="new-product-img" src="/images/product/chair-1.svg" alt="FurniHub New Product" />
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
  max-height: 700px;
  .hero-leftside {
    flex: 0 0 auto;
    width: 60%;
    max-width: 60vw;
    display: flex;
    flex-flow: column;
    justify-content: flex-start;
    align-items: flex-start;
    position: relative;
    .hero-title {
      font-family: 'Darker Grotesque', sans-serif;
      font-size: 95px;
      color: $black-chinese;
      letter-spacing: 0.0156rem;
      margin: 0;
      padding: 6rem 0 0 0;
      font-weight: 700;
      max-width: 50vw;
    }

    .hero-description {
      font-family: 'Darker Grotesque', sans-serif;
      color: $grey-jet;
      font-size: 22px;
      line-height: 35px;
      letter-spacing: 0.5px;
      font-weight: 400;
      margin-top: 1.25rem;
      margin-bottom: 2.5rem;
      max-width: 35rem;
    }
    .hero-btn {
      padding: 12px 24px;
    }
  }
  .hero-rightside {
    position: relative;
    flex: 0 0 auto;
    width: 40%;
    max-width: 40vw;
    display: flex;
    flex-flow: column;
    justify-content: flex-end;
    align-items: flex-end;
    height: 600px;
    .hero-product {
      position: relative;
      width: 100%;
      display: flex;
      justify-content: flex-end;
      height: 100%;
      flex-flow: column;
      margin-top: 3rem;

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
        margin-top: 1.25rem;
      }
      .new-product {
        text-align: right;

        .new-product-img {
          margin-right: -2rem;
        }
      }

      .new-product-desc {
        font-weight: 600;
        padding: 0;
        font-size: 14px;
        line-height: 20px;
        font-style: italic;
        display: flex;
        justify-content: center;
        align-items: flex-end;
        max-width: 65%;
        letter-spacing: 0.5px;
        width: 100%;
        margin: 0 0 0 auto;
        text-align: right;
        margin-right: -20px;
      }
    }
  }
  .hero-floating-accent {
    position: relative;
    flex: 0 0 auto;
    width: 100%;
    max-width: 100vw;
    height: 100%;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    position: relative;
    .hero-img-wrapper {
      position: absolute;
      top: -60vh;

      .hero-img {
        width: 25rem;
      }
    }

    .hero-accent {
      position: absolute;
      top: -85vh;
      right: -10vw;

      .hero-accent-img {
        width: 90vw;
      }
    }
  }

  @media (max-width: 768px) {
    .hero-leftside {
      width: 100%;
      max-width: 100vw;
    }
  }
  @media (max-width: 992px) {
    max-height: unset;
    .hero-leftside {
      width: 100%;
      max-width: 90vw;
    }
    .hero-rightside {
      width: 100%;
      max-width: 90vw;
    }
  }
  @media (max-width: 1366px) {
    .hero-leftside {
      .hero-title {
        font-size: 70px;
        max-width: 40vw;
      }
      .hero-description {
        font-size: 20px;
        max-width: 70%;
      }
    }
  }
  @media (min-width: 1280px) {
    background-image: url('/images/illustrator/hero-accent.svg');
    background-size: 90%;
    background-repeat: space;
    background-position: 100% -12vh;
  }
  @media (max-width: 1279px) {
    .hero-rightside {
      height: unset;
    }
  }
}
</style>
