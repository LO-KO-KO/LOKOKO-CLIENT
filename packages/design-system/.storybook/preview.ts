import type { Preview } from '@storybook/react-vite';
import '../styles.css';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },

    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    tags: ['autodocs'],
  },
};

export default preview;
