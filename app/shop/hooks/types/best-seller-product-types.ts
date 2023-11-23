export interface TBestSellerProducts {
  products: Product[]
  count: number
  offset: number
  limit: number
}

export interface Product {
  id: string
  title: string
  subtitle: any
  status: string
  external_id: any
  description: string
  handle: string
  is_giftcard: boolean
  discountable: boolean
  thumbnail: string
  collection_id: any
  type_id: any
  weight: number
  length: any
  height: any
  width: any
  hs_code: any
  origin_country: any
  mid_code: any
  material: any
  created_at: string
  updated_at: string
  deleted_at: any
  metadata: any
  profile_id: string
  collection: any
  images: Image[]
  options: Option[]
  profiles: Profile[]
  tags: any[]
  type: any
  variants: Variant[]
}

export interface Image {
  id: string
  created_at: string
  updated_at: string
  deleted_at: any
  url: string
  metadata: any
}

export interface Option {
  id: string
  created_at: string
  updated_at: string
  deleted_at: any
  title: string
  product_id: string
  metadata: any
  values: Value[]
}

export interface Value {
  id: string
  created_at: string
  updated_at: string
  deleted_at: any
  value: string
  option_id: string
  variant_id: string
  metadata: any
}

export interface Profile {
  id: string
  created_at: string
  updated_at: string
  deleted_at: any
  name: string
  type: string
  metadata: any
}

export interface Variant {
  id: string
  created_at: string
  updated_at: string
  deleted_at: any
  title: string
  product_id: string
  sku: any
  barcode: any
  ean: any
  upc: any
  variant_rank: number
  inventory_quantity: number
  allow_backorder: boolean
  manage_inventory: boolean
  hs_code: any
  origin_country: any
  mid_code: any
  material: any
  weight: any
  length: any
  height: any
  width: any
  metadata: any
  options: Option2[]
  prices: Price[]
  original_price: any
  calculated_price: any
  original_price_incl_tax: any
  calculated_price_incl_tax: any
  original_tax: any
  calculated_tax: any
  tax_rates: any
}

export interface Option2 {
  id: string
  created_at: string
  updated_at: string
  deleted_at: any
  value: string
  option_id: string
  variant_id: string
  metadata: any
}

export interface Price {
  id: string
  created_at: string
  updated_at: string
  deleted_at: any
  currency_code: string
  amount: number
  min_quantity: any
  max_quantity: any
  price_list_id: any
  region_id: any
  price_list: any
  variant_id: string
}
