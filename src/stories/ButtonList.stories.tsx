import { ButtonList, tasks } from './ButtonList';
import type { Meta, StoryObj } from '@storybook/react';
import { rest } from 'msw';

const meta: Meta<typeof ButtonList> = {
  title: 'Components/common/ButtonList',
  component: ButtonList,
  parameters: {
    docs: {
      description: {
        component: `기본 버튼 리스트입니다`,
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof ButtonList>;

export const Success: Story = {
  args: {
    error: false,
  },
  parameters: {
    msw: {
      handlers: [
        rest.get('/tasks', (req, res, ctx) => {
          return res(ctx.json(tasks));
        }),
      ],
    },
  },
};

export const Error: Story = {
  args: {
    error: true,
  },
  parameters: {
    msw: {
      handlers: [
        rest.get('/tasks', (req, res, ctx) => {
          return res(ctx.json([]));
        }),
      ],
    },
  },
};
