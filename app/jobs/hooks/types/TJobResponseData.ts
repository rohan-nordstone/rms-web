import { EmploymentType } from "@/lib/enums/employment-type"

interface TStation {
  id: number
  name: string
  email: string
  username: string
  type: number
  stationType: number
  createdAt: string
  updatedAt: string
}

export interface TJobData {
  id: number
  position: string
  placeOfWork: string
  salaryCurrency: string
  salary: number
  positionType: string
  jobDescription: string
  employmentType: EmploymentType
  isHiring: boolean
  qualifications: string
  career_level: string
  education_level: string
  years_of_experience: number
  createdAt: string
  updatedAt: string
  station: TStation
}

export interface TJobResponseData {
  jobs: TJobData[]
  totalPages: number
}
