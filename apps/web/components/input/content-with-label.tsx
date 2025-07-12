import { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface ContentWithLabelProps extends HTMLAttributes<HTMLDivElement> {
  label: string;
  required?: boolean;
  labelClassName?: string;
  htmlFor?: string;
}

export default function ContentWithLabel({
  label,
  required,
  children,
  labelClassName,
  className,
  htmlFor,
  ...props
}: ContentWithLabelProps) {
  return (
    <div
      className={cn('flex items-start self-stretch py-[1.6rem]', className)}
      {...props}
    >
      <label
        className={cn('jp-title2 font-bold text-gray-800', labelClassName)}
        htmlFor={htmlFor}
      >
        {required && <span className="text-pink-500">*</span>}
        {label}
      </label>
      {children}
    </div>
  );
}
