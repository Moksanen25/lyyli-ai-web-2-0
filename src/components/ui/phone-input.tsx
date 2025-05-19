
import React from 'react';
import { Input, type InputProps } from './input';

export interface PhoneInputProps extends Omit<InputProps, 'type'> {
  countryCode?: string;
}

const PhoneInput = React.forwardRef<HTMLInputElement, PhoneInputProps>(
  ({ countryCode = '+1', className, ...props }, ref) => {
    return (
      <div className="flex">
        <div className="flex items-center px-3 border border-r-0 rounded-l-md border-input bg-muted text-muted-foreground">
          {countryCode}
        </div>
        <Input
          type="tel"
          className={`rounded-l-none ${className}`}
          {...props}
          ref={ref}
        />
      </div>
    );
  }
);

PhoneInput.displayName = 'PhoneInput';

export { PhoneInput };
