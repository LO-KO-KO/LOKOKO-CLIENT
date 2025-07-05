import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from './Select';

const meta: Meta<typeof Select> = {
  title: 'components/Select',
  component: Select,
  tags: ['autodocs'],
};
export default meta;

const SELECT_OPTIONS = ['apple', 'banana', 'blueberry', 'grapes', 'pineapple'];

const OptionSelectOverflow = () => {
  const [open, setOpen] = useState(false);

  return (
    <Select open={open} onOpenChange={() => setOpen(!open)}>
      <SelectTrigger open={open}>
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        {SELECT_OPTIONS.map((option) => (
          <SelectItem hover value={option} key={option}>
            {option}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

const OptionSelect = () => {
  return (
    <Select>
      <SelectTrigger open>
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        {SELECT_OPTIONS.slice(0, 3).map((option) => (
          <SelectItem hover value={option} key={option}>
            {option}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

const ReviewSelect = () => {
  return (
    <Select>
      <SelectTrigger open>
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        {SELECT_OPTIONS.map((option) => (
          <SelectItem value={option} key={option}>
            {option}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export const OptionOverflow: StoryObj<typeof Select> = {
  render: () => <OptionSelectOverflow />,
};
export const Option: StoryObj<typeof Select> = {
  render: () => <OptionSelect />,
};
export const Review: StoryObj<typeof Select> = {
  render: () => <ReviewSelect />,
};
