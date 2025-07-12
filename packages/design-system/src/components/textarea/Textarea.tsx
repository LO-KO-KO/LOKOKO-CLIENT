import { ComponentProps, PropsWithChildren, useId } from 'react';
import { cn } from '../../lib/utils';

interface TextareaProps extends ComponentProps<'textarea'> {
  value: string;
  'aria-label'?: string;
  'aria-describedby'?: string;
}

function Textarea({
  className,
  maxLength,
  value,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  ...props
}: TextareaProps) {
  const id = useId();
  const textareaId = props.id || `textarea-${id}`;
  const counterId = `${textareaId}-counter`;

  const describedByIds = [maxLength ? counterId : '', ariaDescribedBy || '']
    .filter(Boolean)
    .join(' ');

  return (
    <div className="flex py-[0.8rem]">
      <textarea
        id={textareaId}
        className={cn(
          'scrollbar-hide w-full resize-none border-none text-gray-800 outline-none placeholder:text-gray-500',
          className
        )}
        aria-label={ariaLabel}
        aria-describedby={describedByIds || undefined}
        {...props}
      />
      {maxLength && (
        <div
          id={counterId}
          className={cn(
            'w-[8rem] px-2 text-sm',
            value?.length ? 'text-gray-800' : 'text-gray-500'
          )}
          aria-live="polite"
        >
          {value ? value.length : 0}/{maxLength}
        </div>
      )}
    </div>
  );
}

function Container({
  children,
  className,
  'aria-label': ariaLabel,
  ...props
}: PropsWithChildren<{
  className?: string;
  'aria-label'?: string;
}>) {
  return (
    <div
      className={cn(
        'flex w-[66rem] flex-col gap-[0.8rem] border-b border-gray-400 pb-[1.6rem]',
        className
      )}
      aria-label={ariaLabel}
      {...props}
    >
      {children}
    </div>
  );
}

Textarea.displayName = 'Textarea';
Container.displayName = 'Textarea.Container';

Textarea.Container = Container;

export { Textarea, Container };
