import type { Preview } from "@storybook/react-vite";
import "@lococo/ui/styles.css";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },

    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      test: "todo",
    },

    nextjs: {
      appDirectory: true,
    },
  },
};

export default preview;
