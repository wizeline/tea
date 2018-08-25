import { TestWindow } from '@stencil/core/testing';
import { Icon } from './icon';

describe('wz-icon', () => {
  it('renders icon', async () => {
    const window = new TestWindow();
    const element = await window.load({
      components: [Icon],
      html: '<wz-icon icon="clear" />',
    });

    expect(element).toMatchSnapshot();
  });
});
