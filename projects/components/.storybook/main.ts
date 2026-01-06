import type { StorybookConfig } from '@storybook/angular';

const config: StorybookConfig = {
  "stories": [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-a11y",
    "@storybook/addon-docs",
    "@storybook/addon-onboarding"
  ],
  "framework": "@storybook/angular",
  "webpackFinal": async (config) => {
    // Add rule for CSS files
    config.module?.rules?.push({
      test: /\.css$/,
      use: ['style-loader', 'css-loader'],
    });
    return config;
  }
};
export default config;