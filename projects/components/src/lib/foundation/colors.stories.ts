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
- **Primitive tokens**: Raw color values (e.g., \`--primitive-navy-600\`)
- **Semantic tokens**: Purpose-based colors (e.g., \`--dw-color-primary\`)

This two-layer system allows for easy rebranding while maintaining consistent naming.
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj;

/**
 * Brand colors are the primary and accent colors used throughout the design system.
 */
export const BrandColors: Story = {
  render: () => ({
    template: `
      <div style="padding: 24px;">
        <h2 style="margin-top: 0;">Brand Colors</h2>
        <p>Core colors that define the Dirawong brand identity.</p>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 24px; margin-top: 24px;">
          <!-- Primary Color -->
          <div>
            <div style="
              background: var(--dw-color-primary);
              height: 120px;
              border-radius: 12px;
              box-shadow: 0 2px 8px rgba(0,0,0,0.1);
            "></div>
            <div style="margin-top: 12px;">
              <strong>Primary</strong>
              <div style="font-size: 12px; color: #64748b; margin-top: 4px;">
                <code>--dw-color-primary</code>
              </div>
              <div style="font-size: 12px; color: #64748b; margin-top: 2px;">
                #19305C
              </div>
            </div>
          </div>
          
          <!-- Accent Color -->
          <div>
            <div style="
              background: var(--dw-color-accent);
              height: 120px;
              border-radius: 12px;
              box-shadow: 0 2px 8px rgba(0,0,0,0.1);
            "></div>
            <div style="margin-top: 12px;">
              <strong>Accent</strong>
              <div style="font-size: 12px; color: #64748b; margin-top: 4px;">
                <code>--dw-color-accent</code>
              </div>
              <div style="font-size: 12px; color: #64748b; margin-top: 2px;">
                #f5853e
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
        story: 'Primary is used for main actions and branding. Accent is for secondary emphasis and calls-to-action.',
      },
    },
  },
};

/**
 * Surface colors provide backgrounds and containers at different elevation levels.
 */
export const SurfaceColors: Story = {
  render: () => ({
    template: `
      <div style="padding: 24px;">
        <h2 style="margin-top: 0;">Surface Colors</h2>
        <p>Neutral backgrounds used for cards, containers, and layout surfaces.</p>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 24px; margin-top: 24px;">
          <!-- Surface Base -->
          <div>
            <div style="
              background: var(--dw-surface-base);
              height: 120px;
              border-radius: 12px;
              border: 1px solid #e2e8f0;
              box-shadow: 0 2px 8px rgba(0,0,0,0.1);
            "></div>
            <div style="margin-top: 12px;">
              <strong>Surface 0</strong>
              <div style="font-size: 12px; color: #64748b; margin-top: 4px;">
                <code>--dw-surface-base</code>
              </div>
              <div style="font-size: 12px; color: #64748b; margin-top: 2px;">
                Base background
              </div>
            </div>
          </div>
          
          <!-- Surface Container -->
          <div>
            <div style="
              background: var(--dw-surface-container);
              height: 120px;
              border-radius: 12px;
              box-shadow: 0 2px 8px rgba(0,0,0,0.1);
            "></div>
            <div style="margin-top: 12px;">
              <strong>Surface 1</strong>
              <div style="font-size: 12px; color: #64748b; margin-top: 4px;">
                <code>--dw-surface-container</code>
              </div>
              <div style="font-size: 12px; color: #64748b; margin-top: 2px;">
                Elevated surface
              </div>
            </div>
          </div>
          
          <!-- Surface Elevated -->
          <div>
            <div style="
              background: var(--dw-surface-elevated);
              height: 120px;
              border-radius: 12px;
              box-shadow: 0 2px 8px rgba(0,0,0,0.1);
            "></div>
            <div style="margin-top: 12px;">
              <strong>Surface 2</strong>
              <div style="font-size: 12px; color: #64748b; margin-top: 4px;">
                <code>--dw-surface-elevated</code>
              </div>
              <div style="font-size: 12px; color: #64748b; margin-top: 2px;">
                Higher elevation
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
        story: 'Surface colors create depth and hierarchy. Use Surface 0 for page backgrounds, Surface 1 for cards, and Surface 2 for elevated elements.',
      },
    },
  },
};

/**
 * Text colors ensure proper readability and hierarchy.
 */
export const TextColors: Story = {
  render: () => ({
    template: `
      <div style="padding: 24px;">
        <h2 style="margin-top: 0;">Text Colors</h2>
        <p>Semantic text colors for different content hierarchy levels.</p>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 24px; margin-top: 24px;">
          <!-- Text Primary -->
          <div>
            <div style="
              background: #ffffff;
              height: 120px;
              border-radius: 12px;
              border: 1px solid #e2e8f0;
              display: flex;
              align-items: center;
              justify-content: center;
              font-size: 24px;
              font-weight: 500;
              color: var(--dw-text-primary);
            ">Aa</div>
            <div style="margin-top: 12px;">
              <strong>Primary Text</strong>
              <div style="font-size: 12px; color: #64748b; margin-top: 4px;">
                <code>--dw-text-primary</code>
              </div>
              <div style="font-size: 12px; color: #64748b; margin-top: 2px;">
                Main content
              </div>
            </div>
          </div>
          
          <!-- Text Secondary -->
          <div>
            <div style="
              background: #ffffff;
              height: 120px;
              border-radius: 12px;
              border: 1px solid #e2e8f0;
              display: flex;
              align-items: center;
              justify-content: center;
              font-size: 24px;
              font-weight: 500;
              color: var(--dw-text-secondary);
            ">Aa</div>
            <div style="margin-top: 12px;">
              <strong>Secondary Text</strong>
              <div style="font-size: 12px; color: #64748b; margin-top: 4px;">
                <code>--dw-text-secondary</code>
              </div>
              <div style="font-size: 12px; color: #64748b; margin-top: 2px;">
                Supporting content
              </div>
            </div>
          </div>
          
          <!-- Text Disabled -->
          <div>
            <div style="
              background: #ffffff;
              height: 120px;
              border-radius: 12px;
              border: 1px solid #e2e8f0;
              display: flex;
              align-items: center;
              justify-content: center;
              font-size: 24px;
              font-weight: 500;
              color: var(--dw-text-disabled);
            ">Aa</div>
            <div style="margin-top: 12px;">
              <strong>Disabled Text</strong>
              <div style="font-size: 12px; color: #64748b; margin-top: 4px;">
                <code>--dw-text-disabled</code>
              </div>
              <div style="font-size: 12px; color: #64748b; margin-top: 2px;">
                Inactive content
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
        story: 'Use Primary for headings and important text, Secondary for body text and descriptions, and Disabled for inactive or placeholder text.',
      },
    },
  },
};
