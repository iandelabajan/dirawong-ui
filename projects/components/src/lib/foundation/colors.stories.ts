import type { Meta, StoryObj } from '@storybook/angular';

const meta: Meta = {
  title: 'Foundation/Colors',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Color tokens are the foundation of the Dirawong Design System.

**Token Architecture:**
- **Primitive tokens**: Raw color values (e.g., \`--dw-primitive-blue-900\`)
- **Semantic tokens**: Purpose-based colors (e.g., \`--dw-color-primary\`)

This layered approach allows rebranding by swapping primitives while keeping
semantic usage stable across the application.
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj;

/**
 * Brand colors are the primary and accent colors
 * used throughout the design system.
 */
export const BrandColors: Story = {
  render: () => ({
    template: `
      <div style="padding: 24px;">
        <h2 style="margin-top: 0;">Brand Colors</h2>
        <p>Core colors that define the Dirawong brand identity.</p>

        <div
          style="
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 24px;
            margin-top: 24px;
          "
        >
          <!-- Primary Color -->
          <div>
            <div
              style="
                background: var(--dw-color-primary);
                height: 120px;
                border-radius: 12px;
                box-shadow: 0 2px 8px rgba(0,0,0,0.1);
              "
            ></div>

            <div style="margin-top: 12px;">
              <strong>Primary</strong>

              <div
                style="
                  font-size: 12px;
                  color: #64748b;
                  margin-top: 4px;
                "
              >
                <code>--dw-color-primary</code>
              </div>
            </div>
          </div>

          <!-- Accent Color -->
          <div>
            <div
              style="
                background: var(--dw-color-accent);
                height: 120px;
                border-radius: 12px;
                box-shadow: 0 2px 8px rgba(0,0,0,0.1);
              "
            ></div>

            <div style="margin-top: 12px;">
              <strong>Accent</strong>

              <div
                style="
                  font-size: 12px;
                  color: #64748b;
                  margin-top: 4px;
                "
              >
                <code>--dw-color-accent</code>
              </div>
            </div>
          </div>
        </div>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story:
          'Primary is used for main actions and core branding. Accent is used for emphasis, highlights, and secondary calls-to-action.',
      },
    },
  },
};
