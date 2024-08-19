<script setup lang="ts">
import type { Category, Product } from '~/types'

definePageMeta({
  title: 'products',
})
const breadcrumbsItems = ref([
  { pathName: 'Home', pathLink: '/' },
  { pathName: 'Products', pathLink: '/products' },
])

const selectedCategory = defineModel<number>({ default: 0 })
const listProducts = ref<Product[]>([])
const listCategory = ref<Category[]>([])
const isLoading = ref<boolean>(false)
const { data: categoriesData } = await getListCategory()
listCategory.value = categoriesData.category ?? []

const query = computed(() => selectedCategory.value === 0 ? '' : `?categoryId=${selectedCategory.value}`)

async function fetchProducts() {
  try {
    isLoading.value = true
    const { data } = await getAllProducts(query.value)
    if (data) {
      listProducts.value = data.products.length > 0 ? data.products : []
    }
    isLoading.value = false
  }
  catch (error) {
    isLoading.value = false
    listProducts.value = []
    console.error('Failed to fetch products:', error)
  }
}

watch(selectedCategory, () => {
  fetchProducts()
})

await fetchProducts()
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
              <select id="category" v-model="selectedCategory" name="category" class="form-select">
                <option v-for="(item, index) in listCategory" :key="index" :value="item.categoryId">
                  {{ item.categoryName }}
                </option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div v-if="isLoading" class="col-md-12 text-center">
          <BaseSpinner />
        </div>

        <div v-if="listProducts.length === 0 && !isLoading" class="col-md-12 text-center">
          <h2 class="text-headline-large text-center mb-5">
            PRODUCT NOT FOUND
          </h2>
        </div>

        <template v-if="listProducts.length > 0 && !isLoading">
          <div v-for="(item, index) in listProducts" :key="index" class="col-sm-12 col-md-3">
            <ProductCardItem :items="item" />
          </div>
          <div class="col-md-12">
            <button class="btn-pagination">
              Load More..
            </button>
          </div>
        </template>
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
  background: #f4f5f9;
  border-radius: 5px;
  color: black;
  padding: 8px;
  width: 100%;
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 0.5px;
  outline: 0;
  box-shadow: none;
  margin: 0 20px 0 0;
  border: 3px solid #f4f5f9;
}
</style>
