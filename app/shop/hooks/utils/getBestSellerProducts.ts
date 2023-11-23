import { TBestSellerProducts } from "../types/best-seller-product-types"

export default async function getBestSellerProducts() {
  try {
    const url = `${process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL}/store/products`

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
    const data = (await response.json()) as TBestSellerProducts
    return data
  } catch (error) {
    console.error(error)
  }
}
