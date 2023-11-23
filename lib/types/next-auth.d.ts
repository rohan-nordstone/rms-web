import NextAuth, { DefaultSession, DefaultUser } from "next-auth"
import { DefaultJWT, JWT } from "next-auth/jwt"

import { StationApprovalStatus, StationType } from "../enums/station"
import { UserApprovalStatus } from "../enums/user"

declare module "next-auth" {
  interface Session {
    user: {
      id: number
      firstName: string | null
      lastName: string | null
      email: string
      username: string
      isEmployee: boolean
      jobTitle: string | null
      workplace: string | null
      address: string | null
      about: string | null
      photo: Photo | null
      recoveryEmail: string | null
      verifiedAt: string | null
      emailVerifiedAt: string | null
      isDirector: boolean
      isCurrent: boolean
      approvalStatus: UserApprovalStatus
      approvedAt: string | null
      deniedAt: string | null
      createdAt: string | null
      updatedAt: string | null
      newsroom?: Newsroom
    }
    token: string
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    user: {
      id: number
      firstName: string | null
      lastName: string | null
      email: string
      username: string
      isEmployee: boolean
      jobTitle: string | null
      workplace: string | null
      address: string | null
      about: string | null
      photo: Photo | null
      recoveryEmail: string | null
      verifiedAt: string | null
      emailVerifiedAt: string | null
      isDirector: boolean
      isCurrent: boolean
      approvalStatus: UserApprovalStatus
      approvedAt: string | null
      deniedAt: string | null
      createdAt: string | null
      updatedAt: string | null
      newsroom?: {
        id: number
        name: string | null
        about: string | null
        type: StationType
        address: string | null
        dma: string | null
        logo: string | null
        verifiedAt: string | null
        approvalStatus: StationApprovalStatus
        approvedAt: string | null
        deniedAt: string | null
        createdAt: string | null
        updatedAt: string | null
      }
    }
    token: string
  }
}

interface Newsroom {
  id: number
  name: string | null
  about: string | null
  type: StationType
  address: string | null
  dma: string | null
  logo: string | null
  verifiedAt: string | null
  approvalStatus: StationApprovalStatus
  approvedAt: string | null
  deniedAt: string | null
  createdAt: string | null
  updatedAt: string | null
}

interface Photo {
  name: string
  url: string
  size: number
  width: number
  height: number
}
