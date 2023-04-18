import React from 'react';
import { mswDecorator } from 'msw-storybook-addon';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

export const globalDecorators = [
  (Story) => (
    <QueryClientProvider client={queryClient}>
      <Story />
    </QueryClientProvider>
  ),
  mswDecorator,
];
