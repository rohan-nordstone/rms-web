export interface TFaqQuestionResponse {
  id: number
  question: string
  answer: string
  created_at: string
  updated_at: string
  category: {
    id: number
    name: string
    created_at: string
    updated_at: string
  }
}
