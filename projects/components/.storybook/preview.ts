import type { Preview } from '@storybook/angular'
import { setCompodocJson } from "@storybook/addon-docs/angular";
import docJson from "../documentation.json";
setCompodocJson(docJson);

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: 'hoot',
    toolbar: {
      icon: 'paintbrush',
      items: [
        { value: 'hoot', title: 'Hoot' },
        { value: 'kasisto', title: 'Kasisto' },
      ],
      showName: true,
    },
  },
};

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (storyFn, context) => {
      const theme = context.globals['theme'] || 'hoot';
      document.body.setAttribute('data-theme', theme);
      return storyFn();
    },
  ],
};

export default preview;