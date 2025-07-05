import type { Meta, StoryObj } from '@storybook/react';
import { SvgClose } from '../../icons/fill/components/Close';
import { IconButton } from './IconButton';

const meta: Meta<typeof IconButton> = {
  title: 'Components/IconButton',
  component: IconButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'tertiary'],
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    color: 'primary',
    size: 'lg',
    icon: SvgClose,
  },
};

export const Secondary: Story = {
  args: {
    color: 'secondary',
    size: 'lg',
    icon: SvgClose,
  },
};

export const Tertiary: Story = {
  args: {
    color: 'tertiary',
    size: 'lg',
    icon: SvgClose,
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <IconButton color="primary" size="lg" icon={SvgClose} />
      <IconButton color="secondary" size="lg" icon={SvgClose} />
      <IconButton color="tertiary" size="lg" icon={SvgClose} />
    </div>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <IconButton color="primary" size="sm" icon={SvgClose} />
      <IconButton color="primary" size="md" icon={SvgClose} />
      <IconButton color="primary" size="lg" icon={SvgClose} />
    </div>
  ),
};

export const AllCombinations: Story = {
  render: () => (
    <div className="grid grid-cols-3 gap-4">
      <div className="text-center">
        <div className="flex flex-col items-center gap-2">
          <IconButton color="primary" size="lg" icon={SvgClose} />
          <IconButton color="primary" size="md" icon={SvgClose} />
          <IconButton color="primary" size="sm" icon={SvgClose} />
        </div>
      </div>
      <div className="text-center">
        <div className="flex flex-col items-center gap-2">
          <IconButton color="secondary" size="lg" icon={SvgClose} />
          <IconButton color="secondary" size="md" icon={SvgClose} />
          <IconButton color="secondary" size="sm" icon={SvgClose} />
        </div>
      </div>
      <div className="text-center">
        <div className="flex flex-col items-center gap-2">
          <IconButton color="tertiary" size="lg" icon={SvgClose} />
          <IconButton color="tertiary" size="md" icon={SvgClose} />
          <IconButton color="tertiary" size="sm" icon={SvgClose} />
        </div>
      </div>
    </div>
  ),
};
