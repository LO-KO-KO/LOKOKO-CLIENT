import * as SelectPrimitive from '@radix-ui/react-select';
import { ComponentProps } from 'react';
import { SvgArrowUp, SvgArrowDown } from '../../icons/fill/components';
import { cn } from '../../lib/utils';

function Select({ ...props }: ComponentProps<typeof SelectPrimitive.Root>) {
  return <SelectPrimitive.Root data-slot="select" {...props} />;
}

function SelectGroup({
  ...props
}: ComponentProps<typeof SelectPrimitive.Group>) {
  return <SelectPrimitive.Group data-slot="select-group" {...props} />;
}

function SelectValue({
  ...props
}: ComponentProps<typeof SelectPrimitive.Value>) {
  return <SelectPrimitive.Value data-slot="select-value" {...props} />;
}

function SelectTrigger({
  className,
  open,
  children,
  ...props
}: ComponentProps<typeof SelectPrimitive.Trigger> & {
  open?: boolean;
}) {
  return (
    <SelectPrimitive.Trigger
      data-slot="select-trigger"
      className={cn(
        'flex h-[3.25rem] w-[25.5rem] items-center justify-between gap-[0.625rem] self-stretch border-b bg-white pr-[0.75rem] focus:border-pink-500 focus:outline-none',
        open ? 'border-pink-500' : 'border-gray-400',
        className
      )}
      {...props}
    >
      {children}
      <SelectPrimitive.Icon asChild>
        {open ? <SvgArrowUp className="fill-pink-500" /> : <SvgArrowDown />}
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  );
}

function SelectContent({
  className,
  children,
  position = 'popper',
  ...props
}: ComponentProps<typeof SelectPrimitive.Content>) {
  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content
        data-slot="select-content"
        className={cn(
          'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 relative z-50 overflow-y-auto overflow-x-hidden border-b border-pink-500 bg-pink-100',
          position === 'popper' && 'overflow-y-scroll',
          className
        )}
        style={{
          maxHeight: '12rem',
        }}
        position={position}
        avoidCollisions={false}
        {...props}
      >
        <SelectPrimitive.Viewport
          className={cn(
            position === 'popper' &&
              'h-[var(--radix-select-trigger-height)] min-w-[var(--radix-select-trigger-width)] scroll-my-1'
          )}
        >
          <SelectGroup>{children}</SelectGroup>
        </SelectPrimitive.Viewport>
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  );
}

function SelectItem({
  className,
  children,
  hover = false,
  ...props
}: ComponentProps<typeof SelectPrimitive.Item> & {
  hover?: boolean;
}) {
  return (
    <SelectPrimitive.Item
      data-slot="select-item"
      className={cn(
        'flex h-[2.75rem] flex-shrink-0 items-center gap-1 self-stretch border-b border-dashed border-pink-500 bg-pink-100 px-[0.75rem] outline-none ring-0 last:border-none focus:outline-none focus:ring-0',
        hover && 'hover:cursor-pointer hover:bg-pink-200',
        className
      )}
      {...props}
    >
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    </SelectPrimitive.Item>
  );
}

export { Select, SelectContent, SelectItem, SelectTrigger, SelectValue };
