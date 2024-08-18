import { acceptHMRUpdate, defineStore } from 'pinia'
import type { Product } from '~/types'

export const useWishlistStore = defineStore('wishlist', () => {
  const itemsWishlist = ref<Product[]>([])

  // Getters
  const totalItemsWishlist = computed(() => itemsWishlist.value.length)

  const isInWishlist = (productId: string) => {
    return itemsWishlist.value.some(item => item.id === productId)
  }

  // Actions
  function addToWishlist(product: Product) {
    if (!isInWishlist(product.id)) {
      itemsWishlist.value.push(product)
    }
  }

  function removeFromWishlist(productId: string) {
    itemsWishlist.value = itemsWishlist.value.filter(item => item.id !== productId)
  }

  function clearWishlist() {
    itemsWishlist.value = []
  }

  return {
    itemsWishlist,
    totalItemsWishlist,
    isInWishlist,
    addToWishlist,
    removeFromWishlist,
    clearWishlist,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useWishlistStore, import.meta.hot))
