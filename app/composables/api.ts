import type { ApiResponse, Product } from '~/types'
// const FURNIHUB_API_URL = 'https://66c07429ba6f27ca9a56aa4a.mockapi.io/'
export function fetchAPI(url: string, params: Record<string, string | number | undefined> = {}): Promise<any> {
  return $fetch(`/api/furnihub/${url}`, {
    params,
  })
}

/**
 * Get All Products
 */
export function getAllProducts(): Promise<ApiResponse<Product[]>> {
  return fetchAPI(`products`)
}

/**
 * Get Detail Product
 */
export function getProductDetail(id: string): Promise<ApiResponse<Product>> {
  return fetchAPI(`products/${id}`)
}
