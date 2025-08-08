
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-base font-inter font-semibold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest-green focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-forest-green text-white hover:bg-forest-green/90 active:bg-forest-green/80",
        destructive:
          "bg-destructive text-white hover:bg-destructive/90",
        outline:
          "border-2 border-forest-green bg-white text-forest-green hover:bg-light-gray active:bg-soft-rose",
        secondary:
          "bg-soft-rose text-forest-green hover:bg-soft-rose/80",
        ghost: "hover:bg-forest-green/10 hover:text-forest-green",
        link: "text-forest-green underline-offset-4 hover:underline",
      },
      size: {
        default: "h-12 px-6 py-3", // 48px height from brand book
        sm: "h-10 rounded-lg px-4 py-2",
        lg: "h-14 rounded-lg px-8 py-4", // Larger size for prominent CTAs
        icon: "h-12 w-12", // 48px touch target
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
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
