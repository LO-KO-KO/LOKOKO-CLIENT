import type { Meta, StoryObj } from '@storybook/react';
import Avatar from './Avatar';

const meta: Meta<typeof Avatar> = {
  title: 'components/Avatar',
  component: Avatar,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Avatar>;

export const NoImage: Story = {
  args: {},
};

export const WithImage: Story = {
  args: { src: 'https://placehold.co/100x100' },
};
