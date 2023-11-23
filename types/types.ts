declare namespace NodeJS {
  export interface ProcessEnv {
    NEXTAUTH_SECRET: string
    NEXT_PUBLIC_FRONTEND_URL: string
    NEXT_PUBLIC_BACKEND_URL: string
    NEXT_PUBLIC_MEDUSA_BACKEND_URL: string
  }
}
