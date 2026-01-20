import type { Meta } from '@storybook/angular';

/**
 * Configuration options for creating a Storybook Meta object.
 */
export interface StoryMetaConfig {
  /**
   * The title that appears in Storybook's sidebar navigation.
   * Format: 'Section/Component' (e.g., 'Components/Button', 'Foundation/Colors')
   */
  title: string;

  /**
   * Description of the component shown in the docs page.
   * Supports markdown formatting.
   */
  description: string;

  /**
   * Additional parameters to pass to Storybook.
   * These will be merged with the default parameters.
   */
  parameters?: Meta['parameters'];

  /**
   * Argument types configuration for controls in Storybook.
   */
  argTypes?: Meta['argTypes'];

  /**
   * Default values for story arguments.
   */
  args?: Meta['args'];
}

/**
 * Creates a Storybook Meta configuration with common defaults.
 * This helper reduces boilerplate in story files by providing a consistent structure.
 *
 * @param config - Configuration options for the Meta object
 * @returns A Storybook Meta object with autodocs enabled
 *
 * @example
 * ```typescript
 * const meta: Meta = createStoryMeta({
 *   title: 'Components/Button',
 *   description: 'Material buttons customized with design tokens.',
 *   argTypes: {
 *     variant: {
 *       control: 'select',
 *       options: ['filled', 'outlined', 'text'],
 *     },
 *   },
 *   args: {
 *     variant: 'filled',
 *   },
 * });
 *
 * export default meta;
 * ```
 */
export function createStoryMeta(config: StoryMetaConfig): Meta {
  return {
    title: config.title,
    tags: ['autodocs'],
    parameters: {
      docs: {
        description: {
          component: config.description,
        },
      },
      ...config.parameters,
    },
    argTypes: config.argTypes,
    args: config.args,
  };
}
