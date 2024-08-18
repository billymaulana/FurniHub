import { acceptHMRUpdate, defineStore } from 'pinia'
import type { CartItem, Product } from '~/types'

export const useCartStore = defineStore('cart', () => {
  // State
  const items = ref<CartItem[]>([])

  // Getters
  const totalPrice = computed(() =>
    items.value.reduce((total, item) => total + item.product.price * item.quantity, 0),
  )

  const totalItems = computed(() =>
    items.value.reduce((total, item) => total + item.quantity, 0),
  )

  // Actions
  function addToCart(product: Product) {
    const existingItem = items.value.find(item => item.product.id === product.id)
    if (existingItem) {
      existingItem.quantity++
    }
    else {
      items.value.push({ product, quantity: 1 })
    }
  }

  function removeFromCart(productId: string) {
    const index = items.value.findIndex(item => item.product.id === productId)
    if (index !== -1) {
      items.value.splice(index, 1)
    }
  }

  function updateQuantity(productId: string, quantity: number) {
    const existingItem = items.value.find(item => item.product.id === productId)
    if (existingItem) {
      if (quantity <= 0) {
        removeFromCart(productId)
      }
      else {
        existingItem.quantity = quantity
      }
    }
  }

  function clearCart() {
    items.value = []
  }

  function getCartItem(productId: string): CartItem | undefined {
    return items.value.find(item => item.product.id === productId)
  }

  return {
    items,
    totalPrice,
    totalItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getCartItem,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useCartStore, import.meta.hot))
