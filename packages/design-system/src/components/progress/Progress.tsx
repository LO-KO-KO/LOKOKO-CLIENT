import { cn } from '../../lib/utils';

interface ProgressProps {
  value: number;
  width?: string | number;
  height?: string | number;
  className?: string;
}

export default function Progress({
  value,
  width = '100%',
  height = '0.75rem',
  className,
}: ProgressProps) {
  const percent = Math.min(Math.max(value, 0), 100);

  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-[10px] bg-[color:var(--color-gray-200)]',
        className
      )}
      style={{ width, height }}
    >
      <div
        className="absolute left-0 top-0 h-full bg-[color:var(--color-pink-500)]"
        style={{ width: `${percent}%` }}
      />
    </div>
  );
}
