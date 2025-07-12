import ContentWithLabel from 'components/input/content-with-label';
import type { ReviewFormData } from 'types/review';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components';
import { ErrorNotice } from '@/components';

interface Props {
  value: ReviewFormData['productOptionId'];
  onChange: (value: number) => void;
  error?: string;
}

const OPTIONS = [
  { id: 1, name: 'オプション1' },
  { id: 2, name: 'オプション2' },
  { id: 3, name: 'オプション3' },
];

export default function ProductOption({ value, onChange, error }: Props) {
  const handleValueChange = (id: string) => {
    onChange(Number(id));
  };

  return (
    <ContentWithLabel
      label="オプションを選んでください"
      className="flex w-full flex-col"
      required
    >
      <Select
        value={value ? String(value) : ''}
        onValueChange={handleValueChange}
      >
        <SelectTrigger className="jp-body2">
          <SelectValue placeholder="オプション" />
        </SelectTrigger>
        <SelectContent className="scrollbar-hide jp-body2">
          {OPTIONS.map(({ id, name }) => (
            <SelectItem hover value={String(id)} key={id}>
              {name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      {error && <ErrorNotice message={error} />}
    </ContentWithLabel>
  );
}
