import { Toggle } from './toggle';
import { TestWindow } from '@stencil/core/testing';

describe('wz-toggle', () => {
  it('renders value', async () => {
    const window = new TestWindow();
    const element = await window.load({
      components: [Toggle],
      html: `
        <wz-toggle />
      `,
    });

    expect(element).toMatchSnapshot();
  });
});
