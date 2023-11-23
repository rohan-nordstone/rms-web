export interface TJobIDResponse {
  id: number
  position: string
  placeOfWork: string
  salaryCurrency: string
  salary: number
  positionType: string
  jobDescription: string
  employmentType: number
  isHiring: boolean
  qualifications: string
  career_level: string
  education_level: string
  years_of_experience: number
  createdAt: string
  updatedAt: string
  station: {
    id: number
    name: string
    email: string
    username: string
    type: number
    stationType: number
    createdAt: string
    updatedAt: string
  }
}
