import { Button } from './Button';
import type { Meta, StoryObj } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof Button> = {
  title: 'Components/common/Button',
  component: Button,
  parameters: {
    docs: {
      description: {
        component: `기본 버튼입니다`,
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    width: 100,
    height: 100,
    children: 'Default Button',
  },
};

export const WithBorder: Story = {
  args: {
    width: 100,
    height: 100,
    style: { border: '10px solid aqua' },
    children: 'Button with Aqua border',
  },
};

export const Clicked: Story = {
  args: {
    width: 100,
    height: 100,
    children: 'Click Me',
  },
};
Clicked.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const getTask = (name: string) => canvas.findByText(name);

  const itemToClick = await getTask('Click Me');
  await userEvent.click(itemToClick);

  await expect(canvas.getByRole('button').textContent).toBe('Clicked!');
};
