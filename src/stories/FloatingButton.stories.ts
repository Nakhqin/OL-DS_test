import type { Meta, StoryObj } from '@storybook/react-vite';

import { fn } from 'storybook/test';

import { FloatingButton } from './FloatingButton';

const meta = {
  title: 'Example/FloatingButton',
  component: FloatingButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { onClick: fn() },
} satisfies Meta<typeof FloatingButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Enabled: Story = {
  args: {
    enabled: true,
    theme: 'light',
  },
};

export const Disabled: Story = {
  args: {
    enabled: false,
    theme: 'light',
  },
};

export const DarkEnabled: Story = {
  args: {
    enabled: true,
    theme: 'dark',
  },
};

export const DarkDisabled: Story = {
  args: {
    enabled: false,
    theme: 'dark',
  },
};
