<script setup lang="ts">
definePageMeta({
  title: 'products',
})

const breadcrumbsItems = ref([
  { pathName: 'Home', pathLink: '/' },
  { pathName: 'Products', pathLink: '/products' },
])

const ddd = 4
</script>

<template>
  <section class="products">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <BaseBreadcrumbs :items="breadcrumbsItems" />
          <ProductCardDiscount />
        </div>
      </div>

      <div class="row justify-center text-center pt-5">
        <div class="col-md-12">
          <h1 class="text-headline-large text-center mb-5">
            Discover The Best Furniture
          </h1>
          <div class="filter-box">
            <div class="category-filter">
              <div class="mb-2 fw-500 text-left">
                Category :
              </div>
              <select id="countries" class="form-select">
                <option selected>
                  All Product
                </option>
                <option value="chairs">
                  Chairs
                </option>
                <option value="sofas">
                  Sofas
                </option>
                <option value="tables">
                  Tables
                </option>
                <option value="beds">
                  Beds
                </option>
                <option value="accesories">
                  Accesories
                </option>
              </select>
            </div>
          </div>
        </div>
        <div class="col-sm-12 col-md-3">
          <NuxtLink :to="{ path: `/products/${ddd}` }" class="text-decoration-none">
            <ProductCardItem />
          </NuxtLink>
        </div>
        <div class="col-sm-12 col-md-3">
          <ProductCardItem />
        </div>
        <div class="col-sm-12 col-md-3">
          <ProductCardItem />
        </div>
        <div class="col-sm-12 col-md-3">
          <ProductCardItem />
        </div>
        <div class="col-md-12">
          <button class="btn-pagination">
            Load More..
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.products {
  position: relative;
  min-height: calc(100vh - $navbar-height);
  height: 100%;
  width: 100%;
  padding: 2rem 0;
  .btn-pagination {
    border-radius: 20px;
    color: white;
    background-color: $grey-jet;
    font-weight: 500;
    width: 120px;
    height: auto;
    position: relative;
    padding: 8px 16px;
    margin: 0 auto;
    text-align: center;
    display: flex;
    justify-content: center;
    &:hover,
    &:focus {
      cursor: pointer;
      transition: all 0.5s ease-in;
      background-color: darken($grey-jet, 10%);
    }
    &:disabled {
      background-color: $grey-french;
      color: $grey-space;
    }
  }
}

.filter-box {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 20px;
  font-size: 14px;
}

.form-select {
  border: 0;
  background: #f4f5f9;
  border-radius: 5px;
  color: black;
  padding: 5px 11px;
  width: 110px;
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 0.5px;
  outline: 0;
  box-shadow: none;
  margin: 0 20px 0 0;
}
</style>
