type TFaqCategory = {
  id: number
  name: string
  description: string
  created_at: string
  updated_at: string
}

export type TFaqQuestion = {
  id: number
  question: string
  answer: string
  created_at: string
  updated_at: string
  category: TFaqCategory
}
