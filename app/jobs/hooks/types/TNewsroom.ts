import { StationType } from "@/lib/enums/station"
import { UserType } from "@/lib/enums/user"

export interface TNewsroom {
  id: number
  name: string
  email: string
  username: string
  type: UserType
  stationType: StationType
  createdAt: string
  updatedAt: string
}
