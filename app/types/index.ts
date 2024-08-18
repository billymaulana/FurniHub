export interface Product {
  id: string
  sku: string
  productId: string
  productName: string
  categoryId: number
  categoryName: string
  description: string
  price: number
  rating: number
  defaultImage: string
  totalSlider: number
  variantTotal: number
  variants: Variant[]
}

export interface Variant {
  colorHex: string
  colorName: string
  images: string[]
}

export interface ApiResponse<T> {
  status: string
  data: {
    products: T
  }
}

export interface CartItem {
  product: Product
  quantity: number
}
