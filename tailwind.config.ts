import type { Config } from "tailwindcss"

import { shadcnPreset } from "./lib/shadcn-preset"

/** @type {import('tailwindcss').Config} */
const config = {
  presets: [shadcnPreset],
  content: [
    "app/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: ["light"],
  },
} satisfies Config

export default config
