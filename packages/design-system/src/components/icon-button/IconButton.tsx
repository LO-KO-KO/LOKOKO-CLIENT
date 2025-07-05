import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/utils';

interface IconButtonProps
  extends Omit<React.ComponentProps<'button'>, 'color' | 'size'>,
    VariantProps<typeof iconButtonVariants> {
  icon?: React.ElementType;
  color?: 'primary' | 'secondary' | 'tertiary';
  size?: 'sm' | 'md' | 'lg';
}

const iconButtonVariants = cva(
  'flex items-center justify-center disabled:cursor-not-allowed hover:cursor-pointer',
  {
    variants: {
      color: {
        primary: 'text-pink-500',
        secondary: 'text-gray-500',
        tertiary: 'text-gray-800',
      },
      size: {
        sm: 'p-[0.5rem] size-[2rem]',
        md: 'p-[0.625rem] size-[2.75rem]',
        lg: 'p-[0.875rem] size-[4rem]',
      },
    },
    defaultVariants: {
      color: 'primary',
      size: 'lg',
    },
  }
);

const iconSize = {
  sm: '1rem',
  md: '1.5rem',
  lg: '2.25rem',
};

export function IconButton({
  color = 'primary',
  size = 'lg',
  icon: Icon,
  className,
  ...props
}: IconButtonProps) {
  return (
    <button
      className={cn(iconButtonVariants({ color, size }), className)}
      {...props}
    >
      {Icon ? <Icon size={iconSize[size]} /> : null}
    </button>
  );
}
