import { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "../../lib/cn";
import { cva, type VariantProps } from "class-variance-authority";

const buttonVariants = cva(
  "rounded-md font-medium transition-colors duration-200 disabled:cursor-not-allowed disabled:bg-gray-400 disabled:text-white",
  {
    variants: {
      size: {
        small: "text-sm px-4 py-2",
        large: "text-lg px-6 py-3",
      },
      variant: {
        primary: "bg-blue-500 text-white hover:bg-blue-600",
        secondary: "bg-gray-100 text-black hover:bg-gray-200",
      },
    },
    defaultVariants: {
      size: "small",
      variant: "primary",
    },
  }
);

export interface ButtonProps
  extends ComponentPropsWithoutRef<"button">,
    VariantProps<typeof buttonVariants> {
  children: ReactNode;
}

export default function Button({
  size,
  variant,
  className,
  children,
  ...rest
}: ButtonProps) {
  return (
    <button
      className={cn(buttonVariants({ size, variant }), className)}
      {...rest}
    >
      {children}
    </button>
  );
}
