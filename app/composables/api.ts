import type { ApiResponse, Category, Product } from '~/types'

export function fetchAPI(url: string, params: Record<string, string | number | undefined> = {}): Promise<any> {
  return $fetch(`/api/furnihub/${url}`, {
    params,
  })
}

/**
 * Get All Products
 */
export function getAllProducts(query: string): Promise<ApiResponse<{ products: Product[] }>> {
  return fetchAPI(`products${query}`)
}

/**
 * Get Detail Product
 */
export function getProductDetail(id: string): Promise<ApiResponse<{ product: Product }>> {
  return fetchAPI(`products/${id}`)
}

/**
 * Get List Category
 */
export function getListCategory(): Promise<ApiResponse<{ category: Category[] }>> {
  return fetchAPI('category')
}
