import type { Meta, StoryObj } from '@storybook/react';
import Tab from './Tab';

const meta: Meta<typeof Tab> = {
  title: 'Components/Tab',
  component: Tab,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary'],
    },
    active: {
      control: { type: 'boolean' },
    },
    onClick: { action: 'clicked' },
  },
};

export default meta;

type Story = StoryObj<typeof Tab>;

export const PrimaryInactive: Story = {
  args: {
    label: 'Primary Tab',
    variant: 'primary',
    active: false,
  },
};

export const PrimaryActive: Story = {
  args: {
    label: 'Primary Tab',
    variant: 'primary',
    active: true,
  },
};

export const SecondaryInactive: Story = {
  args: {
    label: 'Secondary Tab',
    variant: 'secondary',
    active: false,
  },
};

export const SecondaryActive: Story = {
  args: {
    label: 'Secondary Tab',
    variant: 'secondary',
    active: true,
  },
};
