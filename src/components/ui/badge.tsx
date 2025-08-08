import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-inter font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-forest-green focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-forest-green text-white hover:bg-forest-green/80",
        secondary:
          "border-transparent bg-soft-rose text-forest-green hover:bg-soft-rose/80",
        accent:
          "border-transparent bg-muted-turquoise text-forest-green hover:bg-muted-turquoise/80",
        destructive:
          "border-transparent bg-destructive text-white hover:bg-destructive/80",
        outline: "border-forest-green text-forest-green bg-transparent",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
