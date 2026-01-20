import type { Meta, StoryObj } from '@storybook/angular';
import { MatButtonModule } from '@angular/material/button';
import { argsToTemplate } from '@storybook/angular';
import { createStoryMeta } from '../../../.storybook/story-helpers';

const meta: Meta = createStoryMeta({
  title: 'Components/Button',
  description: `
Material buttons customized with Dirawong design tokens.

**Available Variants:**
- **Filled**: Solid background button (default)
- **Tonal**: Subtle filled button
- **Outlined**: Button with border
- **Text**: Plain text button

**Token Integration:**
- Border radius: \`--mat-button-*-container-shape: var(--dw-radius-md)\`
- Padding: \`var(--dw-space-3) var(--dw-space-4)\`
- Colors: \`--mat-sys-primary\`, \`--mat-sys-tertiary\`
  `,
  argTypes: {
    variant: {
      control: 'select',
      options: ['filled', 'tonal', 'outlined', 'text'],
      description: 'Button style variant',
    },
    text: {
      control: 'text',
      description: 'Button label text',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable the button',
    },
  },
  args: {
    variant: 'filled',
    text: 'Button',
    disabled: false,
  },
});

export default meta;
type Story = StoryObj;

/**
 * Interactive button with controls for all variants and properties
 */
export const Default: Story = {
  render: (args) => ({
    moduleMetadata: {
      imports: [MatButtonModule],
    },
    props: args,
    template: `
      <div style="padding: 24px; display: flex; gap: 16px; flex-wrap: wrap;">
        ${args['variant'] === 'text' 
          ? `<button matButton [disabled]="disabled">{{ text }}</button>`
          : `<button matButton="${args['variant']}" [disabled]="disabled">{{ text }}</button>`
        }
        ${args['variant'] === 'text' 
          ? `<button matButton class="accent-button" [disabled]="disabled">{{ text }}</button>`
          : `<button matButton="${args['variant']}" class="accent-button" [disabled]="disabled">{{ text }}</button>`
        }
      </div>
    `,
  }),
};
