
import * as React from "react";
import { Input } from "./input";
import { cn } from "@/lib/utils";

export interface PhoneInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  countryCode?: string;
}

const PhoneInput = React.forwardRef<HTMLInputElement, PhoneInputProps>(
  ({ className, countryCode = "+1", ...props }, ref) => {
    return (
      <div className="flex items-center">
        <span className="inline-flex h-10 items-center rounded-l-md border border-r-0 border-input bg-muted px-3 text-sm text-muted-foreground">
          {countryCode}
        </span>
        <Input
          className={cn("rounded-l-none", className)}
          type="tel"
          ref={ref}
          {...props}
        />
      </div>
    );
  }
);

PhoneInput.displayName = "PhoneInput";

export { PhoneInput };
