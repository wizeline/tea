import { Switch } from './switch';
import { TestWindow } from '@stencil/core/testing';

describe('wz-switch', () => {
  it('renders value', async () => {
    const window = new TestWindow();
    const element = await window.load({
      components: [Switch],
      html: `
        <wz-switch />
      `,
    });

    expect(element).toMatchSnapshot();
  });
});
