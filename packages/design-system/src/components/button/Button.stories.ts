import type { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";

const meta: Meta<typeof Button> = {
  title: "stories/Button",
  component: Button,
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Small: Story = {
  args: {
    size: "small",
    children: "small button",
  },
};
export const Large: Story = {
  args: {
    size: "large",
    children: "large button",
  },
};
