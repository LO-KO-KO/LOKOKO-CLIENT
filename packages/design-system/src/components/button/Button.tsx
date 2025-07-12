import { Slot } from '@radix-ui/react-slot';
import { cva, VariantProps } from 'class-variance-authority';
import { ButtonHTMLAttributes, ReactNode, forwardRef } from 'react';
import { cn } from '../../lib/utils';

interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'color'>,
    VariantProps<typeof buttonVariants> {
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  rounded?: boolean;
  color: 'primary' | 'secondary';
  variant: 'filled' | 'outline' | 'text';
  size: 'lg' | 'md' | 'sm';
  asChild?: boolean;
}

const baseButtonStyle = 'px-[3.2rem] py-[1rem] gap-[0.8rem]';

const buttonVariants = cva(
  'flex items-center transition-colors duration-300 justify-center font-bold disabled:bg-gray-200 disabled:text-gray-500 disabled:cursor-not-allowed cursor-pointer grow',
  {
    variants: {
      variant: {
        filled: '',
        outline: 'bg-transparent border-b',
        text: 'bg-transparent',
      },
      color: {
        primary: '',
        secondary: '',
      },
      rounded: {
        true: 'rounded-[0.8rem]',
        false: '',
      },
      size: {
        lg: `h-[6rem] ${baseButtonStyle}`,
        md: `h-[5.2rem] ${baseButtonStyle}`,
        sm: `h-[3.2rem] px-[1.6rem] py-[1rem] gap-[0.8rem]`,
      },
    },
    compoundVariants: [
      {
        variant: 'filled',
        color: 'primary',
        class: 'bg-pink-500 text-white',
      },
      {
        variant: 'filled',
        color: 'secondary',
        class: 'bg-pink-100 text-pink-500',
      },
      {
        variant: 'outline',
        color: 'primary',
        class:
          'border-pink-500 text-pink-500 hover:bg-pink-100 hover:text-pink-500 hover:border-pink-500',
      },
      {
        variant: 'text',
        color: 'primary',
        class: 'text-pink-500',
      },
      {
        variant: 'text',
        color: 'secondary',
        class: 'text-gray-800',
      },
    ],
    defaultVariants: {
      variant: 'filled',
      color: 'primary',
      size: 'md',
      rounded: false,
    },
  }
);

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant,
      color,
      size,
      iconLeft,
      iconRight,
      children,
      className,
      rounded = false,
      asChild = false,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : 'button';
    const buttonContent = asChild ? (
      children
    ) : (
      <>
        {iconLeft}
        {children}
        {iconRight}
      </>
    );

    return (
      <Comp
        ref={ref}
        className={cn(
          buttonVariants({ variant, color, size, rounded }),
          className
        )}
        {...props}
      >
        {buttonContent}
      </Comp>
    );
  }
);

Button.displayName = 'Button';

export default Button;
