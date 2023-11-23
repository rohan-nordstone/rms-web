import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import { ButtonHTMLAttributes, forwardRef } from "react"

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground font-bold shadow hover:bg-primary-hover",
        default_outline:
          "border border-2 border-primary bg-white text-primary font-bold shadow-sm hover:bg-primary-hover hover:text-primary-foreground",
        destructive:
          "bg-destructive text-destructive-foreground font-bold shadow-sm hover:bg-destructive/90",
        outline:
          "border border-input bg-white font-bold shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground font-bold shadow-sm hover:bg-secondary-hover",
        secondary_outline:
          "border border-2 border-secondary bg-white text-secondary font-bold shadow-sm hover:bg-secondary-hover hover:text-secondary-foreground",
        muted_outline:
          "border border-2 border-muted-foreground bg-white text-muted-foreground font-bold shadow-sm hover:bg-muted hover:text-muted-foreground",
        warning:
          "bg-warning text-warning-foreground font-bold shadow-sm hover:bg-warning-hover",
        warning_outline:
          "border border-2 border-warning bg-white text-warning font-bold shadow-sm hover:bg-warning-hover hover:text-warning-foreground",

        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        xl: "rounded-md px-16 py-2",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
