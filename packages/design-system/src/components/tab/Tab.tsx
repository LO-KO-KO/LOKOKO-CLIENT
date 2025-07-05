import { cva, type VariantProps } from 'class-variance-authority';
import { ReactNode } from 'react';
import { cn } from '../../lib/utils';

const tabVariants = cva(
  'inline-flex w-auto items-center justify-center gap-2.5 bg-[color:var(--color-white)] px-5 py-2.5 font-bold cursor-pointer',
  {
    variants: {
      variant: {
        primary:
          'h-11 text-base text-[color:var(--color-gray-500)] leading-normal',
        secondary:
          'h-14 text-lg text-[color:var(--color-gray-800)] leading-relaxed',
      },
      active: {
        true: 'border-b-2 border-solid',
        false: 'border-b border-solid border-[color:var(--color-gray-300)]',
      },
    },
    compoundVariants: [
      {
        active: true,
        variant: 'primary',
        className:
          'text-[color:var(--color-pink-500)] border-[color:var(--color-pink-500)]',
      },
      {
        active: true,
        variant: 'secondary',
        className:
          'text-[color:var(--color-gray-800)] border-[color:var(--color-gray-800)]',
      },
    ],
    defaultVariants: {
      variant: 'primary',
      active: false,
    },
  }
);

interface TabProps extends VariantProps<typeof tabVariants> {
  label: string;
  className?: string;
  onClick?: () => void;
}

export default function Tab({
  label,
  active,
  variant,
  className,
  onClick,
}: TabProps) {
  return (
    <div
      className={cn(tabVariants({ active, variant }), className)}
      onClick={onClick}
    >
      {label}
    </div>
  );
}

interface TabContainerProps {
  children: ReactNode;
  className?: string;
}

export function TabContainer({ children, className }: TabContainerProps) {
  return (
    <div
      className={cn(
        'inline-flex items-center justify-start overflow-hidden',
        className
      )}
    >
      {children}
    </div>
  );
}
