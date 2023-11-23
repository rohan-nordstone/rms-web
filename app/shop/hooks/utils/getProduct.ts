import { type Product } from "../types/best-seller-product-types"

export default async function getProduct(id: string) {
  try {
    // http://localhost:9000/store/products/prod_01HE5JFPVJ8B6R2K6N90321V27
    const url = `${process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL}/store/products/${id}`

    const response = await fetch(url, {
      cache: "no-store",
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
    if (!response.ok) {
      throw new Error(`Failed to fetch FAQs: ${response.status}`)
    }
    const data = (await response.json()) as {
      product: Product
    }
    return data.product
  } catch (error) {
    console.error(error)
  }
}
