import type { Meta, StoryObj } from '@storybook/react';
import CardProduct from './CardProduct';

const meta: Meta<typeof CardProduct> = {
  title: 'components/Card/CardProduct',
  component: CardProduct,
  tags: ['autodocs'],
  argTypes: {
    rank: { control: { type: 'number', min: 1, max: 100 } },
    brand: { control: 'text' },
    title: { control: 'text' },
    description: { control: 'text' },
    productId: { control: 'number' },
    isLiked: { control: 'boolean' },
    rating: { control: { type: 'range', min: 0, max: 5, step: 0.1 } },
    reviewCount: { control: 'number' },
    likeCount: { control: 'number' },
    imageUrl: { control: 'text' },
  },
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof CardProduct>;

export const Default: Story = {
  args: {
    rank: 1,
    brand: '브랜드명',
    title: '상품명',
    description: '상품 용량 관련 설명',
    productId: 1,
    isLiked: false,
    rating: 4,
    reviewCount: 1250,
    likeCount: 89,
    imageUrl: undefined,
  },
};
