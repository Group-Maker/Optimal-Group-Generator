import type { Preview } from '@storybook/react';
import { initialize } from 'msw-storybook-addon';
import ko from 'axe-core/locales/ko.json';
import { globalDecorators } from './decorators';

initialize();

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    a11y: {
      config: { locale: ko },
    },
  },
  decorators: globalDecorators,
};

export default preview;
