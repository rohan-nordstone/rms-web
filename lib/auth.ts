import axios, { isAxiosError } from "axios"
import type { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: {
          label: "Username",
          type: "text",
          placeholder: "Type your username here...",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Type your password here...",
        },
        role: {
          label: "Role",
          type: "text",
          placeholder: "Type your role here...",
        },
        token: {
          label: "Token",
          type: "text",
          placeholder: "Type your token here...",
        },
      },
      // @ts-ignore
      async authorize(credentials, req) {
        let token = credentials?.token // Check if token is already in credentials
        if (!token) {
          const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/login/${credentials?.role}`
          try {
            const res = await axios.post(url, {
              username: credentials?.username,
              password: credentials?.password,
            })
            token = res.data.token
          } catch (error) {
            if (isAxiosError(error)) {
              console.log("error", error)
              throw new Error(error?.response?.data?.message || "Unknown Error")
            }
          }
        }

        // Set the token as a default header for all subsequent Axios requests
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`

        let user
        if (credentials?.role === "employee") {
          const res = await axios.get(
            `${process.env.NEXT_PUBLIC_BACKEND_URL}/profile`
          )
          user = res.data
        } else {
          const res = await axios.get(
            `${process.env.NEXT_PUBLIC_BACKEND_URL}/account`
          )
          user = res.data
        }

        return {
          user,
          token,
        }
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  debug: process.env.NODE_ENV === "development",
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        return { ...token, ...user }
      }
      return token
    },

    async session({ token, session }) {
      session.user = token.user
      session.token = token.token
      return session
    },
  },
  pages: {
    signIn: "/auth_pages/employee",
  },
}
