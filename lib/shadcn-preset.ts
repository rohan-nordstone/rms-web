import { nextui } from "@nextui-org/react"
import aspectRatio from "@tailwindcss/aspect-ratio"
import daisyui from "daisyui"
import type { Config } from "tailwindcss"
import animatePlugin from "tailwindcss-animate"

import { shadcnPlugin } from "./shadcn-plugin"

export const shadcnPreset = {
  darkMode: "class",
  content: [],
  plugins: [
    animatePlugin,
    shadcnPlugin,
    daisyui,
    aspectRatio,
    require("@shrutibalasa/tailwind-grid-auto-fit"),
    nextui(),
    require("@tailwindcss/typography"),
  ],
} satisfies Config
